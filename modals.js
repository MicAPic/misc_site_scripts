function expand_image(clicked_id) {
    let modal = document.getElementById("photo_modal"),
        photo = document.getElementById("photo"),
        closeButton = document.getElementsByClassName("close")[0];

    photo.src = clicked_id.split('λ')[2];
    modal.style.display = "block";

    closeButton.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    let modal = document.getElementById("photo_modal"),
        modal2 = document.getElementById("contact_modal");

    if (event.target === modal || event.target === modal2){
    modal.style.display = "none";
    modal2.style.display = "none";
  }
}

function contact_me(clicked_id) {
    let modal = document.getElementById("contact_modal"),
        closeButton = document.getElementsByClassName("close")[1];

    modal.style.display = "block";

    closeButton.onclick = function() {
        modal.style.display = "none";
    }
}

function submit() {
    document.getElementById('contact-form').submit();
}