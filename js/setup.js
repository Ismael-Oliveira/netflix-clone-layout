window.addEventListener('load', function(){

    var switchShadow = document.querySelector('#switch-shadow');
    var body = document.querySelector('body');

    switchShadow.addEventListener('change', () => {
      body.classList.toggle('change-day');
    });

    new Glider(document.querySelector('.glider'), {
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [
          {
            // screens greater than >= 420px
            breakpoint: 420,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 3,
              slidesToScroll: 3,
              itemWidth: 150,
              duration: 0.25
            }
          },{
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 'auto',
              slidesToScroll: 'auto',
              itemWidth: 150,
              duration: 0.25
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              duration: 0.25
            }
          }
        ]
    });

    function changeToNight() {
      console.log(this);
      body.style = "background: #F4F4F4";
    }

});
