const _ = require('./util/underscore.js');

function whiteSpaceCtrl(tokens, options) {
  options = _.assign({ greedy: true }, options);
  var inRaw = false;

  tokens.forEach(function (token, i) {
    if (shouldTrimLeft(token, inRaw, options)) {
      trimLeft(tokens[i - 1], options.greedy);
    }

    if (token.type === 'tag' && token.name === 'raw') inRaw = true;
    if (token.type === 'tag' && token.name === 'endraw') inRaw = false;

    if (shouldTrimRight(token, inRaw, options)) {
      trimRight(tokens[i + 1], options.greedy);
    }
  });
}

function shouldTrimLeft(token, inRaw, options) {
  if (inRaw) return false;
  if (token.type === 'tag') return token.trim_left || options.trim_tag_left;
  if (token.type === 'value') return token.trim_left || options.trim_value_left;
}

function shouldTrimRight(token, inRaw, options) {
  if (inRaw) return false;
  if (token.type === 'tag') return token.trim_right || options.trim_tag_right;
  if (token.type === 'value') return token.trim_right || options.trim_value_right;
}

function trimLeft(token, greedy) {
  if (!token || token.type !== 'html') return;

  var rLeft = greedy ? /\s+$/g : /[\t\r ]*$/g;
  token.value = token.value.replace(rLeft, '');
}

function trimRight(token, greedy) {
  if (!token || token.type !== 'html') return;

  var rRight = greedy ? /^\s+/g : /^[\t\r ]*\n?/g;
  token.value = token.value.replace(rRight, '');
}

module.exports = whiteSpaceCtrl;
