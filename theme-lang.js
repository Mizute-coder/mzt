/* ═══════════════════════════════════════════════════════════════
   theme-lang.js — Dark/Light mode + FR/EN complet
   Charles J. Diene Portfolio
═══════════════════════════════════════════════════════════════ */
(function () {

/* ── CONTENU HTML COMPLET PAR PAGE ─────────────────────────── */
const CONTENT = {

/* ═══════ INDEX ═══════ */
'page-index': {
  fr: {
    topbar: `Disponible pour une <strong>alternance dès septembre 2026</strong> · <a href="mailto:charles.diene@etudiant.univ-brest.fr">charles.diene@etudiant.univ-brest.fr</a>`,
    hero: `<div class="hero-eyebrow">🎓 Master Cybersécurité · Réseaux · Télécommunications</div>
<h1>Bienvenue sur<br/>mon <em>Portfolio !</em></h1>
<p class="hero-desc">Étudiant en Master Cybersécurité, Réseaux et Télécommunications à l'Université de Bretagne Occidentale, passionné par la <strong>sécurité numérique</strong> et la protection des systèmes d'information. À la recherche d'une alternance dès septembre 2026.</p>
<div class="hero-actions">
  <a class="btn-primary" href="surmoi.html">En savoir plus</a>
  <a class="btn-secondary" href="competences.html">Mes compétences</a>
</div>`,
    stats: `<div class="stat-item"><div class="stat-num">4</div><div class="stat-label">Années de formation</div></div>
<div class="stat-item"><div class="stat-num">26</div><div class="stat-label">Semaines de stage</div></div>
<div class="stat-item"><div class="stat-num">10+</div><div class="stat-label">Projets réalisés</div></div>
<div class="stat-item"><div class="stat-num">2025</div><div class="stat-label">Diplôme BUT</div></div>`
  },
  en: {
    topbar: `Available for a <strong>work-study contract from September 2026</strong> · <a href="mailto:charles.diene@etudiant.univ-brest.fr">charles.diene@etudiant.univ-brest.fr</a>`,
    hero: `<div class="hero-eyebrow">🎓 Master Cybersecurity · Networks · Telecommunications</div>
<h1>Welcome to<br/>my <em>Portfolio!</em></h1>
<p class="hero-desc">Master's student in Cybersecurity, Networks and Telecommunications at the University of Western Brittany, passionate about <strong>digital security</strong> and information systems protection. Seeking a work-study contract starting September 2026.</p>
<div class="hero-actions">
  <a class="btn-primary" href="surmoi.html">Learn more</a>
  <a class="btn-secondary" href="competences.html">My skills</a>
</div>`,
    stats: `<div class="stat-item"><div class="stat-num">4</div><div class="stat-label">Years of training</div></div>
<div class="stat-item"><div class="stat-num">26</div><div class="stat-label">Internship weeks</div></div>
<div class="stat-item"><div class="stat-num">10+</div><div class="stat-label">Projects completed</div></div>
<div class="stat-item"><div class="stat-num">2025</div><div class="stat-label">Bachelor's degree</div></div>`
  }
},

/* ═══════ SURMOI ═══════ */
'page-surmoi': {
  fr: {
    topbar: `Disponible pour une <strong>alternance dès septembre 2026</strong> · <a href="mailto:charles.diene@etudiant.univ-brest.fr">charles.diene@etudiant.univ-brest.fr</a>`,
    section_header: `<div class="section-tag">À propos de Moi</div>
<div class="section-title">Qui suis-je ?</div>
<p class="section-sub">Mon parcours, mes motivations et mes informations personnelles.</p>`,
    about_text: `<p>Je m'appelle <strong>Charles Joseph Diène</strong> et je suis étudiant en Master 1 <strong>Cybersécurité, Réseaux et Télécommunications</strong> à l'UFR Sciences et techniques de l'Université de Bretagne Occidentale.</p>
<p>La cybersécurité représente pour moi bien plus qu'une orientation professionnelle : c'est une véritable vocation. Animé par un esprit de compétition et une rigueur héritée de mon parcours académique et militaire, j'aborde chaque défi avec méthode et précision, deux qualités indispensables dans un domaine en évolution aussi rapide. Ma spécialisation porte sur les <strong>audits de sécurité, la sécurisation de réseaux LAN et la supervision de la sécurité des systèmes d'information</strong>. Mes connaissances en architecture système et en infrastructure réseau me permettent également de concevoir et d'administrer des environnements complexes, avec une compréhension approfondie des menaces actuelles et des moyens de les contrecarrer.</p>
<div class="about-highlight">Mon ambition, à terme, est de devenir Responsable de la Sécurité des Systèmes d'Information (RSSI), un rôle au cœur des enjeux stratégiques et techniques de la protection des entreprises.</div>
<p>Je suis également à la recherche d'une <strong>alternance à compter de Septembre 2026</strong> pour ma deuxième année de Master dans la sécurité numérique.</p>
<div style="margin-top:1.5rem;display:flex;gap:.75rem;flex-wrap:wrap">
  <a href="mailto:charles.diene@etudiant.univ-brest.fr" class="btn-primary">✉ Me contacter</a>
  <a href="https://www.linkedin.com/in/charles-joseph-diene-42ab88261" target="_blank" class="btn-secondary">LinkedIn →</a>
</div>`,
    about_sidebar: `<div class="info-card">
  <div class="info-card-title">Informations</div>
  <div class="info-row"><span class="info-row-icon">📧</span>charles.diene@etudiant.univ-brest.fr</div>
  <div class="info-row"><span class="info-row-icon">📍</span>Brest, France</div>
  <div class="info-row"><span class="info-row-icon">🎓</span>UBO</div>
</div>
<div class="info-card">
  <div class="info-card-title">Langues</div>
  <div class="info-row"><span class="info-row-icon">🇸🇳</span>Wolof — Natif</div>
  <div class="info-row"><span class="info-row-icon">🇫🇷</span>Français — Natif</div>
  <div class="info-row"><span class="info-row-icon">🇬🇧</span>Anglais — Courant (B2)</div>
  <div class="info-row"><span class="info-row-icon">🇪🇸</span>Espagnol — lu, écrit (B1)</div>
</div>
<div class="info-card">
  <div class="info-card-title">Centres d'intérêt</div>
  <div class="tags-group" style="margin-top:.2rem">
    <span class="tag">Basket-Ball</span><span class="tag">Scoutisme</span>
    <span class="tag">Callisthénie</span><span class="tag">Lecture</span>
  </div>
</div>`
  },
  en: {
    topbar: `Available for a <strong>work-study contract from September 2026</strong> · <a href="mailto:charles.diene@etudiant.univ-brest.fr">charles.diene@etudiant.univ-brest.fr</a>`,
    section_header: `<div class="section-tag">About Me</div>
<div class="section-title">Who am I?</div>
<p class="section-sub">My background, motivations and personal information.</p>`,
    about_text: `<p>My name is <strong>Charles Joseph Diène</strong> and I am a Master's 1 student in <strong>Cybersecurity, Networks and Telecommunications</strong> at the Faculty of Science and Technology of the University of Western Brittany.</p>
<p>Cybersecurity is far more than a professional direction for me — it's a true vocation. Driven by a competitive mindset and a rigour inherited from both my academic and military background, I approach every challenge with method and precision, two essential qualities in such a fast-evolving field. My specialisation covers <strong>security audits, LAN network hardening, and information systems security monitoring</strong>. My knowledge of system architecture and network infrastructure also allows me to design and administer complex environments, with a deep understanding of current threats and how to counter them.</p>
<div class="about-highlight">My long-term ambition is to become a Chief Information Security Officer (CISO), a role at the heart of the strategic and technical challenges of enterprise security.</div>
<p>I am also looking for a <strong>work-study contract starting September 2026</strong> for my second year of Master's in digital security.</p>
<div style="margin-top:1.5rem;display:flex;gap:.75rem;flex-wrap:wrap">
  <a href="mailto:charles.diene@etudiant.univ-brest.fr" class="btn-primary">✉ Contact me</a>
  <a href="https://www.linkedin.com/in/charles-joseph-diene-42ab88261" target="_blank" class="btn-secondary">LinkedIn →</a>
</div>`,
    about_sidebar: `<div class="info-card">
  <div class="info-card-title">Information</div>
  <div class="info-row"><span class="info-row-icon">📧</span>charles.diene@etudiant.univ-brest.fr</div>
  <div class="info-row"><span class="info-row-icon">📍</span>Brest, France</div>
  <div class="info-row"><span class="info-row-icon">🎓</span>UBO</div>
</div>
<div class="info-card">
  <div class="info-card-title">Languages</div>
  <div class="info-row"><span class="info-row-icon">🇸🇳</span>Wolof — Native</div>
  <div class="info-row"><span class="info-row-icon">🇫🇷</span>French — Native</div>
  <div class="info-row"><span class="info-row-icon">🇬🇧</span>English — Fluent (B2)</div>
  <div class="info-row"><span class="info-row-icon">🇪🇸</span>Spanish — Reading & Writing (B1)</div>
</div>
<div class="info-card">
  <div class="info-card-title">Interests</div>
  <div class="tags-group" style="margin-top:.2rem">
    <span class="tag">Basketball</span><span class="tag">Scouting</span>
    <span class="tag">Calisthenics</span><span class="tag">Reading</span>
  </div>
</div>`
  }
},

/* ═══════ CURSUS ═══════ */
'page-cursus': {
  fr: {
    topbar: `Disponible pour une <strong>alternance dès septembre 2026</strong> · <a href="mailto:charles.diene@etudiant.univ-brest.fr">charles.diene@etudiant.univ-brest.fr</a>`,
    section_header: `<div class="section-tag">Cursus & Expériences</div>
<div class="section-title">Mon parcours</div>
<p class="section-sub">Formations et expériences professionnelles.</p>`,
    formation_label: `Formation`,
    experiences_label: `Expériences`,
    formation_timeline: `<div class="tl-item">
  <div class="tl-dot green"></div>
  <div class="tl-date">2025 — 2026</div>
  <div class="tl-title">Master 1 Cybersécurité, Réseaux & Télécommunications</div>
  <div class="tl-place"><a href="https://formations.univ-brest.fr/fr/index/sciences-technologies-sante-STS/master-XB/master-reseaux-et-telecommunications-INRBSLPB/parcours-telecommunications-reseaux-et-cybersecurite-INRBST3P.html" target="_blank">Université de Bretagne occidentale</a></div>
  <div class="tl-desc">En cours</div>
</div>
<div class="tl-item">
  <div class="tl-dot"></div>
  <div class="tl-date">2022 — 2025</div>
  <div class="tl-title">BUT Réseaux & Télécommunications · Cybersécurité</div>
  <div class="tl-place"><a href="https://iut.uca.fr/formations/but-reseaux-et-telecommunications" target="_blank">IUT Clermont Auvergne</a></div>
  <div class="tl-desc">Formation couvrant l'administration réseau, la sécurité informatique, la gestion de projets et les télécommunications.</div>
</div>
<div class="tl-item">
  <div class="tl-dot" style="background:var(--slate-l)"></div>
  <div class="tl-date">2019 — 2022</div>
  <div class="tl-title">Baccalauréat en Sciences Expérimentales</div>
  <div class="tl-place">🏫 Prytanée Militaire de Saint-Louis, Sénégal</div>
  <div class="tl-desc">Spécialités Maths, Physique-Chimie, SVT</div>
</div>`,
    experience_timeline: `<div class="tl-item">
  <div class="tl-dot"></div>
  <div class="tl-date">2024–2025 · 16 semaines</div>
  <div class="tl-title">Stage — Service Infrastructure et Exploitation</div>
  <div class="tl-place">🏥 Association Hospitalière Sainte Marie — Chamalières</div>
  <div class="tl-desc">Administrateur Firewall.</div>
</div>
<div class="tl-item">
  <div class="tl-dot"></div>
  <div class="tl-date">2023–2024 · 10 semaines</div>
  <div class="tl-title">Stage — Network Operating Center</div>
  <div class="tl-place">📍 Rectorat de Clermont-Ferrand</div>
  <div class="tl-desc">Mise en place d'une plateforme de test de performances Réseaux.</div>
</div>`
  },
  en: {
    topbar: `Available for a <strong>work-study contract from September 2026</strong> · <a href="mailto:charles.diene@etudiant.univ-brest.fr">charles.diene@etudiant.univ-brest.fr</a>`,
    section_header: `<div class="section-tag">Education & Experience</div>
<div class="section-title">My background</div>
<p class="section-sub">Academic training and professional experience.</p>`,
    formation_label: `Education`,
    experiences_label: `Experience`,
    formation_timeline: `<div class="tl-item">
  <div class="tl-dot green"></div>
  <div class="tl-date">2025 — 2026</div>
  <div class="tl-title">Master's 1 — Cybersecurity, Networks & Telecommunications</div>
  <div class="tl-place"><a href="https://formations.univ-brest.fr/fr/index/sciences-technologies-sante-STS/master-XB/master-reseaux-et-telecommunications-INRBSLPB/parcours-telecommunications-reseaux-et-cybersecurite-INRBST3P.html" target="_blank">University of Western Brittany (UBO)</a></div>
  <div class="tl-desc">In progress</div>
</div>
<div class="tl-item">
  <div class="tl-dot"></div>
  <div class="tl-date">2022 — 2025</div>
  <div class="tl-title">Bachelor of Technology — Networks & Telecommunications · Cybersecurity</div>
  <div class="tl-place"><a href="https://iut.uca.fr/formations/but-reseaux-et-telecommunications" target="_blank">IUT Clermont Auvergne</a></div>
  <div class="tl-desc">Covering network administration, IT security, project management and telecommunications.</div>
</div>
<div class="tl-item">
  <div class="tl-dot" style="background:var(--slate-l)"></div>
  <div class="tl-date">2019 — 2022</div>
  <div class="tl-title">Scientific Baccalaureate</div>
  <div class="tl-place">🏫 Military Academy of Saint-Louis, Senegal</div>
  <div class="tl-desc">Specialisations: Maths, Physics-Chemistry, Biology</div>
</div>`,
    experience_timeline: `<div class="tl-item">
  <div class="tl-dot"></div>
  <div class="tl-date">2024–2025 · 16 weeks</div>
  <div class="tl-title">Intern — Infrastructure & Operations</div>
  <div class="tl-place">🏥 Association Hospitalière Sainte Marie — Chamalières</div>
  <div class="tl-desc">Firewall Administrator.</div>
</div>
<div class="tl-item">
  <div class="tl-dot"></div>
  <div class="tl-date">2023–2024 · 10 weeks</div>
  <div class="tl-title">Intern — Network Operating Center</div>
  <div class="tl-place">📍 Rectorat de Clermont-Ferrand (Ministry of Education)</div>
  <div class="tl-desc">Deployment of a network performance testing platform.</div>
</div>`
  }
},

/* ═══════ COMPÉTENCES ═══════ */
'page-competences': {
  fr: {
    topbar: `Disponible pour une <strong>alternance dès septembre 2026</strong> · <a href="mailto:charles.diene@etudiant.univ-brest.fr">charles.diene@etudiant.univ-brest.fr</a>`,
    section_header: `<div class="section-tag">Compétences</div>
<div class="section-title">Mes expertises techniques</div>
<p class="section-sub">Compétences acquises durant mon parcours universitaire et mes expériences pratiques.</p>`,
    comp_tabs: `<button class="comp-tab active" onclick="switchComp('cyber',this)">🔒 Cybersécurité</button>
<button class="comp-tab" onclick="switchComp('reseau',this)">🌐 Réseaux & Systèmes</button>`,
    cyber_panel: `<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">🛡️</div><div><div class="skill-card-title">Sécurisation des services réseaux / LAN</div><div class="skill-card-level">Intermédiaire — Avancé</div></div></div><p class="skill-card-desc">Mise en place de la protection sur des réseaux locaux (LAN) et des services associés : serveurs de fichiers, bases de données, points d'accès Wi-Fi. Cela inclut le contrôle d'accès, l'authentification forte, la segmentation réseau et la gestion des équipements de niveau 2.</p><div class="skill-card-tools"><span class="skill-tool">Pare-feu</span><span class="skill-tool">VPN</span><span class="skill-tool">ACL</span><span class="skill-tool">VLAN</span><span class="skill-tool">802.1X</span></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">🏗️</div><div><div class="skill-card-title">Architecture de sécurité</div><div class="skill-card-level">Intermédiaire</div></div></div><p class="skill-card-desc">Conception d'une structure globale de sécurité pour protéger les systèmes d'une organisation : définition des politiques de sécurité, configuration des pare-feu et systèmes de détection d'intrusion (IDS), intégration de la sécurité dans les solutions logicielles pour garantir que chaque couche du système est protégée.</p><div class="skill-card-tools"><span class="skill-tool">IDS/IPS</span><span class="skill-tool">Pare-feu</span><span class="skill-tool">Politiques de sécurité</span><span class="skill-tool">Defence in depth</span></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">🔐</div><div><div class="skill-card-title">Cryptographie</div><div class="skill-card-level">Intermédiaire</div></div></div><p class="skill-card-desc">Implémentation en Python d'algorithmes de chiffrement pour protéger les informations sensibles, garantir l'intégrité des données et authentifier les échanges. Étude des systèmes de clés publiques/privées, des signatures numériques et des protocoles de chiffrement utilisés sur Internet.</p><div class="skill-card-tools"><span class="skill-tool">AES</span><span class="skill-tool">RSA</span><span class="skill-tool">SSL/TLS</span><span class="skill-tool">Signatures numériques</span><span class="skill-tool">Python</span></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">💉</div><div><div class="skill-card-title">Pentesting</div><div class="skill-card-level">Intermédiaire — Avancé</div></div></div><p class="skill-card-desc">Tests d'intrusion sur différentes machines virtuelles (VM) pour analyser et exploiter des vulnérabilités. Utilisation d'outils spécialisés pour mettre à l'épreuve les défenses d'un réseau ou d'une application, puis proposition de recommandations pour corriger les failles découvertes.</p><div class="skill-card-tools"><span class="skill-tool">Metasploit</span><span class="skill-tool">Nmap</span><span class="skill-tool">Kali Linux</span><span class="skill-tool">Parrot OS</span><span class="skill-tool">Burp Suite</span></div></div>
<div class="skill-card-full" style="grid-column:1/-1"><div class="skill-card-header"><div class="skill-card-icon">📡</div><div><div class="skill-card-title">Supervision de la sécurité (SOC / SIEM)</div><div class="skill-card-level">Intermédiaire</div></div></div><p class="skill-card-desc">Surveillance en permanence des systèmes de sécurité pour détecter, analyser et répondre aux menaces et incidents. Utilisation de SIEM pour corréler les événements, gérer les journaux de sécurité et les flux de données en temps réel.</p><div class="skill-card-details"><div class="skill-detail-item"><span class="skill-detail-label">SIEM</span><span class="skill-detail-val">Splunk</span></div><div class="skill-detail-item"><span class="skill-detail-label">Collecte d'événements</span><span class="skill-detail-val">WEC / WEF</span></div><div class="skill-detail-item"><span class="skill-detail-label">Journalisation système</span><span class="skill-detail-val">Rsyslog · Sysmon</span></div><div class="skill-detail-item"><span class="skill-detail-label">Règles de détection</span><span class="skill-detail-val">LDR Sigma</span></div></div></div>`,
    reseau_panel: `<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">💻</div><div><div class="skill-card-title">Virtualisation & Conteneurisation</div><div class="skill-card-level">Intermédiaire</div></div></div><p class="skill-card-desc">Création et gestion de machines virtuelles via des hyperviseurs, ainsi que gestion de conteneurs regroupant des applications et leurs dépendances pour des déploiements rapides et isolés.</p><div class="skill-card-tools"><span class="skill-tool">VMware</span><span class="skill-tool">Hyper-V</span><span class="skill-tool">Qemu</span><span class="skill-tool">Docker</span><span class="skill-tool">VirtualBox</span></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">🗄️</div><div><div class="skill-card-title">Gestion de bases de données</div><div class="skill-card-level">Intermédiaire</div></div></div><p class="skill-card-desc">Organisation, stockage et gestion sécurisée des données : conception de schémas, écriture de requêtes SQL, optimisation des performances, gestion des sauvegardes et restaurations.</p><div class="skill-card-tools"><span class="skill-tool">MySQL</span><span class="skill-tool">MongoDB</span><span class="skill-tool">SQL Server</span><span class="skill-tool">SQL</span></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">🔌</div><div><div class="skill-card-title">Configuration de périphériques réseau</div><div class="skill-card-level">Intermédiaire — Avancé</div></div></div><p class="skill-card-desc">Gestion des équipements réseau pour assurer la connectivité au sein des réseaux LAN et WAN : attribution d'adresses IP, gestion des VLANs, configuration du routage dynamique et application de mesures de sécurité.</p><div class="skill-card-tools"><span class="skill-tool">BGP</span><span class="skill-tool">OSPF</span><span class="skill-tool">MPLS</span><span class="skill-tool">VLAN</span><span class="skill-tool">ACL</span><span class="skill-tool">Cisco IOS</span></div></div>
<div class="skill-card-full" style="grid-column:1/-1"><div class="skill-card-header"><div class="skill-card-icon">⚙️</div><div><div class="skill-card-title">Administration Système & Réseaux</div><div class="skill-card-level">Intermédiaire — Avancé</div></div></div><p class="skill-card-desc">Gestion et maintenance des systèmes informatiques sous Linux et Windows. Administration Active Directory, supervision des performances, planification des mises à jour et application des correctifs de sécurité.</p><div class="skill-card-details"><div class="skill-detail-item"><span class="skill-detail-label">Environnements</span><span class="skill-detail-val">Linux · Windows Server · Active Directory</span></div><div class="skill-detail-item"><span class="skill-detail-label">Services</span><span class="skill-detail-val">DHCP · DNS · Serveur Web</span></div><div class="skill-detail-item"><span class="skill-detail-label">Supervision</span><span class="skill-detail-val">Performances réseau · Disponibilité des services · Sauvegardes</span></div></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">☁️</div><div><div class="skill-card-title">Architecture Cloud</div><div class="skill-card-level">Débutant — Intermédiaire</div></div></div><p class="skill-card-desc">Conception et gestion d'infrastructures cloud : stockage, bases de données, mise en réseau et serveurs virtuels. Notions de redondance, d'équilibrage de charge, de sécurité cloud et d'automatisation selon les modèles IaaS, PaaS et SaaS.</p><div class="skill-card-tools"><span class="skill-tool">IaaS</span><span class="skill-tool">PaaS</span><span class="skill-tool">SaaS</span><span class="skill-tool">Load balancing</span><span class="skill-tool">Redondance</span><span class="skill-tool">OpenStack</span></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">📞</div><div><div class="skill-card-title">Téléphonie VoIP</div><div class="skill-card-level">Intermédiaire</div></div></div><p class="skill-card-desc">Installation, configuration et gestion d'infrastructures téléphoniques basées sur la VoIP. Maîtrise des protocoles de communication et des systèmes de communication unifiée.</p><div class="skill-card-tools"><span class="skill-tool">SIP</span><span class="skill-tool">SDP</span><span class="skill-tool">RTP</span><span class="skill-tool">Asterisk</span><span class="skill-tool">Cisco Unified</span><span class="skill-tool">OSBS</span></div></div>`
  },
  en: {
    topbar: `Available for a <strong>work-study contract from September 2026</strong> · <a href="mailto:charles.diene@etudiant.univ-brest.fr">charles.diene@etudiant.univ-brest.fr</a>`,
    section_header: `<div class="section-tag">Skills</div>
<div class="section-title">My technical expertise</div>
<p class="section-sub">Skills acquired during my studies and practical experience.</p>`,
    comp_tabs: `<button class="comp-tab active" onclick="switchComp('cyber',this)">🔒 Cybersecurity</button>
<button class="comp-tab" onclick="switchComp('reseau',this)">🌐 Networks & Systems</button>`,
    cyber_panel: `<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">🛡️</div><div><div class="skill-card-title">LAN Network & Service Hardening</div><div class="skill-card-level">Intermediate — Advanced</div></div></div><p class="skill-card-desc">Implementing protection on local area networks (LAN) and associated services: file servers, databases, Wi-Fi access points. This includes access control, strong authentication, network segmentation and Layer 2 device management.</p><div class="skill-card-tools"><span class="skill-tool">Firewall</span><span class="skill-tool">VPN</span><span class="skill-tool">ACL</span><span class="skill-tool">VLAN</span><span class="skill-tool">802.1X</span></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">🏗️</div><div><div class="skill-card-title">Security Architecture</div><div class="skill-card-level">Intermediate</div></div></div><p class="skill-card-desc">Designing a global security framework to protect an organisation's systems: defining security policies, configuring firewalls and intrusion detection systems (IDS), integrating security into software solutions to ensure every layer is protected.</p><div class="skill-card-tools"><span class="skill-tool">IDS/IPS</span><span class="skill-tool">Firewall</span><span class="skill-tool">Security policies</span><span class="skill-tool">Defence in depth</span></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">🔐</div><div><div class="skill-card-title">Cryptography</div><div class="skill-card-level">Intermediate</div></div></div><p class="skill-card-desc">Python implementation of encryption algorithms to protect sensitive data, ensure data integrity and authenticate exchanges. Study of public/private key systems, digital signatures and encryption protocols used on the Internet.</p><div class="skill-card-tools"><span class="skill-tool">AES</span><span class="skill-tool">RSA</span><span class="skill-tool">SSL/TLS</span><span class="skill-tool">Digital signatures</span><span class="skill-tool">Python</span></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">💉</div><div><div class="skill-card-title">Penetration Testing</div><div class="skill-card-level">Intermediate — Advanced</div></div></div><p class="skill-card-desc">Intrusion tests on various virtual machines (VMs) to analyse and exploit vulnerabilities. Using specialised tools to stress-test a network's or application's defences, then proposing recommendations to remediate the discovered flaws.</p><div class="skill-card-tools"><span class="skill-tool">Metasploit</span><span class="skill-tool">Nmap</span><span class="skill-tool">Kali Linux</span><span class="skill-tool">Parrot OS</span><span class="skill-tool">Burp Suite</span></div></div>
<div class="skill-card-full" style="grid-column:1/-1"><div class="skill-card-header"><div class="skill-card-icon">📡</div><div><div class="skill-card-title">Security Monitoring (SOC / SIEM)</div><div class="skill-card-level">Intermediate</div></div></div><p class="skill-card-desc">Continuous monitoring of security systems to detect, analyse and respond to threats and incidents. Using SIEM to correlate events, manage security logs and real-time data streams.</p><div class="skill-card-details"><div class="skill-detail-item"><span class="skill-detail-label">SIEM</span><span class="skill-detail-val">Splunk</span></div><div class="skill-detail-item"><span class="skill-detail-label">Event collection</span><span class="skill-detail-val">WEC / WEF</span></div><div class="skill-detail-item"><span class="skill-detail-label">System logging</span><span class="skill-detail-val">Rsyslog · Sysmon</span></div><div class="skill-detail-item"><span class="skill-detail-label">Detection rules</span><span class="skill-detail-val">LDR Sigma</span></div></div></div>`,
    reseau_panel: `<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">💻</div><div><div class="skill-card-title">Virtualisation & Containerisation</div><div class="skill-card-level">Intermediate</div></div></div><p class="skill-card-desc">Creating and managing virtual machines via hypervisors, as well as managing containers that bundle applications and their dependencies for fast, isolated deployments.</p><div class="skill-card-tools"><span class="skill-tool">VMware</span><span class="skill-tool">Hyper-V</span><span class="skill-tool">Qemu</span><span class="skill-tool">Docker</span><span class="skill-tool">VirtualBox</span></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">🗄️</div><div><div class="skill-card-title">Database Management</div><div class="skill-card-level">Intermediate</div></div></div><p class="skill-card-desc">Organising, storing and securely managing data: schema design, SQL query writing, performance optimisation, backup and restore management.</p><div class="skill-card-tools"><span class="skill-tool">MySQL</span><span class="skill-tool">MongoDB</span><span class="skill-tool">SQL Server</span><span class="skill-tool">SQL</span></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">🔌</div><div><div class="skill-card-title">Network Device Configuration</div><div class="skill-card-level">Intermediate — Advanced</div></div></div><p class="skill-card-desc">Managing network equipment to ensure connectivity across LAN and WAN: IP addressing, VLAN management, dynamic routing configuration and security measures.</p><div class="skill-card-tools"><span class="skill-tool">BGP</span><span class="skill-tool">OSPF</span><span class="skill-tool">MPLS</span><span class="skill-tool">VLAN</span><span class="skill-tool">ACL</span><span class="skill-tool">Cisco IOS</span></div></div>
<div class="skill-card-full" style="grid-column:1/-1"><div class="skill-card-header"><div class="skill-card-icon">⚙️</div><div><div class="skill-card-title">System & Network Administration</div><div class="skill-card-level">Intermediate — Advanced</div></div></div><p class="skill-card-desc">Managing and maintaining IT systems under Linux and Windows. Active Directory administration, performance monitoring, update planning and security patch management.</p><div class="skill-card-details"><div class="skill-detail-item"><span class="skill-detail-label">Environments</span><span class="skill-detail-val">Linux · Windows Server · Active Directory</span></div><div class="skill-detail-item"><span class="skill-detail-label">Services</span><span class="skill-detail-val">DHCP · DNS · Web Server</span></div><div class="skill-detail-item"><span class="skill-detail-label">Monitoring</span><span class="skill-detail-val">Network performance · Service availability · Backups</span></div></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">☁️</div><div><div class="skill-card-title">Cloud Architecture</div><div class="skill-card-level">Beginner — Intermediate</div></div></div><p class="skill-card-desc">Designing and managing cloud infrastructure: storage, databases, networking and virtual servers. Concepts of redundancy, load balancing, cloud security and automation across IaaS, PaaS and SaaS models.</p><div class="skill-card-tools"><span class="skill-tool">IaaS</span><span class="skill-tool">PaaS</span><span class="skill-tool">SaaS</span><span class="skill-tool">Load balancing</span><span class="skill-tool">Redundancy</span><span class="skill-tool">OpenStack</span></div></div>
<div class="skill-card-full"><div class="skill-card-header"><div class="skill-card-icon">📞</div><div><div class="skill-card-title">VoIP Telephony</div><div class="skill-card-level">Intermediate</div></div></div><p class="skill-card-desc">Installing, configuring and managing VoIP-based telephony infrastructure. Proficiency in communication protocols and unified communication systems.</p><div class="skill-card-tools"><span class="skill-tool">SIP</span><span class="skill-tool">SDP</span><span class="skill-tool">RTP</span><span class="skill-tool">Asterisk</span><span class="skill-tool">Cisco Unified</span><span class="skill-tool">OSBS</span></div></div>`
  }
},

/* ═══════ PROJETS ═══════ */
'page-projets': {
  fr: {
    topbar: `Disponible pour une <strong>alternance dès septembre 2026</strong> · <a href="mailto:charles.diene@etudiant.univ-brest.fr">charles.diene@etudiant.univ-brest.fr</a>`,
    section_header: `<div class="section-tag">Projets</div>
<div class="section-title">Mes réalisations</div>
<p class="section-sub">Projets professionnels, universitaires et compétitions réalisés au cours de ma formation.</p>`,
    proj_tabs: `<button class="proj-tab active" onclick="switchProj('pro',this)">💼 Professionnels</button>
<button class="proj-tab" onclick="switchProj('uni',this)">🎓 Universitaires</button>
<button class="proj-tab" onclick="switchProj('ctf',this)">🏆 CTF & Compétitions</button>`,
    proj_pro: `<div style="margin-bottom:2rem" class="proj-uni-card">
  <div class="proj-uni-header blue">
    <div>
      <div class="proj-uni-title">Analyse et refonte des pare-feu de datacenter</div>
      <div class="proj-uni-year">Stage 2024–2025 · Association Hospitalière Sainte Marie</div>
    </div>
    <div class="proj-uni-badge">Cybersécurité & Firewall</div>
  </div>
  <div class="proj-uni-body">
    <p class="proj-uni-intro">Dans le cadre de mon stage à l'Association Hospitalière Sainte Marie, j'ai mené une mission d'audit et de refonte des pare-feu du datacenter de l'association. L'objectif était de renforcer la posture de sécurité de l'infrastructure réseau hospitalière en analysant l'existant, en identifiant les failles de configuration et en proposant et appliquant des mesures correctives concrètes.</p>
    <div class="proj-uni-sections">
      <div class="proj-uni-section">
        <div class="proj-uni-section-title">🎯 Compétences ciblées</div>
        <p>Audit de sécurité des équipements périmètriques, analyse des règles de filtrage existantes, identification des configurations à risque et renforcement de la politique de sécurité des pare-feu en environnement de production critique.</p>
        <div class="proj-uni-level">
          <div class="proj-uni-level-dots">
            <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div>
          </div>
          4.1 / 5
        </div>
      </div>
      <div class="proj-uni-section">
        <div class="proj-uni-section-title">📚 Savoirs mobilisés</div>
        <p>Analyse des flux réseau et des journaux de sécurité, compréhension des architectures datacenter, gestion des règles de filtrage et des zones de sécurité, surveillance et corrélation d'événements via SIEM.</p>
      </div>
      <div class="proj-uni-section">
        <div class="proj-uni-section-title">🔗 Compétences liées</div>
        <p>Gestion de projet appliquée à la sécurité : planification des phases d'audit, rédaction des livrables, communication avec les équipes techniques et suivi des mesures correctives dans un environnement contraint (milieu hospitalier).</p>
        <div class="proj-uni-level">
          <div class="proj-uni-level-dots">
            <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div>
          </div>
          4.3 / 5
        </div>
      </div>
      <div class="proj-uni-section">
        <div class="proj-uni-section-title">📈 Évolution</div>
        <p>Cette mission a confirmé mon intérêt pour la sécurité des infrastructures critiques. Elle m'a donné une vision concrète des enjeux de disponibilité et de sécurité en milieu hospitalier, et m'encourage à approfondir les certifications pare-feu (Fortinet NSE, Sophos).</p>
      </div>
    </div>
    <div class="proj-uni-tools">
      <span class="proj-uni-tool">FortiGate</span><span class="proj-uni-tool">Sophos</span><span class="proj-uni-tool">Graylog</span><span class="proj-uni-tool">Audit sécurité</span><span class="proj-uni-tool">Analyse de flux</span><span class="proj-uni-tool">Mesures correctives</span><span class="proj-uni-tool">Gestion de projet</span><span class="proj-uni-tool">SIEM</span>
    </div>
  </div>
</div>
        <div class="proj-uni-grid">

          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">Mise en place d'une plateforme de test de performance d'infrastructures réseaux</div>
                <div class="proj-uni-year">Stage de fin de 2ème année — Ministère</div>
              </div>
              <div class="proj-uni-badge">Supervision réseau</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Mise en place d'un stack logiciel de supervision pour répondre à un besoin d'identification des causes de lenteur sur l'infrastructure du Ministère. Configuration et automatisation d'outils de test de performance et de supervision réseau.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Compétences ciblées</div>
                  <p>Administration réseau, tests de performance, gestion de supervision et automatisation de scripts. Évaluation des performances réseau et gestion des infrastructures.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div>
                    </div>
                    4.2 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Savoirs mobilisés</div>
                  <p>Protocoles TCP, UDP, ICMP, gestion des paquets et latence réseau, algorithmes de congestion (Cubic, BBR). Scripting Python pour configurer et automatiser la plateforme.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Compétences liées</div>
                  <p>Virtualisation, gestion des systèmes d'information et automatisation de scripts comme bases. Déploiement d'infrastructures réseau et supervision avec outils open source.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    4.0 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Évolution</div>
                  <p>Approfondissement de l'évaluation des performances sous charges élevées et optimisation de la sécurité des infrastructures réseau en production.</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">Iperf</span><span class="proj-uni-tool">Nuttcp</span><span class="proj-uni-tool">Netperf</span><span class="proj-uni-tool">Zabbix</span><span class="proj-uni-tool">Grafana</span><span class="proj-uni-tool">Prometheus</span><span class="proj-uni-tool">InfluxDB</span><span class="proj-uni-tool">Python</span><span class="proj-uni-tool">TCP/UDP/ICMP</span>
              </div>
            </div>
          </div>

        </div>`,
    proj_uni: `<div class="proj-uni-grid">

          <!-- 2024-2025 -->
          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">Projet final — Sécurisation d'une infrastructure d'entreprise</div>
                <div class="proj-uni-year">Année scolaire 2024–2025</div>
              </div>
              <div class="proj-uni-badge">Sécurité défensive</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Mise en situation réelle : conception d'un scénario d'attaque combinant un ransomware et une injection SQL visant à provoquer un déni de service, puis déploiement des mesures de sécurité défensives pour protéger, détecter et répondre aux menaces sur l'infrastructure cible.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Compétences ciblées</div>
                  <p>Conception de scénarios d'attaque réalistes (ransomware, injection SQL, DoS), mise en place d'une architecture de sécurité défensive complète, supervision des événements et automatisation des réponses aux incidents.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div>
                    </div>4.5 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Savoirs mobilisés</div>
                  <p>Règles de filtrage pare-feu, chiffrement des données au repos et en transit, configuration IDS/IPS, corrélation d'événements SIEM, playbooks de réponse automatique.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Compétences liées</div>
                  <p>Architecture réseau sécurisée, administration système Linux/Windows, connaissance des vecteurs d'attaque, gestion de la continuité d'activité et mesures correctives post-incident.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div>
                    </div>4.5 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Évolution</div>
                  <p>Ce projet a consolidé ma vision globale de la cyberdéfense. Maîtrise de la chaîne complète attaque → détection → réponse. Encourage l'approfondissement des certifications Blue Team (SOC Analyst, Wazuh).</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">Pare-feu</span><span class="proj-uni-tool">IDS/IPS</span><span class="proj-uni-tool">Chiffrement</span><span class="proj-uni-tool">Splunk</span><span class="proj-uni-tool">Wazuh</span><span class="proj-uni-tool">Ransomware</span><span class="proj-uni-tool">Injection SQL</span><span class="proj-uni-tool">Alertes automatiques</span><span class="proj-uni-tool">SIEM</span>
              </div>
            </div>
          </div>

          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">Analyse forensique — Investigation sur disques compromis</div>
                <div class="proj-uni-year">Année scolaire 2024–2025</div>
              </div>
              <div class="proj-uni-badge">Forensique & RGPD</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Analyse forensique de deux disques compromis (Linux et Windows) fournis dans le cadre d'une investigation numérique. Reconstitution du séquençage des événements, récupération des données supprimées, analyse des processus actifs et rédaction d'un rapport de preuves à valeur juridique.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Compétences ciblées</div>
                  <p>Analyse de disques compromis Linux et Windows, investigation mémoire, reconstruction de la chronologie de l'attaquant, récupération de données supprimées, rapport forensique à valeur probante.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>3.8 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Savoirs mobilisés</div>
                  <p>Registres système Windows, reconstruction des commandes CMD, analyse de code malveillant, parsing PDF suspects, RGPD et exigences de preuve numérique en cadre légal.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Compétences liées</div>
                  <p>Administration système Linux/Windows, artefacts système (journaux, registres, prefetch), techniques d'effacement de traces et méthodes de persistance des attaquants.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>4.0 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Évolution</div>
                  <p>Intérêt confirmé pour la cybercriminalistique et la réponse judiciaire. Objectif d'approfondir les normes de preuve numérique (ISO 27037) et les outils d'investigation avancés.</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">Volatility</span><span class="proj-uni-tool">Récupération de données</span><span class="proj-uni-tool">PDF Parser</span><span class="proj-uni-tool">Registres Windows</span><span class="proj-uni-tool">Analyse de processus</span><span class="proj-uni-tool">Forensique Linux</span><span class="proj-uni-tool">RGPD</span><span class="proj-uni-tool">Rapport juridique</span>
              </div>
            </div>
          </div>

          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">Audit de sécurité — Test d'intrusion d'un SI d'entreprise</div>
                <div class="proj-uni-year">Année scolaire 2024–2025</div>
              </div>
              <div class="proj-uni-badge">Pentest & Audit</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Mise en situation réelle : une entreprise nous mandate pour tester la robustesse de son SI. Mission en deux phases — reconnaissance passive (OSINT) puis tests d'intrusion actifs — aboutissant à un rapport d'audit complet avec mesures correctives priorisées.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Compétences ciblées</div>
                  <p>Audit de sécurité complet : OSINT sur l'entreprise et ses employés, puis tests d'intrusion actifs incluant l'exploitation de vulnérabilités critiques comme Log4Shell (CVE-2021-44228).</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>3.5 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Savoirs mobilisés</div>
                  <p>OSINT (reconnaissance passive : employés, domaines, services exposés), exploitation Log4j/Log4Shell, analyse des vulnérabilités et rédaction d'un rapport d'audit structuré avec recommandations priorisées.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Compétences liées</div>
                  <p>Pentesting, CVE et bases de vulnérabilités, communication professionnelle client, traduction de constats techniques en recommandations accessibles à des décideurs non techniques.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>3.6 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Évolution</div>
                  <p>Vision complète du métier d'auditeur en sécurité. Renforce la volonté de se spécialiser en missions Red Team et d'obtenir des certifications reconnues (OSCP).</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">OSINT</span><span class="proj-uni-tool">Log4j / Log4Shell</span><span class="proj-uni-tool">Nmap</span><span class="proj-uni-tool">Metasploit</span><span class="proj-uni-tool">Analyse CVE</span><span class="proj-uni-tool">Rapport d'audit</span><span class="proj-uni-tool">Mesures correctives</span><span class="proj-uni-tool">Kali Linux</span>
              </div>
            </div>
          </div>

          <!-- 2023-2024 & 2022-2023 -->
          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">SAE501 — Construction d'une solution Cloud privée Open Source</div>
                <div class="proj-uni-year">Année scolaire 2024–2025</div>
              </div>
              <div class="proj-uni-badge">Cloud & Infra</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Construction d'une solution cloud privée pour s'affranchir des GAFAM, en maîtrisant la confidentialité, la sécurité des données et les coûts. Déploiement d'un serveur Nextcloud sur Raspberry Pi 4 avec accès distant sécurisé.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Compétences ciblées</div>
                  <p>Conception, installation et administration de solutions cloud privées open source. Gestion de conteneurs, administration réseau, tunnels VPN et serveur de messagerie.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    3.8 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Savoirs mobilisés</div>
                  <p>Gestion des certificats SSL/TLS, protocoles WebRTC, CalDAV/CardDAV pour la synchronisation, configuration sécurisée avec OpenSSL et Coturn.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Compétences liées</div>
                  <p>Administration Linux (Debian), conteneurisation, sécurisation SSL/TLS via HAProxy, gestion des trusted_domains Nextcloud.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    3.6 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Évolution</div>
                  <p>Approfondissement en gestion de conteneurs avancés, optimisation des performances réseau et cryptographie appliquée. Exploration de Pydio Cells.</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">Docker</span><span class="proj-uni-tool">Docker Compose</span><span class="proj-uni-tool">HAProxy</span><span class="proj-uni-tool">Nextcloud</span><span class="proj-uni-tool">ZeroTier</span><span class="proj-uni-tool">Postfix</span><span class="proj-uni-tool">Dovecot</span><span class="proj-uni-tool">SSL/TLS</span><span class="proj-uni-tool">Raspberry Pi 4</span><span class="proj-uni-tool">Debian</span>
              </div>
            </div>
          </div>

          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">SAE34 — Pentest</div>
                <div class="proj-uni-year">Année scolaire 2023–2024</div>
              </div>
              <div class="proj-uni-badge">Cybersécurité</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Tests d'intrusion sur plusieurs machines virtuelles avec pour objectif d'obtenir un accès administrateur. Identification de vulnérabilités, exploitation de failles critiques et escalade de privilèges sur des systèmes cibles.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Compétences ciblées</div>
                  <p>Gestion et exploitation de vulnérabilités réseau/système : scans de ports, identification de failles critiques (EternalBlue), choix d'exploits et automatisation des attaques.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    3.7 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Savoirs mobilisés</div>
                  <p>Exploitation SMB, FTP, SSH. Escalade de privilèges (LinPEAS), bruteforce (Burpsuite), reverse shells, analyse de hashes MD5, base Exploit-DB.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Compétences liées</div>
                  <p>Administration système et sécurité réseau comme socle. Burpsuite et LinPEAS pour naviguer dans les interfaces d'administration et obtenir des accès privilégiés.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    3.5 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Évolution</div>
                  <p>Approfondissement des techniques d'exploitation en environnements sécurisés et renforcement en cryptographie pour mieux comprendre les systèmes de protection.</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">Nmap</span><span class="proj-uni-tool">Metasploit</span><span class="proj-uni-tool">Searchsploit</span><span class="proj-uni-tool">Burpsuite</span><span class="proj-uni-tool">LinPEAS</span><span class="proj-uni-tool">Exploit-DB</span><span class="proj-uni-tool">Kali Linux</span><span class="proj-uni-tool">EternalBlue</span>
              </div>
            </div>
          </div>

          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">SAE32 — Application de messagerie</div>
                <div class="proj-uni-year">Année scolaire 2023–2024</div>
              </div>
              <div class="proj-uni-badge">Développement</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Développement d'une application de messagerie Android avec base de données locale pour la sauvegarde des conversations et des coordonnées d'utilisateurs tiers.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Compétences ciblées</div>
                  <p>Conception d'une app de messagerie avec BDD locale, manipulation des sockets pour la communication réseau, gestion des adresses IP et des ports.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    2.5 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Savoirs mobilisés</div>
                  <p>Protocoles TCP/IP, manipulation des sockets, bases de données relationnelles SQLite intégrées dans une application Android.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Compétences liées</div>
                  <p>Programmation Java, manipulation SQLite, principes des communications réseau et développement Android.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    3.0 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Évolution</div>
                  <p>Approfondissement de la gestion avancée des BDD et de la manipulation complexe des sockets pour des fonctionnalités de messagerie en temps réel.</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">Java</span><span class="proj-uni-tool">Android</span><span class="proj-uni-tool">SQLite</span><span class="proj-uni-tool">Sockets TCP/IP</span>
              </div>
            </div>
          </div>

          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">SAE24 — Projet intégratif</div>
                <div class="proj-uni-year">Année scolaire 2022–2023</div>
              </div>
              <div class="proj-uni-badge">Infrastructure réseau</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Développement de l'infrastructure complète d'une petite entreprise, assurant les besoins en qualité de service et sécurité numérique, avec simulation d'attaques réelles comme le DHCP Spoofing.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Compétences ciblées</div>
                  <p>Conception et déploiement d'infrastructures réseau, gestion de la sécurité numérique, administration système et configuration des services réseau en conditions réelles.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    3.5 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Savoirs mobilisés</div>
                  <p>Topologie réseau, protocoles de communication, virtualisation, pare-feux, VPN, DNS, DHCP, routage avancé, gestion des identités et défense en profondeur.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Compétences liées</div>
                  <p>Administration système, virtualisation et sécurité informatique. Scénarios réels de déploiement d'infrastructure et gestion quotidienne des services associés.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    4.0 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Évolution</div>
                  <p>Perfectionnement en détection et réponse aux incidents, gestion des vulnérabilités, politiques de sécurité robustes, automatisation réseau et cloud computing.</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">VPN</span><span class="proj-uni-tool">DHCP / DNS</span><span class="proj-uni-tool">Pare-feu</span><span class="proj-uni-tool">Virtualisation</span><span class="proj-uni-tool">Routage avancé</span><span class="proj-uni-tool">DHCP Spoofing</span><span class="proj-uni-tool">Téléphonie IP</span>
              </div>
            </div>
          </div>

        </div>`,
    proj_ctf: `<div class="proj-uni-grid">

          <div class="ctf-highlight">
            <div class="ctf-top">
              <div class="ctf-badge-org">🏢 Organisé par CGI</div>
            </div>
            <div class="ctf-title">CTF — Maintien en Condition Opérationnelle</div>
            <div class="ctf-sub">Compétition inter-équipes · IUT Clermont Auvergne</div>
            <p class="ctf-intro">Compétition organisée par l'entreprise CGI dans laquelle les équipes devaient assurer le fonctionnement continu d'un système d'information sous pression : des erreurs et incidents étaient injectés en permanence sur l'infrastructure, obligeant à diagnostiquer, corriger et sécuriser en temps réel sans interruption de service.</p>
            <div class="ctf-sections">
              <div class="ctf-section">
                <div class="ctf-section-title">🎯 Objectif</div>
                <p>Maintenir la disponibilité et l'intégrité d'un système malgré des pannes, erreurs applicatives et incidents réseau injectés de façon continue par les organisateurs. Chaque équipe devait réagir rapidement pour corriger sans jamais interrompre le service.</p>
              </div>
              <div class="ctf-section">
                <div class="ctf-section-title">⚙️ Composantes techniques</div>
                <p>L'infrastructure comprenait une application Java à maintenir, une base de données à surveiller et réparer, des règles de firewalling à ajuster en temps réel, et des services réseau à garder opérationnels sous contrainte.</p>
              </div>
              <div class="ctf-section">
                <div class="ctf-section-title">🧠 Compétences mobilisées</div>
                <p>Diagnostic rapide de pannes, débogage applicatif Java, administration de BDD sous pression, gestion de règles firewall dynamiques, travail en équipe et prise de décision en temps contraint.</p>
              </div>
              <div class="ctf-section">
                <div class="ctf-section-title">📈 Apports</div>
                <p>Expérience concrète de la gestion de crise en environnement IT, renforcement des réflexes d'administration système/réseau et de la capacité à prioriser les actions sous stress opérationnel.</p>
              </div>
            </div>
            <div class="ctf-tools">
              <span class="ctf-tool">Java</span><span class="ctf-tool">Base de données</span><span class="ctf-tool">Firewalling</span><span class="ctf-tool">Administration réseau</span><span class="ctf-tool">Diagnostic système</span><span class="ctf-tool">Travail en équipe</span><span class="ctf-tool">Gestion de crise</span>
            </div>
          </div>

        </div>`
  },
  en: {
    topbar: `Available for a <strong>work-study contract from September 2026</strong> · <a href="mailto:charles.diene@etudiant.univ-brest.fr">charles.diene@etudiant.univ-brest.fr</a>`,
    section_header: `<div class="section-tag">Projects</div>
<div class="section-title">My work</div>
<p class="section-sub">Professional, academic projects and competitions completed during my training.</p>`,
    proj_tabs: `<button class="proj-tab active" onclick="switchProj('pro',this)">💼 Professional</button>
<button class="proj-tab" onclick="switchProj('uni',this)">🎓 Academic</button>
<button class="proj-tab" onclick="switchProj('ctf',this)">🏆 CTF & Competitions</button>`,
    proj_pro: `<div style="margin-bottom:2rem" class="proj-uni-card">
  <div class="proj-uni-header blue">
    <div>
      <div class="proj-uni-title">Datacenter Firewall Analysis & Overhaul</div>
      <div class="proj-uni-year">Internship 2024–2025 · Association Hospitalière Sainte Marie</div>
    </div>
    <div class="proj-uni-badge">Cybersecurity & Firewall</div>
  </div>
  <div class="proj-uni-body">
    <p class="proj-uni-intro">During my internship at Association Hospitalière Sainte Marie, I led an audit and overhaul of the datacenter firewalls. The objective was to strengthen the hospital network security posture by analysing the existing setup, identifying misconfigurations, and implementing concrete corrective measures.</p>
    <div class="proj-uni-sections">
      <div class="proj-uni-section">
        <div class="proj-uni-section-title">🎯 Targeted Skills</div>
        <p>Security audit of perimeter equipment, analysis of existing filtering rules, identification of at-risk configurations and strengthening of the firewall security policy in a critical production environment.</p>
        <div class="proj-uni-level">
          <div class="proj-uni-level-dots">
            <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div>
          </div>
          4.1 / 5
        </div>
      </div>
      <div class="proj-uni-section">
        <div class="proj-uni-section-title">📚 Knowledge Applied</div>
        <p>Network traffic and security log analysis, datacenter architecture understanding, filtering rule and security zone management, event monitoring and correlation via SIEM.</p>
      </div>
      <div class="proj-uni-section">
        <div class="proj-uni-section-title">🔗 Related Skills</div>
        <p>Project management appliquée à la sécurité : planification des phases d'audit, rédaction des livrables, communication avec les équipes techniques et suivi des mesures correctives dans un environnement contraint (milieu hospitalier).</p>
        <div class="proj-uni-level">
          <div class="proj-uni-level-dots">
            <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div>
          </div>
          4.3 / 5
        </div>
      </div>
      <div class="proj-uni-section">
        <div class="proj-uni-section-title">📈 Takeaways</div>
        <p>This mission confirmed my interest in critical infrastructure security, gave me a concrete view of hospital availability challenges, and encouraged me to pursue firewall certifications (Fortinet NSE, Sophos).</p>
      </div>
    </div>
    <div class="proj-uni-tools">
      <span class="proj-uni-tool">FortiGate</span><span class="proj-uni-tool">Sophos</span><span class="proj-uni-tool">Graylog</span><span class="proj-uni-tool">Audit sécurité</span><span class="proj-uni-tool">Traffic analysis</span><span class="proj-uni-tool">Corrective measures</span><span class="proj-uni-tool">Project management</span><span class="proj-uni-tool">SIEM</span>
    </div>
  </div>
</div>
        <div class="proj-uni-grid">

          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">Network Infrastructure Performance Testing Platform</div>
                <div class="proj-uni-year">2nd-year internship — Ministry</div>
              </div>
              <div class="proj-uni-badge">Network monitoring</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Deployment of a monitoring stack to identify network slowness causes on the Ministry's infrastructure. Configuration and automation of performance testing and network monitoring tools.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Targeted Skills</div>
                  <p>Network administration, tests de performance, gestion de supervision et automatisation de scripts. Évaluation des performances réseau et gestion des infrastructures.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div>
                    </div>
                    4.2 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Knowledge Applied</div>
                  <p>TCP, UDP, ICMP protocols, packet management and network latency, congestion algorithms (Cubic, BBR). Python scripting to configure and automate the platform.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Related Skills</div>
                  <p>Virtualisation, IT systems management and script automation as foundations. Network infrastructure deployment and monitoring with open-source tools.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    4.0 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Takeaways</div>
                  <p>Deepening performance evaluation under high loads and optimising network infrastructure security in production.</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">Iperf</span><span class="proj-uni-tool">Nuttcp</span><span class="proj-uni-tool">Netperf</span><span class="proj-uni-tool">Zabbix</span><span class="proj-uni-tool">Grafana</span><span class="proj-uni-tool">Prometheus</span><span class="proj-uni-tool">InfluxDB</span><span class="proj-uni-tool">Python</span><span class="proj-uni-tool">TCP/UDP/ICMP</span>
              </div>
            </div>
          </div>

        </div>`,
    proj_uni: `<div class="proj-uni-grid">

          <!-- 2024-2025 -->
          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">Final Project — Enterprise Infrastructure Hardening</div>
                <div class="proj-uni-year">Academic year 2024–2025</div>
              </div>
              <div class="proj-uni-badge">Defensive Security</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Real-world scenario: designing an attack combining ransomware and SQL injection aimed at denial of service, then deploying defensive measures to protect, detect and respond to threats on the target infrastructure.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Targeted Skills</div>
                  <p>Designing realistic attack scenarios (ransomware, SQL injection, DoS), deploying a complete defensive security architecture, event monitoring and automated incident response.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div>
                    </div>4.5 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Knowledge Applied</div>
                  <p>Firewall filtering rules, data encryption at rest and in transit, IDS/IPS configuration, SIEM event correlation, automated response playbooks.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Related Skills</div>
                  <p>Secure network architecture, Linux/Windows system administration, knowledge of attack vectors, business continuity and post-incident corrective measures.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div>
                    </div>4.5 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Takeaways</div>
                  <p>Ce projet a consolidé ma vision globale de la cyberdéfense. Maîtrise de la chaîne complète attaque → détection → réponse. Encourage l'approfondissement des certifications Blue Team (SOC Analyst, Wazuh).</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">Pare-feu</span><span class="proj-uni-tool">IDS/IPS</span><span class="proj-uni-tool">Chiffrement</span><span class="proj-uni-tool">Splunk</span><span class="proj-uni-tool">Wazuh</span><span class="proj-uni-tool">Ransomware</span><span class="proj-uni-tool">Injection SQL</span><span class="proj-uni-tool">Alertes automatiques</span><span class="proj-uni-tool">SIEM</span>
              </div>
            </div>
          </div>

          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">Analyse forensique — Investigation sur disques compromis</div>
                <div class="proj-uni-year">Academic year 2024–2025</div>
              </div>
              <div class="proj-uni-badge">Forensique & RGPD</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Analyse forensique de deux disques compromis (Linux et Windows) fournis dans le cadre d'une investigation numérique. Reconstitution du séquençage des événements, récupération des données supprimées, analyse des processus actifs et rédaction d'un rapport de preuves à valeur juridique.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Targeted Skills</div>
                  <p>Analyse de disques compromis Linux et Windows, investigation mémoire, reconstruction de la chronologie de l'attaquant, récupération de données supprimées, rapport forensique à valeur probante.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>3.8 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Knowledge Applied</div>
                  <p>Registres système Windows, reconstruction des commandes CMD, analyse de code malveillant, parsing PDF suspects, RGPD et exigences de preuve numérique en cadre légal.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Related Skills</div>
                  <p>Administration système Linux/Windows, artefacts système (journaux, registres, prefetch), techniques d'effacement de traces et méthodes de persistance des attaquants.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>4.0 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Takeaways</div>
                  <p>Intérêt confirmé pour la cybercriminalistique et la réponse judiciaire. Objectif d'approfondir les normes de preuve numérique (ISO 27037) et les outils d'investigation avancés.</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">Volatility</span><span class="proj-uni-tool">Récupération de données</span><span class="proj-uni-tool">PDF Parser</span><span class="proj-uni-tool">Registres Windows</span><span class="proj-uni-tool">Analyse de processus</span><span class="proj-uni-tool">Forensique Linux</span><span class="proj-uni-tool">RGPD</span><span class="proj-uni-tool">Rapport juridique</span>
              </div>
            </div>
          </div>

          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">Audit de sécurité — Test d'intrusion d'un SI d'entreprise</div>
                <div class="proj-uni-year">Academic year 2024–2025</div>
              </div>
              <div class="proj-uni-badge">Pentest & Audit</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Mise en situation réelle : une entreprise nous mandate pour tester la robustesse de son SI. Mission en deux phases — reconnaissance passive (OSINT) puis tests d'intrusion actifs — aboutissant à un rapport d'audit complet avec mesures correctives priorisées.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Targeted Skills</div>
                  <p>Audit de sécurité complet : OSINT sur l'entreprise et ses employés, puis tests d'intrusion actifs incluant l'exploitation de vulnérabilités critiques comme Log4Shell (CVE-2021-44228).</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>3.5 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Knowledge Applied</div>
                  <p>OSINT (passive recon: employees, domains, exposed services), Log4j/Log4Shell exploitation, vulnerability analysis and structured audit report with prioritised recommendations.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Related Skills</div>
                  <p>Penetration testing, CVE databases, professional client communication, translating technical findings into accessible recommendations for non-technical decision-makers.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>3.6 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Takeaways</div>
                  <p>Full vision of the security auditor role. Strengthens the desire to specialise in Red Team missions and obtain recognised certifications (OSCP).</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">OSINT</span><span class="proj-uni-tool">Log4j / Log4Shell</span><span class="proj-uni-tool">Nmap</span><span class="proj-uni-tool">Metasploit</span><span class="proj-uni-tool">CVE analysis</span><span class="proj-uni-tool">Audit report</span><span class="proj-uni-tool">Corrective measures</span><span class="proj-uni-tool">Kali Linux</span>
              </div>
            </div>
          </div>

          <!-- 2023-2024 & 2022-2023 -->
          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">SAE501 — Building an Open Source Private Cloud Solution</div>
                <div class="proj-uni-year">Academic year 2024–2025</div>
              </div>
              <div class="proj-uni-badge">Cloud & Infra</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Building a private cloud solution to move away from Big Tech, mastering data confidentiality, security and cost control. Deployment of a Nextcloud server on Raspberry Pi 4 with secure remote access.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Targeted Skills</div>
                  <p>Design, installation and administration of open-source private cloud solutions. Container management, network administration, VPN tunnels and mail server.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    3.8 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Knowledge Applied</div>
                  <p>SSL/TLS certificate management, WebRTC protocols, CalDAV/CardDAV for sync, secure configuration with OpenSSL and Coturn.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Related Skills</div>
                  <p>Linux administration (Debian), containerisation, SSL/TLS hardening via HAProxy, Nextcloud trusted_domains management.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    3.6 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Takeaways</div>
                  <p>Deepening advanced container management, network performance optimisation and applied cryptography. Exploration of Pydio Cells.</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">Docker</span><span class="proj-uni-tool">Docker Compose</span><span class="proj-uni-tool">HAProxy</span><span class="proj-uni-tool">Nextcloud</span><span class="proj-uni-tool">ZeroTier</span><span class="proj-uni-tool">Postfix</span><span class="proj-uni-tool">Dovecot</span><span class="proj-uni-tool">SSL/TLS</span><span class="proj-uni-tool">Raspberry Pi 4</span><span class="proj-uni-tool">Debian</span>
              </div>
            </div>
          </div>

          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">SAE34 — Penetration Testing</div>
                <div class="proj-uni-year">Academic year 2023–2024</div>
              </div>
              <div class="proj-uni-badge">Cybersecurity</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Intrusion tests on multiple VMs to gain administrator access. Vulnerability identification, critical flaw exploitation and privilege escalation on target systems.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Targeted Skills</div>
                  <p>Managing and exploiting network/system vulnerabilities: port scans, identifying critical flaws (EternalBlue), exploit selection and attack automation.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    3.7 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Knowledge Applied</div>
                  <p>SMB, FTP, SSH exploitation. Privilege escalation (LinPEAS), bruteforce (Burpsuite), reverse shells, MD5 hash analysis, Exploit-DB.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Related Skills</div>
                  <p>System administration and network security as a foundation. Burpsuite and LinPEAS to navigate admin interfaces and gain privileged access.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    3.5 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Takeaways</div>
                  <p>Deepening exploitation techniques in secured environments and strengthening cryptography knowledge to better understand protection systems.</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">Nmap</span><span class="proj-uni-tool">Metasploit</span><span class="proj-uni-tool">Searchsploit</span><span class="proj-uni-tool">Burpsuite</span><span class="proj-uni-tool">LinPEAS</span><span class="proj-uni-tool">Exploit-DB</span><span class="proj-uni-tool">Kali Linux</span><span class="proj-uni-tool">EternalBlue</span>
              </div>
            </div>
          </div>

          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">SAE32 — Application de messagerie</div>
                <div class="proj-uni-year">Academic year 2023–2024</div>
              </div>
              <div class="proj-uni-badge">Développement</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Développement d'une application de messagerie Android avec base de données locale pour la sauvegarde des conversations et des coordonnées d'utilisateurs tiers.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Targeted Skills</div>
                  <p>Conception d'une app de messagerie avec BDD locale, manipulation des sockets pour la communication réseau, gestion des adresses IP et des ports.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    2.5 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Knowledge Applied</div>
                  <p>Protocoles TCP/IP, manipulation des sockets, bases de données relationnelles SQLite intégrées dans une application Android.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Related Skills</div>
                  <p>Programmation Java, manipulation SQLite, principes des communications réseau et développement Android.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    3.0 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Takeaways</div>
                  <p>Approfondissement de la gestion avancée des BDD et de la manipulation complexe des sockets pour des fonctionnalités de messagerie en temps réel.</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">Java</span><span class="proj-uni-tool">Android</span><span class="proj-uni-tool">SQLite</span><span class="proj-uni-tool">Sockets TCP/IP</span>
              </div>
            </div>
          </div>

          <div class="proj-uni-card">
            <div class="proj-uni-header blue">
              <div>
                <div class="proj-uni-title">SAE24 — Projet intégratif</div>
                <div class="proj-uni-year">Academic year 2022–2023</div>
              </div>
              <div class="proj-uni-badge">Infrastructure réseau</div>
            </div>
            <div class="proj-uni-body">
              <p class="proj-uni-intro">Développement de l'infrastructure complète d'une petite entreprise, assurant les besoins en qualité de service et sécurité numérique, avec simulation d'attaques réelles comme le DHCP Spoofing.</p>
              <div class="proj-uni-sections">
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🎯 Targeted Skills</div>
                  <p>Conception et déploiement d'infrastructures réseau, gestion de la sécurité numérique, administration système et configuration des services réseau en conditions réelles.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    3.5 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📚 Knowledge Applied</div>
                  <p>Topologie réseau, protocoles de communication, virtualisation, pare-feux, VPN, DNS, DHCP, routage avancé, gestion des identités et défense en profondeur.</p>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">🔗 Related Skills</div>
                  <p>Administration système, virtualisation et sécurité informatique. Scénarios réels de déploiement d'infrastructure et gestion quotidienne des services associés.</p>
                  <div class="proj-uni-level">
                    <div class="proj-uni-level-dots">
                      <div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot filled"></div><div class="proj-uni-level-dot"></div>
                    </div>
                    4.0 / 5
                  </div>
                </div>
                <div class="proj-uni-section">
                  <div class="proj-uni-section-title">📈 Takeaways</div>
                  <p>Perfectionnement en détection et réponse aux incidents, gestion des vulnérabilités, politiques de sécurité robustes, automatisation réseau et cloud computing.</p>
                </div>
              </div>
              <div class="proj-uni-tools">
                <span class="proj-uni-tool">VPN</span><span class="proj-uni-tool">DHCP / DNS</span><span class="proj-uni-tool">Pare-feu</span><span class="proj-uni-tool">Virtualisation</span><span class="proj-uni-tool">Routage avancé</span><span class="proj-uni-tool">DHCP Spoofing</span><span class="proj-uni-tool">Téléphonie IP</span>
              </div>
            </div>
          </div>

        </div>`,
    proj_ctf: `<div class="proj-uni-grid">

          <div class="ctf-highlight">
            <div class="ctf-top">
              <div class="ctf-badge-org">🏢 Organised by CGI</div>
            </div>
            <div class="ctf-title">CTF — Operational Continuity Challenge</div>
            <div class="ctf-sub">Inter-team competition · IUT Clermont Auvergne</div>
            <p class="ctf-intro">A competition organised by CGI where teams had to keep an information system running under pressure: errors and incidents were continuously injected into the infrastructure, forcing teams to diagnose, fix and secure in real time without any service interruption.</p>
            <div class="ctf-sections">
              <div class="ctf-section">
                <div class="ctf-section-title">🎯 Objective</div>
                <p>Maintain system availability and integrity despite continuous outages, application errors and network incidents injected by the organisers. Each team had to react quickly to fix issues without ever interrupting service.</p>
              </div>
              <div class="ctf-section">
                <div class="ctf-section-title">⚙️ Technical Components</div>
                <p>The infrastructure included a Java application to maintain, a database to monitor and repair, firewall rules to adjust in real time, and network services to keep operational under pressure.</p>
              </div>
              <div class="ctf-section">
                <div class="ctf-section-title">🧠 Skills Mobilised</div>
                <p>Rapid fault diagnosis, Java application debugging, database administration under pressure, dynamic firewall rule management, teamwork and time-constrained decision-making.</p>
              </div>
              <div class="ctf-section">
                <div class="ctf-section-title">📈 Takeaways</div>
                <p>Concrete IT crisis management experience, reinforcement of system/network administration reflexes and the ability to prioritise actions under operational stress.</p>
              </div>
            </div>
            <div class="ctf-tools">
              <span class="ctf-tool">Java</span><span class="ctf-tool">Database</span><span class="ctf-tool">Firewalling</span><span class="ctf-tool">Network administration</span><span class="ctf-tool">System diagnostics</span><span class="ctf-tool">Teamwork</span><span class="ctf-tool">Crisis management</span>
            </div>
          </div>

        </div>`
  }
},

/* ═══════ CV ═══════ */
'page-cv': {
  fr: {
    topbar: `Disponible pour une <strong>alternance dès septembre 2026</strong> · <a href="mailto:charles.diene@etudiant.univ-brest.fr">charles.diene@etudiant.univ-brest.fr</a>`,
    section_header: `<div class="section-tag">CV</div>
<div class="section-title">Curriculum Vitæ</div>
<p class="section-sub">Mon CV complet — disponible en téléchargement.</p>`,
    cv_sidebar_sec1: `Contact`,
    cv_sidebar_sec2: `Compétences clés`,
    cv_sidebar_skills: `<div class="cv-skill-item"><div class="cv-skill-name">Firewalling / Sécurité périmétrique</div><div class="cv-bar-bg"><div class="cv-bar-fill" style="width:88%"></div></div></div>
<div class="cv-skill-item"><div class="cv-skill-name">Pentesting / Audit</div><div class="cv-bar-bg"><div class="cv-bar-fill" style="width:82%"></div></div></div>
<div class="cv-skill-item"><div class="cv-skill-name">Administration réseau</div><div class="cv-bar-bg"><div class="cv-bar-fill" style="width:85%"></div></div></div>
<div class="cv-skill-item"><div class="cv-skill-name">SIEM / SOC</div><div class="cv-bar-bg"><div class="cv-bar-fill" style="width:75%"></div></div></div>
<div class="cv-skill-item"><div class="cv-skill-name">Python / Scripting</div><div class="cv-bar-bg"><div class="cv-bar-fill" style="width:72%"></div></div></div>`,
    cv_sidebar_sec3: `Langues`,
    cv_sidebar_sec4: `Centres d'intérêt`,
    cv_sidebar_interests: `<span style="background:rgba(255,255,255,.1);padding:.15rem .5rem;border-radius:2rem;font-size:.68rem">🏀 Basketball</span>
<span style="background:rgba(255,255,255,.1);padding:.15rem .5rem;border-radius:2rem;font-size:.68rem">🏕 Scoutisme</span>
<span style="background:rgba(255,255,255,.1);padding:.15rem .5rem;border-radius:2rem;font-size:.68rem">💪 Callisthénie</span>
<span style="background:rgba(255,255,255,.1);padding:.15rem .5rem;border-radius:2rem;font-size:.68rem">📚 Lecture</span>`,
    cv_block_formation: `Formation`,
    cv_formation_items: `<div class="cv-exp-item"><div class="cv-exp-header"><div class="cv-exp-title">Master Télécommunications, Réseaux & Cybersécurité</div><div class="cv-exp-date">2025 — 2026</div></div><div class="cv-exp-place">Université de Bretagne Occidentale — Brest</div><div class="cv-exp-desc">En cours — recherche alternance sept. 2026.</div></div>
<div class="cv-exp-item"><div class="cv-exp-header"><div class="cv-exp-title">BUT Réseaux & Télécommunications — Option Cybersécurité</div><div class="cv-exp-date">2022 — 2025</div></div><div class="cv-exp-place">IUT Clermont Auvergne</div><div class="cv-exp-desc">Administration réseau, sécurité informatique, téléphonie IP, virtualisation et gestion de projets IT.</div></div>
<div class="cv-exp-item"><div class="cv-exp-header"><div class="cv-exp-title">Baccalauréat Sciences Expérimentales</div><div class="cv-exp-date">2019 — 2022</div></div><div class="cv-exp-place">Prytanée Militaire de Saint-Louis, Sénégal — Maths, Physique-Chimie, SVT</div></div>`,
    cv_block_exp: `Expériences professionnelles`,
    cv_exp_items: `<div class="cv-exp-item"><div class="cv-exp-header"><div class="cv-exp-title">Stagiaire — Service Infrastructure & Exploitation</div><div class="cv-exp-date">2024–2025 · 16 sem.</div></div><div class="cv-exp-place">Association Hospitalière Sainte Marie — Chamalières</div><ul class="cv-bullets"><li>Audit et refonte des pare-feu datacenter hospitalier (FortiGate, Sophos)</li><li>Analyse des règles de filtrage, identification des configurations à risque</li><li>Surveillance des flux et corrélation d'événements via SIEM (Graylog)</li><li>Rédaction des livrables et suivi des mesures correctives</li></ul></div>
<div class="cv-exp-item"><div class="cv-exp-header"><div class="cv-exp-title">Stagiaire — Network Operating Center</div><div class="cv-exp-date">2023–2024 · 10 sem.</div></div><div class="cv-exp-place">Rectorat de Clermont-Ferrand (Ministère de l'Éducation)</div><ul class="cv-bullets"><li>Déploiement d'une plateforme de test de performance réseau (Iperf, Nuttcp)</li><li>Supervision et métrologie avec stack open-source (Zabbix, Grafana, InfluxDB)</li><li>Automatisation des tests via scripts Python (TCP/UDP/ICMP)</li></ul></div>`,
    cv_block_comp: `Compétences techniques`,
    cv_download: `⬇ Télécharger le CV (PDF)`
  },
  en: {
    topbar: `Available for a <strong>work-study contract from September 2026</strong> · <a href="mailto:charles.diene@etudiant.univ-brest.fr">charles.diene@etudiant.univ-brest.fr</a>`,
    section_header: `<div class="section-tag">Resume</div>
<div class="section-title">Curriculum Vitæ</div>
<p class="section-sub">My full resume — available for download.</p>`,
    cv_sidebar_sec1: `Contact`,
    cv_sidebar_sec2: `Key Skills`,
    cv_sidebar_skills: `<div class="cv-skill-item"><div class="cv-skill-name">Firewalling / Perimeter Security</div><div class="cv-bar-bg"><div class="cv-bar-fill" style="width:88%"></div></div></div>
<div class="cv-skill-item"><div class="cv-skill-name">Pentesting / Audit</div><div class="cv-bar-bg"><div class="cv-bar-fill" style="width:82%"></div></div></div>
<div class="cv-skill-item"><div class="cv-skill-name">Network Administration</div><div class="cv-bar-bg"><div class="cv-bar-fill" style="width:85%"></div></div></div>
<div class="cv-skill-item"><div class="cv-skill-name">SIEM / SOC</div><div class="cv-bar-bg"><div class="cv-bar-fill" style="width:75%"></div></div></div>
<div class="cv-skill-item"><div class="cv-skill-name">Python / Scripting</div><div class="cv-bar-bg"><div class="cv-bar-fill" style="width:72%"></div></div></div>`,
    cv_sidebar_sec3: `Languages`,
    cv_sidebar_sec4: `Interests`,
    cv_sidebar_interests: `<span style="background:rgba(255,255,255,.1);padding:.15rem .5rem;border-radius:2rem;font-size:.68rem">🏀 Basketball</span>
<span style="background:rgba(255,255,255,.1);padding:.15rem .5rem;border-radius:2rem;font-size:.68rem">🏕 Scouting</span>
<span style="background:rgba(255,255,255,.1);padding:.15rem .5rem;border-radius:2rem;font-size:.68rem">💪 Calisthenics</span>
<span style="background:rgba(255,255,255,.1);padding:.15rem .5rem;border-radius:2rem;font-size:.68rem">📚 Reading</span>`,
    cv_block_formation: `Education`,
    cv_formation_items: `<div class="cv-exp-item"><div class="cv-exp-header"><div class="cv-exp-title">Master's — Telecommunications, Networks & Cybersecurity</div><div class="cv-exp-date">2025 — 2026</div></div><div class="cv-exp-place">University of Western Brittany (UBO) — Brest</div><div class="cv-exp-desc">In progress — seeking work-study contract Sept. 2026.</div></div>
<div class="cv-exp-item"><div class="cv-exp-header"><div class="cv-exp-title">Bachelor of Technology — Networks & Telecommunications, Cybersecurity</div><div class="cv-exp-date">2022 — 2025</div></div><div class="cv-exp-place">IUT Clermont Auvergne</div><div class="cv-exp-desc">Network administration, IT security, IP telephony, virtualisation and IT project management.</div></div>
<div class="cv-exp-item"><div class="cv-exp-header"><div class="cv-exp-title">Scientific Baccalaureate</div><div class="cv-exp-date">2019 — 2022</div></div><div class="cv-exp-place">Military Academy of Saint-Louis, Senegal — Maths, Physics-Chemistry, Biology</div></div>`,
    cv_block_exp: `Professional Experience`,
    cv_exp_items: `<div class="cv-exp-item"><div class="cv-exp-header"><div class="cv-exp-title">Intern — Infrastructure & Operations</div><div class="cv-exp-date">2024–2025 · 16 wks.</div></div><div class="cv-exp-place">Association Hospitalière Sainte Marie — Chamalières</div><ul class="cv-bullets"><li>Audit and redesign of hospital datacenter firewalls (FortiGate, Sophos)</li><li>Filtering rule analysis, identification of at-risk configurations</li><li>Traffic monitoring and event correlation via SIEM (Graylog)</li><li>Deliverable writing and corrective measure follow-up</li></ul></div>
<div class="cv-exp-item"><div class="cv-exp-header"><div class="cv-exp-title">Intern — Network Operating Center</div><div class="cv-exp-date">2023–2024 · 10 wks.</div></div><div class="cv-exp-place">Rectorat de Clermont-Ferrand (Ministry of Education)</div><ul class="cv-bullets"><li>Deployment of a network performance testing platform (Iperf, Nuttcp)</li><li>Monitoring and metrology with open-source stack (Zabbix, Grafana, InfluxDB)</li><li>Test automation via Python scripts (TCP/UDP/ICMP)</li></ul></div>`,
    cv_block_comp: `Technical Skills`,
    cv_download: `⬇ Download Resume (PDF)`
  }
}

}; // end CONTENT

/* ── NAV TRANSLATIONS ────────────────────────────────────────── */
const NAV = {
  fr: { home:'Accueil', about:'À propos de Moi', cursus:'Cursus / Expériences', skills:'Mes Compétences', projects:'Projets', cv:'CV', portfolio:'Portfolio', footer:'Portfolio · Copyright © 2026 <strong>Charles J. Diene</strong> Tous droits réservés.', theme_dark:'Nuit', theme_light:'Jour' },
  en: { home:'Home', about:'About Me', cursus:'Education / Experience', skills:'My Skills', projects:'Projects', cv:'Resume', portfolio:'Portfolio', footer:'Portfolio · Copyright © 2026 <strong>Charles J. Diene</strong> All rights reserved.', theme_dark:'Night', theme_light:'Day' }
};

/* ── STATE ──────────────────────────────────────────────────── */
let lang  = localStorage.getItem('cjd_lang')  || 'fr';
let theme = localStorage.getItem('cjd_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

/* ── DETECT PAGE ────────────────────────────────────────────── */
function detectPage() {
  const path = location.pathname.split('/').pop() || 'index.html';
  if (path.includes('surmoi'))      return 'page-surmoi';
  if (path.includes('cursus'))      return 'page-cursus';
  if (path.includes('competences')) return 'page-competences';
  if (path.includes('projets'))     return 'page-projets';
  if (path.includes('cv'))          return 'page-cv';
  return 'page-index';
}

/* ── INJECT CSS ─────────────────────────────────────────────── */
function injectCSS() {
  const s = document.createElement('style');
  s.textContent = `
[data-theme="dark"] {
  --white:#111e2e!important;--bg:#0d1929!important;--bg2:#162236!important;
  --border:#243650!important;--ink:#dde8f5!important;
  --slate:#8fa8c2!important;--slate-l:#5d7a96!important;
  --tag-bg:rgba(44,111,173,.18)!important;--tag-c:#7fbfee!important;
}
[data-theme="dark"] body{background:#111e2e;color:#dde8f5}
[data-theme="dark"] nav{background:#111e2e!important;border-color:#243650!important}
[data-theme="dark"] .subnav{background:#111e2e!important;border-color:#243650!important}
[data-theme="dark"] .hero{background:linear-gradient(160deg,#0d1a2e 0%,#111e2e 60%)!important;border-color:#243650!important}
[data-theme="dark"] .hero-card,[data-theme="dark"] .info-card,[data-theme="dark"] .skill-card-full,
[data-theme="dark"] .divers-card,[data-theme="dark"] .proj-uni-card,[data-theme="dark"] .contact-link{background:#162236!important;border-color:#243650!important}
[data-theme="dark"] .section-alt{background:#0d1929!important}
[data-theme="dark"] .form-input,[data-theme="dark"] .form-textarea{background:#162236;border-color:#243650;color:#dde8f5}
[data-theme="dark"] .skill-tool,[data-theme="dark"] .proj-uni-tool{background:#1e3250;border-color:#243650;color:#8fa8c2}
[data-theme="dark"] .skill-detail-item,[data-theme="dark"] .proj-uni-section{background:#0d1929!important;border-color:#243650!important}
[data-theme="dark"] .tl-dot{border-color:#111e2e!important}
[data-theme="dark"] footer{background:#0a1220}
[data-theme="dark"] .hero-card-img{background:#1e3250}
[data-theme="dark"] .comp-tabs,[data-theme="dark"] .proj-tabs{border-color:#243650}
[data-theme="dark"] .about-highlight{background:rgba(44,111,173,.15);color:#7fbfee}

.tl-controls{display:flex;align-items:center;gap:.45rem;margin-right:.75rem}
.tl-btn{display:inline-flex;align-items:center;gap:.3rem;background:var(--tag-bg,#e8f0f8);border:1px solid rgba(44,111,173,.18);border-radius:2rem;padding:.3rem .75rem;font-family:'DM Sans',sans-serif;font-size:.7rem;font-weight:600;color:var(--slate,#4a5e72);cursor:pointer;transition:background .2s,color .2s,border-color .2s;letter-spacing:.03em;white-space:nowrap}
.tl-btn:hover{color:var(--blue,#2c6fad);border-color:rgba(44,111,173,.4)}
.tl-lang-opt{opacity:.4;transition:opacity .2s}
.tl-lang-opt.tl-active{opacity:1;color:var(--blue,#2c6fad)}
.tl-lang-sep{opacity:.25}
body,nav,.hero,.hero-card,.info-card,.skill-card-full,.section,.section-alt,footer,.topbar{transition:background .3s,color .3s,border-color .3s}
  `;
  document.head.appendChild(s);
}

/* ── INJECT CONTROLS ────────────────────────────────────────── */
function injectControls() {
  const wrap = document.querySelector('.nav-cv-wrap');
  if (!wrap) return;
  const ctrl = document.createElement('div');
  ctrl.className = 'tl-controls';
  ctrl.innerHTML = `<button class="tl-btn tl-btn-lang" id="tlBtnLang"><span class="tl-lang-opt" id="tlFR">FR</span><span class="tl-lang-sep">/</span><span class="tl-lang-opt" id="tlEN">EN</span></button><button class="tl-btn" id="tlBtnTheme"><span id="tlIcon"></span><span id="tlLabel"></span></button>`;
  wrap.insertBefore(ctrl, wrap.firstChild);
  document.getElementById('tlBtnTheme').onclick = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  document.getElementById('tlBtnLang').onclick  = () => setLang(lang === 'fr' ? 'en' : 'fr');
}

/* ── SET THEME ──────────────────────────────────────────────── */
function setTheme(t) {
  theme = t;
  localStorage.setItem('cjd_theme', t);
  document.documentElement.setAttribute('data-theme', t === 'dark' ? 'dark' : '');
  const icon  = document.getElementById('tlIcon');
  const label = document.getElementById('tlLabel');
  if (!icon) return;
  icon.textContent  = t === 'dark' ? '☀️' : '🌙';
  label.textContent = t === 'dark' ? NAV[lang].theme_light : NAV[lang].theme_dark;
}

/* ── APPLY TRANSLATION ──────────────────────────────────────── */
function applyContent(l) {
  const page = detectPage();
  const C = CONTENT[page] && CONTENT[page][l];
  if (!C) return;

  /* helpers */
  function set(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }
  function setQ(sel, html) { const el = document.querySelector(sel); if (el) el.innerHTML = html; }
  function setTxt(sel, txt) { const el = document.querySelector(sel); if (el) el.textContent = txt; }

  /* topbar */
  setQ('.topbar', C.topbar);

  /* page-specific */
  if (page === 'page-index') {
    set('hero-content', C.hero);
    set('stats-content', C.stats);
  }
  if (page === 'page-surmoi') {
    set('section-header', C.section_header);
    set('about-text', C.about_text);
    set('about-sidebar', C.about_sidebar);
  }
  if (page === 'page-cursus') {
    set('section-header', C.section_header);
    setQ('#formation-label-text', C.formation_label);
    setQ('#experiences-label-text', C.experiences_label);
    set('formation-timeline', C.formation_timeline);
    set('experience-timeline', C.experience_timeline);
  }
  if (page === 'page-competences') {
    set('section-header', C.section_header);
    set('comp-tabs', C.comp_tabs);
    set('cyber-panel-content', C.cyber_panel);
    set('reseau-panel-content', C.reseau_panel);
  }
  if (page === 'page-projets') {
    set('section-header', C.section_header);
    // Remember active panel before replacing tabs
    const activePanel = document.querySelector('.proj-panel.active');
    const activePanelId = activePanel ? activePanel.id : 'proj-pro';
    set('proj-tabs', C.proj_tabs);
    set('proj-pro', C.proj_pro);
    set('proj-uni', C.proj_uni);
    set('proj-ctf', C.proj_ctf);
    // Restore panel classes after innerHTML wipe
    document.querySelectorAll('.proj-panel').forEach(p => p.classList.remove('active'));
    const restore = document.getElementById(activePanelId);
    if (restore) restore.classList.add('active');
    // Re-attach onclick and active state to tabs
    const tabIds = ['pro','uni','ctf'];
    document.querySelectorAll('.proj-tab').forEach((btn, i) => {
      btn.onclick = () => { switchProj(tabIds[i], btn); };
      if ('proj-' + tabIds[i] === activePanelId) btn.classList.add('active');
    });
  }
  if (page === 'page-cv') {
    set('section-header', C.section_header);
    setQ('#cv-sidebar-sec1', C.cv_sidebar_sec1);
    setQ('#cv-sidebar-sec2', C.cv_sidebar_sec2);
    set('cv-sidebar-skills', C.cv_sidebar_skills);
    setQ('#cv-sidebar-sec3', C.cv_sidebar_sec3);
    setQ('#cv-sidebar-sec4', C.cv_sidebar_sec4);
    set('cv-sidebar-interests', C.cv_sidebar_interests);
    setQ('#cv-block-formation', C.cv_block_formation);
    set('cv-formation-items', C.cv_formation_items);
    setQ('#cv-block-exp', C.cv_block_exp);
    set('cv-exp-items', C.cv_exp_items);
    setQ('#cv-block-comp', C.cv_block_comp);
    setQ('.cv-download', C.cv_download);
  }

  /* Nav links */
  const navMap = {'index.html':'home','surmoi.html':'about','cursus.html':'cursus','competences.html':'skills','projets.html':'projects','cv.html':'cv'};
  document.querySelectorAll('.nav-tabs li a').forEach(a => {
    const key = navMap[a.getAttribute('href')];
    if (key) a.textContent = NAV[l][key];
  });
  /* logo small */
  const ls = document.querySelector('.nav-logo-text small'); if (ls) ls.textContent = NAV[l].portfolio;
  /* cv btn */
  const bn = document.querySelector('.btn-nav'); if (bn) bn.textContent = NAV[l].cv;
  /* footer */
  const ft = document.querySelector('footer'); if (ft) ft.innerHTML = NAV[l].footer;
  /* lang btn */
  const fr = document.getElementById('tlFR'); if (fr) fr.classList.toggle('tl-active', l==='fr');
  const en = document.getElementById('tlEN'); if (en) en.classList.toggle('tl-active', l==='en');
  /* theme label */
  const lb = document.getElementById('tlLabel');
  if (lb) lb.textContent = theme === 'dark' ? NAV[l].theme_light : NAV[l].theme_dark;
}

function setLang(l) {
  lang = l;
  localStorage.setItem('cjd_lang', l);
  document.documentElement.lang = l;
  applyContent(l);
}

/* ── INIT ───────────────────────────────────────────────────── */
injectCSS();
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else { boot(); }

function boot() {
  injectControls();
  setTheme(theme);
  applyContent(lang);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('cjd_theme')) setTheme(e.matches ? 'dark' : 'light');
  });
}

window.CJD = { setTheme, setLang };
})();
