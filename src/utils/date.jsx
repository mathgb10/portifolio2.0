export function getInfosDate(){
  const dataAtual = new Date();
  const hora = dataAtual.getHours();
  const day = dataAtual.getDate();
  const month = dataAtual.getMonth();
  const year = dataAtual.getFullYear();
  
  return {
    "dataAtual":dataAtual,
    "hora":hora,
    "dia":day,
    "mes":month,
    "ano":year
  }
}

export function welcome() {
  const infos = getInfosDate();

  if (infos.hora >= 5 && infos.hora < 12) {
    return "Olá, Bom dia!";
  } else if (infos.hora >= 12 && infos.hora < 18) {
    return "Olá, Boa tarde!";
  } else {
    return "Olá, Boa noite!";
  }
}

export function years(){
  const infos = getInfosDate();
  const idade = infos.ano - 2006;
  return idade;
}