$(function(){
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        pauseOnHover:false,
      });
      //counterup
        $('.counter').counterUp({
          delay: 10,
          time: 3000
      });

      //Item slider

        $('.item-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:false,
            pauseOnHover:false,

            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
            ]
          });
      /*Comment slider */
        $('.comment-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:true,
            prevArrow:".left",
            nextArrow:".right",
            pauseOnHover:false,
          });

      /*team slider*/

        $('.team-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:false,
            pauseOnHover:false,

            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
            ]

          });

          /*Navbar */


          $(window).scroll(function(){
            var trial = $(this).scrollTop()
            if( trial > 80 ){
              $(".navbar").addClass("sticky-nav")
            }
            else{
              $(".navbar").removeClass("sticky-nav")

            }

            if(trial > 200 ){
              $('.top-button').fadeIn(300)
            }
            else{
              $('.top-button').fadeOut(400)
            }
          })

          $(".top-button").click(function(){
            $("html,body").animate({scrollTop:0},1000)
          })

          
//scroll-spy & Smooth-scrolling
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 10
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 40;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });


  //Venobox

  new VenoBox({
    selector: '.venobox',
    spinner:'circle-fade',
  });


})
