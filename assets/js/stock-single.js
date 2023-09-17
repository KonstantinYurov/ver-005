// Реализация работы калькулятора START
document.addEventListener("DOMContentLoaded", () => {
  function formatNumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function updateValues() {
    const outputElement = document.querySelector(".form-profit__output");
    const sumElement = document.querySelector(".form-profit__sum-num");
    const inflationSumElement = document.querySelector(
      ".form-profit__inflation-sum-num"
    );

    if (!outputElement) {
      return;
    }

    const outputText = outputElement.textContent.trim();
    const outputValue = parseFloat(outputText.replace(/\s/g, ""));
    const formattedOutputValue = formatNumberWithSpaces(outputValue);

    const calculatedValue = "+" + outputValue * 0.5;
    const inflationValue = outputValue * -0.1;

    outputElement.textContent = formattedOutputValue;
    sumElement.textContent = formatNumberWithSpaces(calculatedValue);
    inflationSumElement.textContent = formatNumberWithSpaces(inflationValue);
  }

  const outputElement = document.querySelector(".form-profit__output");
  if (outputElement) {
    function observeOutputChanges() {
      const outputElement = document.querySelector(".form-profit__output");

      const observer = new MutationObserver(function (mutationsList) {
        for (const mutation of mutationsList) {
          if (
            mutation.type === "childList" ||
            mutation.type === "characterData"
          ) {
            updateValues();
          }
        }
      });

      observer.observe(outputElement, {
        subtree: true,
        characterData: true,
        childList: true,
      });
    }

    observeOutputChanges();
    updateValues();
  }
});

// Реализация работы калькулятора END

document.addEventListener("DOMContentLoaded", () => {
  const stockPopUpWrapper = document.querySelector(".stock-pop-up__wrapper");

  function handleScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY >= 700) {
      stockPopUpWrapper.classList.add("stock-pop-up--active");
    } else {
      stockPopUpWrapper.classList.remove("stock-pop-up--active");
    }

    if (documentHeight - (scrollY + windowHeight) <= 700) {
      stockPopUpWrapper.classList.remove("stock-pop-up--active");
    }
  }

  window.addEventListener("scroll", handleScroll);
});
