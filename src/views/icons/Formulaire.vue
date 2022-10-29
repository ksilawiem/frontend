<template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="8">
                    <CCardGroup class="form">
                        <CCard class="p-4">
                            <CCardBody>
                                <CForm>
                                    <h5 class="p"><i>Offre devéloppeur FULLSTACK reactJS</i> </h5>
                                    <h6 class="p2"><i>Veuillez remplir soigneusement ce formulaire</i></h6>

                                    <GroupText class="p1">
                                        Nom : </GroupText>
                                    <CFormInput type="text" aria-required="true" />
                                    <GroupText class="p1">
                                        Prénom :
                                    </GroupText>
                                    <CFormInput type="text" min="1" aria-required="true" />
                                    <GroupText class="p1">
                                        Email :
                                    </GroupText>
                                    <CFormInput type="text" min="1" aria-required="true" />
                                    <h6>Déposer ici vos documents</h6>
                                    <div class="form-group">
                                        <label for="exampleFormControlFile1">Curriculum vitae</label>
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="exampl eFormControlFile1">Lettre de motivation :</label>
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                    </div>

                                    <CRow>
                                        <CCol :xs="6" class="p1">
                                            <CButton color="primary" class="center">Envoyer</CButton>
                                        </CCol>
                                    </CRow>
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCardGroup>
                </CCol>
            </CRow>
        </CContainer>
    </div>



</template>
<style>
.p {
    text-align: center;
    color: rgb(36, 16, 216);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin-top: 7px;
    margin-bottom: 45px;
    text-decoration: underline;
}

.p2 {
    text-align: left;
    color: rgb(14, 15, 14);
    font-size: 12px;
}


.center {
    margin-left: 270px;
    background-color: rgb(36, 16, 216);
    margin-bottom: -60px;
    margin-top: -20px;
}

.select {
    width: 100%;
    font-size: 14px;

}

.form {
    margin-top: -250px;
    height: 150px;
}

.p1 {
    font-size: 14px;
}
</style>
