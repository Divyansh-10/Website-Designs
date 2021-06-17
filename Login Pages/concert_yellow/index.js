$(".btn").click(() =>
{
  document.querySelector(".btn").classList.add("btn-click");

  setTimeout(() => {
    document.querySelector(".btn").classList.remove("btn-click")
  }, 200);
});
