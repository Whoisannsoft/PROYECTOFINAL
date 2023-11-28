document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");

  const header = document.createElement("header");
  header.classList.add("header");

  const headerLeft = document.createElement("section");
  headerLeft.classList.add("header__left");

  const logo = document.createElement("div");
  logo.classList.add("header__logo");
  const logoImage = document.createElement("img");
  logoImage.setAttribute("src", "img/IconoH.png");
  logoImage.setAttribute("alt", "Logo");
  logo.appendChild(logoImage);

  const titleLink = document.createElement("a");
  titleLink.setAttribute("href", "Landing.html");
  titleLink.classList.add("header__title");
  titleLink.textContent = "PLANT DEFENDERS";

  const navList = document.createElement("ul");
  navList.classList.add("header__nav");

  const navItems = [
    {
      text: "About Us",
      dropdown: true,
      dropdownContent: {
        obj1: {
          imageSrc: "img/Sth.png",
          title: "-Mastermind-",
          description:
            " Meet the creative force behind this page: Our fearless creator, an inquisitive orange cat with an unyielding passion for Plants vs. Zombies. By day, a virtual zombie hunter; bynight, the strategic mind shaping every tip you find here. Getready to explore their insights and uncover the wisdom they'vegathered to help you master the game. Welcome to a world ofPlants vs. Zombies, guided by the ingenuity of Seth",
        },
        obj2: {
         
        },
      },
    },
    { text: "Contact Us", link: "Contactus.html" },
    { text: "Botanica", link: "Botanica.html" },
    { text: "Profile", link: "Profile.html" },
  ];

  navItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("header__nav-item");

    if (item.dropdown) {
      const dropdown = document.createElement("div");
      dropdown.classList.add("dropdown");

      const dropdownButton = document.createElement("button");
      dropdownButton.classList.add("dropdown__button");
      dropdownButton.textContent = item.text;

      const dropdownContent = document.createElement("div");
      dropdownContent.classList.add("dropdown__content");
      dropdownContent.style.display = "none";

      if (item.dropdownContent) {
        const image = document.createElement("img");
        image.setAttribute("src", item.dropdownContent.obj1.imageSrc);
        image.setAttribute("alt", "Dropdown Image");

        const title = document.createElement("div");
        title.classList.add("dropdown__title");
        title.textContent = item.dropdownContent.obj1.title;

        const description = document.createElement("p");
        description.textContent = item.dropdownContent.obj1.description;

        const image2 = document.createElement("img");
        image2.setAttribute("src", item.dropdownContent.obj2.imageSrc);
        image2.setAttribute("alt", "Dropdown Image");

        const title2 = document.createElement("div");
        title2.classList.add("dropdown__title");
        title2.textContent = item.dropdownContent.obj2.title;

        const description2 = document.createElement("p");
        description2.textContent = item.dropdownContent.obj2.description;

        dropdownContent.appendChild(image);
        dropdownContent.appendChild(title);
        dropdownContent.appendChild(description);

        dropdownContent.appendChild(image2);
        dropdownContent.appendChild(title2);
        dropdownContent.appendChild(description2);
      }

      dropdown.appendChild(dropdownButton);
      dropdown.appendChild(dropdownContent);

      if (item.text === "About Us") {
        dropdownButton.addEventListener("click", function () {
          dropdownContent.style.display =
            dropdownContent.style.display === "none" ? "block" : "none";
        });
      }

      listItem.appendChild(dropdown);
    } else {
      const link = document.createElement("a");
      link.setAttribute("href", item.link);
      link.textContent = item.text;
      listItem.appendChild(link);
    }

    navList.appendChild(listItem);
  });

  const headerRight = document.createElement("nav");
  headerRight.classList.add("header__nav");

  const navListRight = document.createElement("ul");
  navListRight.classList.add("header__nav-list");

  const navItemsRight = [
    { text: "Log In", link: "Login.html", class: "header__login" },
    { text: "Register", link: "Register.html", class: "header__register" },
  ];

  navItemsRight.forEach((item) => {
    const listItemRight = document.createElement("li");
    listItemRight.classList.add("header__nav-item");

    const linkRight = document.createElement("a");
    linkRight.setAttribute("href", item.link);
    linkRight.textContent = item.text;
    if (item.class) {
      linkRight.classList.add(item.class);
    }

    listItemRight.appendChild(linkRight);
    navListRight.appendChild(listItemRight);
  });

  const searchContainer = document.createElement("li");
  searchContainer.classList.add("header__nav-item", "header__search");

  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Search");
  searchInput.classList.add("header__nav-item", "header__search-input");

  const searchButton = document.createElement("a");
  searchButton.setAttribute("href", "buscador.html");
  searchButton.textContent = "Buscar";
  searchButton.classList.add("header__nav-item", "header__search-button");

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);

  headerLeft.appendChild(logo);
  headerLeft.appendChild(titleLink);
  headerLeft.appendChild(navList);

  headerRight.appendChild(searchContainer);
  headerRight.appendChild(navListRight);

  header.appendChild(headerLeft);
  header.appendChild(headerRight);

  body.insertBefore(header, body.firstChild);











  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    const user = JSON.parse(storedUser);

    const main = document.createElement("main");
    main.className = "main";

    const cornerImage1 = document.createElement("section");
    cornerImage1.className = "main__corner-image main__corner-image--top-left";
    const image1 = document.createElement("img");
    image1.src = "img/ob4.png";
    image1.alt = "Image 1";
    image1.className = "main__image";
    cornerImage1.appendChild(image1);
    main.appendChild(cornerImage1);

    const cornerImage2 = document.createElement("section");
    cornerImage2.className = "main__corner-image main__corner-image--top-right";
    const image2 = document.createElement("img");
    image2.src = "img/ob5.png";
    image2.alt = "Image 2";
    image2.className = "main__image";
    cornerImage2.appendChild(image2);
    main.appendChild(cornerImage2);

    const personalInfo = document.createElement("div");
    personalInfo.className = "main__personal-info";
    const title = document.createElement("h1");
    title.className = "main__title";
    title.textContent = "Información Personal";
    personalInfo.appendChild(title);

    const pInfo = document.createElement("p");
    pInfo.innerHTML = `
      Nombre: ${user.name}.
      Edad: ${user.age} años.
      Sexo: ${user.genre}.
      Nacionalidad: ${user.country}.
      Fecha de Nacimiento: ${user.dob}.
      Correo Electrónico: ${user.email}
      Teléfono: ${user.phone}
    `;
    personalInfo.appendChild(pInfo);

    main.appendChild(personalInfo);

    const footer = document.createElement("footer");

    const favorites = document.createElement("section");
    favorites.className = "main__favorites";
    const subtitle = document.createElement("h2");
    subtitle.className = "main__subtitle";
    subtitle.textContent = "Favoritos";
    favorites.appendChild(subtitle);

    const favoriteImages = document.createElement("div");
    favoriteImages.className = "main__favorite-images";
    const favImage1 = document.createElement("img");
    favImage1.src = "img/fav1.png";
    favImage1.alt = "Imagen 1";
    favImage1.className = "main__image";
    favoriteImages.appendChild(favImage1);
    const favImage2 = document.createElement("img");
    favImage2.src = "img/fav2.png";
    favImage2.alt = "Imagen 2";
    favImage2.className = "main__image";
    favoriteImages.appendChild(favImage2);
    const favImage3 = document.createElement("img");
    favImage3.src = "img/fav3.png";
    favImage3.alt = "Imagen 3";
    favImage3.className = "main__image";
    favoriteImages.appendChild(favImage3);

    favorites.appendChild(favoriteImages);
    main.appendChild(favorites);

    const changePassword = document.createElement("div");
    changePassword.className = "main__change-password";
    const changePasswordTitle = document.createElement("h2");
    changePasswordTitle.className = "main__subtitle";
    changePasswordTitle.textContent = "Change Password";
    changePassword.appendChild(changePasswordTitle);

    const changePasswordForm = document.createElement("form");
    changePasswordForm.action = "cambiar-contrasena.php";
    changePasswordForm.method = "post";
    changePasswordForm.className = "main__form";

    const passwordLabel = document.createElement("label");
    passwordLabel.htmlFor = "password";
    passwordLabel.className = "main__label";
    passwordLabel.textContent = "New Password:";
    changePasswordForm.appendChild(passwordLabel);

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.name = "password";
    passwordInput.required = true;
    passwordInput.className = "main__input";
    changePasswordForm.appendChild(passwordInput);

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Cambiar Contraseña";
    submitButton.className = "main__button";
    changePasswordForm.appendChild(submitButton);

    changePassword.appendChild(changePasswordForm);
    main.appendChild(changePassword);

    const logout = document.createElement("div");
    logout.className = "main__logout";
    const logoutLink = document.createElement("a");
    logoutLink.href = "#";
    logoutLink.className = "main__link";
    logoutLink.textContent = "Cerrar Sesión";
    logout.appendChild(logoutLink);
    
    logoutLink.addEventListener("click", function (event) {
      event.preventDefault();

      localStorage.removeItem("isLoggedIn");
    
      console.log("Cerrando sesión...");
    
      window.location.href = "Landing.html";
    });

    main.appendChild(logout);
    body.appendChild(main);
    body.appendChild(footer);
  } else {
    alert(
      "No hay información de usuario almacenada. Por favor, inicia sesión."
    );
    window.location.href = "Landing.html";
  }
});



