// Реализация работы кнопки "Ещё" на странице категории START

document.addEventListener("DOMContentLoaded", () => {
  const archiveButton = document.querySelector(".button--archive");

  if (archiveButton) {
    const postCategoryLongElements = document.querySelectorAll(
      ".post-category--long"
    );

    let counter = 10;

    function checkScrollPosition() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      let remainingHeight;

      if (window.innerWidth >= 320 && window.innerWidth <= 768) {
        remainingHeight = documentHeight - (scrollTop + windowHeight) - 700;
      } else {
        remainingHeight = documentHeight - (scrollTop + windowHeight) - 150;
      }

      if (remainingHeight <= 0) {
        for (
          let i = counter;
          i < counter + 10 && i < postCategoryLongElements.length;
          i++
        ) {
          postCategoryLongElements[i].classList.add(
            "post-category--long-active"
          );
        }

        counter += 10;
        if (counter >= postCategoryLongElements.length) {
          counter = 10;
          archiveButton.classList.add("button--archive-hidden");
        }
      }
    }

    window.addEventListener("scroll", checkScrollPosition);

    archiveButton.addEventListener("click", () => {
      for (
        let i = counter;
        i < counter + 10 && i < postCategoryLongElements.length;
        i++
      ) {
        postCategoryLongElements[i].classList.add("post-category--long-active");
      }

      counter += 10;
      if (counter >= postCategoryLongElements.length) {
        counter = 10;
        archiveButton.classList.add("button--archive-hidden");
      }
    });
  }
});

// Реализация работы кнопки "Ещё" на странице категории END
