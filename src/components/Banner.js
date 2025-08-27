import { useState, useEffect } from "react";
import { Button, Container, Row, Col} from "react-bootstrap";
//import headerImg from "../assets/img/even.png";
import headerImg from "../assets/img/megSelv.jpg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const toRotate = ["Systemutvikler", "UX Designer", "Web Designer"];
const [text, setText] = useState('');
const [delta, setDelta] = useState(50); // fast typing and deleting

useEffect(() => {
  const i = loopNum % toRotate.length;
  const fullText = toRotate[i];

  let timeout;

  if (!isDeleting && text === fullText) {
    // Wait 3 seconds, then start deleting
    timeout = setTimeout(() => {
      setIsDeleting(true);
    }, 4000);
  } else if (isDeleting && text === '') {
    // Go to next word
    setIsDeleting(false);
    setLoopNum(prev => prev + 1);
  } else {
    timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updatedText);
    }, isDeleting ? 15 : 100); // Fast delete, fast type
  }

  return () => clearTimeout(timeout);
}, [text, isDeleting]);




    return (
        <section className="banner" id="home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    {/* <span className="tagline">Welcome to my Portofolio</span> */}
                    <h1>{"Even Rudjord "}<br /><span className="wrap" style={{display: "inline-block", minWidth: "10ch"}}>{text}</span></h1>
                    <p>Jeg er systemutvikler og UX-designer med lidenskap for brukervennlige digitale løsninger. Min interesse for informatikk startet som 14-åring med spillutvikling. Nå er jeg 21 år, og studerer <a href="https://www.uio.no/studier/program/inf-design/" target="_blank" style={{ textDecoration: 'none'} }>Informatikk: Design, bruk og interaksjon</a> ved Universitetet i Oslo.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                      <div style={{ width: "100%", overflow: "hidden" }}>
                        <img
                          src={headerImg}
                          alt="Header Image"
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            objectPosition: "top"
                          }}
                        />
                      </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}