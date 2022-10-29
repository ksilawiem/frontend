<template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="8">
                    <CCardGroup class="form">
                        <CCard class="p-4">
                            <CCardBody>
                                <CForm>
                                    <h5 class="p"><i>Ajouter un test</i> </h5>

                                    <GroupText class="p1">
                                        Nom du test: </GroupText>
                                    <CFormInput type="text" aria-required="true" v-model="nomTest"/>
                                    <GroupText class="p1">
                                        Description :
                                    </GroupText>
                                    <CFormInput type="text" aria-required="true" v-model="description"/>
                                    <CRow>
                                        <CCol :xs="6" class="p1">

                                            <CButton @click="ajouterTest()" color="primary"
                                                class="center" :disabled="load">Ajouter</CButton>
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
import axios from "axios";
export default {
    data(){
        return {
load : false,
nomTest : null,
description : null,
score : null,
temps : null,
categorieID : localStorage.getItem("categorieID")
        }
    },
   /**/
    methods : {
       
       
       ajouterTest(){
    this.load=true
   axios.post("http://localhost:8000/api/add-test/"+this.categorieID,{name:this.nomTest,description:this.description}).then(res=>{
       localStorage.setItem("testID",res.data.test.id)
       this.load=false
      this.$router.push({path:"/tests/quizouexercice"});
      })
 }
    
    }
}
</script>
<style scoped>
.p {
    text-align: center;
    color: rgb(3, 43, 9);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-top: -10px;
    margin-bottom: 45px;
}

.select {
    width: 100%;
    font-size: 14px;

}

.center {
    margin-left: 270px;
    background-color: green;
    margin-bottom: -60px;
}

.form {
    margin-top: -300px;
    height: 150px;
}

.p1 {
    font-size: 14px;
}
</style>
