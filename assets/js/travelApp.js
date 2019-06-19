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

// Variable to reference database
var database = firebase.database();

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
        if (response.type === "twopart") {
            $(".joke-text").html(response.setup);
            $(".joke-text2part").html(response.delivery);
            database.ref().push({
                TwoLineJoke: response.setup,
                TwolineJokeAnswer: response.delivery
            });
            console.log("sent double to database");
        } else { 
            $(".joke-text").html(response.joke);
            database.ref().push({
                OneLineJoke: response.joke
            });
            console.log("sent to database");
        }
    });
});


$("button").on("click", function () {
    var queryGifURL = "https://api.giphy.com/v1/gifs/random?api_key=0UIZpz3eQMaXs9t940Bi7LYbUZz6QExO&tag=laugh&rating=PG";

    $.ajax({
            url: queryGifURL,
            method: "GET"
        })
        .then(function (response) {
                var imageUrl = response.data.images.original.url;
                var gifImage = $("<img>");
                gifImage.attr("src", response.data.images.original.url);
                gifImage.attr("data-animate", imageUrl);
                gifImage.attr("data-state", "still");
                gifImage.attr("alt", "gif image");
                $(".images").html(gifImage);
        })
});


var tween = KUTE.fromTo('button',{rotate:0},{rotate:-720});
$("button").on("click", function () {
tween.start();
});
