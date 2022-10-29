<template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="8">
                    <CCardGroup class="form">
                        <CCard class="p-4">
                            <CCardBody>
                                <CForm>
                                    <h5 class="p"><i>Ajouter une catégorie</i> </h5>

                                    <GroupText class="p1">
                                        Nom de la catégorie: </GroupText>
                                    <CFormInput type="text" aria-required="true" v-model="nom"/>
                                   


                                    <CRow>
                                        <CCol :xs="6" class="p1">
                                            <CButton @click="ajouter()" color="primary" class="center">Ajouter</CButton>
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
<script>
import  axios from 'axios';
export default {
    data(){
        return {
       nom :null
        }
    },
    methods:{
        ajouter(){
            axios.post("http://localhost:8000/api/categorie",{nom:this.nom})
            this.$router.push({path:"/icons/tests"});
        }
    }
}
</script>
<style>
.p {
    text-align: center;
    color: rgb(3, 43, 9);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-top: 7px;
    margin-bottom: 45px;
}

.center {
    margin-left: 270px;
    background-color: green;
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
