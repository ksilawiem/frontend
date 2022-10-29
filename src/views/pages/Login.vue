<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                
                <CForm>
                  <h2 class="center"><i>Connexion</i></h2>
                  <div class="error" v-if="err">{{msgerr}}</div>
                  <p class="text-medium-emphasis">Se connecter à votre compte</p>

                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput placeholder="Nom d'utilisateur" autocomplete="username" aria-required="true" v-model="email" />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput type="password" placeholder="Mot de passe" autocomplete="current-password"
                      aria-required="true" v-model="password"/>
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="primary" class="px-4" @click="check($event)">Se connecter</CButton>
                    </CCol>
                    <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px" @click="reseta()">Mot de passe oublié?</CButton>
                      <br />
                      <h3> {{this.warning}}</h3>
                      <div class="pos">
                        <CIcon class="p1" icon="cib-twitter" height="30"></CIcon>
                        <CIcon class="p2" icon="cib-linkedin" height="30"></CIcon>
                      </div>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>Inscrire</h2>
                  <p>Si vous n'avez pas encore de compte, Cliquez sur le bouton ci-dessous pour s'inscrire.</p>
                  <CButton @click="$router.push('./person')" color="light" variant="outline" class="mt-3">S'inscrire
                    maintenant!
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Login',
  data() {
    return {
      logged: false,
      email:"",
      password:"",
      msgerr:"",
      err:false
    };
  },
  methods: {
    reseta(){
      axios.get('http://localhost:8000/api/forgetpassword/users/'+this.email)
      .then(res=>{
        console.log(res)
      })
    },
    check(e){
      e.preventDefault()
      axios.post('http://localhost:8000/api/users/login',{email:this.email,password:this.password})
      .then((res) => {
         if(res.data.message!="success"){
          this.err=true
          this.msgerr=res.data.message
          setTimeout(() => {
          this.err=false
          }, 4000);
         }
         else if(res.data.user.email_verified)
        {
        let user = JSON.stringify(res.data.user)
        localStorage.setItem("user",user)
        localStorage.setItem("token",res.data.token)
        this.$router.push({path:"/dashboard"});
        }
        else{
          this.err=true
          this.msgerr="not verified"
          setTimeout(() => {
          this.err=false
          }, 4000);
        }
      
       })
    },
  }
}

</script>
<style scoped>
.p1 {
  margin-right: -70px;
  margin-bottom: -30px;
  color: blue;
}

.p2 {
  margin-bottom: -30px;
  margin-right: 20px;
  color: blue;
}

.center {
  text-align: center;
  color: blue;
}

.px {
  margin-right: -40px;
  margin-top: -15x;
}
</style>