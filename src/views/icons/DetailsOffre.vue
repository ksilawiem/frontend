<template>
    <CCard class="mb-3">
        <CRow>
            <CCol :md="2">
                <CCardBody class="back">
                    <img class="img" :src="offre.logo">
                    <CCardTitle class="titre">QUIZ</CCardTitle>
                    <p>Temps</p>
                    <p class="b">
                        <img class="size" src="../../assets/images/c.png">
                        <b>00:00/{{offre.temps}}</b>
                    </p>
                    <hr class="l">

                    <p>Questions</p>

                    <p class="b"> <img class="size" src="../../assets/images/d.png">
                        <b>0/{{offre.nbr_qst}}</b>
                    </p>
                    <hr class="l">

                </CCardBody>
            </CCol>
            <div class="vl">

                <CCol :md="8">
                    <CCardBody>
                        <CCardTitle>
                            <h6 class="t">{{offre.name}}</h6>
                        </CCardTitle>
                        <CCardText class="t">{{offre.description}}

                        </CCardText>
                      

                        
                            <CButton class="btn21" @click="postuler()">comencer le test</CButton>
                   
                    </CCardBody>

                </CCol>
            </div>
        </CRow>
    </CCard>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
     offre:{},
     id:localStorage.getItem("offreID"),
     user: JSON.parse(localStorage.getItem("user"))
        }
    },
    mounted() {
    
    axios.get("http://localhost:8000/api/offre/"+this.id).then((res) => {
      this.offre=res.data
    });
  },
  methods:{
      postuler()
   {
    axios.post("http://localhost:8000/api/postuler/user/"+this.user["id"]+"/offre/"+this.id,{startedAt:"2008-11-11 13:23:44"})
    .then((res)=>{
    localStorage.setItem("post",res.data.Postuler.id)
     localStorage.setItem("OffreID",this.id)
    this.$router.push({path:"/icons/questionoffre"});
    })
   },
  }
}
</script>
<style>
.vl {
    border-left: 1px solid rgb(172, 179, 185);
    height: 370px;
    position: absolute;
    left: 19.5%;
    margin-left: -6px;
}


.img {
    height: 150px;
    width: 180px;
    margin-top: 30px;
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
    width: 107%;
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
    height: 470px;
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