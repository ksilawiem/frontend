<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <CContainer >
        <CRow class="size2">
            <CCol>
                <CCardGroup>
                    <CCard>
                        <CCardBody>
                            <CCard class="mb-3" >
                                <CRow class="g-0">
                                    
                                    <CCol :md="8">
                                        <CCardBody>
                                            <CCardTitle>
                                                <img class="r" src="../../assets/images/11.png">
                                                <h6 class="u">{{test.name}}</h6>
                                                <br>
                                                <h6 class="u">score : {{tooked.score}}</h6>
                                            </CCardTitle>
                                            <Button class="btn5" @click="$router.push('./tests')">
                                                Terminer</Button>
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
import axios from "axios";
export default {
    data(){
        return{
      test: {},
      testID: localStorage.getItem("testID"),
      user: JSON.parse(localStorage.getItem("user")),
      tookID : localStorage.getItem("tookID"),
      tooked : {}
        }
    },
    mounted() {
    axios.get("http://localhost:8000/api/take-test/"+this.tookID).then((res) => {
      this.tooked=res.data.took
       axios.get("http://localhost:8000/api/test/"+this.tooked.test_id).then((response)=>{
        this.test=response.data
        console.log(this.tooked,this.test)
       })
      
    });
  },
}
</script>
<style scoped>
.column {
    float: left;
    width: 50%;
    padding: 0 10px;
    margin-top: 20px;
}

.btn5 {
    margin-left: 400px;
    margin-top: 300px;
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
    width: 570px;
    margin-left: 270px;
    height: 1px;
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