import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  // This new logic groups your skills by category before rendering
  const groupedSkills = skills.reduce((acc, skill) => {
    const { category } = skill;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        {worktimeline.length > 0 && (
          <Row className=" sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Work Timline</h3>
            </Col>
            <Col lg="7">
              <table className="table caption-top">
                <tbody>
                  {worktimeline.map((data, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{data.jobtitle}</th>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Col>
          </Row>
        )}
        
        {/* === START: THIS IS THE ENTIRELY REPLACED SKILLS SECTION === */}
        <Row className="sec_sp">
            <Col lg="12">
                <h3 className="color_sec py-4">Skills & Technologies</h3>
            </Col>
            {Object.entries(groupedSkills).map(([category, skillsInCategory]) => (
                <Col lg="12" key={category}>
                    <h4 className="skill-category-title">{category}</h4>
                    <div className="skills-list">
                        {skillsInCategory.map((skill, i) => (
                            <div key={i} className="skill-item">
                                <img src={skill.icon} alt={`${skill.name} logo`} className="skill-icon" />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </Col>
            ))}
        </Row>
        {/* === END: REPLACED SKILLS SECTION === */}

      </Container>
    </HelmetProvider>
  );
};