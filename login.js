/* LOGIN */
const API_LOGIN = 'https://jsonplaceholder.typicode.com/users'

let email = document.getElementById('email').value
let id = document.getElementById('id').value
let counter = 0

function getData() {
    let id = document.getElementById('id').value
    let emaill = document.getElementById('email').value

    $.ajax({
        type: "GET",
        url: `${API_LOGIN}`,
        success: function(users) {
            if (users[id - 1].email == emaill && validacionClave(id)) {
                window.location.href = 'main.html'
                let name = users[id - 1].name
                localStorage.setItem('name', name)
            } else {
                alert('Usuario o contraseña incorrectos. Intente de nuevo')
                counter++
                if (counter == 3) {
                    window.location.href = "blocked.html";
                    counter = 0;
                }
            }
        }
    })
}

function validacionClave(id) {
    var expresionRegular = /^\d{1,2}$/;
    if (!expresionRegular.test(id)) {
        return false;
    }
    return true;
}