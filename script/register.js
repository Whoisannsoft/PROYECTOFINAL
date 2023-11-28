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

const isEmailUnique = (email) => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);
    return parsedUser.email !== email;
  }
  return true;
};

const createForm = () => {
  // Verificar si el usuario ya ha iniciado sesión
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn) {
    alert("Ya has iniciado sesión. Serás redirigido a la página de inicio.");
    window.location.href = "Landing.html";
    return;
  }

  const form = document.createElement("form");
  form.action = "Login.html";
  form.method = "get";

  const nameInput = createInputField("name", "name", "text", "Name");
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
  const passwordInput = createInputField(
    "password",
    "password",
    "password",
    "Password"
  );

  form.appendChild(nameInput);
  form.appendChild(genreSelect);
  form.appendChild(emailInput);
  form.appendChild(dobInput);
  form.appendChild(countryInput);
  form.appendChild(phoneInput);
  form.appendChild(passwordInput);

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
  registerButton.type = "button";
  registerButton.textContent = "Register";
  registerButton.classList.add("create-account-button");
  registerButton.addEventListener("click", register);

  form.appendChild(registerButton);

  document.getElementById("formContainer").appendChild(form);
};

const renderLogin = () => {
  const createLoginForm = () => {
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

    const loginButton = document.createElement("button");
    loginButton.type = "button";
    loginButton.textContent = "Login";
    loginButton.classList.add("login-button");
    loginButton.addEventListener("click", login);

    form.appendChild(loginButton);

    document.getElementById("loginContainer").appendChild(form);
  };

  const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Aquí deberías agregar la lógica de autenticación antes de redirigir al usuario
    // Por ejemplo, puedes comparar con la información almacenada
    // Si la autenticación es exitosa, redirigir al usuario, de lo contrario, mostrar un mensaje de error
    window.location.href = "Landing.html";
  };

  createLoginForm();
};

const register = () => {
  const name = document.getElementById("name").value;
  const genre = document.getElementById("genre").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  // Verificar si el correo electrónico es único
  if (!isEmailUnique(email)) {
    alert("El correo electrónico ya está en uso. Por favor, usa otro correo.");
    return;
  }

  // Guardar el nuevo usuario solo si el correo es único
  localStorage.setItem(
    "user",
    JSON.stringify({ name, genre, email, dob, country, phone, password })
  );

  alert("Registro exitoso. Redirigiendo a la página de inicio de sesión.");

  window.location.href = "Login.html";
};

const logout = () => {
  // No necesitas eliminar la marca de inicio de sesión aquí
};

// Llama a las funciones de renderización de ambas páginas
window.onload = () => {
  createForm();
  renderLogin();
};
