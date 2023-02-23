const app = Vue.createApp({
    el: "#app",
    data(){
        return {
            firstName: '',
            picture: 'https://randomuser.me/api/potraits/men/10.pkg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            console.log(results);

            this.firstName = results[0].name.first
            this.picture = results[0].picture.large
        }
    }
});

app.mount('#app')