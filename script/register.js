const render = () => {
  const createInputField = (id, name, type, placeholder) => {
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = name;
    input.required = true;
    input.placeholder = placeholder;
    input.classList.add("input-container__input");
    return input;
  };

  const createSelectField = (id, name) => {
    const select = document.createElement("select");
    select.id = id;
    select.name = name;
    select.required = true;
    select.classList.add("input-container__select");

    const options = ["Male", "Female"];
    for (const optionText of options) {
      const option = document.createElement("option");
      option.value = optionText.toLowerCase();
      option.textContent = optionText;
      select.appendChild(option);
    }

    return select;
  };

  const createSocialButton = (text, className) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add(
      "button-container__social-button",
      "social-button",
      className
    );
    return button;
  };

  const createForm = () => {
    const form = document.createElement("form");
    form.action = "Login.html";
    form.method = "get";

    const nameInput = createInputField("name", "name", "text", "Username");
    const genreSelect = createSelectField("genre", "genre");
    const emailInput = createInputField("email", "email", "email", "Email");
    const dobInput = createInputField("dob", "dob", "date", "Date of Birth");
    const countryInput = createInputField(
      "country",
      "country",
      "text",
      "Country"
    );
    const phoneInput = createInputField("phone", "phone", "tel", "Phone");

    form.appendChild(nameInput);
    form.appendChild(genreSelect);
    form.appendChild(emailInput);
    form.appendChild(dobInput);
    form.appendChild(countryInput);
    form.appendChild(phoneInput);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const googleButton = createSocialButton("Google", "google");
    const facebookButton = createSocialButton("Facebook", "facebook");
    const appleButton = createSocialButton("Apple", "apple");

    buttonContainer.appendChild(googleButton);
    buttonContainer.appendChild(facebookButton);
    buttonContainer.appendChild(appleButton);

    form.appendChild(buttonContainer);

    const registerButton = document.createElement("button");
    registerButton.type = "submit";
    registerButton.textContent = "Register";
    registerButton.classList.add("create-account-button");

    form.appendChild(registerButton);

    document.getElementById("formContainer").appendChild(form);
  };

  createForm();

  const alreadyAccountText = document.createElement("p");
  alreadyAccountText.textContent = "Already have an account?";
  alreadyAccountText.classList.add(
    "button-container__already-account",
    "already-account"
  );

  const needHelpText = document.createElement("p");
  needHelpText.textContent = "Need help?";
  needHelpText.classList.add("button-container__need-help", "need-help");

  const buttonContainer = document.querySelector(".button-container");
  buttonContainer.appendChild(alreadyAccountText);
  buttonContainer.appendChild(needHelpText);
};

window.onload = render;
