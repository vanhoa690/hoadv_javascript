const API_URL = 'https://fakestoreapi.com';

async function init() {
  const productList = await fetchAPIData();
  displayProductList(productList);
}
init();
async function fetchAPIData() {
  const url = `${API_URL}/products`;
  showSpinner();
  const response = await fetch(url);
  productList = await response.json();
  hideSpinner();
  return productList;
}

async function removeAPIProduct(id) {
  const url = `${API_URL}/products/${id}`;
  showSpinner();
  await axios.delete(url);
  let productList = await fetchAPIData();
  hideSpinner();
  productList = productList.filter((product) => product.id !== id);
  document.querySelector('tbody').remove();
  displayProductList(productList);
}

async function displayProductList(productList) {
  const tbody = document.createElement('tbody');
  tbody.innerHTML = `
  <thead
    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
    <tr>
        <th scope="col" class="px-6 py-3">Product name</th>
        <th scope="col" class="px-6 py-3">Category</th>
        <th scope="col" class="px-6 py-3">Rate</th>
        <th scope="col" class="px-6 py-3">Price</th>
        <th scope="col" class="px-6 py-3">Action</th>
    </tr>
    </thead>
  ${productList
    .map(
      (product) => `
      <tr
      class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
    >
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
      ${product.title}
      </th>
      <td class="px-6 py-4">${product.category}</td>
      <td class="px-6 py-4">${product.rating.rate}</td>
      <td class="px-6 py-4">${product.price}</td>
      <td class="px-6 py-4">
        <div class="flex gap-3">
          <a
            href="./edit.html?id=${product.id}"
            class="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >Edit</a
          >
          <button onClick="handleDeleteProduct(${product.id})"
            class="cursor-pointer font-medium text-red-600 dark:text-red-500"
            >Remove</button>
        </div>
      </td>
    </tr>
      `
    )
    .join('')}`;

  document.getElementById('product-list').appendChild(tbody);
}

async function handleDeleteProduct(id) {
  if (window.confirm('Do you really remove product?')) {
    removeAPIProduct(id);
  }
}

function showSpinner() {
  document.querySelector('#spinner').classList.remove('hidden');
}

function hideSpinner() {
  document.querySelector('#spinner').classList.add('hidden');
}
