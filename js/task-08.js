const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = this.elements.email.value;
  const password = this.elements.password.value;

  // Перевірка введених даних
  if (email === "example@example.com" && password === "password") {
    alert("Success");
    // Тут ви можете виконати подальші дії, наприклад, перенаправити користувача на іншу сторінку
  } else {
    alert("Error");
  }
});
