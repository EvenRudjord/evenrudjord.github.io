import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";


export const NavBar = () => {
  const [activeLink, setActive] = useState("home");
  const [pendingLink, setPendingLink] = useState(null); 
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
  const onScroll = () => {
    if (window.scrollY > 50) {
      seScrolled(true);
    } else {
      seScrolled(false);
    }

    if (pendingLink) return; // Ikke oppdater aktiv link hvis vi er "på vei"

    const home = document.getElementById("home");
    const skills = document.getElementById("skills");
    const projects = document.getElementById("projects");
    const omMeg = document.getElementById("OmMeg");
    const scrollPos = window.scrollY + window.innerHeight / 2;

    if (
      projects &&
      scrollPos >= projects.offsetTop &&
      scrollPos < projects.offsetTop + projects.offsetHeight
    ) {
      setActive("projects");
    } else if (
      skills &&
      scrollPos >= skills.offsetTop &&
      scrollPos < skills.offsetTop + skills.offsetHeight
    ) {
      setActive("skills");
    } else if (
      home &&
      scrollPos >= home.offsetTop &&
      scrollPos < home.offsetTop + home.offsetHeight
    ) {
      setActive("home");
    } else if (
      omMeg &&
      scrollPos >= omMeg.offsetTop &&
      scrollPos < omMeg.offsetTop + omMeg.offsetHeight
    ) {
      setActive("OmMeg");
    }
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, [pendingLink]);


  const onUpdateActiveLink = (value) => {
  setActive(value);        // Visuelt aktiv med én gang
  setPendingLink(value);   // Lås aktiv link midlertidig

  // Etter litt tid, gi kontroll tilbake til scroll
  setTimeout(() => {
    setPendingLink(null);
  }, 1000); // 1 sekund = typisk scrolltid
};

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* <Navbar.Brand href="#home">
          <img src={logo} alt="logo"/>
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
  <a
    href="#home"
    className={`nav-link navbar-link${activeLink === "home" ? " active" : ""}`}
    onClick={() => onUpdateActiveLink("home")}
  >
    Hjem
  </a>
  <a
    href="#skills"
    className={`nav-link navbar-link${activeLink === "skills" ? " active" : ""}`}
    onClick={() => onUpdateActiveLink("skills")}
  >
    Ferdigheter
  </a>
  <a
    href="#projects"
    className={`nav-link navbar-link${activeLink === "projects" ? " active" : ""}`}
    onClick={() => onUpdateActiveLink("projects")}
  >
    Prosjekter
  </a>
  <a
    href="#OmMeg"
    className={`nav-link navbar-link${activeLink === "OmMeg" ? " active" : ""}`}
    onClick={() => onUpdateActiveLink("OmMeg")}
  >
    Interesser
  </a>
</Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/even-rudjord/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/evenrudjord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={navIcon4}
                  alt=""
                  style={{
                    verticalAlign: "middle",
                    transform: "scale(1.5)",
                    transformOrigin: "center",
                  }}
                />
              </a>
              <a
                href="https://evepto.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={navIcon5}
                  alt=""
                  style={{
                    verticalAlign: "middle",
                    transform: "scale(1.5)",
                    transformOrigin: "center",
                  }}
                />
              </a>
            </div>
            <button className="vvd" onClick={() => window.open("/Prosjektfiler/CV.pdf", '_blank')}>
              <span>Curriculum Vitae (CV)</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};




