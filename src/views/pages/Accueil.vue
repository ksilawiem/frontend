<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <body>

        <div class="header">
            <div class="header_left">
                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                <p class="job">JOB SEEKER</p>
            </div>
            <div class="header_mid">
                <ul>
                    <li><a href="#">Acceuil</a></li>
                    <li><a href="#">A propos</a></li>
                    <li><a href="#">Domaine d'activités</a></li>
                    <li><a href="#">Nouveautés</a></li>
                    <li><a href="#">Tarification</a></li>
                    <li><a href="#">Contact</a></li>

                </ul>
            </div>
            <div class="header_right">
                <ul>
                    <li class="hide_manu"><a @click="$router.push('./login')">Connexion</a></li>
                    <li class="hide_manu"><a @click="$router.push('./person')">S'inscrire</a></li>
                    <li><a @click="$router.push('/icons/tests')">Teser tes compétences</a></li>
                </ul>
            </div>
        </div>

        <!-- ***************** header end ******************** -->

        <section id="fullpage">
            <section class="section section_1 ">
                <div class="text_box">
                    <p class="jobseeker">
                        JOBSEEKER, expert de la recherche d'embauche pour nos client</p>
                    <p class="job2">Pour faciliter vos recherches utilisateurs ,vous aider à trouver vos chemins

                        spécifique,
                        qui vous maitrisez les plus , <br>JOBSEEKER est à votre disposition pour vous guider.
                    </p>
                    <p class="job2">over {{user}} users</p>
                </div>
            </section>

            <section class="section section_2">
                <div class="text_box">
                    <p class="de"><b> Entre chômage et difficultés de recrutement :se souvenir pour prévoir .</b></p>
                    <p class="de1"> En dépit d'un taux de chômage structurellement élevé de 8,1 % fin 2019, les
                        entreprises déclarent rencontrer d'importantes difficultés de recrutement sur le marché du
                        travail français.
                        Les lacunes des candidats en termes de compétences constituent selon les entreprises leur
                        principal obstacle aux recrutements. Ces dernières intensifient leurs efforts de recrutement,
                        assouplissent leurs exigences vis-à-vis des candidats ou modifient des caractéristiques du poste
                        afin de surmonter ces difficultés .
                        De nombreuses réformes structurelles permettraient également, dans une certaine mesure,
                        d'améliorer la situation sur le marché du travail .
                        <br>
                        Les difficultés de recrutement des entreprises peuvent provenir de plusieurs types d'obstacles :
                        <br>
                        - La pénurie de main d'eouvre disponible
                        <br>
                        -Les lacunes des candidats en termes de compétences
                        <br>
                        -Le manque d'attractivité des postes à pourvoir en termes de salaire ainsi que de conditions
                        d'emploi et de travail
                        <br>
                        Les solutions envisagés aux recrutement des entreprises et aux candidats:
                        Mieux exprimer son besoin : définir le profil du candidat idéal
                        Il est question de réfléchir plus précisément aux contours des postes à pourvoir et de mieux
                        définir son besoin en termes de profil (secteur, filière, niveau d’expérience et diplôme). C’est
                        d’ailleurs ce que proposent les cabinets de recrutement car un meilleur détail des exigences
                        ouvre de nouvelles perspectives.

                        A cet égard, le logiciel de gestion des Recrutements Eurécia, en interagissant avec le
                        référentiel des métiers et des compétences de votre entreprise, vous permet de mieux définir le
                        poste et l'offre d'emploi qui lui est associée.

                        Recourir à la mobilité interne
                        Avant de se lancer dans une recherche de candidats que peut s'avérer complexe et chronophage, la
                        recherche de talents en interne peut s'avérer doublement bénéfique. D'un point de vue de la
                        gestion RH, vous gagnez un temps précieux et limitez les risques liés à l'intégration d'un
                        nouveau salarié au sein de l'entreprise. Du point de vue des salariés, favoriser la mobilité
                        interne prouve la volonté de l'entreprise de garder ses bons éléments et de les faire évoluer au
                        sein de la société.

                        La mobilité interne est régulièrement utilisée par les PME pour résoudre des difficultés de
                        recrutement, notamment en confiant des responsabilités croissantes et/ou de management à des
                        collaborateurs déjà présents dans l'entreprise. La mobilité doit alors être planifiée, avec des
                        parcours de progression structurés et des dispositifs adaptés (tutorat, formation, période
                        d’observation, etc.).

                        Développer l’apprentissage
                        Même s’il a un coût, l’apprentissage (que ce soit sous la forme d'un stage, d'un contrat
                        d'apprentissage ou contrat de professionnalisation) est plébiscité pour deux raisons majeures.
                        D’un côté, il représente une solution de pré-recrutement qui permet de tester les compétences du
                        candidat avant de s’engager. D’autre part, il permet de se constituer un vivier potentiel et
                        d’anticiper les difficultés de recrutement à venir.

                        Améliorer l’attractivité de l’entreprise
                        Qu’il soit question de développer sa marque employeur, améliorer sa communication globale,
                        participer à des forums, entrer dans des réseaux, travailler l’image de son secteur d’activité
                        ou communiquer sur ses métiers, les possibilités sont nombreuses. Elles sont également probantes
                        : une entreprise qui travaille son attractivité se positionne comme un employeur de choix auprès
                        de sa cible. C’est l’une des raisons pour lesquelles les grandes entreprises communiquent avec
                        autant de soin sur leurs gestion des ressources humaines.

                        Un logiciel pour faciliter le processus de recrutement
                        Utilisés ensemble ou séparément, les différents leviers évoqués sont exigeants mais ils ont fait
                        leurs preuves.

                        En complément des actions mises en place pour pallier ou anticiper des difficultés de
                        recrutement, l'utilisation d'un logiciel de GRH dédié vous permet d'automatiser certaines tâches
                        chronophages :

                        Une CVthèque collaborative vous permet d'évaluer les candidats en comparant leurs compétences
                        avec celles renseignées sur la fiche du poste à pourvoir.
                        L'évaluation des compétences des salariés, lors des entretiens annuels d'évaluation, facilite
                        l'identification des opportunités de mobilité interne.
                        Plus généralement, le gain de temps réalisé sur la gestion administrative du personnel grâce à
                        un logiciel RH permet de consacrer davantage de temps et de ressources aux recrutements
                        nécessaires au bon fonctionnement et à la performance de l'entreprise.
                    </p>
                </div>

            </section>




            <section class="section section_4">
                <div class="text_box">
                    <div style="text-align:left;margin:40px;">
                        <h6>Ce qui m'intérèsse </h6>
                        <h5><b> Domaines</b></h5>
                    </div>

                    <div class="d-flex flex-wrap">
                        <CCard class="position0" style="width:22rem;margin-left:50px;padding:50px;margin-top:30px;" v-for="categorie in categories" :key="categorie.id">
                            <CCardBody>


                                <CCardTitle> {{categorie.nom}}
                                </CCardTitle>

                               

                            </CCardBody>
                        </CCard>
                                            </div>
                    <div>
                                            </div>



                </div>

            </section>

            <section class="section section_6">
                <div class="text_box">
                    <div style="text-align:left;margin:40px;">
                        <h6>A lire </h6>
                        <h5><b>Dernières nouvelles</b></h5>
                    </div>

                    <CCard class="position0" style="width: 22rem;margin-left:50px;">
                        <CCardBody>


                            <img class="imlll" src="../../assets/images/qweeby.jpg" />
                            <CCardTitle> 3 mois</CCardTitle>

                            <CCardText>Some quick example text to build on the card title and
                                make up the bulk of the
                                card's content.</CCardText>
                            <!-- <CButton style="background-color: grey;color: white;width: 280px;"
                                @click="$router.push('/pages/register1')">S'inscrire
                                maintenant</CButton> -->

                        </CCardBody>
                    </CCard>
                    <CCard class="position0" style="width: 22rem;margin-left:495px;margin-top:-258px;">
                        <CCardBody>


                            <img class="imlll" src="../../assets/images/L-mobile.jpg" />
                            <CCardTitle> 3 mois</CCardTitle>

                            <CCardText>Some quick example text to build on the card title and
                                make up the bulk of the
                                card's content.</CCardText>
                            <!-- <CButton style="background-color: grey;color: white;width: 280px;"
                                @click="$router.push('/pages/register1')">S'inscrire
                                maintenant</CButton> -->

                        </CCardBody>
                    </CCard>
                    <CCard class="position0" style="width: 22rem;margin-left: 940px;margin-top:-258px;">
                        <CCardBody>


                            <img class="imlll" src="../../assets/images/access.jpg" />
                            <CCardTitle> 3 mois</CCardTitle>

                            <CCardText>Some quick example text to build on the card title and
                                make up the bulk of the
                                card's content.</CCardText>
                            <!-- <CButton style="background-color: grey;color: white;width: 280px;"
                                @click="$router.push('/pages/register1')">S'inscrire
                                maintenant</CButton> -->

                        </CCardBody>
                    </CCard>

                </div>
                <CButton style="background-color: grey;color: white;width: 280px;margin-left: 537px;margin-top: 20px;"
                    @click="$router.push('/dashboard')">Voir
                    plus d'offres</CButton>
            </section>
            <section class="section section_7">
                <div class="text_box">
                    <div style="text-align:left;margin:40px;">
                        <h6>Nos prix </h6>
                        <h5><b>Prix spéciaux</b></h5>
                    </div>

                    <CCard class="position0" style="width: 22rem;margin-left:50px;height: 400px;">
                        <CCardHeader>Tarif1</CCardHeader>
                        <CCardBody>


                            <i class="fa fa-money" style="font-size:48px;margin-top: 30px;"></i>
                            <CCardTitle> 3 mois</CCardTitle>

                            <CCardText style="margin-top:86px">Pour profiter d'un espace garantit par un abonnement
                                merci de passer au
                                formulaire d'inscription.
                            </CCardText>
                            <CButton style="background-color: grey;color: white;width: 280px;"
                                @click="$router.push('/pages/register1')">S'inscrire
                                maintenant</CButton>

                        </CCardBody>
                    </CCard>
                    <CCard class="position0" style="width: 22rem;margin-left:495px;margin-top:-400px;height: 400px;">
                        <CCardHeader>Tarif2</CCardHeader>
                        <CCardBody>


                            <i class="fa fa-money" style="font-size:48px;margin-top: 30px;"></i>
                            <CCardTitle>6 mois</CCardTitle>

                            <CCardText style="margin-top:86px">Pour profiter d'un espace garantit par un abonnement
                                merci de passer au
                                formulaire d'inscription.</CCardText>
                            <CButton style="background-color: grey;color: white;width: 280px;"
                                @click="$router.push('/pages/register1')">S'inscrire
                                maintenant</CButton>

                        </CCardBody>
                    </CCard>
                    <CCard class="position0" style="width: 22rem;margin-left: 940px;margin-top:-400px;height: 400px;">
                        <CCardHeader>Tarif3</CCardHeader>
                        <CCardBody>


                            <i class="fa fa-money" style="font-size:48px;margin-top: 30px;"></i>
                            <CCardTitle>9 mois</CCardTitle>

                            <CCardText style="margin-top:86px">Pour profiter d'un espace garantit par un abonnement
                                merci de passer au
                                formulaire d'inscription..</CCardText>
                            <CButton style="background-color: grey;color: white;width: 280px;"
                                @click="$router.push('/pages/register1')">S'inscrire
                                maintenant</CButton>

                        </CCardBody>
                    </CCard>
                </div>

            </section>

            <section class="section section_8">
                <div class="text_box">
                    <div style="text-align:left;margin:40px;">
                        <h6>Pour plus d'information</h6>
                        <h5><b>Contacter moi</b></h5>
                    </div>

                    <CTable style="width:1100px;margin-left: 50px;border-style: none;">
                        <tr>
                            <td>
                                <p style="text-align:left;margin-left: 70px;margin-top:-30px;
                                margin-bottom: 40px;">JOBSEEKER COMPANY INC
                                </p>
                                <p style="text-align:left;margin-left: 70px;margin-top: -40px; margin-bottom: 40px;">
                                    PHONE: +216 72 280
                                    450</p>
                                <p style="text-align:left;margin-left: 70px;margin-top: -40px;  margin-bottom: 40px;">
                                    ADDRESS: Avenue mohamed
                                    souissi .</p>
                                <p style="text-align:left;margin-left: 70px;margin-top: -40px;  margin-bottom: 40px;">
                                    EMAIL: JobSeeker@gmail.com
                                </p>
                                <p style="text-align:left;margin-left: 70px;margin-top: -40px;  margin-bottom: 40px;">
                                    LINKEDIN: /in/Job-seeker-258a2a222/
                                </p>
                                <p style="text-align:left;margin-left: 70px;margin-top: -40px;  margin-bottom: 40px;">
                                    TWITTER:/JobSeeker255
                                </p>

                            </td>
                            <td>
                                <input style="width:436px;margin-top:-300px;" id="name" type="text"
                                    placeholder="nom complet" />
                                <br>

                                <input style="width:436px" id="name" type="text" placeholder="Email" />
                                <br>

                                <input style="width:436px;height: 150px;" id="name" type="text" placeholder="Message" />
                                <br>
                                <CButton style="background-color: grey;color: white;width: 280px;margin-top: 10px;">
                                    Envoyer
                                </CButton>

                            </td>
                        </tr>


                    </CTable>

                </div>

                <div class="footer">
                    <ul>

                        <CIcon class="p1" icon="cib-twitter" height="30"></CIcon>
                        <CIcon class="p2" icon="cib-linkedin" height="30"></CIcon>

                    </ul>
                </div>
            </section>
        </section>





    </body>
</template>
<script>
import  axios from 'axios';
export default {
    data(){
        return{
            categories:[],
            user:0,
        }
    },
    mounted(){
         axios.get("http://localhost:8000/api/users").then((res) => {
             console.log(res.data)
             for(let i=0;i<res.data.length;i++){
                 this.user++
             }
             console.log(this.user)
         });
          axios.get("http://localhost:8000/api/categories").then((response) => {
          this.categories = response.data;
          });
    }
}
</script>
<style scoped>
/**************************************************************************************/
.p {
    margin-left: 20px;

}

.style {
    border-style: none;
}

.r {
    margin-left: 35px;
    border-style: none;

}

* {
    padding: 0px;
    margin: 0px;
    box-sizing: boder-box;
    font-family: 'Montserrat', sans-serif;
}

.pos {
    margin-left: 20px;
    margin-top: -120px;
}

.pos1 {
    margin-left: 370px;
    margin-top: -109px;
}

.pos2 {
    margin-left: 720px;
    margin-top: -109px;
}

.img {
    width: 150px;
    height: 150px;
}

.img1 {
    width: 200px;
    height: 150px;
}

a {
    text-decoration: none;
}

.f {
    margin-left: 80px;
    margin-top: -80px;
    border-style: none;
    font-size: 13px;
}

.titree {
    font-family: 'Times New Roman', Times, serif;
}

.f1 {
    margin-left: 820px;
    margin-top: -80px;
    font-size: 13px;

    border-style: none;
}

ul li {
    list-style: none;
}

.header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 100;
}

.header_left {
    margin: 0 50px;
    height: 100%;
    display: flex;
    align-items: center;
}

.header_left img {
    width: 110px;
}


.header_mid ul {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
}


.header_mid ul li {
    /*background-color:transparent;*/
    border-radius: 10px;
    transition: .3s;
}

.header_mid ul li:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.header_mid ul li a {
    color: #171a20;
    margin: 0px 8px;
    padding: 6px 8px;
    font-size: 14px;
    font-weight: 600;
    display: block;
}

.header_right {
    margin-right: 32px;
}

.header_right ul {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
}


.header_right ul li {
    /*background-color:transparent;*/
    border-radius: 10px;
    transition: .3s;
}

.header_right ul li:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.header_right ul li a {
    color: #171a20;
    margin: 0px 8px;
    padding: 6px 8px;
    font-size: 14px;
    font-weight: 600;
    display: block;
}

/* header end */

/*******************************************************************************************/

.section {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 9;
}

.de {
    margin-top: -45px;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    margin-left: 50px;
}

.de1 {
    margin-top: -5px;
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    margin-left: 50px;
}


.section_1 {
    background-image: url("../../assets/images/hh.webp");
    position: relative;
}


.section_2 {

    position: relative;
}


.section_4 {
    position: relative;
}


.section_5 {

    position: relative;
}

.section_6 {
    position: relative;
}

.section_7 {
    position: relative;
}

.section_8 {
    position: relative;
}

.text_box {
    width: 100%;
    margin-top: 120px;
    text-align: center;
}

.heding {
    font-weight: 600;
    font-size: 40px;
    color: #181b21;
}

.sub_heding {
    font-size: 14px;
    color: #000;
}



.sub_heding a {
    font-size: 14px;
    color: #000;
    border-bottom: 1px solid #000;
}

.sub_heding a:hover {
    border-bottom: 2px solid #000;
}


.btn_box {
    position: absolute;
    bottom: 16%;
    width: 100%;
    display: flex;
    justify-content: center;
}

.jobseeker {
    text-align: center;
    font-size: 25px;
    margin-top: 250px;
    font-family: 'Times New Roman', Times, serif;
    color: black;
}

.job2 {
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: black;


}

.btn_box button {
    width: 250px;
    padding: 12px 24px;
    border-radius: 20px;
    margin: 0 20px;
    border: none;
    outline: none;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
}

.primary_btn {
    color: #fff;
    background-color: rgba(0, 0, 0, .7);
    cursor: pointer;
}

.secondary_btn {
    color: #000;
    background-color: rgba(255, 255, 255, .7);
    cursor: pointer;
}


/************************footer********************************/


.footer {
    position: absolute;
    z-index: 100;
    bottom: 0;
    width: 100%;
}


.footer ul {
    width: 80%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.footer ul li {
    margin: 0 10px;
    margin-top: 16px;
    text-transform: capitalize;
    font-weight: 600;
}

.footer ul li a {
    font-size: 12px;
    color: #817a7a;
}


/* responsive */

@media screen and (max-width: 1200px) {
    .header_mid {
        display: none;
    }

    .hide_manu {
        display: none;
    }

    .header_right ul li {
        background-color: rgba(0, 0, 0, 0.1);
    }
}

@media screen and (max-width: 600px) {

    .btn_box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 20px;
        box-sizing: border-box;
    }



}

.btn_box button {
    width: 100%;
    margin: 10px;
}

.btn_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
    box-sizing: border-box;
}

.job {
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgba(5, 5, 83, 0.562);
    margin-left: 20px;
    margin-top: -6px;
}

.imlll {
    height: 180px;
    width: 205px;
}

.fa-paper-plane {
    margin-top: 10px;
}
</style>
