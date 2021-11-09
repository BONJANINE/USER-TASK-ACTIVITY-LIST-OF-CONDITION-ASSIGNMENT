const app = Vue.createApp({
    data() {
        return {
            enteredtaskValue: '',       
             task: [] ,
             toggler: 'Hide',
             btntoggle: false,
            
        };     
    },
    methods:{
        add_task () {
            this.task.push(this.enteredtaskValue);   
        },
        btn_toggle(){
            this.btntoggle = !this.btntoggle

            if(this.btntoggle === true){
                this.toggler = 'Show List'
            }  
            else {
                this.toggler = 'Hide'
                this.toggler = 'Hide List'
                
                }
            
        }
    }      
});

app.mount('#task');