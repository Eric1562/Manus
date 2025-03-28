// Version simplifiée du script.js pour résoudre le problème de chargement des restaurants

// Données des restaurants en français directement intégrées dans le script
const restaurantsData = [
  {
    "nom": "Les Casseroles en Folie",
    "adresse": "5 Place de la Chapelle Neuve, Montpellier",
    "note": "4.8",
    "avis": "969",
    "commentaire": "Une expérience culinaire exceptionnelle ! Les galettes sont généreuses et savoureuses, servies dans un cadre chaleureux sur une jolie place. Le personnel est attentionné et le patron très sympathique. Je recommande particulièrement la galette complète et les crêpes au caramel beurre salé. Un incontournable à Montpellier !",
    "specialite": "crêpes et galettes bretonnes",
    "image": "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "nom": "Le Pat'Daniel's",
    "adresse": "31 Rue de la Méditerranée, Montpellier",
    "note": "4.9",
    "avis": "558",
    "commentaire": "Ce restaurant mérite amplement sa note de 4.9 ! La cuisine est raffinée, les produits sont frais et les plats sont préparés avec passion. L'accueil est chaleureux et le service impeccable. J'ai adoré leur spécialité de poisson, la présentation est soignée et les saveurs sont au rendez-vous. Une adresse à ne pas manquer.",
    "specialite": "cuisine au whisky Jack Daniel's",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "nom": "Gyraya",
    "adresse": "22 Pl. du Millénaire, Montpellier",
    "note": "4.8",
    "avis": "753",
    "commentaire": "Une véritable découverte ! Ce restaurant propose des saveurs authentiques et des plats généreux. L'ambiance est conviviale et le service attentif. Les grillades sont parfaitement cuites et les accompagnements délicieux. Le rapport qualité-prix est excellent. Je reviendrai sans hésiter !",
    "specialite": "grillades",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "nom": "Bonobo",
    "adresse": "46 Rue Saint-Guilhem, Montpellier",
    "note": "4.7",
    "avis": "1177",
    "commentaire": "Un petit bijou caché en plein centre de Montpellier ! La cuisine est créative et savoureuse, avec des produits de saison et locaux. Le cadre est cosy et l'ambiance détendue. Le chef propose des associations de saveurs surprenantes qui fonctionnent à merveille. Le service est à la fois professionnel et sympathique. Une adresse à découvrir absolument.",
    "specialite": "cuisine créative et locale",
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "nom": "SMOKY GRILL BURGER",
    "adresse": "32 Rue du Cardinal de Cabrières, Montpellier",
    "note": "4.7",
    "avis": "1121",
    "commentaire": "Les meilleurs burgers de Montpellier, sans aucun doute ! La viande est juteuse, le pain moelleux et les garnitures généreuses. J'ai particulièrement apprécié leur burger signature avec du cheddar affiné et leur sauce maison. Les frites sont croustillantes à souhait. Le personnel est dynamique et l'ambiance décontractée. Un must pour les amateurs de bons burgers !",
    "specialite": "burgers gourmet",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "nom": "La Réserve Rimbaud",
    "adresse": "820 Av. de Saint-Maur, Montpellier",
    "note": "4.7",
    "avis": "1029",
    "commentaire": "Une expérience gastronomique d'exception ! Situé dans un cadre idyllique au bord de l'eau, ce restaurant propose une cuisine raffinée qui met en valeur les produits de la mer. Le chef est talentueux et créatif. Le service est élégant et attentionné. Les desserts sont de véritables œuvres d'art. Parfait pour un dîner romantique ou une occasion spéciale.",
    "specialite": "cuisine gastronomique et fruits de mer",
    "image": "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "nom": "OLYA CAFÉ",
    "adresse": "6 Rue Loys, Montpellier",
    "note": "4.8",
    "avis": "616",
    "commentaire": "Un café-restaurant qui sort du lot ! L'ambiance est chaleureuse et le décor soigné. Les plats sont délicieux et préparés avec des produits frais. J'ai adoré leur brunch du week-end avec des œufs parfaitement cuisinés et des pâtisseries maison. Le café est excellent et les boissons originales. Le personnel est souriant et aux petits soins. Une adresse à fréquenter régulièrement.",
    "specialite": "brunch et pâtisseries",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "nom": "Umami - La cinquième saveur",
    "adresse": "15 Rue Jean Jacques Rousseau, Montpellier",
    "note": "4.8",
    "avis": "600",
    "commentaire": "Une explosion de saveurs en bouche ! Ce restaurant propose une cuisine fusion inventive qui éveille les papilles. Chaque plat est un voyage culinaire, avec des associations audacieuses mais toujours équilibrées. La présentation est soignée et le cadre élégant. Le service est professionnel et les conseils sur les vins pertinents. Une belle découverte pour les amateurs de gastronomie créative.",
    "specialite": "cuisine fusion",
    "image": "https://images.unsplash.com/photo-1535140728325-a4d3707eee61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "nom": "Le Bistrok Montpellier",
    "adresse": "47 Rue de l'Aiguillerie, Montpellier",
    "note": "4.9",
    "avis": "415",
    "commentaire": "Un bistrot moderne qui propose une cuisine de qualité ! Les plats sont généreux et savoureux, élaborés avec des produits frais et de saison. L'ambiance est conviviale et le service attentif. J'ai particulièrement apprécié leur plat du jour et leur carte des vins bien fournie. Les desserts maison sont un régal. Un excellent rapport qualité-prix en plein centre de Montpellier.",
    "specialite": "cuisine bistrot moderne",
    "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "nom": "Blackeys",
    "adresse": "17 Rue Saint-Firmin, Montpellier",
    "note": "4.9",
    "avis": "382",
    "commentaire": "Une pépite culinaire à Montpellier ! Ce restaurant intimiste propose une cuisine créative et savoureuse. Le chef est passionné et cela se ressent dans chaque assiette. Le menu change régulièrement selon les produits de saison. L'accueil est chaleureux et le service personnalisé. Les desserts sont divins. Une adresse confidentielle qui mérite d'être connue pour les amateurs de bonne cuisine.",
    "specialite": "cuisine créative et saisonnière",
    "image": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

// Textes de l'interface en français
const uiText = {
  "view_on_maps": "Voir sur Google Maps",
  "reviews": "avis",
  "specialty": "Spécialité"
};

// Fonction pour générer les étoiles de notation
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

// Fonction pour créer une carte de restaurant
function createRestaurantCard(restaurant) {
    const googleMapsLink = generateGoogleMapsLink(restaurant);
    
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
                            <span class="restaurant-reviews">(${restaurant.avis} ${uiText.reviews})</span>
                        </div>
                    </div>
                    <div class="restaurant-specialite">
                        <i class="fas fa-utensils"></i> <strong>${uiText.specialty}:</strong> ${restaurant.specialite}
                    </div>
                    <div class="restaurant-comment">
                        ${restaurant.commentaire}
                    </div>
                    <div class="restaurant-view-maps">
                        <i class="fas fa-external-link-alt"></i> ${uiText.view_on_maps}
                    </div>
                </div>
            </a>
        </div>
    `;
}

// Fonction pour charger les restaurants
function loadRestaurants() {
    try {
        const restaurantsContainer = document.getElementById('restaurants-container');
        restaurantsContainer.innerHTML = ''; // Vider le conteneur
        
        restaurantsData.forEach(restaurant => {
            restaurantsContainer.innerHTML += createRestaurantCard(restaurant);
        });
    } catch (error) {
        console.error('Erreur lors du chargement des restaurants:', error);
    }
}

// Initialiser le sélecteur de langue (version simplifiée)
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
    
    // Pour l'instant, le changement de langue est désactivé
    document.querySelectorAll('.language-dropdown li').forEach(item => {
        item.addEventListener('click', () => {
            alert("La fonctionnalité multilingue sera bientôt disponible. Pour le moment, le site est uniquement en français.");
            languageSelector.classList.remove('open');
        });
    });
}

// Charger les restaurants et initialiser la page au chargement
document.addEventListener('DOMContentLoaded', () => {
    loadRestaurants();
    initLanguageSelector();
});
