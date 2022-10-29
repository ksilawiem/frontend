<template >
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="8">
                    <CCardGroup class="form">
                        <CCard class="p-4">
                            <CCardBody>
                                <CForm>
                                    <h5 class="p"><i>Modifier un test</i> </h5>

                                    <GroupText class="p1">
                                        Nom du test: </GroupText>
                                    <CFormInput type="text" aria-required="true"  v-model="nom" />
                                    <GroupText class="p1">
                                        Description :
                                    </GroupText>
                                    <CFormInput type="text" aria-required="true"  v-model="description"/>
                                    <CRow>
                                        <CCol :xs="6" class="p1">
                                            <CButton @click="modifier()" color="primary" class="center">Modifier</CButton>
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
    name: "Modifier",
    data() {
    return {
      categorie:{},
      nom:null,
      description:null,
      testID: localStorage.getItem("testID"),
    };
  },
  mounted() {
    axios.get("http://localhost:8000/api/test/"+this.testID).then((res) => {
      this.categorie=res.data
      this.nom=res.data.name
      this.description=res.data.description
    });
},
methods :{
    modifier()
    {
    axios.put("http://localhost:8000/api/test/"+this.testID,{name:this.nom,description:this.description}).then((res)=>
    {
        this.$router.push({path:"/tests/modifierquiz"});
    })
    }
}
}
</script>
<style scoped>
.p {
    text-align: center;
    color: rgb(139, 22, 124);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-top: 7px;
    margin-bottom: 45px;
}

.center {
    margin-left: 270px;
    background-color: rgb(109, 23, 189);
    margin-bottom: -60px;
}

.form {
    margin-top: -300px;
    height: 150px;
}

.select {
    width: 100%;
    font-size: 14px;

}
</style>
