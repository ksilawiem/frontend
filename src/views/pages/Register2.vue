<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="9" :lg="7" :xl="6">

          <body>
            <div class="alert">
              <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
              <div class="w3-panel w3-green w3-round-large">
                <h5 class="p"><i>Inscription des condidats</i></h5>
              </div>
              <br />
              <form>
                <div class="form-row">
                  <form>
                    <div class="row">
                      <div class="col">
                        <label class="l" for="inputEmail4">Nom
                          <p class="red">*</p>

                        </label>
                        <input type="text" class="form-control" placeholder="Nom..." v-model="nom" required />
                      </div>
                      <div class="col">
                        <label class="l" for="inputEmail4">Prénom
                          <p class="red">*</p>

                        </label>
                        <input type="text" class="form-control" placeholder="Prenom ..." v-model="prenom" required />
                      </div>
                    </div>
                  </form>
                  <form>
                    <div class="row">
                      <div class="col">
                        <label class="l" for="inputEmail4">Email
                          <p class="red">*</p>

                        </label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Addo@gmail.com"
                          v-model="email" required />
                      </div>
                      <div class="col">
                        <label class="l" for="inputEmail4">Mot de passe
                          <p class="red1">*</p>

                        </label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Mot de passe ..."
                          v-model="motdepasse" required />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Addresse
                    <p class="red2">*</p>

                  </label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Adresse ..." v-model="adresse"
                    required />
                </div>
                <div class="form-group">
                  <label for="inputAddress">Ville
                    <p class="red">*</p>

                  </label>
                  <input type="select" class="form-control" id="inputAddress" placeholder="Ville ..." v-model="ville"
                    required />
                </div>
                <div class="form-group">
                  <label class="l" for="inputAddress2">Date de naissance
                    <p class="red3">*</p>

                  </label>
                  <input type="date" class="form-control" id="inputdate" placeholder="JJ/MM/AAAA" v-model="date"
                    required />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlFile1">Curriculum vitae
                        <p class="red3">*</p>

                      </label>
                      <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="OnFileSelected"
                        required>
                    </div>
                    <label class="l" for="inputState">Genre
                      <p class="red">*</p>

                    </label>
                    <select id="inputState" class="form-control" v-model="sexe" required>
                      <option class="l" selected>Homme</option>
                      <option class="l">Femme</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value id="cgu" required />
                    <label class="form-check-label" for="cgu">J'accepte tout les conditions
                      générales
                      d'utilisation</label>
                    <label class="condition">Le site http://localhost:8081/?#/pages/Accueil permet à l'Utilisateur un
                      accès gratuit aux
                      services
                      suivants :

                      Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet.
                      Tous les
                      frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels,
                      connexion
                      Internet, etc.) sont à sa charge.
                      L’Utilisateur non membre n'a pas accès aux services réservés. Pour cela, il doit s’inscrire en
                      remplissant le formulaire. En acceptant de s’inscrire aux services réservés, l’Utilisateur membre
                      s’engage à fournir des informations sincères et exactes concernant son état civil et ses
                      coordonnées,
                      notamment son adresse email.
                    </label>
                    <div class="invalid-feedback">Vous devez accepter les CGU pour continuer</div>
                  </div>


                  <div class="form-check">

                  </div>
                </div>
                <div class="center">
                  <button @click="onUpload()" type="button" class="btn btn-info">S'inscrire</button>
                </div>
              </form>
            </div>
          </body>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
<script>
import axios from 'axios';
export default {

  data() {
    return {
      file: null,
      selectedFile: null,
      nom: null,
      prenom: null,
      motdepasse: null,
      adresse: null,
      date: null,

      ville: null,
      sexe: null,
      anneexp: null,
      cv: ""
    }
  },
  methods: {
    OnFileSelected(event) {
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
    },
    onUpload() {
      const form = new FormData()
      form.append('file', this.selectedFile);
      form.append("upload_preset", "YassineBm");
      form.append("resource_type", "auto")
      axios.post('https://api.cloudinary.com/v1_1/dqe0t46k3/upload', form)
        .then((result) => this.cv = result.data.secure_url).then(() => {
          axios.post("http://localhost:8000/api/users/create", {
            firstName: this.nom, lastName: this.prenom, email: this.email, password: this.motdepasse, address: this.adresse, birthDate: this.date, company: null, city: this.ville, gender: this.sexe
            , role: "condidat", cv: this.cv, modePaiment: null, début: null, fin: null
          })
        })
        .then(() => {
          this.$router.push({ path: "/pages/login" });
        }
        )

    }
  }
}
</script>
<style scoped>
.center {
  text-align: center;
}

.svg {
  background-color: white;
  position: absolute;
  top: 0px;
  right: 1px;
  color: white;
  /* padding: 10px 10px; */
  font-size: 16px;
  border: none;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.condition {
  font-size: 11px;
}

.p {
  text-align: center;
  color: rgb(236, 228, 228);
}

.alert {
  padding: 20px;
  background-color: #202070;
  color: white;
}

.l {
  font-size: 12px;
}

.red {
  font-size: 20px;
  color: red;
  margin-left: 40px;
  margin-top: -20px;
}

.red1 {
  font-size: 20px;
  color: red;
  margin-left: 80px;
  margin-top: -20px;
}

.red2 {
  font-size: 20px;
  color: red;
  margin-left: 95px;
  margin-top: -20px;
}

.red3 {
  font-size: 20px;
  color: red;
  margin-left: 110px;
  margin-top: -20px;
}
</style>
