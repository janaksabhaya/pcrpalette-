const Liquid = require('..');
const Promise = require('any-promise');
const lexical = Liquid.lexical;
const groupRE = new RegExp('^(?:(' + lexical.value.source + ')\\s*:\\s*)?(.*)$');
const candidatesRE = new RegExp(lexical.value.source, 'g');
const assert = require('../src/util/assert.js');

module.exports = function (liquid) {
  liquid.registerTag('cycle', {
    parse: function (tagToken, remainTokens) {
      var _this = this;
      var match = groupRE.exec(tagToken.args);
      assert(match, 'illegal tag: ' + tagToken.raw);

      this.group = match[1] || '';
      var candidates = match[2];

      this.candidates = [];

      while ((match = candidatesRE.exec(candidates))) {
        _this.candidates.push(match[0]);
      }
      assert(this.candidates.length, 'empty candidates: ' + tagToken.raw);
    },

    render: function (scope, hash) {
      var _this = this;
      var group = Liquid.evalValue(_this.group, scope);
      var fingerprint = 'cycle:' + group + ':' + _this.candidates.join(',');

      var groups = (scope.opts.groups = scope.opts.groups || {});
      var idx = groups[fingerprint];

      if (idx === undefined) {
        idx = groups[fingerprint] = 0;
      }

      var candidate = _this.candidates[idx];
      idx = (idx + 1) % _this.candidates.length;
      groups[fingerprint] = idx;

      return Promise.resolve(Liquid.evalValue(candidate, scope));
    },
  });
};
