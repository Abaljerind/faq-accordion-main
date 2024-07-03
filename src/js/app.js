// function untuk menampilkan dan menyembunyikan jawaban
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".icon-plus").forEach((icon) => {
    icon.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      document.getElementById(targetId).classList.remove("hidden");
      this.classList.add("hidden");
      this.nextElementSibling.classList.remove("hidden"); // disini elemen setelahnya adalah icon-minus
    });
  });

  document.querySelectorAll(".icon-minus").forEach((icon) => {
    icon.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      document.getElementById(targetId).classList.add("hidden");
      this.classList.add("hidden");
      this.previousElementSibling.classList.remove("hidden"); // disini elemen sebelumnya adalah icon-plus
    });
  });
});
