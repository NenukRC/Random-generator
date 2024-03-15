
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
function show() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("showimg").src =
        "https://static.thenounproject.com/png/777494-200.png";
    } else {
      x.type = "password";
      document.getElementById("showimg").src =
        "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
    }
  }