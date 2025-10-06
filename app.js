import { createToast, createAlert } from "../lib/utility.js";
function initListeners() { 
    $("form button").on("click", (e) => {
        e.preventDefault();
        console.log("Button clicked");
        const un = $("#username").val().trim();
        let unl = un.length;
        if (un =="") {
            alert("Username cannot be empty");
        } else if (unl < 3) {
            alert("Username must be at least 3 characters long");
        } else if (unl < 8) {
            alert("Username must be at least 8 characters");

        } else if (unl > 10) {
            alert("Username must not exceed 10 characters");
        } else if (un.includes(" ")) {
            alert("Username must not contain spaces");
        } else {
           createToast({type: "success", message: "Form submitted successfully!"});
        } 
        
        }
    )};


$(document).ready(function() {
    initListeners();
});