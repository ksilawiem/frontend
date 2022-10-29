<template>
    <CCard class="mb-3" >
        <CRow>
            <CCol :md="2">
                <CCardBody class="back">
                    <img class="img" src="../../assets/images/logo.png">
                   
                   
                    <hr class="l">

                    <p>Questions</p>

                    <p class="b"> <img class="size" src="../../assets/images/d.png">
                        <b>0/{{tests.nbr_qst}}</b>
                    </p>
                    <hr class="l">

                </CCardBody>
            </CCol>
            <div class="vl"></div>

            <CCol :md="8">
                <CCardBody >
                    <CCardTitle>
                        <h6 class="t">Test:{{tests.nom}}</h6>
                    </CCardTitle>
                    <CCardText class="t">
                        {{tests.description}}
                    </CCardText>
                 
                    
                        
               
                </CCardBody>
              <Button class="btn21" @click="commencer()" >comencer</Button>
            </CCol>
        </CRow>
    </CCard>
   
</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
      tests: [],
      testID: localStorage.getItem("testID"),
      user: JSON.parse(localStorage.getItem("user"))
        }
    },
    mounted() {
    
    axios.get("http://localhost:8000/api/test/"+this.testID).then((res) => {
      this.tests=res.data
    });
  },
  methods:{
      commencer(){
       axios.post("http://localhost:8000/api/take-test/user/"+this.user.id+"/test/"+this.testID,{startedAt:"2008-11-11 13:23:44"})
       .then(res=>{
           localStorage.setItem("tookID",res.data.tooked.id)
          this.$router.push({path:"/icons/question"});
       }
       )
      }
  }
}
</script>
<style scoped>
.vl {
    border-left: 1px solid rgb(172, 179, 185);
    height: 370px;
    position: absolute;
    left: 19.5%;
    margin-left: -6px;
}

.img {
    height: 170px;
    width: 200px;
    margin-left: -16px;
    margin-top: -16px;
}

.btn21 {
    background-color: rgb(49, 93, 151);
    margin-left: 650px;
    margin-top: 250px;
    color: white;
    width: 160px;
    position: absolute;
}

.t {
    margin-left: 30px;
    margin-right: -205px;
}

.l {
    width: 90%;
    font-family: bold;
    color: black;
}

.back1 {
    background-color: rgb(235, 242, 245);
    height: 120px;
    margin-left: 25px;
    width: 840px;
}

.back {
    background-color: rgb(235, 242, 245);
    width: 210px;
    height: 370px;
}

.size {
    width: 20px;
    height: 15px;
    margin-right: 10px;
}

.b {
    font-size: 15px;
}

.titre {
    margin-top: 30px;
}
</style>
