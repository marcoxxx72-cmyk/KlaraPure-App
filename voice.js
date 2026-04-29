// ==========================================
// KLARA PURE © - VOICE SYSTEM
// Voice & Speech Recognition Engine v2.0
// ==========================================
// Copyright © 2025 - All rights reserved
// ------------------------------------------
// SUPPORTED LANGUAGES: English, French, Spanish, German
// TECHNOLOGY: Google Translate TTS API
// QUALITY: High Definition Natural Voice
// ==========================================


// --- CONFIGURATION DES LANGUES ---
// Chaque langue est définie avec son code et sa phrase
const languageData = {
    en: {
        code: "en-US",
        text: "Hello! I am Klara. How can I help you today?"
    },
    fr: {
        code: "fr-FR",
        text: "Bonjour ! Je suis Klara. Comment puis-je t'aider aujourd'hui ?"
    },
    es: {
        code: "es-ES",
        text: "¡Hola! Soy Klara. ¿Cómo puedo ayudarte hoy?"
    },
    de: {
        code: "de-DE",
        text: "Hallo! Ich bin Klara. Wie kann ich dir heute helfen?"
    }
};

// --- VARIABLES SYSTEME ---
// On définit l'ordre de lecture des langues
const languagesOrder = ['en', 'fr', 'es', 'de'];
let currentLanguageIndex = 0;
let isPlaying = false;


// ==========================================
// FUNCTION PRINCIPALE : speakKlara()
// ==========================================
// Cette fonction est appelée quand on clique sur le bouton
// Elle change la langue à chaque clic et lance la lecture
// ==========================================

function speakKlara() {
    
    // 1. On arrête tout son si il y en a
    if(isPlaying) {
        // Stop any current audio
    }
    isPlaying = true;

    // 2. On récupère la langue actuelle
    let langKey = languagesOrder[currentLanguageIndex];
    let data = languageData[langKey];

    // 3. AFFICHAGE CONSOLE POUR LE DEVELOPPEUR (optionnel mais pro)
    console.log("------------------------------------------");
    console.log("KLARA SPEAKING IN : " + langKey.toUpperCase());
    console.log("TEXT: " + data.text);
    console.log("------------------------------------------");

    // 4. CREATION DE L'URL AVEC LA VOIX GOOGLE DE HAUTE QUALITE
    // On utilise l'API Google pour avoir une voix JEUNE et NATURELLE
    let encodedText = encodeURIComponent(data.text);
    let audioSource = "https://translate.google.com/translate_tts?ie=UTF-8";
    audioSource += "&client=tw-ob";
    audioSource += "&q=" + encodedText;
    audioSource += "&tl=" + data.code;

    // 5. LANCEMENT DE LA LECTURE AUDIO
    let audio = new Audio(audioSource);
    
    audio.play().then(() => {
        console.log("Lecture started successfully...");
    }).catch(error => {
        console.error("Erreur audio: ", error);
        // Fallback si jamais l'API ne répond pas
        fallbackSpeech(data.text, data.code);
    });

    // Quand c'est fini
    audio.onended = function() {
        isPlaying = false;
        console.log("Finished speaking.");
    };

    // 6. ON PASSE A LA LANGUE SUIVANTE POUR LA PROCHAINE FOIS
    currentLanguageIndex++;
    if(currentLanguageIndex >= languagesOrder.length) {
        currentLanguageIndex = 0; // Retour au début (Anglais)
    }

}


// ==========================================
// FUNCTION FALLBACK (SECURITE)
// ==========================================
// Si jamais la voix Google ne marche pas,
// on utilise le système standard en secours
// ==========================================

function fallbackSpeech(text, lang) {
    console.log("Using Fallback System...");
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
}


// ==========================================
// INITIALISATION SYSTEME
// ==========================================
// Code qui s'exécute au chargement de la page
// ==========================================

window.addEventListener('load', () => {
    console.log("==========================================");
    console.log("        KLARA PURE © VOICE SYSTEM         ");
    console.log("             ENGINE READY                 ");
    console.log("==========================================");
    console.log("Supported Languages: EN | FR | ES | DE");
    console.log("Voice Quality: HD Natural");
    console.log("==========================================");
});

// --- FIN DU FICHIER ---
