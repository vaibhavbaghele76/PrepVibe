const hello_yog=[
        {
                text:"Q1 . What is xyz?  ",
                option:[" 23","34","54","46"],
                answer_of_this:"54"
        },
        {
                text:"Q2 . as baskdb akdfgb ' ",
                option:["kj ","g","ljsdg ","lsg"],
                answer_of_this:"ljsdg"
        },
        {
                text:"Q3 .Cost price (CP) of an article is ₹500 . It is sold at  ",
                option:["₹600","₹580","₹550","₹520"],
                answer_of_this:"₹600"
        },
        {
                text:"Q4 .  ",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q5 .  ? ",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q6 .  ",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q7 . ?",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q8 . ?",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q9 . ? ",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q10 .  ? ",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q11 .?",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q12 .  ? ",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q13 . ?",
                option:["","","",""],
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