<template>
  <CHeader position="sticky" class="mb-4" style="height:5px;background-color:#1E90FF;">
    <!-- <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
      <CIcon icon="cil-menu" size="lg" />

    </CHeaderToggler> -->
    <!-- <CHeaderBrand class="mx-auto d-lg-none" to="/">
        <CIcon :icon="logo" height="48" alt="Logo" />
      </CHeaderBrand> -->
      
    <CHeaderNav class="d-none d-md-flex me-auto"></CHeaderNav>
    
    <CHeaderNav>
      
      <CNavItem>
        <CNavLink class="cn" href="#">
          <i class="fa fa-paper-plane" aria-hidden="true" style="color:black; margin-top:8px; margin-left:-510px;"></i>
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">
                <p class="job">JOB</p>
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">
                <p class="job1">SEEKER</p>
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#/pages/accueil">
          <p style="font-family: bold ; color:black;">Accueil</p>
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">
          <p style="font-family: bold ; color:black;">Offres</p>
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#/icons/tests">
          <p style="font-family: bold ; color:black;">Tests</p>
        </CNavLink>
      </CNavItem>
       <CNavItem v-if="user.role=='recruteur'">
       <div class="menu">
        <CDropdown>
          <CDropdownToggle style="font-family: bold ; color:black;">Mes Offres</CDropdownToggle>
          <CDropdownMenu ><span v-for="offre in offres" :key="offre.id"> 
            <CDropdownItem @click="sendList(offre.id)">{{offre.name}}</CDropdownItem>    </span>
          </CDropdownMenu>
        </CDropdown>
      </div>
       </CNavItem>
        <CNavItem>
       <div class="menu" v-if="user.role=='admin'">
        <CDropdown>
          <CDropdownToggle style="font-family: bold ; color:black;">utilisateurs</CDropdownToggle>
          <CDropdownMenu >
            <CDropdownItem @click="sendListrecruteur()">liste des recruteur</CDropdownItem>
            <CDropdownItem @click="sendListcondidat()">liste des condidat</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </div>
       </CNavItem>
        <CNavItem>
       <div class="menu" v-if="user.role=='condidat'">
        <CDropdown>
          <CDropdownToggle style="font-family: bold ; color:blue;"></CDropdownToggle>
          <CDropdownMenu >
          
          </CDropdownMenu>
        </CDropdown>
      </div>
       </CNavItem>
      <!-- <CNavItem>
        <CNavLink href="#">
          <CIcon class="mx" icon="cil-bell" size="lg" style="margin-left:800px;"/>
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">
          <CIcon class="mx1" icon="cil-list" size="lg" style="margin-left:10px;"/>
        </CNavLink>
      </CNavItem> -->
      <!-- <CNavItem>
        <CNavLink href="#">
          <CIcon class="mx1" icon="cil-envelope-open" size="lg" style="margin-left:10px;"/>
        </CNavLink>
      </CNavItem> -->

      <AppHeaderDropdownAccnt style="margin-left:754px; position: fixed;"/>
    </CHeaderNav>
    <AppBreadcrumb />
  </CHeader>
</template>

<script>
import AppBreadcrumb from './AppBreadcrumb'
import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'
import { logo } from '@/assets/brand/logo'
import axios from "axios";
export default {
  name: 'AppHeader',
  components: {
    AppBreadcrumb,
    AppHeaderDropdownAccnt,
  },
  setup() {
    return {
      logo,
    }
  },
  data(){
    return{
    user: JSON.parse(localStorage.getItem("user")),
    offres:[]
    }
  },
  
  mounted(){
    axios.get("http://localhost:8000/api/offre/user/"+this.user.id).then((res) => {
     this.offres=res.data
    })
  },
  methods:{
    sendList(id){
      this.$router.push({path:"/forms/listeposts/"+id})
    },
     sendListrecruteur(){
      this.$router.push({path:"/forms/listerecruteurs"})
    },
     sendListcondidat(){
      this.$router.push({path:"/forms/listecondidats"})
    }
  }
  }




</script>

<style  scoped>
.mx {
  margin-left: 1150px;
}

.job {
  margin-left: -500px;
  font-size: 18px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
  position: fixed;
}

.job1 {
  margin-left: -485px;
  font-size: 18px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
  position: fixed;
}
</style>