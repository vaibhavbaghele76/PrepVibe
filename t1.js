const hello_yog=[
        {
                text:"Q1 . What least number must be added to 1056 , so that the sum is completly divisible by 23?  ",
                option:["2 ","3","18","21"],
                answer_of_this:"2"
        },
        {
                text:"Q2 .Which of the following is a composite number? ",
                option:["2","3","5","9"],
                answer_of_this:"9"
        },
        {
                text:"Q3 . What is the sum of first 10 number numbers?",
                option:["45","55","50","60"],
                answer_of_this:"55"
        },
        {
                text:"Q4 . Which of the following numbers is divisible by 11 ?  ",
                option:["121","123","135","143"],
                answer_of_this:"121"
        },
        {
                text:"Q5 . Binary of 13 is :  ",
                option:["1100","1011","1101","1001"],
                answer_of_this:"1101"
        },
        {
                text:"Q6 . The largest 4 digit number exactly divisible by 88 is :  ",
                option:["9944","9768","9988","8888"],
                answer_of_this:"9944"
        },
        {
                text:"Q7 . Which of the following is a prime number?",
                option:["33","81","93","97"],
                answer_of_this:"97"
        },
        {
                text:"Q8 . The sum of first five prime numbers is :   ?",
                option:["11","18","26","28"],
                answer_of_this:"28"
        },
        {
                text:"Q9 . Find the number of factors of 36? ",
                option:["7","8","9","10"],
                answer_of_this:"9"
        },
        {
                text:"Q10 . The product of any three consecutive natural numbers is always divisible by :  ",
                option:["2","3","6","12"],
                answer_of_this:"6"
        },
        {
                text:"Q11 Which number when divided by 5 leaves remainder 3?",
                option:["13","18","23","All of these"],
                answer_of_this:"All of these"
        },
        {
                text:"Q12 . The smallest 3 digit prime number is :  ",
                option:["101","103","109","113"],
                answer_of_this:"101"
        },
        {
                text:"Q13 .Which of the following number is exactly divisible by 11 ?",
                option:["235641","245642","315624","415624"],
                answer_of_this:"415624"
        },
        {
                text:"Q14 . The sum of first 45 natural numbers is : ",
                option:["1035","1280","2070","2140"],
                answer_of_this:"1035"
        },
        {
                text:"Q15 . Which of the following number is divisible by 24 ? ",
                option:["3125736","63810","35718","537804"],
                answer_of_this:"3125736"
        },
        {
                text:"Q16 . 8597-?=7429-4358?",
                option:["5426","5706","5526","5476"],
                answer_of_this:"5526"
        },
        {
                text:"Q17.How many 3 digit numbers are divisible by 6 in all ?",
                option:["149","150","151","166"],
                answer_of_this:"150"
        },
        {
                text:"Q18 .The smallest number should be added to 4456 so that the sum is completely divisible by 6 ?",
                option:["4","3","2","1"],
                answer_of_this:"2"
        },
        {
                text:"Q19 .What least number must be subtracted from 13601 , so that the remainder is divisible by 87 ?",
                option:["23"," 31","29","49"],
                answer_of_this:"29"
        },
        {
                text:"Q20 . If the number 5*2 is divisible by 6 , then 6*=?",
                option:["2","3","6","7"],
                answer_of_this:"2"
        }
     



];
let now=0;
let selecteduttar=Array(hello_yog.length).fill(null);
let mark=Array(hello_yog.length).fill(false);

function loadkit(i){
        now=i;
        const q=hello_yog[i];
        document.getElementById('question-text').innerText=q.text;
        const form=document.getElementById('paryayform');
        form.innerHTML="";

        q.option.forEach((opt,idx)=>{
                const labal=document.createElement('label');
                labal.className='option';
                labal.innerHTML=
                `
                        <input type="radio" name="option" value="${opt}" ${selecteduttar[i]===opt ?'checked' : ''}>
                        ${String.fromCharCode(65+idx)}.${opt}
                `;
                form.appendChild(labal);
        });
        updatedepartment();
}

function saveuttar(){
        const selected=document.querySelector('input[name="option"]:checked');
        if(selected){
                selecteduttar[now]=selected.value;
        }
}

function saveandnantr(){
        saveuttar();
        mark[now]=false;
        if(now<hello_yog.length-1){
                loadkit(now+1);
        }
}

function markforreview_department(){
        saveuttar();
        mark[now]=true;
        if(now<hello_yog.length-1){
                loadkit(now+1);
        }
}

function updatedepartment(){
        const dept=document.getElementById('pani');
        dept.innerHTML="<b>Questions<b><br>";
        for(let i=0;i<hello_yog.length;i++){
                const btn=document.createElement("button");
                btn.innerText="Q"+(i+1);
                btn.onclick=()=>loadkit(i);
                if(mark[i]) {
                        btn.style.background="orange";
                }
                else if(selecteduttar[i]){
                        btn.style.background="green";
                }
                else{
                        btn.style.background="lightgray";
                        
                }
                dept.appendChild(btn);
        }
}

function submittest(){
        saveuttar();
        let score=0;
        let resultthml="<div class='result-box'><h3>Tesult:</h3>";
        hello_yog.forEach((q,i)=>{
                const useranswer = selecteduttar[i] || "Not Answered";
                const correct=q.answer_of_this;
                if(useranswer===correct){
                        score++;
                }
                resultthml+=`<p><b>${i+1}:</b> ${q.text} <br> Correct : ${correct} <br> Your Answer : ${useranswer} </p><hr>`; 
        });
        resultthml+=`<h3> Total Score : ${score}/${hello_yog.length}</h3></div>`;
        document.getElementById('result').innerHTML=resultthml
        document.getElementById('paryayform').style.display="none";
        document.querySelector('.buttons').style.display="none";
}

let time=600;
const timer=document.getElementById('timer');
const interv=setInterval(()=>{
        const minute=Math.floor(time/60);
        const second=time%60;
        timer.innerText=`Time Left : ${minute} : ${second<10 ? '0' + second : second}`;
        if(time<=0){
                clearInterval(interv);
                alert('Time Up ! ');
                submittest();
        }
        time--;
},1000);
loadkit(0);