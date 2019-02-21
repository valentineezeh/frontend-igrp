//Select the input tags
let phoneNum = document.getElementById("phoneNum");
let passW = document.getElementById("password");
let myBtn = document.getElementById("myBtn");

//select error tags

let phoneError = document.getElementById("phoneError");
let passError = document.getElementById("passwordError");

//Validate form
const validationCheck = () => {
  if (!phoneNum.value) {
    phoneError.innerHTML = "Please input phone number";
    phoneNum.setAttribute("style", "border: 3px solid red");
  }

  if (!passW.value) {
    passError.innerHTML = "Please input password";
    passW.setAttribute("style", "border: 3px solid red");
  }
};

const remError = (input, inputError) => {
  inputError.setAttribute("style", "display: none;");
  input.setAttribute("style", "border: 1px solid #dddddd");
};

const login = () => {
  let superloginUrl = "http://localhost:9000/api/superLogin";
  //insert values into the req.body

  const body = {
    phoneNumber: phoneNum.value,
    password: passW.value
  };

  fetch(superloginUrl, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        // localStorage.setItem("token", data.token);
        // localStorage.setItem("user", JSON.stringify(data.user));

        window.location.href = "dashboard.html";
      }
    })
    .catch(err => {
      console.log(err);
    });
};

myBtn.onclick = e => {
  e.preventDefault();
  validationCheck();
  if (phoneNum.value && passW.value) {
    login();
  }
};

// myBtn.addEventListener("click", login());

phoneNum.onkeydown = () => {
  remError(phoneNum, phoneError);
};

passW.onkeydown = () => {
  remError(passW, passError);
};

// alert("hey");

// let him = "hello";

// console.log(him);

//GET ALL AGENTS

//select the a element for agents

const allAgents = document.querySelector("#agent");

const showAgent = () => {
  const allAgentUrl = "http://localhost:9000/api/agents";

  fetch(allAgentUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      window.location.href = "agent.html";
    });
};

function al() {
  alert("her");
}
allAgents.addEventListener("click", showAgent);
