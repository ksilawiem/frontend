
<template>
    <!-- <link rel="stylesheet" href="../../styles/font-awesome.min.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="titre">


        <h3>Mes tests</h3>
    </div>

    <CContainer>
        <CRow>
            <CCardBody>
                <CForm>
                    <CInputGroup>
                        <GroupText class="m">
                            <img class="i" src="../../assets/images/serachicon.png" />
                        </GroupText>
                        <input v-model="filterpartout" class="size" placeholder="Chercher une catégorie...">
                    </CInputGroup>
                </CForm>
            </CCardBody>
        </CRow>
    </CContainer>
    <router-link to="/categories/ajouter">
        <CButton class="add" v-if="user.role == 'admin'"><i class="fa fa-plus"></i></CButton>
    </router-link>
    <div class="d-flex flex-wrap">
        <CContainer class="size1" v-for="categorie in filtredcategorie" :key="categorie.id">
            <CRow>
                <CCol>
                    <CCardGroup>
                        <CCard>
                            <CCardBody>
                                <CForm>

                                    <i class="fa fa-pencil-square-o" v-if="user.role == 'admin'"
                                        @click="sendcategorie(categorie.id)" style="color:black;margin-left:250px;"></i>
                                    <i class="fa fa-trash" v-if="user.role == 'admin'"
                                        @click="supprcategorie(categorie.id)" style="color:red;margin-left:10px;"></i>
                                    <p class="t">{{ categorie.nom }}</p>
                                    <br>
                                    <router-link to="./liste1">
                                        <CButton @click="savecategorie(categorie.id)" color="info">
                                            <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path
                                                    d="M495.1 96c-53.13 0-102 29.25-127 76.13c-25 46.88-22.25 103.8 7.25 147.9H263.7c36.63-54.88 31.25-127.8-13-176.8c-44.38-48.87-116.4-61.37-174.6-30.25s-87.88 97.88-71.75 162c16 64 73.63 108.1 139.6 108.1h352C575.5 384 640 319.5 640 240S575.5 96 495.1 96zM63.99 240c0-44.12 35.88-80 80-80s80 35.88 80 80s-35.88 79.1-80 79.1S63.99 284.1 63.99 240zM495.1 320c-44.13 0-80-35.88-80-79.1s35.88-80 80-80s80 35.88 80 80S540.1 320 495.1 320z" />
                                            </svg>
                                            Accéder aux tests
                                        </CButton>
                                    </router-link>

                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCardGroup>
                </CCol>
            </CRow>
        </CContainer>

    </div>

    <CButton class="add" v-if="user.role == 'admin'"><i class="fa fa-plus"></i></CButton>




</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem("user")),
            categories: [],
            filtredcategorie: [],
            filterpartout: ""
        };
    },
    mounted() {
        axios.get("http://localhost:8000/api/categories").then((response) => {
            this.categories = response.data;
            this.filtredcategorie = this.categories.slice()
        });
    },
    methods: {
        savecategorie(id) {
            localStorage.setItem("categorieID", id)
        },
        supprcategorie(id) {
            axios.delete("http://localhost:8000/api/categorie/" + id + "/delete").then((response) => {
                for (let i = 0; i < this.categories.length; i++) {
                    if (this.categories[i].id == id) {
                        this.categories.splice(i, 1)
                    }
                }
            });
        },
        sendcategorie(id) {
            localStorage.setItem("categorieID", id)
            this.$router.push({ path: "/categories/modifier" });
        }
    },
    watch: {
        filterpartout(val) {
            console.log(val)
            if (val == "") {
                this.filtredcategorie = this.categories.slice()
            }
            else {
                let filter = this.filtredcategorie.filter(function (a) {
                    return (
                        a.nom.toLowerCase().includes(val.toLowerCase())
                    )
                })
                this.filtredcategorie = filter
            }
        }
    },
}
</script>
<style scoped>
.titre {
    text-align: center;
    color: black;
    font-family: "Times New Roman", Times, serif;
}

.size {
    text-align: center;
    border-color: rgb(248, 245, 245);
    width: 300px;
}

.size1 {
    height: 80%;
    width: 32%;
    flex: 1 0 33%;
    margin: 5px;
    max-width: 32%;
}

.t {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.svg {
    height: 15px;
    width: 40px;
    margin-left: -10px;
}

.size2 {
    height: 80%;
    width: 80%;
    margin-top: -620px;
    margin-left: 15px;

}

.size3 {
    height: 80%;
    width: 80%;
    margin-top: -1010px;
    margin-left: 15px;

}

.i {
    height: 45px;
    width: 45px;
}

.m {
    background-color: white;
    margin-left: 350px;
}

.add {
    margin-left: 980px;
    font-size: 20px;
    color: rgb(25, 61, 25);
}



.trash {
    margin-left: 180px;
    margin-top: -19px;
    color: rgb(168, 25, 25)
}

.edit {
    margin-left: 160px;
    margin-top: -65px;
}
</style>
