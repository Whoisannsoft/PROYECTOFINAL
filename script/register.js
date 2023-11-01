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

    const registerButton = document.createElement("button");
    registerButton.type = "submit";
    registerButton.textContent = "Register";
    registerButton.classList.add("create-account-button");
    form.appendChild(registerButton);

    document.getElementById("formContainer").appendChild(form);
  };

  createForm();
};

window.onload = render;
