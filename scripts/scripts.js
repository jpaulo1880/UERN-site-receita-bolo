document.addEventListener("DOMContentLoaded", function () {
  const feedbackBox = document.getElementById("feedbackBox");
  const submitForm = document.getElementById("submitForm");
  const newsletter = document.getElementById("newsletter");
  const joinNewsletter = document.getElementById("joinNewsletter");
  const userFeedback = document.getElementById("userFeedback");
  const showUserFeedback = document.getElementById("showUserFeedback");

  submitForm.addEventListener("click", function () {
    if (feedbackBox.value.length === 0) {
      window.alert("Não é possível enviar uma mensagem vazia.");
    } else {
      window.alert("Mensagem enviada com sucesso!");
    }
  });
  joinNewsletter.addEventListener("click", function () {
    if (newsletter.value.length === 0) {
      window.alert("Não é possível enviar uma mensagem vazia.");
    } else {
      window.alert("Mensagem enviada com sucesso!");
    }
  });
  userFeedback.addEventListener("click", function () {
    if (showUserFeedback.style.display === "none") {
      showUserFeedback.style.display = "block";
    } else {
      showUserFeedback.style.display = "none";
    }
  });
});
