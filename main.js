new Vue({
    el:'#vue-app',
    data:{
        greet:"Welcome to Vuejs Learn page",      
        name, 
        x: 0,
        y: 0
    },
    methods:{
        submit: function(event){
            console.log(this.name)
            console.log(event)

            this.x = event.x
            this.y = event.y
        }
    }
})