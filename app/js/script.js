$(document).ready(function () {

  // fixed header on scroll
  let header = $('.header');
  let offset = header.offset().top;

  $(window).scroll(function(){
    if($(window).scrollTop() > offset){
      $(header).addClass('header-fixed');
    } else {
      $(header).removeClass('header-fixed');
    }
  })

  $(document).on("click", ".sidenav-show-btn", function (event) {
    event.stopPropagation();
    // By using event.stopPropagation(); within the button click event handlers, we prevent the click event from bubbling up to the $(document) handler. This way, clicking the buttons won't immediately trigger the $(document) click handler, and the sidebar should work as expected.
    sidenav.addClass("show");
  });

  $(document).on('click', ".sidebar-open-btn--ms", function(event){
    event.stopPropagation();
    sidenav.addClass('show');
  })

  $(document).on("click", ".sidenav-hide-btn", function () {
    sidenav.removeClass("show");
  });

  $(document).on("click", function (event) {
    if (!sidenav.is(event.target) && sidenav.has(event.target).length === 0) {
      sidenav.removeClass("show");
    }
  });

  // Currency options
  let currencyOptions = $(".currency-options");
  let currencyOptionsList = $(".currency-options-list");

  $(currencyOptions).click(function (event) {
    event.stopPropagation();
    $(currencyOptionsList).toggleClass("show");
    $(currencyOptionsList)
      .find(".currency-option")
      .each(function (index, optionElem) {
        $(optionElem).click(function () {
          let optionText = $(optionElem).find(".option-text").text();
          $(".selected.currency-option").find(".option-text").text(optionText);
        });
      });
  });

  $(document).on("click", function (event) {
    if (
      !currencyOptions.is(event.target) &&
      sidenav.has(event.target).length === 0
    ) {
      currencyOptionsList.removeClass("show");
    }
  });

  let shippingOptions = $(".shipping-options");
  let shippingOptionsList = $(".shipping-options-list");

  $(shippingOptions).click(function (event) {
    event.stopPropagation();
    $(shippingOptionsList).toggleClass("show");
    $(shippingOptionsList)
      .find(".shipping-option")
      .each(function (index, shippingElem) {
        $(shippingElem).click(function () {
          let shippingFlagUrl = $(shippingElem)
            .find(".option-img img")
            .attr("src");
          $(".selected.shipping-option")
            .find(".option-img img")
            .attr("src", shippingFlagUrl);
        });
      });
  });

  $(document).on("click", function (event) {
    if (
      !shippingOptions.is(event.target) &&
      sidenav.has(event.target).length === 0
    ) {
      shippingOptionsList.removeClass("show");
    }
  });

  // slick sliders
  $(".banner-slider").slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $(".offers-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev'><img class='slick-icon' src='./assets/icons/chevron_left.png' /></button>",
    nextArrow:
      "<button type='button' class='slick-next'><img class='slick-icon' src='./assets/icons/chevron_right.png' /></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".related-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev'><img class='slick-icon' src='./assets/icons/chevron_left.png' /></button>",
    nextArrow:
      "<button type='button' class='slick-next'><img class='slick-icon' src='./assets/icons/chevron_right.png' /></button>",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".saved-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev'><img class='slick-icon' src='./assets/icons/chevron_left.png' /></button>",
    nextArrow:
      "<button type='button' class='slick-next'><img class='slick-icon' src='./assets/icons/chevron_right.png' /></button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".display-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
    prevArrow:
      "<button type='button' class='slick-prev'><img class='slick-icon' src='./assets/icons/chevron_left.png' /></button>",
    nextArrow:
      "<button type='button' class='slick-next'><img class='slick-icon' src='./assets/icons/chevron_right.png' /></button>",
  });

  const rangeInput = $(".range-input input");
  const priceInput = $(".price-input input");
  const range = $(".slider .progress");
  const sidenav = $(".sidenav");
  const priceGap = 1000;

  priceInput.on("input", function (e) {
    let minPrice = parseInt(priceInput.eq(0).val());
    let maxPrice = parseInt(priceInput.eq(1).val());

    if (
      maxPrice - minPrice >= priceGap &&
      maxPrice <= rangeInput.eq(1).attr("max")
    ) {
      if ($(this).hasClass("input-min")) {
        rangeInput.eq(0).val(minPrice);
        range.css(
          "left",
          (minPrice / rangeInput.eq(0).attr("max")) * 100 + "%"
        );
      } else {
        rangeInput.eq(1).val(maxPrice);
        range.css(
          "right",
          100 - (maxPrice / rangeInput.eq(1).attr("max")) * 100 + "%"
        );
      }
    }
  });

  rangeInput.on("input", function (e) {
    let minVal = parseInt(rangeInput.eq(0).val());
    let maxVal = parseInt(rangeInput.eq(1).val());

    if (maxVal - minVal < priceGap) {
      if ($(this).hasClass("range-min")) {
        rangeInput.eq(0).val(maxVal - priceGap);
      } else {
        rangeInput.eq(1).val(minVal + priceGap);
      }
    } else {
      priceInput.eq(0).val(minVal);
      priceInput.eq(1).val(maxVal);
      range.css("left", (minVal / rangeInput.eq(0).attr("max")) * 100 + "%");
      range.css(
        "right",
        100 - (maxVal / rangeInput.eq(1).attr("max")) * 100 + "%"
      );
    }
  });

  $('.filt-head').each(function(index, filtHead){
    $(filtHead).click(function(){
      let filtBlock= $(this).parent();
      $(filtBlock).find('.filt-body').slideToggle();
    });
  });

  

  // filter tags pills
  const filterTagsList = $(".filter-tags-list");
  $(filterTagsList)
    .find(".tag-item")
    .each(function (index, tagItem) {
      $(tagItem)
        .find("button")
        .on("click", function (event) {
          $(tagItem).remove();
          checkFilterTagsList();
        });
    });

  const checkFilterTagsList = () => {
    if (!filterTagsList || $(filterTagsList).find(".tag-item").length == 0) {
      $(filterTagsList).find(".btn-clear-filters").addClass("hide");
    }
  };

  $(".btn-clear-filters").on("click", function () {
    $(filterTagsList)
      .find(".tag-item")
      .each(function (index, tagItem) {
        $(tagItem).remove();
      });
    checkFilterTagsList();
  });

  checkFilterTagsList();

  // product view toggle
  const productsBlockList = $(".products-block-list");

  if ($(productsBlockList).hasClass("products-gridview")) {
    $(".btn-gridview").addClass("active");
  }

  if ($(productsBlockList).hasClass("products-listview")) {
    $(".btn-listview").addClass("active");
  }

  $(".btn-gridview").on("click", function () {
    if ($(productsBlockList).hasClass("products-listview")) {
      $(productsBlockList).removeClass("products-listview");
    }
    $(productsBlockList).addClass("products-gridview");
  });

  $(".btn-listview").on("click", function () {
    if ($(productsBlockList).hasClass("products-gridview")) {
      $(productsBlockList).removeClass("products-gridview");
    }
    $(productsBlockList).addClass("products-listview");
  });

  // product preview
  const previewThumbnails = $(".preview-thumbnail .thumbnail-item");

  $(previewThumbnails).each(function (index, thumbnailItem) {
    $(thumbnailItem).click(function () {
      $(previewThumbnails).removeClass("active");
      $(this).addClass("active");
      let thumbanilItemUrl = $(this).find("img").attr("src");
      $(".preview-large").find("img").attr("src", thumbanilItemUrl);
    });
  });

  // product details tab
  const tabsBtns = $(".tabs-btns .tabs-btn");
  const tabsContents = $(".tabs-contents .tabs-content");
  let tabActiveBtn = "tabBtnOne";

  const showTargetContent = (targetId) => {
    $(tabsContents).each(function (index, tabContentElem) {
      if (tabContentElem.id === targetId) {
        $(tabContentElem).addClass("show");
      } else {
        $(tabContentElem).removeClass("show");
      }
    });
  };

  const initDetailsTabs = () => {
    $(tabsBtns).each(function (index, tabBtnElem) {
      if (tabBtnElem.id === tabActiveBtn) {
        $(tabBtnElem).addClass("active");
        let targetContentId = $(tabBtnElem).data("target");
        showTargetContent(targetContentId);
      }
    });
  };

  $(tabsBtns).each(function (index, tabBtnElem) {
    $(tabBtnElem).click(function () {
      let targetContentId = $(this).data("target");
      showTargetContent(targetContentId);
    });
  });

  initDetailsTabs();

  // cart actions
  const actionViewBtns = $(".btn-action-view");
  $(actionViewBtns).each(function (index, actionViewBtn) {
    $(actionViewBtn).click(function () {
      let cartActionsWrapper = $(actionViewBtn).next();
      $(cartActionsWrapper).toggleClass("show-flex");
    });
  });

  $(document).on("click", function (event) {
    if (
      !$(".cart-actions").is(event.target) &&
      $(".cart-actions").has(event.target).length === 0
    ) {
      $(".cart-actions-wrapper").removeClass("show-flex");
    }
  });
});

