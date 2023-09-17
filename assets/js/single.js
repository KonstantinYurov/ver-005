// Реализация работы липкого сайдбара START

/*
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".article-text__container");

if (sidebar && content) {
  const sidebarPosition = content.offsetTop - 100;

  const handleScroll = () => {
    if (window.pageYOffset >= sidebarPosition) {
      sidebar.classList.add("sidebar--fixed");
    } else {
      sidebar.classList.remove("sidebar--fixed");
    }
  };

  window.addEventListener("scroll", handleScroll);
}
*/
// Реализация работы липкого сайдбара END

// Реализация появления всплывающего окна с иконками шеринга в соцсети START

document.addEventListener("DOMContentLoaded", () => {
  const shareIcon = document.querySelector(".share-icon");
  const shareBlockSocial = document.querySelector(".share-block-social");
  const shareContainer = document.querySelector(".share-block__container");
  const body = document.body;

  if (shareIcon && shareBlockSocial && shareContainer && body) {
    shareIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      shareBlockSocial.classList.add("share-block-social--active");
      shareContainer.classList.add("share-block__container--hidden");
    });

    body.addEventListener("click", () => {
      shareBlockSocial.classList.remove("share-block-social--active");
      shareContainer.classList.remove("share-block__container--hidden");
    });

    shareBlockSocial.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
});

// Реализация появления всплывающего окна с иконками шеринга в соцсети END

// Реализация появления всплывающего окна с оповещением о копировании ссылки START

document.addEventListener("DOMContentLoaded", () => {
  const copyLinkElement = document.querySelector(".copy-link");
  const popupNotification = document.querySelector(".popup-notification");

  if (copyLinkElement && popupNotification) {
    copyLinkElement.addEventListener("click", () => {
      const currentUrl = window.location.href;

      const tempInput = document.createElement("input");
      document.body.appendChild(tempInput);
      tempInput.value = currentUrl;
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      popupNotification.classList.add("popup-notification--active");

      setTimeout(() => {
        popupNotification.classList.remove("popup-notification--active");
      }, 2600);
    });
  }
});

// Реализация появления всплывающего окна с оповещением о копировании ссылки END

// Реализация появления всплывающего окна для прокрутки страницы наверх START

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".popup-notification--up");

  if (popup) {
    window.addEventListener("scroll", function () {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY;
      const scrollPercentage =
        (currentScroll / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage >= 80) {
        popup.classList.add("popup-notification--up-active");
      } else {
        popup.classList.remove("popup-notification--up-active");
      }
    });

    const popupWrapper = document.querySelector(".popup-notification--up");
    if (popupWrapper) {
      popupWrapper.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }
});

// Реализация появления всплывающего окна с оповещением о копировании ссылки END
