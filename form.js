let datas;

fetch("./questionnaire.json").then(response =>response.json()).then(data =>{
    
    datas = data.data;
});



const prevButton = document.getElementById('prev-invisible-btn');
const nextButton = document.getElementById('next-btn');
const visual = document.getElementById('visual-label');
const firstQuestion = document.getElementById('first-question');
const secondQuestion = document.getElementById('second-question');
const option1 = document.getElementById('q1-option1');
const option2 = document.getElementById("q1-option2");
const option3 = document.getElementById("q1-option3");
const option4 = document.getElementById("q1-option4");
const option5 = document.getElementById("q1-option5");
const option6 = document.getElementById("q1-option6");
let counter = 1;
let secondCounter = 2;

nextButton.addEventListener('click', (e)=>{
   var button = e.target;
   if(button){
       prevButton.setAttribute("id", 'prev-btn');
      counter += 2;
      secondCounter += 2;
      datas.filter(x =>{
         if(x.id == counter ){
             firstQuestion.innerHTML = x.question
             option1.innerHTML = x.Option1
             option2.innerHTML = x.Option2;
             option3.innerHTML = x.Option3;
             option4.innerHTML = x.Option4;
             option5.innerHTML = x.Option5;
             option6.innerHTML = x.Option6;
         };
         if(x.id == secondCounter){
             console.log(secondCounter)
             secondQuestion.innerHTML = x.question
         }
      })
      
   }
});

prevButton.addEventListener("click", (e) => {
  var button = e.target;
  if (button) {
    prevButton.setAttribute("id", "prev-btn");
    counter -= 2;
    secondCounter -= 2;
    datas.filter((x) => {
      if (x.id == counter) {
        firstQuestion.innerHTML = x.question;
        option1.innerHTML = x.Option1;
        option2.innerHTML = x.Option2;
        option3.innerHTML = x.Option3;
        option4.innerHTML = x.Option4;
        option5.innerHTML = x.Option5;
        option6.innerHTML = x.Option6;
      }
      if (x.id == secondCounter) {
        console.log(secondCounter);
        secondQuestion.innerHTML = x.question;
      }
    });
  }
});


