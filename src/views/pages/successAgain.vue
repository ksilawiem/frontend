<template>
    <h1>done</h1>
</template>
<script>
import { faCoffee, faStroopwafel, faDragon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from "axios";
export default {
    name: 'Paiement ',

data(){
    return{
selectdate : localStorage.getItem("typedate"),
id_user : localStorage.getItem("id_user"),
    }
},
    mounted(){
     let date = new Date()
     let debut =""+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+""
     date.setDate(date.getDate()+Number(this.selectdate))
     let fin = ""+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+""
     console.log(debut,fin)
     axios.put("http://localhost:8000/api/resubcribe/users/"+this.id_user,{début:debut,fin:fin}).then(res=>{
            axios.get("http://localhost:8000/api/verification/users/"+this.id_user)
           .then(res=>{
            this.$router.push({path:"/pages/login"});
            localStorage.removeItem("id_user")
             localStorage.removeItem("typedate")
        })  
        })
    }
}
</script>