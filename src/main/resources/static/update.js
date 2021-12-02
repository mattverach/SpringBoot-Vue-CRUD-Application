var args = location.search.substr(1).split('&');
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtId").value = parts[0][1]
document.getElementById("txtNombre").value = parts[1][1]
document.getElementById("txtEmail").value = parts[2][1]
document.getElementById("txtPrioridad").value = parts[3][1]

function modificar() {
    let i = parseInt(document.getElementById("txtId").value)
    let n = document.getElementById("txtNombre").value
    let e = document.getElementById("txtEmail").value
    let p = parseInt(document.getElementById("txtPrioridad").value)

    let usuario = {
        id: i,
        nombre: n,
        email: e,
        prioridad: p
    }
    let url = "http://localhost:8080/usuario"
    var options = {
        body: JSON.stringify(usuario),
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        redirect:'follow'
    }
    fetch(url,options)
    .then(function (){
        console.log("creado")
    })
    .then(() => window.location.assign("./index.html"))
    .catch(err => {
        console.error(err);
    })
}

