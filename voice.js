// ==========================================
// KLARA PURE © - VOICE SYSTEM
// Voice & Speech Recognition
// ==========================================

class KlaraVoice {
    constructor() {
        this.synth = window.speechSynthesis;
        this.recognition = null;
        this.isListening = false;
        
        // On prépare la voix pour les 4 langues
        this.voices = {
            en: null,
            fr: null,
            es: null,
            de: null
        };

        this.loadVoices();
    }

    // Chargement des voix disponibles sur le téléphone/ordinateur
    loadVoices() {
        const availableVoices = this.synth.getVoices();
        
        // Trouve la meilleure voix pour chaque langue
        availableVoices.forEach(voice => {
            if (voice.lang.includes('en') && !this.voices.en) this.voices.en = voice;
            if (voice.lang.includes('fr') && !this.voices.fr) this.voices.fr = voice;
            if (voice.lang.includes('es') && !this.voices.es) this.voices.es = voice;
            if (voice.lang.includes('de') && !this.voices.de) this.voices.de = voice;
        });
    }

    // 🗣️ FAIRE PARLER KLARA
    speak(text, lang = 'en') {
        // Arrête tout ce qui est en cours
        this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        
        // Choisir la bonne voix
        utterance.voice = this.voices[lang] || this.voices.en;
        
        // Réglage PREMIUM : Voix douce et lente
        utterance.volume = 1;     // Volume max
        utterance.rate = 0.9;     // Vitesse légèrement lente pour être calme
        utterance.pitch = 1;      // Tonalité naturelle

        console.log(`🗣️ Klara speaks (${lang}): "${text}"`);
        this.synth.speak(utterance);
    }

    // 🎙️ ECOUTER L'UTILISATEUR
    startListening(callback, lang = 'en-US') {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert("Voice recognition not supported on this device 😢");
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        this.recognition = new SpeechRecognition();
        this.recognition.lang = lang;
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;

        this.isListening = true;
        console.log("🎙️ Listening...");

        this.recognition.onresult = (event) => {
            const speechText = event.results[0][0].transcript;
            console.log(`👂 Heard: "${speechText}"`);
            callback(speechText); // On renvoie le texte à l'app
        };

        this.recognition.onend = () => {
            this.isListening = false;
            console.log("🛑 Stopped listening");
        };

        this.recognition.start();
    }

    stopListening() {
        if (this.recognition) {
            this.recognition.stop();
            this.isListening = false;
        }
    }
}

// Initialisation Globale
const klaraVoice = new KlaraVoice();

// Quand les voix sont chargées
window.speechSynthesis.onvoiceschanged = () => {
    klaraVoice.loadVoices();
    console.log("✅ Voice system ready in 4 languages!");
};
