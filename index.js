const modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");

setTimeout(function () {
  modal.style.display = "inline-block";
}, 1500);

closeBtn.onclick = function () {
  modal.style.display = "none";
};

const form = document.getElementById("consent-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const modalText = document.getElementById("modal-text");
  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="upload-text">
        Uploading your data to the dark web...
    </p>
  </div>
  `;

  setTimeout(function () {
    document.getElementById("upload-text").textContent = `Making the sale...`;
  }, 1500);

  setTimeout(function () {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `<h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
  }, 3000);
});
