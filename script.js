var menubtn = document.getElementById("menubtn");
var navigation = document.getElementById("navigation");
var menu = document.getElementById("menu");

//   very important javascript
navigation.style.right = "-200px";
menubtn.onclick = function () {
  if (navigation.style.right == "-200px") {
    navigation.style.right = "0px";
    menu.src = "images/close.png";
  } else {
    navigation.style.right = "-200px";
    menu.src = "images/menu.png";
  }
};

// /////////////////

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});

// Enforce max 10 digits and numbers only for phone input
const phoneInput = document.querySelector('input[name="phone"]');
if (phoneInput) {
  phoneInput.addEventListener("input", function () {
    // Replace any non-numeric character
    this.value = this.value.replace(/[^0-9]/g, '');
    // Keep max 10 digits
    if (this.value.length > 10) {
      this.value = this.value.slice(0, 10);
    }
  });
}
