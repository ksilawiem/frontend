<template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow class="justify-content-center">
                <CCol :md="9" :lg="7" :xl="6">

                    <body>
                        <div class="alert">
                            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                            <div class="w3-panel w3-green w3-round-large">
                                <h5 class="p"><i>Inscription des recruteurs</i></h5>
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
                                                <input type="text" class="form-control" placeholder="Nom ..." required
                                                    v-model="firstName" />
                                            </div>
                                            <div class="col">
                                                <label class="l" for="inputEmail4">Prénom
                                                    <p class="red">*</p>

                                                </label>
                                                <input type="text" class="form-control" placeholder="Prenom ..."
                                                    required v-model="lastName" />
                                            </div>
                                        </div>
                                    </form>
                                    <form>
                                        <div class="row">
                                            <div class="col">
                                                <label class="l" for="inputEmail4">Email
                                                    <p class="red">*</p>

                                                </label>
                                                <input type="email" class="form-control" id="inputEmail4"
                                                    placeholder="Addo@gmail.com" required v-model="email" />
                                            </div>
                                            <div class="col">
                                                <label class="l" for="inputEmail4">Mot de passe
                                                    <p class="red1">*</p>

                                                </label>
                                                <input type="password" class="form-control" id="Mot de passe"
                                                    placeholder="Password" required v-model="password" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="form-group">
                                    <label class="l" for="inputAddress">Addresse
                                        <p class="red2">*</p>

                                    </label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Adresse"
                                        required v-model="address" />
                                </div>
                                <div class="form-group">
                                    <label class="l" for="inputAddress2">Date de naissance
                                        <p class="red3">*</p>

                                    </label>
                                    <input type="date" class="form-control" id="inputdate" placeholder="JJ/MM/AAAA"
                                        v-model="birthDate" required />
                                </div>
                                <div class="form-group">
                                    <label class="l" for="inputAddress"> Entreprise
                                        <p class="red2">*</p>

                                    </label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Entreprise"
                                        v-model="company" required />
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress">Ville
                                        <p class="red">*</p>

                                    </label>
                                    <input type="select" class="form-control" id="inputAddress" placeholder="Ville"
                                        v-model="city" required />
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label class="l" for="inputState">Genre
                                            <p class="red">*</p>

                                        </label>
                                        <select id="inputState" class="form-control" v-model="gender" required>
                                            <option class="l" selected>Homme</option>
                                            <option class="l"> Femme</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value id="cgu" required />
                                        <label class="form-check-label" for="cgu">J'accepte tout les conditions
                                            générales
                                            d'utilisation</label>
                                        <label class="condition">Le site http://localhost:8081/?#/pages/Accueil permet à
                                            l'Utilisateur un
                                            accès gratuit aux
                                            services
                                            suivants :

                                            Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un
                                            accès à Internet.
                                            Tous les
                                            frais supportés par l'Utilisateur pour accéder au service (matériel
                                            informatique, logiciels,
                                            connexion
                                            Internet, etc.) sont à sa charge.
                                            L’Utilisateur non membre n'a pas accès aux services réservés. Pour cela, il
                                            doit s’inscrire en
                                            remplissant le formulaire. En acceptant de s’inscrire aux services réservés,
                                            l’Utilisateur membre
                                            s’engage à fournir des informations sincères et exactes concernant son état
                                            civil et ses
                                            coordonnées,
                                            notamment son adresse email.
                                        </label>
                                        <div class="invalid-feedback">Vous devez accepter les CGU pour continuer</div>
                                    </div>
                                </div>
                                <div class="center">
                                    <button @click="ajout()" type="button" class="btn btn-info">S'inscrire</button>
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
import axios from "axios";
export default {
    name: "Register1",
    data() {
        return {
            firstName: null,
            lastName: null,
            password: null,
            address: null,
            birthDate: null,
            company: null,
            city: null,
            gender: null,
            email: null,
            role: "recruteur"
        }
    },
    methods: {
        ajout() {
            let recruteur = { firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password, address: this.address, birthDate: this.birthDate, company: this.company, city: this.city, gender: this.gender, role: this.role }
            localStorage.setItem("recruteur", JSON.stringify(recruteur))
            this.$router.push({ path: "modalite" })
        }
    }
}
</script>


<style scoped>
.center {
    text-align: center;
}

.condition {
    font-size: 11px;
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
}

.alert {
    padding: 20px;
    background-color: #202070;
    color: white;
}
</style>
