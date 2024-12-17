var typed = new Typed("#element", {
    strings: [
      "<i>Web</i> Developer",
      "<i>Python</i> Developer",
      "&amp; a coding hobbyist;",
    ],
    typeSpeed: 60,
    backSpeed: 40,
  });

  function openModal(src) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-img").src = src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}