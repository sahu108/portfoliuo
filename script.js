document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMsg = document.getElementById("form-message");

  if (name.value && email.value && message.value) {
    formMsg.textContent = "Thank you, your message has been sent!";
    formMsg.style.color = "green";
    this.reset();
  } else {
    formMsg.textContent = "Please fill all fields!";
    formMsg.style.color = "red";
  }
});
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMsg = document.getElementById("form-message");

  if (name.value && email.value && message.value) {
    formMsg.textContent = "Thank you, your message has been sent!";
    formMsg.style.color = "green";
    this.reset();
  } else {
    formMsg.textContent = "Please fill all fields!";
    formMsg.style.color = "red";
  }
});
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMsg = document.getElementById("form-message");

  if (name.value && email.value && message.value) {
    formMsg.textContent = "Thank you, your message has been sent!";
    formMsg.style.color = "green";
    this.reset();
  } else {
    formMsg.textContent = "Please fill all fields!";
    formMsg.style.color = "red";
  }
});