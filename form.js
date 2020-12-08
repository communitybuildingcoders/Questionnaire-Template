const questionnaireWrapper = document.getElementById("questionnaire-wrapper");
const twoQuestionsCap = document.getElementsByClassName(
  "two-questions-container"
);
const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("prev-invisible-btn");
const formQuestionsContainer = document.getElementById("questions-form");



let count = 0;
nextButton.addEventListener("click", (e) => {
  if (e.target.id === "next-btn") {
    count++;
    renderData(count);
  }
});

previousButton.addEventListener("click", (e) => {
  if (e.target.id === "prev-invisible-btn") {
    count--;
    renderData(count);
  }
});

const results = [].slice.call(twoQuestionsCap);

function renderData(num) {
  results.map((element, index, array) => {
    if (array.indexOf(element) === num) {
      array.indexOf(element) >= 4
        ? (nextButton.style.visibility = "hidden")
        : (nextButton.style.visibility = "");
      array.indexOf(element) <= 0
        ? (previousButton.style.visibility = "hidden")
        : (previousButton.style.visibility = "");
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  });
}

renderData(count);


////Form////
const inputs = document.getElementsByName('social');
const submit = document.getElementById('submit');

let formData = {};
inputs.forEach((input, i)=>{
  
  inputs[i].addEventListener('input',(e)=>{

    if(inputs[i].type === "checkbox"){
      let checkbox = inputs[i].checked ? "Yes" : "null";
      formData[inputs[i].id] = checkbox;
    }else{
      if(inputs[i].value !== ""){
        formData[inputs[i].id] = inputs[i].value;
      }
    }
  })
});

submit.addEventListener('click', handleSubmit)
function handleSubmit(e) {
  e.preventDefault();
  let finalFormData = formData;
  console.log(finalFormData);
  return finalFormData;
}