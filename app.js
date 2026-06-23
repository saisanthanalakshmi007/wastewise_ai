// WasteWise AI - Enhanced JavaScript Application with Chat History & SDG Badges

// Comprehensive Waste Database
const wasteDatabase = {
    green: {
        name: "Green Bin",
        icon: "🟢",
        description: "Wet / Organic Waste",
        sdg: 12, // Responsible Consumption and Production
        items: [
            // Fruits & Vegetables
            "banana peel", "banana peels", "orange peel", "apple core", "vegetable peels", "potato peels",
            "onion peels", "garlic peels", "fruit scraps", "vegetable scraps", "fruit waste", "vegetable waste",
            "mango seed", "watermelon rind", "pumpkin", "cucumber peels", "carrot peels", "tomato",
            
            // Food Items
            "leftover food", "cooked food", "rice", "dal", "curry", "roti", "chapati", "bread",
            "idli", "dosa", "sambar", "rasam", "food scraps", "spoiled food", "stale food",
            
            // Other Organic
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
        sdg: 12, // Responsible Consumption and Production
        items: [
            // Paper Products
            "paper", "newspaper", "newspapers", "cardboard", "cardboard box", "magazines", "books",
            "notebooks", "office paper", "envelopes", "paper bags", "wrapping paper", "cartons",
            
            // Plastics
            "plastic bottle", "plastic bottles", "plastic container", "plastic bag", "plastic bags",
            "plastic wrapper", "pet bottles", "plastic cups", "plastic plates", "plastic packaging",
            "shampoo bottle", "detergent bottle", "oil bottle", "milk packets", "plastic toys",
            
            // Metals
            "metal can", "metal cans", "tin cans", "aluminum foil", "aluminum cans", "steel utensils",
            "metal containers", "wire", "nails", "screws", "metal lids", "bottle caps",
            
            // Glass
            "glass bottle", "glass bottles", "glass jar", "glass jars", "broken glass", "glass containers",
            "wine bottles", "beer bottles", "perfume bottles",
            
            // Textiles & Others
            "old clothes", "clothes", "textiles", "fabric", "bags", "shoes", "belts",
            "e-waste", "mobile phone", "charger", "cables", "wires", "keyboard", "mouse",
            "tetra pack", "juice boxes", "milk cartons"
        ]
    },
    red: {
        name: "Red Bin",
        icon: "🔴",
        description: "Hazardous Waste",
        sdg: 11, // Sustainable Cities and Communities
        items: [
            // Batteries
            "battery", "batteries", "aa battery", "aaa battery", "lithium battery", "phone battery",
            "laptop battery", "rechargeable battery", "button cell", "car battery",
            
            // Medicines
            "medicine", "medicines", "expired medicine", "tablets", "pills", "capsules",
            "syrup", "ointment", "medical waste", "injection", "syringe", "needles",
            
            // Chemicals
            "chemicals", "pesticides", "insecticides", "rat poison", "mosquito coil", "repellent",
            "cleaning chemicals", "bleach", "acid", "disinfectant", "sanitizer bottles",
            
            // Paints & Solvents
            "paint", "paint cans", "varnish", "thinner", "turpentine", "solvent", "oil paint",
            
            // Electronics & Bulbs
            "cfl bulb", "tube light", "fluorescent bulb", "led bulb", "mercury thermometer",
            
            // Cosmetics
            "nail polish", "nail polish remover", "hair dye", "cosmetics", "perfume", "aerosol cans"
        ]
    },
    black: {
        name: "Black Bin",
        icon: "⚫",
        description: "Sanitary / Reject Waste",
        sdg: 11, // Sustainable Cities and Communities
        items: [
            // Diapers
            "diaper", "diapers", "baby diaper", "adult diaper", "nappy",
            
            // Sanitary Products
            "sanitary napkin", "sanitary napkins", "sanitary pad", "sanitary pads", "pad", "pads",
            "tampon", "tampons", "menstrual cup", "period products",
            
            // Tissues & Wipes
            "tissue", "tissues", "soiled tissue", "wet wipes", "baby wipes", "cleaning wipes",
            "paper towels", "napkins", "used napkins",
            
            // Medical & Hygiene
            "bandage", "bandages", "cotton", "cotton swabs", "q-tips", "gauze",
            "used gloves", "used masks", "face mask", "surgical mask",
            
            // Personal Care
            "hair", "razor", "razor blades", "toothbrush", "dental floss",
            "condom", "condoms",
            
            // Contaminated Items
            "contaminated waste", "soiled items", "bathroom waste", "toilet waste"
        ]
    }
};

// Chennai Waste Facts for "Did You Know?" Banner
const chennaiWasteFacts = [
    "Chennai generates 6,500+ tonnes of waste daily!",
    "Only 30% of Chennai waste is properly segregated at source.",
    "Chennai's wet waste can be converted into compost within 45 days.",
    "Proper waste segregation can reduce landfill burden by 60%.",
    "Chennai has 15 zones with dedicated waste collection systems.",
    "Recycling one ton of paper saves 17 trees and 7,000 gallons of water.",
    "Greater Chennai Corporation collects waste from 4.5 million residents daily.",
    "Composting at home can reduce your household waste by 30-40%."
];

// Flatten all items for search with their bin categories
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
    initializeBanner();
    initializeNavigation();
    initializeSearch();
    initializeChatbot();
    initializeHistory();
    console.log('🌱 WasteWise AI initialized successfully!');
    console.log(`📊 Database loaded with ${searchIndex.length} waste items`);
});

// Did You Know Banner
function initializeBanner() {
    const banner = document.getElementById('didYouKnowBanner');
    const factText = document.getElementById('bannerFactText');
    const closeBtn = document.getElementById('closeBanner');
    
    // Show banner after 2 seconds with random fact
    setTimeout(() => {
        const randomFact = chennaiWasteFacts[Math.floor(Math.random() * chennaiWasteFacts.length)];
        factText.textContent = randomFact;
        banner.classList.add('show');
    }, 2000);
    
    // Close banner
    closeBtn.addEventListener('click', () => {
        banner.classList.remove('show');
    });
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
        banner.classList.remove('show');
    }, 12000);
}

// Navigation
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetTab = item.getAttribute('data-tab');
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Update active section
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(targetTab).classList.add('active');
            
            // Load history if history tab is clicked
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
    
    searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
    
    // Auto-suggestions
    searchInput.addEventListener('input', (e) => {
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
    
    // Find matching items
    const matches = searchIndex.filter(entry => 
        entry.item.includes(query) || query.includes(entry.item)
    );
    
    if (matches.length > 0) {
        const match = matches[0];
        displaySearchResult(match, query);
    } else {
        searchResult.innerHTML = `
            <div class="result-card" style="background: #fff3e0; border-left: 5px solid #ff9800;">
                <h3>🤔 Item not found</h3>
                <p>Sorry, I couldn't find "${query}" in my database. Try searching for similar items or use the chatbot for more help!</p>
            </div>
        `;
    }
}

function displaySearchResult(match, query) {
    const searchResult = document.getElementById('searchResult');
    const responses = {
        green: [
            `Great! ${query} goes in the ${match.binIcon} ${match.binName}. It's organic waste that can be composted into nutrient-rich fertilizer for plants!`,
            `Perfect! Dispose ${query} in the ${match.binIcon} ${match.binName}. This wet waste will decompose naturally and help reduce landfill burden.`,
            `Yes! ${query} belongs in the ${match.binIcon} ${match.binName}. Organic waste like this can be converted into compost within 45 days!`
        ],
        blue: [
            `Excellent! ${query} should go in the ${match.binIcon} ${match.binName}. Remember to clean it before disposal for better recycling!`,
            `That's right! Put ${query} in the ${match.binIcon} ${match.binName}. Recyclable materials help conserve resources and reduce pollution.`,
            `Good choice! ${query} belongs in the ${match.binIcon} ${match.binName}. Make sure it's clean and dry for efficient recycling!`
        ],
        red: [
            `Important! ${query} must go in the ${match.binIcon} ${match.binName}. Handle with care and seal properly to protect sanitation workers!`,
            `Careful! Dispose ${query} in the ${match.binIcon} ${match.binName}. Hazardous waste requires special handling to prevent environmental damage.`,
            `Safety first! ${query} belongs in the ${match.binIcon} ${match.binName}. Never mix hazardous waste with regular garbage!`
        ],
        black: [
            `Correct! ${query} goes in the ${match.binIcon} ${match.binName}. Wrap it properly before disposal for hygiene and safety.`,
            `Yes! Put ${query} in the ${match.binIcon} ${match.binName}. Sanitary waste should be sealed to protect collection workers.`,
            `Right! ${query} belongs in the ${match.binIcon} ${match.binName}. Always wrap sanitary items before throwing them away!`
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
    
    chatSendBtn.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            processChatMessage(message);
            chatInput.value = '';
        }
    });
    
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = chatInput.value.trim();
            if (message) {
                processChatMessage(message);
                chatInput.value = '';
            }
        }
    });
    
    // New Chat button
    newChatBtn.addEventListener('click', () => {
        if (confirm('Start a new chat? This will clear the current conversation.')) {
            clearCurrentChat();
        }
    });
    
    // Quick action buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.getAttribute('data-question');
            processChatMessage(question);
        });
    });
}

function clearCurrentChat() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = `
        <div class="message bot-message">
            <div class="message-content">
                <p>👋 Hello! I'm WasteWise AI, your friendly waste segregation assistant for Chennai. Ask me about any waste item, and I'll tell you which bin to use!</p>
            </div>
        </div>
    `;
}

function addMessage(text, isBot = false, sdgNumber = null) {
    const chatMessages = document.getElementById('chatMessages');
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
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing';
    typingDiv.innerHTML = `
        <div class="message-content">
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingDiv;
}

function removeTypingIndicator(typingDiv) {
    if (typingDiv && typingDiv.parentNode) {
        typingDiv.parentNode.removeChild(typingDiv);
    }
}

function processChatMessage(userMessage) {
    addMessage(userMessage, false);
    
    const typingIndicator = showTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        
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
        
        // Search for waste item
        const matches = searchIndex.filter(entry => 
            entry.item.includes(query) || query.includes(entry.item)
        );
        
        if (matches.length > 0) {
            const match = matches[0];
            const responses = {
                green: [
                    `${match.binIcon} Put that in the ${match.binName}! It's organic waste that decomposes naturally. Chennai's wet waste can be composted into fertilizer within 45 days!`,
                    `${match.binIcon} That goes in the ${match.binName}! Organic waste like this helps create compost. Make sure to dispose it daily to avoid odor and pests.`,
                    `${match.binIcon} Use the ${match.binName} for that! It's biodegradable waste that can be converted into nutrient-rich compost for gardens.`
                ],
                blue: [
                    `${match.binIcon} That belongs in the ${match.binName}! Remember to rinse it clean before disposal. Recyclable materials help conserve natural resources!`,
                    `${match.binIcon} Put it in the ${match.binName}! Make sure it's clean and dry. Chennai recycles tons of dry waste daily, and you're contributing to that!`,
                    `${match.binIcon} Use the ${match.binName} for that! Flatten boxes and clean containers for better recycling. Every recycled item saves energy and resources!`
                ],
                red: [
                    `${match.binIcon} That's hazardous! Use the ${match.binName} and seal it properly. Never mix hazardous waste with regular garbage - it protects our sanitation workers!`,
                    `${match.binIcon} Important! That goes in the ${match.binName}. Handle with care and wrap securely. Hazardous waste needs special treatment to prevent environmental damage.`,
                    `${match.binIcon} Be careful! Use the ${match.binName} for that. Seal it well before disposal. Chennai has special collection for hazardous waste to ensure safe handling!`
                ],
                black: [
                    `${match.binIcon} That's sanitary waste! Use the ${match.binName} and wrap it properly. This protects the dignity and safety of waste collection workers.`,
                    `${match.binIcon} Put that in the ${match.binName}! Always wrap sanitary items before disposal. It's about hygiene and respect for those who handle our waste.`,
                    `${match.binIcon} Use the ${match.binName} for that! Seal it in a bag before throwing. Proper disposal of sanitary waste is crucial for public health!`
                ]
            };
            
            const randomResponse = responses[match.bin][Math.floor(Math.random() * responses[match.bin].length)];
            addMessage(randomResponse, true, match.sdg);
            
            // Save to chat history
            saveChatToHistory(userMessage, randomResponse);
        } else {
            const response = `I couldn't find that specific item in my database. 🤔 Could you try describing it differently? For example, instead of brand names, use generic terms like "plastic bottle" or "food waste". I'm here to help!`;
            addMessage(response, true);
            saveChatToHistory(userMessage, response);
        }
    }, 1000);
}

// Chat History with localStorage
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
    
    // Keep only last 50 conversations
    if (history.length > 50) {
        history.pop();
    }
    
    localStorage.setItem('wasteWiseHistory', JSON.stringify(history));
}

function initializeHistory() {
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    
    clearHistoryBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all chat history? This action cannot be undone.')) {
            localStorage.removeItem('wasteWiseHistory');
            loadChatHistory();
        }
    });
}

function loadChatHistory() {
    const historyList = document.getElementById('historyList');
    const history = JSON.parse(localStorage.getItem('wasteWiseHistory') || '[]');
    
    if (history.length === 0) {
        historyList.innerHTML = '<p class="empty-history">No chat history yet. Start a conversation in the Chatbot tab!</p>';
        return;
    }
    
    historyList.innerHTML = history.map(item => `
        <div class="history-item">
            <div class="history-date">📅 ${item.date}</div>
            <div class="history-question"><strong>Q:</strong> ${item.question}</div>
            <div class="history-answer"><strong>A:</strong> ${item.answer}</div>
        </div>
    `).join('');
}

console.log('✅ WasteWise AI fully loaded with all features!');

// Made with Bob
