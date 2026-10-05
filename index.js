// "use strict";
// console.log("Hej");

"use strict";

// De to functioner getData_async og getData_then gør det samme, men på to forskellige måder. Den ene med async/await og den anden med .then() metoden.
// Begge henter data fra et API og viser det i konsollen.
// async/await er nemmere at læse, mens .then() metoden kan være sværere at læse, hvis der er mange nested promises.

const productUrl = "https://kea-alt-del.dk/t7/api/categories";
const category_list_container = document.querySelector(".category_list_container");
getData();
function getData() {
  fetch(productUrl).then((result) => result.json().then((data) => showData(data)));
}

function showData(data) {
  console.log("DATA", data);

  //   console.log(data);
  category_list_container.innerHTML = "";
  let myInnerHTML = "";

  data.forEach((category) => {
    console.log(category);

    myInnerHTML += `<div class="category">
        <a href="productlist.html?category=${category.category}">
          <div>
           <h3>${category.category}</h3>
            <p> prøve </p>
          </div>
        </a>
      </div>`;
  });

  category_list_container.innerHTML = myInnerHTML;
}
