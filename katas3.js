// Exercicio 1 Completo //


function xRunning(array){

        for(let i = 0; i < array.length; i++){
        array[i] = "x";
        if(i != 0){
            array[i -1] = "-"
        };
        console.log(array);
    };
};
xRunning(["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);


// Exercicio 2 Completo //


function vowelsCounter(array) {

    let conca = [];
    for (let i = 0; i < array.length; i++) {
        let frutas = array[i];
        let contVogais = 0;
        for (let v = 0; v < frutas.length; v++) {
            let frutasVogais = frutas[v];

            if (frutasVogais == "a") {
                contVogais++
            } else if (frutasVogais == "e") {
                contVogais++
            } else if (frutasVogais == "i") {
                contVogais++
            } else if (frutasVogais == "o") {
                contVogais++
            } else if (frutasVogais == "u") {
                contVogais++
            };
        };
        conca.push(contVogais);
    };
    return conca;
};
console.log(vowelsCounter(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"]));


// Exercicio 3 Completo //


function stringTripletGroup(array){

    contatenacao = [];
    for(let i = 0; i < array.length; i+= 3){
        let letras = array[i];
        let variavelVazia = "";
        array[i + 1] ;
        array[i + 2];
        variavelVazia += array[i];
        if(array[i + 1] == undefined){
            variavelVazia += " "
        } else {
            variavelVazia += array[i + 1]
        }
        if(array[i + 2] == undefined){
            variavelVazia += " "
        } else {
            variavelVazia += array[i + 2]
        };

        contatenacao.push(variavelVazia);
    };
    return contatenacao;
};
console.log(stringTripletGroup("Os três mosqueteiros"));


// Exercicio 4 Completo //


function dominantPet(array) {

    let contCat = 0;
    let contDog = 0;
    for (let i = 0; i < array.length; i++) {
        let letras = array[i]

        if (letras.toLowerCase() == "dog") {
            contDog++
        } else if (letras.toLowerCase() == "cat") {
            contCat++
        };
    };

    if (contCat === contDog) {
        console.log(`"DRAW!"`)
    } else if (contDog > contCat) {
        console.log(`"DOG!"`)
    } else {
        console.log(`"CAT!"`)
    };
};
dominantPet(["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"]);


// Exercicio 5 Completo //


function divisibleList(array, n) {

    let conca = [];
    for (let i = 0; i <= array.length; i++) {
        let numeros = array[i];

        if (numeros % n == 0) {
            conca.push(numeros)
        };
    };
    return conca;
};
console.log(divisibleList([14, 25, 32, 50, 35, 30], 5));


// Exercicio 6 Completo //


function trustMeOrNot(bool, numero) {

    let conca = [];
    for (let i = 1; i <= numero; i++) {
        let numeroEscolhido = i;

        conca.push(bool);
    };
    return conca;
};
console.log(trustMeOrNot(true, 8));


// Exercicio 7 Completo //


function changeLampStatus(array) {
    let conca = [];
    for (let i = 0; i < array.length; i++) {
        let lampada = array[i];


        if (lampada == true) {
            conca.push(false)
        } else {
            conca.push(true)
        };
    };
    return conca;
};
console.log(changeLampStatus([false, false, true, false, true, true, true]));


// Exercicio 8 Completa //


function gradeAverage(array) {
    let soma = 0;
    let cont = 0;
    let conca = [];
    for (let i = 0; i < array.length; i++) {
        let notas = array[i];
        soma += notas;
        cont++;
    };
    let media = (soma / cont).toFixed(2);

    if (media >= 0.00 && media <= 10.00) {
        console.log(`"A média das notas é: ${media}"`)
    };
};
gradeAverage([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]);


// Exercicio 9 Completo//


function canvasDeliveriesPercentage(array) {

    let soma = 0;
    let cont = 0;
   
    for (let i = 0; i < array.length; i++) {
        let notas = array[i];
        soma += notas / 10
        cont++;
    };
    let porcentagem = (soma * cont).toFixed(2);

    if (porcentagem >= 0.00 && porcentagem <= 100.00) {
        console.log(`"A média das notas é: ${porcentagem}%"`)
    } else {
        console.log("valor de notas acima do permitido")
    }
    
};
canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7]);


// Exercicio 10 Completo //


function shouldIGo(array){

    let conca = [];
    for(let i = 0; i <= array.length; i++){
        let letra = array[i];

        if(letra == "R"){
            conca.push("Stop!")
        } else if(letra == "r"){
           conca.push("Stop!")
        } else if(letra == "Y"){
           conca.push("Attention!")
        } else if(letra == "y"){
           conca.push("Attention!")
        } else if(letra == "G"){
           conca.push("Go!")
        } else if(letra == "g"){
           conca.push("Go!")
        };
    };
    return conca
};
console.log(shouldIGo(["R", "r", "G", "y", "G", "Y", "g"]));
