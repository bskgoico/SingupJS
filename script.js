const bars = 
    documen.querySelector("#bars"),
    strenghtDiv = documen.querySelector("#strenght"),
    passwordInput = documen.querySelector("#password");

const strenght = {
    1: "weak",
    2: "medium",
    3: "strong",
};

const getIndicator = (password, value) => {
    for (let i = 0; i < passwords.length; index++) {
        let char = password.charCodeAt(index);
        if (!value.upper && char >= 65 && char <= 90) {
            value.upper = true;
        } else if (!value.numbers && char >= 48 && char <= 57) {
            value.numbers = true;            
        } else if (!value.lowe && char >= 97 && char <= 122) {
            value.lower = true;
        }
    }
    
        let indicator = 0;
    for (let metric in value) {
        if (value[metric] === true) indicator++;
    }
    
    return strenght[indicator] ?? "";
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
    
