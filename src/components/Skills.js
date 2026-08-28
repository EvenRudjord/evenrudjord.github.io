import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';
import { useState } from 'react';
import { SkillCard } from '../SkillCard';
import javascriptIcon from "../assets/img/SkillIcon/javascript.svg";
import pythonIcon from "../assets/img/SkillIcon/Python.svg";
import htmlIcon from "../assets/img/SkillIcon/HTML.svg";
import cPlusIcon from "../assets/img/SkillIcon/C++.svg";
import javaIcon from "../assets/img/SkillIcon/Java.svg";
import csharpIcon from "../assets/img/SkillIcon/Csharp.svg";
import cssIcon from "../assets/img/SkillIcon/CSS.svg";
import gitHubIcon from "../assets/img/nav-icon4.svg";
import gitIcon from "../assets/img/SkillIcon/gitIcon.svg";
import vscodeIcon from "../assets/img/SkillIcon/vscodeIcon.svg";
import figmaIcon from "../assets/img/SkillIcon/figmaIcon.svg"; 
import unityIconete from "../assets/img/SkillIcon/unity.svg"; 
import svelteIcon from "../assets/img/SkillIcon/sveltIcon.svg"; 
import reactIcon from "../assets/img/SkillIcon/reactIcon.svg";
import blenderIcon from "../assets/img/SkillIcon/blender.svg"; 
import kotlinIcon from "../assets/img/SkillIcon/Kotlin.svg"

export const Skills = () => {
  const [activeKey, setActiveKey] = useState('sprak');

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const theSkills = [
    {
      language: 'JavaScript',
      imgUrl: javascriptIcon,
    },
    {
      language: 'Python',
      imgUrl: pythonIcon,
    },
    {
      language: 'C++',
      imgUrl: cPlusIcon,
    },
    {
      language: 'Java',
      imgUrl: javaIcon,
    },
    {
      language: 'C#',
      imgUrl: csharpIcon,
    },
    {
      language: 'CSS',
      imgUrl: cssIcon,
    },
    {
      language: 'HTML',
      imgUrl: htmlIcon,
    },
    {
        language: 'Svelte',
        imgUrl: svelteIcon, 
    },
    {
        language: 'React',
        imgUrl: reactIcon, 
    },
    {
      language: "Kotlin",
      imgUrl: kotlinIcon
    }
  ]

  const theTools = [
    {
      language: 'Git',
      imgUrl: gitIcon,
    },
    {
      language: 'Github',
      imgUrl: gitHubIcon,
    },
    {
      language: 'VS Code',
      imgUrl: vscodeIcon,
    },
    {
      language: 'Figma',
      imgUrl: figmaIcon,
    },
    {
      language: 'Unity',
      imgUrl: unityIconete,
    },
    {
      language: 'Blender',
      imgUrl: blenderIcon,
    }
  ]

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Ferdigheter</h2>
              <Tab.Container
                id="skills-tabs"
                activeKey={activeKey}
                onSelect={(k) => setActiveKey(k)}
              >
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                  <Nav.Item>
                    <Nav.Link eventKey="sprak">Programmering</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="verktoy">Verktøy</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                    <Tab.Pane eventKey="sprak">
                        {activeKey === 'sprak' && (
                        <div className="skillcard-wrapper">
                            {theSkills.map((skille, index) => {
                            return (
                                <SkillCard 
                                key={index}
                                language={skille.language}
                                imgUrl={skille.imgUrl}
                                />
                            );
                            })}
                        </div>
                        )}
                    </Tab.Pane>

                  <Tab.Pane eventKey="verktoy">
                    {activeKey === 'verktoy' && (
                      <div className='skillcard-wrapper'>
                        {theTools.map((tool, index) => {
                          return (
                            <SkillCard 
                              key={index}
                              language={tool.language}
                              imgUrl={tool.imgUrl}
                            />
                          );
                        })}
                      </div>
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
