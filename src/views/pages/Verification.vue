<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <CContainer >
  <p>a</p>

    </CContainer>
</template>
<script>
import axios from "axios";
export default {
     data(){
        return{
     user: [],
        }
    },
    mounted(){
      axios.get("http://localhost:8000/api/verification/users/"+this.$route.params.id)
        .then(res=>{
            console.log(res)
        })
        axios.get("http://localhost:8000/api/users/"+1)
        .then(result=>{
            console.log(result.data)
            // this.firstName=this.user.firstName
        })
        this.$router.push({path:"/pages/login"});
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