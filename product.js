const params = new URLSearchParams(window.location.search);
const selectedID = params.get("id");

const detailURL = `https://kea-alt-del.dk/t7/api/products/${selectedID}`;
const detailContainer = document.querySelector(".product_detail");

function loadData(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      showDetails(data);
    });
  });
}

function showDetails(detail) {
  console.log("detail", detail);

  detailContainer.innerHTML = `
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${detail.id}.webp" alt="${detail.productdisplayname}" />

    <div class="product_information">
      <h2>Product Information</h2>
      <p>Model</p>
      <p><span>${detail.productdisplayname}</span></p>
      <p>Color</p>
      <p><span>${detail.basecolour}</span></p>
      <p>Description</p>
      <p><span>${detail.description}</span></p>
    </div>

    <div class="order_product">
      <h3>${detail.productdisplayname}</h3>
      <p>${detail.brandname} - ${detail.category}</p>
      <p>${detail.price} kr</p>
      <button>Add to basket</button>
    </div>`;
}

loadData(detailURL);
