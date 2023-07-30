const menu = document.querySelector("#menu");
const ul = document.querySelector("#menu ul");
const hamburgerButton = document.querySelector("#hamburger-button");
const userEvent = ["click", "touchstart"];

function toggleMenu(event) {
  event.preventDefault();
  menu.classList.toggle("active");

  // Verifica se o menu está ativo e adiciona ou remove o evento handleLinkClick na UL
  if (menu.classList.contains("active")) {
    ul.addEventListener("click", handleLinkClick);
    document.addEventListener("click", handleOutsideClick);
  } else {
    ul.removeEventListener("click", handleLinkClick);
    document.removeEventListener("click", handleOutsideClick);
  }
}

function handleLinkClick(event) {
  const clickedElement = event.target;
  const isLinkClicked = clickedElement.tagName.toLowerCase() === "a";
  if (isLinkClicked) {
    menu.classList.remove("active");
  }
}

function handleOutsideClick(event) {
  const isMenuClicked = event.target.closest("#menu");
  if (!isMenuClicked) {
    // Se o clique for fora do menu, remove a classe "active"
    menu.classList.remove("active");
    ul.removeEventListener("click", handleLinkClick);
    document.removeEventListener("click", handleOutsideClick);
  }
}

if (menu && hamburgerButton) {
  userEvent.forEach((event) => {
    hamburgerButton.addEventListener(event, toggleMenu);
  });
}
