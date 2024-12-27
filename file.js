const questions = [
    {
    'que' : 'Which of the following is a Markup language?',
    'a' : 'HTML',
    'b' : 'CSS',
    'c' : 'PHP',
    'd' : 'JAVA SCRIPT',
    'correct' : "a",
    },
    {
    'que' : "What year was JavaScript launched?",
    'a' : '1996',
    'b' : '1995',
    'c' : '1994',
    'd' : 'none of the above',
    'correct' : "b",
    },
    {
    'que' : 'Who invented C language?',
    'a' : 'James Gosling',
    'b' : 'Dennis Riche',
    'c' : 'Abraham marke',
    'd' : 'Jones William',
    'correct' : "b",
    },
    {
    'que' : 'Which language is introduced by James Gosling?',
    'a' : 'Java Script',
    'b' : 'JAVA',
    'c' : 'PHP',
    'd' : 'Cotlin',
    'correct' : "b",
    },
    {
    'que' : 'Which concept is followed by Stack?',
    'a' : 'First in First Out',
    'b' : 'Last in First Out',
    'c' : 'Node concept',
    'd' : 'None of the above',
    'correct' : "b",
    
    }
]

let index = 0    ;
let total = questions.length;
let right = 0,
wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options')

const loadQuestion = () =>
{
if(index === total)
{
return endQuiz()
}

reset()

const data = questions[index]
quesBox.innerText = `${index + 1}) ${data.que}`;
optionInputs[0].nextElementSibling.innerText = data.a;
optionInputs[1].nextElementSibling.innerText = data.b;
optionInputs[2].nextElementSibling.innerText = data.c;
optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () =>
{
const data = questions[index]
const ans = getAnswer()
if(ans == data.correct)
{
right ++;
}
else{
wrong++;
}
index ++;
loadQuestion();
return ;
}
 
const getAnswer = () =>
{
let answer;
optionInputs.forEach(
(input)=>
{
if(input.checked)
{
answer=input.value;
} 
}
)
return answer;
}
 
const reset = () =>
{
optionInputs.forEach(
(input) => {
input.checked = false
}
)
}
const endQuiz =()=>
{
document.getElementById("box").innerHTML = `
<div style:"text-align:center">
<h3>Thank you for playing the Quiz </h3>
<h2> ${right} / ${total} are correct </h2>
</div>
`
}


loadQuestion();
