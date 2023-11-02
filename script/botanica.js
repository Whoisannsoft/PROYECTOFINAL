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
                    " Meet the creative force behind this page: Our fearless creator, an inquisitive orange cat with an unyielding passion for Plants vs. Zombies. By day, a virtual zombie hunter; by night, the strategic mind shaping every tip you find here. Get ready to explore their insights and uncover the wisdom they've gathered to help you master the game. Welcome to a world of Plants vs. Zombies, guided by the ingenuity of Seth",
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
                    dropdownContent.style.display = (dropdownContent.style.display === "none") ? "block" : "none";
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


    document.body.appendChild(body);
});