export default function initFetchBitcoin() {
  async function fetchBitcoin() {
    try {
      const bitcoinResponse = await fetch("https://blockchain.info/ticker");
      const bitcoinJson = await bitcoinResponse.json();
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  fetchBitcoin();
}

//NA AULA FOI FEITA COM O THEN - ALTEREI PARA ASYNC

// fetch("https://blockchain.info/ticker")
//     .then((response) => response.json())
//     .then((bitcoin) => {
//         const btcPreco = document.querySelector(".btc-preco");
//         btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
//     })
//     .catch((erro) => {
//         console.log(Error(erro));
//     });
