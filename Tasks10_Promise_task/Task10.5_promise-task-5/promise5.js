async function convertCurrency() {
    let card = document.querySelector(".card");
    let card_header = document.querySelector(".card-header");
    let card_title = document.querySelector(".card-title");
    let card_text = document.querySelector(".card-text");
    let error = document.querySelector(".error");
    error.style.color = "red";
    let from = document.querySelector("#from").value;
    let to = document.querySelector("#to").value;
    let rate = document.querySelector(".amt").value;
    document.querySelector(".amt").value = "";
    let url = `https://api.ratesapi.io/api/latest?base=${from}&symbols=${to}`;
    try {
      if (rate !== "") {
        if (from === to) {
          error.innerHTML = "*countries must be different";
        } else {
          error.innerHTML = "";
          const response = await fetch(url);
          const data = await response.json();
  
          let date = data.date;
          let res = data.rates[to];
          let ans = res * rate;
          card.classList.remove("d-none");
          card_header.innerHTML = date;
          card_title.innerHTML = `${from} - ${to}`;
          card_text.innerHTML = `${rate} ${from} = ${ans} ${to}`;
        }
      } else {
        error.innerHTML = "*enter amount";
      }
    } catch (error) {
      console.log(error);
    }
  }