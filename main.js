const startBtn = document.querySelector(".start"),
  quiz = document.querySelector(".quiz"),
  startScreen = document.querySelector(".start-screen");

let questions = [],
  time = 30,
  score = 0,
  currentQuestion,
  pointA =0,
  pointB=0,
  pointC=0,
  pointD=0,
  pointE=0,
  comment,
  head,
  timer;


  questions = [
    {
    "question": "Una amini Mungu",
    "answers": [
    "Ndio",
    "Hapana"
    ],
    "points": [
      10,
     -10
      ],
    },
    {
      "question": "Una watoto?",
            "answers": [
      "Ndio",
      "Hapana"
      ],
      "points": [
        10,
        -10
        ],
      },
      {
        "question": "Una kazi au umejiajiri.",
        "answers": [
        "Ndio",
        "Hapana"
        ],
        "points": [
          10,
          -10
          ],
        },
        {
          "question": "Una Umri gani",
          "answers": [
          "18-21",
          "22-24",
          "25-27",
          "28-30",
          "31-35",
          "36-45",
          "45 na kwendelea",
          ],
          "points": [
            20,
            16,
            12,
            9,
            7,
            5,
            1
            ],
          },
          {
            "question": "Unaishije?.",
            "answers": [
            "Nahishi kwa Wazazi.",
            "Nimemepanga hostel.",
            "Nimepanga chumba.",
            "Nimepanga vyumba.",
            "Nimepanga nyumba.",
            ],
            "points": [
              2,
              5,
              10,
              15,
              20
              ],
            },
            {
              "question": "Je unaulemavu wa kudumu",
              "answers": [
              "Ndio",
              "Hapana"
              ],
              "points": [
                10,
                -10
                ],
              },
              {
                "question": "Je, wewe ni mtu maarufu?.",
                "answers": [
                "Ndio.",
                "Hapana."
                ],
                "points": [
                  10,
                  0
                  ],
                },
                {
                  "question": "Elimu yako ya juu ni?",
                  "answers": [
                  "Primary",
                  "Secondary",
                  "Certificate",
                  "Diploma",
                  "Degree",
                  "Zaidi ya degree",
                  ],
                  "points": [
                    1,
                    2,
                    3,
                    5,
                    6,
                    10,
                    10
                    ],
                  },
                
    ]

const startQuiz = () => {
  // const num = numQuestions.value,
  //   cat = category.value,
  //   diff = difficulty.value;
  loadingAnimation();
  setTimeout(() => {
    startScreen.classList.add("hide");
    quiz.classList.remove("hide");
    currentQuestion = 1;
    showQuestion(questions[0]);
  }, 1000);
};

startBtn.addEventListener("click", startQuiz);

const showQuestion = (question) => {
  const questionText = document.querySelector(".question"),
    answersWrapper = document.querySelector(".answer-wrapper");
  questionNumber = document.querySelector(".number");

  questionText.innerHTML = question.question;

  const answers = [
    ...question.answers,
  ];

  const points = [
    ...question.points,
  ];

  answersWrapper.innerHTML = "";
  answers.forEach((answer) => {
    // console.log( "stshga"+ answer)
    answersWrapper.innerHTML += `
                  <div class="answer ">
            <span class="text">${answer}</span>
            <span class="checkbox">
              <i class="fas fa-check"></i>
            </span>
          </div>
        `;
  });

  questionNumber.innerHTML = ` Question <span class="current">${
    questions.indexOf(question) + 1
  }</span>
            <span class="total">/${questions.length}</span>`;
  //add event listener to each answer
  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.addEventListener("click", () => {
      if (!answer.classList.contains("checked")) {
        answersDiv.forEach((answer) => {
          answer.classList.remove("selected");
        });
        answer.classList.add("selected");
        submitBtn.disabled = false;
      }
    });
  });
};

const loadingAnimation = () => {
  startBtn.innerHTML = "Loading";
  const loadingInterval = setInterval(() => {
    if (startBtn.innerHTML.length === 10) {
      startBtn.innerHTML = "Loading";
    } else {
      startBtn.innerHTML += ".";
    }
  }, 500);
};

// function defineProperty() {
//   var osccred = document.createElement("div");
//   osccred.innerHTML =
//     "A Project By <a href='https://www.youtube.com/@opensourcecoding' target=_blank>Open Source Coding</a>";
//   osccred.style.position = "absolute";
//   osccred.style.bottom = "0";
//   osccred.style.right = "0";
//   osccred.style.fontSize = "10px";
//   osccred.style.color = "#ccc";
//   osccred.style.fontFamily = "sans-serif";
//   osccred.style.padding = "5px";
//   osccred.style.background = "#fff";
//   osccred.style.borderTopLeftRadius = "5px";
//   osccred.style.borderBottomRightRadius = "5px";
//   osccred.style.boxShadow = "0 0 5px #ccc";
//   document.body.appendChild(osccred);
// }

// defineProperty();

const submitBtn = document.querySelector(".submit"),
  nextBtn = document.querySelector(".next");
submitBtn.addEventListener("click", () => {
  const selectedAnswer = document.querySelector(".answer.selected");
  if(selectedAnswer!=null){
    checkAnswer();
  }
});

nextBtn.addEventListener("click", () => {
  nextQuestion();
  submitBtn.style.display = "block";
  nextBtn.style.display = "none";
});

const checkAnswer = () => {
  clearInterval(timer);
  const selectedAnswer = document.querySelector(".answer.selected");
  if (selectedAnswer) {
    const answer = selectedAnswer.querySelector(".text").innerHTML;
    console.log(currentQuestion);
    // console.log(questions[currentQuestion - 1]);
    var indexPoints=questions[currentQuestion - 1].answers.indexOf(answer)
    var point = questions[currentQuestion - 1].points[indexPoints]
      pointA += point
  } 
  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.classList.add("checked");
  });

  submitBtn.style.display = "none";
  nextBtn.style.display = "block";
};

const paymentPage =()=> {
  const nowz = Date.now()
  const url = `https://x8ki-letl-twmt.n7.xano.io/api:WvHB3mH5/payment/${nowz}`

  // const info = await response.response.result;
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
     // const info  = data.results;
     window.location.replace(data.response.result);
    console.log(url)
    console.log(data)
  });
  
  // 
}

const showScore = ()  => {
  // endScreen.classList.remove("hide");
  // quiz.classList.add("hide");
   submitBtn.innerHTML = "Loading...";
   nextBtn.innerHTML = "Loading...";
  var data= Math.max(pointA,pointB,pointC,pointD,pointE)
  // <button class="btn start">Anza Kipimo</button>
  if(pointA>=90 ){
    head= "PORSHE"
    comment="5 Star out of 5."
  }else if(pointA>=80){
    head= "RANGE"
    comment="4 Stars out of 5"
  }else if(pointA>=60){
    head= "VANGURD"
    comment="3 Stars out of 5"
  }else if(pointA>=45){
    head= "VITZ"
    comment="2 Star out of 5"
  }else if(pointA>=35){
    head= "BAJAJI"
    comment="1 Star out of 5"
  } 
  window.localStorage.setItem("head",head)
  window.localStorage.setItem("comment",comment)
  paymentPage();
};

const nextQuestion = () => {
  if (currentQuestion < questions.length) {
    currentQuestion++;
    showQuestion(questions[currentQuestion - 1]);
  } else {
    showScore();
  }
};

const endScreen = document.querySelector(".end-screen"),
  finalScore = document.querySelector(".final-score").innerHTML= window.localStorage.getItem("head"),
  totalScore = document.querySelector(".total-score").innerHTML= window.localStorage.getItem("comment");



const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
  window.location.reload();
});

// const playAdudio = (src) => {
//   const audio = new Audio(src);
//   audio.play();
// };