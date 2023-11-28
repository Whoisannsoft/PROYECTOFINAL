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
        obj1: {
          imageSrc: "img/Sth.png",
          title: "-Mastermind-",
          description:
            " Meet the creative force behind this page: Our fearless creator, an inquisitive orange cat with an unyielding passion for Plants vs. Zombies. By day, a virtual zombie hunter; by night, the strategic mind shaping every tip you find here. Get ready to explore their insights and uncover the wisdom they've gathered to help you master the game. Welcome to a world of Plants vs. Zombies, guided by the ingenuity of Seth",
        },
        obj2: {
          imageSrc: "img/AnotherImage.png",
          title: "-Another Title-",
          description: "Another description here.",
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

  body.appendChild(header);

  const catalog = document.querySelector(".catalog__image-catalog");

  const favoritePlants = JSON.parse(localStorage.getItem("favoritePlants")) || [];

  fetch("http://localhost:3000/api/plants")
    .then((response) => response.json())
    .then((plantsData) => {
      const first15Plants = plantsData.slice(0, 15);

      const plantDetailsPromises = first15Plants.map((plantName) => {
        if (
          plantName &&
          typeof plantName === "string" &&
          plantName.trim() !== ""
        ) {
          const formattedPlantName = plantName.toLowerCase();
          return fetch(`http://localhost:3000/api/plants/${formattedPlantName}`)
            .then((response) => response.json())
            .catch((error) => {
              console.error(
                `Error al obtener detalles para la planta ${formattedPlantName}: ${error}`
              );
              return null;
            });
        } else {
          console.error("Nombre de planta no válido o indefinido");
          return null;
        }
      });

      return Promise.all(plantDetailsPromises);
    })
    .then((plantDetailsList) => {
      plantDetailsList.forEach((plantDetails) => {
        if (plantDetails) {
          const lowerCasePlantDetails = Object.fromEntries(
            Object.entries(plantDetails).map(([key, value]) => [
              key.toLowerCase(),
              value,
            ])
          );

          const imageContainer = document.createElement("div");
          imageContainer.className = "image";

          const favoriteIcon = document.createElement("div");
          favoriteIcon.className = "image__favorite-icon";
          updateFavoriteIcon();

          favoriteIcon.addEventListener("click", function () {
            toggleFavorite(lowerCasePlantDetails);
            updateFavoriteIcon();
          });

          function updateFavoriteIcon() {
            const isFavorite = favoritePlants.some(
              (plant) => plant.name === lowerCasePlantDetails.name
            );
            favoriteIcon.innerHTML = isFavorite ? "❤️" : "🤍";
          }

          imageContainer.appendChild(favoriteIcon);

          imageContainer.innerHTML += `
            <h2 class="image__title">${lowerCasePlantDetails.name || "N/A"}</h2>
            <img src="${
              lowerCasePlantDetails.image || "img/default-plant-image.jpg"
            }" alt="Plant Image" class="image__img" />
            <p class="image__description">Sun cost: ${
              lowerCasePlantDetails["sun cost"] || "N/A"
            }</p>
            <p class="image__description">Recharge: ${
              lowerCasePlantDetails.recharge || "N/A"
            }</p>
            <p class="image__description">Damage: ${
              lowerCasePlantDetails.damage || "N/A"
            }</p>
            <p class="image__description">Range: ${
              lowerCasePlantDetails.range || "N/A"
            }</p>
            <p class="image__description">Family: ${
              lowerCasePlantDetails.family || "N/A"
            }</p>
            <p class="image__description">Description: ${
              lowerCasePlantDetails.description || "N/A"
            }</p>
          `;

          catalog.appendChild(imageContainer);
        }
      });
    })
    .catch((error) => {
      console.error("Error al cargar la lista de plantas: " + error);
    });

  function toggleFavorite(plantDetails) {
    const index = favoritePlants.findIndex(
      (plant) => plant.name === plantDetails.name
    );

    if (index !== -1) {
      favoritePlants.splice(index, 1);
    } else {
      favoritePlants.push(plantDetails);
    }

    localStorage.setItem("favoritePlants", JSON.stringify(favoritePlants));
  }

  document.body.appendChild(body);
});

