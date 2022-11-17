console.log("version 2");
$("body").on("click", ".quiz-page-answer", function () {
  $(this).toggleClass("selected")
})