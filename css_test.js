const hello_yog=[
        {
                text:"Q1 . What does CSS stands for? ",
                option:["Creative Style Sheets","Computer Style Sheets","Cascading Style Sheets","Colorful Style Sheets"],
                answer_of_this:"Cascading Style Sheets"
        },
        {
                text:"Q2 .  Which HTML tag is used to define an interval style sheet?",
                option:["style","css","script","link"],
                answer_of_this:"style"
        },
        {
                text:"Q3 . When in an HTML Document is the correct place to refer to an external CSS file?",
                option:["At the end of the document","Inside the body tah","Inside the head tag","After the html tag"],
                answer_of_this:"Inside the head tag"
        },
        {
                text:"Q4 . Which property is used to change the background color?",
                option:["bgcolor","background-color","color","background"],
                answer_of_this:"background-color"
        },
        {
                text:"Q5 . How do you select an element with id 'Demo ?' ",
                option:["demo","#demo",".demo","*demo"],
                answer_of_this:"#demo"
        },
        {
                text:"Q6 . How do you select elements with class name 'box' ",
                option:["#box",".box","box","*box"],
                answer_of_this:".box"
        },
        {
                text:"Q7 . Which CSS Property controls the text size?",
                option:["font-style","text-size","font-size","text-style"],
                answer_of_this:"font-size"
        },
        {
                text:"Q8 . What is the default position of an HTML element?",
                option:["absolute","fixed","relative","static"],
                answer_of_this:"static"
        },
        {
                text:"Q9 . Which property is used to change te text color of an element?  ",
                option:["bgcolor","text-color","color","font-color"],
                answer_of_this:"color"
        },
        {
                text:"Q10 .  How can you make a list not display bullets? ",
                option:["list-type : none","list-style : no-bullet","list-style:none","bullet-none"],
                answer_of_this:"list-style:none"
        },
        {
                text:"Q11 . Which value of the position property makes the element stay fied at a location on the screen?",
                option:["absolute","static","fixed","sticky"],
                answer_of_this:"fixed"
        },
        {
                text:"Q12 . Wht does z-index do? ? ",
                option:["changes zoom level","controls element stacking order","sets the background order","sets the background layer"],
                answer_of_this:"controls element stacking order"
        },
        {
                text:"Q13 . How do you make an eleemnt take up the full width of its parent?",
                option:["width:auto","width:100%","width:fit-content","width:full"],
                answer_of_this:"width:100%"
        },
        {
                text:"Q14 . What is the use of the display:flex; property?",
                option:["To create a grid layout","To create a flexible box layout","To hide elements","To float elements"],
                answer_of_this:"To create a flexible box layout"
        },
        {
                text:"Q15 . In how many ways can CSS be written in?",
                option:["1","2","3","4"],
                answer_of_this:"3"
        },
        {
                text:"Q16 . The CSS property used to sepecify the transparency of an element is?",
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