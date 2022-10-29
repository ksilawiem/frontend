<template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="9" :lg="7" :xl="6">
                    <CCard class="mx-4">
                        <CCardBody class="p-4">
                            <form>
                                <h6>Déposer ici vos documents</h6>
                                <div class="form-group">
                                    <label for="exampleFormControlFile1">Curriculum vitae</label>
                                    <input
                                        type="file"
                                        class="form-control-file"
                                        id="exampleFormControlFile1"
                                    />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="exampl eFormControlFile1">Lettre de motivation :</label>
                                    <input
                                        type="file"
                                        class="form-control-file"
                                        id="exampleFormControlFile1"
                                    />
                                </div>
                                <button type="submit" class="btn btn-success">Envoyer</button>
                            </form>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>