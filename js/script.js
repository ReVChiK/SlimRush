$(document).ready(function () {
  new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: false,
  }).init();

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
    nextArrow: '<img src="img/next.svg" alt="">',
    prevArrow: '<img src="img/prev.svg" alt="">',
  });

  $(".slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true,
          adaptiveHeight: true,
        },
      },
    ],
  });

  const mobileMenu = $(".header-mobile");
  const blurBg = $(".bg-blur");

  function showMobileMenu() {
    $("html").css("overflow-y", "hidden");
    mobileMenu.addClass("showPanel");
    blurBg.fadeIn();
  }

  function closeMobileMenu() {
    $("html").css("overflow-y", "scroll");
    mobileMenu.removeClass("showPanel");
    blurBg.fadeOut();
  }

  $("#show").click(function () {
    showMobileMenu();
  });

  $("#hide").click(function () {
    closeMobileMenu();
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".mobile-navigation").length) {
      closeMobileMenu();
    }
    e.stopPropagation();
  });

  $("a[href='#to_form']").on("click", function (event) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".toForm").offset().top,
      },
      1000
    );
  });

  $(".header-mobile a[href='#to_form']").on("click", function (event) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".toForm").offset().top,
      },
      1000
    );
    closeMobileMenu();
  });

  $("#openModalForm").click(function () {
    $(".modal-form").fadeIn();
  });

  $(".close-modal").click(function () {
    $(".modal-form").fadeOut();
  });

  let block_show = false;

  function scrollTracking() {
    if (block_show) {
      return false;
    }

    let wt = $(window).scrollTop();
    let wh = $(window).height();
    let et = $(".statistic").offset().top;
    let eh = $(".statistic").outerHeight();
    let dh = $(document).height();

    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
      block_show = true;

      setTimeout(startProgress1, 400);
      setTimeout(startProgress2, 600);
      setTimeout(startProgress3, 800);
      setTimeout(startProgress4, 1000);
      setTimeout(startProgress5, 1200);
    }
  }

  function startProgress1() {
    counterInit1(0, 95);
  }

  function startProgress2() {
    counterInit2(0, 98);
  }

  function startProgress3() {
    counterInit3(0, 98);
  }

  function startProgress4() {
    counterInit4(0, 97);
  }

  function startProgress5() {
    counterInit5(0, 94);
  }

  $(window).scroll(function () {
    scrollTracking();
  });
  $(document).ready(function () {
    scrollTracking();
  });

  const progress1 = $(".progressbar1 .progress");
  const progress2 = $(".progressbar2 .progress");
  const progress3 = $(".progressbar3 .progress");
  const progress4 = $(".progressbar4 .progress");
  const progress5 = $(".progressbar5 .progress");

  function counterInit1(fValue, lValue) {
    var counter_value1 = parseInt($(".counter1").text());
    counter_value1++;

    if (counter_value1 >= fValue && counter_value1 <= lValue) {
      $(".counter1").text(counter_value1 + "%");
      progress1.css({ width: counter_value1 + "%" });

      setTimeout(function () {
        counterInit1(fValue, lValue);
      }, 50);
    }
  }
  function counterInit2(fValue, lValue) {
    var counter_value2 = parseInt($(".counter2").text());
    counter_value2++;

    if (counter_value2 >= fValue && counter_value2 <= lValue) {
      $(".counter2").text(counter_value2 + "%");
      progress2.css({ width: counter_value2 + "%" });

      setTimeout(function () {
        counterInit2(fValue, lValue);
      }, 50);
    }
  }
  function counterInit3(fValue, lValue) {
    var counter_value3 = parseInt($(".counter3").text());
    counter_value3++;

    if (counter_value3 >= fValue && counter_value3 <= lValue) {
      $(".counter3").text(counter_value3 + "%");
      progress3.css({ width: counter_value3 + "%" });

      setTimeout(function () {
        counterInit3(fValue, lValue);
      }, 50);
    }
  }
  function counterInit4(fValue, lValue) {
    var counter_value4 = parseInt($(".counter4").text());
    counter_value4++;

    if (counter_value4 >= fValue && counter_value4 <= lValue) {
      $(".counter4").text(counter_value4 + "%");
      progress4.css({ width: counter_value4 + "%" });

      setTimeout(function () {
        counterInit4(fValue, lValue);
      }, 50);
    }
  }
  function counterInit5(fValue, lValue) {
    var counter_value1 = parseInt($(".counter5").text());
    counter_value1++;

    if (counter_value1 >= fValue && counter_value1 <= lValue) {
      $(".counter5").text(counter_value1 + "%");
      progress5.css({ width: counter_value1 + "%" });

      setTimeout(function () {
        counterInit5(fValue, lValue);
      }, 50);
    }
  }
});
