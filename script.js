console.log("1");

function goToPage(pageUrl) {
  if ($(".selected").length > 0) {

    location.href = pageUrl
  }
}

function goToQuiz() {
  if ($("input").val().trim() !== "") {
    //localStorage.getItem("save")
    localStorage.clear();
    location.href = 'quiz1.html';
  }
}

$("body").on("click", ".quiz-page-answer", function () {
  $(this).toggleClass("selected")
})