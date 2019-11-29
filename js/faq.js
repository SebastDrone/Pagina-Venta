let questionBar1 = document.getElementById('question1');
let queActive1 = false;
let answer1 = document.getElementById('answer1');
let questionBar2 = document.getElementById('question2');
let queActive2 = false;
let answer2 = document.getElementById('answer2');
let questionBar3 = document.getElementById('question3');
let queActive3 = false;
let answer3 = document.getElementById('answer3');
let questionBar4 = document.getElementById('question4');
let queActive4 = false;
let answer4 = document.getElementById('answer4');

questionBar1.addEventListener('click',isActive);
questionBar2.addEventListener('click',isActive);
questionBar3.addEventListener('click',isActive);
questionBar4.addEventListener('click',isActive);

function isActive() {
    if(this===questionBar1) {
        if(queActive1) {
            queActive1 = false;
            questHide(answer1);
        } else {
            queActive1 = true;
            questShow(answer1);
        }
    }else if(this===questionBar2) {
        if(queActive2) {
            queActive2 = false;
            questHide(answer2);
        }else {
            queActive2 = true;
            questShow(answer2);
        }
    }else if(this===questionBar3) {
        if(queActive3) {
            queActive3 = false;
            questHide(answer3);
        }else {
            queActive3 = true;
            questShow(answer3);
        }
    }else if(this===questionBar4) {
        if(queActive4) {
            queActive4 = false;
            questHide(answer4);
        }else {
            queActive4 = true;
            questShow(answer4);
        }
    }
}
function questShow(answer) {
    answer.style.display = 'block';
    answer.style.marginBottom = 1+'em';
}
function questHide(answer) {
    answer.style.display = 'none';
}