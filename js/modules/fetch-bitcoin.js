export default function fetchBitcoin(url, target) {
  async function fetchBitcoin() {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJson = await bitcoinResponse.json();
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  fetchBitcoin();
}


