<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <div>
    <CRow class="justify-content-center">
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="10">
                <CButton @click="$router.push('/tests/nouveloffre')" class="offre"
                  v-if="user.role == 'recruteur' || user.role == 'admin'"><i class="fa fa-plus">Offre</i> </CButton>
                <div class="topnav">

                  <form>
                    <input class="marginII" type="text" placeholder="mots clés ou entreprise" name="search"
                      v-model="filterpartout">
                    <p class="ih1"><i class="fa fa-search"></i></p>
                  </form>
                </div>



                <div class="d-flex flex-wrap">
                  <div class="row">
                    <div class="col-sm-6" v-for="offre in filtredOffre" :key="offre.id">
                      <div class="card" style="margin-top:20px; max-width:400px;height:400px;background-color:#F5F5F5;">
                        <i class="fa fa-close" v-if="user.id == offre.user_id || user.role == 'admin'"
                          @click="deleteOffre(offre.id)" style="margin-left:370px;"></i>
                        <i class="fa fa-pencil" v-if="user.id == offre.user_id" @click="sendOffre(offre.id)"
                          style="margin-left:370px;margin-top:10px;"></i>
                        <div class="card-body">
                          <h6><b>{{ offre.name }}</b></h6>
                          <h6 @click="profilsendr(user.id)"> poster par : <b>{{ offre.poster }} {{ offre.poster2 }}</b>
                          </h6>
                          <p>{{ offre.address }}</p>
                          <p>Tel : {{ offre.telefone }}</p>
                          <p>categorie : {{ offre.categorie }}</p>
                          Entreprise : <img class="img" :src="offre.logo"> {{ offre.company }}
                          <p>{{ offre.description }}</p>
                          <CButton v-if="!offre.posted && user.id != offre.user_id" class="post"
                            @click="postuler(offre.id)">Postuler maintenant</CButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CCol>
            </CRow>
            <CContainer>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

  </div>
</template>

<script>
import avatar1 from '@/assets/images/avatars/1.jpg'
import avatar2 from '@/assets/images/avatars/2.jpg'
import avatar3 from '@/assets/images/avatars/3.jpg'
import avatar4 from '@/assets/images/avatars/4.jpg'
import avatar5 from '@/assets/images/avatars/5.jpg'
import avatar6 from '@/assets/images/avatars/6.jpg'
import axios from "axios";

export default {
  name: 'Dashboard',
  components: {
  },
  setup() {
    const progressGroupExample1 = [
      { title: 'Monday', value1: 34, value2: 78 },
      { title: 'Tuesday', value1: 56, value2: 94 },
      { title: 'Wednesday', value1: 12, value2: 67 },
      { title: 'Thursday', value1: 43, value2: 91 },
      { title: 'Friday', value1: 22, value2: 73 },
      { title: 'Saturday', value1: 53, value2: 82 },
      { title: 'Sunday', value1: 9, value2: 69 },
    ]
    const progressGroupExample2 = [
      { title: 'Male', icon: 'cil-user', value: 53 },
      { title: 'Female', icon: 'cil-user-female', value: 43 },
    ]
    const progressGroupExample3 = [
      {
        title: 'Organic Search',
        icon: 'cib-google',
        percent: 56,
        value: '191,235',
      },
      { title: 'Facebook', icon: 'cib-facebook', percent: 15, value: '51,223' },
      { title: 'Twitter', icon: 'cib-twitter', percent: 11, value: '37,564' },
      { title: 'LinkedIn', icon: 'cib-linkedin', percent: 8, value: '27,319' },
    ]
    const tableExample = [
      {
        avatar: { src: avatar1, status: 'success' },
        user: {
          name: 'Yiorgos Avraamu',
          new: true,
          registered: 'Jan 1, 2021',
        },
        country: { name: 'USA', flag: 'cif-us' },
        usage: {
          value: 50,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'success',
        },
        payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
        activity: '10 sec ago',
      },
      {
        avatar: { src: avatar2, status: 'danger' },
        user: {
          name: 'Avram Tarasios',
          new: false,
          registered: 'Jan 1, 2021',
        },
        country: { name: 'Brazil', flag: 'cif-br' },
        usage: {
          value: 22,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'info',
        },
        payment: { name: 'Visa', icon: 'cib-cc-visa' },
        activity: '5 minutes ago',
      },
      {
        avatar: { src: avatar3, status: 'warning' },
        user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
        country: { name: 'India', flag: 'cif-in' },
        usage: {
          value: 74,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'warning',
        },
        payment: { name: 'Stripe', icon: 'cib-cc-stripe' },
        activity: '1 hour ago',
      },
      {
        avatar: { src: avatar4, status: 'secondary' },
        user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
        country: { name: 'France', flag: 'cif-fr' },
        usage: {
          value: 98,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'danger',
        },
        payment: { name: 'PayPal', icon: 'cib-cc-paypal' },
        activity: 'Last month',
      },
      {
        avatar: { src: avatar5, status: 'success' },
        user: {
          name: 'Agapetus Tadeáš',
          new: true,
          registered: 'Jan 1, 2021',
        },
        country: { name: 'Spain', flag: 'cif-es' },
        usage: {
          value: 22,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'primary',
        },
        payment: { name: 'Google Wallet', icon: 'cib-cc-apple-pay' },
        activity: 'Last week',
      },
      {
        avatar: { src: avatar6, status: 'danger' },
        user: {
          name: 'Friderik Dávid',
          new: true,
          registered: 'Jan 1, 2021',
        },
        country: { name: 'Poland', flag: 'cif-pl' },
        usage: {
          value: 43,
          period: 'Jun 11, 2021 - Jul 10, 2021',
          color: 'success',
        },
        payment: { name: 'Amex', icon: 'cib-cc-amex' },
        activity: 'Last week',
      },
    ]

    return {
      tableExample,
      progressGroupExample1,
      progressGroupExample2,
      progressGroupExample3,
    }

  },
  data() {
    return {
      token: localStorage.getItem('token') || "",
      filtredOffre: [],
      offres: [],
      filterpartout: "",
      filterparadd: "",
      user: JSON.parse(localStorage.getItem("user"))
    }
  },
  watch: {
    filterpartout(val) {
      console.log(val)
      if (val == "") {
        this.filtredOffre = this.offres.slice()
      }
      else {
        let filter = this.filtredOffre.filter(function (a) {
          return (
            a.name.toLowerCase().includes(val.toLowerCase()) ||
            a.categorie.toLowerCase().includes(val.toLowerCase()) ||
            a.company.toLowerCase().includes(val.toLowerCase())
          )
        })
        this.filtredOffre = filter
      }
    },
    filterparadd(val) {
      if (val == "") {
        this.filtredOffre = this.offres.slice()
      }
      else {
        let filter = this.filtredOffre.filter(function (a) {
          return (
            a.address.toLowerCase().includes(val.toLowerCase())
          )
        })
        this.filtredOffre = filter
      }
    }
  },
  mounted() {
    axios.get("http://localhost:8000/api/auth/offres", { headers: { "Authorization": `Bearer ${this.token}` } }).then((res) => {
      localStorage.setItem('token', res.data.token)
      this.token = res.data.token
      console.log(this.token)
      this.offres = res.data.offres
      for (let i = 0; i < this.offres.length; i++) {
        axios.get("http://localhost:8000/api/users/" + this.offres[i].user_id).then((result) => {
          this.offres[i].company = result.data.company
          this.offres[i].poster = result.data.firstName
          this.offres[i].poster2 = result.data.lastName
        });
        this.filtredOffre = this.offres.slice()
      }
      axios.get("http://localhost:8000/api/postuler/user/" + this.user.id).then(res => {
        let posts = res.data.posts
        for (let i = 0; i < this.offres.length; i++) {
          for (let j = 0; j < posts.length; j++) {
            if (this.offres[i].id == posts[j].offre_id) {
              this.offres[i]["posted"] = true
            }
          }
          if (!this.offres[i]["posted"]) {
            this.offres[i]["posted"] = false
          }
        }
      })
    });
  },
  methods:
  {
    profilsendr(id) {
      this.$router.push({ path: "/pages/profilnavigRecruteur/" + id });
    },
    postuler(id) {
      // axios.post("http://localhost:8000/api/postuler/user/"+this.user["id"]+"/offre/"+id,{startedAt:"2008-11-11 13:23:44"})
      // .then((res)=>{
      // localStorage.setItem("post",res.data.Postuler.id)
      // localStorage.setItem("OffreID",id)
      // this.$router.push({path:"/icons/questionoffre"});
      // })
      localStorage.setItem("offreID", id)
      this.$router.push({ path: "/icons/detailsoffre" });
    },
    sendOffre(id) {
      localStorage.setItem("OffreID", id);
      this.$router.push({ path: "/tests/ModifierOffre" });
    },
    deleteOffre(id) {
      axios.delete("http://localhost:8000/api/offre/" + id)
        .then((res) => {
          for (let i = 0; i < this.filtredOffre.length; i++) {
            if (this.filtredOffre[i].id == id) {
              this.filtredOffre.splice(i, 1)
            }
          }
        })
    }

  }
}


</script>
<style scoped>
.size1 {
  height: 80%;
  width: 32%;
  flex: 1 0 33%;
  margin: 5px;
  max-width: 32%;
}

.op {
  text-align: center;
  background-color: white;
}

.title {
  margin-left: 20px;
  margin-top: -10px;
  margin-bottom: 20px;
  font-size: 12px;
}

.svg {
  width: 10px;
  height: 10px;
  margin-left: 150px;
  margin-top: -70px;
}

.select {
  margin-left: 34px;
}

.offre {
  font-family: bold;
  font-size: 18px;
  margin-left: 900px;
}


.img {
  width: 35px;
  height: 30px;
}

.text {
  font-size: 14px;
  margin-left: 55px;
  margin-top: -42px;
}

.row {
  margin-left: 20px;
}

.info {
  font-size: 12px;
}

.div {
  margin-left: 107px;
}

/* i {
  margin-right: 4px;
} */

.input {
  margin-left: 230px;
  margin-top: -30px;
}

.icone {
  margin-left: 465px;
  color: rgb(16, 16, 17);
  background-color: white;
  border: none;
  font-size: 17px;
  margin-top: 18px;
}

.trash {
  margin-left: 245px;
}

.edit {
  margin-left: 225px;
  margin-top: -26px;
}

body {
  font-family: Arial;
}

* {
  box-sizing: border-box;
}


.marginI {
  margin-left: -440px;
  width: 300px;
  border-radius: 5%;
}

.marginII {
  margin-left: 50px;
  width: 780px;
  border-radius: 5%;

}

.ih {
  margin-left: -160px;
  margin-top: -32px;
}

.ih1 {
  margin-left: 795px;
  margin-top: -32px;
}

.post1 {
  margin-left: 724px;
  color: white;
  background-color: rgb(106, 106, 204);
  margin-top: -85px;
}

.search-container1 {
  margin-left: -165px;

}



* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: white;
}

.for {
  height: 35px;
  background-color: rgb(194, 184, 184);
  margin-right: 7px;
  width: 195px;
  margin-bottom: 20px;
  border-radius: 5%;
}

.for1 {
  height: 35px;
  background-color: rgb(194, 184, 184);
  margin-right: 7px;
  width: 115px;
  margin-bottom: 20px;
  border-radius: 5%;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #2196F3;
  color: white;
}

.topnav .search-container {
  float: right;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border-color: black;

}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: rgb(255, 251, 251);
  font-size: 17px;
  border: none;
  cursor: pointer;

}

.topnav .search-container button:hover {
  background: rgb(255, 253, 253);

}

@media screen and (max-width: 800px) {
  .topnav .search-container {
    float: none;
  }

  .topnav a,
  .topnav input[type=text],
  .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;


  }

  .topnav input[type=text] {
    border: 1px solid #ccc;
  }
}



.post {
  color: white;
  background-color: #1E90FF;
}
</style>