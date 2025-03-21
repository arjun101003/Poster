// Sample poster data
const posters = [
    {
        id: "poster-1",
        name: "Mountain Landscape",
        price: "$24.99",
        image: "https://via.placeholder.com/400x400.png?text=Mountain+Landscape",
        category: "Nature",
        rating: 4,
        reviews: 127,
        description: "A stunning mountain landscape poster perfect for nature lovers. This high-quality print captures the majestic beauty of mountain peaks at sunset."
    },
    {
        id: "poster-2",
        name: "Abstract Art",
        price: "$19.99",
        image: "https://via.placeholder.com/400x400.png?text=Abstract+Art",
        category: "Art",
        rating: 5,
        reviews: 84,
        description: "Modern abstract art poster with vibrant colors and geometric shapes. This eye-catching design will add a contemporary touch to any room."
    },
    {
        id: "poster-3",
        name: "Movie Classic",
        price: "$22.99",
        image: "https://via.placeholder.com/400x400.png?text=Movie+Classic",
        category: "Movies",
        rating: 4,
        reviews: 56,
        description: "Vintage movie poster featuring a classic film. This nostalgic print is perfect for film buffs and collectors."
    },
    {
        id: "poster-4",
        name: "Rock Band",
        price: "$21.99",
        image: "https://via.placeholder.com/400x400.png?text=Rock+Band",
        category: "Music",
        rating: 5,
        reviews: 92,
        description: "Iconic rock band poster featuring legendary musicians. This high-quality print is a must-have for music enthusiasts."
    },
    {
        id: "poster-5",
        name: "Ocean Waves",
        price: "$18.99",
        image: "https://via.placeholder.com/400x400.png?text=Ocean+Waves",
        category: "Nature",
        rating: 4,
        reviews: 63,
        description: "Serene ocean waves poster capturing the peaceful beauty of the sea. Perfect for creating a calming atmosphere in any space."
    },
    {
        id: "poster-6",
        name: "Minimalist Design",
        price: "$17.99",
        image: "https://via.placeholder.com/400x400.png?text=Minimalist+Design",
        category: "Art",
        rating: 4,
        reviews: 41,
        description: "Clean minimalist design poster with simple shapes and a muted color palette. Ideal for modern and minimalist interior styles."
    },
    {
        id: "poster-7",
        name: "Sci-Fi Movie",
        price: "$23.99",
        image: "https://via.placeholder.com/400x400.png?text=Sci-Fi+Movie",
        category: "Movies",
        rating: 5,
        reviews: 78,
        description: "Futuristic sci-fi movie poster with stunning visuals. This eye-catching print is perfect for science fiction fans."
    },
    {
        id: "poster-8",
        name: "Jazz Legends",
        price: "$20.99",
        image: "https://via.placeholder.com/400x400.png?text=Jazz+Legends",
        category: "Music",
        rating: 4,
        reviews: 52,
        description: "Vintage-style jazz legends poster featuring iconic musicians. A perfect addition to any music lover's collection."
    },
    {
        id: "poster-9",
        name: "Forest Path",
        price: "$19.99",
        image: "https://via.placeholder.com/400x400.png?text=Forest+Path",
        category: "Nature",
        rating: 4,
        reviews: 37,
        description: "Enchanting forest path poster with sunlight filtering through the trees. This peaceful nature print brings the outdoors inside."
    },
    {
        id: "poster-10",
        name: "Pop Art",
        price: "$25.99",
        image: "https://via.placeholder.com/400x400.png?text=Pop+Art",
        category: "Art",
        rating: 5,
        reviews: 89,
        description: "Vibrant pop art poster inspired by iconic artists. This colorful and playful design makes a bold statement in any room."
    },
    {
        id: "poster-11",
        name: "Action Movie",
        price: "$22.99",
        image: "https://via.placeholder.com/400x400.png?text=Action+Movie",
        category: "Movies",
        rating: 4,
        reviews: 64,
        description: "Dynamic action movie poster with explosive visuals. Perfect for movie enthusiasts and home theater decoration."
    },
    {
        id: "poster-12",
        name: "Hip Hop Icons",
        price: "$23.99",
        image: "https://via.placeholder.com/400x400.png?text=Hip+Hop+Icons",
        category: "Music",
        rating: 5,
        reviews: 71,
        description: "Hip hop icons poster featuring legendary artists. This stylish print celebrates the culture and history of hip hop music."
    }
];


const whatsappNumber = "+919319830264"; 

// Helper function to generate star ratings
function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Function to create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <div class="product-rating">
                    ${generateStarRating(product.rating)}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">${product.price}</div>
            </div>
        </div>
    `;
}

// Function to load featured products
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    if (featuredContainer) {
        // Display first 8 products as featured
        const featuredHTML = posters.slice(0, 8).map(product => createProductCard(product)).join('');
        featuredContainer.innerHTML = featuredHTML;
        
        // Add click event listeners to product cards
        addProductCardListeners();
    }
}

// Function to load new arrivals
function loadNewArrivals() {
    const newArrivalsContainer = document.getElementById('new-arrivals');
    if (newArrivalsContainer) {
        // Display last 4 products as new arrivals
        const newArrivalsHTML = posters.slice(8, 12).map(product => createProductCard(product)).join('');
        newArrivalsContainer.innerHTML = newArrivalsHTML;
        
        // Add click event listeners to product cards
        addProductCardListeners();
    }
}

// Function to add click event listeners to product cards
function addProductCardListeners() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.getAttribute('data-id');
            window.location.href = `product.html?id=${productId}`;
        });
    });
}

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to load product details
function loadProductDetails() {
    const productContainer = document.getElementById('product-container');
    if (productContainer) {
        const productId = getUrlParameter('id');
        const product = posters.find(p => p.id === productId) || posters[0];
        
        // Format WhatsApp message
        const whatsappMessage = encodeURIComponent(`Hi, I'm interested in buying the "${product.name}" poster (ID: ${product.id}) for ${product.price}. Is it available?`);
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        
        const productHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info-details">
                <h1>${product.name}</h1>
                <p class="product-category">${product.category}</p>
                <div class="product-rating">
                    ${generateStarRating(product.rating)}
                    <span>(${product.reviews} reviews)</span>
                </div>
                <div class="product-price">${product.price}</div>
                
                <div class="product-description">
                    <h3>Description</h3>
                    <p>${product.description}</p>
                </div>
                
                <div class="product-details-list">
                    <h3>Details</h3>
                    <ul>
                        <li>High-quality print on premium paper</li>
                        <li>Vibrant, fade-resistant colors</li>
                        <li>Multiple size options available</li>
                        <li>Ships in protective tube packaging</li>
                    </ul>
                </div>
                
                <div class="product-actions">
                    <div class="product-options">
                        <div class="option-group">
                            <label for="size">Size</label>
                            <select id="size">
                                <option>Small (12" x 18")</option>
                                <option>Medium (18" x 24")</option>
                                <option>Large (24" x 36")</option>
                            </select>
                        </div>
                        <div class="option-group">
                            <label for="quantity">Quantity</label>
                            <select id="quantity">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    
                    <a href="${whatsappLink}" class="btn whatsapp-btn" target="_blank">
                        <i class="fab fa-whatsapp"></i> Buy Now via WhatsApp
                    </a>
                    <p class="whatsapp-note">
                        Clicking "Buy Now" will open WhatsApp with a pre-filled message to complete your purchase.
                    </p>
                </div>
            </div>
        `;
        
        productContainer.innerHTML = productHTML;
    }
}

// Function to load related products
function loadRelatedProducts() {
    const relatedContainer = document.getElementById('related-products');
    if (relatedContainer) {
        const productId = getUrlParameter('id');
        const currentProduct = posters.find(p => p.id === productId) || posters[0];
        
        // Get products in the same category
        const relatedProducts = posters
            .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
            .slice(0, 4);
        
        const relatedHTML = relatedProducts.map(product => createProductCard(product)).join('');
        relatedContainer.innerHTML = relatedHTML;
        
        // Add click event listeners to product cards
        addProductCardListeners();
    }
}

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize page based on current page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the home page
    if (document.getElementById('featured-products')) {
        loadFeaturedProducts();
        loadNewArrivals();
    }
    
    // Check if we're on the product page
    if (document.getElementById('product-container')) {
        loadProductDetails();
        loadRelatedProducts();
    }
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
});