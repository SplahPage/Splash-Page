document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var form = document.getElementById("contact-form");
    var loader = document.getElementById("loader");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        loader.style.display = "block";

        fetch(form.action, {
            method: form.method,
            body: new FormData(form)
        })
        .then(response => {
            loader.style.display = "none";
            if (response.ok) {
                modal.style.display = "block";
                setTimeout(function() {
                    location.reload();
                }, 2000);
            } else {
                console.error("Form submission failed.");
            }
        })
        .catch(error => {
            loader.style.display = "none";
            console.error("Error:", error);
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});