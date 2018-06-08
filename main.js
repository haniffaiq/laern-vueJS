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
        cordinate: function(event){
            //console.log(event)
            this.x = event.x
            this.y = event.y 
        },
        submit: function(event){
            //console.log(event)
            this.name = this.setName
            console.log(this.name)
        },
        add(value){
            this.age = this.age + value
            // that's code same like //this.age = this.age + 1
        },
        substract(value){
            this.age = this.age - value
        },
        submitName:function(event){
            this.name = this.setName
            console.log(this.name)
            console.log("key : " + event.key)
        }
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