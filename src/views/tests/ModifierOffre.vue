<template>
    <!--
Question : 
https://openclassrooms.com/forum/sujet/formulaire-de-contact-responsive
-->
    <div class="container">
        <p class="text">Publier un nouvel offre d'emploi </p>
        <form action="/action_page.php">

            <label for="sujet">Nom </label>
            <input type="text" id="sujet" name="sujet" placeholder="Nom de l'offre " v-model="nom">

            <label for="Address">Adresse</label>
            <input id="Address" type="text" name="adresse" placeholder="Votre adresse" v-model="adresse">


            <label for="sujet">Numéro de téléphone </label>
            <input type="tel" id="sujet" name="sujet" placeholder="00 000 000 " v-model="numtel">

            <label for="emailAddress">Catégorie</label>
            <input id="emailAddress" type="text" name="Catégorie" placeholder="Catégorie" v-model="categorie">

            <label for="emailAddress">Temps</label>
            <input id="emailAddress" type="text" name="temps" placeholder="En minute" v-model="temps">


             <label for="exampleFormControlFile1">Logo</label>
             <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="OnFileSelected">
             
             <br>
             <br>
            <label for="subject">Descriptif de l'offre</label>
            <textarea id="subject" name="subject" placeholder="Décrivez en quelques lignes l'offre à publier... "
                style="height:140px" v-model="desc"></textarea>

            <input class="btn" @click="updateOffre()" value="Modifier">
        </form>
    </div>

</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
        file : null,
        selectedFile: null,
        nom : null,
        adresse: null,
        numtel : null,
        categorie : null,
        desc : null,
        temps : null,
        logo : "",
        OffreID : localStorage.getItem("OffreID"),
        Offre:{}
        }
    },
    mounted() {
    axios.get("http://localhost:8000/api/offre/"+this.OffreID).then((res) => {
      this.Offre=res.data
      this.nom=res.data.name
      this.adresse=res.data.address
      this.desc=res.data.description
      this.numtel=res.data.telefone
      this.categorie=res.data.categorie
      this.temps=res.data.temps
      this.logo=res.data.logo
    });
},
    methods : {
        OnFileSelected(event){
         this.selectedFile =event.target.files[0]
         console.log(this.selectedFile)
    },
    updateOffre(){
          const form = new FormData()
          form.append('file',this.selectedFile);
          form.append("upload_preset" , "YassineBm");
          form.append("resource_type", "auto")
          axios.post('https://api.cloudinary.com/v1_1/dqe0t46k3/upload', form)
          .then((result) => this.logo=result.data.secure_url).then(()=>{
          axios.put("http://localhost:8000/api/offre/update/"+this.OffreID,{name:this.nom,address:this.adresse,telefone:this.numtel,categorie:this.categorie,description:this.desc,logo:this.logo,temps:this.temps})
          .then(res=>
          {
           this.$router.push({path:"/tests/ModifierOffreQuiz"});
          })
          })
           
        }
}
}
</script>
<style scoped>
/* //////////////////////////////////////////////
Plus d'informations liées à la solution  : 
//////////////////////////////////////////////

https://www.zonecss.fr/faq/description-d-un-element.html#specifier-la-taille-d-un-element-grace-aux-feuilles-de-style-css

https://www.zonecss.fr/proprietes-css/box-sizing-css.html#WJwJqZ00000.codepen
*/
body {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0px;
}

input[type=text],
textarea,
input[type=email] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    margin-right: 0px;
    margin-left: 0px;
    resize: vertical;
}

input[type=url] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    margin-right: 0px;
    margin-left: 0px;
    resize: vertical;
}

input[type=tel] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    margin-right: 0px;
    margin-left: 0px;
    resize: vertical;
}

.btn {
    margin-left: 300px;
}

label {
    margin-right: 0px;
    margin-left: 0px;
    width: 100%;
}

input[type=submit] {
    background-color: #1255a2;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #1872D9;
}

.container {
    /* Ajouter box-sizing */
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    width: 100%;
    /* redéfinition 400 + 2*20 */
    max-width: 700px;
    margin: 0 auto;
}

.text {
    text-align: center;
    font-size: 22px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #1255a2;
    font-style: italic;
}
</style>