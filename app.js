// Tutto Cheese Company Redesign Core Application Script (Catalog Edition)
// All cheeses are handcrafted in Canada using premium DFO (Dairy Farmers of Ontario) milk.

// 1. Product Database — sourced directly from official Tutto Cheese Company catalog
const products = [

  // ── TUTTO CHEESE WHEELS ──────────────────────────────────────────────────
  {
    id: "capranese",
    name: "Capranese",
    brand: "Tutto Cheese",
    category: "tutto",
    packaging: "Wheel (3kg x 1) · Mini Wheel (800g x 4)",
    image: "assets/goat.png",
    origin: "Canada — DFO Goat Milk",
    texture: "Semi-soft, creamy",
    aging: "Aged 3–4 months",
    tastingNotes: "Milky, delicate, with a clean and subtly tangy finish.",
    pairings: "Sauvignon Blanc, light honey, fresh grapes, crusty bread",
    description: "A signature Tutto Cheese wheel handcrafted from 100% Canadian goat milk. Its smooth, white paste delivers a refined flavour profile that is both rich and pleasantly refreshing.",
    halal: false,
    badge: "Goat Milk"
  },
  {
    id: "capranero",
    name: "Capranero (Wax)",
    brand: "Tutto Cheese",
    category: "tutto",
    packaging: "Wheel (4kg x 1) · Wedges (200g x 12)",
    image: "assets/goat.png",
    origin: "Canada — DFO Goat Milk",
    texture: "Semi-hard, compact, wax-coated",
    aging: "Aged 5–6 months",
    tastingNotes: "Robust, earthy, with deep rustic notes and a lingering savory finish.",
    pairings: "Chianti, rosemary honey, dark chocolate, walnuts",
    description: "A bold aged goat cheese wheel sealed in protective wax. Handcrafted in Canada from DFO goat milk, it delivers a complex, rustic flavour profile that deepens with age.",
    halal: false,
    badge: "Goat Milk"
  },
  {
    id: "friulano",
    name: "Friulano",
    brand: "Tutto Cheese",
    category: "tutto",
    packaging: "Wheel (3.5kg x 1) · Wedges (200g x 12)",
    image: "assets/hard.png",
    origin: "Canada — DFO Milk",
    texture: "Semi-hard, dense, smooth",
    aging: "Aged 4–5 months",
    tastingNotes: "Hazelnut-like sweetness, mellow milk flavour, smooth and buttery.",
    pairings: "Merlot, roasted almonds, fresh grapes, warm baguettes",
    description: "A traditional Friulano-style wheel made from 100% Canadian DFO milk. Prized for its pale yellow paste and mild, nutty profile — slices perfectly alongside sweet jams or savory charcuterie.",
    halal: false,
    badge: null
  },
  {
    id: "old-fashioned-cheddar",
    name: "Old-Fashioned Cheddar",
    brand: "Tutto Cheese",
    category: "tutto",
    packaging: "Wheel (3.5kg x 1) · Wedges (200g x 12)",
    image: "assets/hard.png",
    origin: "Canada — DFO Milk",
    texture: "Hard, crumbly, flaky",
    aging: "Aged 18 months",
    tastingNotes: "Sharp acid bite, robust pasture notes, long satisfying savory finish.",
    pairings: "Dry cider, Cabernet Sauvignon, apple butter, sharp mustard",
    description: "A handcrafted, old-fashioned style cheddar wheel made in Canada from DFO milk. Long aging grants it a sharp bite and crumbly texture that cheddar connoisseurs adore.",
    halal: false,
    badge: null
  },
  {
    id: "asiago",
    name: "Asiago",
    brand: "Tutto Cheese",
    category: "tutto",
    packaging: "Wheel (3.5kg x 1) · Wedges (200g x 12)",
    image: "assets/hard.png",
    origin: "Canada — DFO Milk",
    texture: "Hard, crumbly, crystalline",
    aging: "Aged 9 months",
    tastingNotes: "Yeasty, nutty, and savory with pleasant tyrosine crystals.",
    pairings: "Nebbiolo, red onion jam, fresh figs, artisan crackers",
    description: "A Canadian-made Asiago-style wheel crafted from premium DFO milk. Long aging produces a crumbly, full-bodied character ideal for shaving over pasta or serving on a charcuterie board.",
    halal: false,
    badge: null
  },

  // ── TUTTO CHEESE — BLOCKS ──────────────────────────────────────────────
  {
    id: "cheddar",
    name: "Cheddar",
    brand: "Tutto Cheese",
    category: "tutto",
    packaging: "Block (2.25kg x 8) · Wedges (290g x 12)",
    image: "assets/hard.png",
    origin: "Canada — DFO Milk",
    texture: "Firm, smooth",
    aging: "Aged 12 months",
    tastingNotes: "Mellow, tangy, balanced, rich milk profile.",
    pairings: "Amber Ale, crispy crackers, honey-crisp apples",
    description: "A premium aged cheddar block handcrafted in Canada from DFO milk. Smooth enough for clean slicing and grating, yet with a mature, complex taste profile.",
    halal: false,
    badge: null
  },
  {
    id: "monterey-jack",
    name: "Monterey Jack",
    brand: "Tutto Cheese",
    category: "tutto",
    packaging: "Block (2.25kg x 8) · Wedges (290g x 12)",
    image: "assets/hard.png",
    origin: "Canada — DFO Milk",
    texture: "Semi-hard, elastic, smooth",
    aging: "Aged 3 months",
    tastingNotes: "Mild, creamy, delicate butter aromas, supreme meltability.",
    pairings: "Riesling, fresh melons, mild salami, pretzel rolls",
    description: "A premium Monterey Jack block handcrafted in Canada from DFO milk. Celebrated for its supreme meltability — mellow, buttery, and a culinary powerhouse for melting and grating.",
    halal: false,
    badge: null
  },
  {
    id: "caramelized-onion-cheddar",
    name: "Carmelized Onion Cheddar",
    brand: "Tutto Cheese",
    category: "tutto",
    packaging: "Block (2.25kg x 8) · Wedges (290g x 12)",
    image: "assets/hard.png",
    origin: "Canada — DFO Milk",
    texture: "Firm, smooth",
    aging: "Aged 8 months",
    tastingNotes: "Sweet-savory fusion, jammy caramelized onion, rich cheddar backbone.",
    pairings: "Brown Ale, warm toasts, walnuts, balsamic glaze",
    description: "A brilliant infusion of slow-caramelized sweet onions throughout a premium Canadian cheddar made from DFO milk. An irresistible sweet-savory tasting experience.",
    halal: false,
    badge: null
  },

  // ── TUTTO CHEESE — FRESH ───────────────────────────────────────────────
  {
    id: "ricotta",
    name: "Ricotta",
    brand: "Tutto Cheese",
    category: "tutto",
    packaging: "3kg x 1",
    image: "assets/soft.png",
    origin: "Canada — DFO Milk",
    texture: "Soft, fluffy, moist",
    aging: "Fresh (Unaged)",
    tastingNotes: "Delicate, sweet, milky, fresh whey aromas.",
    pairings: "Prosecco, fresh berries, local honey, fresh mint",
    description: "Made fresh using traditional artisan methods from 100% Canadian DFO milk. Fluffy, creamy, and mildly sweet — perfect for filled pastas, cannoli, or simply spread on warm toast with honey.",
    halal: false,
    badge: null
  },
  {
    id: "fior-di-crema-small",
    name: "Fior Di Crema Double Cream (25g)",
    brand: "Tutto Cheese",
    category: "tutto",
    packaging: "Small (3kg x 1)",
    image: "assets/soft.png",
    origin: "Canada — DFO Milk",
    texture: "Ultra-creamy, spreadable",
    aging: "Fresh (Unaged)",
    tastingNotes: "Rich double cream, buttery fat notes, light lactic tang.",
    pairings: "Champagne, fresh strawberries, warm brioche, fruit compotes",
    description: "A single-serving portion of our signature double-cream spread, handcrafted in Canada from DFO milk. Velvety smooth and intensely rich — behaves like clotted cream or mascarpone.",
    halal: false,
    badge: "Double Cream"
  },
  {
    id: "fior-di-crema-large",
    name: "Fior Di Crema Double Cream (200g)",
    brand: "Tutto Cheese",
    category: "tutto",
    packaging: "Large (3kg x 1)",
    image: "assets/soft.png",
    origin: "Canada — DFO Milk",
    texture: "Ultra-creamy, spreadable",
    aging: "Fresh (Unaged)",
    tastingNotes: "Luxuriant sweet cream, decadent and buttery, delicate clean finish.",
    pairings: "Dessert wines, high-quality fruit compotes, fresh pastries",
    description: "Our premium double-cream spread in a larger container, made in Canada from DFO milk. Ideal for desserts, rich sauces, and upscale continental breakfast trays.",
    halal: false,
    badge: "Double Cream"
  },

  // ── EL SEÑOR QUESERO ──────────────────────────────────────────────────
  {
    id: "esq-oaxaca",
    name: "Oaxaca",
    brand: "El Señor Quesero",
    category: "el-senor",
    packaging: "190g x 18",
    image: "assets/soft.png",
    origin: "Canada — DFO Milk",
    texture: "Stringy, moist, stretchy",
    aging: "Fresh (Unaged)",
    tastingNotes: "Mild, buttery, creamy with a slight tang and fresh milky finish.",
    pairings: "Black beans, fresh tortillas, salsa verde, grilled meats",
    description: "A traditional Oaxacan-style string cheese made in Canada from 100% DFO milk. Its unique rope-like texture melts beautifully and is ideal for quesadillas, tlayudas, and cheese dips.",
    halal: false,
    badge: null
  },
  {
    id: "esq-queso-fresco",
    name: "Queso Fresco",
    brand: "El Señor Quesero",
    category: "el-senor",
    packaging: "270g x 12",
    image: "assets/soft.png",
    origin: "Canada — DFO Milk",
    texture: "Soft, crumbly, moist",
    aging: "Fresh (Unaged)",
    tastingNotes: "Mild, clean, fresh milk, lightly tangy and subtly salty.",
    pairings: "Enchiladas, tacos, fresh salads, refried beans",
    description: "A classic Latin-style fresh cheese made in Canada from DFO milk. Crumbles easily over dishes, making it the perfect finishing cheese for authentic Mexican and Latin cuisine.",
    halal: false,
    badge: null
  },
  {
    id: "esq-queso-cotija",
    name: "Queso Cotija",
    brand: "El Señor Quesero",
    category: "el-senor",
    packaging: "330g x 12",
    image: "assets/hard.png",
    origin: "Canada — DFO Milk",
    texture: "Firm, dry, crumbly",
    aging: "Aged",
    tastingNotes: "Sharp, salty, tangy with a pronounced dry and crumbly paste.",
    pairings: "Mexican street corn (elote), tacos, soups, salads",
    description: "A firm, aged crumbling cheese modelled after traditional Cotija, made in Canada from DFO milk. Its sharp salty character is the iconic finishing touch on countless Mexican dishes.",
    halal: false,
    badge: null
  },
  {
    id: "esq-queso-majado",
    name: "Queso Majado",
    brand: "El Señor Quesero",
    category: "el-senor",
    packaging: "330g x 12",
    image: "assets/soft.png",
    origin: "Canada — DFO Milk",
    texture: "Semi-firm, smooth",
    aging: "Fresh–Aged",
    tastingNotes: "Mild, creamy, slightly earthy with a smooth and pliable texture.",
    pairings: "Tamales, pupusas, fried plantains, black bean soup",
    description: "A versatile Latin-style cheese made in Canada from DFO milk. Majado's smooth, pliable body makes it perfect for both melting and crumbling across traditional Central American dishes.",
    halal: false,
    badge: null
  },

  // ── TAAZA ─────────────────────────────────────────────────────────────
  {
    id: "taaza-paneer",
    name: "Paneer",
    brand: "Taaza",
    category: "taaza",
    packaging: "Block (2.25kg x 8) · Wedge (330g x 12)",
    image: "assets/soft.png",
    origin: "Canada — DFO Milk",
    texture: "Firm, dense, non-melting",
    aging: "Fresh (Unaged)",
    tastingNotes: "Mild, clean, fresh milk — a neutral base that absorbs spices beautifully.",
    pairings: "Palak paneer, tikka masala, butter sauces, grilled with spices",
    description: "Premium Taaza Paneer made in Canada from 100% DFO milk. Firm, fresh, and certified Halal — the essential cheese for South Asian and Middle Eastern cooking. Holds its shape perfectly when cooked.",
    halal: true,
    badge: "Certified Halal"
  },

  // ── TAZIJ ─────────────────────────────────────────────────────────────
  {
    id: "tazij-akawi",
    name: "Akawi",
    brand: "Tazij",
    category: "tazij",
    packaging: "400g x 12",
    image: "assets/soft.png",
    origin: "Canada — DFO Milk",
    texture: "Semi-soft, smooth, slightly stretchy",
    aging: "Fresh (Unaged)",
    tastingNotes: "Mild, milky, lightly salty with a soft elastic texture.",
    pairings: "Knafeh, manakeesh, fattoush salad, honey drizzle",
    description: "A classic Middle Eastern white cheese made in Canada from DFO milk. Tazij Akawi is certified Halal and prized for its mild flavour and versatility in both sweet and savory Arabic dishes.",
    halal: true,
    badge: "Certified Halal"
  },
  {
    id: "tazij-halloumi",
    name: "Halloumi",
    brand: "Tazij",
    category: "tazij",
    packaging: "300g x 12",
    image: "assets/hard.png",
    origin: "Canada — DFO Milk",
    texture: "Semi-hard, rubbery, squeaky when fresh",
    aging: "Brined",
    tastingNotes: "Salty, tangy, rich with a firm grillable texture and golden crust.",
    pairings: "Grilled vegetables, watermelon, mint, lemon, olive oil",
    description: "Tazij Halloumi is a certified Halal grilling cheese made in Canada from DFO milk. Its uniquely high melting point makes it perfect for pan-frying or grilling — developing a golden, savory crust.",
    halal: true,
    badge: "Certified Halal"
  }
];

// 2. Application State
let currentFilter = 'all';
let searchQuery = '';


// 3. UI Selectors
const DOM = {
  catalogGrid: document.getElementById('catalog-grid'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  searchInput: document.getElementById('search-input'),
  searchClear: document.getElementById('search-clear'),
  productModal: document.getElementById('product-modal'),
  closeProductModalBtn: document.getElementById('close-product-modal'),
  themeToggleBtn: document.getElementById('theme-toggle'),
  contactForm: document.getElementById('contact-form'),
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toast-message')
};

// Toast notification helper
function showToast(message, isSuccess = true) {
  if (!DOM.toast) return;
  DOM.toastMessage.textContent = message;
  DOM.toast.className = `fixed bottom-6 right-6 z-50 flex items-center px-4 py-3 rounded-lg shadow-xl border transition-all duration-300 transform translate-y-0 opacity-100 ${
    isSuccess 
      ? 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-300' 
      : 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950 dark:border-rose-800 dark:text-rose-300'
  }`;
  
  setTimeout(() => {
    DOM.toast.className = 'fixed bottom-6 right-6 z-50 flex items-center px-4 py-3 rounded-lg shadow-xl border transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-none';
  }, 4000);
}

// 4. Product Catalog Rendering
function renderProducts() {
  if (!DOM.catalogGrid) return;
  
  const filtered = products.filter(product => {
    const matchesCategory = currentFilter === 'all' || product.category === currentFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (product.tastingNotes && product.tastingNotes.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    DOM.catalogGrid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <svg class="mx-auto h-12 w-12 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="mt-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">No products found</h3>
        <p class="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Try adjusting your filters or search keywords.</p>
      </div>
    `;
    return;
  }

  DOM.catalogGrid.innerHTML = filtered.map((product, index) => {
    // Brand label shown in the card chip
    const brandLabels = {
      'tutto': 'Tutto Cheese',
      'el-senor': 'El Señor Quesero',
      'taaza': 'Taaza',
      'tazij': 'Tazij'
    };
    const displayBrand = product.brand || brandLabels[product.category] || 'Tutto Cheese';

    const cardBorderColor = product.halal
      ? 'hover:border-emerald-500 dark:hover:border-emerald-400'
      : 'hover:border-amber-500 dark:hover:border-amber-400';

    const halalBadge = product.halal
      ? `<span class="absolute top-3 right-3 bg-emerald-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow">Halal ✓</span>`
      : '';

    const subBadge = product.badge && !product.halal
      ? `<span class="absolute top-3 right-3 bg-amber-500/90 text-zinc-950 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow">${product.badge}</span>`
      : '';

    return `
      <div 
        onclick="openProductModal('${product.id}')"
        class="group glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 transform flex flex-col h-full border ${cardBorderColor} cursor-pointer scroll-animate" 
        style="animation-delay: ${index * 40}ms"
      >
        <div class="relative overflow-hidden aspect-[4/3] bg-zinc-100 dark:bg-zinc-800">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span class="text-white text-sm font-medium flex items-center gap-1">
              View Details 
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </div>
          <span class="absolute top-3 left-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-zinc-800 dark:text-zinc-200 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            ${displayBrand}
          </span>
          ${halalBadge}${subBadge}
        </div>
        
        <div class="p-5 flex flex-col flex-grow">
          <div class="flex-grow">
            <span class="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 block mb-1 uppercase tracking-wider">${product.origin}</span>
            <h3 class="text-base font-bold text-zinc-950 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
              ${product.name}
            </h3>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-2 line-clamp-2 font-light">
              ${product.tastingNotes || product.description}
            </p>
          </div>
          
          <div class="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
            <div>
              <span class="text-[10px] text-zinc-400 dark:text-zinc-500 block">Packaging</span>
              <span class="text-sm font-bold text-zinc-900 dark:text-white">${product.packaging}</span>
            </div>
            <span class="text-xs font-semibold text-amber-600 dark:text-amber-450 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Details
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Handle scroll-based entrance transitions
  const animateElements = document.querySelectorAll('.scroll-animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(el => observer.observe(el));
}

// 5. Product Detail Modal Operations
let activeModalProductId = null;

function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || !DOM.productModal) return;

  activeModalProductId = productId;
  
  // Fill Modal Contents
  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-img').src = product.image;
  document.getElementById('modal-origin').textContent = product.origin;
  document.getElementById('modal-texture').textContent = product.texture;
  document.getElementById('modal-aging').textContent = product.aging;
  document.getElementById('modal-packaging').textContent = product.packaging;
  document.getElementById('modal-desc').textContent = product.description;
  document.getElementById('modal-notes').textContent = product.tastingNotes || "N/A";
  document.getElementById('modal-pairings').textContent = product.pairings || "N/A";
  
  // Category / brand tag in modal header
  const modalCat = document.getElementById('modal-cat');
  const brandLabels = {
    'tutto': 'Tutto Cheese',
    'el-senor': 'El Señor Quesero',
    'taaza': 'Taaza',
    'tazij': 'Tazij'
  };
  modalCat.textContent = product.brand || brandLabels[product.category] || product.category;
  if (product.halal) {
    modalCat.textContent += ' · Certified Halal ✓';
    modalCat.className = 'px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-extrabold text-[10px] uppercase tracking-widest';
  } else {
    modalCat.className = 'px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 font-extrabold text-[10px] uppercase tracking-widest';
  }

  // Toggle visible class
  DOM.productModal.classList.remove('opacity-0', 'pointer-events-none');
  DOM.productModal.querySelector('.modal-container').classList.remove('scale-95', 'translate-y-4');
  DOM.productModal.querySelector('.modal-container').classList.add('scale-100', 'translate-y-0');
  document.body.classList.add('overflow-hidden');
}

function closeProductModal() {
  if (!DOM.productModal) return;
  DOM.productModal.classList.add('opacity-0', 'pointer-events-none');
  DOM.productModal.querySelector('.modal-container').classList.remove('scale-100', 'translate-y-0');
  DOM.productModal.querySelector('.modal-container').classList.add('scale-95', 'translate-y-4');
  document.body.classList.remove('overflow-hidden');
  activeModalProductId = null;
}

// Wholesale Inquiry scroll-to and autofill
function inquireProduct() {
  if (!activeModalProductId) return;
  const product = products.find(p => p.id === activeModalProductId);
  if (!product) return;

  closeProductModal();

  // Scroll to contact form
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Pre-fill form
  const messageField = document.getElementById('contact-message');
  if (messageField) {
    messageField.value = `Hello, I am a distributor/retailer interested in listing and obtaining pricing details for "${product.name}" (${product.packaging}, Origin: ${product.origin}). Please send wholesale specification sheets and pricing sheets.`;
    
    // Focus after scroll completes
    setTimeout(() => {
      messageField.focus();
    }, 850);
  }
}

// 6. Dark/Light Theme Switching
function initTheme() {
  const stored = localStorage.getItem('tutto_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (stored === 'dark' || (!stored && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
    updateThemeToggleUI(true);
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeToggleUI(false);
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('tutto_theme', isDark ? 'dark' : 'light');
  updateThemeToggleUI(isDark);
  showToast(`Switched to ${isDark ? 'Dark Mode' : 'Light Mode'}.`);
}

function updateThemeToggleUI(isDark) {
  if (!DOM.themeToggleBtn) return;
  
  if (isDark) {
    DOM.themeToggleBtn.innerHTML = `
      <svg class="w-5 h-5 text-amber-400 transition-transform duration-500 hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728A9 9 0 115.636 5.636a9 9 0 0012.728 12.728z" />
      </svg>
    `;
  } else {
    DOM.themeToggleBtn.innerHTML = `
      <svg class="w-5 h-5 text-zinc-700 transition-transform duration-500 hover:-rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    `;
  }
}

// 7. Initial Event Listeners
function setupEventListeners() {
  // Category tabs click
  DOM.filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.filterButtons.forEach(b => b.classList.remove('bg-amber-500', 'text-zinc-950', 'bg-white', 'text-zinc-700', 'dark:bg-zinc-900', 'dark:text-zinc-300'));
      DOM.filterButtons.forEach(b => b.classList.add('bg-white', 'text-zinc-700', 'dark:bg-zinc-900', 'dark:text-zinc-300'));
      
      btn.classList.remove('bg-white', 'text-zinc-700', 'dark:bg-zinc-900', 'dark:text-zinc-300');
      btn.classList.add('bg-amber-500', 'text-zinc-950');

      currentFilter = btn.dataset.filter;
      renderProducts();
    });
  });

  // Search input events
  if (DOM.searchInput) {
    DOM.searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchQuery.trim().length > 0) {
        DOM.searchClear.classList.remove('hidden');
      } else {
        DOM.searchClear.classList.add('hidden');
      }
      renderProducts();
    });
    
    DOM.searchClear.addEventListener('click', () => {
      DOM.searchInput.value = '';
      searchQuery = '';
      DOM.searchClear.classList.add('hidden');
      renderProducts();
    });
  }

  // Product detail modal triggers
  if (DOM.closeProductModalBtn) DOM.closeProductModalBtn.addEventListener('click', closeProductModal);
  if (DOM.productModal) {
    DOM.productModal.addEventListener('click', (e) => {
      if (e.target === DOM.productModal) closeProductModal();
    });
  }

  // Details modal "Inquire Product" trigger
  const modalInquireBtn = document.getElementById('modal-inquire-btn');
  if (modalInquireBtn) {
    modalInquireBtn.addEventListener('click', inquireProduct);
  }

  // Theme toggle button
  if (DOM.themeToggleBtn) DOM.themeToggleBtn.addEventListener('click', toggleTheme);

  // Contact form submit trigger
  if (DOM.contactForm) {
    DOM.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = DOM.contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-950 inline" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> Sending inquiry...
      `;
      
      setTimeout(() => {
        showToast("Distributor inquiry submitted! Our sales desk will email you catalog sheets.");
        DOM.contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1500);
    });
  }

  // Intersection observer for general section fading
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.scroll-animate').forEach(el => sectionObserver.observe(el));
}

// Global modal triggers bound on window for inline event attributes
window.openProductModal = openProductModal;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupEventListeners();
  renderProducts();
});
