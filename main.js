const apiurl = 'https://rickandmortyapi.com/api/character'

const res = document.querySelector('#res')
const tpl_id = document.getElementById('p_id').value
const tpl_name = document.getElementById('p_name').value
const tpl_status = document.getElementById('p_status').value
const tpl_species = document.getElementById('p_species').value
const tpl_type = document.getElementById('p_type').value
const tpl_gender = document.getElementById('p_gender').value

function MostrarHorario() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    if (hora < 10) { hora = "0" + hora; }
    if (minutos < 10) { minutos = "0" + minutos; }
    if (segundos < 10) { segundos = "0" + segundos; }
    document.getElementById("reloj").innerHTML = hora + ":" + minutos + ":" + segundos;
    document.getElementById("fecha").innerHTML = fecha.toLocaleDateString();
    setTimeout("MostrarHorario()", 1000);
}

function Bienvenida() {
    MostrarHorario()
    var nombre = localStorage.getItem("name")
    document.getElementById("bienvenida").innerHTML = "Bienvenido " + nombre;
}

function BuscarPersonaje() {
    let inputValue = document.getElementById('buscar').value
    $.ajax({
        type: "GET",
        url: `${apiurl}/${inputValue}`,
        success: function(people) {
            $("#container").append(CrearTabla(people))
            console.log(people)
        },
        error: function(error) {
            console.log(error)
        }
    })
}

function CrearTabla(people) {
    const tpl_id = document.getElementById('p_id')
    const tpl_name = document.getElementById('p_name')
    const tpl_status = document.getElementById('p_status')
    const tpl_species = document.getElementById('p_species')
    const tpl_type = document.getElementById('p_type')
    const tpl_gender = document.getElementById('p_gender')

    tpl_id.innerHTML = `${people.id}`
    tpl_name.innerHTML = `${people.name}`
    tpl_status.innerHTML = `${people.status}`
    tpl_species.innerHTML = `${people.species}`
    tpl_type.innerHTML = `${people.type}`
    tpl_gender.innerHTML = `${people.gender}`
}

function BuscarIMG() {
    let inputValue = document.getElementById('buscar').value
    const img = document.getElementById('img')
    img.innerHTML = `<img src="${apiurl}/${inputValue}" width="400px" height="150px">`
}