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
    }
  } catch (error) {
    console.log(error);
  }
}
convertCurrency();
function fillDropdown(select, currencyArray) {
  currencyArray.forEach(function (currency) {
    const option = document.createElement("option");
    option.value = currency;
    option.textContent = currency;
    select.appendChild(option);
  });
}

fillDropdown(fromSelect, currencies);
fillDropdown(toSelect, currencies);

/* function data() {}
const data = data();
console.log(Array.from(data)); */
//https://api.currencybeacon.com/v1/convert?api_key=YOUR_KEY&from=USD&to=GBP&amount=100
