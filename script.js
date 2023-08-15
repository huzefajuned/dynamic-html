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

//dummy-fake data
const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

// main function from here---
document.addEventListener("DOMContentLoaded", function () {
  const logo_Div = document.createElement("div");
  logo_Div.className = "logo";
  logo_Div.innerHTML = ` 
      <img  id='logo_img' src ='./images/heliverse.png'/>
  `;

  const main_Div = document.getElementById("nav");
  const inner_Div = document.createElement("ul");

  for (let i = 0; i < navLinks.length; i++) {
    inner_Div.innerHTML += `
          <li>    
            <a href="#" id='single-link'>${navLinks[i]}</a>
          </li>
    `;
  }

  main_Div.appendChild(logo_Div);
  main_Div.appendChild(inner_Div);
  const aTags = document.querySelectorAll("#single-link");

  for (let i = 0; i < aTags.length; i++) {
    aTags[i].addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the link
      alert("Clicked: " + aTags[i].innerText);
    });
  }

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
});

//  FOOTER  ******

const socialMedia_links = [
  { img: "images/facebook icon.webp", url: "https://www.facebook.com/" },
  { img: "images/twitter icon.png", url: "https://www.twitter.com/" },
  { img: "images/insta icon.png", url: "https://www.instagram.com/" },
  { img: "images/youtube icon.png", url: "https://www.youtube.com/" },
];

const footer = document.getElementById("footer");

const socialMediaContainer = document.createElement("div");
socialMediaContainer.id = "social_links";

socialMedia_links.forEach((link) => {
  const iconLink = document.createElement("a");
  iconLink.href = link.url;

  const image = document.createElement("img");
  image.className = "socialMedia_img";
  image.src = link.img;

  iconLink.appendChild(image);
  socialMediaContainer.appendChild(iconLink);
});

footer.appendChild(socialMediaContainer);

// FOR @COPY RIGHT FOOTER TEXT****

const footerText_div = document.createElement("div");
footerText_div.id = "footer_text";

const footer_text = document.createElement("p");
footer_text.innerHTML = "© 2023 Dynamic Footer Example";

footerText_div.appendChild(footer_text);
footer.appendChild(footerText_div);
