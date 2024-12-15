export function getNomes(texto){
    if(!texto) return [];
    return texto.split("/");
  }