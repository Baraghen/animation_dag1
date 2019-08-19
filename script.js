anime({
    targets: '.row1 .box',
    translateX: 270,
    opacity: [0,1],
    delay: function(el, i, l) {
        return i * 100;
    },
    endDelay: function(el, i, l) {
        return (l - i) * 100;
    }
});
anime({
    targets: '.row2 .box',
    translateX: 270,
    opacity: [0,1],
    delay: function(el, i, l) {
        return i * 100;
    },
    endDelay: function(el, i, l) {
        return (l - i) * 100;
    }
});
anime({
    targets: '.row3 .box',
    translateX: 270,
    opacity: [0,1],
    delay: function(el, i, l) {
        return i * 100;
    },
    endDelay: function(el, i, l) {
        return (l - i) * 100;
    }
});
anime({
    targets: '.row5 .box',
    translateX: 270,
    opacity: [0,1],
    delay: function(el, i, l) {
      return i * 100;
    },
    endDelay: function(el, i, l) {
      return (l - i) * 100;
    }
  });