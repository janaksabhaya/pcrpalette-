const lexical = require('./lexical.js');
const Syntax = require('./syntax.js');
const assert = require('./util/assert.js');
const _ = require('./util/underscore.js');

var valueRE = new RegExp('' + lexical.value.source, 'g');

module.exports = function (options) {
  options = _.assign({}, options);
  var filters = {};

  var _filterInstance = {
    render: function (output, scope) {
      var args = this.args.map(function (arg) {
        return Syntax.evalValue(arg, scope);
      });
      args.unshift(output);
      return this.filter.apply(null, args);
    },
    parse: function (str) {
      var match = lexical.filterLine.exec(str);
      assert(match, 'illegal filter: ' + str);

      var name = match[1];
      var argList = match[2] || '';
      var filter = filters[name];
      if (typeof filter !== 'function') {
        if (options.strict_filters) {
          throw new TypeError('undefined filter: ' + name);
        }
        this.name = name;
        this.filter = function (x) {
          return x;
        };
        this.args = [];
        return this;
      }

      var args = [];
      while ((match = valueRE.exec(argList.trim()))) {
        var v = match[0];
        var re = new RegExp(v + '\\s*:', 'g');
        var keyMatch = re.exec(match.input);
        var currentMatchIsKey = keyMatch && keyMatch.index === match.index;
        currentMatchIsKey ? args.push("'" + v + "'") : args.push(v);
      }

      this.name = name;
      this.filter = filter;
      this.args = args;

      return this;
    },
  };

  function construct(str) {
    var instance = Object.create(_filterInstance);
    return instance.parse(str);
  }

  function register(name, filter) {
    filters[name] = filter;
  }

  function clear() {
    filters = {};
  }

  return {
    construct: construct,
    register: register,
    clear: clear,
  };
};
