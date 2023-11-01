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

  const createCheckbox = (id, name, labelText) => {
    const checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("input-container");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;
    checkbox.name = name;
    checkbox.classList.add("remember-forgot__checkbox");

    const label = document.createElement("label");
    label.for = id;
    label.textContent = labelText;
    label.classList.add("remember-forgot__label");

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);

    return checkboxContainer;
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
    form.action = "Landing.html";
    form.method = "get";

    const usernameInput = createInputField(
      "username",
      "username",
      "text",
      "Username"
    );
    const passwordInput = createInputField(
      "password",
      "password",
      "password",
      "Password"
    );

    const rememberMeCheckbox = createCheckbox(
      "remember",
      "remember",
      "Remember me"
    );

    const loginButton = document.createElement("button");
    loginButton.type = "submit";
    loginButton.textContent = "Login";
    loginButton.classList.add("login-button");

    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    form.appendChild(rememberMeCheckbox);
    form.appendChild(loginButton);

    document.getElementById("formContainer").appendChild(form);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const googleButton = createSocialButton("Google", "google");
    const facebookButton = createSocialButton("Facebook", "facebook");
    const appleButton = createSocialButton("Apple", "apple");

    const forgotPasswordLink = document.createElement("a");
    forgotPasswordLink.href = "#";
    forgotPasswordLink.textContent = "Forgot Password?";
    forgotPasswordLink.classList.add(
      "remember-forgot__forgot-password",
      "forgot-password"
    );

    buttonContainer.appendChild(googleButton);
    buttonContainer.appendChild(facebookButton);
    buttonContainer.appendChild(appleButton);
    buttonContainer.appendChild(forgotPasswordLink);

    document.getElementById("formContainer").appendChild(buttonContainer);
  };

  createForm();
};

window.onload = render;
