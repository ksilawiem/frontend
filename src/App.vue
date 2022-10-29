<template>
  <router-view />
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
users:[]
    }
  },
  mounted(){
setInterval(function(){
  let token=localStorage.getItem('token') || "";
  axios.get("http://localhost:8000/api/auth/me",  {headers: {"Authorization" : `Bearer ${token}`}}).then(res=>{
    if(res.data.status=='Token is Invalid' || res.data.status=='Token is Expired')
    {
    //  window.location.replace('http://localhost:8080/#/pages/login');
    //  localStorage.removeItem('user')
    //  localStorage.removeItem('token')
    }
  })
},10000)  

axios.get("http://localhost:8000/api/users").then(res=>{
  this.users=res.data
   let date = new Date()
   let today =""+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+""
  for(let i=0;i<this.users.length;i++){
    if(this.users[i].role=='recruteur'){
    let datefin = new Date(this.users[i].fin)
    let verifdate = new Date(this.users[i].fin)
    verifdate=""+verifdate.getFullYear()+"-"+(verifdate.getMonth()+1)+"-"+verifdate.getDate()+""
    datefin.setDate(datefin.getDate()-3)
    datefin=""+datefin.getFullYear()+"-"+(datefin.getMonth()+1)+"-"+datefin.getDate()+""
    if(today==datefin)
    {
      axios.get("http://localhost:8000/api/sendMail/users/"+this.users[i].id).then(res=>{
        console.log(res.data.message)
      })
    }
    if(today==verifdate){
      axios.get("http://localhost:8000/api/unverify/users/"+this.users[i].id).then(res=>{
        console.log(res.data.message)
      })
    }
    }
  }
})
}
}
</script>
<style lang="scss">
// Import Main styles for this application
@import "styles/style";
</style>

