<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <h4 class="titre">Créer votre propre Quiz</h4>
    <CRow class="justify-content-center" v-if="current<=questionNumber">
        <CCol :md="14">
            <CCardBody>
                <CRow>
                    <CCol :sm="10">
                        <div class="row">
                            <div class="col-sm-10">
                                <div class="card">
                                    <div class="card-body">
                                        <tr v-for="question in questions" :key="question.id">
                                            <td v-if="current==question.id">
                                                <input class="input" type="text" required placeholder="Question" :value="question.content" @input="questionContent = $event.target.value"/>
                                            </td>

                                        </tr>
                                        <p class="rep">Réponse(s)</p>


                                        <CTable class="table">
                                            <CTableHead>
                                                <CTableRow>
                                                    <CTableHeaderCell scope="col">
                                                        <tr v-for="answer in answers" :key="answer.id">
                                                            <td>
                                                                <input class="input1" type="text" aria-required="true"
                                                                    placeholder="Choix1" :value="answer.content" v-on:change="foo(answer.id,$event)"/>
                                                                <input class="radio" type="checkbox"  :checked="answer.valid" v-on:change="voo(answer.id,$event)">

                                                            </td>

                                                        </tr>
                                                        
                                                    </CTableHeaderCell>
                                                </CTableRow>
                                               
                                                <CButton @click="updateqa()" class="btn2" type="submit" >modifier</CButton>
                                                <CButton @click="nextq()" class="btn3" type="submit" >suivant </CButton>

                                            </CTableHead>

                                        </CTable>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCol>
    </CRow>

    <CRow class="justify-content-center" v-if="current>questionNumber">
        <CCol :md="14">
            <CCardBody>
                <CRow>
                    <CCol :sm="10">
                        <div class="row">
                            <div class="col-sm-10">
                                <div class="card">
                                    <div class="card-body">
                                        <tr>
                                            <td>
                                                <input class="input" type="text" required placeholder="Question" v-model="question"/>
                                            </td>

                                        </tr>
                                        <p class="rep">Réponse(s)</p>


                                        <CTable class="table">
                                            <CTableHead>
                                                <CTableRow>
                                                    <CTableHeaderCell scope="col">
                                                        <tr>
                                                            <td>
                                                                <input class="input1" type="text" aria-required="true"
                                                                    placeholder="Choix1" v-model="choix1"/>
                                                                <input class="radio" type="checkbox" v-model="radio1">

                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input class="input1" type="text" aria-required="true"
                                                                    placeholder="Choix2" v-model="choix2"/>
                                                                <input class="radio" type="checkbox" v-model="radio2">

                                                            </td>


                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <input class="input1" type="text" aria-required="true"
                                                                    placeholder="Choix3" v-model="choix3"/>
                                                                  <input class="radio" type="checkbox" v-model="radio3">

                                                            </td>
                                                            
                                                        </tr>

                                                    </CTableHeaderCell>
                                                </CTableRow>
                                               
                                                <CButton @click="ajouterqm()" class="btn2" type="submit" :disabled="load">Ajouter question</CButton>
                                                <CButton @click="terminer()" class="btn3" type="submit" :disabled="question.length">terminer </CButton>

                                            </CTableHead>

                                        </CTable>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCol>
    </CRow>

</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
            OffreID: localStorage.getItem("OffreID"),
            show : false,
            counter : 1,
            current : 0,
            answers: [],
            questions:[],
            questionContent: "",
            questionNumber: 0,
            question: "",
            choix1: "",
            choix2: "",
            choix3: "",
            radio1: false,
            radio2: false,
            radio3: false,
            load : false,
        }
    },
    mounted() {
    axios.get("http://localhost:8000/api/offre-question/offre/"+this.OffreID)
    .then(res=>{
     this.questions=res.data
     this.questionNumber=this.questions.length
     this.current=this.questions[0].id
     this.questionContent=this.questions[0].content
     //this.questionContent=this.questions[0].content
     axios.get("http://localhost:8000/api/offre-answer/offre/"+this.OffreID+"/question/"+this.questions[0].id)
     .then(res=>{
         this.answers=res.data
         console.log(this.answers)
     })
    })
    },
    methods : {
        foo(id,$event){
            // console.log(id,$event.target.value)
            for (let i=0; i<this.answers.length;i++)
            {
               if(this.answers[i].id==id)
               {
                   this.answers[i].content=$event.target.value;
               }
            }
        },
        voo(id,$event)
        {
           for (let i=0; i<this.answers.length;i++)
            {
               if(this.answers[i].id==id)
               {
                   this.answers[i].valid=$event.target.checked;
               }
            }
        },
        updateqa(){
           axios.put("http://localhost:8000/api/offre-question/update/"+this.current,{content:this.questionContent})
           .then(res=>
           {
               for (let i=0 ; i<this.answers.length;i++){
               axios.put("http://localhost:8000/api/offre-answer/update/"+this.answers[i].id,{content:this.answers[i].content,valid:this.answers[i].valid})
               .then(res=>{
               console.log(res.data)
               }
               )
               }
               let question = this.current+1
       axios.get("http://localhost:8000/api/offre-answer/offre/"+this.OffreID+"/question/"+question)
     .then(res=>{
         this.counter+=1
         this.answers=res.data
         this.current+=1
     })
           })
        },
        nextq(){
            let question = this.current+1
       axios.get("http://localhost:8000/api/offre-answer/offre/"+this.OffreID+"/question/"+question)
     .then(res=>{
         this.counter+=1
         this.answers=res.data
         this.current+=1
     })
        },
        ajouterqm(){
this.load=true 
        let answers = [{choix:this.choix1,radio:this.radio1},{choix:this.choix2,radio:this.radio2},{choix:this.choix3,radio:this.radio3}]
        axios.post("http://localhost:8000/api/offre-question/"+this.OffreID,{content:this.question})
        .then(res=>{
            for(let i=0;i<answers.length;i++)
            {
                axios.post("http://localhost:8000/api/offre-answer/offre/"+this.OffreID+"/question/"+res.data.question.id,{content:answers[i].choix,valid:answers[i].radio})
                .then(()=>{
                    if(i=answers.length-1)
                    {
                        this.question = ""
                        this.choix1 = ""
                        this.choix2 = ""
                        this.choix3 = ""
                        this.radio1 =  false
                        this.radio2 = false
                        this.radio3 = false
                        this.load=false
                    }
                })

            }
        })

        }
    }
}
</script>
<style scoped>
.titre {
    margin-left: 25px;
    color: rgb(6, 23, 56);
    font-size: 18px;
    font-family: italic;
}

.radio {
    margin-left: 80px;
    margin-bottom: -60px;
}

.quiz {
    margin-left: 650px;
    margin-bottom: -50px;
    width: 120px;
}

.rep {
    margin-left: 490px;
    margin-top: -5px;
}

.btn {
    margin-left: 80px;
    background-color: rgb(177, 32, 32);
    color: white;
    width: 170px;
    margin-top: 30px;

}

.btn1 {
    margin-left: 40px;
    width: 170px;

    margin-top: 30px;
    background-color: rgb(32, 107, 55);
    color: white;
}

.btn2 {
    margin-left: 80px;
    width: 170px;
    margin-top: 20px;

    background-color: rgb(111, 128, 184);
    color: white;
}
.btn3 {
    margin-left: 310px;
    width: 170px;
    margin-top: -65px;

    background-color: rgb(10, 177, 177);
    color: white;
}

.cell {
    margin-right: 305px;
}



.c {
    margin-top: -80px;
    font-size: 15px;
    margin-left: -390px;
}

.cc {
    margin-top: -200px;
    margin-left: -370px;
    margin-bottom: 30px;
}


.input {
    width: 560px;
    height: 40px;
    background-color: rgb(207, 212, 218);
    margin-left: 35px;
    margin-top: -10px;
}

.input1 {
    width: 400px;
    height: 40px;
    background-color: rgb(207, 212, 218);
    margin-left: 35px;
    margin-top: -25px;
    margin-bottom: 15px;

}
</style>