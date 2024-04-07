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
                                // {
                                //   "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //   "answers": [
                                //   "Ninapenda kuguswa marafiki na wapendwa wanapopita.",
                                //   "Ninapenda wakati watu wananisikiliza na kuonyesha kupendezwa kikweli na kile ninachosema."
                                //   ],
                                //   "points": [
                                //     "E",
                                //     "B"
                                //     ],
                                //   },
                                //   {
                                //     "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //     "answers": [
                                //     "Ninahisi kupendwa wakati marafiki na wapendwa wananisaidia na kazi au miradi..",
                                //     "Ninafurahia sana kupokea zawadi kutoka kwa marafiki na wapendwa."
                                //     ],
                                //     "points": [
                                //       "D",
                                //       "C"
                                //       ],
                                //     },
                                //     {
                                //       "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //       "answers": [
                                //       "Ninapenda watu kupongeza sura yangu.",
                                //       "Ninahisi kupendwa watu wanapochukua muda kuelewa hisia zangu."
                                //       ],
                                //       "points": [
                                //         "A",
                                //         "B"
                                //         ],
                                //       },
                                //       {
                                //         "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //         "answers": [
                                //         "Ninahisi salama na amani wakati mtu maalum ananigusa.",
                                //         "Matendo ya huduma kwangu hunifanya nihisi kupendwa."
                                //         ],
                                //         "points": [
                                //           "E",
                                //           "D"
                                //           ],
                                //         },
                                //         {
                                //           "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //           "answers": [
                                //           "Ninathamini mambo mengi ambayo watu maalum hunifanyia..",
                                //           "Ninapenda kupokea zawadi ambazo watu maalum hunitengenezea."
                                //           ],
                                //           "points": [
                                //             "D",
                                //             "C"
                                //             ],
                                //           },

                                //           {
                                //             "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //             "answers": [
                                //             "Ninafurahia sana hisia ninazopata wakati mtu fulani ananipa (attention).",
                                //             "Ninafurahia sana hisia ninazopata mtu anaponisaidia kufanya maamuzi."
                                //             ],
                                //             "points": [
                                //               "B",
                                //               "D"
                                //               ],
                                //             },

                                //             {
                                //               "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //               "answers": [
                                //               "Ninahisi kupendwa wakati mtu anasherehekea siku yangu ya kuzaliwa kwa zawadi.",
                                //               "Ninahisi kupendwa wakati mtu anasherehekea siku yangu ya kuzaliwa kwa maneno yenye maana."
                                //               ],
                                //               "points": [
                                //                 "C",
                                //                 "A"
                                //                 ],
                                //               },

                                //               {
                                //                 "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //                 "answers": [
                                //                 "Najua mtu ananifikiria anaponipa zawadi.",
                                //                 "Ninahisi kupendwa wakati mtu ananisaidia kufanya kazi zangu"
                                //                 ],
                                //                 "points": [
                                //                   "C",
                                //                   "D"
                                //                   ],
                                //                 },
                                //                 {
                                //                   "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //                   "answers": [
                                //                   "Ninathamini mtu anaposikiliza kwa subira na asinikatishe.",
                                //                   "Ninashukuru wakati mtu anakumbuka siku maalum na zawadi."
                                //                   ],
                                //                   "points": [
                                //                     "B",
                                //                     "C"
                                //                     ],
                                //                   },
                                //                   {
                                //                     "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //                     "answers": [
                                //                     "Ninapenda kujua wapendwa wanajali vya kutosha kunisaidia na kazi zangu za kila siku.",
                                //                     "Ninafurahia safari ndefu na mtu ambaye ni maalum kwangu."
                                //                     ],
                                //                     "points": [
                                //                       "D",
                                //                       "B"
                                //                       ],
                                //                     },
                                //                     {
                                //                       "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //                       "answers": [
                                //                       "Ninafurahia kumbusu au busu na watu ambao niko nao karibu.",
                                //                       "Ninafurahia kupokea zawadi bila sababu maalum."
                                //                       ],
                                //                       "points": [
                                //                         "E",
                                //                         "C"
                                //                         ],
                                //                       },
                                //                       {
                                //                         "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //                         "answers": [
                                //                         "Ninapenda kuambiwa kwamba ninathaminiwa.",
                                //                         "Ninapenda mtu aniangalie wakati tunazungumza."
                                //                         ],
                                //                         "points": [
                                //                           "A",
                                //                           "B"
                                //                           ],
                                //                         },
                                //                         {
                                //                           "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //                           "answers": [
                                //                           "Zawadi kutoka kwa rafiki au mpendwa daima ni maalum kwangu.",
                                //                           "Ninahisi vizuri wakati rafiki au mpendwa ananigusa."
                                //                           ],
                                //                           "points": [
                                //                             "C",
                                //                             "E"
                                //                             ],
                                //                           },

                                //                           {
                                //                             "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //                             "answers": [
                                //                             "Ninahisi kupendwa wakati mtu anafanya kazi fulani ambayo nimeomba kwa shauku..",
                                //                             "Ninahisi kupendwa ninapoambiwa ni kiasi gani nahitajika."
                                //                             ],
                                //                             "points": [
                                //                               "D",
                                //                               "A"
                                //                               ],
                                //                             },

                                //                             {
                                //                               "question": "Kati ya chaguo hizo mbili, chagua chaguo unalopendelea zaidi na inakufaa vyema kwa sasa.",
                                //                               "answers": [
                                //                               "Ninahitaji kuguswa kila siku.",
                                //                               "Nahitaji maneno ya kutia moyo kila siku.."
                                //                               ],
                                //                               "points": [
                                //                                 "E",
                                //                                 "A"
                                //                                 ],
                                //                               },
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
    if(point=="A"){
      pointA++
    }else if(point=="B"){
      pointB++
    }else if(point=="C"){
      pointC++
    }else if(point=="D"){
      pointD++
    }else if(point=="E"){
      pointE++
    }
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
  if(pointA==data){
    head= "MANENO YA UTHIBITISHO / WORDS OF AFFIRMATION"
    comment="Kusikia maneno hayo muhimu ya upendo na shukrani."
  }else if(pointE==data){
    head= "KUGUSWA MWILI / PHYSICAL TOUCH"
    comment=" Mapenzi ya kimwili, mguso, ngono, kukumbatiana, kubembeleza - kuhisi mapenzi kupitia muunganisho wa ngozi hadi ngozi."
  }else if(pointB==data){
    head= "MUDAA WAKO / QUALITY TIME"
    comment="Kutumia muda mwingi tukiwa pekee tu."
  }else if(pointD==data){
    head= "MATENDO YA HUDUMA / ACTS OF SERVICE"
    comment="Kukuisaidia na kazi zako, kukuchukua kutoka kwa madaktari, kukutengenezea kahawa asubuhi, kuonyesha upendo kupitia vitendo."
  }else if(pointC==data){
    head= "KUPOKEA ZAWADI / RECEIVING GIFTS"
    comment="Mapenzi ya kupewa zawadi, haijalishi bei."
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