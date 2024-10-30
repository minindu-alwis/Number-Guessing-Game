
let randomnumber=Math.floor((Math.random()*10)+1);
console.log(randomnumber);

let chancess=3;

function guess(){
    


    let userinput=document.getElementById("userinputt").value;
    console.log(userinput);

    let numbersleft=document.getElementById("leftnumers");
    let winorlost=document.getElementById("winorlost");

    let coolorhot=document.getElementById("coolorhot");
     

    if(chancess>0){

        if(randomnumber==userinput){

            numbersleft.innerHTML=("🎈 Changes Left : 0 🎈");
            winorlost.innerHTML=("🔥 Win the Game 🔥");
            coolorhot.innerHTML=("💞💞 Gessing Number Is Correct !!!!!!!!!!!! 💞💞");
            alert("ගැම්මක් සුද්දා 💦");

        }else{
            chancess--;
            numbersleft.innerHTML=(`Changes Left : ${chancess} `);
            if(randomnumber>userinput){
                coolorhot.innerHTML=("Your Numeber is  Low 😂");
            }else{
                coolorhot.innerHTML=("Your Numeber is  Higher 😂");
            }
            winorlost.innerHTML=("Try Agin Broooooo 😴😴🥱😫😪");
        }
    }
    if(chancess === 0 && randomnumber!= userinput){
        numbersleft.innerHTML=("Changes Left : 0");
        coolorhot.innerHTML=("Bad Luck !!!! 😝");
        winorlost.innerHTML=(`💕 Lost the Game !! Correct Number is = ${randomnumber} 💕`);
    }

    

}

