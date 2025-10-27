const modal = document.getElementById("modal");
const closeBtn = document.getElementById('modal-close-btn')

setTimeout(function () {
  modal.style.display = "inline-block";
}, 1500);

closeBtn.onclick = function() {
  modal.style.display = 'none';
}