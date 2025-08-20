const hello_yog=[
        {
                text:"Q1 . Find the next number in the sequence : 2,4,8,16,?",
                option:["18","24","32","20"],
                answer_of_this:"32"
        },
        {
                text:"Q2 . Which word does not belong in this group ? ",
                option:["Apple","Banana","Carrot","Mango"],
                answer_of_this:"Carrot"
        },
        {
                text:"Q3 . Statement : All dogs are animals . All animals have four legs . Conclusion :  All dogs have four legs . Is the conclusion correct?",
                option:["Yes","No"],
                answer_of_this:"Yes"
        },
        {
                text:"Q4 . If in a certain language , 'PAPER' is coded as a 'OZODQ' , how is 'PENCIL' coded? ",
                option:["ODMHJK","ODMHBK","ODMHDK","ODLHBK"],
                answer_of_this:"ODMHBK"
        },
        {
                text:"Q5 . What comes in the next series : A,D,G,J ? ",
                option:["K","L","M","N"],
                answer_of_this:"M"
        },
        {
                text:"Q6 . If all roses are flowers and some flowers fade quickly , which of the following is true? ",
                option:["All roses fade quickly","Some roses fade quickly","Some flowers that fade quickly may be roses","Node roses fade quickly"],
                answer_of_this:"Some flowers that fade quickly may be roses"
        },
        {
                text:"Q7 . Choose the odd man out?",
                option:["3","11","7","9"],
                answer_of_this:"9"
        },
        {
                text:"Q8 . In a row of students , A is 10th from left and B is 15th from the right . If there are 30 students , how many students are between A and B?",
                option:["4","5","6","7"],
                answer_of_this:"6"
        },
        {
                text:"Q9 . If John's mother's brother's onlly sister is Mary , what relation is Mary to John? ",
                option:["Aunt","Mother","Sister","Cousin"],
                answer_of_this:"Mother"
        },
        {
                text:"Q10 .  Complete the series : 1,1,2,3,5,8,? ",
                option:["10","11","13","14"],
                answer_of_this:"13"
        },
        {
                text:"Q11 .All pens are blue . Some blue items are pencils . So , some pens are pencils . Is the conclusion valid?",
                option:["Yes","No"],
                answer_of_this:"No"
        },
        {
                text:"Q12 . 'Bird' is to 'Fly' as 'Fish ' is to : ",
                option:["Eat","Walk","Swim","Jump"],
                answer_of_this:"Swim"
        },
        {
                text:"Q13 . If A=1,B=2,.....,Z=26 , What is the value of 'DOG'?",
                option:["26","30","22","29"],
                answer_of_this:"26"
        },
        {
                text:"Q14 . A good way to figure out the relationship in a given question is to make up a sentence that describes the relationship between the forst two words . Then , try to use the same sentence to find out which of the answer choices completes the same relationship with the third word .                            Que : Odometer is to mileage as compass is to :  ?",
                option:["speed","hiking","needle","direction"],
                answer_of_this:"direction"
        },
        {
                text:"Q15 . A good way to figure out the relationship in a given question is to make up a sentence that describes the relationship between the forst two words . Then , try to use the same sentence to find out which of the answer choices completes the same relationship with the third word .                            Que : Marathon is to rece as hibernation is to :  ?",
                option:["winter","bear","dream","sleep"],
                answer_of_this:"sleep"
        },
        {
                text:"Q16 . Which word does NOT belong with the others?",
                option:["tulip","rose","bud","daisy"],
                answer_of_this:"bud"
        },
        {
                text:"Q17. Which word does NOT belong with the others?",
                option:["chapter","book","glossary","book"],
                answer_of_this:"book"
        },
        {
                text:"Q18 . Which word does NOT belong with the others?",
                option:["tape","twine","cord","yarn"],
                answer_of_this:"tape"
        },
        {
                text:"Q19 . FAG, GAF, HAI , IAH ......?",
                option:["jAK","HAL","HAK","JAI"],
                answer_of_this:"jAK"
        },
        {
                text:"Q20 . CMM , EOO , GQQ , _______ , KUU . ",
                option:["GRR","GSS","ISS","ITT"],
                answer_of_this:"ISS"
        },
        {
                text:"Q21 . Pointing to a photo , Ramesh says , 'He is the son of my mother son of grandfather's only son.' How is the person in the photo related to Ramesh ? ",
                option:["Uncle","Brother","Cousin",'Nephew'],
                answer_of_this:"Brother"
        },
        {
                text:"Q22 . Find the odd man out: 27,64,125,216,342 : " ,
                option:["64","125","216","342"],
                answer_of_this:"342"
        },
        {
                text:"Q23 . Look at the series : 22,21,23,22,24,23,.... what number should come next? ",
                option:["22","24","25","26"],
                answer_of_this:"25"
        },
        {
                text:"Q24 . Optimist is to cheerful as pessimist is to : ",
                option:["gloomy","mean","petty","helpful"],
                answer_of_this:"gloomy"
        },
        {
                text:"Q25 . Play is to actor as concert is to : ",
                option:["symphony","musician","piano","percussion"],
                answer_of_this:"musician"
        },
        {
                text:"Q26 . Look at the series :58,52,46,40,34, .... what number should come next?",
                option:["26","28","30","32"],
                answer_of_this:"28"
        },
        {
                text:"Q27 .  ? ",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q28 . ?",
                option:["","","",""],
                answer_of_this:""
        },
        {
                text:"Q29 . What is the number should come next : 3,6,11,18,27 , ?",
                option:["38","40","36","35"],
                answer_of_this:""
        },
        {
                text:"Q30 . In a code language , DOG is written as EPH . How is CAT written in that code ?",
                option:["DBU","DBV","DAU","EBU"],
                answer_of_this:"DBU"
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