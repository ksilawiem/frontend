<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <router-link to="/tests/ajouter2">
        <CButton class="add" v-if="user.role=='admin'"><i class="fa fa-plus"></i></CButton>
    </router-link>
    <CButton @click="$router.push('./tests')" class="back"><i class="fa fa-arrow-left"></i></CButton>

    <div class="titre">

        <p>{{categ.nom}}</p>

        <!---- <font-awesome-icon :icon="['fas', 'user-secret']" />-->
    </div>
    <CContainer v-for="categorie in categories" :key="categorie.id">
        <CRow class="size2">
            <CCol>
                <CCardGroup>
                    <CCard>
                        <CCardBody>
                        <i class="fa fa-pencil" v-if="user.role=='admin'" @click="sendTest(categorie.id)" style="margin-left: 1000px;margin-top: -5px;"></i>
                        <i class="fa fa-close" v-if="user.role=='admin'" @click="deleteTest(categorie.id)" style="margin-left: 20px;margin-top: -5px;color: red;"></i>
                            <CCard class="mb-3" style="max=width: 540px">
                                <CRow class="g-0">
                                    <CCol :md="4">
                                        <CCardBody>
                                            <div class="row">
                                                <div class="column">
                                                    <div class="card">
                                                        <div class="card-body">
                                              
                                                            <br>
                                                            <p class="h">Questions</p>
                                                            <h4 class="h">{{categorie.nbr_qst}}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </CCardBody>
                                    </CCol>
                                    <CCol :md="8">
                                        <CCardBody>
                                            <CCardTitle>
                                                <img class="r" src="../../assets/images/11.png">
                                                <h6 class="u">{{categorie.name}}</h6>
                                            </CCardTitle>
                                            <CCardText>{{categorie.description}}</CCardText>

                                            <Button class="btn5" @click="$router.push('./details');details(categorie.id)">
                                                <i class="fa fa-angle-double-left">

                                                </i>Passer le test</Button>
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
   
    

</template>
<script>
import axios from "axios";
export default {
    name: "list1",
    data(){
        return{
            user: JSON.parse(localStorage.getItem("user")),
            categorieID : localStorage.getItem("categorieID"),
            role:"condidat",
            categories:[],
            categ:{}
        }
        },
    methods : {
    details(id){
        localStorage.setItem("testID",id);
    },
    sendTest(id){
        localStorage.setItem("testID",id);
        this.$router.push({path:"/tests/modifier2"});
    },
    deleteTest(id){
        axios.delete("http://localhost:8000/api/test/"+id).then((res) => {
for (let i=0 ; i<this.categories.length; i++)
   {
      if(this.categories[i].id==id){
        this.categories.splice(i,1)
      }
   }
      });
    }
    },
     mounted() {
    axios.get("http://localhost:8000/api/test/categorie/"+this.categorieID).then((res) => {
      this.categories=res.data
    });
      axios.get("http://localhost:8000/api/categorie/"+this.categorieID).then((result) => {
             this.categ=result.data
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
    margin-top: 60px;
    margin-left: 550px;
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