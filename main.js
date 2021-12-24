window.onload = () => {
  document.querySelectorAll(".pages-inner").forEach((pagesContainer) => {
    let rootContainer = pagesContainer.parentElement;
    let pageControls = rootContainer.children[1];

    let prevPage = pageControls.children[0];
    let currentPageIndicator = pageControls.children[1];
    let nextPage = pageControls.children[2];

    let pages = pagesContainer.children;
    let currentPage = pages[0];
    let currentPageNum = 1;

    let focused = false;

    function goToNextPage() {
      if (currentPage.nextElementSibling) {
        currentPage.classList.remove("current-page");
        currentPage = currentPage.nextElementSibling;
        currentPage.classList.add("current-page");

        currentPageNum++;
        currentPageIndicator.textContent = currentPageNum;
      } else {
        currentPage.classList.remove("current-page");
        currentPage = pages[0];
        currentPage.classList.add("current-page");

        currentPageNum = 1;
        currentPageIndicator.textContent = currentPageNum;
      }

      pagesContainer.style.height = currentPage.clientHeight + "px";
    }

    function goToPrevPage() {
      if (currentPage.previousElementSibling) {
        currentPage.classList.remove("current-page");
        currentPage = currentPage.previousElementSibling;
        currentPage.classList.add("current-page");

        currentPageNum--;
        currentPageIndicator.textContent = currentPageNum;
      } else {
        currentPage.classList.remove("current-page");
        currentPage = pages[pages.length - 1];
        currentPage.classList.add("current-page");

        currentPageNum = pages.length;
        currentPageIndicator.textContent = currentPageNum;
      }

      pagesContainer.style.height = currentPage.clientHeight + "px";
    }

    nextPage.addEventListener("click", goToNextPage);
    prevPage.addEventListener("click", goToPrevPage);

    rootContainer.addEventListener("mouseover", () => {
      focused = true;
    });

    rootContainer.addEventListener("mouseout", () => {
      focused = false;
    });

    window.addEventListener("keydown", (e) => {
      if (focused) {
        if (e.key === "ArrowRight") {
          goToNextPage();
        } else if (e.key === "ArrowLeft") {
          goToPrevPage();
        }
      }
    });

    // not really necessary
    window.addEventListener("resize", () => {
      pagesContainer.style.height = currentPage.clientHeight + "px";
    });

    pagesContainer.style.height = currentPage.clientHeight + "px";
  });
};
