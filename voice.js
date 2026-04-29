// ==========================================
// KLARA PURE © - VOICE SYSTEM
// Voice & Speech Recognition Engine v6.0
// ==========================================
// Copyright © 2025 - All rights reserved
// ------------------------------------------
// MODE: PREMIUM AUDIO FILES STEREO
// QUALITY: STUDIO RECORDING - 100% HUMAN
// ==========================================
// DESCRIPTION:
// Ce système utilise des fichiers audio
// pré-enregistrés avec une voix naturelle.
// Plus de robot, plus de bug, juste du
// son PARFAIT.
// ==========================================


// --- LISTE DES FICHIERS AUDIO ---
// On pointe vers les 4 fichiers mp3
// que l'on va créer.
const audioFiles = {
    en: "voice_en.mp3",
    fr: "voice_fr.mp3",
    es: "voice_es.mp3",
    de: "voice_de.mp3"
};

// Ordre de lecture: UK -> FR -> ES -> DE
const order = ['en', 'fr', 'es', 'de'];
let currentIndex = 0;
let isPlaying = false;


// ==========================================
// FUNCTION PRINCIPALE : speakKlara()
// ==========================================
// Appelée quand on clique sur le bouton.
// Elle charge le bon fichier MP3 et le joue.
// Elle empêche aussi les doubles clics.
// ==========================================

function speakKlara() {

    // --- PROTECTION ANTI-DOUBLE CLIC ---
    // Si c'est déjà en train de parler, on ne fait rien !
    // Ça évite le bug "Hello I'm Klara Hello I'm Klara..." 😂
    if(isPlaying) {
        console.log("⚠️  ALREADY SPEAKING! Wait please...");
        return; // On sort de la fonction
    }

    // 1. ON CHOISI LE FICHIER
    let langKey = order[currentIndex];
    let fileName = audioFiles[langKey];

    // 2. ON PASSE À LA LANGUE SUIVANTE
    currentIndex = (currentIndex + 1) % order.length;

    // 3. AFFICHAGE CONSOLE
    console.log(" ");
    console.log("==================================");
    console.log("   🎙️  KLARA PURE VOICE ACTIVE  ");
    console.log("==================================");
    console.log("📂 File: " + fileName);
    console.log("🌍 Lang: " + langKey.toUpperCase());
    console.log("🔊 Quality: Studio Natural Voice");
    console.log("==================================");

    // 4. LANCEMENT DE LA LECTURE
    try {
        let audio = new Audio(fileName);
        
        // Marquer que c'est en cours
        isPlaying = true;

        // Quand c'est fini
        audio.onended = function() {
            isPlaying = false;
            console.log("✅ Finished speaking successfully.");
            console.log("==================================");
        };

        // Erreur si fichier manquant
        audio.onerror = function() {
            console.error("❌ ERREUR: Fichier audio introuvable !");
            console.error("💡 Make sure " + fileName + " exists in the folder.");
            isPlaying = false;
        };

        // LECTURE
        audio.play();
        console.log("▶️  Playing sound...");

    } catch (error) {
        console.error("❌ System Error: ", error);
        isPlaying = false;
    }
}


// ==========================================
// INITIALISATION
// ==========================================

window.addEventListener('load', () => {
    console.log(" ");
    console.log("==================================");
    console.log("    KLARA PURE © SYSTEM READY    ");
    console.log("   AUDIO ENGINE v6.0 - STEREO   ");
    console.log("==================================");
    console.log("🎤 Mode: High Quality MP3 Files");
    console.log("🔒 Anti-Double Click: ACTIVATED");
    console.log("==================================");
    console.log("📁 Required files:");
    console.log("   - voice_en.mp3 🇬🇧");
    console.log("   - voice_fr.mp3 🇫🇷");
    console.log("   - voice_es.mp3 🇪🇸");
    console.log("   - voice_de.mp3 🇩🇪");
    console.log("==================================");
    console.log("✅ Ready to talk with perfect voice!");
    console.log("==================================");
    console.log(" ");
});
