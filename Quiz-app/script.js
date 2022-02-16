const quizData = [
    {
        question: "Judy의 나이에 5를 더하면?",
        a: "5",
        b: "25",
        c: "35",
        d: "43",
        correct: "c",
    },
    {
        question: "Judy의 반려동물은?",
        a: "강아지",
        b: "고양이",
        c: "사막여우",
        d: "도마뱀",
        correct: "d",
    },
    {
        question: "Judy의 2022년 직업은?",
        a: "유튜버",
        b: "프론트엔드 개발자",
        c: "보육교사",
        d: "개인 카페 사장",
        correct: "b",
    },
    {
        question: "Judy가 좋아하는 전자제품 회사는?",
        a: "애플",
        b: "삼성",
        c: "엘지",
        d: "델",
        correct: "a",
    },
    {
        question: "Judy가 2022년에 가장 많이 간 카페는?",
        a: "할리스",
        b: "스타벅스",
        c: "공차",
        d: "투썸",
        correct: "b",
    }
];

// 1) text에 quizData 넣기
// 2) button 기능
// 3) 정답을 맞췄다면? => 다음 문제로 넘어간다
//    잘못된 답을 누른다면?  => 아무 일도 일어나지 않음
// 4) 다음문제로 넘어왔을 때 체크박스 사라지게 화면 다시 리프레싀하기
const quiz = document.getElementById("quiz");

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

        deselectAnswers();
        
        const currentQuizData = quizData[currentQuiz];

        questionEl.innerText = currentQuizData.question;

        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
            answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {

    //check to see the answer
    const answer = getSelected();

    if(answer){
        if(answer == quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML =
                `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onClick="location.reload()">Reload</button>`;
        }
    }
});

