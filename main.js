// const  progressBr = document.querySelector(".timer"),
//  progressBar = document.querySelector(".progress-bar"),
//   progressText = document.querySelector(".progress-text");

// const progress = (value) => {
//   const percentage = (value / time) * 100;
//   progressBar.style.width = `${percentage}%`;
//   progressText.innerHTML = `${value}`;
// };

const startBtn = document.querySelector(".start"),
  numQuestions = document.querySelector("#num-questions"),
  category = document.querySelector("#category"),
  difficulty = document.querySelector("#difficulty"),
  timePerQuestion = document.querySelector("#time"),
  quiz = document.querySelector(".quiz"),
  startScreen = document.querySelector(".start-screen");

let questions = [],
  time = 30,
  score = 0,
  currentQuestion,
  timer;


  questions = [
    {
    "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
    "answers": [
    "Napenda kupokea ujumbe wa upendo",
    "Napenda kukumbatiwa"
    ],
    "points": [
      "A",
      "E"
      ],
    },
    {
      "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
            "answers": [
      "Ninapenda kutumia mda wangu na watu walio karibu nami",
      "Ninahisi kupendwa wakati mtu ananipa msaada wa vitendo."
      ],
      "points": [
        "B",
        "D"
        ],
      },
      {
        "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
        "answers": [
        "Ninapenda wakati watu wakinipa zawadi.",
        "Ninapenda kutembelewa kwa burudani na marafiki na wapendwa."
        ],
        "points": [
          "C",
          "B"
          ],
        },
        {
          "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
          "answers": [
          "Ninahisi kupendwa watu wanapofanya mambo ya kunisaidia",
          "Ninahisi kupendwa wakati watu wananigusa."
          ],
          "points": [
            "D",
            "E"
            ],
          },
          {
            "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
            "answers": [
            "Ninahisi kupendwa wakati mtu ninayempenda au anayemvutia ananikumbatia.",
            "Ninahisi kupendwa ninapopokea zawadi kutoka kwa mtu ninayempenda au ninayevutiwa nae."
            ],
            "points": [
              "E",
              "C"
              ],
            },
            {
              "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
              "answers": [
              "Ninapenda kwenda mahali na marafiki na wapendwa.",
              "Ninapenda kushikana mikono(mfano. Tukitembea) na watu ambao ni maalum kwangu."
              ],
              "points": [
                "B",
                "E"
                ],
              },
              {
                "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                "answers": [
                "Alama zinazoonekana za upendo (zawadi) ni muhimu sana kwangu.",
                "Ninahisi kupendwa wakati watu wananithibitisha kuwa wananipenda."
                ],
                "points": [
                  "C",
                  "E"
                  ],
                },
                {
                  "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                  "answers": [
                  "Ninapenda kukaa au kusimama karibu na watu ambao ninafurahia kuwa nao",
                  "Napenda watu waniambie mimi ni mrembo."
                  ],
                  "points": [
                    "E",
                    "A"
                    ],
                  },
                  {
                    "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                    "answers": [
                    "Ninapenda kutumia wakati na marafiki na wapendwa.",
                    "Ninapenda kupokea zawadi kutoka kwa marafiki na wapendwa."
                    ],
                    "points": [
                      "B",
                      "C"
                      ],
                    },
                    {
                      "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                      "answers": [
                      "Maneno ya kunikubali ni muhimu kwangu.",
                      "Najua mtu ananipenda anaponisaidia."
                      ],
                      "points": [
                        "A",
                        "D"
                        ],
                      },
                      {
                        "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                        "answers": [
                        "Ninapenda kuwa pamoja na kufanya mambo na marafiki na wapendwa.",
                        "Ninapenda maneno mazuri yanaposemwa kwangu."
                        ],
                        "points": [
                          "B",
                          "A"
                          ],
                        },

                        {
                          "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                          "answers": [
                          "Anachofanya mtu kinaniathiri zaidi kuliko anachosema.",
                          "Kukumbatia hunifanya nijihisi niwakaribu na kuthaminiwa."
                          ],
                          "points": [
                            "D",
                            "E"
                            ],
                          },

                          {
                            "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                            "answers": [
                            "Ninathamini sifa na ninajaribu kuepuka kukosolewa.",
                            "Zawadi kadhaa ndogo zinamaanisha zaidi kwangu kuliko zawadi moja kubwa."
                            ],
                            "points": [
                              "A",
                              "C"
                              ],
                            },
                            {
                              "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                              "answers": [
                              "Ninahisi kuwa karibu na mtu tunapozungumza au kufanya jambo pamoja.",
                              "Ninahisi kuwa karibu na marafiki na wapendwa wanaponigusa mara kwa mara."
                              ],
                              "points": [
                                "B",
                                "E"
                                ],
                              },
                              {
                                "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                "answers": [
                                "Ninapenda watu kupongeza mafanikio yangu.",
                                "Najua watu wananipenda wanaponifanyia mambo ambayo hawafurahii kuyafanya."
                                ],
                                "points": [
                                  "A",
                                  "D"
                                  ],
                                },
                                {
                                  "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                  "answers": [
                                  "Ninapenda kuguswa marafiki na wapendwa wanapopita.",
                                  "Ninapenda wakati watu wananisikiliza na kuonyesha kupendezwa kikweli na kile ninachosema."
                                  ],
                                  "points": [
                                    "E",
                                    "B"
                                    ],
                                  },
                                  {
                                    "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                    "answers": [
                                    "Ninahisi kupendwa wakati marafiki na wapendwa wananisaidia na kazi au miradi..",
                                    "Ninafurahia sana kupokea zawadi kutoka kwa marafiki na wapendwa."
                                    ],
                                    "points": [
                                      "D",
                                      "C"
                                      ],
                                    },
                                    {
                                      "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                      "answers": [
                                      "Ninapenda watu kupongeza sura yangu.",
                                      "Ninahisi kupendwa watu wanapochukua muda kuelewa hisia zangu."
                                      ],
                                      "points": [
                                        "A",
                                        "B"
                                        ],
                                      },
                                      {
                                        "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                        "answers": [
                                        "Ninahisi salama na amani wakati mtu maalum ananigusa.",
                                        "Matendo ya huduma kwangu hunifanya nihisi kupendwa."
                                        ],
                                        "points": [
                                          "E",
                                          "D"
                                          ],
                                        },
                                        {
                                          "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                          "answers": [
                                          "Ninathamini mambo mengi ambayo watu maalum hunifanyia..",
                                          "Ninapenda kupokea zawadi ambazo watu maalum hunitengenezea."
                                          ],
                                          "points": [
                                            "D",
                                            "C"
                                            ],
                                          },

                                          {
                                            "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                            "answers": [
                                            "Ninafurahia sana hisia ninazopata wakati mtu fulani ananipa (attention).",
                                            "Ninafurahia sana hisia ninazopata mtu anaponisaidia kufanya maamuzi."
                                            ],
                                            "points": [
                                              "B",
                                              "D"
                                              ],
                                            },

                                            {
                                              "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                              "answers": [
                                              "Ninahisi kupendwa wakati mtu anasherehekea siku yangu ya kuzaliwa kwa zawadi.",
                                              "Ninahisi kupendwa wakati mtu anasherehekea siku yangu ya kuzaliwa kwa maneno yenye maana."
                                              ],
                                              "points": [
                                                "C",
                                                "A"
                                                ],
                                              },

                                              {
                                                "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                                "answers": [
                                                "Najua mtu ananifikiria anaponipa zawadi.",
                                                "Ninahisi kupendwa wakati mtu ananisaidia kufanya kazi zangu"
                                                ],
                                                "points": [
                                                  "C",
                                                  "D"
                                                  ],
                                                },
                                                {
                                                  "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                                  "answers": [
                                                  "Ninathamini mtu anaposikiliza kwa subira na asinikatishe.",
                                                  "Ninashukuru wakati mtu anakumbuka siku maalum na zawadi."
                                                  ],
                                                  "points": [
                                                    "B",
                                                    "C"
                                                    ],
                                                  },
                                                  {
                                                    "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                                    "answers": [
                                                    "Ninapenda kujua wapendwa wanajali vya kutosha kunisaidia na kazi zangu za kila siku.",
                                                    "Ninafurahia safari ndefu na mtu ambaye ni maalum kwangu."
                                                    ],
                                                    "points": [
                                                      "D",
                                                      "B"
                                                      ],
                                                    },
                                                    {
                                                      "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                                      "answers": [
                                                      "Ninafurahia kumbusu au busu na watu ambao niko nao karibu.",
                                                      "Ninafurahia kupokea zawadi bila sababu maalum."
                                                      ],
                                                      "points": [
                                                        "E",
                                                        "C"
                                                        ],
                                                      },
                                                      {
                                                        "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                                        "answers": [
                                                        "Ninapenda kuambiwa kwamba ninathaminiwa.",
                                                        "Ninapenda mtu aniangalie wakati tunazungumza."
                                                        ],
                                                        "points": [
                                                          "A",
                                                          "B"
                                                          ],
                                                        },
                                                        {
                                                          "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                                          "answers": [
                                                          "Zawadi kutoka kwa rafiki au mpendwa daima ni maalum kwangu.",
                                                          "Ninahisi vizuri wakati rafiki au mpendwa ananigusa."
                                                          ],
                                                          "points": [
                                                            "C",
                                                            "E"
                                                            ],
                                                          },

                                                          {
                                                            "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                                            "answers": [
                                                            "Ninahisi kupendwa wakati mtu anafanya kazi fulani ambayo nimeomba kwa shauku..",
                                                            "Ninahisi kupendwa ninapoambiwa ni kiasi gani nahitajika."
                                                            ],
                                                            "points": [
                                                              "D",
                                                              "A"
                                                              ],
                                                            },

                                                            {
                                                              "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                                              "answers": [
                                                              "Ninahitaji kuguswa kila siku.",
                                                              "Nahitaji maneno ya kutia moyo kila siku.."
                                                              ],
                                                              "points": [
                                                                "E",
                                                                "A"
                                                                ],
                                                              },
    ]

const startQuiz = () => {
  const num = numQuestions.value,
    cat = category.value,
    diff = difficulty.value;
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
    console.log( "stshga"+ answer)
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

function defineProperty() {
  var osccred = document.createElement("div");
  osccred.innerHTML =
    "A Project By <a href='https://www.youtube.com/@opensourcecoding' target=_blank>Open Source Coding</a>";
  osccred.style.position = "absolute";
  osccred.style.bottom = "0";
  osccred.style.right = "0";
  osccred.style.fontSize = "10px";
  osccred.style.color = "#ccc";
  osccred.style.fontFamily = "sans-serif";
  osccred.style.padding = "5px";
  osccred.style.background = "#fff";
  osccred.style.borderTopLeftRadius = "5px";
  osccred.style.borderBottomRightRadius = "5px";
  osccred.style.boxShadow = "0 0 5px #ccc";
  document.body.appendChild(osccred);
}

defineProperty();

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
    // console.log(point)
    if (answer === questions[currentQuestion - 1].correct_answer) {
      // score++;
      // selectedAnswer.classList.add("correct");

    } else {
      // selectedAnswer.classList.add("wrong");
      // const correctAnswer = document
      //   .querySelectorAll(".answer")
      //   .forEach((answer) => {
      //     if (
      //       answer.querySelector(".text").innerHTML ===
      //       questions[currentQuestion - 1].correct_answer
      //     ) {
      //       answer.classList.add("correct");
      //     }
      //   });

    }
  } else {
    const correctAnswer = document
      // .querySelectorAll(".answer")
      // .forEach((answer) => {
      //   if (
      //     answer.querySelector(".text").innerHTML ===
      //     questions[currentQuestion - 1].correct_answer
      //   ) {
      //     answer.classList.add("correct");
      //   }
      // });
  }
  const answersDiv = document.querySelectorAll(".answer");
  answersDiv.forEach((answer) => {
    answer.classList.add("checked");
  });

  submitBtn.style.display = "none";
  nextBtn.style.display = "block";
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
  finalScore = document.querySelector(".final-score"),
  totalScore = document.querySelector(".total-score");

const showScore = () => {
  endScreen.classList.remove("hide");
  quiz.classList.add("hide");
  finalScore.innerHTML = score;
  totalScore.innerHTML = `/ ${questions.length}`;
};

const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
  // window.location.reload();
});

// const playAdudio = (src) => {
//   const audio = new Audio(src);
//   audio.play();
// };