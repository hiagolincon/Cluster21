$(document).ready(function() {
  var parent = $(".customTab .clickme a.activelink");
  var i = parent
    .parents(".clickme")
    .children("div")
    .children(".selected-tab");
  i.show();

  wow = new WOW({
    animateClass: "animated",
    offset: 100
  });
  wow.init();

  function slickify() {
    $(".customTab").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      mobileFirst: true,
      infinite: false,
      arrows: false,
      centerMode: true,
      // prevArrow: "<button type=\"button\" class=\"btn btn-red prev mx-auto\"><i class='fas fa-long-arrow-alt-left'></i></button>",
      // nextArrow: "<button type=\"button\" class=\"btn btn-red next mx-auto\"><i class='fas fa-long-arrow-alt-right'></i></button>",
      responsive: [
        {
          breakpoint: 900,
          settings: "unslick"
        }
      ]
    });
    $(".customTab").on("beforeChange", function(
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      var current = $(".customTab .clickme")[nextSlide];
      // $(".customTab a").removeClass("activelink");
      var tabLink = $(current).children("a");
      $(tabLink).trigger("click");
    });
  }

  slickify();
  $(window).scroll(function() {
    if (typeof $("#missao")[0] != "undefined") {
      var valores = [
        $("#missao").offset().top,
        $("#problema").offset().top,
        $("#solucao").offset().top,
        $("#modelo").offset().top,
        $("#mercado").offset().top,
        $("#concorrentes").offset().top,
        $("#tracao").offset().top,
        $("#visao").offset().top,
        $("#financas").offset().top
      ];
      for (let index = 0; index < valores.length; index++) {
        const element = valores[index];
        if ($(window).scrollTop() >= element - 70) {
          $("#stickySidebar li.current").removeClass("current");
          $($("#stickySidebar li")[index]).trigger("click");
        }
      }
      var valoresMenuTopo = [
        $("#pitch").offset().top,
        $("#sobre").offset().top,
        $("#equipe").offset().top,
        $("#duvida").offset().top
      ];
      for (let index = 0; index < valoresMenuTopo.length; index++) {
        const element = valoresMenuTopo[index];
        if ($(window).scrollTop() >= element - 70) {
          $("#menuOferta li.current").removeClass("current");
          $($("#menuOferta li")[index]).addClass("current");
        }
      }
    }
  });
  $(window).resize(function() {
    var $windowWidth = $(window).width();
    if ($windowWidth < 900) {
      slickify();
    }
    if (typeof $("#menuOferta")[0] != "undefined") {
      if ($windowWidth < 500) {
        $("#cardOferta").unstick();
        // $("#cardOferta").css({ display: "none" });
      }
    }
  });
  // Oferta interna
  // Countdown

  $(".tempoContainer").countdown("2020/03/29", function(event) {
    var totalHours = event.offset.totalDays * 24 + event.offset.hours;
    $(this).text(event.strftime(totalHours+" %M %S"));
  });

  if (typeof $("#menuOferta")[0] != "undefined") {
    jsSocials.setDefaults("twitter", {
      logo: "fab fa-twitter"
    });
    jsSocials.setDefaults("facebook", {
      logo: "fab fa-facebook-square"
    });
    jsSocials.setDefaults("whatsapp", {
      logo: "fab fa-whatsapp"
    });
    jsSocials.setDefaults("linkedin", {
      logo: "fab fa-linkedin"
    });
    $("#share").jsSocials({
      shares: ["twitter", "email", "whatsapp", "facebook", "linkedin"]
    });
    /*Menu oferta */
    $("#menuOferta").sticky({
      topSpacing: 0,
      zIndex: 9500,
      responsiveWidth: true,
      widthFromWrapper: true
    });
    $("#menuOferta").on("sticky-start", function() {
      $("#menuOferta").css({ visibility: "visible" });
    });
    $("#menuOferta").on("sticky-end", function() {
      $("#menuOferta").css({ visibility: "hidden" });
    });
    $("#menuOferta li:not(:nth-of-type(5n))").click(function() {
      $("#menuOferta li.current").removeClass("current");
      $(this).addClass("current");
    });
    $("#stickySidebar li").click(function() {
      $("#stickySidebar li.current").removeClass("current");
      $(this).addClass("current");
    });
    $("#stickySidebar").sticky({
      topSpacing: 80,
      zIndex: 9000,
      center: true,
      responsiveWidth: false,
      bottomSpacing: $("#localizacao").offset().top - $(window).height() + 250,
      widthFromWrapper: false
    });
    $("#stickySidebar").on("sticky-start", function() {
      $("#stickySidebar").css({ visibility: "visible" });
    });
    $("#stickySidebar").on("sticky-end", function() {
      $("#stickySidebar").css({ visibility: "hidden" });
    });
    // end menu oferta

    if ($(window).width() >= 768) {
      $("#cardOferta").sticky({
        topSpacing: 50,
        bottomSpacing:
          $("#localizacao").offset().top - $(window).height() + 250,
        zIndex: 9000,
        responsiveWidth: false,
        widthFromWrapper: true,
        center: true
      });
    }
  }

  $(function() {
    $(".chart").easyPieChart({
      size: 80,
      barColor: "#CF3736",
      scaleColor: false,
      lineWidth: 4,
      lineCap: "circle"
    });
  });

  $(".slide-depoimento").slick({
    prevArrow: $("#depoimentos_container .prev"),
    nextArrow: $("#depoimentos_container .next")
  });

  $(".p-freq").slick({
    slidesToShow: 3,
    initialSlide: 0,
    mobileFirst: true,
    slidesToScroll: 3,
    infinite: true,
    prevArrow: $("#duvida #faq-arrows div .prev"),
    nextArrow: $("#duvida #faq-arrows div .next"),
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $(".customTab a").click(function() {
    var parent = $(this)
      .parents(".customTab")
      .children("li")
      .children('a[data-tag="' + $(this).data("tag") + '"]');
    $(".customTab a").removeClass("activelink");
    $(".selected-tab").hide();
    var i = parent.parents(".clickme").children(".selected-tab");
    i.show();

    $(this).addClass("activelink");
    var tagid = $(this).data("tag");
    $(".list")
      .removeClass("active")
      .addClass("hide");
    $("#" + tagid)
      .addClass("active")
      .removeClass("hide");
  });

  $(".read-more").click(function() {
    var parent = $(this).parents(".card");
    var container = parent.children(".read-container");

    container.css({
      overflow: "auto"
    });
    parent.children(".gradient").remove();
  });

  $(".customTab .clickme").click(function(e) {
    var parent = $(this).children("a");
    $(".customTab a").removeClass("activelink");
    $(".selected-tab").hide();
    var i = parent
      .parents(".clickme")
      .children("div")
      .children(".selected-tab");
    i.show();
    $(parent).addClass("activelink");
    var tagid = $(parent).data("tag");

    $(".list")
      .removeClass("active")
      .addClass("hide");
    $("#" + tagid)
      .addClass("active")
      .removeClass("hide");
  });

  $(
    $($(".customTab .clickme .activelink").parents(".clickme")).children(
      ".selected-tab"
    )
  ).show();

  $(".slide-depoimento").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var current = $(".slide-depoimento .slick-slide")[currentSlide];
    $(".modalVideo2 iframe").attr("src", $(current).data("video"));
    $("#video img").attr("src", $(current).data("image"));
  });
});
