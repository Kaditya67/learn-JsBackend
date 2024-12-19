document.addEventListener("DOMContentLoaded", function() {
    let answers = []
    localStorage.setItem("answers", JSON.stringify(answers));

    const Questions = [
        {
            question: "What does HTML stand for?",
            choices: ["HyperText Markup Language", "HyperTool Markup Language", "HyperText Machine Language", "HighText Markup Language"],
            answer: "HyperText Markup Language"
        },
        {
            question: "Which HTML tag is used to define an internal style sheet?",
            choices: ["&lt;script&gt;", "&lt;style&gt;", "&lt;css&gt;", "&lt;link&gt;"],
            answer: "&lt;style&gt;"
        },
        {
            question: "What is the correct HTML element for the largest heading?",
            choices: ["&lt;h1&gt;", "&lt;head&gt;", "&lt;heading&gt;", "&lt;h6&gt;"],
            answer: "&lt;h1&gt;"
        },
        {
            question: "What does the &lt;a&gt; tag in HTML define?",
            choices: ["An anchor", "An area", "An app", "An address"],
            answer: "An anchor"
        }
    ];
    
    let index=0;
    localStorage.setItem("index", JSON.stringify(index));

    const question = document.querySelector(".question-container");
    const choices = document.querySelector(".choice-container");
    const results = document.querySelector("#results");
    const next = document.querySelector("#next");
    const start = document.querySelector("#start");
    const restart = document.querySelector("#restart");
    const verify = document.querySelector("#verify");
    const answerContainer = document.querySelector(".answers");

    question.style.display = "none";
    choices.style.display = "none";
    results.style.display = "none";
    next.style.display = "none";
    restart.style.display = "none";
    verify.style.display = "none";
    answerContainer.style.display = "none";

    start.addEventListener("click", () => {
        start.style.display = "none";
        question.style.display = "block";
        choices.style.display = "block";
        next.style.display = "block";
        nextQuestion();
    })

    function nextQuestion(){
        index=parseInt(localStorage.getItem("index"));
        console.log("Index at next is : ", index);
        question.innerHTML = Questions[index].question;
        choices.innerHTML = "";
        for (let i = 0; i < Questions[index].choices.length; i++) {
            const element = document.createElement("div");
            element.classList.add("choice");
            element.innerHTML = Questions[index].choices[i];
            choices.append(element);
        }
        index++;
        localStorage.setItem("index", JSON.stringify(index));
    }

    let choice = "";
    choices.addEventListener("click", (e) => {
        if (e.target.classList.contains("choice")) { 
            for(var i=0;i<choices.children.length;i++){
                choices.children[i].style.backgroundColor = "#292929";
            }
            choice = e.target.innerHTML;
            e.target.style.backgroundColor = "blue";
        }
    })

    next.addEventListener("click", () => {
        if (choice == "") {
            return;
        }
        answers.push(choice);
        choice = "";
        localStorage.setItem("answers", JSON.stringify(answers));
        if(parseInt(localStorage.getItem("index")) < Questions.length){
            nextQuestion();
        }else{
            question.style.display = "none";
            choices.style.display = "none";
            results.style.display = "block";
            next.style.display = "none";
            answers = JSON.parse(localStorage.getItem("answers"));
            let score = 0;
            for (let i = 0; i < answers.length; i++) {
                if (answers[i] == Questions[i].answer) {
                    score++;
                }
            }
            if(score>answers.length/2){
                results.innerHTML = "Passed: " + score + " out of " + Questions.length;
                results.classList.add("passed");
            }else{
                results.innerHTML = "Failed: " + score + " out of " + Questions.length;
                results.classList.add("failed");
                restart.style.display = "block";
            }
            verify.style.display = "block";
        }
    })

    restart.addEventListener("click", () => {
        index=0;
        localStorage.setItem("index", JSON.stringify(index));
        answers = [];
        localStorage.setItem("answers", JSON.stringify(answers));
        choice="";
        results.style.display = "none";
        restart.style.display = "none";
        start.style.display = "block";
        question.style.display = "none";
        choices.style.display = "none";
        next.style.display = "none";
        verify.style.display = "none";
        answerContainer.style.display = "none";
    })

    verify.addEventListener("click", () => {
        answerContainer.style.display = "block";
        answerContainer.innerHTML = "";
        for (let i = 0; i < answers.length; i++) {
            const element = document.createElement("div");
            element.classList.add("answer-container");
            element.innerHTML = `<h3 class="question">${Questions[i].question}</h3><div class="answer">Ans: <span>${Questions[i].answer} | Your Ans: ${answers[i]}</span></div>`;
            answerContainer.append(element);
        }
    })
})