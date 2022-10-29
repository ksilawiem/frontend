<template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">


                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>

                <CCol :md="10">
                    <CCardGroup>
                        <CCard class="p-1">

                            <CCardBody>
                                <CForm>

                                    <img class="logo" src="../../assets/images/logo3.png">

                                </CForm>
                            </CCardBody>
                        </CCard>
                        <CCard class="color" style="width: 45%">
                            <CCardBody>
                                <CButton @click="$router.push('./register2')">
                                   <img class="img" src="../../assets/images/candidat.jpg">
                                    <p class="p">CONDIDAT</p>
                                    <p class="p1">
                                        Etudiant ou employé?
                                        <br>Tenter à grandir vos
                                        <br>
                                        chances et
                                        <br> vos compétences?.....

                                    </p>
                                </CButton>
                                <CButton @click="$router.push('./register1')" class="img2">
                                     <img class="img" src="../../assets/images/recruteur.jpg">
                                    <p class="p">RECRUTEUR</p>
                                    <p class="p1"> Vous chercher des personnes
                                        <br> Qualifiés compatible
                                        <br> avec
                                        <br> vos postes?.
                                    </p>

                                </CButton>
                            </CCardBody>

                        </CCard>
                    </CCardGroup>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>

<script>
export default {
    name: 'Login',
}
</script>
<style scoped>
.logo {
    height: 555px;
    width: 480px;
    margin-left: -20px;
    margin-top: -25px;
    margin-bottom: -20px;
}

.img {
    height: 100px;
    width: 100px;
    color: white;
    margin-top: 150px;
}

.color {
    background-color:white;
}

.p {
    color: rgb(51, 8, 243);
    font-family: cursive;
    font-size: 28px;
}

.img2 {
    margin-left: 220px;
    margin-top: -438px;
}

.p1 {
    color: rgb(51, 12, 156);
    font-family: cursive;

}



.closebtn {
    margin-left: 2000px;
    color: white;
    font-weight: bold;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.closebtn:hover {
    color: black;
}
</style>