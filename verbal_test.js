const hello_yog=[
        {
                text:"Q1 .Choose the word that is most similar in meaning to 'abate'? ",
                option:["Increase ","Lesson","Multiply","Rise"],
                answer_of_this:"1/3"
        },
        {
                text:"Q2 .  Choose the word that is opposite in meaning to 'Benevolent' ",
                option:["","3 years","4 years","5 years"],
                answer_of_this:"4 years"
        },
        {
                text:"Q3 . What is the remainder when to the power 100 is divided by 100 ?",
                option:["JavaScript XML","Java Syntax Extension","JSON Extension","None of the above"],
                answer_of_this:"JavaScript XML"
        },
        {
                text:"Q4 . Which of the following is true about React ? ",
                option:["React uses real Dom","React is server-side erndering only","React uses virtual DOM","React is only for mobile apps"],
                answer_of_this:"React uses virtual DOM"
        },
        {
                text:"Q5 . What is the correct command to create a new React project ? ",
                option:["npm init react-app myApp","create-react-app myApp","react-create-app myapp","npm create-react-app myApp"],
                answer_of_this:"create-react-app myApp"
        },
        {
                text:"Q6 . What is componenet in React? ",
                option:["A javascript class or function","A CSS file","A database connection","None of the above"],
                answer_of_this:"code reusability"
        },
        {
                text:"Q7 . How do you pass data to a component in React?",
                option:["A javasScript class or function","A CSS file","A database connection","None of the above"],
                answer_of_this:"A javasScript class or function"
        },
        {
                text:"Q8 . How do you pass data to a component in React?",
                option:["props","state","setState","render"],
                answer_of_this:"props"
        },
        {
                text:"Q9 . Props are _______ in React? ",
                option:["Mutable","Immutable","Both","None"],
                answer_of_this:"Immutable"
        },
        {
                text:"Q10 .  How do you define a  function component in React? ",
                option:["function MyComponent() {}","class MyComponent extwnds Component{}","const MyComponent =React.createComponent()","new Component()"],
                answer_of_this:"function MyComponent() {}"
        },
        {
                text:"Q11 . Which hook is used to manage state in a functional component?",
                option:["useEffect()","useState()","useContext()","useReducer()"],
                answer_of_this:"equals"
        },
        {
                text:"Q12 . State in React is used for ? ",
                option:["Styling","Storing local component data","Storing global data","Connecting to APIs"],
                answer_of_this:"Storing local component data"
        },
        {
                text:"Q13 . ?",
                option:["A Single value","","",""],
                answer_of_this:"An array with two elements"
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