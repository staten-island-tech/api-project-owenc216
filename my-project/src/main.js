import "./style.css";
const apikey = "bAWulOp5JBsdCZvLITJBAiQRVq5sRrGf";
async function convertCurrency(from, to, amount) {
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
