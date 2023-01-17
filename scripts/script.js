fetch('./scripts/passwords.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        passwords = data;
    });

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

function validation() {
    console.log("1");
    let form = document.getElementById('form')
    const email = document.getElementById('email').value
    const firstname = document.getElementById('firstname').value
    const lastname = document.getElementById('lastname').value
    const password = document.getElementById('password').value
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
    console.log(email)

    if (pattern.test(email)) {
        form.classList.add('valid')
        form.classList.remove('invalid')
        for (let txtObject of document.querySelectorAll('input[type=text]')) {
            txtObject.style.color = '#003300'
        }
        eval("var send_data = { firstname: '" + firstname + "', lastname: '" + lastname + "', email: '" + email + "', password: '" + password + "' }");
        console.log("var send_data = { firstname: '" + firstname + "', lastname: '" + lastname + "', email: '" + email + "', password: '" + password + "' }");
        console.log(send_data);
        fetch('./scripts/create_user.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: '{ "firstname": "' + firstname + '", "lastname": "' + lastname + '", "email": "' + email + '", "password": "' + password + '" }'
        })

            .then(data => {
                console.log('Success:', data);
            })
        /*  .catch((error) => {
          console.error('Error:', error);
          });*/
        alert("User added")
    } else {
        form.classList.remove('valid')
        form.classList.add('invalid')
        for (let txtObject of document.querySelectorAll('input[type=text]')) {
            txtObject.style.color = '#440000'
        }
        alert("Invalid input")
    }
}