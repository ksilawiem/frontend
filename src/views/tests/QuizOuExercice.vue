<template>
    <div class="bg-light  d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="4">
                    <CCardGroup class="form">
                        <CCard class="p-2">
                            <CCardBody>
                                <CForm>
                                    <img class="imm" src="../../assets/images/dd.jpg">

                                    <router-link to="/tests/creationquiz">
                                        <CButton class="bbt">
                                            QUIZ
                                        </CButton>
                                    </router-link>
                                    <img class="imm" src="../../assets/images/ff.jpg">

                                    <router-link to="/tests/creationexer">

                                        <CButton class="bbt">
                                            EXERCICE
                                        </CButton>
                                    </router-link>


                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCardGroup>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>
<style scoped>
.img {
    height: 100px;
    width: 100px;
    color: white;
    margin-top: 20px;

}

.imm {
    width: 105px;
    height: 70px;
    margin-left: 80px;
    margin-bottom: 20px;
}

.bbt {
    width: 200px;
    background-color: rgb(71, 129, 184);
    margin-bottom: 20px;
    margin-left: 35px;
    color: white;
}
</style>