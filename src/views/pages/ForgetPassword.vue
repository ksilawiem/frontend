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
                                          
                                            <CCardText>
                                            <h3>you have requested a password reset</h3>
                                            </CCardText>
                                            <CCardText style="margin-top:40px">
                                            <p>new password</p>
                                            <input type="text" v-model="newpassword">
                                            </CCardText>
                                            <CCardText style="margin-top:10px">
                                            <p>Verify password</p>
                                            <input type="text" v-model="newpasswordverif">
                                            </CCardText>
                                            <button class="btn5" @click="reset()">Reset password</button>
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
import  axios from 'axios';
export default {
    data(){
        return{
newpassword:"",
newpasswordverif:"",
msgerr: ""
        }
    },
    methods:{
reset(){
    if(this.newpassword==this.newpasswordverif){
axios.put("http://localhost:8000/api/passwordreset/users/"+this.$route.params.id,{password:this.newpassword})
        .then(res=>{
            console.log(res)
        })
}else{
    this.msgerr="verify password"
}
    }
}
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
    margin-top: 10px;
    background-color: rgb(34, 114, 124);
    color: white;
    max-width: 100px;
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
    width: 600px;
    margin-left: 270px;
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