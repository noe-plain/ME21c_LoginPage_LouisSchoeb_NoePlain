//import data from './passwords.json';
//const passwords = data;
var data;
var passwords;
fetch('./scripts/passwords.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  passwords = data;
});



async function setupPage() {
    await wait();
    addTableRows()
}

async function wait(){
    return new Promise((resolve) => {
        check();
        function check(){
            setTimeout(() => {
                console.log(passwords);
                if(passwords != undefined) resolve(1);
                else check();
                console.log(2);
            }, 1);
        }
      });
}



function addTableRows() {
    let table = document.getElementById('usertable')
    table = addTableHeader(table)
    table = addTableContent(table)
}

function addTableHeader(tableObj) {
    tr = document.createElement('tr')
    td1 = document.createElement('th')
    td2 = document.createElement('th')
    td3 = document.createElement('th')
    td4 = document.createElement('th')

    td1.innerHTML = "Vorname"
    td2.innerHTML = "Nachname"
    td3.innerHTML = "E-Mail"
    td4.innerHTML = "Passwort"

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tableObj.appendChild(tr)

    return tableObj
}

function addTableContent(tableObj) {
    for (var i = 0; i < passwords.length; i++) {
        tr = document.createElement('tr')
        td1 = document.createElement('td')
        td2 = document.createElement('td')
        td3 = document.createElement('td')
        td4 = document.createElement('td')

        td1.innerHTML = passwords[i].firstname
        td2.innerHTML = passwords[i].lastname
        td3.innerHTML = passwords[i].email
        td4.innerHTML = passwords[i].password

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tableObj.appendChild(tr)
    }
    return tableObj
}
