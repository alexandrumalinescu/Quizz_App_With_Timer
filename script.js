const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById ('minutes')
const secondsEl = document.getElementById ('seconds')

const timer = '1 Jan 2022';

function countdown() {
  const newYearDate = new Date(timer);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate)/1000;
  //const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60)  % 60;
  const seconds = Math.floor(totalSeconds) % 60;

hoursEl.innerHTML= hours;
minsEl.innerHTML= minutes
secondsEl.innerHTML= seconds

}

countdown();

setInterval(countdown, 1000);

// quizz

const quizData = [
    {
        question: 'fdfdf?',
        a: 'sds',
        b: 'fgfgf',
        c: 'fgfgf',
        d: 'fdfdfff',
        correct: 'b'
    },
    {
        question: 'cvcjjmmnvc?',
        a: 'sdddddds',
        b: 'faaaa',
        c: 'mmmmm',
        d: 'bbbbb',
        correct: 'a'
    },
    {
        question: 'cvddsdcvc?',
        a: 'ddddd',
        b: 'llll',
        c: 'uuu',
        d: 'yyyyy',
        correct: 'd'
        
    },
    {
        question: 'cvcdfdvc?',
        a: 'uyuyuy',
        b: 'hfgf',
        c: 'dfdfd',
        d: 'dfvcvc',
        correct: 'c'
    }
]

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

const questionEl = document.getElementById('question');
a_text = document.getElementById('a_text');
b_text = document.getElementById('b_text');
c_text = document.getElementById('c_text');
d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz () {
    deselectAll()
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected (){
   

    let answer = undefined;

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAll(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked= false;
});
};


submitBtn.addEventListener('click', ()=> {
    const answer= getSelected();
   console.log(answer);
    if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML= `<h2>You answered correctly at 
            ${score}/${quizData.length} questions.</h2>`
        }
    }
  
}) 