
<template >
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">




  <!---- <form class="example" action="/dashboard" style="max-width:300px">
    <input class="input" type="text" placeholder="Taper un nom.." name="search2">
    <button type="submit"><i class="fa fa-search"></i></button>
  </form>-->

  <h6 class="m"><i>Mes condidatures</i></h6>

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
        <CTableHeaderCell type="file" scope="col" class="etat">CV
        </CTableHeaderCell>
        <CTableHeaderCell scope="col" class="etat" @click="tri('address')">address
          <i class="fa fa-long-arrow-up" v-if="sortedby == 'address'"></i>
          <i class="fa fa-long-arrow-down" v-if="sortedby == 'addressNamedesc'"></i>
        </CTableHeaderCell>

        <CTableHeaderCell scope="col" class="etat" @click="tri('gender')">gender
          <i class="fa fa-long-arrow-up" v-if="sortedby == 'gender'"></i>
          <i class="fa fa-long-arrow-down" v-if="sortedby == 'genderdesc'"></i>
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
        <CTableHeaderCell scope="col" class="etat">
          <!-- <input class="input2" type="text"> -->

        </CTableHeaderCell>

        <CTableHeaderCell scope="col" class="etat">
          <!-- <input class="input2" type="text" v-model="filterparadd"> -->

        </CTableHeaderCell>

        <CTableHeaderCell scope="col" class="etat">
          <!-- <input class="input2" type="text" v-model="filterpargender"> -->

        </CTableHeaderCell>


      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow v-for="user in filtredUser" :key="user.id">
        <CTableDataCell class="etat">{{ user.firstName }}</CTableDataCell>
        <CTableDataCell class="etat">{{ user.lastName }}</CTableDataCell>
        <CTableDataCell class="etat" @click="profilsend(user.id)">
          <a class="etat2"> {{ user.email }}</a>
        </CTableDataCell>
        <a :href="user.cv" target="_blank">
          <CTableDataCell class="etat">cv</CTableDataCell>
        </a>
        <CTableDataCell class="etat">{{ user.address }}</CTableDataCell>
        <CTableDataCell class="etat">{{ user.gender }}</CTableDataCell>
        <CTableDataCell>
          <CButton class="btn" @click="deleteuser(user.id)"><i class="fa fa-close"></i></CButton>
        </CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
  <!-- <div class="pagination">
    <a href="#">&laquo;</a>
    <a class="active" href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">6</a>
    <a href="#">&raquo;</a>
  </div> -->
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      users: [],
      sortedby: "",
      filtredUser: [],
      filterparname: "",
      filterparprenom: "",
      filterparadd: "",
      filterparemail: "",
      filterpargender: "",
    }
  },
  updated() {
    this.users = []
    axios.get('http://localhost:8000/api/users').then(res => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].role == "condidat") {
          this.filtredUser.push(res.data[i])
        }
      }
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
    filterpargender(val) {
      if (val == "") {
        this.filtredUser = this.users.slice()
      }
      else {
        let filter = this.filtredUser.filter(function (a) {
          return (
            a.gender.toLowerCase().includes(val.toLowerCase())
          )
        })
        this.filtredUser = filter
      }
    },
  },
  mounted() {
    axios.get('http://localhost:8000/api/users').then(res => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].role == "condidat") {
          this.users.push(res.data[i])
        }
      }
      this.filtredUser = this.users.slice()
    })
  },
  methods: {
    deleteuser(id) {
      axios.delete('http://localhost:8000/api/users/' + id).then(res => {
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id == id) {
            this.filtredUser.splice(i, 1)
          }
        }
      })
    },
    profilsend(id) {
      this.$router.push({ path: "/pages/profilnavig/" + id });
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
  }
}

</script>
<style scoped>
* {
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}

form.example input[type=text] {
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
  content: "";
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
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: -1px;
  bottom: -1px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
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
  transition: background-color .3s;


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
