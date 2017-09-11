(($) => {

  var app = {

    init: () => {
      app.isWorking();
    },

    isWorking: () => {
      console.log(`The JS file 'main.js' is properly linked to 'index.html'.`);
    }

  };

  $(window).on('load', () => {
    app.init();
  });

})(window.jQuery);
