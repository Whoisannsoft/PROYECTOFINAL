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
              " Meet the creative force behind this page: Our fearless creator, an inquisitive orange cat with an unyielding passion for Plants vs. Zombies. By day, a virtual zombie hunter; bynight, the strategic mind shaping every tip you find here. Getready to explore their insights and uncover the wisdom they'vegathered to help you master the game. Welcome to a world ofPlants vs. Zombies, guided by the ingenuity of Seth"
          },
          obj2: {
 
          }
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
  
    const main = document.createElement("main");
    main.classList.add("main");
  
    const cornerImageTopLeft = document.createElement("div");
    cornerImageTopLeft.classList.add(
      "main__corner-image",
      "main__corner-image--top-left"
    );
    const image1 = document.createElement("img");
    image1.setAttribute("src", "img/ob6.png");
    image1.setAttribute("alt", "Image 1");
    image1.classList.add("main__image");
    cornerImageTopLeft.appendChild(image1);
  
    const cornerImageTopRight = document.createElement("div");
    cornerImageTopRight.classList.add(
      "main__corner-image",
      "main__corner-image--top-right"
    );
    const image2 = document.createElement("img");
    image2.setAttribute("src", "img/ob3.png");
    image2.setAttribute("alt", "Image 2");
    image2.classList.add("main__image");
    cornerImageTopRight.appendChild(image2);
  
    const mainTitle = document.createElement("h1");
    mainTitle.classList.add("main__title");
    mainTitle.textContent = "How Can We Help You";
  
    const mainForm = document.createElement("form");
    mainForm.classList.add("main__form");
  
    const nameFormGroup = document.createElement("div");
    nameFormGroup.classList.add("main__form-group");
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.classList.add("main__label");
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("required", "true");
    nameInput.classList.add("main__input");
    nameFormGroup.appendChild(nameLabel);
    nameFormGroup.appendChild(nameInput);
    mainForm.appendChild(nameFormGroup);
  
    const emailFormGroup = document.createElement("div");
    emailFormGroup.classList.add("main__form-group");
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.classList.add("main__label");
    emailLabel.textContent = "Email:";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("required", "true");
    emailInput.classList.add("main__input");
    emailFormGroup.appendChild(emailLabel);
    emailFormGroup.appendChild(emailInput);
    mainForm.appendChild(emailFormGroup);
  
    const messageFormGroup = document.createElement("div");
    messageFormGroup.classList.add("main__form-group");
    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "message");
    messageLabel.classList.add("main__label");
    messageLabel.textContent = "Message:";
    const messageTextarea = document.createElement("textarea");
    messageTextarea.setAttribute("id", "message");
    messageTextarea.setAttribute("name", "message");
    messageTextarea.setAttribute("rows", "4");
    messageTextarea.setAttribute("required", "true");
    messageTextarea.classList.add("main__textarea");
    messageFormGroup.appendChild(messageLabel);
    messageFormGroup.appendChild(messageTextarea);
    mainForm.appendChild(messageFormGroup);
  
    const submitButton = document.createElement("div");
    submitButton.classList.add("main__form-group");
    const submitButtonElement = document.createElement("button");
    submitButtonElement.setAttribute("type", "submit");
    submitButtonElement.classList.add("main__button");
    submitButtonElement.textContent = "Submit";
    submitButton.appendChild(submitButtonElement);
    mainForm.appendChild(submitButton);
  
    const contactText = document.createElement("p");
    contactText.classList.add("main__contact-text");
    contactText.innerHTML =
      "Contact us at:<br />Phone: +1 (123) 456-7890 ext. 123<br />Email: contact@example.com<br />Address: 123 Main Street, City, Country";
  
    main.appendChild(cornerImageTopLeft);
    main.appendChild(cornerImageTopRight);
    main.appendChild(mainTitle);
    main.appendChild(mainForm);
    main.appendChild(contactText);
  
    body.appendChild(main);
  
    const footer = document.createElement("footer");
    const script = document.createElement("script");
    script.setAttribute("src", "/script/contactus.js");
    footer.appendChild(script);
  
    document.body.appendChild(body);
  });
  