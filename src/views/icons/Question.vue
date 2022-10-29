<!-- <template>
    <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow>
                <CCol>
                    <CCardGroup>
                        <CCard>
                            <img class="img" src="../../assets/images/logo.png">
                            <CCardBody>
                                <CCardTitle class="titre">QUIZ</CCardTitle>
                                <CCardText>Business Intelligence pour débutant .</CCardText>
                                <p>Temps</p>
                                <p class="b">
                                    <img class="size" src="../../assets/images/c.png">
                                    <b>00:00/30:00</b>
                                </p>
                                <hr class="l">

                                <p>Questions</p>

                                <p class="b"> <img class="size" src="../../assets/images/d.png">
                                    <b>0/22</b>
                                </p>
                                <hr class="l">

                            </CCardBody>
                        </CCard>
                        <CCard>
                            <CCardBody>

                                <blockquote class="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat
                                        a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                        posuere erat
                                        a ante.</p>
                                    <footer class="blockquote-footer">Someone famous in <cite
                                            title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                                <CButton class="btn">Commencer le test</CButton>

                            </CCardBody>
                        </CCard>
                    </CCardGroup>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>

<script>
export default {
    name: 'Login',
}

</script>
<style>
</style>
<style>
.btn {
    margin-left: 305px;
    margin-top: 538px;
    color: white;
    background-color: rgb(95, 155, 212);
}

.img {
    height: 200px;
    width: 260px;
}

.titre {
    margin-left: 40px;
}

.size {
    width: 20px;
    height: 15px;
    margin-right: 10px;
}

.l {
    width: 30%;
    font-family: bold;
    color: black;
}

.b {
    font-size: 15px;
}

.card {
    width: 10px;
}
</style> -->
<template>
    <CCard class="mb-3" style="max=width: 440px">
        <CRow>
            <CCol :md="2">
                <CCardBody class="back">
                    <img class="img" src="../../assets/images/logo.png">
                    <CCardTitle class="titre">QUIZ</CCardTitle>
                    <CCardText>{{tests.name}}</CCardText>
                    <hr class="l">

                    <p>Questions</p>

                    <p class="b"> <img class="size" src="../../assets/images/d.png">
                        <b>{{current}}/{{questions.length}}</b>
                    </p>
                    <hr class="l">

                </CCardBody>
            </CCol>
           
        

            <CCol :md="8">
                <CCardBody>
                    <CCardTitle >
                     
                        <img class="r" src="../../assets/images/11.png">
                         <div v-for="question in questions" :key="question.id">
                        <p class="u" v-if="current==question.id">{{question.content}} </p>
                        </div>
                    </CCardTitle>
                    
                    <hr class="l1">
                    <div class="sec" v-for="answer in answers" :key="answer.id">
                        <label><input @click="answerChoice(answer.id,$event)" type="checkbox"/>{{answer.content}}</label>
                        <br />
                    </div>
                  
                        
                  <CButton @click="nextQuestion()" class="btn22" :disabled="counter==questions.length">Suivant</CButton>
                  <CButton @click="terminerQuestion()" class="btn23" :disabled="counter<questions.length">terminer</CButton>

                </CCardBody>
            </CCol>
        </CRow>
    </CCard>
    
</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
            tests:{},
            tookID : localStorage.getItem("tookID"),
            choices : [],
            counter : 1,
            current : 0,
            questionContent :"",
            answers: [],
            questions:[],
            testID: localStorage.getItem("testID"),
        }
    },
    mounted() {
         axios.get("http://localhost:8000/api/test/"+this.testID).then((res) => {
      this.tests=res.data
    });
    axios.get("http://localhost:8000/api/quiz-question/test/"+this.testID)
    .then(res=>{
     
     this.questions=res.data
     this.current=this.questions[0].id
     //this.questionContent=this.questions[0].content
     axios.get("http://localhost:8000/api/quiz-answer/test/"+this.testID+"/question/"+this.questions[0].id)
     .then(res=>{
         this.answers=res.data
         this.choices=[]
         for (let i=0; i<this.answers.length ;i++)
         {
             let answer = this.answers[i]
             this.choices.push({id:answer.id,valid:false})
         }
     })
    
    })
    },
     methods:{
     nextQuestion(){
         let question = this.current+1
       axios.get("http://localhost:8000/api/quiz-answer/test/"+this.testID+"/question/"+question)
     .then(res=>{
         this.counter+=1
         this.answers=res.data
          this.choices=[]
         for (let i=0; i<this.answers.length ;i++)
         {
             let answer = this.answers[i]
             this.choices.push({id:answer.id,valid:false})
         }
         this.current+=1
     })
     for (let i=0 ; i<this.choices.length ; i++){
     axios.post("http://localhost:8000/api/take-test/"+this.tookID+"/answer/"+this.choices[i].id,{valid:this.choices[i].valid})
     .then(res=>{
         console.log(res.data)
     })
     }
     },
     terminerQuestion(){
          let question = this.current+1
       axios.get("http://localhost:8000/api/quiz-answer/test/"+this.testID+"/question/"+question)
     .then(res=>{
         this.counter+=1
         this.answers=res.data
          this.choices=[]
         for (let i=0; i<this.answers.length ;i++)
         {
             let answer = this.answers[i]
             this.choices.push({id:answer.id,valid:false})
         }
         this.current+=1
     })
     for (let i=0 ; i<this.choices.length ; i++){
     axios.post("http://localhost:8000/api/take-test/"+this.tookID+"/answer/"+this.choices[i].id,{valid:this.choices[i].valid})
     .then(res=>{
         this.$router.push({path:"/icons/FinTest"});
     })
     }
     },
     answerChoice(id,$event){
      for (let i=0 ; i<this.choices.length ; i++)
      {
          if(this.choices[i].id==id)
          {
            this.choices[i].valid=$event.target.checked
          }
      }
     },
     
  }
  }


</script>
<style scoped>
.vl {
    border-left: 1px solid rgb(172, 179, 185);
    height: 700px;
    position: absolute;
    left: 19.5%;
    margin-left: -6px;
}

.img {
    height: 170px;
    width: 200px;
    margin-left: -16px;
    margin-top: -16px;
}

.btn22 {
    background-color: rgb(49, 93, 151);
    margin-left: 690px;
    margin-top: 230px;
    color: white;
}

.btn23 {
    background-color: rgb(49, 93, 151);
    margin-left: 790px;
    margin-top: -63px;
    color: white;
}

.t {
    margin-left: 30px;
    margin-right: -205px;
}

.l {
    width: 90%;
    font-family: bold;
    color: black;
}

.l1 {
    width: 128%;
    font-family: bold;
    color: black;
    margin-left: 5px;
}

.back1 {
    background-color: rgb(235, 242, 245);
    height: 120px;
    margin-left: 25px;
    width: 840px;
}

.u {
    margin-left: 95px;
    margin-top: -30px;
    font-size: 16px;
    margin-right: 10px;
}

.back {
    background-color: rgb(235, 242, 245);
    width: 210px;
    height: 450px;
}

.size {
    width: 20px;
    height: 15px;
    margin-right: 10px;
}

.b {
    font-size: 15px;
}

.titre {
    margin-top: 30px;
}

.r {
    margin-left: 35px;
    width: 30px;
    height: 30px;
    margin-top: -10px;
}

.sec {
    margin-left: 45px;
}
</style>
