const eye = document.getElementById("univisible");
const hide = document.getElementById("invisible");
const loginbtn = document.querySelector(".login-button");
const password = document.querySelector("input-password");
const pass = document.getElementById("pass");
const userName = document.getElementById("user-name-input");

eye.onclick = function () {
  eye.classList.toggle("active");
  hide.classList.toggle("show");
   document.getElementById("pass").type = "text";
};

hide.onclick = function () {
  eye.classList.remove("active");

  hide.classList.remove("show");
  document.getElementById("pass").type = "password";
};

document.addEventListener("DOMContentLoaded", function () {
  var openSlideBtn = document.querySelector(".open-slide");
  var menuSlider = document.querySelector(".menu-slider");
  var slideNavbar = document.getElementById("slide-navbar");

  openSlideBtn.addEventListener("click", function () {
    var menuSliderRight = window
      .getComputedStyle(menuSlider)
      .getPropertyValue("right");
    if (menuSliderRight === "0px") {
      menuSlider.style.right = "-250px";
      slideNavbar.style.display = "none";
    } else {
      menuSlider.style.right = "0";
      slideNavbar.style.display = "block";
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".menu-slider") &&
      !event.target.closest(".open-slide") &&
      !event.target.closest("#slide-navbar")
    ) {
      menuSlider.style.right = "-250px";
      slideNavbar.style.display = "none";
    }
  });
});

loginbtn.addEventListener("click", (event) => {
  verifyUserName();
  verifyPassword();
});
function verifyPassword() {
  var pw = document.getElementById("pass").value;
  //check empty password field
  if (pw == "") {
    document.getElementById("message").innerHTML =
      "**Fill the password please!";
    return false;
  }

  //minimum password length validation
  if (pw.length < 8) {
    document.getElementById("message").innerHTML =
      "**Password length must be atleast 8 characters";
    return false;
  }

  //maximum length of password validation
  if (pw.length > 15) {
    document.getElementById("message").innerHTML =
      "**Password length must not exceed 15 characters";
    return false;
  } else {
    document.getElementById("message").innerHTML = "";
  }
}
//user-name
function verifyUserName() {
  var userName = document.getElementById("user-name-input").value;
  //check empty user field
  if (user == "") {
    document.getElementById("message1").innerHTML =
      "**Fill the UserName please!";
    return false;
  }

  //minimum user length validation
  if (user.length < 4) {
    document.getElementById("message1").innerHTML =
      "**UserNmae length must be atleast 4 characters";
    document.getElementById("message1").style.color = "#d70101";
  }

  if (user.length > 4) {
    document.getElementById("message1").innerHTML = "Done";
    document.getElementById("message1").style.color = "#96d701";
    return false;
  }
}

//  {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Something went wrong!",
//       footer: '<a href="./index.html">Why do I have this issue?</a>'
//     });
//   }
// };
