let maria = 2;
let joao = 1;

function getMaria(){
    return maria;
}

function getJoao(){
    return joao;
}

function setMaria(valor){
    if(valor>0){
        maria = valor;
    }
    else{
        maria = 0;
    }
}

function setJoao(valor){
    if(valor>0){
        joao = valor;
    }
    else{
        joao = 0;
    }
}

function deMariaParaJoao(){
    setJoao(joao+maria);
    setMaria(0);
}

function deJoaoParaMaria(){
    setMaria(joao+maria);
    setJoao(0);
}

export{getJoao, getMaria, setMaria, setJoao, deJoaoParaMaria, deMariaParaJoao};