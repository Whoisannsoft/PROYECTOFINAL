document.addEventListener("DOMContentLoaded", function () {
  const body = document.createElement("body");

  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

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

  const section = document.createElement("section");
  section.classList.add("section");

  const favoriteIcon1 = document.createElement("div");
  favoriteIcon1.classList.add("section__favorite-icon");
  favoriteIcon1.textContent = "❤️";

  const image1 = document.createElement("img");
  image1.src = "img/ob2.png";
  image1.alt = "Imagen 1";
  image1.classList.add("section__image");

  const h2_1 = document.createElement("h2");
  h2_1.classList.add("section__title");
  h2_1.textContent = "Zombie Colgado";

  const p1 = document.createElement("p");
  p1.classList.add("section__description");
  p1.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const ul1 = document.createElement("ul");
  ul1.classList.add("section__list");

  const listItems1 = ["Poder", "Vida", "Defensa"];

  listItems1.forEach((itemText) => {
    const li = document.createElement("li");
    li.classList.add("section__list-item");
    li.textContent = itemText;
    ul1.appendChild(li);
  });

  section.appendChild(favoriteIcon1);
  section.appendChild(image1);
  section.appendChild(h2_1);
  section.appendChild(p1);
  section.appendChild(ul1);

  const section2 = document.createElement("section");
  section2.classList.add("section");

  const favoriteIcon2 = document.createElement("div");
  favoriteIcon2.classList.add("section__favorite-icon");
  favoriteIcon2.textContent = "❤️";

  const image2 = document.createElement("img");
  image2.src = "img/ob.png";
  image2.alt = "Imagen 2";
  image2.classList.add("section__image");

  const h2_2 = document.createElement("h2");
  h2_2.classList.add("section__title");
  h2_2.textContent = "Zombie";

  const p2 = document.createElement("p");
  p2.classList.add("section__description");
  p2.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const ul2 = document.createElement("ul");
  ul2.classList.add("section__list");

  const listItems2 = ["Poder", "Vida"];

  listItems2.forEach((itemText) => {
    const li = document.createElement("li");
    li.classList.add("section__list-item");
    li.textContent = itemText;
    ul2.appendChild(li);
  });

  section2.appendChild(favoriteIcon2);
  section2.appendChild(image2);
  section2.appendChild(h2_2);
  section2.appendChild(p2);
  section2.appendChild(ul2);

  const section3 = document.createElement("section");
  section3.classList.add("section");

  const favoriteIcon3 = document.createElement("div");
  favoriteIcon3.classList.add("section__favorite-icon");
  favoriteIcon3.textContent = "❤️";

  const image3 = document.createElement("img");
  image3.src = "img/pngegg.png";
  image3.alt = "Imagen 3";
  image3.classList.add("section__image");

  const h2_3 = document.createElement("h2");
  h2_3.classList.add("section__title");
  h2_3.textContent = "Girasol";

  const p3 = document.createElement("p");
  p3.classList.add("section__description");
  p3.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const ul3 = document.createElement("ul");
  ul3.classList.add("section__list");

  const listItems3 = ["Poder", "Vida", "Defensa", "Elemento"];

  listItems3.forEach((itemText) => {
    const li = document.createElement("li");
    li.classList.add("section__list-item");
    li.textContent = itemText;
    ul3.appendChild(li);
  });

  section3.appendChild(favoriteIcon3);
  section3.appendChild(image3);
  section3.appendChild(h2_3);
  section3.appendChild(p3);
  section3.appendChild(ul3);

  body.appendChild(section);
  body.appendChild(section2);
  body.appendChild(section3);

  document.body.appendChild(body);
});
