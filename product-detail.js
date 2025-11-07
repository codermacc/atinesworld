/**
 * ============================================
 * ATINESWORLD - ADVANCED PRODUCT DETAIL PAGE
 * Modern E-commerce Functionality
 * ============================================
 */

// Product Database - Embedded
const productsDataBackup = [
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
    { id: 28, name: "Yaji Spice", category: "spices", price: 11.99, rating: 4.9, description: "Traditional Yaji mix for suya lovers.", emoji: "🌶️" },
    { id: 29, name: "Curry Powder", category: "spices", price: 9.99, rating: 4.7, description: "Authentic Nigerian curry blend.", emoji: "🍛" },
    { id: 30, name: "Locust Beans (Iru)", category: "spices", price: 14.99, rating: 4.8, description: "Fermented locust beans for soups.", emoji: "🫘" },
    { id: 31, name: "Dried Crayfish", category: "spices", price: 16.99, rating: 4.9, description: "Ground Nigerian crayfish.", emoji: "🦐" },
    { id: 32, name: "Pepper Soup Spice", category: "spices", price: 12.99, rating: 4.8, description: "Perfect blend for pepper soup.", emoji: "🌶️" },
    { id: 33, name: "Ogbono (Ground)", category: "spices", price: 18.99, rating: 4.7, description: "Premium ground ogbono seeds.", emoji: "🌰" },
    { id: 34, name: "Thyme Leaves", category: "spices", price: 7.99, rating: 4.5, description: "Dried thyme leaves for cooking.", emoji: "🌿" },
    { id: 35, name: "Uda Spice", category: "spices", price: 13.99, rating: 4.6, description: "Negro pepper for pepper soup.", emoji: "🫚" },
    { id: 36, name: "Garri Ijebu", category: "grains", price: 19.99, rating: 4.8, description: "Crisp, smooth, and perfect for soaking.", emoji: "🌾" },
    { id: 37, name: "Tuwo Shinkafa", category: "grains", price: 17.99, rating: 4.7, description: "Milled rice flour for swallow.", emoji: "🍚" },
    { id: 38, name: "Poundo Yam", category: "grains", price: 22.99, rating: 4.9, description: "Instant yam flour for pounded yam.", emoji: "🍠" },
    { id: 39, name: "Semovita", category: "grains", price: 16.99, rating: 4.6, description: "Semolina wheat for swallow.", emoji: "🌾" },
    { id: 40, name: "Wheat Meal", category: "grains", price: 15.99, rating: 4.5, description: "Whole wheat flour for meals.", emoji: "🌾" },
    { id: 41, name: "Eba (Cassava Flour)", category: "grains", price: 14.99, rating: 4.8, description: "Pure cassava flour for eba.", emoji: "🌱" },
    { id: 42, name: "Acha (Fonio)", category: "grains", price: 24.99, rating: 4.7, description: "Ancient Nigerian super grain.", emoji: "🌾" },
    { id: 43, name: "Millet Flour", category: "grains", price: 13.99, rating: 4.6, description: "Ground millet for fura and masa.", emoji: "🌾" },
    { id: 44, name: "Egusi (Melon Seeds)", category: "soups", price: 21.99, rating: 4.9, description: "Ground egusi for traditional soup.", emoji: "🎃" },
    { id: 45, name: "Bitter Leaf (Dried)", category: "soups", price: 12.99, rating: 4.7, description: "Premium dried bitter leaf.", emoji: "🥬" },
    { id: 46, name: "Okra (Dried)", category: "soups", price: 11.99, rating: 4.6, description: "Dried okra for draw soup.", emoji: "🫛" },
    { id: 47, name: "Palm Oil", category: "soups", price: 19.99, rating: 4.8, description: "Pure red palm oil.", emoji: "🛢️" },
    { id: 48, name: "Stockfish", category: "soups", price: 28.99, rating: 4.9, description: "Premium dried stockfish.", emoji: "🐟" },
    { id: 49, name: "Dried Fish", category: "soups", price: 23.99, rating: 4.8, description: "Smoked dried fish for stews.", emoji: "🐟" },
    { id: 50, name: "Banga Spice", category: "soups", price: 15.99, rating: 4.7, description: "Palm fruit soup seasoning blend.", emoji: "🌴" },
];

// State
let currentProduct = null;
let currentQuantity = 1;
let allProducts = [];
let cart = [];
let wishlist = [];
let recentlyViewed = [];
let compareList = [];

/**
 * Initialize Product Detail Page
 */
function initProductDetail() {
    console.log('Initializing advanced product detail page...');
    
    // Load data from localStorage
    loadFromStorage();
    
    // Get products
    if (typeof AtinesworldProducts !== 'undefined' && AtinesworldProducts.getAllProducts) {
        allProducts = AtinesworldProducts.getAllProducts();
    } else {
        allProducts = productsDataBackup;
    }
    
    const productId = getProductIdFromURL();
    if (!productId) {
        showError();
        return;
    }

    loadProductData(productId);
    initEventListeners();
    initTabs();
    initCurrencySelector();
    updateCartCount();
    updateWishlistCount();
    initBackToTop();
}

/**
 * Get product ID from URL
 */
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

/**
 * Load data from localStorage
 */
function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart') || '[]');
    wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    compareList = JSON.parse(localStorage.getItem('compareList') || '[]');
}

/**
 * Save data to localStorage
 */
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    localStorage.setItem('compareList', JSON.stringify(compareList));
}

/**
 * Load Product Data
 */
function loadProductData(productId) {
    showLoading();
    currentProduct = allProducts.find(p => p.id === parseInt(productId));
    
    if (!currentProduct) {
        setTimeout(showError, 500);
        return;
    }

    // Add to recently viewed
    addToRecentlyViewed(currentProduct.id);

    setTimeout(() => {
        renderProductDetail();
        loadRelatedProducts();
        loadRecentlyViewed();
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
    checkWishlistStatus();
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
        categoryElement.textContent = capitalizeFirst(currentProduct.category);
    }

    if (productElement) {
        productElement.textContent = currentProduct.name;
    }
}

/**
 * Update Product Information
 */
function updateProductInfo() {
    // Category
    updateElement('categoryTag', capitalizeFirst(currentProduct.category));
    
    // Title
    updateElement('productTitle', currentProduct.name);
    
    // Emoji
    updateElement('productEmoji', currentProduct.emoji);
    
    // Rating
    updateElement('productStars', getStarsHTML(currentProduct.rating));
    updateElement('ratingValue', currentProduct.rating);
    
    // Price
    const priceElement = document.getElementById('currentPrice');
    if (priceElement) {
        priceElement.setAttribute('data-base-price', currentProduct.price);
        updatePrice(priceElement, currentProduct.price);
    }
    
    // Description
    updateElement('productDescription', getExtendedDescription(currentProduct));
    updateElement('detailsContent', getExtendedDescription(currentProduct));
    
    // Features
    updateFeatures();
    
    // SKU
    updateElement('productSKU', `ATW-${String(currentProduct.id).padStart(3, '0')}`);
    
    // Category meta
    updateElement('productCategory', capitalizeFirst(currentProduct.category));
    
    // Tags
    updateElement('productTags', `Nigerian, Authentic, ${capitalizeFirst(currentProduct.category)}`);
}

/**
 * Update Price with Currency
 */
function updatePrice(element, basePrice) {
    if (typeof AtinesworldProducts !== 'undefined' && AtinesworldProducts.formatPrice) {
        const currency = AtinesworldProducts.getCurrentCurrency();
        const convertedPrice = AtinesworldProducts.convertPrice(basePrice, 'USD', currency);
        const formattedPrice = AtinesworldProducts.formatPrice(convertedPrice, currency);
        element.textContent = formattedPrice;
    } else {
        element.textContent = `$${basePrice.toFixed(2)}`;
    }
}

/**
 * Get Stars HTML
 */
function getStarsHTML(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '') + '☆'.repeat(emptyStars);
}

/**
 * Get Extended Description
 */
function getExtendedDescription(product) {
    const descriptions = {
        snacks: `${product.description} This authentic Nigerian snack is made from the finest ingredients, carefully selected and prepared to bring you the genuine taste of home.`,
        drinks: `${product.description} This traditional Nigerian beverage is crafted using time-honored recipes passed down through generations.`,
        spices: `${product.description} This essential Nigerian spice blend is expertly crafted to deliver authentic flavor to your dishes.`,
        grains: `${product.description} This premium Nigerian grain product is carefully processed to retain its natural nutrients and authentic taste.`,
        soups: `${product.description} This traditional Nigerian soup ingredient brings authentic flavor and nutrition to your meals.`
    };

    return descriptions[product.category] || product.description;
}

/**
 * Update Features
 */
function updateFeatures() {
    const features = {
        snacks: ['✓ 100% Authentic Nigerian Snack', '✓ Made from Premium Ingredients', '✓ No Artificial Preservatives', '✓ Freshly Prepared & Sealed', '✓ Perfect for Sharing'],
        drinks: ['✓ Traditional Nigerian Recipe', '✓ Natural Ingredients Only', '✓ Rich in Nutrients', '✓ Refreshing & Delicious', '✓ Easy to Prepare'],
        spices: ['✓ Authentic Nigerian Blend', '✓ Premium Quality Spices', '✓ Expertly Ground', '✓ Enhances All Dishes', '✓ Long Shelf Life'],
        grains: ['✓ 100% Natural Grain', '✓ Farm Fresh Quality', '✓ Rich in Nutrients', '✓ Versatile Usage', '✓ Traditional Processing'],
        soups: ['✓ Essential Soup Ingredient', '✓ Authentic Nigerian Quality', '✓ Rich Flavor Profile', '✓ Natural & Pure', '✓ Easy to Use']
    };

    const featuresElement = document.getElementById('productFeatures');
    if (featuresElement && currentProduct) {
        const categoryFeatures = features[currentProduct.category] || features.snacks;
        featuresElement.innerHTML = categoryFeatures.map(f => `<li>${f}</li>`).join('');
    }
}

/**
 * Initialize Event Listeners
 */
function initEventListeners() {
    // Quantity controls
    addListener('decreaseQty', 'click', decreaseQuantity);
    addListener('increaseQty', 'click', increaseQuantity);
    
    // Action buttons
    addListener('addToCartBtn', 'click', addToCart);
    addListener('buyNowBtn', 'click', buyNow);
    addListener('wishlistBtn', 'click', toggleWishlist);
    addListener('compareBtn', 'click', addToCompare);
    addListener('zoomBtn', 'click', zoomImage);
    
    // Social share
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', () => shareProduct(btn.dataset.platform));
    });
    
    addListener('copyLinkBtn', 'click', copyLink);
    
    // Navigation
    addListener('prevProduct', 'click', navigateToPrevProduct);
    addListener('nextProduct', 'click', navigateToNextProduct);
    
    // Modal
    addListener('closeModal', 'click', closeModal);
    addListener('continueShopping', 'click', closeModal);
}

/**
 * Initialize Tabs
 */
function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
            
            button.classList.add('active');
            const targetPanel = document.getElementById(`tab-${targetTab}`);
            if (targetPanel) targetPanel.classList.add('active');
        });
    });
}

/**
 * Initialize Currency Selector
 */
function initCurrencySelector() {
    const selector = document.getElementById('currencySelector');
    const dropdown = document.getElementById('currencyDropdown');
    
    if (!selector) return;

    selector.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        dropdown.classList.remove('active');
    });

    dropdown.addEventListener('click', (e) => e.stopPropagation());

    document.querySelectorAll('.currency-option').forEach(option => {
        option.addEventListener('click', () => {
            const currency = option.dataset.currency;
            if (typeof AtinesworldProducts !== 'undefined') {
                AtinesworldProducts.changeCurrency(currency);
            }
            dropdown.classList.remove('active');
            
            // Update all prices on page
            const priceElement = document.getElementById('currentPrice');
            if (priceElement) {
                const basePrice = parseFloat(priceElement.dataset.basePrice);
                updatePrice(priceElement, basePrice);
            }
        });
    });
}

/**
 * Quantity Controls
 */
function decreaseQuantity() {
    if (currentQuantity > 1) {
        currentQuantity--;
        document.getElementById('quantity').value = currentQuantity;
    }
}

function increaseQuantity() {
    if (currentQuantity < 99) {
        currentQuantity++;
        document.getElementById('quantity').value = currentQuantity;
    }
}

/**
 * Add to Cart
 */
function addToCart() {
    if (!currentProduct) return;

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

    saveToStorage();
    updateCartCount();
    showModal();
    showToast('Added to cart!', 'success');
    
    // Analytics event
    trackEvent('add_to_cart', { product_id: currentProduct.id, quantity: currentQuantity });
}

/**
 * Buy Now (Direct to Checkout)
 */
function buyNow() {
    if (!currentProduct) return;

    // Add to cart first
    addToCart();
    
    // Redirect to checkout
    setTimeout(() => {
        window.location.href = 'checkout.html';
    }, 500);
}

/**
 * Toggle Wishlist
 */
function toggleWishlist() {
    const btn = document.getElementById('wishlistBtn');
    const productId = currentProduct.id;
    
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
        btn.classList.remove('active');
        showToast('Removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        btn.classList.add('active');
        showToast('Added to wishlist!', 'success');
    }

    saveToStorage();
    updateWishlistCount();
    trackEvent('toggle_wishlist', { product_id: productId });
}

/**
 * Check if product is in wishlist
 */
function checkWishlistStatus() {
    const btn = document.getElementById('wishlistBtn');
    if (btn && wishlist.includes(currentProduct.id)) {
        btn.classList.add('active');
    }
}

/**
 * Add to Compare
 */
function addToCompare() {
    if (!currentProduct) return;

    if (compareList.length >= 4) {
        showToast('Maximum 4 products can be compared', 'warning');
        return;
    }

    if (compareList.includes(currentProduct.id)) {
        showToast('Product already in compare list', 'info');
        return;
    }

    compareList.push(currentProduct.id);
    saveToStorage();
    showToast('Added to compare list!', 'success');
    trackEvent('add_to_compare', { product_id: currentProduct.id });
}

/**
 * Share Product
 */
function shareProduct(platform) {
    const url = window.location.href;
    const text = `Check out ${currentProduct.name} on Atinesworld!`;
    
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    };

    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        trackEvent('share_product', { platform, product_id: currentProduct.id });
    }
}

/**
 * Copy Link
 */
function copyLink() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => showToast('Link copied to clipboard!', 'success'))
        .catch(() => showToast('Failed to copy link', 'error'));
}

/**
 * Zoom Image
 */
function zoomImage() {
    const emoji = document.getElementById('productEmoji');
    if (emoji) {
        const currentScale = emoji.style.transform;
        emoji.style.transform = currentScale === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
        emoji.style.transition = 'transform 0.3s ease';
    }
}

/**
 * Navigate to Previous/Next Product
 */
function navigateToPrevProduct() {
    const currentIndex = allProducts.findIndex(p => p.id === currentProduct.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : allProducts.length - 1;
    window.location.href = `product-detail.html?id=${allProducts[prevIndex].id}`;
}

function navigateToNextProduct() {
    const currentIndex = allProducts.findIndex(p => p.id === currentProduct.id);
    const nextIndex = currentIndex < allProducts.length - 1 ? currentIndex + 1 : 0;
    window.location.href = `product-detail.html?id=${allProducts[nextIndex].id}`;
}

/**
 * Add to Recently Viewed
 */
function addToRecentlyViewed(productId) {
    recentlyViewed = recentlyViewed.filter(id => id !== productId);
    recentlyViewed.unshift(productId);
    recentlyViewed = recentlyViewed.slice(0, 8);
    saveToStorage();
}

/**
 * Load Recently Viewed
 */
function loadRecentlyViewed() {
    if (recentlyViewed.length <= 1) return;

    const section = document.getElementById('recentlyViewedSection');
    const grid = document.getElementById('recentlyViewedGrid');
    
    if (!section || !grid) return;

    const viewedProducts = recentlyViewed
        .filter(id => id !== currentProduct.id)
        .slice(0, 4)
        .map(id => allProducts.find(p => p.id === id))
        .filter(p => p);

    if (viewedProducts.length > 0) {
        section.style.display = 'block';
        grid.innerHTML = viewedProducts.map(createProductCard).join('');
    }
}

/**
 * Load Related Products
 */
function loadRelatedProducts() {
    const relatedProducts = allProducts
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);

    if (relatedProducts.length < 4) {
        const otherProducts = allProducts
            .filter(p => p.id !== currentProduct.id && !relatedProducts.includes(p))
            .slice(0, 4 - relatedProducts.length);
        relatedProducts.push(...otherProducts);
    }

    const grid = document.getElementById('relatedProductsGrid');
    if (grid) {
        grid.innerHTML = relatedProducts.map(createProductCard).join('');
    }
}

/**
 * Create Product Card HTML
 */
function createProductCard(product) {
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
                        <span class="product-price">${formattedPrice}</span>
                        <div class="product-rating">
                            <span class="star-icon">★</span>
                            <span class="rating-number">${product.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Update Cart Count
 */
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countElement = document.getElementById('cartCount');
    if (countElement) {
        countElement.textContent = totalItems;
        countElement.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

/**
 * Update Wishlist Count
 */
function updateWishlistCount() {
    const countElement = document.getElementById('wishlistCount');
    if (countElement) {
        countElement.textContent = wishlist.length;
        countElement.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }
}

/**
 * Show Modal
 */
function showModal() {
    const modal = document.getElementById('quickAddModal');
    const productName = document.getElementById('modalProductName');
    
    if (modal && productName) {
        productName.textContent = currentProduct.name;
        modal.classList.add('show');
        
        setTimeout(() => {
            modal.classList.remove('show');
        }, 3000);
    }
}

/**
 * Close Modal
 */
function closeModal() {
    const modal = document.getElementById('quickAddModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

/**
 * Show Toast Notification
 */
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };

    toast.innerHTML = `
        <div class="toast-icon">${icons[type] || icons.success}</div>
        <div class="toast-message">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Initialize Back to Top Button
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
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
    updateMetaTag('product:price:amount', currentProduct.price);
    updateMetaTag('product:price:currency', 'USD');
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

/**
 * Track Events (Analytics placeholder)
 */
function trackEvent(eventName, data) {
    console.log('Analytics Event:', eventName, data);
    
    // Google Analytics integration
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, data);
    }
    
    // Facebook Pixel integration
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, data);
    }
}

/**
 * Utility Functions
 */
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function updateElement(id, content) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = content;
    }
}

function addListener(id, event, handler) {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener(event, handler);
    }
}

/**
 * Keyboard Navigation
 */
document.addEventListener('keydown', (e) => {
    // Arrow keys for product navigation
    if (e.key === 'ArrowLeft' && currentProduct) {
        navigateToPrevProduct();
    } else if (e.key === 'ArrowRight' && currentProduct) {
        navigateToNextProduct();
    }
    
    // ESC to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
});

/**
 * Lazy Loading Images (if real images are added)
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Price Alert (Future Feature)
 */
function setPriceAlert() {
    const email = prompt('Enter your email to get notified when price drops:');
    if (email && validateEmail(email)) {
        showToast('Price alert set! We\'ll notify you.', 'success');
        trackEvent('price_alert_set', { product_id: currentProduct.id, email });
    }
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Product Availability Notification
 */
function notifyWhenAvailable() {
    const email = prompt('Enter your email to get notified when available:');
    if (email && validateEmail(email)) {
        showToast('We\'ll notify you when it\'s back in stock!', 'success');
        trackEvent('notify_when_available', { product_id: currentProduct.id, email });
    }
}

/**
 * Quick View Related Product (Future Enhancement)
 */
function quickViewProduct(productId) {
    // Open quick view modal with product details
    console.log('Quick view:', productId);
}

/**
 * Initialize on DOM Ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductDetail);
} else {
    initProductDetail();
}

/**
 * Global API Exports
 */
window.ProductDetail = {
    getProductIdFromURL,
    addToCart,
    buyNow,
    toggleWishlist,
    shareProduct,
    navigateToPrevProduct,
    navigateToNextProduct,
    getCart: () => cart,
    getWishlist: () => wishlist,
    getCompareList: () => compareList
};

// Auto-save cart periodically (every 30 seconds)
setInterval(() => {
    if (cart.length > 0 || wishlist.length > 0) {
        saveToStorage();
    }
}, 30000);

// Warn before leaving if cart has items
window.addEventListener('beforeunload', (e) => {
    if (cart.length > 0) {
        e.preventDefault();
        e.returnValue = '';
    }
});