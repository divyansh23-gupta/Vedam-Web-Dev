let but = document.getElementById("searchButton");
but.addEventListener("click", function() {
    let input = document.getElementById("locationInput").value.trim();
    console.log("User input:", input);
});