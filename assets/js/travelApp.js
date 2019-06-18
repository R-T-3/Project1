// Firebase config

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
var queryURL = "https://jokeapi.p.rapidapi.com/category/" + category + "?apikey=c22b0ed6b6msh56e05637c624c53p1e9095jsn6057431855e3";

// Event listener for joke button
$("#jokeBtn").on("click", function(event) {
    event.preventDefault();
    console.log("im working");

// Performing GET requests to the joke API and logging the responses to the console

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) { 
        console.log(response);
    });

});
