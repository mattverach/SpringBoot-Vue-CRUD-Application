function grabar(){
    let n=document.getElementById("txtNombre").value
    let e=document.getElementById("txtEmail").value
    let p=parseInt(document.getElementById("txtPrioridad").value)

    let usuario={
        nombre:n,
        email:e,
        prioridad:p
    }

    const url="http://localhost:8080/usuario"

    var options = {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow'
    }

    fetch(url, options)
    .then(function() {
        console.log("creado")

        // Handle response we get from the API
    })
    .then(() => window.location.assign("./index.html"))
    .catch(err => {
        //this.errored = true
        console.error(err);
    })

}