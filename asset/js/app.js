$(".cate_choices").click(function(){
    if ($(".choices_list").css("display","none")) {
        $(".choices_list").slideDown();
    }
  });
  $(".cate_list .list_item ").click(function (e) {
    e.stopPropagation();
    $(".choices_list").hide();
    $(".choices_inner").html($(this).find("a").html()
    );
  })
  $('.slide_banner').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:1500,
    speed: 300,
    margin:16,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  });
  $('.sp_noi_bat_list').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:1500,
    speed: 300,
    margin:16,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: false,
            nextArrow: false,
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: false,
              nextArrow: false,
            }
          },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: false,
    nextArrow: false,
          }
        }
        
      ]
  });
  $('.sp_list_item_mb').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:1500,
    speed: 300,
    margin:16,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: false,
            nextArrow: false,
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: false,
              nextArrow: false,
            }
          },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
          }
        }
        
      ]
  });
  

  $('.intro_slide').slick({
    dots: false,
    autoplay:true,
    autoplaySpeed:500,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]
  });
  $('.list_services').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]
  });
  $('.cate_img_list').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:1000,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        
      ]
  });
  $('.news_list').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:1000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        
      ]
  });
  $('.list_topic').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
        
      ]
  });

  // change img
  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-single",
    dots: false,
    focusOnSelect: true
  });

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      document.querySelector(".navbar_humberger").style.top = "-1px";
      document.querySelector(".navbar_humberger").style.position = "fixed";
    }else{
      document.querySelector(".navbar_humberger").style.position = "relative";
    }
  }