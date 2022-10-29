<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="9" :lg="7" :xl="6">

                    <body>


                        <div class="r">
                            <p><i>NB: Le frais d'inscription vaut 60DT*</i></p>
                            <p><i>Payer avec votre carte technologique en toute sécurité*</i></p>
                        </div>

                        <div class="row">
                            <div class="col-sm-10">
                                <div class="card">
                                    <div class="card-body">
                                        <label class="l" for="inputEmail4">NUMERO DE LA CARTE *:</label>
                                        <input type="password" class="form-control" placeholder=".... .... .... ...." />

                                        <label class="l" for="inputEmail4">CODE *:</label>
                                        <input type="password" class="form-control" placeholder="..." />

                                        <label class="l" for="inputEmail4">DATE EXP *:</label>
                                        <input type="date" class="form-control" placeholder="...." />
                                        <label class="l" for="inputEmail4">ABONNEMENT DE *:</label>
                                        <input type="select" class="form-control" placeholder="...." />



                                    </div>
                                </div>
                                <p class="pp">REMARQUE:</p>
                                <p class="r1">Votre compte sera valable pendant seulement six moix. Aprés cette durée
                                    vous avez besoin de refaire l'opération </p>
                                <input type="checkbox">
                                <p class="r2">J'ai lu et j'ai compris</p>
                            </div>
                            <CRow>
                                <CCol class="p1">

                                    <CButton color="primary" class="center">Payer maintenant</CButton>
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
<style scoped>
.center {
    text-align: center;
    margin-right: 50px;
    margin-top: 90px;
}



.l {
    font-size: 12px;
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
</style>
<script>
import { faCoffee, faStroopwafel, faDragon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
    name: 'Register',
}


</script>