const app = new Vue({
    el: "#app",
    data: {
        usuarios: [],
        errored: false,
        loading: true
    },
    created() {
        var url = 'http://localhost:8080/usuario'
        this.fetchData(url);
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    console.log(data);
                    this.loading = false;

                    this.loading = false;
                    console.log(this.loading);
                })
                .catch(err => {
                    this.errored = true
                    console.error(err);
                })
        },
        eliminar(id){
            const url = 'http://localhost:8080/usuario/'+id;
                      
            var options = {
                method: 'DELETE',
               }
            fetch(url, options)
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
            .then(res => {
                location.reload();
            })

        }
    }
}
)