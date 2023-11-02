document.addEventListener("DOMContentLoaded", function () {
  const body = document.createElement("body");

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
        imageSrc: "img/Sth.png",
        title: "-Mastermind-",
        description:
          "Meet the creative force behind this page: Our fearless creator, an inquisitive orange cat with an unyielding passion for Plants vs. Zombies. By day, a virtual zombie hunter; by night, the strategic mind shaping every tip you find here. Get ready to explore their insights and uncover the wisdom they've gathered to help you master the game. Welcome to a world of Plants vs. Zombies, guided by the ingenuity of Seth",
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
        image.setAttribute("src", item.dropdownContent.imageSrc);
        image.setAttribute("alt", "Dropdown Image");

        const title = document.createElement("div");
        title.classList.add("dropdown__title");
        title.textContent = item.dropdownContent.title;

        const description = document.createElement("p");
        description.textContent = item.dropdownContent.description;

        dropdownContent.appendChild(image);
        dropdownContent.appendChild(title);
        dropdownContent.appendChild(description);
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

  body.appendChild(header);

  const catalog = document.createElement("div");
  catalog.classList.add("catalog__image-catalog");

  const imagesData = [
    {
      title: "Cherry Bomb",
      src: "img/img.png",
      description:
        "Cherry Bomb is received after completing Level 1-2. They explode in 1.2 seconds in a 3x3 area, dealing 1800 damage to every enemy in the area and disintegrating the corpses of all defeated zombies. Cherry Bomb can also affect flying Balloon Zombies, submerged Snorkel Zombies, underground Digger Zombies, and ladders placed by Ladder Zombies.",
    },
    {
      title: "Planta Carnivora",
      src: "img/img (2).png",
      description:
        "La Planta Carroñívora es una planta de Plantas contra Zombis que se desbloquea en el Nivel 1-7, y que también aparece en Plants vs. Zombies 2 como una planta premium que se desbloquea por medio de pago. Las plantas carnívoras engullen zombis enteros, pero tardan un tiempo en tragárselos, así que mientras mastican otros zombis se las pueden comer.",
    },
    {
      title: "Hipnoseta",
      src: "img/img (3).png",
      description:
        "La Hipnoseta es una planta de un solo uso, es una seta que aparece en casi todos los juegos de Plants vs. Zombies, y en Plants vs. Zombies: Great Wall Edition. En el primer juego, él es desbloqueado en el nivel 2-5 Noche.",
    },
    {
      title: "Petaseta",
      src: "img/img (4).png",
      description:
        "La Petaseta es una seta de Plantas contra zombis, explota en un gran área que elimina gran parte de los zombis en pantalla, pero deja un cráter en el que no se puede replantar. (luego de un tiempo se puede volver a plantar).",
    },
    {
      title: "Patatapum",
      src: "img/img (5).png",
      description:
        "Patatapum es una planta explosiva, y la tercera planta principal desbloqueada en todos los juegos de Plants vs. Zombies. Una vez plantada, Patatapum tiene que esperar 15 segundos (para un Zombi de velocidad normal, plantarla por lo mínimo tres casilleros delante del zombi) mientras está escondida, es vulnerable a que los zombis se la coman. Una vez armada, explota con los zombis de 1x2 de rango, causando 90 de daño y apareciendo así la onomatopeya ¡¡PLACA!!.",
    },
    {
      title: "Repetidora",
      src: "img/img (6).png",
      description:
        "La Repetidora es una planta guisante que cuesta 200 soles, dispara dos guisantes a la vez y su velocidad de disparo es más rápida que la del Lanzaguisantes. Cada guisante tiene daño normal, por lo que habitualmente es de doble daño la planta. Es una de las pocas plantas que aparece en todas las entregas del juego.",
    },
    {
      title: "Girasol",
      src: "img/img (7).png",
      description:
        "La Girasol es una planta de Plantas contra Zombis, es la segunda planta que obtendremos en el Modo Aventura y es un elemento esencial en la producción de Sol. Aparece en todos los juegos de la saga como personaje principal. El girasol puede ser mejorado y pasarse a llamar Birasol produciendo el doble de Sol el girasol mide 5 CM.",
    },
    {
      title: "Nuez",
      src: "img/img (8).png",
      description:
        "La Nuez es una planta de Plantas contra Zombis, tiene una cáscara muy dura. Protege con ella a tus otras plantas.",
    },
    {
      title: "Seta solar",
      src: "img/img (9).png",
      description:
        "La Seta solar es una seta que da 15 de sol al principio y 25 después. Su uso recae en la noche ya que no cae sol y su ventaja es que cuesta la mitad que el Girasol. En Plants vs. Zombies 2 da 25 de sol al principio, 50 después y 75 al final.",
    },
    {
      title: "Apisonaflor",
      src: "img/img.jpg",
      description:
        "El Apisonaflor es una planta que aplasta al zombi que se acerca, puede aplastar uno o varios que estén en la misma casilla. Es una Guatila color verde con cara gruñona.",
    },
  ];

  imagesData.forEach((imageData) => {
    const imageContainer = document.createElement("div");
    imageContainer.className = "image";

    imageContainer.innerHTML = `
        <div class="image__favorite-icon">❤️</div>
        <h2 class="image__title">${imageData.title}</h2>
        <img src="${imageData.src}" alt="Plant Image" class="image__img" />
        <p class="image__description">${imageData.description}</p>
      `;

    catalog.appendChild(imageContainer);
  });

  body.appendChild(catalog);

  document.body.appendChild(body);
});
