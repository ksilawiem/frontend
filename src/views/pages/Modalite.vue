<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="9" :lg="7" :xl="6">

                    <body>
                        <!-- <div class="alert">
                            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                            <div class="w3-panel w3-green w3-round-large">
                                <h6 class="p"><i>Modalité de paiement </i></h6>
                            </div>
                            <br />
                            <form>

                                <p class="u">Choisir comment vous allez payer votre frais d'inscription pour accéder à
                                    votre nouveau espace:</p>

                                <div class="form-group">
                                    
                                        <CButton>
                                            <img @click="payement()" class="iconee" src="../../assets/images/carte-bancaire.png">
                                        </CButton>
                                   
                                    <br>
                                <div>
<stripe-checkout
ref="checkoutRef"
mode="payment"
:pk="publishableKey"
:line-items="lineItems" :success-url="successURL"
:cancel-url="cancelURL"
@loading="v => loading = v"
/>
                                    
                                        <CButton @click="submit()"> <img class="iconee1" src="../../assets/images/carte-de-credit.png">
                                        </CButton>
                                    
                                    <br>
                                </div>


                                </div>


                            </form>
                        </div> -->
                         
<div class="alert">
                            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                            <div class="w3-panel w3-green w3-round-large">
                                <p class="p"><i>Modalité de paiement </i></p>
                            </div>
                            <br />
                            <form>

                                <p class="u">Choisir comment vous allez payer votre frais d'inscription pour accéder à
                                    votre nouveau espace:</p>
                                <table style="margin-left:170px">
                                    <tr>
                                        <th>
                                         
                                                <CButton @click="payement()">
                                                    <i  class="fa fa-credit-card" style="font-size:55px;margin-left: -80px; color:white;margin-top: 40px;"></i>

                                                    <!-- <img class="iconee" src="../../assets/images/carte-bancaire.png"> -->
                                                </CButton>
                                       
                                        </th>
                                        <th>
                                            <CButton>
                                            <i @click="submita()" class="fa fa-cc-stripe" style="font-size:55px;margin-left:80px;margin-top: 40px;color:white;"></i>
                                            </CButton>
                                  </th>
                                    </tr>

                                    <tr>
                                        <th > 
                                     <p style="margin-left: -80px;">Carte bancaire</p>       
                                        </th>
                                        <th > 
                                     <p style="margin-left: 105px;">Stripe</p>       
                                        </th>
                                        </tr>
                
                                        
                                    

                                </table>
                            </form>
                        </div>
                    </body>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>
<script>

export default ({
name: "modalite",

data(){

    return {
     
    };
},
methods:{
payement(){
let recruteur = JSON.parse(localStorage.getItem("recruteur"))
recruteur['modePaiment']="carte banqaire";
localStorage.setItem("recruteur",JSON.stringify(recruteur))
this.$router.push({path:"/pages/paiement"});
},
 submita () {
let recruteur = JSON.parse(localStorage.getItem("recruteur"))
recruteur['modePaiment']="Stripe";
localStorage.setItem("recruteur",JSON.stringify(recruteur))
this.$router.push({path:"/pages/ChoicePayement"});
    },
}
})
</script>

<style scoped>
.center {
    text-align: center;
    margin-right: 50px;
    margin-top: 90px;
}

.check {
    margin-left: 280px;
    margin-top: -140px;

}

.u {
    margin-left: 10px;
    font-size: 14px;
}





.iconee {
    width: 115px;
    height: 125px;
    margin-left: 145px;
    margin-bottom: 40px;
    margin-top: -20px;
}

.g {
    margin-top: 60px;
}

.m {
    margin-left: -145px;
    margin-top: -30px;
}

.label {
    margin-left: 290px;
    margin-bottom: -0px;

}



.iconee1 {
    width: 75px;
    height: 95px;
    margin-left: 320px;
    margin-top: -155px;
    margin-bottom: -20px;

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

fa-cc-stripe {
    width: 75px;
    height: 95px;
    margin-left: 320px;
    margin-top: -155px;
    margin-bottom: -20px;
}

.p {
    text-align: center;
    color: rgb(151, 184, 228);
    font-size: 25px;
    font-family: bold;
}

.alert {
    padding: 20px;
    background-color: #202070;
    color: white;
}
</style>
