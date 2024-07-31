
function generatePassword(Length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const numbersChars = "0123456789";

    const symbolsChars = "!@¬~#£$%^&*()></";

    let allowsChars = "";

    let password = "";


    
    if(includeLowercase){
        allowsChars += lowercaseChars;
    }
    else{
        allowsChars += "";
    }


    allowsChars += includeUppercase ? uppercaseChars : "";
    allowsChars += includeNumbers ? numbersChars : "";
    allowsChars += includeSymbols ? symbolsChars : "";


    if(Length <=0){
        return `(Password length must be at least 1)`;
    }

    if(allowsChars.length === 0){
        return `At least 1 set of Character needs to be Selected`;
    }


    for(let i =0;i<Length;i++){

        const randomPass = Math.floor(Math.random()* allowsChars.length);

        password += allowsChars[randomPass];

    }



    return password;
    

}


const Length = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(Length,includeLowercase,includeUppercase,includeNumbers,includeSymbols);

document.getElementById("gpassword").textContent = password;

