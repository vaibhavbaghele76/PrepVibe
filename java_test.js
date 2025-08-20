const hello_yog=[
        {
                text:"Q1 . what is the size of an int variable in java? ",
                option:["2 bytes","4 bytes","8 bytes","Depends on OS"],
                answer_of_this:"4 bytes"
        },
        {
                text:"Q2 .  Which of there is not a java keyword?",
                option:["static","Boolean","void","private"],
                answer_of_this:"Boolean"
        },
        {
                text:"Q3 . Java is : ?",
                option:["Precedural","Functional","Object-Oriented","All of the above"],
                answer_of_this:"Object-Oriented"
        },
        {
                text:"Q4 . Which method is the entry point of a java program?",
                option:["main()","start()","run()","static()"],
                answer_of_this:"main()"
        },
        {
                text:"Q5 . What is the default value of a local variable? ",
                option:["0","null",".garbage","not initialized"],
                answer_of_this:"not initialized"
        },
        {
                text:"Q6 . What is inheritance? ",
                option:["code hiding","code reusability","overriding","object creationg"],
                answer_of_this:"code reusability"
        },
        {
                text:"Q7 . Which keyword is used to inherit a class in java?",
                option:["implement","extends","interface","inherit"],
                answer_of_this:"extends"
        },
        {
                text:"Q8 . can we override a static method in java?",
                option:["yes","no"],
                answer_of_this:"no"
        },
        {
                text:"Q9 . Which feature allows once interface to be used for multiple data types? ",
                option:["Encapsulation","Inheritance","Polymorphism","Abstraction"],
                answer_of_this:"Polymorphism"
        },
        {
                text:"Q10 .  Which of these is a reference data type? ",
                option:["int","float","char","String"],
                answer_of_this:"String"
        },
        {
                text:"Q11 . Which operator is used to campare two values?",
                option:["==","=","!=","equals"],
                answer_of_this:"equals"
        },
        {
                text:"Q12 . Which is not a reltional operator? ? ",
                option:["==","!=","&&","<"],
                answer_of_this:"&&"
        },
        {
                text:"Q13 . Which keyword is used to prevernt inheritance?",
                option:["static","final","abstract","protected"],
                answer_of_this:"final"
        },
        {
                text:"Q14 . What is the base class for all Java classes?",
                option:["Object","Class","String","Abstract"],
                answer_of_this:"Object"
        },
        {
                text:"Q15 . Arrays in java are : ",
                option:["object","Primitive","Data types","Method"],
                answer_of_this:"object"
        },
        {
                text:"Q16 . Which method is used to compare strings in java?",
                option:["==","compare()","euqals()","match()"],
                answer_of_this:"euqals()"
        },
        {
                text:"Q17. How is a one - dimesional array declared?",
                option:["int arr[]","int [] arr","Both a and b","None"],
                answer_of_this:"Both a and b"
        },
        {
                text:"Q18 . Which of there methods return the length of a string?",
                option:["size()","length()","getLength()","count()"],
                answer_of_this:"length()"
        },
        {
                text:"Q19 . EWhich tag is used to define a client-side script in HTML?",
                option:["script","js","client","code"],
                answer_of_this:"script"
        },
        {
                text:"Q20 . Which of ther eis a checked exception?",
                option:["NullPointerException","ArithmeticException","IOException","ArrayIndexOutOfBoundsException"],
                answer_of_this:"IOException"
        },
        {
                text:"Q21 . Which collection class allows duplicate elements? ",
                option:["set","map","list",'None of these'],
                answer_of_this:"list"
        },
        {
                text:"Q22 . Which interface maintains insertion order?",
                option:["set","hashset","list","treeset"],
                answer_of_this:"list"
        },
        {
                text:"Q23 . Which class implements a hash table?",
                option:["HashMap","TreeMap","LinkedList","ArrayList"],
                answer_of_this:"HashMap"
        },
        {
                text:"Q24 . Which id not a part of java collection framework?",
                option:["Array","List","Map","Set"],
                answer_of_this:"Array"
        },
        {
                text:"Q25 . What does HashSet allow?",
                option:["validate","mandatory","required","checked"],
                answer_of_this:"required"
        },
        {
                text:"Q26 . Which is used for synchronization?",
                option:["volatile","synchronized","thread","extends"],
                answer_of_this:"synchronized"
        },
        {
                text:"Q27 . What does this keyword refers to?",
                option:["Static variable","Gloabal variable","Current object","Class name"],
                answer_of_this:"Current object"
        },
        {
                text:"Q28 . What is the use of super keyword?",
                option:["public","protected","static","private"],
                answer_of_this:"static"
        },
        {
                text:"Q29 . Which is not a access modifier?",
                option:["public","protected","static","private"],
                answer_of_this:"static"
        },
        {
                text:"Q30 . What is the default value of a thread?",
                option:["0","1","5","10"],
                answer_of_this:"5"
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