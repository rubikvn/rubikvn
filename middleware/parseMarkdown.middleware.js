var noMorePsExt = {
    type: 'output',
    filter: function (text, converter) {
        var re = /<\/?p[^>]*>/ig;
        text = text.replace(re, '');
        return text;
    }
};

module.exports = noMorePsExt