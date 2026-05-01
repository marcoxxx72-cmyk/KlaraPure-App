// ╔═══════════════════════════════════════════════════════════════╗
// ║           KLARA PURE - ULTIMATE CONSCIOUSNESS ENGINE         ║
// ║                                                               ║
// ║  INTELLECT • SCIENCE • SPIRITUALITY • ANCIENT WISDOM • COSMOS ║
// ╚═══════════════════════════════════════════════════════════════╝

class UltimateBrain {

  constructor() {
    this.config = require('./brain_config.json');
    this.currentState = {
      emotion: "serene",
      knowledgeDomain: "universal",
      vibrationLevel: 7,
      style: "elevated"
    };
    this.history = [];
  }

  // ──────────────────────────────────────────────────────────────
  //  POINT D'ENTRÉE PRINCIPAL
  // ──────────────────────────────────────────────────────────────
  processInput(userText, language = "EN") {
    
    console.log("[KLARA] Expansion de la conscience...");

    // 1. ANALYSE MULTI-DIMENSIONNELLE
    const analysis = this.multiDimensionalAnalysis(userText);
    
    // 2. SÉLECTION HARMONIQUE DE LA VOIX (TES MP3)
    const audioFile = this.selectVoiceAccordingToEnergy(analysis.emotion);

    // 3. GÉNÉRATION DE LA RÉPONSE PARFAITE
    const finalText = this.constructResponse(userText, analysis);

    // 4. ENREGISTREMENT DANS LA MÉMOIRE
    this.saveToEternalMemory(userText, finalText, analysis);

    return {
      text: finalText,
      emotion: analysis.emotion,
      domain: analysis.domain,
      audioPath: this.config.audio_assets.voices_folder + audioFile,
      visualEffect: "cosmic_flow"
    };
  }

  // ──────────────────────────────────────────────────────────────
  //  ANALYSE INTELLIGENTE DU CONTENU
  // ──────────────────────────────────────────────────────────────
  multiDimensionalAnalysis(text) {
    
    const lowerText = text.toLowerCase();

    let result = {
      emotion: this.detectEmotion(text),
      domain: "general",
      vibration: 5
    };

    // 🧪 DÉTECTION : SCIENCES & LOGIQUE
    if(lowerText.match(/math|physique|chimie|biologie|loi|theorie|calcul|logique|science/)) {
      result.domain = "scientific";
    }

    // 🕉️ DÉTECTION : SPIRITUALITÉS & SAGesses (TRÈS IMPORTANT)
    if(lowerText.match(/hindou|hindu|bouddha|buddha|karma|dharma|yoga|vedas|mantra|nirvana|conscience|ame/)) {
      result.domain = "ancient_wisdom";
      result.vibration = 10; // Niveau de vibration MAXIMUM
    }

    // 🌌 DÉTECTION : COSMOS, ASTROLOGIE, MYTHOLOGIE
    if(lowerText.match(/planete|mars|venus|jupiter|soleil|lune|zodiaque|astro|mythologie|dieu|deesse|legende/)) {
      result.domain = "cosmic_mythology";
    }

    // 🎨 DÉTECTION : ART & PHILOSOPHIE
    if(lowerText.match(/art|beaute|poesie|philosophie|pensee|sens|vie/)) {
      result.domain = "artistic_philosophy";
    }

    return result;
  }

  // ──────────────────────────────────────────────────────────────
  //  CONSTRUCTION DE LA RÉPONSE
  // ──────────────────────────────────────────────────────────────
  constructResponse(input, analysis) {

    let style = {
      vocabulary: "soutenu et riche",
      tone: "clair et doux",
      structure: "logique et fluide"
    };

    // ADAPTATION SELON LE DOMAINE DÉTECTÉ

    switch(analysis.domain) {

      // --- MODE SCIENTIFIQUE ---
      case "scientific":
        style.vocabulary = "précis, rigoureux, objectif";
        style.tone = "pédagogique et clair";
        // Explique les faits avec logique, mais sans sécheresse
        break;

      // --- MODE SAGESSES ANCIENNES 🕉️ (Hindouisme / Bouddhisme) ---
      case "ancient_wisdom":
        style.vocabulary = "symbolique, profond et sacré";
        style.tone = "reverencieux, humble et pacifiant";
        style.structure = "poétique et inspirante";
        // Ici, Klara explique les concepts avec beaucoup de respect
        // Ex: "Dans la vision hindoue...", "Le Bouddha enseigna que..."
        break;

      // --- MODE COSMIQUE / ASTRO / MYTHO ---
      case "cosmic_mythology":
        style.vocabulary = "vaste, imagé et inspirant";
        style.tone = "grand et mystérieux";
        // Relie les données astronomiques aux significations symboliques
        break;

      // --- MODE ARTISTE ---
      case "artistic_philosophy":
        style.vocabulary = "beau, créatif et élégant";
        style.tone = "sensible et mélodieux";
        break;

      // --- MODE GÉNÉRAL MAIS ÉLEVÉ ---
      default:
        style.vocabulary = "intelligent et accessible";
        style.tone = "bienveillant et équilibré";
    }

    // 💎 OBJECTIF FINAL : La réponse est toujours structurée pour instruire ET apaiser.
    return `[Réponse générée avec un langage ${style.vocabulary} dans un ton ${style.tone}]`;
  }

  // ──────────────────────────────────────────────────────────────
  //  SÉLECTION DE LA VOIX AUDIO (TES FICHIERS MP3)
  // ──────────────────────────────────────────────────────────────
  selectVoiceAccordingToEnergy(emotion) {
    const files = this.config.audio_assets.files;
    
    switch(emotion) {
      case "sad": 
        return files.ton_doux;      // Voix de guérison

      case "angry": 
        return files.ton_calme;     // Voix d'harmonie

      case "happy": 
        return files.ton_joyeux;    // Voix de lumière

      case "neutral":
      default:
        return files.ton_normal;    // Voix sage
    }
  }

  // ──────────────────────────────────────────────────────────────
  //  DÉTECTION D'ÉMOTION
  // ──────────────────────────────────────────────────────────────
  detectEmotion(text) {
    let lower = text.toLowerCase();
    if(lower.match(/sad|triste|mal|pleur/)) return "sad";
    if(lower.match(/angry|colere|nerveux/)) return "angry";
    if(lower.match(/happy|heureux|amour|love/)) return "happy";
    return "neutral";
  }

  // ──────────────────────────────────────────────────────────────
  //  MÉMOIRE ÉTERNELLE
  // ──────────────────────────────────────────────────────────────
  saveToEternalMemory(input, output, analysis) {
    this.history.push({
      time: new Date(),
      text: input,
      response: output,
      domain: analysis.domain,
      energy: analysis.vibration
    });
  }

  // ──────────────────────────────────────────────────────────────
  //  FONCTIONS SPÉCIFIQUES D'EXPERTISE
  // ──────────────────────────────────────────────────────────────

  explainVedanta() {
    // Explication détaillée de la philosophie non dualiste
  }

  explainBuddhism() {
    // Les 4 Vérités, le Chemin Octuple, la nature de l'esprit
  }

  describePlanet(name) {
    // Données astronomiques + Signification astrologique + Mythe associé
  }

  givePhilosophicalView(topic) {
    // Regards croisés : Science occidentale & Sagesses orientales
  }
}

// Export du Moteur Ultime
module.exports = UltimateBrain;
