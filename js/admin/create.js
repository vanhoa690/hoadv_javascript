const API_URL = "https://fakestoreapi.com";
const title = document.getElementById("title");
const image = document.getElementById("image");
const category = document.getElementById("category");
const description = document.getElementById("description");
const price = document.getElementById("price");

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");
}

async function postAPIData(endpoint, newProduct) {
  const url = `${API_URL}/${endpoint}`;
  showSpinner();
  const data = await axios.post(url, newProduct);
  hideSpinner();
  return data;
}

async function handleCreateProduct(event) {
  event.preventDefault();
  // Validate Input
  if (title.value === "") return alert("Please add title product");
  const newProduct = {
    title: title.value,
    image: image.value,
    category: category.value,
    description: description.value,
    price: price.value,
  };
  await postAPIData("products", newProduct);
}

function showSpinner() {
  document.querySelector("#spinner").classList.remove("hidden");
}

function hideSpinner() {
  document.querySelector("#spinner").classList.add("hidden");
}
