// Data
const productsData = {
  "products": [
    {
      "id": 1,
      "name": "純棉質造型襯衫外套",
      "price": 3237,
      "originalPrice": 3800,
      "category": "上衣",
      "color": "藍色",
      "sizes": ["M", "L", "XL"],
      "image": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
      "images": [
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=500&fit=crop"
      ],
      "material": "100% 純棉",
      "description": "翻領排釦設計，百搭實穿",
      "isNew": true,
      "isHot": false
    },
    {
      "id": 2,
      "name": "苧麻造型襯衫上衣",
      "price": 3984,
      "originalPrice": 4200,
      "category": "上衣",
      "color": "粉色",
      "sizes": ["S", "M", "L"],
      "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      "images": [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop"
      ],
      "material": "苧麻混紡",
      "description": "翻領排釦，滿版春季印花",
      "isNew": true,
      "isHot": true
    },
    {
      "id": 3,
      "name": "造型雪紡上衣",
      "price": 3503,
      "originalPrice": 3800,
      "category": "上衣",
      "color": "粉色",
      "sizes": ["M", "L"],
      "image": "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop",
      "images": [
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=400&h=500&fit=crop"
      ],
      "material": "雪紡",
      "description": "波浪蝴蝶結珠鑽裝飾領",
      "isNew": false,
      "isHot": true
    },
    {
      "id": 4,
      "name": "垂墜造型寬褲",
      "price": 3503,
      "originalPrice": 3900,
      "category": "褲子",
      "color": "黑色",
      "sizes": ["S", "M", "L", "XL"],
      "image": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
      "images": [
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1506629905607-45d90b773927?w=400&h=500&fit=crop"
      ],
      "material": "聚酯纖維",
      "description": "前釦拉鍊後鬆緊，簡約素面百搭",
      "isNew": false,
      "isHot": true
    },
    {
      "id": 5,
      "name": "嫘縈休閒七分長褲",
      "price": 3423,
      "originalPrice": 3700,
      "category": "褲子",
      "color": "白色",
      "sizes": ["M", "L", "XL"],
      "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      "images": [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop"
      ],
      "material": "嫘縈",
      "description": "前釦拉鍊後鬆緊，口袋飾品裝飾",
      "isNew": true,
      "isHot": false
    },
    {
      "id": 6,
      "name": "棉麻混紡造型上衣",
      "price": 1940,
      "originalPrice": 2200,
      "category": "上衣",
      "color": "條紋",
      "sizes": ["S", "M", "L"],
      "image": "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop",
      "images": [
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=400&h=500&fit=crop"
      ],
      "material": "棉麻混紡",
      "description": "貓咪刺繡裝飾，條紋拼接反摺袖",
      "isNew": false,
      "isHot": true
    }
  ],
  "lookbook": [
    {
      "id": 1,
      "title": "夏日約會穿搭",
      "image": "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop",
      "items": [
        {"productId": 2, "x": 30, "y": 40},
        {"productId": 4, "x": 35, "y": 70}
      ]
    },
    {
      "id": 2,
      "title": "辦公室女郎",
      "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
      "items": [
        {"productId": 1, "x": 40, "y": 35},
        {"productId": 5, "x": 45, "y": 65}
      ]
    },
    {
      "id": 3,
      "title": "休閒週末",
      "image": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=800&fit=crop",
      "items": [
        {"productId": 6, "x": 35, "y": 45},
        {"productId": 4, "x": 40, "y": 75}
      ]
    }
  ]
};

// Global state
let cart = [];
let currentQuizStep = 0;
let quizAnswers = [];
let selectedSize = '';

// DOM Elements
const heroSlider = document.querySelector('.hero__slider');
const heroNavBtns = document.querySelectorAll('.hero__nav-btn');
const productModal = document.getElementById('product-modal');
const cartModal = document.getElementById('cart-modal');
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
const newProductsGrid = document.getElementById('new-products-grid');
const hotProductsGrid = document.getElementById('hot-products-grid');
const productsGrid = document.getElementById('products-grid');
const lookbookGrid = document.getElementById('lookbook-grid');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Application initializing...');
  initHeroSlider();
  initProducts();
  initLookbook();
  initQuiz();
  initNavigation();
  initModals();
  initFilters();
  initMusicPlayer();
  updateCartUI();
  console.log('Application initialized');
});

// Music Player
function initMusicPlayer() {
    const musicBtn = document.getElementById('music-btn');
    const audioPlayer = document.getElementById('bg-music');
    const playlist = ['01.mp3', '02.mp3'];
    let currentTrackIndex = 0;
    let hasUserInteracted = false;

    function playMusic() {
        if (!audioPlayer) return;
        audioPlayer.src = playlist[currentTrackIndex];
        const playPromise = audioPlayer.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                if (musicBtn) musicBtn.textContent = '⏸️';
            }).catch(error => {
                console.log("Autoplay was prevented by browser.");
                if (musicBtn) musicBtn.textContent = '▶️';
            });
        }
    }

    function playNext() {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        playMusic();
    }

    function togglePlay() {
        if (!hasUserInteracted) {
             hasUserInteracted = true;
             playMusic();
             return;
        }

        if (audioPlayer.paused) {
            const playPromise = audioPlayer.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    if (musicBtn) musicBtn.textContent = '⏸️';
                }).catch(() => {
                    if (musicBtn) musicBtn.textContent = '▶️';
                });
            }
        } else {
            audioPlayer.pause();
            if (musicBtn) musicBtn.textContent = '▶️';
        }
    }

    // Start music on first user interaction to comply with browser policies
    function initialPlay() {
        if (!hasUserInteracted) {
            hasUserInteracted = true;
            playMusic();
            document.body.removeEventListener('click', initialPlay, true);
            document.body.removeEventListener('keydown', initialPlay, true);
        }
    }

    document.body.addEventListener('click', initialPlay, true);
    document.body.addEventListener('keydown', initialPlay, true);

    if (audioPlayer) {
        audioPlayer.addEventListener('ended', playNext);
    }
    if (musicBtn) {
        musicBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the body click listener from firing again
            togglePlay();
        });
    }
}


// Hero Slider
function initHeroSlider() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero__slide');
  const totalSlides = slides.length;

  if (totalSlides === 0) return;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    heroNavBtns.forEach(btn => btn.classList.remove('active'));
    
    slides[index].classList.add('active');
    if (heroNavBtns[index]) {
      heroNavBtns[index].classList.add('active');
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  // Auto-advance slides
  setInterval(nextSlide, 5000);

  // Manual navigation
  heroNavBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });
}

// Products
function initProducts() {
  renderNewProducts();
  renderHotProducts();
  renderAllProducts();
}

function createProductCard(product) {
  const discount = product.originalPrice > product.price ? 
    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return `
    <div class="product-card" data-product-id="${product.id}" onclick="showProductModal(${product.id})">
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.name}" class="primary-image" loading="lazy" 
             onerror="this.src='https://via.placeholder.com/400x500?text=圖片載入中'">
        ${product.images.length > 1 ? 
          `<img src="${product.images[1]}" alt="${product.name}" class="secondary-image" loading="lazy"
               onerror="this.style.display='none'">` : ''}
        <div class="product-card__badges">
          ${product.isNew ? '<span class="product-badge product-badge--new">新品</span>' : ''}
          ${product.isHot ? '<span class="product-badge product-badge--hot">熱銷</span>' : ''}
        </div>
        <button class="btn btn--primary btn--sm quick-add-btn" onclick="event.stopPropagation(); quickAddToCart(${product.id})">
          快速加入
        </button>
      </div>
      <div class="product-card__content">
        <h3 class="product-card__title">${product.name}</h3>
        <p class="product-card__description">${product.description}</p>
        <div class="product-card__price">
          <span class="price">$${product.price.toLocaleString()}</span>
          ${product.originalPrice > product.price ? 
            `<span class="price price--original">$${product.originalPrice.toLocaleString()}</span>` : ''}
          ${discount > 0 ? `<span class="product-badge product-badge--hot">-${discount}%</span>` : ''}
        </div>
        <div class="product-card__meta">
          <span>材質: ${product.material}</span>
          <span>顏色: ${product.color}</span>
        </div>
      </div>
    </div>
  `;
}

function renderNewProducts() {
  const newProducts = productsData.products.filter(product => product.isNew).slice(0, 3);
  if (newProductsGrid) {
    newProductsGrid.innerHTML = newProducts.map(createProductCard).join('');
  }
}

function renderHotProducts() {
  const hotProducts = productsData.products.filter(product => product.isHot).slice(0, 3);
  if (hotProductsGrid) {
    hotProductsGrid.innerHTML = hotProducts.map(createProductCard).join('');
  }
}

function renderAllProducts(filteredProducts = null) {
  const products = filteredProducts || productsData.products;
  if (productsGrid) {
    productsGrid.innerHTML = products.map(createProductCard).join('');
  }
}

// Product Modal
function showProductModal(productId) {
  console.log('Opening product modal for product:', productId);
  const product = productsData.products.find(p => p.id === productId);
  if (!product) {
    console.error('Product not found:', productId);
    return;
  }

  const modalContent = `
    <div class="product-detail">
      <div class="product-detail__images">
        <img src="${product.image}" alt="${product.name}" class="product-detail__main-image" id="main-product-image"
             onerror="this.src='https://via.placeholder.com/400x400?text=圖片載入中'">
        <div class="product-detail__thumbnails">
          ${product.images.map((img, index) => 
            `<img src="${img}" alt="${product.name}" class="product-detail__thumbnail ${index === 0 ? 'active' : ''}" 
             onclick="changeMainImage('${img}', this)"
             onerror="this.style.display='none'">`
          ).join('')}
        </div>
      </div>
      <div class="product-detail__info">
        <h2>${product.name}</h2>
        <div class="product-detail__price">
          <span class="price" style="font-size: 1.5rem;">$${product.price.toLocaleString()}</span>
          ${product.originalPrice > product.price ? 
            `<span class="price price--original">$${product.originalPrice.toLocaleString()}</span>` : ''}
        </div>
        <p class="product-detail__description">${product.description}</p>
        <p><strong>材質:</strong> ${product.material}</p>
        <p><strong>顏色:</strong> ${product.color}</p>
        
        <div class="product-detail__options">
          <div class="option-group">
            <label>選擇尺寸:</label>
            <div class="size-options">
              ${product.sizes.map(size => 
                `<button class="size-option" onclick="selectSize(this, '${size}')">${size}</button>`
              ).join('')}
            </div>
          </div>
        </div>
        
        <div class="product-detail__actions">
          <button class="btn btn--primary add-to-cart-btn" onclick="addToCartFromModal(${product.id})">
            加入購物車
          </button>
          <button class="btn btn--outline" onclick="addToWishlist(${product.id})">
            加入收藏
          </button>
        </div>
      </div>
    </div>
  `;

  const productDetailElement = document.getElementById('product-detail');
  if (productDetailElement) {
    productDetailElement.innerHTML = modalContent;
    productModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

function changeMainImage(src, thumbnail) {
  const mainImage = document.getElementById('main-product-image');
  if (mainImage) {
    mainImage.src = src;
  }
  
  document.querySelectorAll('.product-detail__thumbnail').forEach(t => t.classList.remove('active'));
  thumbnail.classList.add('active');
}

function selectSize(button, size) {
  document.querySelectorAll('.size-option').forEach(b => b.classList.remove('selected'));
  button.classList.add('selected');
  selectedSize = size;
}

// Cart functionality
function quickAddToCart(productId) {
  console.log('Quick add to cart:', productId);
  const product = productsData.products.find(p => p.id === productId);
  if (!product) return;

  // Add with default size (first available)
  addToCart(product, product.sizes[0]);
  
  // Show feedback animation
  const event_target = event.target;
  const originalText = event_target.textContent;
  const originalBg = event_target.style.backgroundColor;
  
  event_target.textContent = '已加入!';
  event_target.style.backgroundColor = 'var(--color-success)';
  event_target.disabled = true;
  
  setTimeout(() => {
    event_target.textContent = originalText;
    event_target.style.backgroundColor = originalBg;
    event_target.disabled = false;
  }, 1500);
}

function addToCartFromModal(productId) {
  if (!selectedSize) {
    alert('請選擇尺寸');
    return;
  }

  const product = productsData.products.find(p => p.id === productId);
  
  addToCart(product, selectedSize);
  closeProductModal();
  
  // Show success message
  alert('商品已加入購物車！');
}

function addToCart(product, size, quantity = 1) {
  const existingItem = cart.find(item => 
    item.product.id === product.id && item.size === size
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      product,
      size,
      quantity
    });
  }

  updateCartUI();
  saveCart();
  console.log('Added to cart:', product.name, 'Size:', size);
}

function removeFromCart(productId, size) {
  cart = cart.filter(item => 
    !(item.product.id === productId && item.size === size)
  );
  updateCartUI();
  renderCartItems();
  saveCart();
}

function updateCartQuantity(productId, size, change) {
  const item = cart.find(item => 
    item.product.id === productId && item.size === size
  );
  
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId, size);
    } else {
      updateCartUI();
      renderCartItems();
      saveCart();
    }
  }
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) {
    cartCount.textContent = totalItems;
  }
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');

  if (!cartItemsContainer || !cartTotalElement) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">購物車是空的</p>';
    cartTotalElement.textContent = '0';
    return;
  }

  const cartHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.product.image}" alt="${item.product.name}" class="cart-item__image"
           onerror="this.src='https://via.placeholder.com/80x80?text=圖片'">
      <div class="cart-item__info">
        <div class="cart-item__name">${item.product.name}</div>
        <div class="cart-item__details">尺寸: ${item.size} | 顏色: ${item.product.color}</div>
        <div class="cart-item__price">$${item.product.price.toLocaleString()}</div>
      </div>
      <div class="cart-item__actions">
        <button class="quantity-btn" onclick="updateCartQuantity(${item.product.id}, '${item.size}', -1)">-</button>
        <span class="quantity-display">${item.quantity}</span>
        <button class="quantity-btn" onclick="updateCartQuantity(${item.product.id}, '${item.size}', 1)">+</button>
        <button class="remove-btn" onclick="removeFromCart(${item.product.id}, '${item.size}')">刪除</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  cartItemsContainer.innerHTML = cartHTML;
  cartTotalElement.textContent = total.toLocaleString();
}

function saveCart() {
  // In a real app, this would save to backend
  console.log('Cart saved:', cart);
}

// Lookbook
function initLookbook() {
  if (!lookbookGrid) return;
  
  const lookbookHTML = productsData.lookbook.map(item => `
    <div class="lookbook-item">
      <img src="${item.image}" alt="${item.title}" loading="lazy"
           onerror="this.src='https://via.placeholder.com/600x800?text=穿搭圖片'">
      <div class="lookbook-item__overlay">
        <h3 class="lookbook-item__title">${item.title}</h3>
      </div>
      ${item.items.map(hotspot => {
        const product = productsData.products.find(p => p.id === hotspot.productId);
        return `
          <div class="product-hotspot" style="left: ${hotspot.x}%; top: ${hotspot.y}%;" 
               onclick="showProductModal(${hotspot.productId})">
            <div class="hotspot-tooltip">${product ? product.name : ''}</div>
          </div>
        `;
      }).join('')}
    </div>
  `).join('');

  lookbookGrid.innerHTML = lookbookHTML;
}

// Style Quiz
function initQuiz() {
  const quizContent = document.getElementById('quiz-content');
  if (!quizContent) return;
  
  // Event listeners for quiz options
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('quiz-option')) {
      // Remove selection from other options in same question
      const question = e.target.closest('.quiz-question');
      question.querySelectorAll('.quiz-option').forEach(opt => 
        opt.classList.remove('selected')
      );
      
      // Select current option
      e.target.classList.add('selected');
      
      // Store answer
      const questionIndex = parseInt(question.dataset.question);
      quizAnswers[questionIndex] = e.target.dataset.value;
      
      // Move to next question after delay
      setTimeout(() => {
        nextQuizQuestion();
      }, 500);
    }
  });

  // Restart quiz
  const restartBtn = document.getElementById('quiz-restart');
  if (restartBtn) {
    restartBtn.addEventListener('click', restartQuiz);
  }
}

function nextQuizQuestion() {
  const questions = document.querySelectorAll('.quiz-question');
  const currentQuestion = questions[currentQuizStep];
  
  if (currentQuestion) {
    currentQuestion.classList.remove('active');
  }
  
  currentQuizStep++;
  
  if (currentQuizStep < questions.length) {
    questions[currentQuizStep].classList.add('active');
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  const resultElement = document.querySelector('.quiz-result');
  const recommendationElement = document.getElementById('quiz-recommendation');
  
  if (!resultElement || !recommendationElement) return;
  
  // Simple recommendation logic based on answers
  let recommendedProducts = [];
  
  if (quizAnswers.includes('office')) {
    recommendedProducts = productsData.products.filter(p => 
      p.category === '上衣' || (p.color === '黑色' || p.color === '白色')
    );
  } else if (quizAnswers.includes('casual')) {
    recommendedProducts = productsData.products.filter(p => 
      p.material.includes('棉') || p.description.includes('休閒')
    );
  } else {
    recommendedProducts = productsData.products.filter(p => p.isHot);
  }
  
  // Show top 2 recommendations
  const recommendations = recommendedProducts.slice(0, 2);
  
  const recommendationHTML = recommendations.map(product => `
    <div class="recommendation-item" onclick="showProductModal(${product.id})">
      <img src="${product.image}" alt="${product.name}"
           onerror="this.src='https://via.placeholder.com/80x80?text=商品圖片'">
      <div class="recommendation-item__info">
        <div class="recommendation-item__name">${product.name}</div>
        <div class="recommendation-item__price">$${product.price.toLocaleString()}</div>
      </div>
    </div>
  `).join('');
  
  recommendationElement.innerHTML = recommendationHTML;
  resultElement.classList.remove('hidden');
}

function restartQuiz() {
  currentQuizStep = 0;
  quizAnswers = [];
  
  const questions = document.querySelectorAll('.quiz-question');
  const resultElement = document.querySelector('.quiz-result');
  
  questions.forEach((q, index) => {
    q.classList.toggle('active', index === 0);
    q.querySelectorAll('.quiz-option').forEach(opt => 
      opt.classList.remove('selected')
    );
  });
  
  if (resultElement) {
    resultElement.classList.add('hidden');
  }
}

// Filters
function initFilters() {
  const categoryFilter = document.getElementById('category-filter');
  const colorFilter = document.getElementById('color-filter');
  const sortFilter = document.getElementById('sort-filter');

  [categoryFilter, colorFilter, sortFilter].forEach(filter => {
    if (filter) {
      filter.addEventListener('change', applyFilters);
    }
  });
}

function applyFilters() {
  const categoryFilter = document.getElementById('category-filter');
  const colorFilter = document.getElementById('color-filter');
  const sortFilter = document.getElementById('sort-filter');

  const categoryValue = categoryFilter ? categoryFilter.value : '';
  const colorValue = colorFilter ? colorFilter.value : '';
  const sortValue = sortFilter ? sortFilter.value : 'default';

  let filtered = productsData.products;

  // Apply category filter
  if (categoryValue) {
    filtered = filtered.filter(product => product.category === categoryValue);
  }

  // Apply color filter
  if (colorValue) {
    filtered = filtered.filter(product => product.color === colorValue);
  }

  // Apply sorting
  if (sortValue === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderAllProducts(filtered);
}

// Navigation
function initNavigation() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Category card navigation
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
      const category = this.dataset.category;
      
      // Set filter and scroll to products section
      const categoryFilter = document.getElementById('category-filter');
      if (categoryFilter) {
        categoryFilter.value = category;
        applyFilters();
      }
      
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Modal functionality
function initModals() {
  // Product modal events
  const modalClose = document.getElementById('modal-close');
  if (modalClose) {
    modalClose.addEventListener('click', closeProductModal);
  }

  const productModalBackdrop = document.querySelector('#product-modal .modal__backdrop');
  if (productModalBackdrop) {
    productModalBackdrop.addEventListener('click', closeProductModal);
  }

  // Cart modal events
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      renderCartItems();
      cartModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  const cartModalClose = document.getElementById('cart-modal-close');
  if (cartModalClose) {
    cartModalClose.addEventListener('click', closeCartModal);
  }

  const cartModalBackdrop = document.querySelector('#cart-modal .modal__backdrop');
  if (cartModalBackdrop) {
    cartModalBackdrop.addEventListener('click', closeCartModal);
  }

  // Checkout button
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('購物車是空的！');
        return;
      }
      alert('感謝您的購買！這是演示版本。');
      cart = [];
      updateCartUI();
      renderCartItems();
      closeCartModal();
    });
  }
}

function closeProductModal() {
  productModal.classList.add('hidden');
  document.body.style.overflow = '';
  selectedSize = '';
}

function closeCartModal() {
  cartModal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Wishlist functionality (placeholder)
function addToWishlist(productId) {
  alert('商品已加入收藏！這是演示功能。');
}

// View all buttons
const viewAllNewBtn = document.getElementById('view-all-new');
if (viewAllNewBtn) {
  viewAllNewBtn.addEventListener('click', function() {
    const categoryFilter = document.getElementById('category-filter');
    const colorFilter = document.getElementById('color-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    if (categoryFilter) categoryFilter.value = '';
    if (colorFilter) colorFilter.value = '';
    if (sortFilter) sortFilter.value = 'default';
    
    const newProducts = productsData.products.filter(product => product.isNew);
    renderAllProducts(newProducts);
    
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

const viewAllHotBtn = document.getElementById('view-all-hot');
if (viewAllHotBtn) {
  viewAllHotBtn.addEventListener('click', function() {
    const categoryFilter = document.getElementById('category-filter');
    const colorFilter = document.getElementById('color-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    if (categoryFilter) categoryFilter.value = '';
    if (colorFilter) colorFilter.value = '';
    if (sortFilter) sortFilter.value = 'default';
    
    const hotProducts = productsData.products.filter(product => product.isHot);
    renderAllProducts(hotProducts);
    
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

