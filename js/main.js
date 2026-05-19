// FUTURE CRAFT - Global JavaScript
// Core Product Catalog
const PRODUCTS = [
  {
    id: "grid-charger",
    name: "Grid-01 GaN Charger",
    category: "Power",
    price: 6499,
    originalPrice: 7999,
    image: "../images/grid_charger.png",
    description: "A compact 140W multi-port GaN desktop charger with transparent aesthetics and industrial structural hardware.",
    specs: {
      "Output": "140W Max USB-C PD 3.1",
      "Ports": "3x USB-C, 1x USB-A",
      "Material": "Polycarbonate & Aluminum",
      "Weight": "290g",
      "Efficiency": "95% GaN Tech"
    },
    tag: "New Release",
    rating: 4.8,
    reviewsCount: 124,
    detailedDescription: "The Grid-01 reimagines power delivery. Engineered with state-of-the-art Gallium Nitride technology, it packages 140W of raw, efficient charging power into a pocket-sized form factor. The structural frame is CNC-machined from aerospace-grade aluminum, paired with a crystalline polycarbonate top shell that reveals the meticulously laid-out internal architecture. Features active temperature monitoring and intelligent power distribution across four ports, allowing you to charge your laptop, tablet, and accessories simultaneously at peak rates."
  },
  {
    id: "aether-lamp",
    name: "Aether Circadian Lamp",
    category: "Smart Home",
    price: 4999,
    originalPrice: 5999,
    image: "../images/aether_lamp.png",
    description: "An architectural circular lamp that projects dynamic ambient wavelengths matching the natural solar cycle.",
    specs: {
      "Spectrum": "2200K - 6500K Tunable",
      "Brightness": "850 Lumens Max",
      "Material": "Concrete & Sandblasted Glass",
      "Weight": "1200g",
      "Control": "Wi-Fi, Bluetooth & Touch dial"
    },
    tag: "Circadian Node",
    rating: 4.9,
    reviewsCount: 86,
    detailedDescription: "Harmonize your living space with the solar clock. The Aether Circadian Lamp features a sandblasted architectural ring that projects pure, soft illumination mimicking sunrise, midday sky, and sunset. Encased in a custom, raw concrete base with a heavy, premium feel, it features a textured brass touch dial for manual brightness and temperature control. Aether integrates with smart home environments to dynamically shift its spectrum throughout the day, improving your circadian rhythm, productivity, and sleep quality."
  },
  {
    id: "orbit-organizer",
    name: "Orbit Desk Organizer",
    category: "Desk Accessories",
    price: 3899,
    originalPrice: 4499,
    image: "../images/orbit_organizer.png",
    description: "Modular magnetic desk tray crafted from solid anodized aluminum with premium steel component blocks.",
    specs: {
      "Modularity": "6 Magnetic Blocks",
      "Base Dimensions": "360mm x 120mm x 15mm",
      "Material": "6061-T6 Anodized Aluminum",
      "Weight": "850g",
      "Finish": "Micro-sandblasted Matte"
    },
    tag: "Desk System",
    rating: 4.7,
    reviewsCount: 204,
    detailedDescription: "Designed for high-agency workspaces. The Orbit Desk System is carved out of a solid block of 6061-T6 aerospace aluminum. It is finished with micro-sandblasting and anodized in platinum grey, matching modern laptops and keyboards. The base contains high-force neodymium magnets that securely lock the modular compartments in place. Arrange your titanium writing tools, micro SD cards, cables, and mechanical components exactly how you want. Includes a heavy steel phone rest and a dedicated tray for paper clips and mechanical switches."
  },
  {
    id: "isotope-clock",
    name: "Isotope VFD Desktop Clock",
    category: "Smart Home",
    price: 8999,
    originalPrice: 9999,
    image: "../images/isotope_clock.png",
    description: "A precision time indicator built around rare vacuum fluorescent tubes in a heavy concrete housing.",
    specs: {
      "Display": "IV-11 Russian VFD Tubes",
      "Time Sync": "NTP via Wi-Fi",
      "Material": "Cast Concrete & Acrylic",
      "Weight": "1450g",
      "Accuracy": "± 0.5 seconds/year"
    },
    tag: "Limited Batch",
    rating: 5.0,
    reviewsCount: 37,
    detailedDescription: "Crafted for enthusiasts of mechanical and physical computing. The Isotope Clock utilizes authentic vintage IV-11 Vacuum Fluorescent Display tubes that glow in a mesmerizing, surgical warm green/orange light. The electronic assembly is housed inside a custom cast concrete block, creating a striking contrast between raw stone work and delicate glassware. Featuring built-in Wi-Fi, the clock automatically synchronizes time with atomic servers globally, guaranteeing absolute accuracy. The rear features exposed technical engraving and manual calibration keys."
  },
  {
    id: "lumina-keypad",
    name: "Lumina Mechanical Macropad",
    category: "Desk Accessories",
    price: 4899,
    originalPrice: 5499,
    image: "../images/orbit_organizer.png",
    description: "An 8-key mechanical macropad with custom rotary encoder knob and raw brass casing.",
    specs: {
      "Keys": "8x Hot-swappable MX Slots",
      "Dial": "Custom Rotary Brass Encoder",
      "Plate": "Solid Polished Brass",
      "Connection": "USB-C Custom Coiled",
      "Display": "OLED Dynamic Status Screen"
    },
    tag: "Operator Node",
    rating: 4.8,
    reviewsCount: 52,
    detailedDescription: "The Lumina Mechanical Macropad places direct custom control macros right under your operator fingertips. Features a heavy brass mechanical framing, dynamic hot-swap sockets, and a dedicated rotary dial for scrolling, volume level, or canvas zooming. Its integrated monochrome OLED display exposes runtime status metrics."
  },
  {
    id: "titan-stand",
    name: "Titan Laptop Elevator",
    category: "Desk Accessories",
    price: 2499,
    originalPrice: 2999,
    image: "../images/hero_bg.png",
    description: "Heavy adjustable laptop riser machined out of thick bead-blasted aluminum plate.",
    specs: {
      "Material": "Solid 6061 Aluminum",
      "Angle Range": "0° - 45° Stepless",
      "Weight Limit": "10kg Securely",
      "Weight": "1150g",
      "Ventilation": "Passive cooling slots"
    },
    tag: "Ergonomics",
    rating: 4.6,
    reviewsCount: 93,
    detailedDescription: "Elevate your portable computing screen to optimal ergonomic lines. The Titan Elevator stand is sandblasted and built from solid 6061 aluminum plating. Its heavy friction hinges ensure a non-sliding workspace mount. The base platform includes soft micro-dampener silicone gaskets to prevent aluminum surface scratching."
  },
  {
    id: "flux-mat",
    name: "Flux Magnetic Desk Mat",
    category: "Desk Accessories",
    price: 1999,
    originalPrice: 2499,
    image: "../images/hero_bg.png",
    description: "Premium merino wool felt desk mat featuring magnetic cord organizers along the top alignment grid.",
    specs: {
      "Material": "80% Merino Wool / 20% Cork",
      "Cord Dock": "4x Neodymium Magnetic Rings",
      "Dimensions": "900mm x 400mm x 4mm",
      "Base": "Non-slip compressed natural cork",
      "Stitching": "Tactical Orange Border"
    },
    tag: "Desk System",
    rating: 4.7,
    reviewsCount: 112,
    detailedDescription: "A soft, premium interface layer for your hands and hardware. Crafted from dense 80% natural merino wool felt that naturally repels water and stains. The top border integrates a hidden steel strip that pairs with dynamic magnetic cord anchors, keeping your charging cables perfectly arranged without slipping."
  },
  {
    id: "quantum-beacon",
    name: "Quantum Acrylic Prism Lamp",
    category: "Smart Home",
    price: 3499,
    originalPrice: 3999,
    image: "../images/aether_lamp.png",
    description: "An acrylic light projector casting colorful geometric light refraction patterns on desk spaces.",
    specs: {
      "Light Source": "High-Density Smart ARGB Core",
      "Optics": "Machined Geometric Acrylic Prism",
      "Chassis": "Anodized Black Aluminum base",
      "Voltage": "USB-C 5V Input",
      "Sync Mode": "Binaural audio reaction sync"
    },
    tag: "Ambient Light",
    rating: 4.9,
    reviewsCount: 41,
    detailedDescription: "Project vibrant ambient geometry directly onto your walls and hardware setups. The Quantum Light Beacon houses a central high-output smart ARGB emitter projecting through a solid, custom-cut crystalline prism, creating mesmerizing chromatic aberrations."
  },
  {
    id: "helix-cable",
    name: "Helix Aviator Coiled Cable",
    category: "Power",
    price: 1299,
    originalPrice: 1599,
    image: "../images/grid_charger.png",
    description: "Double-sleeved coiled keyboard cable with GX16 aviator connector link.",
    specs: {
      "Interface": "USB-C to USB-A",
      "Connector": "GX16 5-Pin Aviator Metal Link",
      "Coil Length": "6 Inches (150mm)",
      "Outer Sleeve": "Techflex double-weave grid",
      "Wire Gauge": "24 AWG Power / 28 AWG Data"
    },
    tag: "Cabling",
    rating: 4.5,
    reviewsCount: 145,
    detailedDescription: "Heavy aviator connection layout designed to anchor your mechanical interface. Double-sleeved with raw nylon braid and outer Techflex wrap to preserve structural coil tension over time. The solid metal aviator link lets you hot-swap keyboard cables securely."
  },
  {
    id: "ion-brick",
    name: "Ion 20K Power Station",
    category: "Power",
    price: 4299,
    originalPrice: 4999,
    image: "../images/grid_charger.png",
    description: "High-capacity 20,000mAh external battery packs with real-time digital power status displays.",
    specs: {
      "Capacity": "20,000 mAh / 74Wh",
      "Output Max": "65W USB-C Power Delivery",
      "Display": "IPS Color Telemetry Monitor",
      "Shell": "Hard anodized cast metal frame",
      "Weight": "450g"
    },
    tag: "Power Node",
    rating: 4.8,
    reviewsCount: 68,
    detailedDescription: "Take high-wattage power grids wherever you travel. The Ion Power Station packs 20,000mAh of battery nodes. Its built-in IPS telemetry screen reports current voltage draws, charging efficiency, remaining battery runtimes, and temperature metrics in real time."
  },
  {
    id: "spectral-mirror",
    name: "Spectral Infinity Node",
    category: "Smart Home",
    price: 6999,
    originalPrice: 7999,
    image: "../images/aether_lamp.png",
    description: "Mesmerizing infinite light tunnel mirror framed in raw architectural concrete blocks.",
    specs: {
      "Effect": "3D Infinite Reflection Tunnel",
      "LEDs": "120/m Dynamic RGB Nodes",
      "Material": "Concrete & Semi-Reflective Glass",
      "Weight": "1650g",
      "Control": "RF Remote & App-assisted scripts"
    },
    tag: "Art Piece",
    rating: 4.9,
    reviewsCount: 29,
    detailedDescription: "A three-dimensional window into structural light depth. Built from custom concrete blocks holding dual semi-reflective glass panes, it creates an infinite tunnel reflection effect. The smart LED array produces smooth color gradients."
  },
  {
    id: "sonic-node",
    name: "Sonic Node Desktop Soundbar",
    category: "Smart Home",
    price: 7499,
    originalPrice: 8999,
    image: "../images/isotope_clock.png",
    description: "Heavy desktop audio monitor with solid concrete casing and raw metal speaker grills.",
    specs: {
      "Speakers": "Dual 2.5-inch 20W Drivers",
      "Amplifier": "Class-D high-fidelity module",
      "Cabinet": "Cast Acoustic Fiber Concrete",
      "Inputs": "USB Audio, Aux, Bluetooth 5.2",
      "Output Range": "55Hz - 20kHz"
    },
    tag: "High Fidelity",
    rating: 4.7,
    reviewsCount: 74,
    detailedDescription: "Designed for acoustical isolation and thermal mass. The Sonic Node soundbar is poured from structural acoustic-grade concrete, completely eliminating plastic resonance. Dual high-output drivers project raw, uncolored audio signals."
  },
  {
    id: "nexus-hub",
    name: "Nexus Thunderbolt 4 Hub",
    category: "Power",
    price: 9499,
    originalPrice: 10999,
    image: "../images/grid_charger.png",
    description: "Heavy 8-in-1 desktop docking station housing Thunderbolt 4 chips and raw aluminum chassis.",
    specs: {
      "Chassis": "6061 Sandblasted Aluminum",
      "Ports": "3x TB4, 3x USB 3.2, 1x HDMI 2.1, 1x RJ45",
      "Pass-through": "100W Power Delivery",
      "Weight": "490g",
      "Cooling": "Internal copper heatsink fins"
    },
    tag: "Workspace Hub",
    rating: 4.8,
    reviewsCount: 39,
    detailedDescription: "Drive your entire multi-monitor engineering stack through a single cable. The Nexus Hub integrates high-speed Thunderbolt 4 nodes. Machined out of sandblasted aluminum blocks with custom heat fins to run completely silent."
  },
  {
    id: "vertex-tray",
    name: "Vertex Machined Cable Tray",
    category: "Desk Accessories",
    price: 1499,
    originalPrice: 1899,
    image: "../images/orbit_organizer.png",
    description: "Exquisite tray milled from solid walnut block with brass-lined desktop pen grooves.",
    specs: {
      "Material": "Premium American Walnut & Brass",
      "Finish": "Natural Linseed Oil & Hand Rubbed",
      "Dimensions": "220mm x 85mm x 20mm",
      "Base Gasket": "Heavy non-slip micro-suction tape",
      "Divider": "Solid brass wire brackets"
    },
    tag: "Organizers",
    rating: 4.6,
    reviewsCount: 88,
    detailedDescription: "Organize writing instruments and data drives elegantly. Milled from a single piece of dark walnut, it pairs with raw brass dividers. Features micro-suction tape on the base to anchor it to your desk."
  }
];

// Load dynamic custom products from LocalStorage
const customProducts = JSON.parse(localStorage.getItem('kraft_custom_products')) || [];
PRODUCTS.push(...customProducts);

// Apply administrative price overrides
const priceOverrides = JSON.parse(localStorage.getItem('kraft_price_overrides')) || {};
PRODUCTS.forEach(p => {
  if (priceOverrides[p.id]) {
    p.price = priceOverrides[p.id];
  }
});


// Initialize Cart State
let cart = JSON.parse(localStorage.getItem('kraft_cart')) || [];

// Helper to format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// Save Cart to LocalStorage
function saveCart() {
  localStorage.setItem('kraft_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

// Update Cart Badge Count
function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

// Add Item to Cart
function addToCart(productId, quantity = 1, showDrawer = true) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItemIndex = cart.findIndex(item => item.id === productId);
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart();
  if (showDrawer) {
    openCartDrawer();
  }
}

// Update Item Quantity in Cart
function updateQuantity(productId, quantity) {
  const existingItemIndex = cart.findIndex(item => item.id === productId);
  if (existingItemIndex > -1) {
    if (quantity <= 0) {
      cart.splice(existingItemIndex, 1);
    } else {
      cart[existingItemIndex].quantity = quantity;
    }
    saveCart();
  }
}

// Remove Item from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

// Clear Cart
function clearCart() {
  cart = [];
  saveCart();
}

// Open/Close Cart Drawer
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  if (drawer && overlay) {
    drawer.classList.add('active');
    overlay.classList.add('active');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  }
}

// Render Cart Drawer Content
function renderCartDrawer() {
  const itemsContainer = document.querySelector('.cart-items-list');
  const subtotalVal = document.getElementById('cartSubtotal');
  const totalVal = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  
  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">📁</div>
        <p>No accessories in catalog storage.</p>
        <a href="shop.html" class="btn btn-outline btn-sm" onclick="closeCartDrawer()">Browse Catalog</a>
      </div>
    `;
    if (subtotalVal) subtotalVal.textContent = formatCurrency(0);
    if (totalVal) totalVal.textContent = formatCurrency(0);
    if (checkoutBtn) checkoutBtn.style.display = 'none';
    return;
  }

  if (checkoutBtn) checkoutBtn.style.display = 'flex';

  let subtotal = 0;
  itemsContainer.innerHTML = '';
  
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    
    itemsContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${formatCurrency(item.price)}</div>
          <div class="cart-item-qty-wrap">
            <button class="cart-item-qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
            <span class="cart-item-qty">${item.quantity}</span>
            <button class="cart-item-qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
          </div>
        </div>
        <button class="remove-item-btn" onclick="removeFromCart('${item.id}')">✕</button>
      </div>
    `;
  });

  if (subtotalVal) subtotalVal.textContent = formatCurrency(subtotal);
  if (totalVal) totalVal.textContent = formatCurrency(subtotal); // Flat shipping simulation
}

// Toggle Mobile Nav Menu
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (drawer) {
    drawer.classList.toggle('active');
  }
}

// Scroll effects
window.addEventListener('scroll', () => {
  const header = document.querySelector('header.global-header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Setup dynamic components on document load
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderCartDrawer();
  
  // Set active link in desktop-nav based on URL
  const path = window.location.pathname;
  const page = path.split("/").pop();
  const navLinks = document.querySelectorAll('nav.desktop-nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (page === href || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Attach search button toggle
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      alert("System Search Node active. Direct queries are mapped dynamically on keypress.");
    });
  }

  // Handle active user session UI states globally
  const activeUser = JSON.parse(sessionStorage.getItem('kraft_active_user'));
  if (activeUser) {
    const userIcon = document.getElementById('navUserIcon');
    if (userIcon) {
      userIcon.innerHTML = `<span style="font-family: var(--font-mono); font-size: 0.75rem; border: 1px solid var(--accent); padding: 0.25rem 0.5rem; border-radius: 4px; color: var(--accent); font-weight: bold;">AG-${activeUser.name.slice(0,3).toUpperCase()}</span>`;
      userIcon.setAttribute('href', '#');
      userIcon.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm("Disconnect active session node?")) {
          sessionStorage.removeItem('kraft_active_user');
          window.location.reload();
        }
      });
    }
  }
});
