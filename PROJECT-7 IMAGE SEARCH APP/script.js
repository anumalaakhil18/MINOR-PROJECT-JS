const ACCESS_KEY = "Hc1nhnTLTVT8zfWfeY5t842WnKXSNsO81ROdYjQx4Zs";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const loader = document.getElementById("loader");
const errorMessage = document.getElementById("errorMessage");

let keyword = "";
let page = 1;

async function fetchImages() {

  keyword = searchInput.value.trim();

  // Empty input check
  if(keyword === ""){
    errorMessage.innerText = "Please enter something";
    return;
  }

  loader.classList.remove("hidden");
  errorMessage.innerText = "";

  try {

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${ACCESS_KEY}&per_page=12`;

    const response = await fetch(url);

    // Error handling
    if(!response.ok){
      throw new Error("API Error");
    }

    const data = await response.json();

    // Clear old images
    if(page === 1){
      gallery.innerHTML = "";
    }

    // No image found
    if(data.results.length === 0){
      errorMessage.innerText = "No images found";
      return;
    }

    // Create image cards
    data.results.forEach((image) => {

      const card = document.createElement("div");
      card.classList.add("image-card");

      card.innerHTML = `
        <img src="${image.urls.small}" alt="image">
        <a href="${image.links.html}" target="_blank">
          View Image
        </a>
      `;

      gallery.appendChild(card);
    });

    loadMoreBtn.classList.remove("hidden");

  } catch(error){

    console.log(error);

    errorMessage.innerText = "Something went wrong";

  } finally {

    loader.classList.add("hidden");
  }
}

// Search button
searchBtn.addEventListener("click", () => {
  page = 1;
  fetchImages();
});

// Load More
loadMoreBtn.addEventListener("click", () => {
  page++;
  fetchImages();
});