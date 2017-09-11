(($) => {

  var app = {
    box: () => {
      $('body').append(`
        <div class="viewport">
          <span id="t-width"></span> x <span id="t-height"></span>
        </div>
      `);
    },
    calculateDimensions: () => {
      let w = window.innerWidth;
      let h = window.innerHeight;
      $("#t-width").html(w);
      $("#t-height").html(h);
    },
    init: () => {
      app.box();
      app.sizer();
    },
    sizer: () => {
      app.calculateDimensions();
      app.toggleBox();
    },
    toggleBox: () => {
      $('.viewport').click(function(){
        $(this).toggleClass('inactive');
      });
    }
  };

  $(window).on('load', () => {
    app.init();  //c028
  });

  $(window).on('resize', () => {
    app.sizer();  //c028
  });

})(window.jQuery);
