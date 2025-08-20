const hello_yog=[
        {
                text:"Q1 .What percent of 80 to 20 ?  ",
                option:["20","25","30","35"]
,
                answer_of_this:"25"
        },
        {
                text:"Q2 .What percent of 25 to 200 ? ",
                option:["20","40","50","60"],
                answer_of_this:"50"
        },
        {
                text:"Q3 . A laptop originally priced at₹60,000 is available at 15% discount . What is the discount amount ? ",
                option:["₹7500","₹8000","₹8500","₹9000"],
                answer_of_this:"₹9000"
        },
        {
                text:"Q4 . What is 0.5% if 2000 ?  ",
                option:["5","10","15","20"],
                answer_of_this:"10"
        },
        {
                text:"Q5 . A's Salary id 20% more than B's . If B's salary is ₹25000 , What is A's Salary ? ",
                option:["₹27000","₹28000","₹29000","₹30000"],
                answer_of_this:"₹30000"
        },
        {
                text:"Q6 . A man got a 25% hike on his salary . If his origional salary was  ₹40,00 , what is his new salary?",
                option:["₹45000","₹48000","₹50000","₹55000"],
                answer_of_this:"₹50000"
        },
        {
                text:"Q7 .If a shirt is marked at ₹500 and sold at 20% discount , what is the selling price ?",
                option:["₹400","₹420","₹450","480"],
                answer_of_this:"₹400"
        },
        {
                text:"Q8 .A number is increased by 20% and then decreased by 20%. what is net change ?",
                option:["No change","4% decrease","4% increase","10% decrease"],
                answer_of_this:"4% decrease"
        },
        {
                text:"Q9 . A student scored 540 marks out of 600 . What is the percentage ? ",
                option:["85%","88%","90%","92"%],
                answer_of_this:"90%"
        },
        {
                text:"Q10 .If the price of a product is incerased by 25% , by what percent should it be reduced to bring it back to the origional price  ? ",
                option:["20%","25%","30%","33.33%"],
                answer_of_this:"20%"
        },
        {
                text:"Q11 . What is 12.5% as a fraction?",
                option:["1/6","1/7","1/8","1/4"],
                answer_of_this:"1/8"
        },
        {
                text:"Q12 . 15% of a number is 45 . What is 20% of the same number ? ",
                option:["50","55","60","65"],
                answer_of_this:"60"
        },
        {
                text:"Q13 . A man's Salary is increased from ₹50,000 to ₹60,000 . What is the percentage increase ?",
                option:["15%","18%","20%","25%"],
                answer_of_this:""
        },
        {
                text:"Q14 . ?",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q15 .  ? ",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q16 .?",
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
                text:"Q30 . ?",
                option:["","","",""],
                answer_of_this:""
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