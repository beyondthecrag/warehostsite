function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = img;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
