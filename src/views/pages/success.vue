<template>
<h1>aaa</h1>
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
email_verified:1
    }
},
    mounted(){
 
     let recruteur = JSON.parse(localStorage.getItem("recruteur"))
     let date = new Date()
     let debut =""+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+""
     date.setDate(date.getDate()+Number(this.selectdate))
     let fin = ""+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+""
     console.log(debut,fin)
     axios.post("http://localhost:8000/api/users/create",{firstName:recruteur.firstName,lastName:recruteur.lastName,email:recruteur.email,password:recruteur.password,address:recruteur.address,birthDate:recruteur.birthDate,company:recruteur.company,city:recruteur.city,gender:recruteur.gender,role:recruteur.role
        ,experience:null,leve:null,diplom:null,cv:null,modePaiment:recruteur.modePaiment,début:debut,fin:fin,level:null
        }).then(res=>{
            axios.get("http://localhost:8000/api/verification/users/"+res.data.user.id)
           .then(res=>{
            this.$router.push({path:"/pages/login"});
            localStorage.removeItem("recruteur")
        })  
        })
    }
}
</script>