var firebaseConfig = {
    apiKey: "AIzaSyAaSPQR9LVV1Mewl9Nj0KatPt3qDut_dhg",
    authDomain: "skar-7f308.firebaseapp.com",
    databaseURL: "https://skar-7f308.firebaseio.com",
    projectId: "skar-7f308",
    storageBucket: "skar-7f308.appspot.com",
    messagingSenderId: "961111279668",
    appId: "1:961111279668:web:87ce14f2ebc1dea4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Joke API variables
var category = $("#category").val();
var queryURL = "https://jokeapi.p.rapidapi.com/category/" + "Any" + "?format=json";

$("#jokeBtn").on("click", function (event) {
    event.preventDefault();
    console.log("im working");

    // Performing GET requests to the joke API and logging the responses to the console
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "X-RapidAPI-Host": "jokeapi.p.rapidapi.com",
            "X-RapidAPI-Key": "c22b0ed6b6msh56e05637c624c53p1e9095jsn6057431855e3"
        },
        success: (function (result) {})
    }).then(function (response) {
        console.log(response);
        
    });
});

function displayGif() {
    var showGif = document.createElement('div');
    showGif.innerHTML = '<div class="gif-space">' + searchString + '</div>';
}

function clearInput() {
    document.querySelector("form").reset();
}

$("#gif-me").on("click", function () {
    document.querySelector('.done').remove();
    var gifSearch = $("input.form-control").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=0flPku5i7SaRbjTl02ZnhKrnYHH6Z4uk&q=" + gifSearch + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            for (var j = 0; j < response.data.length; j++) {
                var imageUrl = response.data[j].images.original.url;
                var gifImage = $("<img>");
                gifImage.attr("src", response.data[j].images.original_still.url);
                gifImage.attr("data-still", response.data[j].images.original_still.url);
                gifImage.attr("data-animate", imageUrl);
                gifImage.attr("data-state", "still");
                gifImage.attr("alt", "gif image");
                $("#images").prepend(gifImage);
                $(gifImage).on("click", function () {
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                });
                clearInput(gifSearch);
            }
        })
    displayGif(gifSearch);
});
