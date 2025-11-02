/**
 * ============================================
 * PRODUCT DETAIL PAGE - DYNAMIC FUNCTIONALITY
 * Loads and displays individual product details
 * ============================================
 */

// Product Database - Embedded (in case products.js doesn't load)
const productsDataBackup = [
    // Snacks (15)
    { id: 1, name: "Kilishi (Spicy Beef Jerky)", category: "snacks", price: 24.99, rating: 4.9, description: "Packed with bold, smoky Nigerian flavor.", emoji: "🥩" },
    { id: 2, name: "Donkwa", category: "snacks", price: 16.99, rating: 4.8, description: "Traditional Donkwa with a spicy-sweet taste.", emoji: "🍪" },
    { id: 3, name: "Kulikuli", category: "snacks", price: 14.99, rating: 4.7, description: "Crunchy groundnut snack, perfect blend.", emoji: "🥜" },
    { id: 4, name: "Danbunama", category: "snacks", price: 22.99, rating: 4.8, description: "Savory chicken flakes with Northern spices.", emoji: "🍗" },
    { id: 5, name: "Chin Chin", category: "snacks", price: 12.99, rating: 4.6, description: "Crispy fried dough snack with sweet crunch.", emoji: "🍘" },
    { id: 6, name: "Puff Puff Mix", category: "snacks", price: 11.99, rating: 4.5, description: "Ready-to-make Nigerian doughnut mix.", emoji: "🍩" },
    { id: 7, name: "Plantain Chips", category: "snacks", price: 13.99, rating: 4.7, description: "Crispy fried plantain slices.", emoji: "🍌" },
    { id: 8, name: "Coconut Candy", category: "snacks", price: 9.99, rating: 4.4, description: "Sweet chewy coconut treats.", emoji: "🥥" },
    { id: 9, name: "Akara Mix", category: "snacks", price: 15.99, rating: 4.6, description: "Bean cake mix for akara fritters.", emoji: "🫘" },
    { id: 10, name: "Boli Seasoning", category: "snacks", price: 8.99, rating: 4.3, description: "Perfect spice blend for roasted plantain.", emoji: "🌶️" },
    { id: 11, name: "Cashew Nuts", category: "snacks", price: 18.99, rating: 4.8, description: "Premium roasted cashews.", emoji: "🌰" },
    { id: 12, name: "Fried Meat Seasoning", category: "snacks", price: 10.99, rating: 4.5, description: "Special blend for fried meat.", emoji: "🧂" },
    { id: 13, name: "Ginger Candy", category: "snacks", price: 7.99, rating: 4.2, description: "Naturally spicy and sweet candy.", emoji: "🍬" },
    { id: 14, name: "Groundnut Paste", category: "snacks", price: 13.99, rating: 4.6, description: "Smooth peanut butter from groundnuts.", emoji: "🥜" },
    { id: 15, name: "Buns Mix", category: "snacks", price: 12.99, rating: 4.4, description: "Traditional Nigerian buns mix.", emoji: "🧁" },

    // Drinks (12)
    { id: 16, name: "Nutritious Aya Kunu", category: "drinks", price: 19.99, rating: 4.8, description: "Refreshing, nourishing drink.", emoji: "🥤" },
    { id: 17, name: "Zobo Drink", category: "drinks", price: 17.99, rating: 4.7, description: "Tangy hibiscus drink.", emoji: "🍹" },
    { id: 18, name: "Fura da Nono Mix", category: "drinks", price: 21.99, rating: 4.9, description: "Traditional millet and yogurt drink.", emoji: "🥛" },
    { id: 19, name: "Palm Wine Concentrate", category: "drinks", price: 24.99, rating: 4.6, description: "Authentic palm wine flavor.", emoji: "🍷" },
    { id: 20, name: "Tigernut Drink Mix", category: "drinks", price: 18.99, rating: 4.8, description: "Creamy, nutritious tiger nut beverage.", emoji: "🥤" },
    { id: 21, name: "Ginger Drink Mix", category: "drinks", price: 14.99, rating: 4.5, description: "Spicy, warming ginger beverage.", emoji: "🫚" },
    { id: 22, name: "Sobo Leaves (Dried)", category: "drinks", price: 12.99, rating: 4.7, description: "Premium dried hibiscus leaves.", emoji: "🌺" },
    { id: 23, name: "Chapman Mix", category: "drinks", price: 16.99, rating: 4.4, description: "Nigerian cocktail mix.", emoji: "🍹" },
    { id: 24, name: "Coconut Water Powder", category: "drinks", price: 19.99, rating: 4.6, description: "Natural coconut water powder.", emoji: "🥥" },
    { id: 25, name: "Baobab Drink Mix", category: "drinks", price: 22.99, rating: 4.8, description: "Vitamin C-rich baobab powder.", emoji: "🍊" },
    { id: 26, name: "Moringa Tea", category: "drinks", price: 15.99, rating: 4.7, description: "Organic moringa leaves for tea.", emoji: "🍵" },
    { id: 27, name: "Soy Milk Mix", category: "drinks", price: 13.99, rating: 4.5, description: "Protein-rich soy milk powder.", emoji: "🥛" },

    // Spices & Seasonings (8)
    { id: 28, name: "Yaji Spice", category: "spices", price: 11.99, rating: 4.9, description: "Traditional Yaji mix for suya lovers.", emoji: "🌶️" },
    { id: 29, name: "Curry Powder", category: "spices", price: 9.99, rating: 4.7, description: "Authentic Nigerian curry blend.", emoji: "🍛" },
    { id: 30, name: "Locust Beans (Iru)", category: "spices", price: 14.99, rating: 4.8, description: "Fermented locust beans for soups.", emoji: "🫘" },
    { id: 31, name: "Dried Crayfish", category: "spices", price: 16.99, rating: 4.9, description: "Ground Nigerian crayfish.", emoji: "🦐" },
    { id: 32, name: "Pepper Soup Spice", category: "spices", price: 12.99, rating: 4.8, description: "Perfect blend for pepper soup.", emoji: "🌶️" },
    { id: 33, name: "Ogbono (Ground)", category: "spices", price: 18.99, rating: 4.7, description: "Premium ground ogbono seeds.", emoji: "🌰" },
    { id: 34, name: "Thyme Leaves", category: "spices", price: 7.99, rating: 4.5, description: "Dried thyme leaves for cooking.", emoji: "🌿" },
    { id: 35, name: "Uda Spice", category: "spices", price: 13.99, rating: 4.6, description: "Negro pepper for pepper soup.", emoji: "🫚" },

    // Grains & Flours (8)
    { id: 36, name: "Garri Ijebu", category: "grains", price: 19.99, rating: 4.8, description: "Crisp, smooth, and perfect for soaking.", emoji: "🌾" },
    { id: 37, name: "Tuwo Shinkafa", category: "grains", price: 17.99, rating: 4.7, description: "Milled rice flour for swallow.", emoji: "🍚" },
    { id: 38, name: "Poundo Yam", category: "grains", price: 22.99, rating: 4.9, description: "Instant yam flour for pounded yam.", emoji: "🍠" },
    { id: 39, name: "Semovita", category: "grains", price: 16.99, rating: 4.6, description: "Semolina wheat for swallow.", emoji: "🌾" },
    { id: 40, name: "Wheat Meal", category: "grains", price: 15.99, rating: 4.5, description: "Whole wheat flour for meals.", emoji: "🌾" },
    { id: 41, name: "Eba (Cassava Flour)", category: "grains", price: 14.99, rating: 4.8, description: "Pure cassava flour for eba.", emoji: "🌱" },
    { id: 42, name: "Acha (Fonio)", category: "grains", price: 24.99, rating: 4.7, description: "Ancient Nigerian super grain.", emoji: "🌾" },
    { id: 43, name: "Millet Flour", category: "grains", price: 13.99, rating: 4.6, description: "Ground millet for fura and masa.", emoji: "🌾" },

    // Soups & Stews (7)
    { id: 44, name: "Egusi (Melon Seeds)", category: "soups", price: 21.99, rating: 4.9, description: "Ground egusi for traditional soup.", emoji: "🎃" },
    { id: 45, name: "Bitter Leaf (Dried)", category: "soups", price: 12.99, rating: 4.7, description: "Premium dried bitter leaf.", emoji: "🥬" },
    { id: 46, name: "Okra (Dried)", category: "soups", price: 11.99, rating: 4.6, description: "Dried okra for draw soup.", emoji: "🫛" },
    { id: 47, name: "Palm Oil", category: "soups", price: 19.99, rating: 4.8, description: "Pure red palm oil.", emoji: "🛢️" },
    { id: 48, name: "Stockfish", category: "soups", price: 28.99, rating: 4.9, description: "Premium dried stockfish.", emoji: "🐟" },
    { id: 49, name: "Dried Fish", category: "soups", price: 23.99, rating: 4.8, description: "Smoked dried fish for stews.", emoji: "🐟" },
    { id: 50, name: "Banga Spice", category: "soups", price: 15.99, rating: 4.7, description: "Palm fruit soup seasoning blend.", emoji: "🌴" },
];

// Get product ID from URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Current product data
let currentProduct = null;
let currentQuantity = 1;
let allProducts = [];

/**
 * Initialize Product Detail Page
 */
function initProductDetail() {
    console.log('Initializing product detail page...');
    
    // Get products from global API or use backup
    if (typeof AtinesworldProducts !== 'undefined' && AtinesworldProducts.getAllProducts) {
        console.log('Using products from AtinesworldProducts API');
        allProducts = AtinesworldProducts.getAllProducts();
    } else {
        console.log('Using backup products data');
        allProducts = productsDataBackup;
    }
    
    console.log('Total products loaded:', allProducts.length);
    
    const productId = getProductIdFromURL();
    console.log('Product ID from URL:', productId);
    
    if (!productId) {
        console.error('No product ID in URL');
        showError();
        return;
    }

    loadProductData(productId);
    initEventListeners();
    initTabs();
}

/**
 * Load Product Data
 */
function loadProductData(productId) {
    showLoading();

    // Find product in array
    currentProduct = allProducts.find(p => p.id === parseInt(productId));
    
    console.log('Found product:', currentProduct);

    if (!currentProduct) {
        setTimeout(() => {
            showError();
        }, 500);
        return;
    }

    setTimeout(() => {
        renderProductDetail();
        loadRelatedProducts();
        hideLoading();
    }, 800);
}

/**
 * Render Product Detail
 */
function renderProductDetail() {
    if (!currentProduct) return;

    document.title = `${currentProduct.name} - Atinesworld`;
    updateBreadcrumb();
    updateProductInfo();
    updateMetaTags();
    document.getElementById('productContent').style.display = 'block';
}

/**
 * Update Breadcrumb
 */
function updateBreadcrumb() {
    const categoryElement = document.getElementById('breadcrumbCategory');
    const productElement = document.getElementById('breadcrumbProduct');

    if (categoryElement) {
        const categoryName = currentProduct.category.charAt(0).toUpperCase() + currentProduct.category.slice(1);
        categoryElement.textContent = categoryName;
    }

    if (productElement) {
        productElement.textContent = currentProduct.name;
    }
}

/**
 * Update Product Information
 */
function updateProductInfo() {
    // Category tag
    const categoryTag = document.getElementById('categoryTag');
    if (categoryTag) {
        const categoryName = currentProduct.category.charAt(0).toUpperCase() + currentProduct.category.slice(1);
        categoryTag.textContent = categoryName;
    }

    // Product title
    const titleElement = document.getElementById('productTitle');
    if (titleElement) {
        titleElement.textContent = currentProduct.name;
    }

    // Product emoji/image
    const emojiElement = document.getElementById('productEmoji');
    if (emojiElement) {
        emojiElement.textContent = currentProduct.emoji;
    }

    // Rating
    const starsElement = document.getElementById('productStars');
    const ratingValueElement = document.getElementById('ratingValue');
    if (starsElement && ratingValueElement) {
        starsElement.textContent = getStarsHTML(currentProduct.rating);
        ratingValueElement.textContent = currentProduct.rating;
    }

    // Price
    const priceElement = document.getElementById('currentPrice');
    if (priceElement) {
        priceElement.setAttribute('data-base-price', currentProduct.price);
        
        // Use currency converter if available
        if (typeof AtinesworldProducts !== 'undefined' && AtinesworldProducts.formatPrice) {
            const currency = AtinesworldProducts.getCurrentCurrency();
            const convertedPrice = AtinesworldProducts.convertPrice(currentProduct.price, 'USD', currency);
            const formattedPrice = AtinesworldProducts.formatPrice(convertedPrice, currency);
            priceElement.textContent = formattedPrice;
        } else {
            priceElement.textContent = `$${currentProduct.price.toFixed(2)}`;
        }
    }

    // Description
    const descElement = document.getElementById('productDescription');
    if (descElement) {
        descElement.textContent = getExtendedDescription(currentProduct);
    }

    // Features
    updateFeatures();

    // SKU
    const skuElement = document.getElementById('productSKU');
    if (skuElement) {
        skuElement.textContent = `ATW-${String(currentProduct.id).padStart(3, '0')}`;
    }

    // Category (meta)
    const categoryElement = document.getElementById('productCategory');
    if (categoryElement) {
        const categoryName = currentProduct.category.charAt(0).toUpperCase() + currentProduct.category.slice(1);
        categoryElement.textContent = categoryName;
    }

    // Details tab content
    const detailsContent = document.getElementById('detailsContent');
    if (detailsContent) {
        detailsContent.textContent = getExtendedDescription(currentProduct);
    }
}

/**
 * Get Stars HTML based on rating
 */
function getStarsHTML(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '☆';
    stars += '☆'.repeat(emptyStars);
    
    return stars;
}

/**
 * Get Extended Description
 */
function getExtendedDescription(product) {
    const descriptions = {
        snacks: `${product.description} This authentic Nigerian snack is made from the finest ingredients, carefully selected and prepared to bring you the genuine taste of home. Perfect for sharing with family and friends or enjoying as a personal treat. Each pack is freshly prepared and sealed to maintain maximum freshness and flavor.`,
        drinks: `${product.description} This traditional Nigerian beverage is crafted using time-honored recipes passed down through generations. Made from natural ingredients with no artificial additives, it offers both great taste and nutritional benefits. Perfect for any occasion, from daily refreshment to special celebrations.`,
        spices: `${product.description} This essential Nigerian spice blend is expertly crafted to deliver authentic flavor to your dishes. Sourced from premium ingredients and ground to perfection, it transforms ordinary meals into extraordinary culinary experiences. A must-have in every Nigerian kitchen.`,
        grains: `${product.description} This premium Nigerian grain product is carefully processed to retain its natural nutrients and authentic taste. Perfect for preparing traditional Nigerian dishes, it offers versatility and quality in every serving. Sourced directly from trusted Nigerian farms.`,
        soups: `${product.description} This traditional Nigerian soup ingredient brings authentic flavor and nutrition to your meals. Carefully selected and processed to maintain its natural properties, it's an essential component for creating delicious, home-style Nigerian soups and stews.`
    };

    return descriptions[product.category] || product.description;
}

/**
 * Update Features List
 */
function updateFeatures() {
    const features = {
        snacks: [
            '✓ 100% Authentic Nigerian Snack',
            '✓ Made from Premium Ingredients',
            '✓ No Artificial Preservatives',
            '✓ Freshly Prepared & Sealed',
            '✓ Perfect for Sharing'
        ],
        drinks: [
            '✓ Traditional Nigerian Recipe',
            '✓ Natural Ingredients Only',
            '✓ Rich in Nutrients',
            '✓ Refreshing & Delicious',
            '✓ Easy to Prepare'
        ],
        spices: [
            '✓ Authentic Nigerian Blend',
            '✓ Premium Quality Spices',
            '✓ Expertly Ground',
            '✓ Enhances All Dishes',
            '✓ Long Shelf Life'
        ],
        grains: [
            '✓ 100% Natural Grain',
            '✓ Farm Fresh Quality',
            '✓ Rich in Nutrients',
            '✓ Versatile Usage',
            '✓ Traditional Processing'
        ],
        soups: [
            '✓ Essential Soup Ingredient',
            '✓ Authentic Nigerian Quality',
            '✓ Rich Flavor Profile',
            '✓ Natural & Pure',
            '✓ Easy to Use'
        ]
    };

    const featuresElement = document.getElementById('productFeatures');
    if (featuresElement && currentProduct) {
        const categoryFeatures = features[currentProduct.category] || features.snacks;
        featuresElement.innerHTML = categoryFeatures.map(feature => `<li>${feature}</li>`).join('');
    }
}

/**
 * Load Related Products
 */
function loadRelatedProducts() {
    if (!currentProduct) return;
    
    // Get products from same category, excluding current product
    const relatedProducts = allProducts
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);

    // If not enough from same category, add random products
    if (relatedProducts.length < 4) {
        const otherProducts = allProducts
            .filter(p => p.id !== currentProduct.id && !relatedProducts.includes(p))
            .slice(0, 4 - relatedProducts.length);
        relatedProducts.push(...otherProducts);
    }

    renderRelatedProducts(relatedProducts);
}

/**
 * Render Related Products
 */
function renderRelatedProducts(products) {
    const container = document.getElementById('relatedProductsGrid');
    if (!container) return;

    container.innerHTML = products.map(product => {
        let formattedPrice = `$${product.price.toFixed(2)}`;
        
        if (typeof AtinesworldProducts !== 'undefined' && AtinesworldProducts.formatPrice) {
            const currency = AtinesworldProducts.getCurrentCurrency();
            const convertedPrice = AtinesworldProducts.convertPrice(product.price, 'USD', currency);
            formattedPrice = AtinesworldProducts.formatPrice(convertedPrice, currency);
        }

        return `
            <div class="product-card">
                <div class="product-link" onclick="window.location.href='product-detail.html?id=${product.id}'" style="cursor: pointer;">
                    <div class="product-image">
                        ${product.emoji}
                        <span class="buy-now-btn">View Details</span>
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-footer">
                            <span class="product-price" data-base-price="${product.price}">${formattedPrice}</span>
                            <div class="product-rating">
                                <span class="star-icon">★</span>
                                <span class="rating-number">${product.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Initialize Event Listeners
 */
function initEventListeners() {
    // Quantity controls
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('quantity');

    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            if (currentQuantity > 1) {
                currentQuantity--;
                quantityInput.value = currentQuantity;
            }
        });
    }

    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            if (currentQuantity < 99) {
                currentQuantity++;
                quantityInput.value = currentQuantity;
            }
        });
    }

    // Add to cart button
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }

    // Wishlist button
    const wishlistBtn = document.getElementById('wishlistBtn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', toggleWishlist);
    }

    // Share button
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', shareProduct);
    }

    // Zoom button
    const zoomBtn = document.getElementById('zoomBtn');
    if (zoomBtn) {
        zoomBtn.addEventListener('click', zoomImage);
    }
}

/**
 * Initialize Tabs
 */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            button.classList.add('active');
            const targetPanel = document.getElementById(`tab-${targetTab}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

/**
 * Add to Cart
 */
function addToCart() {
    if (!currentProduct) return;

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item.id === currentProduct.id);

    if (existingItem) {
        existingItem.quantity += currentQuantity;
    } else {
        cart.push({
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            emoji: currentProduct.emoji,
            quantity: currentQuantity
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast('Product added to cart!');

    const btn = document.getElementById('addToCartBtn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 150);
}

/**
 * Toggle Wishlist
 */
function toggleWishlist() {
    const btn = document.getElementById('wishlistBtn');
    btn.classList.toggle('active');

    if (btn.classList.contains('active')) {
        showToast('Added to wishlist!');
        let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        if (!wishlist.includes(currentProduct.id)) {
            wishlist.push(currentProduct.id);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
    } else {
        showToast('Removed from wishlist');
        let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        wishlist = wishlist.filter(id => id !== currentProduct.id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
}

/**
 * Share Product
 */
function shareProduct() {
    const shareData = {
        title: currentProduct.name,
        text: `Check out ${currentProduct.name} on Atinesworld!`,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => showToast('Product shared!'))
            .catch(err => console.log('Error sharing:', err));
    } else {
        navigator.clipboard.writeText(window.location.href)
            .then(() => showToast('Link copied to clipboard!'))
            .catch(() => showToast('Unable to share'));
    }
}

/**
 * Zoom Image
 */
function zoomImage() {
    const emoji = document.getElementById('productEmoji');
    if (emoji) {
        emoji.style.transform = emoji.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
        emoji.style.transition = 'transform 0.3s ease';
    }
}

/**
 * Update Cart Count
 */
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

/**
 * Show Toast Notification
 */
function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const messageElement = toast.querySelector('.toast-message');
    
    if (messageElement) {
        messageElement.textContent = message;
    }

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/**
 * Show Loading State
 */
function showLoading() {
    document.getElementById('loadingState').style.display = 'block';
    document.getElementById('errorState').style.display = 'none';
    document.getElementById('productContent').style.display = 'none';
}

/**
 * Hide Loading State
 */
function hideLoading() {
    document.getElementById('loadingState').style.display = 'none';
}

/**
 * Show Error State
 */
function showError() {
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('errorState').style.display = 'block';
    document.getElementById('productContent').style.display = 'none';
}

/**
 * Update Meta Tags for SEO
 */
function updateMetaTags() {
    if (!currentProduct) return;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = `Buy ${currentProduct.name} - ${currentProduct.description} Authentic Nigerian products delivered worldwide.`;

    updateMetaTag('og:title', currentProduct.name);
    updateMetaTag('og:description', currentProduct.description);
    updateMetaTag('og:url', window.location.href);
    updateMetaTag('og:type', 'product');
}

/**
 * Helper: Update or Create Meta Tag
 */
function updateMetaTag(property, content) {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
    }
    tag.content = content;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductDetail);
} else {
    initProductDetail();
}

// Export functions for external use
window.ProductDetail = {
    getProductIdFromURL,
    addToCart,
    toggleWishlist,
    shareProduct
};