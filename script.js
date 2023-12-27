const API_URL = "https://fakestoreapi.com";

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");
  displayMenu();
  displayProductList();
}

function displayMenu() {
  const menuList = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Cart",
      href: "/cart",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const ul = document.createElement("ul");
  ul.classList.add(
    "flex",
    "flex-col",
    "mt-4",
    "font-medium",
    "lg:flex-row",
    "lg:space-x-8",
    "lg:mt-0"
  );
  ul.innerHTML = `
  ${menuList
    .map(
      (menu) => `<li>
      <a
    href="${menu.href}"
    class="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
    aria-current="page"
    >${menu.label}</a>
  </li>`
    )
    .join("")}`;

  document.getElementById("mobile-menu-2").appendChild(ul);
}

async function fetchAPIData(endpoint) {
  const url = `${API_URL}/${endpoint}`;
  showSpinner();
  const response = await fetch(url);
  const data = await response.json();
  hideSpinner();
  return data;
}

async function displayProductList() {
  const productList = await fetchAPIData("products");
  const div = document.createElement("div");
  div.classList.add("flex", "flex-wrap", "justify-center", "gap-6");
  div.innerHTML = `
  ${productList
    .map(
      (product) => `  <div
      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="/product/${product.id}">
         <img
          class="p-8 rounded-t-lg h-96 object-contain mx-auto"
          src=${product.image}
          alt=${product.title}
        /> 
      </a>
      <div class="px-5 pb-5">
        <a href="/product/${product.id}">
          <h5
            class="h-24 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
          ${product.title}
          </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          </div>
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"
            >${product.rating.rate}</span
          >
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white"
            >$${product.price}</span
          >
          <a
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Add to cart</a
          >
        </div>
      </div>
    </div>`
    )
    .join("")}`;

  document.getElementById("product-list").appendChild(div);
}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}
