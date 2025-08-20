const hello_yog=[
        {
                text:"Q1 . A can do a piece of work in 10 days , and B can do the same work in 15 days . Tf they work together for 4 days , what fraction of the work is left? ",
                option:["1/4","1/3","7/15","1/5"],
                answer_of_this:"1/3"
        },
        {
                text:"Q2 . If the simple interest on ₹4000 at 5% per annum is ₹800 , what is the time period ? ",
                option:["2 years","3 years","4 years","5 years"],
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
                text:"Q13 . What will useState() return when called?",
                option:["A Single value","An array with two elements","A function","An object with state"],
                answer_of_this:"An array with two elements"
        },
        {
                text:"Q14 . How do you handle events in React?",
                option:["react-router","react-nav","react-move","react-page"],
                answer_of_this:"react-router"
        },
        {
                text:"Q15 . Which package is used for routing in React ? ",
                option:["object","Primitive","Data types","Method"],
                answer_of_this:"object"
        },
        {
                text:"Q16 .What is the purpose of useMemo() in React?",
                option:["Persist data after refresh","Cache the return value of a function","Manage forms","Sync with the DOM"],
                answer_of_this:"Cache the return value of a function"
        },
        {
                text:"Q17. How do you optimize a React list rendering performance?",
                option:["Avoid using keys","Use React.Fragment","Use React.memo and unique keys","Use inline styles"],
                answer_of_this:"Use React.memo and unique keys"
        },
        {
                text:"Q18 . Which hook is best forreducing performance issues in expensive calculations?",
                option:["useCallback","useEffect","useMemo","useReducer"],
                answer_of_this:"useMemo"
        },
        {
                text:"Q19 .What is prop deilling in React ?",
                option:["Passing functions to children","Passing props through many layers unnecessarily","Deleting prop","Fetching props from context"],
                answer_of_this:"Passing props through many layers unnecessarily"
        },
        {
                text:"Q20 . What does useReducer ?",
                option:["Only dispatch","State and dispatch","Only state","setState function"],
                answer_of_this:"State and dispatch"
        },
        {
                text:"Q21 .Which is more suitable for complex state logic ? ",
                option:["useEffect","useReducer","useMemo",'useDtate'],
                answer_of_this:"useReducer"
        },
        {
                text:"Q22 . Which hook is used to access context ?",
                option:["useEffect","useContext","useRef","useFetch"],
                answer_of_this:"useContext"
        },
        {
                text:"Q23 . What is lazy loading in React?",
                option:["useEffect","useContext","useRef","useFetch"],
                answer_of_this:"useContext"
        },
        {
                text:"Q24React.memo us used for ?",
                option:["Avoiding re-renders of functional components","Managing memory","Debugging","Styling"],
                answer_of_this:"Avoiding re-renders of functional components"
        },
        {
                text:"Q25 . What does useCallback?",
                option:["Memoizes a callback","Fetches data","Blinds event","Accesses context"],
                answer_of_this:"Memoizes a callback"
        },
        {
                text:"Q26 . ?",
                option:["Unlimited","One","Two","None"],
                answer_of_this:"One"
        },
        {
                text:"Q27 . ? ",
                option:["componentDivMount","componentWillUnmount","componentLoop","componentDidUpdate"],
                answer_of_this:"componentLoop"
        },
        {
                text:"Q28 . ?",
                option:["React complexity","Share state between components","Increase performsnce","Add routing"],
                answer_of_this:"Share state between components"
        },
        {
                text:"Q29 . ?",
                option:["comparing all elements","Using keys","Using IDs","Random Checks"],
                answer_of_this:"Using keys"
        },
        {
                text:"Q30 . ?",
                option:["Re-rendering the entire DOM","Updating state","comparing new and old virtual DOMs","Creting a router"],
                answer_of_this:"comparing new and old virtual DOMs"
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