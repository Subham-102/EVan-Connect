function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
   var a = document.getElementById("loginBtn");
   var b = document.getElementById("registerBtn");
   var x = document.getElementById("login");
   var y = document.getElementById("register");
   function login() {
       x.style.left = "4px";
       y.style.right = "-520px";
       a.className += " white-btn";
       b.className = "btn";
       x.style.opacity = 1;
       y.style.opacity = 0;
   }
   function register() {
       x.style.left = "-510px";
       y.style.right = "5px";
       a.className = "btn";
       b.className += " white-btn";
       x.style.opacity = 0;
       y.style.opacity = 1;
   }
// Add event listener to form submission
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        // Validate form data
        var cardNumber = document.querySelector("#card-number").value;
        var expirationDate = document.querySelector("#expiration-date").value;
        var cvv = document.querySelector("#cvv").value;
        var amount = document.querySelector("#amount").value;

        if (cardNumber && expirationDate && cvv && amount) {
            // Process payment
            alert("Payment successful!");
        } else {
            alert("Please fill in all fields.");
        }
    });
});