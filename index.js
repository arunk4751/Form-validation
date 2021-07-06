let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let Cpassword = document.getElementById("Cpassword");
let formCon = document.querySelectorAll(".form-control");

formCon.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.remove("sucess");
    element.classList.remove("error");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  Validate();
});

function sendData(count, sRate) {
  if (count === sRate) {
    swal("Good job!", "Registration Complete", "success");
  }
}

function formSucessMsg() {
  let count = formCon.length - 1;
  for (let i = 0; i < formCon.length; i++) {
    if (formCon[i].className == "form-control sucess") {
      let sRate = i;
      console.log(sRate);
      sendData(count, sRate);
    } else {
      return false;
    }
  }
}

function isEmail(emailVal) {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;

  let dot = emailVal.indexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
}

let Validate = () => {
  let usernameVal = username.value.trim();
  let emailVal = email.value.trim();
  let phoneVal = phone.value.trim();
  let passwordVal = password.value.trim();
  let CpasswordVal = Cpassword.value.trim();
  console.log(CpasswordVal, passwordVal);
  if (usernameVal === "") {
    setErrorMsg(username, "username can't be empty");
  } else if (usernameVal.length <= 3) {
    setErrorMsg(username, "username is too short");
  } else {
    setSuccesMsg(username);
  }

  if (emailVal === "") {
    setErrorMsg(email, "E-mail can't be empty");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "username is too short");
  } else {
    setSuccesMsg(email);
  }

  if (phoneVal === "") {
    setErrorMsg(phone, "phone number can't be empty");
  } else if (phoneVal.length !== 10) {
    setErrorMsg(phone, "phone number must be 10 digit");
  } else {
    setSuccesMsg(phone);
  }
  if (passwordVal === "") {
    setErrorMsg(password, "password can't be empty");
  } else if (passwordVal.length <= 6) {
    setErrorMsg(password, "password must be 6 character");
  } else {
    setSuccesMsg(password);
  }
  if (CpasswordVal === "") {
    setErrorMsg(Cpassword, "password can't be empty");
  } else if (passwordVal !== CpasswordVal) {
    setErrorMsg(Cpassword, "password not match");
  } else {
    setSuccesMsg(Cpassword);
  }

  formSucessMsg();
};

function setErrorMsg(input, errorMsg) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  formControl.classList.add("error");
  small.innerText = errorMsg;
}

function setSuccesMsg(input) {
  let formControl = input.parentElement;
  formControl.classList.add("sucess");
}
