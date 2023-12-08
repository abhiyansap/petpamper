const profileLink = `<a href="#" class="mb-profile">
                        <img src="../img/profile.png" />
                        <span href="#"> Profile </span>
                        </a>`;

function toggleNavbar() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.innerHTML += profileLink;
  navLinks.classList.toggle("show");
}
