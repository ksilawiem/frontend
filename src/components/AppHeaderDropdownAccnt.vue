<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
      <CAvatar :src="photo" size="md" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader component="h6" class="bg-light fw-semibold py-2">
        Account
      </CDropdownHeader>
      
      <CDropdownItem @click="sendprofil()"> <CIcon icon="cil-user"/> Profile </CDropdownItem>
     
      <CDropdownItem @click="logout()"> <CIcon icon="cil-lock-locked" /> Logout </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from '@/assets/images/avatars/8.jpg'
import axios from "axios";
export default {
  name: 'AppHeaderDropdownAccnt',
  setup() {
    return {
      avatar: avatar,
      itemsCount: 42,
    }
  },
  data(){
     return{
        user: JSON.parse(localStorage.getItem("user")),
        users:{},
        photo:require('../assets/images/unkown.png'),
        // showimage:0,
        // logo : "",
        // file : null,
        // selectedFile: null,
     }
  },
  mounted(){
axios.get("http://localhost:8000/api/users/"+this.user.id).then((res) => {
      this.users=res.data
      if(this.users.photo){
      this.photo=this.users.photo
      }
      console.log(this.users)
    });
    },
  methods:{
    logout(){
      localStorage.clear()
      this.$router.push({path:"/pages/login"});
    },
    sendprofil()
    {
      if(this.user.role=="recruteur")
      {
        this.$router.push({path:"/pages/profilrecruteur"});
      }else
      {
        this.$router.push({path:"/pages/profilcondidat"});
      }
    }
  }
}
</script>
