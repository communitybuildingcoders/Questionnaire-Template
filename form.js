const questionnaireWrapper = document.getElementById('questionnaire-wrapper');
const twoQuestionsCap = document.getElementsByClassName('two-questions-container');
const nextButton = document.getElementById('next-btn');
const previousButton = document.getElementById("prev-invisible-btn");
const formQuestionsContainer = document.getElementById('questions-form');



let count = 0 ;
nextButton.addEventListener('click',(e)=>{
  if(e.target.id === 'next-btn'){
    count++;
    renderData(count )
  }
});



previousButton.addEventListener("click", (e)=>{
  if( e.target.id === 'prev-invisible-btn'){
     count--;
     renderData(count)
  }
});


const results = [].slice.call(twoQuestionsCap);

function  renderData (num){
  results.map((element, index, array)=>{
    if(array.indexOf(element) === num){
      array.indexOf(element) >= 4 ? nextButton.style.visibility= "hidden" : nextButton.style.visibility = ""; 
      array.indexOf(element) <= 0 ? previousButton.style.visibility = "hidden" : previousButton.style.visibility = "";
      element.style.display = "";
    }else{
     element.style.display = 'none';
    }
  })
};

renderData(count)









