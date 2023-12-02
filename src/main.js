import{getJoao, getMaria, deJoaoParaMaria, deMariaParaJoao} from "./joaoEMaria.js";
const spans = document.querySelectorAll("span");

const spanJoao = spans[0];
const spanMaria = spans[1];

console.log(spanJoao.textContent);
console.log(spanMaria.textContent);

const maria = getMaria();
const joao = getJoao();

console.log(joao);
console.log(maria);