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

// Event listener for Skyscanner button
$("#button").on("click", function(event) {
    event.preventDefault();
    console.log("im working");

// Performing GET requests to the Kajak API and logging the responses to the console
    $.ajax({
        url: "https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session",
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
});

function showAdvisory () {
    var queryURL = "https://www.travel-advisory.info/api";

    $ajax({
        url: queryURL, 
        method: "GET"
    })
        .then(function (response){

        })
    };