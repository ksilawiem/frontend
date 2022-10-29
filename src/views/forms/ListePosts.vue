
<template >
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

  <!---- <form class="example" action="/dashboard" style="max-width:300px">
    <input class="input" type="text" placeholder="Taper un nom.." name="search2">
    <button type="submit"><i class="fa fa-search"></i></button>
  </form>-->
  <h6>C++</h6>

  <p @click="openpdf()">imprimer<CButton class="btn"><i class="fa fa-check"></i></CButton>
  </p>



  <CTable class="table">
    <CTableHead>
      <CTableRow>


        <CTableHeaderCell scope="col" class="etat" @click="tri('firstName')">Nom
          <i class="fa fa-long-arrow-up" v-if="sortedby == 'firstName'"></i>
          <i class="fa fa-long-arrow-down" v-if="sortedby == 'firstNamedesc'"></i>
        </CTableHeaderCell>
        <CTableHeaderCell scope="col" class="etat" @click="tri('lastName')">Prénom
          <i class="fa fa-long-arrow-up" v-if="sortedby == 'lastName'"></i>
          <i class="fa fa-long-arrow-down" v-if="sortedby == 'lastNamedesc'"></i>
        </CTableHeaderCell>
        <CTableHeaderCell scope="col" class="etat" @click="tri('email')">Email
          <i class="fa fa-long-arrow-up" v-if="sortedby == 'email'"></i>
          <i class="fa fa-long-arrow-down" v-if="sortedby == 'emaildesc'"></i>
        </CTableHeaderCell>
        <CTableHeaderCell type="file" scope="col">CV
        </CTableHeaderCell>
        <CTableHeaderCell scope="col" @click="tri('address')">address
          <i class="fa fa-long-arrow-up" v-if="sortedby == 'address'"></i>
          <i class="fa fa-long-arrow-down" v-if="sortedby == 'addressNamedesc'"></i>
        </CTableHeaderCell>

        <CTableHeaderCell scope="col" @click="tri('score')">score
          <i class="fa fa-long-arrow-up" v-if="sortedby == 'score'"></i>
          <i class="fa fa-long-arrow-down" v-if="sortedby == 'scoredesc'"></i>
        </CTableHeaderCell>
        <CTableHeaderCell scope="col"></CTableHeaderCell>
        <CTableHeaderCell scope="col"></CTableHeaderCell>


      </CTableRow>
      <CTableRow>

        <CTableHeaderCell scope="col" class="etat">
          <input class="input2" type="text" v-model="filterparname">
        </CTableHeaderCell>
        <CTableHeaderCell scope="col" class="etat">
          <input class="input2" type="text" v-model="filterparprenom">

        </CTableHeaderCell>
        <CTableHeaderCell scope="col" class="etat">
          <input class="input2" type="text" v-model="filterparemail">

        </CTableHeaderCell>
        <CTableHeaderCell scope="col">

        </CTableHeaderCell>

        <CTableHeaderCell scope="col">

        </CTableHeaderCell>

        <CTableHeaderCell scope="col">

        </CTableHeaderCell>


      </CTableRow>
      <CTableRow v-for="user in filtredUser" :key="user.id">

        <CTableDataCell class="etat">{{ user.firstName }}</CTableDataCell>
        <CTableDataCell class="etat">{{ user.lastName }}</CTableDataCell>
        <CTableDataCell class="etat">
          <CTableDataCell class="etat" @click="profilsenda(user.id)">
            <a class="etat2"> {{ user.email }}</a>
          </CTableDataCell>
        </CTableDataCell>
        <a :href="user.cv" target="_blank">
          <CTableDataCell class="etat">cv</CTableDataCell>
        </a>
        <CTableDataCell class="etat">{{ user.address }}</CTableDataCell>
        <CTableDataCell class="etat">{{ user.score }}</CTableDataCell>

        <CTableDataCell>

          <CButton class="btn" @click="deleteuser(user.postID)"><i class="fa fa-close"></i></CButton>
        </CTableDataCell>
      </CTableRow>
    </CTableHead>
  </CTable>
  <!-- <div class="pagination">
    <a href="#" @click="prevPage">&laquo;</a>
    <a class="active" href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">6</a>
    <a href="#" @click="nextPage">&raquo;</a>
    
  </div> -->
</template>
<script>
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import axios from 'axios'
export default {
  name: 'ListePosts',
  data() {
    return {
      posts: [],
      users: [],
      sortedby: "",
      filtredUser: [],
      filterparname: "",
      filterparprenom: "",
      filterparadd: "",
      filterparemail: "",

    }
  },
  updated() {
    this.filtredUser = []
    axios.get('http://localhost:8000/api/postuler/offre/' + this.$route.params.id)
      .then((result) => {
        this.posts = result.data.posts
        for (let i = 0; i < this.posts.length; i++) {
          axios.get('http://localhost:8000/api/users/' + this.posts[i].user_id)
            .then((res) => {
              res.data.score = this.posts[i].score
              this.filtredUser.push(res.data)
            })
        }
        // this.filtredUser=this.users.slice()
      })
  },
  watch: {
    filterparname(val) {
      if (val == "") {
        this.filtredUser = this.users.slice()
      }
      else {
        let filter = this.filtredUser.filter(function (a) {
          return (
            a.firstName.toLowerCase().includes(val.toLowerCase())
          )
        })
        this.filtredUser = filter
      }
    },
    filterparprenom(val) {
      if (val == "") {
        this.filtredUser = this.users.slice()
      }
      else {
        let filter = this.filtredUser.filter(function (a) {
          return (
            a.lastName.toLowerCase().includes(val.toLowerCase())
          )
        })
        this.filtredUser = filter
      }
    },
    filterparadd(val) {
      if (val == "") {
        this.filtredUser = this.users.slice()
      }
      else {
        let filter = this.filtredUser.filter(function (a) {
          return (
            a.address.toLowerCase().includes(val.toLowerCase())
          )
        })
        this.filtredUser = filter
      }
    },
    filterparemail(val) {
      if (val == "") {
        this.filtredUser = this.users.slice()
      }
      else {
        let filter = this.filtredUser.filter(function (a) {
          return (
            a.email.toLowerCase().includes(val.toLowerCase())
          )
        })
        this.filtredUser = filter
      }
    },
  },
  mounted() {
    axios.get('http://localhost:8000/api/postuler/offre/' + this.$route.params.id)
      .then((result) => {
        this.posts = result.data.posts
        for (let i = 0; i < this.posts.length; i++) {
          axios.get('http://localhost:8000/api/users/' + this.posts[i].user_id)
            .then((res) => {
              res.data.score = this.posts[i].score
              this.users.push(res.data)
            })
        }
        this.filtredUser = this.users.slice()
        console.log(this.filtredUser)
      })
  },
  methods: {
    profilsenda(id) {
      this.$router.push({ path: "/pages/profilnavig/" + id });
    },
    deleteuser(id) {
      axios.delete('http://localhost:8000/api/postuler/' + id).then(res => {
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].postID == id) {
            this.users.splice(i, 1)
          }
        }
      })
    },
    openpdf() {
      let head = [
        ['Nom', 'Prénom', 'Email', 'CV', 'address', 'score'],
      ]
      let arr = [];
      let users = this.users;
      for (let i = 0; i < users.length; i++) {
        console.log("ay haja")
        let obj = [];
        let user = users[i]
        obj.push(user.firstName);
        obj.push(user.lastName);
        obj.push(user.email);
        obj.push(user.city);
        obj.push(user.address);
        obj.push(user.score);
        arr.push(obj);
      }
      let doc = new jsPDF();
      doc.setFontSize(11);
      doc.text('Users', 11, 8);
      doc.setTextColor(100);
      doc.autoTable({
        head: head,
        body: arr,
        theme: 'grid',
      });
      doc.save('Users.pdf');
    },
    tri(val) {
      if (val == this.sortedby) {
        function compare(a, b) {
          if (a[val] > b[val]) {
            return -1;
          }
          if (a[val] < b[val]) {
            return 1;
          }
          return 0;
        }
        this.filtredUser.sort(compare)
        this.sortedby = val + "desc"
      } else {
        function compare(a, b) {
          if (a[val] < b[val]) {
            return -1;
          }
          if (a[val] > b[val]) {
            return 1;
          }
          return 0;
        }
        this.filtredUser.sort(compare)
        this.sortedby = val
      }
    },
  },
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}

form.example input[type='text'] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 60%;
  height: 40px;
  background: #f1f1f1;
}

form.example button {
  float: left;
  width: 20%;
  height: 41px;
  padding: 7px;
  background: #222629;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

form.example::after {
  content: '';
  clear: both;
  display: table;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: -1px;
  bottom: -1px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked+.slider {
  background-color: #8ca2b4;
}

.t {
  margin-left: 940px;
  margin-top: -5px;
}

.select2 {
  width: 47px;
}

input:focus+.slider {
  box-shadow: 0 0 1px #3b454d;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.input2 {
  width: 125px;
  height: 20px;
}

.etat2 {
  text-align: center;
  color: black;
  font-size: 13px;
}

.m {
  margin-top: -12px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.etat {
  text-align: left;
  font-size: 13px;
}

.b {
  background-color: white;
}

.input {
  border-color: white;
}

#myTable {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  font-size: 18px;
}

#myTable th,
#myTable td {
  text-align: left;
  padding: 12px;
}

#myTable tr {
  border-bottom: 1px solid #ddd;
}

#myTable tr.header,
#myTable tr:hover {
  background-color: #f1f1f1;
}

.pagination a {
  color: rgb(54, 47, 47);
  padding: 4px 6px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.pagination a.active {
  background-color: rgb(38, 39, 41);
  color: white;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}

.input {
  width: 800x;
}

.e {
  width: 20px;
}

.table {
  margin-top: 30px;
}

.eye {
  color: black;
  font-family: Bold;
}
</style>
