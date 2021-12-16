function introduction(string){
    return  `Hi, my name is ${string}.`;
}

function introductionWithLanguage(){ 
    console.log(arguments[0]);
}
introductionWithLanguage("dom")