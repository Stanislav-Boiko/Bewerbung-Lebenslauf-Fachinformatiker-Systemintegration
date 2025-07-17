import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [currentPage, setCurrentPage] = useState("bewerbung");
    const [showCertificate, setShowCertificate] = useState(false);
    const [showDanitCert, setShowDanitCert] = useState(false);

    // Обробка клавіші Escape для закриття модального вікна
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                setShowCertificate(false);
            }
        };

        if (showCertificate) {
            document.addEventListener("keydown", handleEscapeKey);
            // Блокування прокрутки фону
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
            document.body.style.overflow = "unset";
        };
    }, [showCertificate]);

    const BewerbungPage = () => {
        const scrollToSection = (sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        };

        return (
            <div className="main-container">
                <div className="sidebar">
                    <h3>Bewerbung Info</h3>
                    <div
                        className="sidebar-item clickable"
                        onClick={() => scrollToSection("personal-info")}
                    >
                        <h4>Persönliche Daten</h4>
                        <p>Kontaktinformationen und Datum</p>
                    </div>
                    <div
                        className="sidebar-item clickable"
                        onClick={() => scrollToSection("opening")}
                    >
                        <h4>Bewerbungsanschreiben</h4>
                        <p>Ausbildungsplatz als Fachinformatiker Systemintegration</p>
                    </div>
                    <div
                        className="sidebar-item clickable"
                        onClick={() => scrollToSection("background")}
                    >
                        <h4>Hintergrund & Kenntnisse</h4>
                        <p>IT-Entwicklung und Systemintegrations-Erfahrung</p>
                    </div>
                    <div
                        className="sidebar-item clickable"
                        onClick={() => scrollToSection("motivation")}
                    >
                        <h4>Motivation</h4>
                        <p>Warum Systemintegration meine Leidenschaft ist</p>
                    </div>
                    <div
                        className="sidebar-item clickable"
                        onClick={() => scrollToSection("qualifications")}
                    >
                        <h4>Qualifikationen</h4>
                        <p>Meine Stärken und persönliche Eigenschaften</p>
                    </div>
                    <div
                        className="sidebar-item clickable"
                        onClick={() => scrollToSection("languages")}
                    >
                        <h4>Sprachkenntnisse</h4>
                        <p>Deutsch B1→B2, Englisch und Ausbildungsstart 2026</p>
                    </div>
                    <div
                        className="sidebar-item clickable"
                        onClick={() => scrollToSection("closing")}
                    >
                        <h4>Schlusswort</h4>
                        <p>Zusammenfassung und freundliche Grüße</p>
                    </div>
                </div>

                <div className="content">
                    <h1>Bewerbung</h1>

                    <div className="content-section" id="personal-info">
                        <h2>Stanislav Boiko</h2>
                        <p>
                            <strong>Adresse:</strong> 78224 Singen (Hohentwiel)
                        </p>
                        <p>
                            <strong>Telefon:</strong> +49 1522 5916826
                        </p>
                        <p>
                            <strong>E-Mail:</strong> stani.boiko@gmail.com
                        </p>
                        <br />
                        <p>
                            <strong>Datum:</strong>{" "}
                            {new Date().toLocaleDateString("de-DE")}
                        </p>
                    </div>

                    <div className="content-section" id="opening">
                        <h2>
                            Bewerbung um einen Ausbildungsplatz als
                            Fachinformatiker – Systemintegration ab 2026
                        </h2>
                        <p>
                            <strong>Sehr geehrte Damen und Herren,</strong>
                        </p>
                        <p>
                            mit großem Interesse möchte ich mich um einen
                            Ausbildungsplatz als Fachinformatiker für
                            Systemintegration in Ihrem Unternehmen bewerben,
                            mit Beginn der Ausbildung und Praktika ab dem Jahr
                            2026. Gerne würde ich auch die Möglichkeit einer
                            Praktikumszeit mit anschließender Ausbildung und
                            Übernahme in Ihrem Unternehmen in Betracht ziehen.
                        </p>
                    </div>

                    <div className="content-section" id="background">
                        <h2>Mein Hintergrund und Kenntnisse</h2>
                        <p>
                            Seit 2,5 Jahren beschäftige ich mich aktiv mit der
                            IT-Entwicklung und habe in dieser Zeit umfassende
                            Kenntnisse in verschiedenen Bereichen der
                            Informationstechnologie erworben. Während meiner
                            Ausbildung bei Dan.IT Education habe ich nicht nur
                            Frontend-Technologien wie HTML, CSS, JavaScript und
                            React erlernt, sondern auch wichtige Grundlagen der
                            Backend-Entwicklung, Datenbanken, Git-Versionskontrolle
                            und verschiedene Hosting-Plattformen kennengelernt.
                        </p>
                        <p>
                            Besonders fasziniert mich die Systemintegration, da
                            sie alle Aspekte der IT-Infrastruktur verbindet.
                            Die Möglichkeit, komplexe Systeme zu verstehen, zu
                            konfigurieren und zu optimieren, sowie die
                            Gewährleistung reibungsloser Kommunikation zwischen
                            verschiedenen Systemen und Anwendungen entspricht
                            genau meinen Interessen und Stärken.
                        </p>
                        <p>
                            Während des Kurses konnte ich wertvolle Erfahrungen
                            in der Teamarbeit sammeln und habe erkannt, wie
                            wichtig nicht nur fachliche Kompetenz, sondern auch
                            gegenseitiger Respekt und effektive Kommunikation
                            innerhalb eines Teams sind. Ich arbeite mit Freude
                            im Team, übernehme aber ebenso gerne Aufgaben, die
                            selbstständiges und verantwortungsvolles Arbeiten
                            erfordern.
                        </p>
                    </div>

                    <div className="content-section" id="motivation">
                        <h2>Warum Systemintegration?</h2>
                        <p>
                            Die Systemintegration fasziniert mich besonders,
                            weil sie das Herzstück jeder IT-Infrastruktur
                            darstellt. Die Aufgabe, verschiedene Hardware- und
                            Software-Komponenten zu einem funktionsfähigen und
                            effizienten Gesamtsystem zu verbinden, erfordert
                            sowohl technisches Verständnis als auch analytisches
                            Denken – Eigenschaften, die ich sehr schätze und
                            weiterentwickeln möchte.
                        </p>
                        <p>
                            Während meiner IT-Entwicklung habe ich erkannt, wie
                            wichtig eine stabile und gut konfigurierte
                            IT-Infrastruktur für den Erfolg eines Unternehmens
                            ist. Von Netzwerkkonfigurationen über
                            Datenbankanbindungen bis hin zur Integration
                            verschiedener Anwendungen – all diese Aspekte der
                            Systemintegration begeistern mich und motivieren
                            mich, meine Kenntnisse in diesem Bereich zu
                            vertiefen.
                        </p>
                        <p>
                            Zurzeit entwickle ich eigenständig Projekte, um mein
                            Wissen praktisch anzuwenden und gleichzeitig ein
                            besseres Verständnis für die Integration
                            verschiedener Systeme und Technologien zu entwickeln.
                            Diese praktische Erfahrung zeigt mir täglich, wie
                            viel Freude mir die Arbeit mit komplexen
                            IT-Systemen bereitet.
                        </p>
                    </div>

                    <div className="content-section" id="qualifications">
                        <h2>Meine Stärken und Qualifikationen</h2>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <h4>Schnelles Lernen</h4>
                                <p>
                                    Ich eigne mir neue Technologien und Konzepte
                                    sehr schnell an
                                </p>
                            </div>
                            <div className="skill-item">
                                <h4>Verantwortungsbewusstsein</h4>
                                <p>
                                    Zuverlässige und gewissenhafte Arbeitsweise
                                </p>
                            </div>
                            <div className="skill-item">
                                <h4>Teamfähigkeit</h4>
                                <p>
                                    Ausgezeichnete Zusammenarbeit und
                                    Kommunikation
                                </p>
                            </div>
                            <div className="skill-item">
                                <h4>Selbstmotivation</h4>
                                <p>
                                    Eigenständiges Arbeiten und kontinuierliche
                                    Weiterbildung
                                </p>
                            </div>
                            <div className="skill-item">
                                <h4>Problemlösung</h4>
                                <p>
                                    Analytisches Denken und kreative
                                    Lösungsansätze
                                </p>
                            </div>
                            <div className="skill-item">
                                <h4>Leidenschaft</h4>
                                <p>
                                    Echte Begeisterung für IT-Systeme und
                                    Systemintegration
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="content-section" id="languages">
                        <h2>Sprachkenntnisse und Entwicklungspläne</h2>
                        <p>
                            Meine Deutschkenntnisse befinden sich derzeit auf
                            dem Niveau B1, und ich arbeite kontinuierlich daran,
                            sie weiter zu verbessern. Im Laufe des Jahres 2025
                            plane ich, meine Deutschkenntnisse auf das Niveau B2
                            zu verbessern, um optimal auf den Ausbildungsbeginn
                            im Jahr 2026 vorbereitet zu sein.
                        </p>
                        <p>
                            Parallel dazu plane ich auch, meine
                            Englischkenntnisse im Jahr 2025 zu verbessern.
                            Gute Englischkenntnisse sind in der heutigen
                            IT-Branche unerlässlich, und ich möchte sicherstellen,
                            dass ich sowohl auf Deutsch als auch auf Englisch
                            effektiv kommunizieren kann, um in einem
                            internationalen Arbeitsumfeld erfolgreich zu sein.
                        </p>
                        <p>
                            <strong>Ausbildungsstart:</strong> Ich suche einen
                            Ausbildungsplatz als Fachinformatiker für
                            Systemintegration mit Beginn im Jahr 2026. Diese
                            Zeitplanung ermöglicht es mir, meine Sprachkenntnisse
                            optimal zu verbessern und mit den bestmöglichen
                            Voraussetzungen in die Ausbildung zu starten.
                        </p>
                    </div>

                    <div className="content-section" id="closing">
                        <h2>Schlusswort</h2>
                        <p>
                            Ich bin überzeugt, dass die Erfahrungen, die ich in
                            den letzten 2,5 Jahren in der IT-Entwicklung
                            gesammelt habe, eine wertvolle Grundlage für meine
                            Ausbildung als Fachinformatiker für Systemintegration
                            darstellen. Besonders ansprechend finde ich
                            Unternehmen, die auf moderne IT-Infrastrukturen
                            setzen und innovative Systemlösungen entwickeln.
                        </p>
                        <p>
                            Da ich einen Ausbildungsstart für das Jahr 2026
                            anstrebe, habe ich im Jahr 2025 ausreichend Zeit,
                            meine Deutschkenntnisse auf B2-Niveau zu verbessern
                            und meine Englischkenntnisse zu erweitern. Diese
                            Vorbereitung wird es mir ermöglichen, mit optimalen
                            Voraussetzungen in die Ausbildung zu starten.
                        </p>
                        <p>
                            Ich habe keine Angst vor anspruchsvollen Aufgaben
                            und bin bereit, mich vollständig in die Ausbildung
                            einzubringen. Gerne würde ich Teil Ihres Teams
                            werden und mich gemeinsam mit Ihnen im Bereich der
                            Systemintegration weiterentwickeln.
                        </p>
                        <p>
                            Über eine Einladung zu einem persönlichen Gespräch
                            würde ich mich sehr freuen.
                        </p>
                        <p>
                            <strong>Mit freundlichen Grüßen</strong>
                        </p>
                        <p>
                            <strong>Stanislav Boiko</strong>
                        </p>
                    </div>
                </div>
            </div>
        );
    };

    const LebenslaufPage = () => {
        const scrollToSection = (sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        };

        return (
            <div className="main-container">
                <div className="sidebar">
                    <h3>Lebenslauf Übersicht</h3>
                    <div
                        className="sidebar-item clickable"
                        onClick={() => scrollToSection("personal-data")}
                    >
                        <h4>Persönliche Daten</h4>
                        <p>Name, Kontakt und grundlegende Informationen</p>
                    </div>
                    <div
                        className="sidebar-item clickable"
                        onClick={() => scrollToSection("experience")}
                    >
                        <h4>Berufserfahrung</h4>
                        <p>
                            Meine bisherigen Positionen und Verantwortlichkeiten
                        </p>
                    </div>
                    <div
                        className="sidebar-item clickable"
                        onClick={() => scrollToSection("education")}
                    >
                        <h4>Bildung</h4>
                        <p>Schulische und berufliche Qualifikationen</p>
                    </div>
                    <div
                        className="sidebar-item clickable"
                        onClick={() => scrollToSection("skills")}
                    >
                        <h4>IT-Kenntnisse</h4>
                        <p>Technische Fähigkeiten und Programmiersprachen</p>
                    </div>
                    <div
                        className="sidebar-item clickable"
                        onClick={() => scrollToSection("languages")}
                    >
                        <h4>Sprachen</h4>
                        <p>Sprachkenntnisse und Kompetenzniveaus</p>
                    </div>
                    <div
                        className="sidebar-item clickable"
                        onClick={() => scrollToSection("hobbies")}
                    >
                        <h4>Hobbys und Interessen</h4>
                        <p>Persönliche Interessen und Freizeitaktivitäten</p>
                    </div>
                </div>

                <div className="content">
                    <h1>Lebenslauf</h1>

                    <div className="content-section" id="personal-data">
                        <h2>Persönliche Daten</h2>
                        <div className="personal-data-container">
                            <div className="personal-info">
                                <p>
                                    <strong>Name:</strong> Stanislav Boiko
                                </p>
                                <p>
                                    <strong>Geburtsdatum:</strong> 02.02.1999 in
                                    Odessa
                                </p>
                                <p>
                                    <strong>Adresse:</strong> 78224 Singen
                                    (Hohentwiel)
                                </p>
                                <p>
                                    <strong>Telefon:</strong> 015225916826
                                </p>
                                <p>
                                    <strong>E-Mail:</strong>{" "}
                                    stani.boiko@gmail.com
                                </p>
                            </div>
                            <div className="profile-photo-container">
                                <img
                                    src="/Foto-Profil.jpg"
                                    alt="Stanislav Boiko"
                                    className="profile-photo"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="content-section" id="experience">
                        <h2>Berufserfahrung</h2>
                        <div className="experience-item">
                            <h4>Tischler</h4>
                            <div className="date">09/2022 - 07/2024</div>
                            <div className="company">
                                VS Holzbearbeitung GmbH
                            </div>
                            <p>
                                Holzbearbeitung und Möbelproduktion mit modernen
                                Maschinen und traditionellen Techniken.
                            </p>
                        </div>

                        <div className="experience-item">
                            <h4>Tischler</h4>
                            <div className="date">04/2022 - 08/2022</div>
                            <div className="company">
                                Holzbau Klippel & Batz GmbH
                            </div>
                            <p>
                                Holzbau und Zimmerarbeiten, Umsetzung
                                verschiedener Bauprojekte.
                            </p>
                        </div>

                        <div className="experience-item">
                            <h4>CNC-Programmierer im Möbelbau</h4>
                            <div className="date">09/2019 - 02/2022</div>
                            <div className="company">
                                Marangoz (Möbelproduktionsfirma in der Ukraine)
                            </div>
                            <p>
                                Programmierung und Bedienung von CNC-Maschinen
                                für die Möbelproduktion, Optimierung von
                                Fertigungsprozessen.
                            </p>
                        </div>
                    </div>

                    <div className="content-section" id="education">
                        <h2>Bildung</h2>
                        <div className="experience-item">
                            <h4>IT-Entwicklung Online-Kurs</h4>
                            <div className="date">08/2022 - 07/2025</div>
                            <div className="company">Dan.IT Education</div>
                            <p>
                                Umfassende Ausbildung in IT-Technologien mit
                                Schwerpunkt auf Webentwicklung, Systemintegration
                                und IT-Infrastruktur. Kenntnisse in Frontend-
                                und Backend-Entwicklung, Datenbanken und
                                Hosting-Plattformen.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", alignItems: "start", marginBottom: "1rem" }}>
                                    <img
                                        src="/Zertifikat-DAN.IT-Stanislav-Boiko.png"
                                        alt="DAN.IT Frontend Certificate"
                                        className="certificate-thumb"
                                        title="DAN.IT Frontend Zertifikat anzeigen"
                                        onClick={() => setShowDanitCert(true)}
                                        style={{ cursor: "pointer", width: "170px", height: "125px", objectFit: "cover", borderRadius: "8px", border: "2px solid #667eea", boxShadow: "0 2px 8px rgba(102,126,234,0.2)", transition: "transform 0.2s" }}
                                    />
                                    <span className="certificate-thumb-label" style={{ fontSize: "0.85rem", color: "#555", marginTop: "0.3rem" }}>DAN.IT Zertifikat</span>
                                </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                                
                                <button
                                    className="project-button"
                                    onClick={() =>
                                        window.open(
                                            "https://final-project-flax-ten.vercel.app/profil/login",
                                            "_blank",
                                        )
                                    }
                                    style={{
                                        marginTop: "0.5rem",
                                        padding: "10px 20px",
                                        background:
                                            "linear-gradient(45deg, #667eea, #764ba2)",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                        fontSize: "0.95rem",
                                        fontWeight: "600",
                                        transition: "all 0.3s ease",
                                        boxShadow:
                                            "0 3px 10px rgba(102, 126, 234, 0.3)",
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.transform =
                                            "translateY(-2px)";
                                        e.target.style.boxShadow =
                                            "0 5px 15px rgba(102, 126, 234, 0.4)";
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.transform = "translateY(0)";
                                        e.target.style.boxShadow =
                                            "0 3px 10px rgba(102, 126, 234, 0.3)";
                                    }}
                                >
                                    🚀 Mein Abschlussprojekt ansehen
                                </button>
                            </div>
                            <p
                                style={{
                                    marginTop: "0.5rem",
                                    fontSize: "0.85rem",
                                    color: "#666",
                                    fontStyle: "italic",
                                }}
                            >
                                * Das Projekt unterstützt derzeit nur ukrainische Sprache
                            </p>
                        </div>

                        <div className="experience-item">
                            <h4>CNC-Programmierung Holztechnik</h4>
                            <div className="date">09/2018 - 08/2019</div>
                            <div className="company">
                                CNC-Professional-Schule
                            </div>
                            <p>
                                Spezialisierung auf CNC-Programmierung für
                                Holzbearbeitungsmaschinen
                            </p>
                        </div>

                        <div className="experience-item">
                            <h4>Fachkraft Agrarservice</h4>
                            <div className="date">09/2016 - 08/2018</div>
                            <div className="company">Berufsschule</div>
                            <p>
                                Ausbildung im Bereich landwirtschaftlicher
                                Dienstleistungen
                            </p>
                        </div>
                    </div>

                    <div className="content-section" id="skills">
                        <h2>IT-Kenntnisse</h2>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <h4>HTML</h4>
                                <p>Grundlagen & Strukturierung</p>
                            </div>
                            <div className="skill-item">
                                <h4>CSS</h4>
                                <p>Styling & Design</p>
                            </div>
                            <div className="skill-item">
                                <h4>JavaScript</h4>
                                <p>Programmierung & Logik</p>
                            </div>
                            <div className="skill-item">
                                <h4>React</h4>
                                <p>Frontend Framework</p>
                            </div>
                            <div className="skill-item">
                                <h4>TypeScript</h4>
                                <p>Typisierte Programmierung</p>
                            </div>
                            <div className="skill-item">
                                <h4>Git</h4>
                                <p>Versionskontrolle</p>
                            </div>
                            <div className="skill-item">
                                <h4>Backend-Grundlagen</h4>
                                <p>Server & Datenbanken</p>
                            </div>
                            <div className="skill-item">
                                <h4>Hosting-Plattformen</h4>
                                <p>Vercel, Render</p>
                            </div>
                            <div className="skill-item">
                                <h4>CNC-Programmierung</h4>
                                <p>Technische Systeme</p>
                            </div>
                        </div>
                    </div>

                    <div className="content-section" id="languages">
                        <h2>Sprachen</h2>
                        <p>
                            <strong>Ukrainisch:</strong> Muttersprache
                        </p>
                        <p>
                            <strong>Russisch:</strong> C1
                        </p>
                        <p>
                            <strong>Deutsch:</strong> B1
                            <button
                                className="certificate-button"
                                onClick={() => setShowCertificate(true)}
                            >
                                📜 Zertifikat
                            </button>
                        </p>
                        <p>
                            <strong>Englisch:</strong> Grundkenntnisse (A1)
                        </p>
                    </div>

                    <div className="content-section" id="hobbies">
                        <h2>Hobbys und Interessen</h2>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <h4>Volleyball</h4>
                                <p>Sport & Teamarbeit</p>
                            </div>
                            <div className="skill-item">
                                <h4>Brettspiele</h4>
                                <p>Strategie & Logik</p>
                            </div>
                            <div className="skill-item">
                                <h4>IT-Systemintegration</h4>
                                <p>Kontinuierliches Lernen</p>
                            </div>
                            <div className="skill-item">
                                <h4>Technische Systeme</h4>
                                <p>Analyse & Optimierung</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="app">
            <header className="header">
                <nav className="nav">
                    <button
                        className={`nav-button ${currentPage === "bewerbung" ? "active" : ""}`}
                        onClick={() => setCurrentPage("bewerbung")}
                    >
                        Bewerbung
                    </button>
                    <button
                        className={`nav-button ${currentPage === "lebenslauf" ? "active" : ""}`}
                        onClick={() => setCurrentPage("lebenslauf")}
                    >
                        Lebenslauf
                    </button>
                </nav>
            </header>

            {currentPage === "bewerbung" ? (
                <BewerbungPage />
            ) : (
                <LebenslaufPage />
            )}

            {/* Модальне вікно для сертифікату */}
            {showCertificate && (
                <div 
                    className="modal-overlay"
                    onClick={() => setShowCertificate(false)}
                >
                    <div 
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setShowCertificate(false)}
                        >
                            ×
                        </button>
                        <img
                            src="/Zertifikat-DTZ-B1-Stanislav-Boiko.png"
                            alt="Deutsch-Test für Zuwanderer B1 Zertifikat"
                            className="modal-image"
                        />
                    </div>
                </div>
            )}
            {/* Модальное окно для DAN.IT сертификата */}
            {showDanitCert && (
                <div className="modal-overlay" onClick={() => setShowDanitCert(false)}>
                    <div className="modal-content" style={{ maxWidth: "95vw", maxHeight: "95vh" }} onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowDanitCert(false)}>
                            ×
                        </button>
                        <img
                            src="/Zertifikat-DAN.IT-Stanislav-Boiko.png"
                            alt="DAN.IT Frontend Certificate"
                            className="modal-image"
                            style={{ maxHeight: "85vh", width: "auto", margin: "0 auto", display: "block" }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
