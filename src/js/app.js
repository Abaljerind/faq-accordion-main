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

  //   function untuk klik pertanyaan nya
  const questions = Array.from({ length: 4 }, (_, i) =>
    document.getElementById(`question${i + 1}`),
  );
  const answers = Array.from({ length: 4 }, (_, i) =>
    document.getElementById(`answer${i + 1}`),
  );
  const iconPluses = Array.from({ length: 4 }, (_, i) =>
    document.getElementById(`iconplus${i + 1}`),
  );
  const iconMinuses = Array.from({ length: 4 }, (_, i) =>
    document.getElementById(`iconminus${i + 1}`),
  );

  questions.forEach((question, i) => {
    question.addEventListener("click", () => {
      answers[i].classList.toggle("hidden");
      iconPluses[i].classList.toggle("hidden");
      iconMinuses[i].classList.toggle("hidden");
    });
  });
});
