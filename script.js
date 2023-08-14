//dummy-data
const ecommerceData = [
  {
    id: 1,
    productName: "T-shirt",
    price: 19.99,
    category: "Clothing",
    brand: "FashionCo",
    isInStock: true,
    ratings: 4.5,
  },
  {
    id: 2,
    productName: "Laptop",
    price: 999.99,
    category: "Electronics",
    brand: "Techtronics",
    isInStock: true,
    ratings: 4.8,
  },
  {
    id: 3,
    productName: "Running Shoes",
    price: 89.95,
    category: "Footwear",
    brand: "Sportify",
    isInStock: true,
    ratings: 4.2,
  },
  {
    id: 4,
    productName: "Smartphone",
    price: 699.0,
    category: "Electronics",
    brand: "GizmoTech",
    isInStock: false,
    ratings: 4.6,
  },
  {
    id: 5,
    productName: "Jeans",
    price: 49.99,
    category: "Clothing",
    brand: "DenimStyle",
    isInStock: true,
    ratings: 4.0,
  },
  {
    id: 6,
    productName: "Backpack",
    price: 59.95,
    category: "Accessories",
    brand: "UrbanGear",
    isInStock: true,
    ratings: 4.7,
  },
  {
    id: 7,
    productName: "Headphones",
    price: 149.5,
    category: "Electronics",
    brand: "AudioWave",
    isInStock: true,
    ratings: 4.4,
  },
  {
    id: 8,
    productName: "Dress",
    price: 79.99,
    category: "Clothing",
    brand: "EleganceFinds",
    isInStock: true,
    ratings: 4.1,
  },
  {
    id: 9,
    productName: "Fitness Tracker",
    price: 79.0,
    category: "Fitness",
    brand: "ActiveLife",
    isInStock: false,
    ratings: 4.3,
  },
  {
    id: 10,
    productName: "Watch",
    price: 199.99,
    category: "Accessories",
    brand: "TimeMaster",
    isInStock: true,
    ratings: 4.9,
  },
];

// crete funtion --

(function () {
  const parentDiv = document.getElementById("main");
  ecommerceData.forEach((ecom_data) => {
    const cardDiv = document.createElement("div");
    cardDiv.id = "card";
    cardDiv.innerHTML = `
      <div class="card-inner">
        <p class="price">${ecom_data.price}</p>
        <p class="category">${ecom_data.category}</p>
        <p class="brand">${ecom_data.brand}</p>
        <p class="isInStock">${ecom_data.isInStock === true ? "yes" : "no"}</p>
        <p class="ratings">${ecom_data.ratings}⭐</p>
      </div>`;

    parentDiv.appendChild(cardDiv);
  });
})();

// footer  *******

const footer_elements = [
  {
    id: 11,
    paraGraph: "Get connected with us on Social Media:",
    image1:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png",
    image2:
      "/Users/Gulab/Desktop/JS_2/dynamically_html/dynamic-html/Facebook_f_logo_(2021).svg.webp",
  },
];

// function **
(function () {
  const footer_Div = document.getElementById("main_footer");
  footer_elements.forEach((media_dat) => {
    const links_Div = document.createElement("div");
    links_Div.id = "footer";
    links_Div.innerHTML = `
    <div class = "social_media_links">
      <p>${media_dat.paraGraph}</p>
      <div class ="socialMedia_images">
      <img href="${media_dat.image1}" alt="Twitter">
      <img href="${media_dat.image2}" alt="Facebook">
      </div>
    </div>
    `;

    footer_Div.appendChild(links_Div);
  });
})();

// ****** another array

// const user_footer = ["item1", "item2", "item3", "item4", "item5"];

// function loope_Me(user_footer) {
//   for (let i = 0; i < user_footer.length; i++) {
//     const footer_elemnt = document.getElementById("main_footer");
//     const user_interface = document.createElement("div");
//     user_interface.id = "user_div";
//     user_interface.innerHTML = `
//            <p>${user_footer[i]}</p>
//         `;
//     footer_elemnt.appendChild(user_interface);
//   }
// }
// loope_Me(user_footer);s

// let main_div = document.getElementById("main_footer");
// let create_mainDiv = document.createElement("div");
// create_mainDiv.id = "main_Div";

const user_footer = ["item1", "item2", "item3", "item4", "item5"];

function loope_Me(user_footer) {
  const footer_elemnt = document.getElementById("main_footer");
  const test_interface = document.createElement("div");
  test_interface.id = "test_something";
  for (let i = 0; i < user_footer.length; i++) {
    const user_interface = document.createElement("p");
    user_interface.id = "user_para";
    user_interface.innerHTML = user_footer[i];
    test_interface.appendChild(user_interface);
  }
  footer_elemnt.appendChild(test_interface);
}
loope_Me(user_footer);
