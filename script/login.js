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

  // Verificar si el usuario ya ha iniciado sesión
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn) {
    alert("Ya has iniciado sesión. Serás redirigido a la página de inicio.");
    window.location.href = "Landing.html";
    return;
  }

  const createForm = () => {
    const form = document.createElement("form");
    form.action = "Landing.html";
    form.method = "get";

    const emailInput = createInputField("email", "email", "email", "Email");
    const passwordInput = createInputField(
      "password",
      "password",
      "password",
      "Password"
    );

    form.appendChild(emailInput);
    form.appendChild(passwordInput);

    const rememberMeCheckbox = createCheckbox(
      "remember",
      "remember",
      "Remember me"
    );

    const forgotPasswordLink = document.createElement("a");
    forgotPasswordLink.href = "#";
    forgotPasswordLink.textContent = "Forgot Password?";
    forgotPasswordLink.classList.add(
      "remember-forgot__forgot-password",
      "forgot-password"
    );

    form.appendChild(rememberMeCheckbox);
    form.appendChild(forgotPasswordLink);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const googleButton = createSocialButton("Google", "google");
    const facebookButton = createSocialButton("Facebook", "facebook");
    const appleButton = createSocialButton("Apple", "apple");

    buttonContainer.appendChild(googleButton);
    buttonContainer.appendChild(facebookButton);
    buttonContainer.appendChild(appleButton);

    form.appendChild(buttonContainer);

    const loginButton = document.createElement("button");
    loginButton.type = "button";
    loginButton.textContent = "Login";
    loginButton.classList.add("login-button");
    loginButton.addEventListener("click", login);

    form.appendChild(loginButton);

    document.getElementById("formContainer").appendChild(form);
  };

  const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Obtener la información del usuario almacenada
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      // Verificar si las credenciales coinciden
      if (email === parsedUser.email && password === parsedUser.password) {
        // Autenticación exitosa, marcar al usuario como iniciado de sesión
        localStorage.setItem("isLoggedIn", true);

        // Redirigir al usuario
        window.location.href = "Landing.html";
      } else {
        alert("Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.");
      }
    } else {
      alert("No hay información de usuario almacenada. Por favor, regístrate.");
    }
  };

  createForm();
};

window.onload = render;

