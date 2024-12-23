import axios from "axios";

const codigosConversao =[
    "BTC-BRL",
    "ETH-BRL",
    "LTC-BRL",
    "XRP-BRL",
    "USD-BRL",
    "EUR-BRL",
    "CAD-BRL",
    "GBP-BRL",
    "ARS-BRL",
    "CHF-BRL",
    "AUD-BRL",
]

export async function getData(){
    let url = "https://economia.awesomeapi.com.br/last/"
  
    codigosConversao.forEach((item) => {
      url += item + ","
    });
  
    url = url.slice(0, -1);
  
    const {data} = await axios.get(url);
    return data;
    
  }