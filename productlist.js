const param = new URLSearchParams(window.location.search);
const selectedCategory = param.get("category");

console.log("selectedCategory", selectedCategory);

const productURL = `https://kea-alt-del.dk/t7/api/products?category=${selectedCategory}`;
const listContainer = document.querySelector(".product_list_container");

function getData(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      showProducts(data);
    });
  });
}

function showProducts(products) {
  console.log("First product", products[0]);
  console.log("Number of products", products.length);

  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `<article class="product ${product.soldout ? "soldout" : ""}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Placeholder" />
          <h3>${product.productdisplayname}</h3>
          <p>${product.brandname} - ${product.category}</p>
          <div>
         ${product.discount ? "<p class=discout_tag >" + getDiscountPrice(product.price, product.discount) + "kr</p>" : ""}
            <p>${product.price} kr   ${product.discount ? " -" + product.discount + "%" : ""}</p>
          </div>
          <p><a href="product.html?id=${product.id}">Read More</a></p>
          ${product.soldout ? "<p class='soldout_tag'>Sold Out</p>" : ""}
        </article>`;
  });
}

getData(productURL);

function getDiscountPrice(originalPrice, discount) {
  return (originalPrice * (100 - discount)) / 100;
}

console.log("100-25%", getDiscountPrice(1300, 10));
