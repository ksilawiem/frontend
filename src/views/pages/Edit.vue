<template>
    <div id="app">

        <form class="form">
            <p class="p">Mettre à jour vos coordonées</p>
            <div>
                <label for="name">Nom:</label>
                <input id="name" type="text" class="form-control" v-model="nom"/>
            </div>

             <div>
                <label for="name">prenom:</label>
                <input id="name" type="text" class="form-control" v-model="prenom"/>
            </div>
            <div>
                <label for="gender">Email:</label>
                <input id="phone" type="text" class="form-control" placeholder="person@gmail.com" v-model="email"/>


            </div>
            <div>
                <label for="phone">Adresse:</label>
                <input id="phone" type="text" class="form-control" v-model="adresse"/>

            </div>
            <div>
                <label for="email">Linkedin:</label>
                <input id="email" type="url" class="form-control" v-model="linkedin"/>
            </div>
            <div>
                <label for="password">Twitter:</label>
                <input id="password" type="url" class="form-control" v-model="twitter"/>
            </div>
            <div>
                <button @click="modifierprofil()" class="btn btn-lg btn-primary btn-block" type="submit">Envoyer</button>
            </div>
        </form>
    </div>
</template>
<script>
import  axios from 'axios';
export default {
    data(){
        return{
        user : JSON.parse(localStorage.getItem("user")),
        nom:"",
        prenom:"",
        email:"",
        adresse:"",
        linkedin:"",
        twitter:""
        }
    },
    mounted(){
axios.get("http://localhost:8000/api/users/"+this.user.id,).then(res=>{   
this.nom=res.data.firstName,
this.prenom=res.data.lastName,
this.email=res.data.email,
this.adresse=res.data.address,
this.linkedin=res.data.linkedin,
this.twitter=res.data.twitter
      });
    },
    methods:{
modifierprofil(){
  axios.put("http://localhost:8000/api/updateprofil/users/"+this.user.id,{firstName:this.nom,lastName:this.prenom,email:this.email,address:this.adresse,linkedin:this.linkedin,twitter:this.twitter}).then(res=>{
      this.$router.push('/pages/profilcondidat')
      })
},
    }
}
</script>
<style>
h2 {
    margin: 20px 0;
    text-align: center;
}

.form {
    max-width: 380px;
    padding: 15px 35px 45px;
    margin: 0 auto;
    margin-top: 25px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

label {
    margin: 12px 0 2px 0;
}

button {
    margin-top: 30px;
    margin-left: 90px;
}

.p {
    font-size: 15px;
    text-align: center;
}
</style>