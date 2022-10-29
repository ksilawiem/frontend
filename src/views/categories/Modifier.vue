<template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center" >
                <CCol :md="8">
                    <CCardGroup class="form">
                        <CCard style="height:280px;">
                            <CCardBody>
                                <CForm>
                                    <h5 class="p"><i>Modifier une catégorie</i> </h5>

                                    <GroupText class="p1">
                                        Nom de la catégorie: </GroupText>
                                    <CFormInput type="text" aria-required="true" v-model="name"/>
                                                                      <CRow>
                                        <CCol :xs="6" class="p1">
                                            <CButton color="primary" class="center" @click="updatecat()">Modifier</CButton>
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
        return{
        id:localStorage.getItem("categorieID"),
        name:""
        }
    },
    mounted(){
    axios.get("http://localhost:8000/api/categorie/"+this.id).then((response) => {
      console.log(response.data)
      this.name=response.data.nom
    });
    },
    methods:{
        updatecat()
        {
      axios.put("http://localhost:8000/api/categorie/"+this.id+"/update",{nom:this.name}).then((response) => {
      console.log("updated")
      this.$router.push({path:"/icons/tests"});
    });
        }
    }
}
</script>
<style>
.p {
    text-align: center;
    color: rgb(22, 102, 139);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    margin-top: 7px;
    margin-bottom: 45px;
}

.center {
    margin-left: 270px;
    background-color: rgb(22, 102, 139);
    margin-bottom: -90px;
}

.form {
    margin-top: -180px;
    height: 200px;
}

.form {
    margin-top: -250px;
    height: 200px;
}

.p1 {
    font-size: 14px;
}
</style>
