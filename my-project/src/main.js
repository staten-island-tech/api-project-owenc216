import "./style.css";
const apikey = "bAWulOp5JBsdCZvLITJBAiQRVq5sRrGf";
async function convertCurrency() {
  try {
    //get data from API
    const response = await fetch(`/api/v1/latest?api_key=${apikey}`);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //converts response into json we can use
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
convertCurrency();
async function getData() {
  const data = await convertCurrency();
  adoption(data);
}

function moreOption(data) {
  const fromCurrency = document.getElementById("from-currency");
  const toCurrency = document.getElementById("to-currency");
  Object.entries(data.rates).forEach(([name, rate]) => {
    const option1 = document.createElement(`option`);
    option.text = name;
    fromCurrency.addEventListener(option1);
    const option2 = document.createElement(`option`);
    option.text = name;
    toCurrencyCurrency.addEventListener(option2);
  });
}
/* function data() {}
const data = data();
console.log(Array.from(data)); */
//https://api.currencybeacon.com/v1/convert?api_key=YOUR_KEY&from=USD&to=GBP&amount=100
