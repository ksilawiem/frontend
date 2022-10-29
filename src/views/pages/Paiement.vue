<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="9" :lg="7" :xl="6">

                
                
                   

                    <body>


                        <div class="r">
                            <p><i>NB: Veillez renseigner ces champs avec précision*</i></p>
                            <p><i>Payer avec votre carte bancaire en toute sécurité*</i></p>
                        </div>

                        <div class="row">
                            <div class="col-sm-10">
                                <div class="card">
                                    <div class="card-body">
                                        <label class="l" for="inputEmail4">NUMERO DE LA CARTE *:</label>
                                        <input type="password" class="form-control" placeholder=".... .... .... ...." v-model="numcarte"/>

                                        <label class="l" for="inputEmail4">CODE *:</label>
                                        <input type="password" class="form-control" placeholder="...." v-model="numcode"/>
                                        <label class="l" for="inputEmail4">DATE EXP *:</label>
                                        <input type="date" class="form-control" placeholder="..." />


                                        <label class="d" for="inputEmail4">ABONNEMENT DE *:</label>
                                        <select v-model="selectdate">

                                            <option class="l" value="90">3 mois</option>
                                            <option class="l" value="180">6 mois</option>
                                            <option class="l" value="270">9 mois</option>
                                            <option class="l" value="364">1 an</option>


                                        </select>
                                        <!-- <p>Display some text when the checkbox is checked:</p>

                                        <label for="myCheck">Checkbox:</label>
                                        <input type="checkbox" id="myCheck" @click="myFunction()">


                                        <p id="text" style="display:none">Checkbox is CHECKED!</p>


<h2>Filter DIV Elements</h2>

<div id="myBtnContainer">
  <button class="btn active" @click="filterSelection('all')"> Show all</button>
  <button class="btn" @click="filterSelection('cars')"> Cars</button>
  <button class="btn" @click="filterSelection('animals')"> Animals</button>
  <button class="btn" @click="filterSelection('fruits')"> Fruits</button>
  <button class="btn" @click="filterSelection('colors')"> Colors</button>
</div>

<div class="container">
  <div class="filterDiv cars">BMW</div>
  <div class="filterDiv colors fruits">Orange</div>
  <div class="filterDiv cars">Volvo</div>
  <div class="filterDiv colors">Red</div>
  <div class="filterDiv cars animals">Mustang</div>
  <div class="filterDiv colors">Blue</div>
  <div class="filterDiv animals">Cat</div>
  <div class="filterDiv animals">Dog</div>
  <div class="filterDiv fruits">Melon</div>
  <div class="filterDiv fruits animals">Kiwi</div>
  <div class="filterDiv fruits">Banana</div>
  <div class="filterDiv fruits">Lemon</div>
  <div class="filterDiv animals">Cow</div>
</div>
 -->


                                    </div>
                                </div>
                                <p class="pp">REMARQUE:</p>
                                <p class="r1">Votre compte sera valable pendant seulement la période de votre abonnement . Aprés cette durée
                                    vous avez besoin de refaire l'opération aprés cette date. </p>
                                <input type="checkbox">
                                <p class="r2">J'ai lu et j'ai compris</p>
                            </div>
                            <CRow>
                                <CCol class="p1">

                                    <CButton @click="inscri" class="center">Payer maintenant</CButton>
                                </CCol>
                            </CRow>
                            <form>




                            </form>
                        </div>
                    </body>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>
<style>
.center {
    text-align: center;
    margin-right: 50px;
    margin-top: 90px;
}



.l {
    font-size: 12px;
}

.d {
    font-size: 12px;
    margin-top: 20px;
}

.p1 {
    margin-left: 190px;
}

.pp {
    margin-left: 10px;
    font-size: 12px;
    text-decoration: underline;
    margin-top: 20px;


}

.r {
    margin-top: 40px;
    font-size: 12px;
    margin-left: 66px;
    text-decoration: underline;
}

.r1 {
    margin-top: 15px;
    font-size: 12px;
    margin-left: 6px;
}

.r2 {
    margin-top: -22px;
    font-size: 12px;
    margin-left: 25px;
}


.iconee {
    width: 95px;
    height: 115px;
    margin-left: 45px;
}

.g {
    margin-top: 60px;
}

.m {
    margin-left: -145px;
    margin-top: -30px;
}

.label {
    margin-left: 270px;
}


.iconee1 {
    width: 75px;
    height: 95px;
    margin-left: 200px;
    margin-top: -155px;
}

.svg {
    background-color: white;
    position: absolute;
    top: 0px;
    right: 1px;
    color: white;
    /* padding: 10px 10px; */
    font-size: 16px;
    border: none;
}

.closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.p {
    text-align: center;
    color: rgb(56, 26, 167);
    font-size: 17px;
}

.alert {
    padding: 20px;
    background-color: #202070;
    color: white;
}

.row {
    margin-left: 50px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 30px;

}
.filterDiv {
  float: left;
  background-color: #2196F3;
  color: #ffffff;
  width: 100px;
  line-height: 100px;
  text-align: center;
  margin: 2px;
  display: none;
}

.show {
  display: block;
}

.container {
  margin-top: 20px;
  overflow: hidden;
}

/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
}

.btn:hover {
  background-color: #ddd;
}

.btn.active {
  background-color: #666;
  color: white;
}
</style>
<script>
import { faCoffee, faStroopwafel, faDragon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from "axios";
export default {
    name: 'Paiement ',

data(){
    return{
selectdate : null
    }
},
    methods:{
 inscri(){
     let recruteur = JSON.parse(localStorage.getItem("recruteur"))
     let date = new Date()
     let debut =""+date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+""
     date.setDate(date.getDate()+Number(this.selectdate))
     let fin = ""+date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+""
     axios.post("http://localhost:8000/api/users/create",{firstName:recruteur.firstName,lastName:recruteur.lastName,email:recruteur.email,password:recruteur.password,address:recruteur.address,birthDate:recruteur.birthDate,company:recruteur.company,city:recruteur.city,gender:recruteur.gender,role:recruteur.role
        ,experience:null,leve:null,diplom:null,cv:null,modePaiment:recruteur.modePaiment,début:debut,fin:fin,level:null
        }).then(res=>{
           localStorage.removeItem("recruteur")
           this.$router.push({path:"/pages/login"});
        })
 }
    }






//  mounted() {
     
//       function myFunction() {
//                             var checkBox = document.getElementById("myCheck");
//                             var text = document.getElementById("text");

//                             if (checkBox.checked == true) {
//                             text.style.display = "block";
//                             } else {
//                             text.style.display = "none";
//                             }

   
//    }
//    filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
// }
}

</script>