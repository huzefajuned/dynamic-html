//Nav Bar

const navData = [
  {
    home:"Home",
    about:"About",
    contact:"Contact",
    blog:"Blogs",
    location:"Location"
  }
]

// Function for navdata
function functionForNav() {
  const Navdata = document.getElementById("navBar");
  navData.forEach((ecom_nav) => {
    const headerNav = document.createElement("div");
    headerNav.id = "nav";
    headerNav.innerHTML = `
    <div class="inner-nav">
    <p class="links">${ecom_nav.home}</p>
    <p class="links">${ecom_nav.about}</p>
    <p class="links">${ecom_nav.contact}</p>
    <p class="links">${ecom_nav.blog}</p>
    <p class="links">${ecom_nav.location}</p>
    </div>`;

    Navdata.appendChild(headerNav);

  })
}

functionForNav();



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
