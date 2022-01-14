window.onload = () =>{
    const Counter = {
        data() {
            return {
                counter: 0,
                string: "Yea",
                nuevonombre:"",
                items : [],
                empty: true
            }
        },
        methods:{
            incrementa(){
                this.insertName();
            },
            insertName(){
                if(this.nuevonombre ===""){
                    alert("Vacio bro")
                }else{
                    this.items.push(this.nuevonombre)
                    this.nuevonombre = "" 
                    this.counter++; 
                }
            },

        }
    }

    //#mounter es el elemento en el que sucede la app
    // 
    Vue.createApp(Counter).mount('#counter')
}