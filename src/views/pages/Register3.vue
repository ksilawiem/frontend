<template>
<div class="bg-light min-vh-100 d-flex flex-row align-items-center">
  <CContainer>
    <CRow class="justify-content-center">
      <CCol :md="9" :lg="7" :xl="6">
        <body>
          <div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            <div class="w3-panel w3-green w3-round-large">
              <h3 class="p">Inscription!</h3>
            </div>
            <br />
            <form>
              <div class="form-row">
                <form>
                  <div class="row">
                    <div class="col">
                      <label for="inputEmail4">Nom:</label>
                      <input type="text" class="form-control" placeholder="First name" />
                    </div>
                    <div class="col">
                      <label for="inputEmail4">Prénom:</label>
                      <input type="text" class="form-control" placeholder="Last name" />
                    </div>
                  </div>
                </form>
                <form>
                  <div class="row">
                    <div class="col">
                      <label for="inputEmail4">Email:</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Addo@gmail.com"
                      />
                    </div>
                    <div class="col">
                      <label for="inputEmail4">Mot de passe:</label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword4"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class="form-group">
                <label for="inputAddress">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress2">Date de naissance:</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputdate"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="inputState">Sexe</label>
                  <select id="inputState" class="form-control">
                    <option selected>Homme</option>
                    <option>Femme</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value id="cgu" required />
                  <label
                    class="form-check-label"
                    for="cgu"
                  >J'accepte tout les conditions générales d'utilisation</label>
                  <div class="invalid-feedback">Vous devez accepter les CGU pour continuer</div>
                </div>
              </div>
              <div class="center">
                <button type="button" class="btn btn-success">S'inscrire</button>
              </div>
            </form>
          </div>
        </body>
      </CCol>
    </CRow>
  </CContainer>
</div>
</template>
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
.p {
  text-align: center;
  color: rgb(236, 228, 228);
  text-transform: uppercase;
  font-style: italic;
  font-family: times, serif;
}
.alert {
  padding: 20px;
  background-color: #524e4e;
  color: white;
}
</style>
<script>
import { faCoffee, faStroopwafel, faDragon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'Register',
}

</script>
