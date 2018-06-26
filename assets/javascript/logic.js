// Initialize Firebase
var config = {
    apiKey: "AIzaSyAncovY1TTifgxMPWaju4JGWBRNueZAjbc",
    authDomain: "njc-portfolio.firebaseapp.com",
    databaseURL: "https://njc-portfolio.firebaseio.com",
    projectId: "njc-portfolio",
    storageBucket: "",
    messagingSenderId: "229130376526"
};
firebase.initializeApp(config);
var database = firebase.database();

var email;
var name;
var subject;
var message;


$(".submit").on("click", function form() {
    email = $(".email").val().trim();
    $(".email").val("");
    name = $(".name").val().trim();
    $(".name").val("");
    subject = $(".subject").val().trim();
    $(".subject").val("");
    message = $(".message").val().trim();
    $(".message").val("");

    console.log(email, name, subject, message);
    database.ref().push({
        custEmail: email,
        custName: name,
        custSubject: subject,
        custMessage: message,

    });


})
database.ref().on("child_added", function (snapshot) {
    var snap = snapshot.val();
    var displayDiv = $("<div></div>");

    var emailDisplay = $("<p></p>");
    emailDisplay.text("Email: " + snap.custEmail);
    displayDiv.append(emailDisplay);

    var nameDisplay = $("<p></p>");
    nameDisplay.text("Name " + snap.custName);
    displayDiv.append(nameDisplay);

    var subjectDisplay = $("<p></p>");
    subjectDisplay.text("Subject: " + snap.custSubject);
    displayDiv.append(subjectDisplay);

    var messageDisplay = $("<p></p>");
    messageDisplay.text("Message: " + snap.custMessage);
    displayDiv.append(messageDisplay);

    var divide = $("<br></br");
    displayDiv.append(divide);

    $(".display-message").append(displayDiv);

})
