console.log("1");

function goToPage(pageUrl) {
  if ($(".selected").length > 0) {
    const a = $(".quiz-page-answer:eq(0)").is(".selected") ? "A" : "";
    const b = $(".quiz-page-answer:eq(1)").is(".selected") ? "B" : "";
    const c = $(".quiz-page-answer:eq(2)").is(".selected") ? "C" : "";
    const d = $(".quiz-page-answer:eq(3)").is(".selected") ? "D" : "";

    quizNo = location.href.split("/").pop()[4];
    localStorage.setItem(quizNo, a + b + c + d);
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

function goToQuizByPressingEnter(e) {
  //console.log(e);
  if (e.which === 13) {
    goToQuiz()
  }
  
}

$("body").on("click", ".quiz-page-answer", function () {
  $(this).toggleClass("selected")
})