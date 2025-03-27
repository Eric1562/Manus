/ Fonction pour générer les étoiles de notation
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    // Ajouter les étoiles pleines
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Ajouter une demi-étoile si nécessaire
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Ajouter les étoiles vides
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Fonction pour générer un lien Google Maps
function generateGoogleMapsLink(restaurant) {
    // Encoder le nom et l'adresse pour l'URL
    const query = encodeURIComponent(`${restaurant.nom}, ${restaurant.adresse}`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

// Variables globales pour les traductions et la langue actuelle
let translations = {};
let currentLanguage = 'fr';

// Fonction pour charger les traductions
async function loadTranslations() {
    try {
        // Charger toutes les traductions
        const languages = ['fr', 'en', 'es', 'de', 'it'];
        
        for (const lang of languages) {
            const response = await fetch(`translations/${lang}.json`);
            translations[lang] = await response.json();
        }
        
        // Initialiser la langue par défaut (français)
        setLanguage(currentLanguage);
    } catch (error) {
        console.error('Erreur lors du chargement des traductions:', error);
    }
}

// Fonction pour changer la langue
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Traduction non disponible pour la langue: ${lang}`);
        return;
    }
    
    currentLanguage = lang;
    
    // Mettre à jour le document HTML
    document.documentElement.lang = translations[lang].meta.lang;
    document.title = translations[lang].meta.title;
    
    // Mettre à jour l'en-tête
    document.getElementById('page-title').textContent = translations[lang].header.title;
    document.getElementById('page-subtitle').textContent = translations[lang].header.subtitle;
    
    // Mettre à jour l'introduction
    document.getElementById('intro-text').textContent = translations[lang].intro.text;
    
    // Mettre à jour le pied de page
    document.getElementById('copyright').textContent = translations[lang].footer.copyright;
    document.getElementById('data-source').textContent = translations[lang].footer.data_source;
    
    // Mettre à jour le sélecteur de langue
    document.querySelector('.language-name').textContent = getLanguageName(lang);
    document.querySelector('.language-name').dataset.lang = lang;
    
    // Mettre à jour la classe active dans le menu déroulant
    document.querySelectorAll('.language-dropdown li').forEach(item => {
        if (item.dataset.lang === lang) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Recharger les restaurants avec la nouvelle langue
    loadRestaurants();
}

// Fonction pour obtenir le nom de la langue
function getLanguageName(lang) {
    const languageNames = {
        'fr': 'Français',
        'en': 'English',
        'es': 'Español',
        'de': 'Deutsch',
        'it': 'Italiano'
    };
    
    return languageNames[lang] || lang;
}

// Fonction pour créer une carte de restaurant
function createRestaurantCard(restaurant) {
    const googleMapsLink = generateGoogleMapsLink(restaurant);
    const translation = translations[currentLanguage];
    
    return `
        <div class="restaurant-card">
            <a href="${googleMapsLink}" target="_blank" class="restaurant-link">
                <div class="restaurant-image" style="background-image: url('${restaurant.image}')">
                    <div class="restaurant-overlay">
                        <h2 class="restaurant-name">${restaurant.nom}</h2>
                    </div>
                </div>
                <div class="restaurant-content">
                    <div class="restaurant-info">
                        <div class="restaurant-address">
                            <i class="fas fa-map-marker-alt"></i> ${restaurant.adresse}
                        </div>
                        <div class="restaurant-rating">
                            <span class="rating-stars">${generateStars(parseFloat(restaurant.note))}</span>
                            <span>${restaurant.note}</span>
                            <span class="restaurant-reviews">(${restaurant.avis} ${translation.ui.reviews})</span>
                        </div>
                    </div>
                    <div class="restaurant-specialite">
                        <i class="fas fa-utensils"></i> <strong>${translation.ui.specialty}:</strong> ${restaurant.specialite}
                    </div>
                    <div class="restaurant-comment">
                        ${restaurant.commentaire}
                    </div>
                    <div class="restaurant-view-maps">
                        <i class="fas fa-external-link-alt"></i> ${translation.ui.view_on_maps}
                    </div>
                </div>
            </a>
        </div>
    `;
}

// Fonction pour charger les restaurants
async function loadRestaurants() {
    try {
        const restaurantsContainer = document.getElementById('restaurants-container');
        restaurantsContainer.innerHTML = ''; // Vider le conteneur
        
        // Utiliser les données de la langue actuelle
        const restaurants = translations[currentLanguage].restaurants;
        
        restaurants.forEach(restaurant => {
            restaurantsContainer.innerHTML += createRestaurantCard(restaurant);
        });
    } catch (error) {
        console.error('Erreur lors du chargement des restaurants:', error);
    }
}

// Initialiser le sélecteur de langue
function initLanguageSelector() {
    const languageSelector = document.querySelector('.language-selector');
    const currentLanguageElement = document.querySelector('.current-language');
    
    // Ouvrir/fermer le menu déroulant
    currentLanguageElement.addEventListener('click', () => {
        languageSelector.classList.toggle('open');
    });
    
    // Fermer le menu déroulant en cliquant ailleurs
    document.addEventListener('click', (event) => {
        if (!languageSelector.contains(event.target)) {
            languageSelector.classList.remove('open');
        }
    });
    
    // Changer de langue en cliquant sur un élément du menu
    document.querySelectorAll('.language-dropdown li').forEach(item => {
        item.addEventListener('click', () => {
            const lang = item.dataset.lang;
            setLanguage(lang);
            languageSelector.classList.remove('open');
        });
    });
}

// Charger les traductions et initialiser la page au chargement
document.addEventListener('DOMContentLoaded', async () => {
    await loadTranslations();
    initLanguageSelector();
});

