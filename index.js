function introduction(string){
    return  `Hi, my name is ${string}.`;
}

function introductionWithLanguage(string, langague){ 
    return `Hi, my name is ${string} and I am learning to program in ${langague}.`;
}
function introductionWithLanguageOptional(string = "Gracie", langague = "JavaScript"){
    return `Hi, my name is ${string} and I am learning to program in ${langague}.`
}