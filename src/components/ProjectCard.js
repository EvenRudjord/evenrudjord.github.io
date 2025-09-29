import { Col, Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");

// Global map for å huske hvilke slugs som allerede er åpnet
const openedSlugs = new Set();

export const ProjectCard = ({ title, description, imgUrl, detalier, buttons = [] }) => {
  const [show, setShow] = useState(false);
  const slug = slugify(title);

  const openModal = () => {
    const projectsEl = document.getElementById("projects");
    if (projectsEl) projectsEl.scrollIntoView({ behavior: "smooth" });
    setShow(true);
    openedSlugs.add(slug); // markér at denne slugen allerede har åpnet modal
  };

  useEffect(() => {
    if (openedSlugs.has(slug)) return; // allerede åpnet, gjør ingenting

    const rawHash = window.location.hash.startsWith("#")
      ? window.location.hash.substring(1)
      : window.location.hash;

    const decodedHash = decodeURIComponent(rawHash).toLowerCase();

    if (decodedHash === slug) {
      openModal();
    }
  }, [slug]);

  const handleOpen = () => {
    if (!openedSlugs.has(slug)) openedSlugs.add(slug);
    setShow(true);
    window.history.pushState({}, "", `#${slug}`);
  };

  const handleClose = () => {
    setShow(false);

    const rawHash = window.location.hash.startsWith("#")
      ? window.location.hash.substring(1)
      : window.location.hash;
    const decodedHash = decodeURIComponent(rawHash).toLowerCase();

    if (decodedHash === slug) {
      window.history.pushState({}, "", "/"); // fjern hash
    }
  };

  return (
    <>
      <Col sm={6} md={4}>
        <div className="proj-imgbx" onClick={handleOpen} style={{ cursor: "pointer" }}>
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      <Modal show={show} onHide={handleClose} centered size="lg" contentClassName="custom-modal">
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="w-100 text-center fw-bold" style={{ color: "white" }}>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-description" dangerouslySetInnerHTML={{ __html: detalier }}></p>

          {buttons.length > 0 && (
            <div className="artikkelKnapper">
              {buttons.map(({ tittel, knappDirection }, idx) => (
                <Button key={idx} onClick={() => window.open(knappDirection, "_blank")}>
                  {tittel}
                </Button>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
          <Button variant="dark" onClick={handleClose} className="px-4 py-2 rounded-pill">
            Lukk
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
