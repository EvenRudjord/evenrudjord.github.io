import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import starTrailThumbNail from "../assets/img/starTrailThumbNail.png";
import neatHeatLogo from "../assets/img/NeatHeat.png";
import neatHeatEkstra1 from "../assets/img/neatHeatEkstra1.png";
import neatHeatEkstra2 from "../assets/img/neatHeatEkstra2.png";
import neatHeatEkstra3 from "../assets/img/neatHeatEkstra3.png";
import portofolgeNettside from "../assets/img/protofolieThumbnail.png";
import starTrailEkstra1 from "../assets/img/starTrailExtra1.png";
import starTrailEkstra2 from "../assets/img/starTrailExtra2.png";
import froggerThumbNail from "../assets/img/FroggerThumbnail.png";
import froggerEkstra1 from "../assets/img/FroggerExtra1.png";
import froggerEkstra2 from "../assets/img/FroggerExtra2.png";
import froggerEkstra3 from "../assets/img/FroggerExtra3.png";


export const Projects = () => {

  const projects = [
    {
      title: "Star Trail",
      description: "Et videospill utviklet i  Unity game engine, med fokus på spilldesign og programmering.",
      imgUrl: starTrailThumbNail,
      buttons: [{ tittel: "Prøv spillet", knappDirection: "https://evepto.itch.io/star-trail" }],
      detalier: `
            <h4>Om prosjektet</h4>
            
            <p>Star Trail er et arkadespill utviklet i løpet av et 7-dagers "game jam" arrangert av itch.io. Spillet ble laget fra bunnen av som et samarbeidsprosjekt mellom meg og en visuell designer. Prosjektet fungerer som et tydelig bevis på min evne til å levere et spillbart og engasjerende produkt under tidspress. <img src="${starTrailEkstra2}" alt="Star Trail prototype" style="float: right; width: 80%; max-width: none; margin: 20px 70px 20px 70px; border-radius: 12px;" /></p>
            
            <h4>Teknologi og verktøy</h4>
            <p>Spillet er utviklet i Unity, med C# som programmeringsspråk. Jeg hadde hovedansvaret for programmering og teknisk implementering, inkludert kjernefunksjonalitet, kontrollsystemer og integrasjon av visuelle elementer.</p>

            <h4>Samarbeid og rollefordeling</h4>
            <p>Prosjektet ble gjennomført sammen med en kompis som tok ansvar for det visuelle uttrykket – inkludert grafikk og visuelle effekter. Samarbeidet fungerte svært godt, og vi oppnådde rask arbeidsflyt gjennom tydelig rollefordeling, hyppig kommunikasjon og gjensidig respekt for hverandres fagområder. Dette viser min evne til å samarbeide tett i kreative og tekniske prosjekter.</p>
<img src="${starTrailEkstra1}" alt="Star Trail prototype"/>
            <h4>Spilldesign og gjennomføring</h4>
            <p>Star Trail kombinerer enkle kontroller med progressiv vanskelighetskurve, og fokuserer på flyt og reaksjonsevne. Selv med begrenset tid, la vi vekt på spillfølelse og visuell respons – noe som ble trukket frem som styrker i tilbakemeldinger fra andre deltakere i "game jam-et".</p>

            <h4>Hva prosjektet viser</h4>
            <p>Dette prosjektet demonstrerer min evne til å:</p>
            <ul>
              <li>Planlegge og gjennomføre et spillprosjekt under tidspress</li>
              <li>Samarbeide effektivt med andre i en kreativ prosess</li>
              <li>Utvikle funksjonelle og stabile spillmekanikker med Unity og C#</li>
              <li>Raskt integrere visuelle og tekniske elementer til en helhetlig spillopplevelse</li>
            </ul>

            <h2>Konklusjon</h2>
            <p>Star Trail viser både min tekniske kompetanse blant annet i C#, arbeidsevne og samarbeidsevner som utvikler. Det er et prosjekt jeg viser frem som eksempel på hva jeg kan levere – også når tid og ressurser er begrenset.</p>
            `,
    },
    {
      title: "NeatHeat",
      description: "Designoppgave/emneoppgave: Designe et digitalt produkt med fokus på brukere",
      imgUrl: neatHeatLogo,
      buttons: [{ tittel: "Fullstendig Rapport", knappDirection: "/Prosjektfiler/RapportIN1060NeatHeat.pdf" }, { tittel: "Konsept Video", knappDirection: "https://www.uio.no/studier/emner/matnat/ifi/IN1060/v25/prosjektgrupper/CybSed/neatheat.mp4" }, { tittel: "Teknisk video", knappDirection: "https://www.uio.no/studier/emner/matnat/ifi/IN1060/v25/prosjektgrupper/CybSed/tekninsk_video.mp4" } ],
      detalier:  `<p><strong>Kort om prosjektet:</strong><br>
            Jeg har sammen med fire andre i gruppen jobbet med NeatHeat, et velferdsteknologisk semesterprosjekt i emnet "IN1060 - Design for, med og av brukere". Målet vårt var å øke tryggheten for eldre som bor hjemme. Vi utviklet et system til en arduino i C++, som varsler brukeren dersom et tent stearinlys står igjen etter at de har forlatt boligen, for å forhindre brannfare. </p>
            <img src="${neatHeatEkstra1}" alt="NeatHeat prototype"/>
            <p><strong>Målgruppen:</strong><br>
            Målgruppen vi jobbet mot, er eldre hjemmeboende personer som ønsker å være selvstendige, men som trenger litt ekstra støtte i hverdagen for å føle seg trygge. For å sikre at løsningen ble tilpasset faktiske behov, samarbeidet vi tett med ekte brukere, blant annet besteforeldrene til et av gruppemedlemmene, gjennom hele designprosessen.</p>

            <p><strong>Arbeidsprosessen:</strong><br>
            Jeg og gruppen startet med å samle innsikt gjennom dagbøker, intervjuer og workshops. Brukerne var med i alle faser, fra utforming til testing og evaluering av løsningen. Etter flere runder med prototyping og designendringer kom vi fram til et minimalistisk produkt som enkelt kunne henges på en vase, slik at det ikke virket påtrengende i hjemmet.</p>
            <img src="${neatHeatEkstra2}" alt="NeatHeat prototype"/>
            <p><strong>Teknisk løsning:</strong><br>
            Løsningen vi utviklet består av to Arduino-enheter. En flammesensor plasseres nær stearinlyset for å oppdage om det er tent, mens en annen enhet ved døren har en bevegelsessensor og en buzzer. Når systemet registrerer at et lys er tent samtidig som noen forlater boligen, aktiveres alarmen for å varsle brukeren. Systemene ble utviklet i C++</p>
            <img src="${neatHeatEkstra3}" alt="NeatHeat prototype" style="float: right; width: 70%; max-width: none; margin: 20px 0 20px 30px; border-radius: 12px;" />
            <p><strong>Resultater:</strong><br>
            Prototypen fungerte som forventet etter at vi forbedret koden. Det viste seg likevel at batterikoblingen og strømforsyningen kunne forbedres for mer stabil drift. Brukertestene ga oss verdifull innsikt som resulterte i flere forslag til videre forbedringer.</p>

            <p><strong>Hva jeg lærte:</strong><br>
            Gjennom prosjektet erfarte jeg at brukermedvirkning er essensielt for å utvikle realistiske og gode løsninger. Det er også viktig å sette av nok tid til testing og feilretting underveis. Sammen med gruppen fikk jeg praktisk erfaring med samskaping, prototyping og evaluering, noe som styrket min kompetanse innen velferdsteknologi og design. I tillegg lærte jeg å programmere i C++ og hvordan man kan bruke Arduino-plattformer for å utvikle smarte løsninger.</p>
            `

    }, 
    {
      title: "Portefølje nettside",
      description: "Nettside for å vise frem prosjekter og ferdigheter.",
      imgUrl: portofolgeNettside,
      detalier: "<section>\
  <h3><strong>Formål</strong></h3>\
  <p>Denne nettsiden ble laget for å samle all relevant informasjon og visuell informasjon om meg på ett sted. Dette gjør det enkelt for interesserte parter, som arbeidsgivere og samarbeidspartnere, å få innsikt i min progresjon og bakgrunn.</p>\
  <h3><strong>Teknologier og kompetanse</strong></h3>\
  <ul>\
    <li><strong>React:</strong> Bygget en komponentbasert frontend som gir god struktur og enkel vedlikehold.</li>\
    <li><strong>React Bootstrap:</strong> Implementerte responsivt design og moderne brukergrensesnitt med ferdige komponenter.</li>\
    <li><strong>JavaScript og JSX:</strong> Utviklet funksjonalitet og dynamikk i applikasjonen.</li>\
    <li><strong>Responsivt design:</strong> Sikret at nettsiden fungerer sømløst på både mobil, nettbrett og desktop.</li>\
  </ul>\
  <h3><strong>Erfaring og læring</strong></h3>\
  <p>Gjennom utviklingen har jeg styrket mine ferdigheter innen moderne webutvikling, spesielt med React og responsivt design. Arbeidet har også gitt meg praktisk erfaring med å lage intuitive og visuelle løsninger som forbedrer brukeropplevelsen.</p>\
</section>"

    },
    {
      title: "FROGGER.REWIND",
      description: "Videospill utviklet i Unity i en spillutviklingskonkurranse. Med stort fokus på algoritmer",
      imgUrl: froggerThumbNail,
      buttons: [{ tittel: "Prøv Spillet", knappDirection: "https://evepto.itch.io/the-frogglers-quest-for-sustinance" } ],
      detalier:  `<p><h3>Prosjektoversikt</h3>
I løpet av en uke utviklet jeg et spill i Unity, i språket C#, som en del av en spillutviklingskonkurranse. Målet var å lage et spill som føles nytt hver gang man spiller, ved hjelp av <em>prosedyregenerering</em>. En stor utfordring var å sørge for at alle nivåer alltid kunne fullføres, noe som krevde gjennomtenkt logikk, pathfinding og validering av nivåer.</p>

<p><h3>Utviklingsmetodikk</h3>
Arbeidet ble gjort i team med vekt på samarbeid og moderne utviklingspraksis. Vi jobbet parallelt i sanntid, benyttet versjonskontroll og kontinuerlig integrasjon, og la vekt på effektiv håndtering av kodeflyt og testing. Dette gjorde at vi kunne eksperimentere raskt uten å stoppe utviklingen.</p>
<div style="display: flex; gap: 0px; justify-content: center; align-items: flex-start; margin: 0px 0;">
  <img src="${froggerEkstra2}" alt="Bilde fra utviklingsprosessen" style="image-rendering: pixelated; width: 50%; max-width: 350px; height: auto;"/>
  <img src="${froggerEkstra3}" style="image-rendering: pixelated; width: 80%; max-width: 500px; height: auto;" />
</div>

<p><h3>Kjernefunksjoner</h3>
For å få til prosedyregenereringen utviklet blant annet:
<ul>
  <li>Algoritmer som genererte plattformer og hindringer tilfeldig.</li>
  <li>Et pathfinding-system som alltid sikret en løsning fra start til mål.</li>
  <li>Dynamiske visuelle markeringer som viste hvilke elementer som var trygge eller farlige.</li>
</ul>
<img src="${froggerEkstra1}" alt="Bilde fra spillet"/>
Ytelsen ble optimalisert slik at genereringen kunne kjøre mange forsøk raskt og stabilt uten at spillet krasjet.</p>


<p><h3>Resultat og erfaring</h3>
Spillet fungerer som tiltenkt: hvert brett er unikt, men alltid spillbart. Algoritmene gir en rettferdig utfordring, og de visuelle tilbakemeldingene gjør spillopplevelsen tydelig og engasjerende. Gjennom prosjektet fikk jeg solid erfaring med <em>prosedyrebasert generering</em>, ytelsesoptimalisering, C# programmering og DevOps-prinsipper i teamarbeid – ferdigheter som er direkte overførbare til større utviklingsprosjekter.</p>

<br>
<br>
`

    }
  ];

  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 3;

  const next = () => setStartIdx((prev) => (prev + 1) % projects.length);
  const prev = () => setStartIdx((prev) => (prev - 1 + projects.length) % projects.length);

  const getDisplayProjects = () => {
    // Show 5: [peekLeft, left, center, right, peekRight]
    const arr = [];
    const total = projects.length;
    for (let i = -2; i <= 2; i++) {
      arr.push(projects[(startIdx + i + total) % total]);
    }
    return arr;
  };

  const displayProjects = getDisplayProjects();
  const allProjectNumber = projects.length;
  const currentProjectNumber = ((startIdx + projects.length) % projects.length) + 1;
  const currentProjectName = projects[(startIdx + projects.length) % projects.length].title;

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Prosjekter</h2>
            <p>En samling prosjekter som reflekterer kompetanse innen systemutvikling, UX og kreativ problemløsning</p>
            
            <div className="custom-carousel-wrapper">
              <div className="custom-carousel-track">
                {displayProjects.map((project, idx) => {
                  // idx: 0=peekLeft, 1=left, 2=center, 3=right, 4=peekRight
                  let cardClass = "carousel-card";
                  if (idx === 2) cardClass += " center";
                  else if (idx === 1) cardClass += " left";
                  else if (idx === 3) cardClass += " right";
                  else if (idx === 0) cardClass += " peek-left";
                  else if (idx === 4) cardClass += " peek-right";
                  return (
                    <div key={idx} className={cardClass}>
                      <ProjectCard {...project} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="project-arrows">
              <Button variant="outline-light" onClick={prev} className="carousel-arrow left">
                &#8592;
              </Button>
              <div className="knapperOgProsjektNummer">
                <h4 style={{ margin: 0 }}>{currentProjectName}</h4>
                <span>Prosjekt: {currentProjectNumber} / {allProjectNumber}</span>
              </div>
              <Button variant="outline-light" onClick={next} className="carousel-arrow right">
                &#8594;
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src="colorSharp2" alt="" />
    </section>
  );
};
