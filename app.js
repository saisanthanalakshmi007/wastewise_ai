// WasteWise AI - ChatGPT/Claude Style Enhanced JavaScript

// Comprehensive Waste Database
const wasteDatabase = {
    green: {
        name: "Green Bin",
        icon: "🟢",
        description: "Wet / Organic Waste",
        sdg: 12,
        items: [
            "banana peel", "banana peels", "orange peel", "apple core", "vegetable peels", "potato peels",
            "onion peels", "garlic peels", "fruit scraps", "vegetable scraps", "fruit waste", "vegetable waste",
            "mango seed", "watermelon rind", "pumpkin", "cucumber peels", "carrot peels", "tomato",
            "leftover food", "cooked food", "rice", "dal", "curry", "roti", "chapati", "bread",
            "idli", "dosa", "sambar", "rasam", "food scraps", "spoiled food", "stale food",
            "egg shells", "eggshells", "tea bags", "tea leaves", "coffee grounds", "coffee powder",
            "garden waste", "leaves", "flowers", "plant trimmings", "grass clippings", "twigs",
            "coconut shells", "coconut husk", "sugarcane waste", "corn cobs", "bones", "meat scraps",
            "fish bones", "chicken bones", "dairy waste", "curd", "milk", "cheese"
        ]
    },
    blue: {
        name: "Blue Bin",
        icon: "🔵",
        description: "Dry / Recyclable Waste",
        sdg: 12,
        items: [
            "paper", "newspaper", "newspapers", "cardboard", "cardboard box", "magazines", "books",
            "notebooks", "office paper", "envelopes", "paper bags", "wrapping paper", "cartons",
            "plastic bottle", "plastic bottles", "plastic container", "plastic bag", "plastic bags",
            "plastic wrapper", "pet bottles", "plastic cups", "plastic plates", "plastic packaging",
            "shampoo bottle", "detergent bottle", "oil bottle", "milk packets", "plastic toys",
            "metal can", "metal cans", "tin cans", "aluminum foil", "aluminum cans", "steel utensils",
            "metal containers", "wire", "nails", "screws", "metal lids", "bottle caps",
            "glass bottle", "glass bottles", "glass jar", "glass jars", "broken glass", "glass containers",
            "wine bottles", "beer bottles", "perfume bottles",
            "old clothes", "clothes", "textiles", "fabric", "bags", "shoes", "belts",
            "e-waste", "mobile phone", "charger", "cables", "wires", "keyboard", "mouse",
            "tetra pack", "juice boxes", "milk cartons"
        ]
    },
    red: {
        name: "Red Bin",
        icon: "🔴",
        description: "Hazardous Waste",
        sdg: 11,
        items: [
            "battery", "batteries", "aa battery", "aaa battery", "lithium battery", "phone battery",
            "laptop battery", "rechargeable battery", "button cell", "car battery",
            "medicine", "medicines", "expired medicine", "tablets", "pills", "capsules",
            "syrup", "ointment", "medical waste", "injection", "syringe", "needles",
            "chemicals", "pesticides", "insecticides", "rat poison", "mosquito coil", "repellent",
            "cleaning chemicals", "bleach", "acid", "disinfectant", "sanitizer bottles",
            "paint", "paint cans", "varnish", "thinner", "turpentine", "solvent", "oil paint",
            "cfl bulb", "tube light", "fluorescent bulb", "led bulb", "mercury thermometer",
            "nail polish", "nail polish remover", "hair dye", "cosmetics", "perfume", "aerosol cans"
        ]
    },
    black: {
        name: "Black Bin",
        icon: "⚫",
        description: "Sanitary / Reject Waste",
        sdg: 11,
        items: [
            "diaper", "diapers", "baby diaper", "adult diaper", "nappy",
            "sanitary napkin", "sanitary napkins", "sanitary pad", "sanitary pads", "pad", "pads",
            "tampon", "tampons", "menstrual cup", "period products",
            "tissue", "tissues", "soiled tissue", "wet wipes", "baby wipes", "cleaning wipes",
            "paper towels", "napkins", "used napkins",
            "bandage", "bandages", "cotton", "cotton swabs", "q-tips", "gauze",
            "used gloves", "used masks", "face mask", "surgical mask",
            "hair", "razor", "razor blades", "toothbrush", "dental floss",
            "condom", "condoms",
            "contaminated waste", "soiled items", "bathroom waste", "toilet waste"
        ]
    }
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

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeMobileMenu();
    initializeNavigation();
    initializeSearch();
    initializeChatbot();
    initializeHistory();
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
    const matches = searchIndex.filter(entry =>
        entry.item.includes(query) || query.includes(entry.item)
    );
    
    if (matches.length > 0) {
        const match = matches[0];
        displaySearchResult(match, query);
    } else {
        searchResult.innerHTML = `
            <div class="result-card" style="background: #fff3e0; border-left: 4px solid #ff9800;">
                <h3>🤔 Item not found</h3>
                <p>Sorry, I couldn't find "${query}" in my database. But don't worry - our AI chatbot can help classify any waste item!</p>
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

// Function to redirect to chatbot with query
function askAIChatbot(query) {
    // Switch to chatbot tab
    const chatTab = document.querySelector('[data-tab="chatbot"]');
    const sections = document.querySelectorAll('.content-section');
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(nav => nav.classList.remove('active'));
    chatTab.classList.add('active');
    
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById('chatbot').classList.add('active');
    
    // Set the query in chat input and send
    const chatInput = document.getElementById('chatInput');
    chatInput.value = query;
    chatInput.focus();
    
    // Auto-send after a brief delay
    setTimeout(() => {
        sendMessage();
    }, 300);
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
    
    // Quick suggestions
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
    
    // Re-attach event listeners
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
    
    // Remove welcome message if exists
    const welcomeMsg = chatMessages.querySelector('.welcome-message');
    if (welcomeMsg) {
        welcomeMsg.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isBot ? 'bot-message' : 'user-message'}`;
    
    let sdgBadge = '';
    if (isBot && sdgNumber) {
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
    
    // Check for greetings
    if (query.match(/^(hi|hello|hey|namaste|vanakkam)/)) {
        addMessage("Hello! 👋 I'm WasteWise AI, your friendly waste segregation guide for Chennai. Ask me about any waste item, and I'll tell you which colored bin to use!", true);
        return;
    }
    
    // Check for thanks
    if (query.match(/(thank|thanks|thx)/)) {
        addMessage("You're welcome! 😊 Keep segregating waste properly to make Chennai cleaner. Feel free to ask about any other items!", true);
        return;
    }
    
    // Search for waste item in database first
    const matches = searchIndex.filter(entry =>
        entry.item.includes(query) || query.includes(entry.item)
    );
    
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
        // Use intelligent AI logic for items not in database
        const aiResponse = classifyWasteWithAI(query);
        addMessage(aiResponse.message, true, aiResponse.sdg);
        saveChatToHistory(userMessage, aiResponse.message);
    }
}

// Intelligent AI classification for ANY waste item
function classifyWasteWithAI(query) {
    // Green bin keywords (wet/organic)
    const greenKeywords = ['food', 'fruit', 'vegetable', 'peel', 'scraps', 'leftover', 'cooked', 'raw',
        'meat', 'fish', 'egg', 'dairy', 'tea', 'coffee', 'garden', 'plant', 'leaf', 'leaves', 'flower',
        'organic', 'compost', 'biodegradable', 'rotten', 'spoiled', 'stale', 'bone', 'shell'];
    
    // Blue bin keywords (dry/recyclable)
    const blueKeywords = ['plastic', 'paper', 'cardboard', 'metal', 'glass', 'bottle', 'can', 'container',
        'bag', 'wrapper', 'packaging', 'box', 'newspaper', 'magazine', 'book', 'cloth', 'fabric', 'textile',
        'clothes', 'shoe', 'rubber', 'pen', 'pencil', 'toy', 'wire', 'cable', 'foil', 'carton', 'jar',
        'cup', 'plate', 'utensil', 'steel', 'aluminum', 'iron', 'tin', 'umbrella', 'belt', 'bag'];
    
    // Red bin keywords (hazardous)
    const redKeywords = ['battery', 'medicine', 'tablet', 'pill', 'chemical', 'pesticide', 'insecticide',
        'paint', 'varnish', 'thinner', 'solvent', 'acid', 'bleach', 'disinfectant', 'bulb', 'tube light',
        'thermometer', 'syringe', 'needle', 'injection', 'cosmetic', 'nail polish', 'perfume', 'aerosol',
        'poison', 'toxic', 'hazardous', 'dangerous', 'fluorescent', 'mercury', 'lead'];
    
    // Black bin keywords (sanitary)
    const blackKeywords = ['diaper', 'napkin', 'pad', 'tampon', 'sanitary', 'tissue', 'wipe', 'bandage',
        'cotton', 'swab', 'mask', 'glove', 'condom', 'razor', 'blade', 'toothbrush', 'dental', 'hair',
        'menstrual', 'period', 'hygiene', 'bathroom', 'toilet', 'soiled', 'contaminated', 'used'];
    
    // Count keyword matches for each bin
    const scores = {
        green: greenKeywords.filter(kw => query.includes(kw)).length,
        blue: blueKeywords.filter(kw => query.includes(kw)).length,
        red: redKeywords.filter(kw => query.includes(kw)).length,
        black: blackKeywords.filter(kw => query.includes(kw)).length
    };
    
    // Find the bin with highest score
    let bestBin = 'blue'; // Default to blue (most common)
    let maxScore = scores.blue;
    
    if (scores.green > maxScore) { bestBin = 'green'; maxScore = scores.green; }
    if (scores.red > maxScore) { bestBin = 'red'; maxScore = scores.red; }
    if (scores.black > maxScore) { bestBin = 'black'; maxScore = scores.black; }
    
    // Generate response based on classified bin
    const binInfo = {
        green: {
            icon: '🟢',
            name: 'Green Bin',
            reason: 'It appears to be organic/wet waste that decomposes naturally',
            tip: 'Dispose daily to avoid odor. Can be composted into fertilizer!',
            sdg: 12
        },
        blue: {
            icon: '🔵',
            name: 'Blue Bin',
            reason: 'It seems to be dry/recyclable material',
            tip: 'Clean and dry it before disposal for better recycling!',
            sdg: 12
        },
        red: {
            icon: '🔴',
            name: 'Red Bin',
            reason: 'It appears to be hazardous waste requiring special handling',
            tip: 'Seal properly and handle with care to protect sanitation workers!',
            sdg: 11
        },
        black: {
            icon: '⚫',
            name: 'Black Bin',
            reason: 'It seems to be sanitary/reject waste',
            tip: 'Wrap properly before disposal for hygiene and safety!',
            sdg: 11
        }
    };
    
    const info = binInfo[bestBin];
    const message = `${info.icon} Based on my analysis, "${query}" should go in the ${info.name}. ${info.reason}. ${info.tip}`;
    
    return { message, sdg: info.sdg };
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
    
    // History search functionality
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
    
    // Filter history if search query exists
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

console.log('✅ WasteWise AI fully loaded with ChatGPT/Claude-style interface!');

// Made with Bob
