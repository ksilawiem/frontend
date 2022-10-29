<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <router-link to="/tests/ajouter2">
        <CButton class="add"><i class="fa fa-plus"></i></CButton>
    </router-link>
    <CButton @click="$router.push('./tests')" class="back"><i class="fa fa-arrow-left"></i></CButton>

    <div class="titre">

        <p>C/C++</p>

        <!---- <font-awesome-icon :icon="['fas', 'user-secret']" />-->
    </div>
    <CContainer>
        <CRow class="size2">
            <CCol>
                <CCardGroup>
                    <CCard>
                        <CCardBody>
                            <CButton class="btn0"><i class="fa fa-close"></i></CButton>
                            <CButton class="btn1"><i class="fa fa-pencil"></i></CButton>


                            <CCard class="mb-3" style="max=width: 540px">
                                <CRow class="g-0">
                                    <CCol :md="4">
                                        <CCardBody>
                                            <div class="row">
                                                <div class="column">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <i class="fa fa-question"></i>
                                                            <br>
                                                            <p class="h">Questions</p>
                                                            <h4 class="h">20</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <i class="fa fa-clock-o"></i>
                                                            <br>
                                                            <p class="h">Minutes</p>
                                                            <h4 class="h">20</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CCardBody>
                                    </CCol>
                                    <CCol :md="8">
                                        <CCardBody>
                                            <CCardTitle>
                                                <img class="r" src="../../assets/images/11.png">
                                                <h6 class="u">Test 1 niveau débutant :</h6>
                                            </CCardTitle>
                                            <CCardText>Ce quiz est conçu pour tester vos connaissances sur les
                                                fondements du
                                                langage Rust, sur l'expérience technique de travail avec des
                                                implémentations
                                                générales, ainsi que sur la gestion de l'empaquetage des applications,
                                                des typages
                                                et des traits d'objets

                                            </CCardText>

                                            <Button class="btn5" @click="$router.push('./details')">
                                                <i class="fa fa-angle-double-left">

                                                </i>Passer le test</Button>
                                        </CCardBody>
                                    </CCol>
                                </CRow>
                            </CCard>
                        </CCardBody>
                    </CCard>
                </CCardGroup>
            </CCol>
        </CRow>
    </CContainer>
    <CContainer>
        <CRow class="size2">
            <CCol>
                <CCardGroup>
                    <CCard>
                        <CCardBody>
                            <CButton class="btn0"><i class="fa fa-close"></i></CButton>
                            <CButton class="btn1"><i class="fa fa-pencil"></i></CButton>


                            <CCard class="mb-3" style="max=width: 540px">
                                <CRow class="g-0">
                                    <CCol :md="4">
                                        <CCardBody>
                                            <div class="row">
                                                <div class="column">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <i class="fa fa-question"></i>
                                                            <br>
                                                            <p class="h">Questions</p>
                                                            <br>

                                                            <h4 class="h">20</h4>


                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <i class="fa fa-clock-o"></i>
                                                            <br>
                                                            <p class="h">Minutes</p>
                                                            <h4 class="h">20</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CCardBody>
                                    </CCol>
                                    <CCol :md="8">
                                        <CCardBody>
                                            <CCardTitle>
                                                <img class="r" src="../../assets/images/22.png">
                                                <h6 class="u">Test 1 niveau intermédiare :</h6>
                                            </CCardTitle>
                                            <CCardText>Ce quiz est conçu pour tester vos connaissances sur les
                                                fondements du
                                                langage Rust, sur l'expérience technique de travail avec des
                                                implémentations
                                                générales, ainsi que sur la gestion de l'empaquetage des applications,
                                                des typages
                                                et des traits d'objets

                                            </CCardText>

                                            <button class="btn5">
                                                <i class="fa fa-angle-double-left">

                                                </i>Passer le test</button>
                                        </CCardBody>
                                    </CCol>
                                </CRow>
                            </CCard>
                        </CCardBody>
                    </CCard>
                </CCardGroup>
            </CCol>
        </CRow>
    </CContainer>
    <CContainer>
        <CRow class="size2">
            <CCol>
                <CCardGroup>
                    <CCard>
                        <CCardBody>
                            <CButton class="btn0"><i class="fa fa-close"></i></CButton>
                            <CButton class="btn1"><i class="fa fa-pencil"></i></CButton>


                            <CCard class="mb-3" style="max=width: 540px">
                                <CRow class="g-0">
                                    <CCol :md="4">
                                        <CCardBody>
                                            <div class="row">
                                                <div class="column">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <i class="fa fa-question"></i>
                                                            <br>
                                                            <p class="h">Questions</p>
                                                            <h4 class="h">20</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="column">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <i class="fa fa-clock-o"></i>
                                                            <br>
                                                            <p class="h">Minutes</p>
                                                            <h4 class="h">20</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CCardBody>
                                    </CCol>
                                    <CCol :md="8">
                                        <CCardBody>
                                            <CCardTitle>
                                                <img class="r" src="../../assets/images/33.png">
                                                <h6 class="u">Test 1 niveau avancé :</h6>
                                            </CCardTitle>
                                            <CCardText>Ce quiz est conçu pour tester vos connaissances sur les
                                                fondements du
                                                langage Rust, sur l'expérience technique de travail avec des
                                                implémentations
                                                générales, ainsi que sur la gestion de l'empaquetage des applications,
                                                des typages
                                                et des traits d'objets

                                            </CCardText>

                                            <button class="btn5"><i class="fa fa-angle-double-left"></i>Passer le
                                                test</button>
                                        </CCardBody>
                                    </CCol>
                                </CRow>
                            </CCard>
                        </CCardBody>
                    </CCard>
                </CCardGroup>
            </CCol>
        </CRow>
    </CContainer>
    <CContainer>

    </CContainer>

</template>
<script>

</script>
<style scoped>
.column {
    float: left;
    width: 50%;
    padding: 0 10px;
    margin-top: 20px;
}

.btn5 {
    margin-left: 550px;
    background-color: rgb(34, 114, 124);
    color: white;
}





.lien {
    color: black;
}


.imgg {
    height: 80px;
    width: 60px;
    margin: 7px;
}

.h {
    text-align: center;
}



.titre {
    text-align: left;
    color: black;
}

.size2 {
    margin-bottom: 25px;
}

.svg {
    height: 40px;
    width: 40px;
    margin-right: 10px;
    margin-bottom: -90px;
}

.test {
    color: white;
    background-color: rgb(160, 160, 229);
}

.marge {
    margin-left: 180px;
    margin-top: -35px;
}

.btn {
    margin-left: 900px;
}



.back {
    margin-left: 55px;
    margin-top: -15px;
    font-size: 20px;
    color: rgb(87, 74, 74);
}

.test {
    height: 40px;
    width: 160px;
    margin-left: 800px;
    font-size: 15px;
    background-color: rgb(85, 147, 197);
    border: none;
    color: white;
}

.btn0 {
    margin-left: 1020px;
    margin-top: -5px;
    color: red;
}

.btn1 {
    margin-left: 1000px;
    margin-top: -64px;

}

.add {
    margin-left: 980px;
    font-size: 20px;
    color: rgb(25, 61, 25);

}

.r {
    margin-left: 22px;
    width: 30px;
    height: 30px;
    margin-top: -22px;
}

.u {
    margin-left: 70px;
    margin-top: -30px;
    font-size: 18px;
}
</style>