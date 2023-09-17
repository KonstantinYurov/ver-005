// Реализация выпадающего подменю в десктоп версии START

document.addEventListener("DOMContentLoaded", () => {
  const subcategoryItem = document.querySelectorAll(".menu__subcategory");
  const categoryItem = document.querySelectorAll(".menu__category");
  const ulParent = document.querySelector("ul");

  function isMobileResolution() {
    return window.innerWidth <= 992;
  }

  subcategoryItem.forEach((item) => {
    const span = item.querySelector("span");

    span.addEventListener("click", () => {
      const isActive = item.classList.contains("menu__subcategory--active");
      subcategoryItem.forEach((subitem) =>
        subitem.classList.remove("menu__subcategory--active")
      );
      item.classList.toggle("menu__subcategory--active", !isActive);
    });
  });

  categoryItem.forEach((item) => {
    const span = item.querySelector("span");

    span.addEventListener("click", () => {
      if (isMobileResolution()) {
        const isActive = item.classList.contains("menu__category--active");
        categoryItem.forEach((catitem) =>
          catitem.classList.remove("menu__category--active")
        );
        item.classList.toggle("menu__category--active", !isActive);
      }
    });
  });

  ulParent.addEventListener("mouseleave", () => {
    if (!isMobileResolution()) {
      subcategoryItem.forEach((item) =>
        item.classList.remove("menu__subcategory--active")
      );
    }
  });
});

// Реализация выпадающего подменю в десктоп версии END

// Реализация появления и работы поисковой строки START

document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector(".search");
  const searchImage = document.querySelector(".search__image");
  const searchImageClose = document.querySelector(".search__image-close");
  const searchInput = document.querySelector(".search__input-container input");
  const searchTextCancel = document.querySelector(".search__text-cancel");
  const headerLogo = document.querySelector(".header-logo");
  const menuWrapper = document.querySelector(".menu__wrapper");

  searchImage.addEventListener("click", () => {
    search.classList.add("search--active");
    if (window.innerWidth <= 768) {
      headerLogo.classList.add("header-logo--hidden");
      menuWrapper.classList.add("menu__wrapper--hidden");
    }
  });

  searchImageClose.addEventListener("click", () => {
    search.classList.remove("search--active");
    headerLogo.classList.remove("header-logo--hidden");
    menuWrapper.classList.remove("menu__wrapper--hidden");
  });

  document.addEventListener("click", (event) => {
    if (!search.contains(event.target) && !searchInput.contains(event.target)) {
      if (searchInput.value.trim().length > 0) {
        searchInput.value = "";
        searchTextCancel.classList.remove("search__text-cancel--active");
      }
      search.classList.remove("search--active");
      headerLogo.classList.remove("header-logo--hidden");
      menuWrapper.classList.remove("menu__wrapper--hidden");
    }
  });

  searchInput.addEventListener("input", () => {
    if (searchInput.value.trim().length > 0) {
      searchTextCancel.classList.add("search__text-cancel--active");
    } else {
      searchTextCancel.classList.remove("search__text-cancel--active");
    }
  });

  searchTextCancel.addEventListener("click", () => {
    searchInput.value = "";
    searchTextCancel.classList.remove("search__text-cancel--active");
  });
});

// Реализация появления поиска END

// Реализация появления мобильного меню START

document.addEventListener("DOMContentLoaded", () => {
  const burgerImage = document.querySelector(".burger__image");
  const menuContainer = document.querySelector(".menu__container");
  const mobileClose = document.querySelector(".menu__mobile-close");

  burgerImage.addEventListener("click", () => {
    menuContainer.classList.add("menu__container--active");
    document.body.classList.add("body--scroll-hidden");
  });

  mobileClose.addEventListener("click", () => {
    menuContainer.classList.remove("menu__container--active");
    document.body.classList.remove("body--scroll-hidden");
  });
});

// Реализация появления мобильного меню END

// Реализация работы слайдера START

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");

    if (slides.length > 0 && window.innerWidth >= 1200) {
      const maxMultiplier = Math.ceil(slides.length - 4);
      let multiplier = 0;

      const updateSliderTransform = () => {
        const sliderContainer = slider.querySelector(
          ".slider__container-field"
        );
        const newMultiplier = Math.min(Math.max(multiplier, 0), maxMultiplier);
        const translation = `calc((-263px + (100vw - 1200px) * (-480 / 1920)) * ${newMultiplier})`;
        sliderContainer.style.transform = `translateX(${translation})`;
      };

      const updateSliderNavClasses = () => {
        const prevButton = slider.querySelector(".slider-nav--prev");
        const nextButton = slider.querySelector(".slider-nav--next");

        prevButton.classList.toggle("slider-nav--prev-active", multiplier > 0);
        nextButton.classList.toggle(
          "slider-nav--next-hidden",
          multiplier === maxMultiplier
        );
      };

      const onSliderNextClick = () => {
        if (multiplier < maxMultiplier) {
          multiplier += 1;
          updateSliderTransform();
          updateSliderNavClasses();
        }
      };

      const onSliderPrevClick = () => {
        if (multiplier > 0) {
          multiplier -= 1;
          updateSliderTransform();
          updateSliderNavClasses();
        }
      };

      const nextButton = slider.querySelector(".slider-nav--next");
      nextButton.addEventListener("click", onSliderNextClick);

      const prevButton = slider.querySelector(".slider-nav--prev");
      prevButton.addEventListener("click", onSliderPrevClick);

      updateSliderNavClasses();
    }
  });
});

/*
 Код, который работает только для первого найденного слайдера

 document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");

  if (slides.length > 0 && window.innerWidth >= 1200) {
    const maxMultiplier = Math.ceil(slides.length - 4);
    let multiplier = 0;

    const updateSliderTransform = () => {
      const sliderContainer = document.querySelector(
        ".slider__container-field"
      );
      const newMultiplier = Math.min(Math.max(multiplier, 0), maxMultiplier);
      const translation = `calc((-263px + (100vw - 1200px) * (-480 / 1920)) * ${newMultiplier})`;
      sliderContainer.style.transform = `translateX(${translation})`;
    };

    const updateSliderNavClasses = () => {
      const prevButton = document.querySelector(".slider-nav--prev");
      const nextButton = document.querySelector(".slider-nav--next");

      prevButton.classList.toggle("slider-nav--prev-active", multiplier > 0);
      nextButton.classList.toggle(
        "slider-nav--next-hidden",
        multiplier === maxMultiplier
      );
    };

    const onSliderNextClick = () => {
      if (multiplier < maxMultiplier) {
        multiplier += 1;
        updateSliderTransform();
        updateSliderNavClasses();
      }
    };

    const onSliderPrevClick = () => {
      if (multiplier > 0) {
        multiplier -= 1;
        updateSliderTransform();
        updateSliderNavClasses();
      }
    };

    const nextButton = document.querySelector(".slider-nav--next");
    nextButton.addEventListener("click", onSliderNextClick);

    const prevButton = document.querySelector(".slider-nav--prev");
    prevButton.addEventListener("click", onSliderPrevClick);

    updateSliderNavClasses();
  }
}); 

*/

// Реализация работы слайдера END

// Реализация работы кнопки "Ещё" START

document.addEventListener("DOMContentLoaded", () => {
  const MainButton = document.querySelector(".button--main");

  if (MainButton) {
    const postsElements = document.querySelectorAll(".posts");

    let counter = 6;

    function MainCheckScrollPosition() {
      const MainWindowHeight = window.innerHeight;
      const MainDocumentHeight = document.documentElement.scrollHeight;
      const MainScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      let MainRemainingHeight;

      if (window.innerWidth >= 320 && window.innerWidth <= 768) {
        MainRemainingHeight =
          MainDocumentHeight - (MainScrollTop + MainWindowHeight) - 700;
      } else {
        MainRemainingHeight =
          MainDocumentHeight - (MainScrollTop + MainWindowHeight) - 150;
      }

      if (MainRemainingHeight <= 0) {
        for (
          let i = counter;
          i < counter + 6 && i < postsElements.length;
          i++
        ) {
          postsElements[i].classList.add("posts--active");
        }

        counter += 6;
        if (counter >= postsElements.length) {
          counter = 6;
          MainButton.classList.add("button--main-hidden");
        }
      }
    }

    window.addEventListener("scroll", MainCheckScrollPosition);

    MainButton.addEventListener("click", () => {
      for (let i = counter; i < counter + 6 && i < postsElements.length; i++) {
        postsElements[i].classList.add("posts--active");
      }

      counter += 6;
      if (counter >= postsElements.length) {
        counter = 6;
        MainButton.classList.add("button--main-hidden");
      }
    });
  }
});

// Реализация работы кнопки "Ещё" END
