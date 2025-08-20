const hello_yog=[
        {
                text:"Q1 . Find the greatest number that will divide 43,91 and 183 so as to leave the same remainder in each case? ",
                option:["4","7","9","13"],
                answer_of_this:"4"
        },
        {
                text:"Q2 . Which of the following has the most number of divisors ? ",
                option:["18299","101","176","182"],
                answer_of_this:"176"
        },
        {
                text:"Q3 .The L.C.M. of two numbers is 48. The numbers are in the ratio 2:3. Then sum of the numbers is : ",
                option:["28","32","40","64"],
                answer_of_this:"40"
        },
        {
                text:"Q4 . Three numbers which are co-prime to each other are such that the product of the first tqo is 551 and that of the last two is 1073 . The sum of three numbers is :  ",
                option:["75","81","85","89"],
                answer_of_this:"85"
        },
        {
                text:"Q5 . The HCF of 60 and 75 is: ",
                option:["5","15","30","45"],
                answer_of_this:"15"
        },
        {
                text:"Q6 . The product of two numbers is 96 , their HCF is 4 . Find their LCM?  ",
                option:["12","20","24","48"],
                answer_of_this:"24"
        },
        {
                text:"Q7 . The HCF of 18,54 and 81 is : ",
                option:["3","9","6","18"],
                answer_of_this:"9"
        },
        {
                text:"Q8 . The least number divisible by 12,18 an d30 is :",
                option:["90","180","60","120"],
                answer_of_this:"180"
        },
        {
                text:"Q9 . The LCM of 5,10 and 25 is  ? ",
                option:["50","25","75","100"],
                answer_of_this:"50"
        },
        {
                text:"Q10 . HCF of two consecutive even numbers is :  ",
                option:["1","2","4","Depends on numbers"],
                answer_of_this:"2"
        },
        {
                text:"Q11 . LCM of 16 and 20 is : ",
                option:["160","80","40","20"],
                answer_of_this:""
        },
        {
                text:"Q12 . The greatest number that divides 43 and 91 leaving remainder 3 in each case is  ? ",
                option:["6","4","8","12"],
                answer_of_this:"8"
        },
        {
                text:"Q13 . The smallest 3-digit number divisible by 6,8 and 12 is : ",
                option:["104","120","108","112"],
                answer_of_this:"120"
        },
        {
                text:"Q14 .The HCF of 72 and 120 is : ",
                option:["12","24","36","48"],
                answer_of_this:"24"
        },
        {
                text:"Q15 . HCF of 1 and 0 is :",
                option:["0","1","Undefined","Infinity"],
                answer_of_this:"1"
        },
        {
                text:"Q16 . ",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q17. ?",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q18 . ?",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q19 . ?",
                option:[""," ","",""],
                answer_of_this:""
        },
        {
                text:"Q20 .  ?",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q21 .  ? ",
                option:["","","",''],
                answer_of_this:""
        },
        {
                text:"Q22 .  ?",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q23 . ?",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q24  ?",
                option:[""," ","",""],
                answer_of_this:""
        },
        {
                text:"Q25 . ?",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q26 . ?",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q27 . ? ",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q28 . ?",
                option:[" "," "," "," "],
                answer_of_this:""
        },
        {
                text:"Q29 . ?",
                option:[""," "," "," "],
                answer_of_this:""
        },
        {
                text:"Q30 . The LCM of 4 and 5 : ",
                option:["10","15","20","25"],
                answer_of_this:"20"
        },



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