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
    option1.text = name;
    fromCurrency.addEventListener(option1);
    const option2 = document.createElement(`option`);
    option2.text = name;
    toCurrencyCurrency.addEventListener(option2);
  });
}

const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amountInput = document.getElementById("currencies");
const convertBtn = document.getElementById("convert-btn");
const resultText = document.getElementById("result");

async function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = amountInput.value;

  if (!from || !to || !amount) {
    resultText.textContent = "Please fill in all fields.";
    return;
  }

  try {
    const response = await fetch(
      `/api/v1/convert?api_key=${apikey}&from=${from}&to=${to}&amount=${amount}`
    );

    if (!response.ok) {
      throw new Error("API error");
    }

    const data = await response.json();
    resultText.textContent = `${amount} ${from} = ${data.value} ${to}`;
  } catch (error) {
    resultText.textContent = "Conversion failed.";
  }
}

convertBtn.addEventListener("click", convertCurrency);

/* function data() {}
const data = data();
console.log(Array.from(data)); */
//https://api.currencybeacon.com/v1/convert?api_key=YOUR_KEY&from=USD&to=GBP&amount=100
