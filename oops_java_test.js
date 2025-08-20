const hello_yog=[
        {
                text:"Q1 . Which of the following is not a princeiple of OOPs ? ",
                option:["Inheritance","Encapsulation","Compilation","Polymorphism"],
                answer_of_this:"Compilation"
        },
        {
                text:"Q2 . What is the purpose of encapsulation in Java?",
                option:["To allow multiple inheritances","To hide the internal details of an object","To allow global details of an object","To override methods"],
                answer_of_this:"To hide the internal details of an object"
        },
        {
                text:"Q3 . Which of the following concept of OOPA menas 'reusing code' ?",
                option:["Polymorphism","Abstraction","Encapsulation","Inheritance"],
                answer_of_this:"Inheritance"
        },
        {
                text:"Q4 . Whcih of there keywords is ued to prevent method overriding in Java",
                option:["Static","final","abstract","super"],
                answer_of_this:"final"
        },
        {
                text:"Q5 . What is method overriding? ",
                option:["Defining a method in a subclass","Two methods having the same name but different parameters","Two classes with the same method","None of the Above"],
                answer_of_this:"Two methods having the same name but different parameters"
        },
        {
                text:"Q6 . Which access modifier makes the member visible only within the same package and not outside? ",
                option:["private","protected","public","default(no modifier)"],
                answer_of_this:"default(no modifier)"
        },
        {
                text:"Q7 . Which keyword is used to call the parent class constructor in Java?",
                option:["super","this","parent","base"],
                answer_of_this:"super"
        },
        {
                text:"Q8 . Polymorphism allows?",
                option:["Different implementations of a method with the same name","Acessiong private methods","Creating multiple construcutors","Only one method in a class"],
                answer_of_this:"Different implementations of a method with the same name"
        },
        {
                text:"Q9 . Which of the following is used to achieve abstraction in Java?  ",
                option:["Abstract class only","Interface only","Both A and B","Encapsulation"],
                answer_of_this:"Both A and B"
        },
        {
                text:"Q10 .  Which of the following is not a valid HTML5 tag? ",
                option:["article","section","footer","blink"],
                answer_of_this:"blink"
        },
        {
                text:"Q11 . Which tag is used to create a table row?",
                option:["td","tr","table","th"],
                answer_of_this:"tr"
        },
        {
                text:"Q12 . Which tag defines navigation links? ",
                option:["nav","menu","navigate","navigation"],
                answer_of_this:"nav"
        },
        {
                text:"Q13 . Which HTML5 tag is used for multimedia playback?",
                option:["media","sound","video","mp4"],
                answer_of_this:"video"
        },
        {
                text:"Q14 . Which attribute is used to specify the character encoding in HTML5?",
                option:["charset","encoding","meta-type","lang"],
                answer_of_this:"charset"
        },
        {
                text:"Q15 . Which element defines the document type?",
                option:["!DOCTYPE","html","head","html"],
                answer_of_this:"!DOCTYPE"
        },
        {
                text:"Q16 . HTML is a:",
                option:["Programming language","styling language","Markup language","Query language"],
                answer_of_this:"Markup language"
        },
        {
                text:"Q17. Which tag is used to embed an iframe in HTML?",
                option:["frame","window","iframe","embed"],
                answer_of_this:"Markup language"
        },
        {
                text:"Q18 . Which tag is used to create a drop-doen list?",
                option:["select","dropdown","input type='dropdown'","option"],
                answer_of_this:"select"
        },
        {
                text:"Q19 . EWhich tag is used to define a client-side script in HTML?",
                option:["script","js","client","code"],
                answer_of_this:"script"
        },
        {
                text:"Q20 . Which tag is used to mark text as deleted?",
                option:["remove","del","strike","cut"],
                answer_of_this:"del"
        },
        {
                text:"Q21 . The <abbr> tag is used for : ",
                option:["Abbreviations","Shotening images","Making text bold","Creating buttons"],
                answer_of_this:"Abbreviations"
        },
        {
                text:"Q22 . What is the default alignment of content in a <div>?",
                option:["Center","Right","Left","Justify"],
                answer_of_this:"Left"
        },
        {
                text:"Q23 . Which input type is used to upload files?",
                option:["type='upload'","type='file'","type='browse'","type='data'"],
                answer_of_this:"type='file'"
        },
        {
                text:"Q24 . Which input type is used to select a datae?",
                option:["input type='checkbox'","check","checkbox","input type='check'"],
                answer_of_this:"input type='checkbox'"
        },
        {
                text:"Q25 . Which attribute specifies that an input field must be filled out?",
                option:["validate","mandatory","required","checked"],
                answer_of_this:"required"
        },
        {
                text:"Q26 . Which form attribute defines where to send the form data?",
                option:["action","method","href","target"],
                answer_of_this:"action"
        },
        {
                text:"Q27 . What is the default form method if not specified?",
                option:["POST","GET","PUT","DELETE"],
                answer_of_this:"GET"
        },
        {
                text:"Q28 . What attribute groups multiple form fields?",
                option:["formgroup","fieldsets","group","block"],
                answer_of_this:"fieldsets"
        },
        {
                text:"Q29 . What tag is used to label a form input?",
                option:["title","label","caption","name"],
                answer_of_this:"label"
        },
        {
                text:"Q30 . Which attribute limits the number of characters in an input field?",
                option:["title","label","caption","name"],
                answer_of_this:"label"
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