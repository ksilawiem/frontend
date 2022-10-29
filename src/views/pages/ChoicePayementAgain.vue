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
                                <p class="p"><i>Abonnement</i></p>
                            </div>
                            <br />
                            <form>

                                <p class="u">Précisez votre période d'bonnement :</p>
                                <table style="margin-left:170px">
                                    <tr>
                                        <th>
                                         
                                                <CButton @click="submit3moi($event)">
<i class="fa fa-globe" aria-hidden="true" style="font-size:55px;margin-left: -220px; color:white;margin-top: 40px;"></i>

                                                    <!-- <img class="iconee" src="../../assets/images/carte-bancaire.png"> -->
                                                </CButton>
                                       
                                        </th>
                                        <th>
                                            <CButton @click="submit6moi()">

                                            <i class="fa fa-briefcase" style="font-size:55px;margin-left: -50px; color:white;margin-top: 40px;"></i>
                                            </CButton>
<stripe-checkout
ref="checkoutRef"
mode="payment"
:pk="publishableKey"
:line-items="lineItems" :success-url="successURL"
:cancel-url="cancelURL"
@loading="v => loading = v"
/>
                                        </th>
                                         <th > 
                                             <CButton @click="submit9moi()">
                                             <i class="fa fa-plane" style="font-size:55px;margin-left: 50px; color:white;margin-top: 40px;"></i>
                                             </CButton>
                                        </th>
                                        <th > 
                                            <CButton @click="submit1an()">
                                             <i class="fa fa-rocket" style="font-size:55px;margin-left: 50px; color:white;margin-top: 40px;"></i>
                                            </CButton>
                                        </th>
                                    </tr>
                                      <tr>
                                        <th>
                                         
                                             
<p style="font-size:20px;margin-left: -140px; color:white;margin-top: 40px;">3 mois </p>

                                                    <!-- <img class="iconee" src="../../assets/images/carte-bancaire.png"> -->
                                          
                                       
                                        </th>
                                        <th>
                                            <CButton>

                                           <p style="font-size:20px;margin-left: -50px; color:white;margin-top: 40px;">6 mois</p>
                                            </CButton>
                        <stripe-checkout
ref="checkoutRef"
mode="payment"
:pk="publishableKey"
:line-items="lineItems" :success-url="successURL"
:cancel-url="cancelURL"
@loading="v => loading = v"
/>
                                        </th>
                                         <th > 
                                            <p style="font-size:20px;margin-left: 50px; color:white;margin-top: 40px;"> 9 mois</p>
                                    
                                        </th>
                                        <th > 
                                           <p style="font-size:20px;margin-left: 50px; color:white;margin-top: 40px;"> 1 an</p>
                                    
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
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default ({
name: "modalite",
components: {
    StripeCheckout,
  },
data(){
this.publishableKey = "pk_test_51KrpOwG4QVPUaXoLNDb2sXMltTtKkGBA5HnGV8lzNFadwSb9veNxWPBqWNAGwAzYN8Ne9xvYqk63KU6zTEbi6BXk00ZxPiONtN";
    return {
      typedate:"",
      loading: false,
      lineItems: [
        {
          price: 'price_1LALoRG4QVPUaXoL3AVl7hB8', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'http://localhost:8080/#/pages/successAgain',
      cancelURL: 'http://localhost:8080/pages/error',
    };
},
methods:{
payement(){
let recruteur = JSON.parse(localStorage.getItem("recruteur"))
recruteur['modePaiment']="carte banqaire";
localStorage.setItem("recruteur",JSON.stringify(recruteur))
this.$router.push({path:"/pages/paiement"});
},
submit3moi(e) {
e.preventDefault()
let recruteur = JSON.parse(localStorage.getItem("recruteur"))
recruteur['modePaiment']="Stripe";
localStorage.setItem("recruteur",JSON.stringify(recruteur))
this.typedate=90
localStorage.setItem("id_user",this.$route.params.id)
localStorage.setItem("typedate",this.typedate)
this.$refs.checkoutRef.redirectToCheckout();
},
submit6moi() {
let recruteur = JSON.parse(localStorage.getItem("recruteur"))
recruteur['modePaiment']="Stripe";
localStorage.setItem("recruteur",JSON.stringify(recruteur))
this.typedate=180
localStorage.setItem("id_user",this.$route.params.id)
localStorage.setItem("typedate",this.typedate)
this.$refs.checkoutRef.redirectToCheckout();
},
submit9moi() {
let recruteur = JSON.parse(localStorage.getItem("recruteur"))
recruteur['modePaiment']="Stripe";
localStorage.setItem("recruteur",JSON.stringify(recruteur))
this.typedate=270
localStorage.setItem("id_user",this.$route.params.id)
localStorage.setItem("typedate",this.typedate)
this.$refs.checkoutRef.redirectToCheckout();
},
submit1an() {
let recruteur = JSON.parse(localStorage.getItem("recruteur"))
recruteur['modePaiment']="Stripe";
localStorage.setItem("recruteur",JSON.stringify(recruteur))
this.typedate=365
localStorage.setItem("id_user",this.$route.params.id)
localStorage.setItem("typedate",this.typedate)
this.$refs.checkoutRef.redirectToCheckout();
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
    height: 400px;
    background-color: #202070;
    color: white;
}
</style>
