new Vue({
    el:'#vue-app',
    data:{
        greet:"Welcome to Vuejs Learn page",      
        name, 
        x: 0,
        y: 0,
        age : 17,
        setName:"",
        a : 0,
        b : 0
    },
    methods:{
        submit: function(event){
            //console.log(this.setName)
            //console.log(event)
            this.name = this.setName
            this.x = event.x
            this.y = event.y
        },
        add(value){
            this.age = this.age + value
            // that's code same like //this,age = this.age + 1
        },
        substract(value){
            this.age = this.age - value
        },
        /*addToA(){
            console.log("ageToA")
            return this.age + this.a
            },
        addToB() {
            console.log("ageToB")
            return this.age + this.b
            }*/
    },
    computed: {
        addToA() {
            console.log("ageToA")
            return this.age + this.a
        },
        addToB() {
            console.log("ageToB")
            return this.age + this.b
        }
    }
})