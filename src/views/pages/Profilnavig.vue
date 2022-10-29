<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


  <head>

    <meta charset="utf-8">
    <title>John Doe's Profile</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css?family=Muli%7CRoboto:400,300,500,700,900" rel="stylesheet">
  </head>

  <body>

    <!-- <div class="main-nav">
      <ul class="nav">
        <li class="name">John Doe</li>
        <li><a class="name" @click="$router.push('/pages/profil')">Mes offres d'emploi</a></li>
        <li><a class="name" @click="$router.push('/pages/profil')">Mes tests</a></li>
        <li><a class="name" @click="$router.push('/pages/login')">Déconnexion</a></li>
      </ul>
    </div> -->
    <header>
     
<div>
      <img  :src="photo" alt="John Doe" class="profile-image">
     
     
  </div>   
    </header>
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
          Tests
        </CNavLink>
      
      </CNavItem> 
    </CNav>
    <CTabContent>
      <CTabPane role="tabpanel" aria-labelledby="home-tab" :visible="tabPaneActiveKey === 1">
        <div class="div1">
          <div class="card">
            <CNavbar expand="lg" color-scheme="light" class="bg-light">
              <CContainer fluid>
                <CNavbarBrand class="info"> Informations
                </CNavbarBrand>
                <CNavbarToggler @click="visible = !visible" />
                <CCollapse class="navbar-collapse" :visible="visible">
                </CCollapse>
              </CContainer>
            </CNavbar>
            <table class="table">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{{users.firstName}} {{users.lastName}}</td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{{users.email}}</td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>{{users.address}}</td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CIcon class="p1" icon="cib-linkedin" height="30"></CIcon>
                  </td>
                  <td>:</td>
                  <td>
                   {{users.linkedin}}
                  </td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>
                    <CIcon class="p1" icon="cib-twitter" height="30"></CIcon>
                  </td>
                  <td>:</td>
                  <td>
                    {{users.twitter}} </td>
                  <td>
                  </td>
                </tr>
              </tbody>
            </table>
            <CNavbar expand="lg" color-scheme="light" class="bg-light">
              <CContainer fluid>
                <CNavbarBrand class="info">formation          
                </CNavbarBrand>
                <CNavbarToggler @click="visible = !visible" />
                <CCollapse class="navbar-collapse" :visible="visible">
                </CCollapse>
              </CContainer>
            </CNavbar>
            <table class="table1">
              <tbody>
                <div v-for="formation in formations" :key="formation.id">
                <tr>
                  <td>Nom</td>
                  <td>:</td>
                  <td>{{formation.name}}</td>
                  <!-- <td>
                    <i class="fa fa-trash" aria-hidden="true" style="margin-left:920px;"></i>
                  </td>
                -->

                  <td>Institut</td>
                  <td>:</td>
                  <td>{{formation.institut}}</td>
                  <!-- <td>
                    <i class="fa fa-trash" aria-hidden="true" style="margin-left:920px;"></i>
                  </td> -->


                  <td>Date</td>
                  <td>:</td>
                  <td>{{formation.formationDate}}</td>
                </tr>
            </div>
            </tbody>
            </table>

            <CNavbar expand="lg" color-scheme="light" class="bg-light">
              <CContainer fluid>
                <CNavbarBrand class="info">compétences
                </CNavbarBrand>
                <CNavbarToggler @click="visible = !visible" />
                <CCollapse class="navbar-collapse" :visible="visible">
                </CCollapse>
              </CContainer>
            </CNavbar>
            <table class="table1">
              <tbody>
                <div v-for="competance in competances" :key="competance.id"> 
                <tr>
                  <td>Nom</td>
                  <td>:</td>
                  <td>{{competance.name}}</td>
                </tr>
                </div>
              </tbody>
            </table>
            <CNavbar expand="lg" color-scheme="light" class="bg-light">
              <CContainer fluid>
                <CNavbarBrand class="info">expériences
                </CNavbarBrand>
                <CNavbarToggler @click="visible = !visible" />
                <CCollapse class="navbar-collapse" :visible="visible">
                </CCollapse>
              </CContainer>
            </CNavbar>
            <table class="table1">
              <tbody>
                <div v-for="experience in experiences" :key="experience.id">
                <tr>
                  <td>Entreprise</td>
                  <td>:</td>
                  <td>{{experience.enterprise}}</td>
                  <!-- <td>
                    <i class="fa fa-trash" aria-hidden="true" style="margin-left:900px;"></i>
                  </td> -->

                  <td>Période d'expérience</td>
                  <td>{{experience.startedAt}} :</td>
                  <td>{{experience.endedAt}}</td>
                </tr>
                </div>
                  </tbody>
            </table>
          </div>
        </div>



      </CTabPane>
     
      <CTabPane role="tabpanel" aria-labelledby="contact-tab" :visible="tabPaneActiveKey === 2">

        <CCard style="width:1100px;margin-left:120px;height: 130px;" v-for="took in tookeds" :key="took.id">
          <CCardBody>
              <CCardTitle style="margin-left: 20px;margin-top: 10px;">nom test : {{took.name}} : score {{took.score}}</CCardTitle>
            <CCardText style="margin-left: 20px;margin-top: 10px;"> test description : {{took.description}}
            </CCardText>
          </CCardBody>
        </CCard>

      </CTabPane>
    </CTabContent>


  </body>
</template>
<script>
import  axios from 'axios';
export default {
  data() {
    return {
     tabPaneActiveKey: 1,
     formations:[],
     competances:[],
     experiences:[],
     tookeds:[],
     users:{},
     photo:require('../../assets/images/unkown.png'),
    }
  },
  mounted() {
    axios.get("http://localhost:8000/api/formation/user/"+this.$route.params.id).then((res) => {
      this.formations=res.data.formations
    });
    axios.get("http://localhost:8000/api/domaine/user/"+this.$route.params.id).then((res) => {
      this.competances=res.data.domaines
    });
    axios.get("http://localhost:8000/api/experience/user/"+this.$route.params.id).then((res) => {
      this.experiences=res.data.experiences
    });
    axios.get("http://localhost:8000/api/users/"+this.$route.params.id).then((res) => {
      this.users=res.data
      if(this.users.photo){
      this.photo=this.users.photo
      }
      console.log(res.data)
    });
      axios.get("http://localhost:8000/api/take-test/user/"+this.$route.params.id).then((res) => {
      let tookeds=res.data.tooks
      for(let i=0;i<tookeds.length;i++){
             axios.get("http://localhost:8000/api/test/"+tookeds[i].test_id).then((res) => {
            let test=res.data
            test["score"]=tookeds[i].score
            this.tookeds.push(test)
    });
  }
    });
  
  },

}
</script>
<style scoped>


/* Global Layout Set-up */
* {
  box-sizing: border-box;
}

body {
  margin: 30px;
  font-family: sans-serif;
}




h2 {
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
}

.input1{
  border-radius: 25px;
  height: 30px;
  margin-bottom: 5px;
  margin-top: 5px;
}
.skills ul {
  margin-bottom: 30px;
  font-size: 0;
  /* Fixes li spacing issue */
}

.skill {
  height: 40px;
  line-height: 40px;
  margin-right: 10px;
  padding: 0 15px;
  display: inline-block;
  font-size: 16px;
  color: #333333;
  border: 1px solid #333333;
  border-radius: 4px;
  cursor: pointer;
}

.skill.unrated {
  opacity: 0.5;
}


#unrated.skills ul {
  margin-top: 15px;
}

#unrated.skills label {
  color: #333333;
  opacity: 0.5;
}



#popover {
  width: 220px;
  padding: 15px 0 15px 15px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 7.5px 10px rgba(0, 0, 0, 0.25);
  transform: translate(-15px, -15px);
  position: absolute;
  z-index: 1000;
  display: none;
}

#popover.show {
  display: block;
}

#popover a {
  padding: 15px 0;
  display: block;
  border-bottom: 1px solid #E5E7E9;
  color: #0097FD;
  font-size: 16px;
  text-decoration: none;
}

#popover a.selected {
  background-repeat: no-repeat;
  background-position: center right 15px;
}

#popover .skill {
  margin-bottom: 15px;
  pointer-events: none;
}

#popover .skill.pop {
  animation: pop 250ms ease-out;
}

#popover .icon {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 25px;
  right: 15px;
  background-repeat: no-repeat;
  background-position: center center;
}

#popover label {
  width: 100%;
  display: block;
  font-size: 14px;
  color: #808080;
  font-weight: 100;
}


.edit {
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 64 (93537) - https://sketch.com --%3E%3Ctitle%3EPen%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3Cpath d='M13.4409279,0.393557034 L17.6063562,4.55898529 C17.7978813,4.75051041 17.7978813,5.0616172 17.6063562,5.25314232 L6.15130693,16.7081916 L0.25,17.7494271 L1.29172164,11.8486063 L12.7467709,0.393557034 C12.938296,0.202031916 13.2489167,0.202031916 13.4409279,0.393557034 Z M9.481,6.4639132 L3.09659831,12.9484504 L2.58333333,15.4165799 L5.20092773,14.8926337 L11.562,8.5449132 L9.481,6.4639132 Z M13.0870492,2.8031002 L11.119,4.8019132 L13.214,6.8969132 L15.2069133,4.90936341 L13.0870492,2.8031002 Z' id='path-1'%3E%3C/path%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cmask id='mask-2' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='Pen' fill='%230097FD' fill-rule='nonzero' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/svg%3E")
}

.loading {
  animation: rotate 0.6s linear infinite;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 64 (93537) - https://sketch.com --%3E%3Ctitle%3ELoading Spinner%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.93812,0.04342477 C16.0210666,0.516339981 20,4.79350514 20,10 C20,15.5228475 15.5228475,20 10,20 C4.79350514,20 0.516339981,16.0210666 0.04342477,10.93812 L2.87313592,10.937873 C3.33268165,14.4642748 6.34831917,17.1875 10,17.1875 C13.9695466,17.1875 17.1875,13.9695466 17.1875,10 C17.1875,6.34831917 14.4642748,3.33268165 10.937873,2.87313592 Z' id='Loading-Spinner' fill='%230097FD'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")
}

@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg)
  }

  to {
    -webkit-transform: rotate(360deg)
  }
}

@keyframes pop {
  0% {
    transform: scale(0.5);
    /*
		color:#333333;
		border-color:#333333;
		*/
    color: #0097FD;
    border-color: #0097FD;
  }

  75% {
    transform: scale(1.2);
    font-weight: 600;
    opacity: 1;
    /*
		color:#333333;
		border-color:#333333;
		*/
    color: #0097FD;
    border-color: #0097FD;
  }

  100% {
    transform: scale(1);
  }
}

body {
  margin: 0;
  padding: 0;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #222;
  background: #f7f5f0;
}

.modifier {
  background-color: #0c0422;
  color: white;
  margin-top: 90px;
  margin-left: 10px;
  margin-bottom: 130px;
}

/* Link Styles */

a {
  text-decoration: none;
  color: #999;
}

a:hover {
  color: #6633ff;
}

/* Section Styles */

.main-nav {
  width: 100%;
  background: rgb(26, 25, 25);
  min-height: 30px;
  padding: 10px;
  text-align: center;
}

.nav {
  display: flex;
  font-weight: 700;
  margin: 0 auto;
  padding: 0;
}

.nav .name {
  display: block;
  margin-right: auto;
  color: rgb(253, 249, 249);
}

.nav li {
  padding: 5px 10px 10px 10px;
}

.nav a {
  transition: all .5s;
}

.nav a:hover {
  color: white
}

header {
  text-align: center;
  background: url('https://placeimg.com/1000/989/arch') no-repeat top center;
  background-size: cover;
  width: 1200px;
  margin-left: 80px;
  height: 2px;
}

header {
  line-height: 1;
}

header .profile-image {
  margin-top: 50px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 3px solid white;
  transition: all .5s;
  margin-top: 310px;

}

header .profile-image:hover {
  transform: scale(1.2) rotate(5deg);
}

.tag {
  background-color: #efefef;
  color: black;
  padding: 10px;
  border-radius: 5px;
  margin: 10px auto;
}



.card {
  margin: 15px;
  max-height: 800px;
  max-width: 1200px;
  text-align: left;
  background: #fff;
  border-bottom: 4px solid #ccc;
}



ul.skills {
  padding: 0;
  text-align: center;
  margin-top: 25px;
}

.skills li {
  border-radius: 6px;
  display: inline-block;
  background: #636260;
  color: white;
  padding: 5px 10px;
  margin: 2px;
}

.skills li:nth-child(odd) {
  background: #01111c;
}

footer {
  width: 100%;
  min-height: 30px;
  padding: 20px 0 40px 20px;
}



footer ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

footer ul li {
  display: inline-block;
}




/* Styles for larger screens */
@media screen and (min-width: 720px) {

  .flex {
    display: -ms-flexbox;
    /* TWEENER - IE 10 */
    display: flex;
    max-width: 1200px;
    margin-left: 20px;
  }

  header {
    min-height: 470px;
  }

  .nav {
    max-width: 1200px;
    padding: 0 30px;
  }


  main {
    padding-top: 20px;
  }

  main p {
    line-height: 1.6em;
  }

  footer {
    font-size: 1.3em;
    max-width: 1200px;
    margin: 40px auto;
  }

  .titre {
    text-align: center;
  }
}

.menu {
  margin-left: 1162px;
}

.table{
border-style:none;
margin-top: 20px;
width: 30%;
font-size: 12px;
border-collapse: collapse;
}

.table1{
border: none;
width: 60%;
font-size: 12px;
margin-top: 20px;
border-collapse: collapse;
}
td {
  padding: 0.5rem;
}


.div {
  margin-left: 80px;
}

.div1 {
  margin-left: 80px;
  margin-top: 50px;
}

.info {
  font-size: 15px;
}

.pos {
  margin-right: 2px;
}

body {
  font-family: 'Arial';
}

.button-group {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.btnn {
  border-color: white;
}

.button-group button {
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 10px;
}

.button-group button:hover {
  cursor: pointer;
  box-shadow: 0 0 10px 0 #ccc;
}

.dialog-container {
  position: absolute;
  left: 50%;
  top: -30%;
  transform: translateX(-50%) translateY(-50%);
  width: 400px;
  background: #fff;
  padding: 10px;
  border: 2px solid #ddd;
  box-shadow: 1px 1px 5px 1px #ccc;
  border-radius: 10px;
  opacity: 0;
  transition: all 0.3s linear 0s;
}

.dialog-header {
  padding: 10px;
  font-weight: bold;
  background: #575757;
  color: #f6f7f8;
}

.dialog-body {
  padding: 10px;
  line-height: 30px;
}

.dialog-footer {
  text-align: center;
  background: #f5f5f2;
  padding: 3px 0;
}


.dialog-footer a {
  display: inline-block;
  width: 100px;
  padding: 5px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #eee;
  cursor: pointer;
}

.fa-plus {
  margin-left: 1020px;
}

.dialog-footer a:active {
  box-shadow: inset 2px 2px 4px 0 #ccc;
  color: #666;
}



.tab {
  margin-left: 150px;
  margin-top: 50px;
  width: 1000px;
}
</style>

