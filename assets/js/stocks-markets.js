// Реализация переключения таблиц с акциями по странам START

document.addEventListener("DOMContentLoaded", () => {
  const rusFilterElement = document.querySelector(
    ".stocks-filters-countries__items--rus"
  );

  if (rusFilterElement) {
    toggleStocks("russian-stocks", rusFilterElement);
  }
});

function toggleStocks(targetClass) {
  const otherElementsWithStocksShow = document.querySelectorAll(".show-stocks");
  otherElementsWithStocksShow.forEach((element) =>
    element.classList.remove("show-stocks")
  );

  const targetElement = document.querySelector("." + targetClass);
  targetElement.classList.add("show-stocks");
}

// Реализация переключения таблиц с акциями по странам END

// Реализация подцветки кнопок сортировки стран START

document.addEventListener("DOMContentLoaded", () => {
	const filterItemsContainer = document.querySelector(".stocks-filters-countries__items");
  
	if (!filterItemsContainer) {
	  return;
	}
  
	const filterItems = filterItemsContainer.querySelectorAll("li");
  
	if (filterItems.length > 0) {
	  filterItems[0].classList.add("stocks-filters-countries__items--active");
	}
  
	filterItems.forEach((item) => {
	  item.addEventListener("click", () => {
		filterItems.forEach((item) => {
		  item.classList.remove("stocks-filters-countries__items--active");
		});
  
		item.classList.add("stocks-filters-countries__items--active");
	  });
	});
  });

// Реализация подцветки кнопок сортировки старан END
