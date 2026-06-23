// WasteWise AI - Enhanced with 300+ Item Database

// Comprehensive Waste Database with 300+ items
const wasteDatabase = {
    green: {
        name: "Green Bin",
        icon: "🟢",
        description: "Wet / Organic Waste",
        sdg: 12,
        items: [
            // Fruits (30 items)
            "banana peel", "banana peels", "orange peel", "orange peels", "apple core", "apple peel",
            "mango seed", "mango peel", "watermelon rind", "pineapple peel", "papaya seeds",
            "grape stems", "pomegranate peel", "lemon peel", "lime peel", "kiwi peel",
            "avocado pit", "peach pit", "plum pit", "cherry pit", "melon rind",
            "coconut shell", "coconut husk", "coconut fiber", "fruit scraps", "fruit waste",
            "rotten fruit", "spoiled fruit", "overripe fruit", "fruit pulp",
            
            // Vegetables (35 items)
            "vegetable peels", "vegetable scraps", "vegetable waste", "potato peels", "onion peels",
            "garlic peels", "tomato", "tomato waste", "cucumber peels", "carrot peels",
            "cabbage leaves", "lettuce leaves", "spinach", "coriander", "mint leaves",
            "curry leaves", "pumpkin", "pumpkin seeds", "bottle gourd", "bitter gourd",
            "brinjal", "cauliflower", "broccoli", "beans", "peas pods",
            "corn cobs", "corn husks", "sugarcane waste", "beetroot peels", "radish peels",
            "ginger peels", "green chili", "capsicum", "zucchini", "squash",
            
            // Cooked Food (25 items)
            "leftover food", "cooked food", "food scraps", "spoiled food", "stale food",
            "rice", "cooked rice", "dal", "curry", "sambar", "rasam",
            "roti", "chapati", "bread", "stale bread", "idli", "dosa",
            "upma", "pongal", "biryani", "pasta", "noodles", "pizza crust",
            "sandwich", "burger bun",
            
            // Dairy & Eggs (10 items)
            "egg shells", "eggshells", "broken eggs", "dairy waste", "curd",
            "yogurt", "milk", "spoiled milk", "cheese", "paneer",
            
            // Beverages (10 items)
            "tea bags", "tea leaves", "used tea bags", "coffee grounds", "coffee powder",
            "coffee filters", "herbal tea", "green tea bags", "tea waste", "coffee waste",
            
            // Garden Waste (20 items)
            "garden waste", "leaves", "dry leaves", "fallen leaves", "flowers",
            "flower petals", "plant trimmings", "grass clippings", "grass", "lawn waste",
            "twigs", "small branches", "hedge trimmings", "weeds", "dead plants",
            "plant stems", "tree bark", "sawdust", "wood chips", "mulch",
            
            // Meat & Seafood (10 items)
            "bones", "meat scraps", "chicken bones", "fish bones", "fish waste",
            "seafood shells", "prawn shells", "crab shells", "meat waste", "animal waste",
            
            // Grains & Nuts (10 items)
            "rice husk", "wheat bran", "grain waste", "nut shells", "peanut shells",
            "almond shells", "walnut shells", "cashew shells", "pistachio shells", "grain scraps"
        ]
    },
    blue: {
        name: "Blue Bin",
        icon: "🔵",
        description: "Dry / Recyclable Waste",
        sdg: 12,
        items: [
            // Paper Products (30 items)
            "paper", "newspaper", "newspapers", "old newspaper", "cardboard", "cardboard box",
            "cardboard boxes", "magazines", "old magazines", "books", "old books", "notebooks",
            "office paper", "writing paper", "envelopes", "paper bags", "brown paper",
            "wrapping paper", "gift wrap", "cartons", "paper cartons", "egg cartons",
            "tissue box", "paper packaging", "receipts", "bills", "documents",
            "pamphlets", "brochures", "calendars",
            
            // Plastic Items (35 items)
            "plastic bottle", "plastic bottles", "water bottle", "pet bottles", "plastic container",
            "plastic containers", "plastic bag", "plastic bags", "polythene bag", "plastic wrapper",
            "plastic packaging", "plastic cups", "plastic plates", "plastic spoons", "plastic forks",
            "shampoo bottle", "detergent bottle", "oil bottle", "sauce bottle", "ketchup bottle",
            "milk packets", "plastic toys", "broken toys", "plastic hangers", "plastic buckets",
            "plastic mugs", "plastic jars", "plastic lids", "bottle caps", "plastic straws",
            "plastic film", "bubble wrap", "plastic sheets", "plastic covers", "cling film",
            
            // Glass Items (15 items)
            "glass bottle", "glass bottles", "wine bottles", "beer bottles", "glass jar",
            "glass jars", "jam jars", "pickle jars", "glass containers", "broken glass",
            "glass pieces", "mirror pieces", "broken mirror", "glass cups", "perfume bottles",
            
            // Metal Items (20 items)
            "metal can", "metal cans", "tin cans", "aluminum cans", "soda cans",
            "aluminum foil", "steel utensils", "metal containers", "metal lids", "bottle caps",
            "metal wire", "copper wire", "nails", "screws", "metal hangers",
            "steel plates", "aluminum plates", "metal spoons", "metal forks", "metal boxes",
            
            // Textiles (15 items)
            "old clothes", "clothes", "worn clothes", "textiles", "fabric", "fabric scraps",
            "old shirts", "old pants", "old dresses", "bags", "cloth bags", "shoes",
            "old shoes", "belts", "old belts",
            
            // Tetra Packs (5 items)
            "tetra pack", "tetra packs", "juice boxes", "milk cartons", "beverage cartons"
        ]
    },
    red: {
        name: "Red Bin",
        icon: "🔴",
        description: "Hazardous / E-Waste",
        sdg: 11,
        items: [
            // Batteries (15 items)
            "battery", "batteries", "aa battery", "aaa battery", "lithium battery",
            "phone battery", "mobile battery", "laptop battery", "rechargeable battery",
            "button cell", "car battery", "watch battery", "remote battery", "power bank",
            "dead battery",
            
            // Electronics & E-waste (30 items)
            "mobile phone", "old phone", "cell phone", "smartphone", "broken phone",
            "mobile charger", "charger", "phone charger", "laptop charger", "adapter",
            "earphones", "headphones", "earbuds", "headset", "bluetooth headset",
            "laptop", "old laptop", "computer", "keyboard", "mouse",
            "cables", "wires", "usb cable", "charging cable", "power cable",
            "hard disk", "pendrive", "memory card", "cd", "dvd",
            
            // Medicines (15 items)
            "medicine", "medicines", "expired medicine", "old medicine", "tablets",
            "pills", "capsules", "syrup", "cough syrup", "ointment",
            "medical waste", "injection", "syringe", "needles", "insulin pen",
            
            // Chemicals (15 items)
            "chemicals", "pesticides", "insecticides", "rat poison", "mosquito coil",
            "repellent", "cleaning chemicals", "bleach", "acid", "disinfectant",
            "sanitizer bottles", "floor cleaner", "toilet cleaner", "drain cleaner", "fungicide",
            
            // Paints & Solvents (10 items)
            "paint", "paint cans", "old paint", "varnish", "thinner",
            "turpentine", "solvent", "oil paint", "paint remover", "lacquer",
            
            // Bulbs & Lighting (10 items)
            "cfl bulb", "tube light", "fluorescent bulb", "led bulb", "broken bulb",
            "light bulb", "mercury thermometer", "neon light", "halogen bulb", "lamp",
            
            // Cosmetics (10 items)
            "nail polish", "nail polish remover", "hair dye", "hair color", "cosmetics",
            "perfume", "perfume bottle", "aerosol cans", "spray cans", "deodorant can"
        ]
    },
    black: {
        name: "Black Bin",
        icon: "⚫",
        description: "Sanitary / Reject Waste",
        sdg: 11,
        items: [
            // Sanitary Products (20 items)
            "diaper", "diapers", "baby diaper", "adult diaper", "nappy",
            "sanitary napkin", "sanitary napkins", "sanitary pad", "sanitary pads",
            "pad", "pads", "tampon", "tampons", "menstrual cup", "period products",
            "panty liner", "incontinence pad", "nursing pad", "breast pad", "maternity pad",
            
            // Tissues & Wipes (15 items)
            "tissue", "tissues", "used tissue", "soiled tissue", "wet wipes",
            "baby wipes", "cleaning wipes", "makeup wipes", "paper towels",
            "used napkins", "paper napkins", "facial tissue", "toilet paper", "kitchen roll", "hand towel",
            
            // Medical Waste (10 items)
            "bandage", "bandages", "used bandage", "cotton", "cotton swabs",
            "q-tips", "gauze", "medical gauze", "wound dressing", "plaster",
            
            // Personal Care (15 items)
            "used gloves", "used masks", "face mask", "surgical mask", "n95 mask",
            "hair", "cut hair", "razor", "razor blades", "disposable razor",
            "toothbrush", "old toothbrush", "dental floss", "condom", "condoms",
            
            // Non-Recyclable Items (30 items)
            "thermocol", "styrofoam", "thermocol box", "styrofoam packaging", "foam",
            "chips packet", "wafer packet", "snack packet", "foil packet", "laminated packet",
            "cigarette butt", "cigarette", "ash", "dust", "vacuum dust",
            "broken mirror", "broken ceramics", "broken crockery", "broken glass",
            "sponge", "cleaning sponge", "scrubber", "steel wool", "contaminated waste",
            "soiled items", "bathroom waste", "toilet waste", "cat litter", "pet waste", "mixed waste"
        ]
    }
};

// Synonym mapping for common variations
const synonymMap = {
    // Electronics
    "charger": "mobile charger",
    "cell phone": "mobile phone",
    "smartphone": "mobile phone",
    "old phone": "mobile phone",
    "headphones": "earphones",
    "earbuds": "earphones",
    "headset": "earphones",
    
    // Materials
    "styrofoam": "thermocol",
    "polystene": "thermocol",
    "food scraps": "food waste",
    "food waste": "leftover food",
    
    // Common items
    "water bottle": "plastic bottle",
    "pet bottle": "plastic bottle",
    "soda can": "aluminum cans",
    "tin can": "metal can",
    "glass jar": "glass bottle",
    "wine bottle": "glass bottle",
    
    // Organic
    "fruit peel": "fruit waste",
    "veggie scraps": "vegetable scraps",
    "veggie waste": "vegetable waste",
    "plant waste": "garden waste",
    "yard waste": "garden waste"
};

// Flatten search index
const searchIndex = [];
Object.keys(wasteDatabase).forEach(binColor => {
    wasteDatabase[binColor].items.forEach(item => {
        searchIndex.push({
            item: item.toLowerCase(),
            bin: binColor,
            binName: wasteDatabase[binColor].name,
            binIcon: wasteDatabase[binColor].icon,
            binDescription: wasteDatabase[binColor].description,
            sdg: wasteDatabase[binColor].sdg
        });
    });
});

// Fuzzy matching function (Levenshtein distance)
function fuzzyMatch(str1, str2, threshold = 2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const matrix = [];

    for (let i = 0; i <= len1; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[len1][len2] <= threshold;
}

// Check if input is valid
function isValidInput(query) {
    // Reject if too short
    if (query.length < 2) return false;
    
    // Reject if only repeated characters (e.g., "aaa", "ggg")
    if (/^(.)\1+$/.test(query)) return false;
    
    // Reject if only numbers
    if (/^\d+$/.test(query)) return false;
    
    // Reject if random characters (no vowels or too many consonants)
    const vowels = query.match(/[aeiou]/gi);
    if (!vowels || vowels.length < query.length * 0.2) return false;
    
    return true;
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeMobileMenu();
    initializeNavigation();
    initializeSearch();
    initializeChatbot();
    initializeHistory();
    initializeItemsModal();
    autoResizeTextarea();
    console.log('🌱 WasteWise AI initialized successfully!');
    console.log(`📊 Database loaded with ${searchIndex.length} waste items`);
});

// Mobile Menu
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const newChatMobile = document.getElementById('newChatMobile');

    menuToggle?.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay?.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    newChatMobile?.addEventListener('click', () => {
        if (confirm('Start a new chat? This will clear the current conversation.')) {
            clearCurrentChat();
        }
    });
}

// Navigation
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuToggle = document.getElementById('menuToggle');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetTab = item.getAttribute('data-tab');
            
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(targetTab)?.classList.add('active');
            
            // Close mobile menu
            sidebar?.classList.remove('active');
            overlay?.classList.remove('active');
            menuToggle?.classList.remove('active');
            
            if (targetTab === 'history') {
                loadChatHistory();
            }
        });
    });
}

// Initialize Items Modal
function initializeItemsModal() {
    const itemsBadge = document.querySelector('.items-badge');
    
    itemsBadge?.addEventListener('click', () => {
        openItemsModal();
    });
}

// Open Items Modal
function openItemsModal() {
    const modal = document.getElementById('itemsModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Populate modal with items
        populateModalItems();
    }
}

// Close Items Modal
function closeItemsModal() {
    const modal = document.getElementById('itemsModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Populate Modal with Items
function populateModalItems(searchQuery = '') {
    const greenList = document.getElementById('greenItemsList');
    const blueList = document.getElementById('blueItemsList');
    const redList = document.getElementById('redItemsList');
    const blackList = document.getElementById('blackItemsList');
    
    if (!greenList || !blueList || !redList || !blackList) return;
    
    const filterItems = (items) => {
        if (!searchQuery) return items.slice(0, 25); // Show first 25 items
        return items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    };
    
    greenList.innerHTML = filterItems(wasteDatabase.green.items)
        .map(item => `<li>${item}</li>`).join('') || '<li>No items found</li>';
    
    blueList.innerHTML = filterItems(wasteDatabase.blue.items)
        .map(item => `<li>${item}</li>`).join('') || '<li>No items found</li>';
    
    redList.innerHTML = filterItems(wasteDatabase.red.items)
        .map(item => `<li>${item}</li>`).join('') || '<li>No items found</li>';
    
    blackList.innerHTML = filterItems(wasteDatabase.black.items)
        .map(item => `<li>${item}</li>`).join('') || '<li>No items found</li>';
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResult = document.getElementById('searchResult');
    const suggestionsDiv = document.getElementById('suggestions');
    
    searchBtn?.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
    
    searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
    
    searchInput?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
            suggestionsDiv.innerHTML = '';
            return;
        }
        
        const suggestions = searchIndex
            .filter(entry => entry.item.includes(query))
            .slice(0, 5)
            .map(entry => entry.item);
        
        const uniqueSuggestions = [...new Set(suggestions)];
        
        if (uniqueSuggestions.length > 0) {
            suggestionsDiv.innerHTML = uniqueSuggestions
                .map(item => `<span class="suggestion-chip">${item}</span>`)
                .join('');
            
            document.querySelectorAll('.suggestion-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    searchInput.value = chip.textContent;
                    performSearch(chip.textContent);
                    suggestionsDiv.innerHTML = '';
                });
            });
        } else {
            suggestionsDiv.innerHTML = '';
        }
    });
}

function performSearch(query) {
    const searchResult = document.getElementById('searchResult');
    
    if (!query || query.trim() === '') {
        searchResult.innerHTML = '';
        return;
    }
    
    query = query.toLowerCase().trim();
    
    // Check if input is valid
    if (!isValidInput(query)) {
        searchResult.innerHTML = `
            <div class="result-card" style="background: #ffebee; border-left: 4px solid #f44336;">
                <h3>❌ Invalid Input</h3>
                <p>This doesn't appear to be a valid waste item. Please enter a common household waste item like "plastic bottle", "banana peel", or "old phone".</p>
            </div>
        `;
        return;
    }
    
    // Check synonyms first
    const normalizedQuery = synonymMap[query] || query;
    
    // Exact match
    let matches = searchIndex.filter(entry => 
        entry.item === normalizedQuery || entry.item.includes(normalizedQuery) || normalizedQuery.includes(entry.item)
    );
    
    // Fuzzy match if no exact match
    if (matches.length === 0) {
        matches = searchIndex.filter(entry => fuzzyMatch(entry.item, normalizedQuery, 2));
    }
    
    if (matches.length > 0) {
        const match = matches[0];
        displaySearchResult(match, query);
    } else {
        searchResult.innerHTML = `
            <div class="result-card" style="background: #fff3e0; border-left: 4px solid #ff9800;">
                <h3>🤔 Item not found</h3>
                <p>I don't recognize "${query}" in my database yet. Please try a common household waste item, or ask the AI chatbot for help!</p>
                <button class="ask-ai-btn" onclick="askAIChatbot('${query.replace(/'/g, "\\'")}')">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    Ask AI Chatbot →
                </button>
            </div>
        `;
    }
}

function displaySearchResult(match, query) {
    const searchResult = document.getElementById('searchResult');
    const responses = {
        green: [
            `Great! ${query} goes in the ${match.binIcon} ${match.binName}. It's organic waste that can be composted into nutrient-rich fertilizer for plants!`,
            `Perfect! Dispose ${query} in the ${match.binIcon} ${match.binName}. This wet waste will decompose naturally and help reduce landfill burden.`
        ],
        blue: [
            `Excellent! ${query} should go in the ${match.binIcon} ${match.binName}. Remember to clean it before disposal for better recycling!`,
            `That's right! Put ${query} in the ${match.binIcon} ${match.binName}. Recyclable materials help conserve resources and reduce pollution.`
        ],
        red: [
            `Important! ${query} must go in the ${match.binIcon} ${match.binName}. Handle with care and seal properly to protect sanitation workers!`,
            `Careful! Dispose ${query} in the ${match.binIcon} ${match.binName}. Hazardous waste requires special handling to prevent environmental damage.`
        ],
        black: [
            `Correct! ${query} goes in the ${match.binIcon} ${match.binName}. Wrap it properly before disposal for hygiene and safety.`,
            `Yes! Put ${query} in the ${match.binIcon} ${match.binName}. Sanitary waste should be sealed to protect collection workers.`
        ]
    };
    
    const randomResponse = responses[match.bin][Math.floor(Math.random() * responses[match.bin].length)];
    
    searchResult.innerHTML = `
        <div class="result-card ${match.bin}">
            <h3>${match.binIcon} ${match.binName}</h3>
            <p class="bin-name">${match.binDescription}</p>
            <p>${randomResponse}</p>
        </div>
    `;
}

// Function to redirect to chatbot with query
function askAIChatbot(query) {
    const chatTab = document.querySelector('[data-tab="chatbot"]');
    const sections = document.querySelectorAll('.content-section');
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(nav => nav.classList.remove('active'));
    chatTab.classList.add('active');
    
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById('chatbot').classList.add('active');
    
    const chatInput = document.getElementById('chatInput');
    chatInput.value = query;
    chatInput.focus();
    
    setTimeout(() => {
        sendMessage();
    }, 300);
}

// Chatbot Functionality
function initializeChatbot() {
    const chatInput = document.getElementById('chatInput');
    const chatSendBtn = document.getElementById('chatSendBtn');
    const newChatBtn = document.getElementById('newChatBtn');
    
    chatSendBtn?.addEventListener('click', () => {
        sendMessage();
    });
    
    chatInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    newChatBtn?.addEventListener('click', () => {
        if (confirm('Start a new chat? This will clear the current conversation.')) {
            clearCurrentChat();
        }
    });
    
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.getAttribute('data-question');
            chatInput.value = question;
            sendMessage();
        });
    });
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    addMessage(message, false);
    chatInput.value = '';
    chatInput.style.height = 'auto';
    
    showLoadingIndicator();
    
    setTimeout(() => {
        hideLoadingIndicator();
        processChatMessage(message);
    }, 800);
}

function clearCurrentChat() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = `
        <div class="welcome-message">
            <div class="welcome-icon">♻️</div>
            <h2>Welcome to WasteWise AI</h2>
            <p>Your intelligent waste segregation assistant for Chennai. Ask me about any waste item, and I'll guide you to the right bin!</p>
            <div class="quick-suggestions">
                <button class="suggestion-btn" data-question="Where do I throw banana peels?">🍌 Banana peels</button>
                <button class="suggestion-btn" data-question="Which bin for plastic bottles?">🥤 Plastic bottles</button>
                <button class="suggestion-btn" data-question="How to dispose batteries?">🔋 Batteries</button>
                <button class="suggestion-btn" data-question="Where do diapers go?">🧷 Diapers</button>
            </div>
        </div>
    `;
    
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.getAttribute('data-question');
            document.getElementById('chatInput').value = question;
            sendMessage();
        });
    });
}

function addMessage(text, isBot = false, sdgNumber = null) {
    const chatMessages = document.getElementById('chatMessages');
    
    const welcomeMsg = chatMessages.querySelector('.welcome-message');
    if (welcomeMsg) {
        welcomeMsg.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isBot ? 'bot-message' : 'user-message'}`;
    
    let sdgBadge = '';
    if (isBot && sdgNumber !== null && sdgNumber !== undefined) {
        const sdgText = sdgNumber === 11 ? 'SDG 11: Sustainable Cities' : 'SDG 12: Responsible Consumption';
        sdgBadge = `<div class="sdg-badge">🎯 ${sdgText}</div>`;
    }
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
            ${sdgBadge}
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function showLoadingIndicator() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    loadingIndicator?.classList.add('active');
    scrollToBottom();
}

function hideLoadingIndicator() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    loadingIndicator?.classList.remove('active');
}

function scrollToBottom() {
    const chatMessages = document.getElementById('chatMessages');
    setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 100);
}

function processChatMessage(userMessage) {
    const query = userMessage.toLowerCase().trim();
    
    if (query.match(/^(hi|hello|hey|namaste|vanakkam)/)) {
        addMessage("Hello! 👋 I'm WasteWise AI, your friendly waste segregation guide for Chennai. Ask me about any waste item, and I'll tell you which colored bin to use!", true);
        return;
    }
    
    if (query.match(/(thank|thanks|thx)/)) {
        addMessage("You're welcome! 😊 Keep segregating waste properly to make Chennai cleaner. Feel free to ask about any other items!", true);
        return;
    }
    
    // Check if input is valid
    if (!isValidInput(query)) {
        addMessage("❌ This doesn't appear to be a valid waste item. Please enter a common household waste item like 'plastic bottle', 'banana peel', or 'old phone'.", true);
        saveChatToHistory(userMessage, "Invalid input - please enter a valid waste item");
        return;
    }
    
    // Check synonyms
    const normalizedQuery = synonymMap[query] || query;
    
    // Search for exact match
    let matches = searchIndex.filter(entry => 
        entry.item === normalizedQuery || entry.item.includes(normalizedQuery) || normalizedQuery.includes(entry.item)
    );
    
    // Fuzzy match if no exact match
    if (matches.length === 0) {
        matches = searchIndex.filter(entry => fuzzyMatch(entry.item, normalizedQuery, 2));
    }
    
    if (matches.length > 0) {
        const match = matches[0];
        const responses = {
            green: [
                `${match.binIcon} Put that in the ${match.binName}! It's organic waste that decomposes naturally. Chennai's wet waste can be composted into fertilizer within 45 days!`,
                `${match.binIcon} That goes in the ${match.binName}! Organic waste like this helps create compost. Make sure to dispose it daily to avoid odor and pests.`
            ],
            blue: [
                `${match.binIcon} That belongs in the ${match.binName}! Remember to rinse it clean before disposal. Recyclable materials help conserve natural resources!`,
                `${match.binIcon} Put it in the ${match.binName}! Make sure it's clean and dry. Chennai recycles tons of dry waste daily, and you're contributing to that!`
            ],
            red: [
                `${match.binIcon} That's hazardous! Use the ${match.binName} and seal it properly. Never mix hazardous waste with regular garbage - it protects our sanitation workers!`,
                `${match.binIcon} Important! That goes in the ${match.binName}. Handle with care and wrap securely. Hazardous waste needs special treatment to prevent environmental damage.`
            ],
            black: [
                `${match.binIcon} That's sanitary waste! Use the ${match.binName} and wrap it properly. This protects the dignity and safety of waste collection workers.`,
                `${match.binIcon} Put that in the ${match.binName}! Always wrap sanitary items before disposal. It's about hygiene and respect for those who handle our waste.`
            ]
        };
        
        const randomResponse = responses[match.bin][Math.floor(Math.random() * responses[match.bin].length)];
        addMessage(randomResponse, true, match.sdg);
        saveChatToHistory(userMessage, randomResponse);
    } else {
        const response = `🤔 I don't recognize "${userMessage}" in my database yet. Please try a common household waste item. You can also click the "📊 View 300+ Supported Waste Items" button to see all supported items!`;
        addMessage(response, true);
        saveChatToHistory(userMessage, response);
    }
}

// Auto-resize textarea
function autoResizeTextarea() {
    const chatInput = document.getElementById('chatInput');
    
    chatInput?.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 200) + 'px';
    });
}

// Chat History
function saveChatToHistory(question, answer) {
    const history = JSON.parse(localStorage.getItem('wasteWiseHistory') || '[]');
    const timestamp = new Date().toISOString();
    
    history.unshift({
        question,
        answer,
        timestamp,
        date: new Date().toLocaleString('en-IN', { 
            dateStyle: 'medium', 
            timeStyle: 'short',
            timeZone: 'Asia/Kolkata'
        })
    });
    
    if (history.length > 50) {
        history.pop();
    }
    
    localStorage.setItem('wasteWiseHistory', JSON.stringify(history));
}

function initializeHistory() {
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    const historySearchInput = document.getElementById('historySearchInput');
    
    clearHistoryBtn?.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all chat history? This action cannot be undone.')) {
            localStorage.removeItem('wasteWiseHistory');
            loadChatHistory();
            if (historySearchInput) historySearchInput.value = '';
        }
    });
    
    historySearchInput?.addEventListener('input', (e) => {
        const searchQuery = e.target.value.toLowerCase().trim();
        filterChatHistory(searchQuery);
    });
}

function loadChatHistory(searchQuery = '') {
    const historyList = document.getElementById('historyList');
    const history = JSON.parse(localStorage.getItem('wasteWiseHistory') || '[]');
    
    if (history.length === 0) {
        historyList.innerHTML = '<p class="empty-history">No chat history yet. Start a conversation in the Chat tab!</p>';
        return;
    }
    
    let filteredHistory = history;
    if (searchQuery) {
        filteredHistory = history.filter(item => 
            item.question.toLowerCase().includes(searchQuery) || 
            item.answer.toLowerCase().includes(searchQuery)
        );
    }
    
    if (filteredHistory.length === 0) {
        historyList.innerHTML = `<p class="empty-history">No history found for "${searchQuery}". Try a different keyword!</p>`;
        return;
    }
    
    historyList.innerHTML = filteredHistory.map(item => `
        <div class="history-item">
            <div class="history-date">📅 ${item.date}</div>
            <div class="history-question"><strong>Q:</strong> ${item.question}</div>
            <div class="history-answer"><strong>A:</strong> ${item.answer}</div>
        </div>
    `).join('');
}

function filterChatHistory(searchQuery) {
    loadChatHistory(searchQuery);
}

console.log('✅ WasteWise AI fully loaded with 300+ item database!');

// Made with Bob
