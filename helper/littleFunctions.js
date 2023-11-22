function handleInFirstPage(currentPage, page_length, firstButton, prevButton, nextButton) {
    const isNotFirstPage = currentPage > 1;
    const isNotLastPage = currentPage < page_length;
    const isThirdPageOrMore = currentPage >= 3;
  
    firstButton.style.display = isNotFirstPage ? "inline" : "none";
    firstButton.style.opacity = isThirdPageOrMore ? "1" : "0";
    prevButton.disabled = !isNotFirstPage;
    nextButton.disabled = !isNotLastPage;
  }


function initializeButton(selector, innerHTML, isDisabled = false) {
  const button = document.querySelector(selector);
  button.innerHTML = innerHTML;
  button.disabled = isDisabled;
  return button;
}

export {handleInFirstPage, initializeButton};

