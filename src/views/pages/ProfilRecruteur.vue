<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <head>
        <meta charset="UTF-8">
        <title>My Profile</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
    </head>

    <body>

        <div class="container">
            <div class="container-head">
                <div class="menu">
                    <CDropdown>
                        <CDropdownToggle color="dark">
                        </CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem href="#">offre</CDropdownItem>
                                <CDropdownItem href="#"></CDropdownItem>
                            <CDropdownItem href="#/pages/login">Déconnexion</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </div>
            </div>
            <div class="container-body">
                <div class="profile-picture">
                   <img style="max-width:200px;" :src="photo" @click="$refs.image.click" @mouseover="showimage=1" @mouseout="showimage=0"  alt="John Doe">
                   <i v-if="showimage"  class="fa fa-camera" style="font-size:40px;position:absolute;margin-left:-15%;top:220px;"></i>
                   <input type="file" style="display:none;" ref="image" @change="OnFileSelected" >
                </div>
               
                <CNav variant="tabs" role="tablist">
                    <CNavItem>
                        <CNavLink style="color: grey" href="javascript:void(0);" :active="tabPaneActiveKey === 1"
                            @click="() => { tabPaneActiveKey = 1 }">
                            Profile
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink style="color: grey" href="javascript:void(0);" :active="tabPaneActiveKey === 2"
                            @click="() => { tabPaneActiveKey = 2 }">
                            Offres
                        </CNavLink>
                    </CNavItem>
                </CNav>
                <CTabContent>
                    <CTabPane role="tabpanel" aria-labelledby="home-tab" :visible="tabPaneActiveKey === 1">
                        <div class="card">

                            <h6 class="titre">Mes informations
                            <i @click="$router.push('/pages/edit1')" class="fa fa-pencil-square-o"
                                aria-hidden="true"></i></h6>

                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Nom</td>
                                        <td>:</td>
                                        <td>{{users.firstName}}</td>
                                      
                
                                    </tr>
                                    <tr>
                                        <td>Prénom </td>
                                        <td>:</td>
                                        <td>{{users.lastName}}</td>
                                       
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>:</td>
                                        <td>{{users.email}}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>:</td>
                                        <td>{{users.address}}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Date de naissance</td>
                                        <td>:</td>
                                        <td>{{users.birthDate}}</td>
                                      
                                    </tr>
                                    <tr>
                                        <td>Sexe</td>
                                        <td>:</td>
                                        <td>{{users.gender}}</td>
                                     
                                    </tr>
                                    <tr>
                                        <td>Entreprise</td>
                                        <td>:</td>
                                        <td>{{users.company}}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>
                                            <CIcon class="p1" icon="cib-linkedin" height="30"></CIcon>
                                        </td>
                                        <td>:</td>
                                        <td>
                                            {{users.linkedin}}
                                        </td>
                                       

                                    </tr>
                                    <tr>
                                        <td>
                                            <CIcon class="p1" icon="cib-twitter" height="30"></CIcon>
                                        </td>
                                        <td>:</td>
                                        <td>
                                            {{users.twitter}} </td>
                                      

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CTabPane>
                    <CTabPane role="tabpanel" aria-labelledby="profile-tab" :visible="tabPaneActiveKey === 2">
                      
                        <CCard style="width:700px;margin-left:10px;height: 130px;" v-for="offre in offres" :key="offre.id">
                            <CCardBody >
                                <img style="width:50px;height:50px;margin-right:600px"
                                    :src="offre.logo">

                                <CCardTitle style="margin-right: 320px;margin-top: -40px;">offre : {{offre.name}}</CCardTitle>
                                <CCardText style="margin-right: 420px;margin-top: -10px;">{{offre.company}}
                                </CCardText>
                                <CButton style="margin-left:450px;color:blue;font-size: 14px;" href="#" @click="sendOffre(offre.id)">Détails</CButton>

                                <CButton style="margin-left:left;color:blue;font-size: 14px;" href="#" @click="sendList(offre.id)">Consulter liste
                                </CButton>
                            </CCardBody>
                        </CCard>


                    </CTabPane>
                </CTabContent>
            </div>

        </div>

    </body>
</template>
<script>
import  axios from 'axios';
export default {
    data(){
        return{
        tabPaneActiveKey: 1,
        user : JSON.parse(localStorage.getItem("user")),
        // nom:"",
        // prenom:"",
        // email:"",
        // adresse:"",
        // linkedin:"",
        // twitter:"",
        // enterprise:"",
        // bdate:"",
        // sexe:"",
        users:{},
        photo:require('../../assets/images/unkown.png'),
        showimage:0,
        logo : "",
        file : null,
        selectedFile: null,
        offres:[]
        }
    },
    mounted(){   
axios.get("http://localhost:8000/api/offre/user/"+this.user.id)
.then((result)=>{
axios.get("http://localhost:8000/api/users/"+this.user.id).then((res) => {
      this.users=res.data
      if(this.users.photo){
      this.photo=this.users.photo
      }
      for(let i=0;i<result.data.length;i++){
          result.data[i].company=this.users.company
      }
      this.offres=result.data
      console.log(this.offres)
    });
}); 
    },
      methods : {
 OnFileSelected(event){
         this.selectedFile =event.target.files[0]
         console.log(this.selectedFile)
         this.updatephoto()
    },
  /* this.photo=res.data.user.photo*/
          updatephoto(){
          const form = new FormData()
          form.append('file',this.selectedFile);
          form.append("upload_preset" , "YassineBm");
          form.append("resource_type", "auto")
          axios.post('https://api.cloudinary.com/v1_1/dqe0t46k3/upload', form)
          .then((result) => this.logo=result.data.secure_url).then(()=>{
          axios.put("http://localhost:8000/api/update-photo/user/"+this.user.id,{photo:this.logo})
          .then(res=>
          {
          this.photo=res.data.user.photo
          })
          })
},
  sendList(id){
      this.$router.push({path:"/forms/listeposts/"+id})
    },
      sendOffre(id)
    {
         this.$router.push({path:"/icons/detailsoffrenav/"+id})
    }
      }
}
</script>
<style scoped>
.table {
    margin-top: 20px;
}

.body {
    margin-top: 0 auto;
    font-family: 'Roboto', sans-serif;


}


.container {
    text-align: center;
    margin: -8px;
    font-family: 'Roboto', sans-serif;
    height: auto;

}

.card {
    margin-bottom: 25px;
    width: 600px;
    margin-left: 80px;
    margin-top: 30px;
}

.titre {
    text-align: center;
    font-size: 18px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


.container-head {
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 130px;
    padding-bottom: 80px;
    padding-left: 10px;
    background: rgb(151, 148, 148);

}

.menu {
    margin-top: -130px;
    text-align: left;
    color: white;
    line-height: 8px;
    cursor: pointer;

}

menu p {
    padding: 0px;

}

.profile-picture img {
    border-radius: 100%;
    margin-top: -60px;
    border: solid;
    border-width: 4px;
    border-color: white;
}

.container-body {
    padding-left: 20px;
}

.name {
    text-transform: uppercase;
}

.location {
    color: gray;
    margin: -10px;
}

.bio p {
    padding: 10px;
}

.stats {
    display: flex;
    align-items: center;
    justify-content: center;

}

.stats p {
    color: gray;
    font-size: 12px;
    margin-bottom: -15px;
    text-transform: uppercase;
}

.followers {
    padding-right: 60px;
}


.following {
    padding-right: 60px;
}

.topics {
    padding-right: 60px;
}

.buttons {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: center;
    padding: 20px 30px 30px 50px;
    margin-left: 90px;

}



.message-me:hover {
    background-color: #ffffff;
    color: rgb(54, 54, 54);
}

.follow-me:hover {
    background-color: #408afa;
    color: rgb(255, 255, 255);
    border-color: #408afa;
}

.e {
    margin-left: 630px;
    background-color: grey;
    color: white;
}

.tab {
    margin-left: 110px;
    margin-top: 50px;
    width: 500px;
    font-size: 14px;
}

@media (min-width: 600px) {

    .container {
        width: 60%;
        border-radius: 2px;
        position: absolute;
        margin: 0px 0px 30px 200px;
        box-shadow:
            0 2.8px 2.2px rgba(0, 0, 0, 0.02),
            0 6.7px 5.3px rgba(0, 0, 0, 0.028),
            0 12.5px 10px rgba(0, 0, 0, 0.035),
            0 22.3px 17.9px rgba(0, 0, 0, 0.042),
            0 41.8px 33.4px rgba(0, 0, 0, 0.05),
            0 100px 80px rgba(0, 0, 0, 0.07);
    }

    .container-head {
        border-radius: 2px;
    }

    .buttons {
        margin-bottom: 40px;
    }


}
</style>
