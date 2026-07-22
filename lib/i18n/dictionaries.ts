export type Locale = "nl" | "fr"

export const locales: Locale[] = ["nl", "fr"]
export const defaultLocale: Locale = "nl"

export const localeNames: Record<Locale, string> = {
  nl: "Nederlands",
  fr: "Français",
}

export const localeLabels: Record<Locale, string> = {
  nl: "NL",
  fr: "FR",
}

// Maps our app locale to an Intl locale for number/currency formatting
export const intlLocales: Record<Locale, string> = {
  nl: "nl-BE",
  fr: "fr-BE",
}

type Dictionary = {
  header: {
    nav: {
      diensten: string
      werkwijze: string
      milieuImpact: string
      calculator: string
      contact: string
    }
    cta: string
    toggleMenu: string
    languageLabel: string
  }
  hero: {
    badge: string
    headlineStart: string
    headlineHighlight: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
    trust: {
      separation: string
      separationLabel: string
      eco: string
      ecoLabel: string
      b2b: string
      b2bLabel: string
    }
  }
  services: {
    eyebrow: string
    title: string
    description: string
    items: { title: string; description: string }[]
  }
  process: {
    eyebrow: string
    title: string
    description: string
    steps: { number: string; title: string; description: string }[]
    noteStrong: string
    note: string
  }
  stats: {
    eyebrow: string
    title: string
    description: string
    items: { label: string; description: string }[]
  }
  calculator: {
    eyebrow: string
    title: string
    description: string
    cardTitle: string
    cardDescription: string
    amountLabel: string
    amountPlaceholder: string
    unitLabel: string
    gram: string
    kilogram: string
    totalWeight: string
    estimatedCopper: string
    estimatedValue: string
    disclaimerTitle: string
    disclaimer: (price: number) => string
    cta: string
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    formTitle: string
    formDescription: string
    companyLabel: string
    companyPlaceholder: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submit: string
    submitting: string
    genericError: string
    whyTitle: string
    reasons: { title: string; description: string }[]
    detailsTitle: string
    info: {
      companyLabel: string
      companyValue: string
      addressLabel: string
      addressValue: string
      phoneLabel: string
      hoursLabel: string
      hoursValue: string
      emailLabel: string
    }
    mapTitle: string
  }
  footer: {
    description: string
    tagline: string
    dienstenTitle: string
    diensten: string[]
    bedrijfTitle: string
    bedrijf: string[]
    toolsTitle: string
    tools: string[]
    rights: string
    madeWith: string
    privacy: string
    terms: string
    cookies: string
  }
  cookieConsent: {
    title: string
    description: string
    accept: string
    decline: string
    policyLink: string
  }
  bedankt: {
    title: string
    subtitle: string
    body: string
    directContact: string
    emailLabel: string
    backHome: string
    newMessage: string
    address: string
  }
}

export const dictionaries: Record<Locale, Dictionary> = {
  nl: {
    header: {
      nav: {
        diensten: "Diensten",
        werkwijze: "Werkwijze",
        milieuImpact: "Milieu-impact",
        calculator: "Kopercalculator",
        contact: "Contact",
      },
      cta: "Vraag een offerte aan",
      toggleMenu: "Menu openen",
      languageLabel: "Taal",
    },
    hero: {
      badge: "Duurzame kabelrecycling sinds 2015",
      headlineStart: "Samen bouwen aan een",
      headlineHighlight: "circulaire toekomst",
      subheadline:
        "Recy-Kab recycleert uw kabel- en koperoverschot tot zuiver koper en kunststoffen. Met ons milieuvriendelijk productieproces scheiden wij kunststoffen volledig van het koper.",
      ctaPrimary: "Vraag een offerte aan",
      ctaSecondary: "Ontdek onze diensten",
      trust: {
        separation: "100%",
        separationLabel: "Materialenscheiding",
        eco: "Eco",
        ecoLabel: "Milieuvriendelijk proces",
        b2b: "B2B",
        b2bLabel: "Zakelijke oplossingen",
      },
    },
    services: {
      eyebrow: "Onze Diensten",
      title: "Gespecialiseerd in diverse recyclingstromen",
      description:
        "Van kabeloverschot tot zuivere grondstoffen. Wij bieden complete recyclingoplossingen voor koperhoudende materialen, aluminium en inox.",
      items: [
        {
          title: "Kabelrecycling",
          description:
            "Professionele verwerking van alle soorten kabeloverschot tot zuivere grondstoffen. Van dunne data-kabels tot zware energiekabels.",
        },
        {
          title: "Koperverwerking",
          description:
            "Extractie van hoogwaardig koper uit kabels en koperhoudende elementen. Ons granulaat heeft een zuiverheid van 99%+.",
        },
        {
          title: "Aluminium Recycling",
          description:
            "Duurzame verwerking van aluminiumoverschot. Wij sorteren en verwerken aluminium tot herbruikbare grondstoffen.",
        },
        {
          title: "Inox Verwerking",
          description:
            "Recycling van roestvrij staal (inox) uit industriële toepassingen. Milieuvriendelijk en economisch verantwoord.",
        },
        {
          title: "Kunststof Scheiding",
          description:
            "Geavanceerde scheiding van verschillende kunststoffen. 100% scheiding van kunststof en metaal.",
        },
        {
          title: "Granulaat Productie",
          description:
            "Productie van hoogwaardig koper- en kunstofgranulaat (Ø 1-10mm) voor hergebruik in nieuwe producten.",
        },
      ],
    },
    process: {
      eyebrow: "Onze Werkwijze",
      title: "Van overschot naar grondstof in 4 stappen",
      description:
        "Ons zelf ontwikkeld en milieuvriendelijk productieproces garandeert een volledige scheiding van kunststoffen en koper.",
      steps: [
        {
          number: "01",
          title: "Levering & Opslag",
          description:
            "U levert uw kabeloverschot aan bij onze locatie of wij zorgen voor ophaling. Het materiaal wordt veilig opgeslagen voor verwerking.",
        },
        {
          number: "02",
          title: "Manuele Sortering",
          description:
            "Onze experts sorteren de kabels handmatig. Kabels met loodisolatie, ijzerresten en andere onzuiverheden worden gescheiden.",
        },
        {
          number: "03",
          title: "Machinale Verwerking",
          description:
            "De gesorteerde kabels worden verwerkt door onze gespecialiseerde machines tot kunstof- en kopergranulaat (Ø 1-10mm).",
        },
        {
          number: "04",
          title: "Afgewerkt Product",
          description:
            "Het zuivere koper- en kunststofgranulaat wordt aangeboden aan derden voor de aanmaak van nieuwe producten.",
        },
      ],
      noteStrong: "Let op:",
      note: "Kabels met loodisolatie, ijzerresten en andere onzuiverheden (metalen, hout, puin, kunststof, etc.) kunnen niet behandeld worden in ons productieproces. Wij adviseren u graag over de mogelijkheden.",
    },
    stats: {
      eyebrow: "Onze Impact",
      title: "Onze bijdrage aan een duurzame wereld",
      description:
        "Wij hebben het belang van duurzame ontwikkeling begrepen en zijn bereid hiertoe bij te dragen in ons vakgebied, geleidelijk en binnen onze mogelijkheden.",
      items: [
        { label: "Ton materiaal gerecycled", description: "Sinds onze oprichting" },
        { label: "Ton CO₂ bespaard", description: "Door circulaire aanpak" },
        { label: "Jaren ervaring", description: "In kabelrecycling" },
        { label: "Materiaal hergebruikt", description: "Minimale reststroom" },
      ],
    },
    calculator: {
      eyebrow: "Kopercalculator",
      title: "Bereken de waarde van uw koperkabels",
      description:
        "Ontdek direct hoeveel uw kabeloverschot waard is. Vul de hoeveelheid in en krijg een indicatieve schatting van de opbrengst.",
      cardTitle: "Interactieve Kopercalculator",
      cardDescription: "Voer de hoeveelheid kabeloverschot in om een schatting te krijgen",
      amountLabel: "Hoeveelheid kabeloverschot",
      amountPlaceholder: "Bijv. 100",
      unitLabel: "Eenheid",
      gram: "Gram (g)",
      kilogram: "Kilogram (kg)",
      totalWeight: "Totaal gewicht",
      estimatedCopper: "Geschat kopergehalte (~65%)",
      estimatedValue: "Geschatte opbrengst",
      disclaimerTitle: "Belangrijke informatie",
      disclaimer: (price: number) =>
        `Deze calculator geeft een indicatieve schatting op basis van een gemiddeld kopergehalte van 65% en de huidige marktprijs (€${price}/kg). De werkelijke waarde kan variëren afhankelijk van het type kabel, zuiverheid en marktschommelingen. Neem contact met ons op voor een exacte offerte.`,
      cta: "Vraag een exacte offerte aan",
    },
    contact: {
      eyebrow: "Contact",
      title: "Neem contact met ons op",
      description:
        "Heeft u vragen over onze diensten of wilt u een offerte aanvragen? Vul het formulier in en wij nemen zo snel mogelijk contact met u op.",
      formTitle: "Offerte aanvragen",
      formDescription: "Vul onderstaand formulier in en wij nemen zo snel mogelijk contact met u op.",
      companyLabel: "Bedrijfsnaam *",
      companyPlaceholder: "Uw bedrijfsnaam",
      nameLabel: "Contactpersoon *",
      namePlaceholder: "Uw naam",
      emailLabel: "E-mailadres *",
      emailPlaceholder: "email@bedrijf.be",
      phoneLabel: "Telefoonnummer",
      phonePlaceholder: "+32 ...",
      messageLabel: "Uw bericht *",
      messagePlaceholder: "Beschrijf uw aanvraag (type materiaal, geschatte hoeveelheid, etc.)",
      submit: "Offerte aanvragen",
      submitting: "Verzenden...",
      genericError: "Er is iets misgegaan. Probeer het later opnieuw.",
      whyTitle: "Waarom kiezen voor Recy-Kab?",
      reasons: [
        { title: "Snelle offertes", description: "Binnen 24 uur een prijsvoorstel op maat" },
        { title: "Volledig gecertificeerd", description: "VLAREMA & Europese milieunormen" },
        { title: "Ophalen in heel België", description: "Ook voor kleinere hoeveelheden" },
        { title: "Transparante prijzen", description: "Geen verrassingen achteraf" },
      ],
      detailsTitle: "Contactgegevens",
      info: {
        companyLabel: "Bedrijfsnaam",
        companyValue: "Recy-Kab BVBA",
        addressLabel: "Adres",
        addressValue: "Maastrichtersteenweg 523 bus 1, 3700 Tongeren, België",
        phoneLabel: "Telefoon",
        hoursLabel: "Openingsuren",
        hoursValue: "Ma - Vr: 09:00 - 17:00",
        emailLabel: "E-mail",
      },
      mapTitle: "Recy-Kab locatie",
    },
    footer: {
      description:
        "Specialist in het milieuvriendelijk recyclen van kabels, koperhoudende elementen, inox en aluminium.",
      tagline: "Duurzaam ondernemen",
      dienstenTitle: "Diensten",
      diensten: ["Kabelrecycling", "Koperverwerking", "Aluminium Recycling", "Inox Verwerking"],
      bedrijfTitle: "Bedrijf",
      bedrijf: ["Over ons", "Werkwijze", "Milieu-impact", "Contact"],
      toolsTitle: "Tools",
      tools: ["Kopercalculator", "Offerte aanvragen"],
      rights: "Alle rechten voorbehouden.",
      madeWith: "Made with ❤️ by",
      privacy: "Privacybeleid",
      terms: "Algemene voorwaarden",
      cookies: "Cookiebeleid",
    },
    cookieConsent: {
      title: "Wij respecteren uw privacy",
      description:
        "Wij gebruiken cookies om uw ervaring te verbeteren, websiteverkeer te analyseren en onze diensten te optimaliseren. Door op \u201cAccepteren\u201d te klikken, stemt u in met het gebruik van cookies.",
      accept: "Accepteren",
      decline: "Weigeren",
      policyLink: "Meer info in ons cookiebeleid",
    },
    bedankt: {
      title: "Bedankt voor uw aanvraag!",
      subtitle: "We hebben uw bericht goed ontvangen.",
      body: "Ons team bekijkt uw offerte aanvraag zo snel mogelijk. U mag binnen 1 werkdag een reactie van ons verwachten.",
      directContact: "Direct contact?",
      emailLabel: "E-mail",
      backHome: "Terug naar home",
      newMessage: "Nieuw bericht versturen",
      address: "Recy-Kab BVBA • Maastrichtersteenweg 523 bus 1, 3700 Tongeren",
    },
  },
  fr: {
    header: {
      nav: {
        diensten: "Services",
        werkwijze: "Méthode",
        milieuImpact: "Impact environnemental",
        calculator: "Calculateur de cuivre",
        contact: "Contact",
      },
      cta: "Demandez un devis",
      toggleMenu: "Ouvrir le menu",
      languageLabel: "Langue",
    },
    hero: {
      badge: "Recyclage durable de câbles depuis 2015",
      headlineStart: "Construisons ensemble un",
      headlineHighlight: "avenir circulaire",
      subheadline:
        "Recy-Kab recycle vos surplus de câbles et de cuivre en cuivre pur et en plastiques. Grâce à notre procédé de production respectueux de l'environnement, nous séparons entièrement les plastiques du cuivre.",
      ctaPrimary: "Demandez un devis",
      ctaSecondary: "Découvrez nos services",
      trust: {
        separation: "100%",
        separationLabel: "Séparation des matériaux",
        eco: "Éco",
        ecoLabel: "Procédé écologique",
        b2b: "B2B",
        b2bLabel: "Solutions professionnelles",
      },
    },
    services: {
      eyebrow: "Nos Services",
      title: "Spécialisés dans divers flux de recyclage",
      description:
        "Du surplus de câbles aux matières premières pures. Nous proposons des solutions de recyclage complètes pour les matériaux cuivreux, l'aluminium et l'inox.",
      items: [
        {
          title: "Recyclage de câbles",
          description:
            "Traitement professionnel de tous types de surplus de câbles en matières premières pures. Des câbles de données fins aux câbles électriques lourds.",
        },
        {
          title: "Traitement du cuivre",
          description:
            "Extraction de cuivre de haute qualité à partir de câbles et d'éléments cuivreux. Notre granulat présente une pureté de 99 % et plus.",
        },
        {
          title: "Recyclage de l'aluminium",
          description:
            "Traitement durable des surplus d'aluminium. Nous trions et transformons l'aluminium en matières premières réutilisables.",
        },
        {
          title: "Traitement de l'inox",
          description:
            "Recyclage de l'acier inoxydable (inox) issu d'applications industrielles. Écologique et économiquement responsable.",
        },
        {
          title: "Séparation des plastiques",
          description:
            "Séparation avancée des différents plastiques. Séparation à 100 % du plastique et du métal.",
        },
        {
          title: "Production de granulat",
          description:
            "Production de granulat de cuivre et de plastique de haute qualité (Ø 1-10 mm) destiné à la réutilisation dans de nouveaux produits.",
        },
      ],
    },
    process: {
      eyebrow: "Notre Méthode",
      title: "Du surplus à la matière première en 4 étapes",
      description:
        "Notre procédé de production, développé en interne et respectueux de l'environnement, garantit une séparation complète des plastiques et du cuivre.",
      steps: [
        {
          number: "01",
          title: "Livraison & Stockage",
          description:
            "Vous livrez votre surplus de câbles sur notre site ou nous nous chargeons de l'enlèvement. Le matériau est stocké en toute sécurité avant traitement.",
        },
        {
          number: "02",
          title: "Tri manuel",
          description:
            "Nos experts trient les câbles à la main. Les câbles à isolation en plomb, les résidus de fer et autres impuretés sont séparés.",
        },
        {
          number: "03",
          title: "Traitement mécanique",
          description:
            "Les câbles triés sont traités par nos machines spécialisées pour produire du granulat de plastique et de cuivre (Ø 1-10 mm).",
        },
        {
          number: "04",
          title: "Produit fini",
          description:
            "Le granulat de cuivre et de plastique pur est proposé à des tiers pour la fabrication de nouveaux produits.",
        },
      ],
      noteStrong: "Attention :",
      note: "Les câbles à isolation en plomb, les résidus de fer et autres impuretés (métaux, bois, gravats, plastique, etc.) ne peuvent pas être traités dans notre procédé de production. Nous vous conseillons volontiers sur les possibilités.",
    },
    stats: {
      eyebrow: "Notre Impact",
      title: "Notre contribution à un monde durable",
      description:
        "Nous avons compris l'importance du développement durable et sommes prêts à y contribuer dans notre domaine, progressivement et dans la mesure de nos moyens.",
      items: [
        { label: "Tonnes de matériaux recyclés", description: "Depuis notre création" },
        { label: "Tonnes de CO₂ économisées", description: "Grâce à une approche circulaire" },
        { label: "Années d'expérience", description: "Dans le recyclage de câbles" },
        { label: "Matériau réutilisé", description: "Flux résiduel minimal" },
      ],
    },
    calculator: {
      eyebrow: "Calculateur de cuivre",
      title: "Calculez la valeur de vos câbles en cuivre",
      description:
        "Découvrez immédiatement la valeur de votre surplus de câbles. Saisissez la quantité et obtenez une estimation indicative du rendement.",
      cardTitle: "Calculateur de cuivre interactif",
      cardDescription: "Saisissez la quantité de surplus de câbles pour obtenir une estimation",
      amountLabel: "Quantité de surplus de câbles",
      amountPlaceholder: "Ex. 100",
      unitLabel: "Unité",
      gram: "Gramme (g)",
      kilogram: "Kilogramme (kg)",
      totalWeight: "Poids total",
      estimatedCopper: "Teneur en cuivre estimée (~65 %)",
      estimatedValue: "Rendement estimé",
      disclaimerTitle: "Information importante",
      disclaimer: (price: number) =>
        `Ce calculateur fournit une estimation indicative basée sur une teneur moyenne en cuivre de 65 % et le prix actuel du marché (${price} €/kg). La valeur réelle peut varier en fonction du type de câble, de la pureté et des fluctuations du marché. Contactez-nous pour obtenir un devis exact.`,
      cta: "Demandez un devis exact",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contactez-nous",
      description:
        "Vous avez des questions sur nos services ou vous souhaitez demander un devis ? Remplissez le formulaire et nous vous contacterons dans les plus brefs délais.",
      formTitle: "Demander un devis",
      formDescription: "Remplissez le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais.",
      companyLabel: "Nom de l'entreprise *",
      companyPlaceholder: "Le nom de votre entreprise",
      nameLabel: "Personne de contact *",
      namePlaceholder: "Votre nom",
      emailLabel: "Adresse e-mail *",
      emailPlaceholder: "email@entreprise.be",
      phoneLabel: "Numéro de téléphone",
      phonePlaceholder: "+32 ...",
      messageLabel: "Votre message *",
      messagePlaceholder: "Décrivez votre demande (type de matériau, quantité estimée, etc.)",
      submit: "Demander un devis",
      submitting: "Envoi en cours...",
      genericError: "Une erreur s'est produite. Veuillez réessayer plus tard.",
      whyTitle: "Pourquoi choisir Recy-Kab ?",
      reasons: [
        { title: "Devis rapides", description: "Une proposition de prix sur mesure sous 24 heures" },
        { title: "Entièrement certifié", description: "Normes environnementales VLAREMA & européennes" },
        { title: "Enlèvement dans toute la Belgique", description: "Également pour les plus petites quantités" },
        { title: "Prix transparents", description: "Aucune surprise par la suite" },
      ],
      detailsTitle: "Coordonnées",
      info: {
        companyLabel: "Nom de l'entreprise",
        companyValue: "Recy-Kab SPRL",
        addressLabel: "Adresse",
        addressValue: "Maastrichtersteenweg 523 bus 1, 3700 Tongeren, Belgique",
        phoneLabel: "Téléphone",
        hoursLabel: "Heures d'ouverture",
        hoursValue: "Lun - Ven : 09:00 - 17:00",
        emailLabel: "E-mail",
      },
      mapTitle: "Emplacement de Recy-Kab",
    },
    footer: {
      description:
        "Spécialiste du recyclage écologique de câbles, d'éléments cuivreux, d'inox et d'aluminium.",
      tagline: "Entreprendre durablement",
      dienstenTitle: "Services",
      diensten: ["Recyclage de câbles", "Traitement du cuivre", "Recyclage de l'aluminium", "Traitement de l'inox"],
      bedrijfTitle: "Entreprise",
      bedrijf: ["À propos de nous", "Méthode", "Impact environnemental", "Contact"],
      toolsTitle: "Outils",
      tools: ["Calculateur de cuivre", "Demander un devis"],
      rights: "Tous droits réservés.",
      madeWith: "Made with ❤️ by",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
      cookies: "Politique en matière de cookies",
    },
    cookieConsent: {
      title: "Nous respectons votre vie privée",
      description:
        "Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic du site et optimiser nos services. En cliquant sur \u00ab Accepter \u00bb, vous consentez \u00e0 l'utilisation de cookies.",
      accept: "Accepter",
      decline: "Refuser",
      policyLink: "Plus d'infos dans notre politique en matière de cookies",
    },
    bedankt: {
      title: "Merci pour votre demande !",
      subtitle: "Nous avons bien reçu votre message.",
      body: "Notre équipe examinera votre demande de devis dans les plus brefs délais. Vous pouvez vous attendre à une réponse de notre part sous 1 jour ouvrable.",
      directContact: "Contact direct ?",
      emailLabel: "E-mail",
      backHome: "Retour à l'accueil",
      newMessage: "Envoyer un nouveau message",
      address: "Recy-Kab SPRL • Maastrichtersteenweg 523 bus 1, 3700 Tongeren",
    },
  },
}
