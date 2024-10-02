const filterBtn = document.querySelector(".filter-btn");
const closeFilterBtn = document.querySelector(".close-filter i");

filterBtn?.addEventListener("click", function () {
  document.querySelector(".filter-layout")?.classList.remove("hide");
  document
    .querySelector(".form-filter")
    ?.classList.add("form-filter-animation");
});

closeFilterBtn.addEventListener("click", function () {
  document.querySelector(".filter-layout")?.classList.add("hide");
  document
    .querySelector(".form-filter")
    ?.classList.remove("form-filter-animation");
});

document
  .querySelector(".filter-layout")
  .addEventListener("click", function (event) {
    const formFilter = document.querySelector(".form-filter");
    if (formFilter && !formFilter.contains(event.target)) {
      document.querySelector(".filter-layout")?.classList.add("hide");
      document
        .querySelector(".form-filter")
        ?.classList.remove("form-filter-animation");
    }
  });


  