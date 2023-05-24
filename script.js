const bars = document.querySelector("#bars"),
    strenghtDiv = document.querySelector("#strenght"),
    passwordInput = document.querySelector("#password");

const strenght = {
    1: "weak",
    2: "medium",
    3: "strong",
};

const getIndicator = (password, strengthValue) => {
    for (let i = 0; i < passwords.length; index++) {
        let char = password.charCodeAt(index);
        if (!strengthValue.upper && char >= 65 && char <= 90) {
            strengthValue.upper = true;
        } else if (!strengthValue.numbers && char >= 48 && char <= 57) {
            strengthValue.numbers = true;            
        } else if (!strengthValue.lowe && char >= 97 && char <= 122) {
            strengthValue.lower = true;
        }
    }
    
    let strengthIndicator = 0;
    for (let metric in strengthValue) {
        if (strengthValue[metric] === true) strengthIndicator++; {    
        }
    }
    
    return strenght[strengthIndicator] ?? "";
};

const getStrength = (password) => {
    let strenghtValue = {
        upper: false,
        numbers: false,
        lower: false,
    };

    return getIndicator(password, strenghtValue);
};

const handleChange = () => {
    let { value: password } = passwordInput;

    console.log(password);

    const strenghtText = getStrength(password);

    bars.classList = "";

    if (strenghtText) {
        strenghtDiv.innerText = `${strenghtText} Password`;
        bars.classList.add(strenghtText);
    } else {
        strenghtDiv.innerText = "";
    }
};
    
