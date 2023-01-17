console.log(document.getElementById("from"));
document.getElementById('form').addEventListener('submit', function (event) {
    // Überprüfet, ob alle Felder ausgefüllt sind
    if (document.getElementById('firstname').value == '' ||
        document.getElementById('lastname').value == '' ||
        document.getElementById('email').value == '' ||
        document.getElementById('password').value == '') {
        // Verhindert, dass das Formular gesendet wird
        event.preventDefault();
        alert("Bitte füllen Sie alle Felder aus!");
    }
});

password.oninput = function () {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (password.value.length < 8) {
        document.getElementById("passwordError").innerHTML = "Das Passwort muss mindestens 8 Zeichen lang sein. Folgende Zeichen müssen vorhanden sein: </br> </br> - Gross- & Kleinbuchstaben </br> - Zahlen </br> - Sonderzeichen ($%/()[]{}=?!.,-*|+~#) </br> </br> Bitte beachten Sie, dass Ihr Passwort auch trotz der Vorschriften unsicher sein kann.";
    } else if (!password.value.match(/[A-Z]/)) {
        document.getElementById("passwordError").innerHTML = "Das Passwort muss mindestens 8 Zeichen lang sein. Folgende Zeichen müssen vorhanden sein: </br> </br> - Gross- & Kleinbuchstaben </br> - Zahlen </br> - Sonderzeichen ($%/()[]{}=?!.,-*|+~#) </br> </br> Bitte beachten Sie, dass Ihr Passwort auch trotz der Vorschriften unsicher sein kann.";
    } else if (!password.value.match(/[a-z]/)) {
        document.getElementById("passwordError").innerHTML = "Das Passwort muss mindestens 8 Zeichen lang sein. Folgende Zeichen müssen vorhanden sein: </br> </br> - Gross- & Kleinbuchstaben </br> - Zahlen </br> - Sonderzeichen ($%/()[]{}=?!.,-*|+~#) </br> </br> Bitte beachten Sie, dass Ihr Passwort auch trotz der Vorschriften unsicher sein kann.";
    } else if (!password.value.match(/[0-9]/)) {
        document.getElementById("passwordError").innerHTML = "Das Passwort muss mindestens 8 Zeichen lang sein. Folgende Zeichen müssen vorhanden sein: </br> </br> - Gross- & Kleinbuchstaben </br> - Zahlen </br> - Sonderzeichen ($%/()[]{}=?!.,-*|+~#) </br> </br> Bitte beachten Sie, dass Ihr Passwort auch trotz der Vorschriften unsicher sein kann.";
    } else if (!format.test(password.value)) {
        document.getElementById("passwordError").innerHTML = "Das Passwort muss mindestens 8 Zeichen lang sein. Folgende Zeichen müssen vorhanden sein: </br> </br> - Gross- & Kleinbuchstaben </br> - Zahlen </br> - Sonderzeichen ($%/()[]{}=?!.,-*|+~#) </br> </br> Bitte beachten Sie, dass Ihr Passwort auch trotz der Vorschriften unsicher sein kann.";
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }
}