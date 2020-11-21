const prevButton = document.getElementById("prev-invisible-btn");
const nextButton = document.getElementById("next-btn");
const visual = document.getElementById("visual-label");
const firstQuestion = document.getElementById("first-question");
const secondQuestion = document.getElementById("second-question");

const form = document.getElementById("questions-form");
let firstRadioContainer = document.getElementById("first-radio-flex-container");
let secondRadioContainer = document.getElementById(
  "second-radio-flex-container"
);
let firstQuestionContainer = document.getElementById(
  "first-question-container"
);
let secondQuestionContainer = document.getElementById(
  "second-question-container"
);
window.onload = function () {
  setTimeout(() => {
    onLoad();
    renderCheckoxes();
  }, 400);
};

let inputType = document.getElementsByTagName("input");

for (var i = 0; i < inputType.length; i++) {
  inputType[i].addEventListener("change", (e) => {
    console.log(e.target.id);
  });
}

let datas;

fetch("./questionnaire.json")
  .then((response) => response.json())
  .then((data) => {
    datas = data.data;
  });

const createQuestions = (questionOne) => {
  return `
            <div class="questions">
              <h2 id="first-question">
                ${questionOne}
              </h2>
            </div>
  `;
};

const createElements = (types, className, id, data, alt) => {
  var element = document.createElement(types);
  var checkbox = document.createElement(types);

  if (types === "img") {
    element.src = data;
    element.alt = alt;
    element.classList = className;
    return element;
  } else if (types === "input") {
    (checkbox.type = "checkbox"), (checkbox.name = data), (checkbox.id = id);
    return checkbox;
  } else {
    element.classList = className;
    element.innerHTML = data;
    element.id = id;
    return element;
  }
};

const createRadios = (radioData) => {
  const formGroup = createElements("div", "form-group", "", null);
  const formGroupInput = createElements("div", "form-group__input", "", null);

  const checkboxInput = createElements(
    "input",
    null,
    radioData,
    radioData,
    null
  );
  const label = createElements("label", "", radioData, radioData);

  formGroup.appendChild(formGroupInput);
  formGroupInput.appendChild(checkboxInput);
  formGroup.appendChild(label);

  firstRadioContainer.appendChild(formGroup);
};

const renderCheckoxes = async (checkbox) => {
  let createdRadios;
  console.log(checkbox);
  checkbox && checkbox.options
    ? checkbox.options.filter((option) => {
        Object.values(option).forEach((value) => {
          createRadios(value);
        });
      })
    : null;
};

const onLoad = async () => {
  let firstRadio;
  let firstRenderedQuestion = datas.filter((data) => {
    let questionOneCount = 1;

    data.id = questionOneCount ? renderCheckoxes(data) : null;
    return data.id == questionOneCount ? data.question : null;
  });

  let secondRenderedQuestion = datas.filter((data) => {
    let questionTwoCount = 2;
    return data.id == questionTwoCount ? data.question : null;
  });

  console.log(firstRenderedQuestion);

  firstQuestionContainer.innerHTML += createQuestions(
    firstRenderedQuestion[0].question
  );

  //secondQuestionContainer.innerHTML += createQuestions(secondRenderedQuestion[0].question)
};

let counter = 1;
let secondCounter = 2;

// nextButton.addEventListener('click', (e)=>{
//    var button = e.target;
//    if(button){
//        prevButton.setAttribute("id", 'prev-btn');
//       counter += 2;
//       secondCounter += 2;
//       datas.filter(x =>{
//          if(x.id == counter ){
//              firstQuestion.innerHTML = x.question
//              option1.innerHTML = x.Option1
//              option2.innerHTML = x.Option2;
//              option3.innerHTML = x.Option3;
//              option4.innerHTML = x.Option4;
//              option5.innerHTML = x.Option5;
//              option6.innerHTML = x.Option6;

//              console.log(option1)
//          };
//          if(x.id == secondCounter){
//              console.log(secondCounter)
//              secondQuestion.innerHTML = x.question
//          }
//       })

//    }
// });

// prevButton.addEventListener("click", (e) => {
//   var button = e.target;
//   if (button) {
//     prevButton.setAttribute("id", "prev-btn");
//     counter -= 2;
//     secondCounter -= 2;
//     datas.filter((x) => {
//       if (x.id == counter) {
//         firstQuestion.innerHTML = x.question;
//         option1.innerHTML = x.Option1;
//         option2.innerHTML = x.Option2;
//         option3.innerHTML = x.Option3;
//         option4.innerHTML = x.Option4;
//         option5.innerHTML = x.Option5;
//         option6.innerHTML = x.Option6;
//       }
//       if (x.id == secondCounter) {
//         console.log(secondCounter);
//         secondQuestion.innerHTML = x.question;
//       }
//     });
//   }
// });
