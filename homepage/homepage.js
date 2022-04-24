let choice = document.getElementsByTagName('li');
choice[0].style.color = "blue";
choice[0].style.fontWeight = "bold";

function chooseCategory(params) {
    for (let index = 0; index < choice.length; index++) {
        const element = choice[index];
        if (index != params) {
            element.style.color = "black";
            element.style.fontWeight = "normal";
        }else{
            element.style.color = "blue";
            element.style.fontWeight = "bold";
        }
    }
}