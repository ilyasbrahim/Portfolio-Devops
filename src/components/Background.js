import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import petimg from "../assets/img/pet-mockup.png";
import enjoypimg from "../assets/img/enjoyp-mockup.png";
import palestinedrinks from "../assets/img/palestinedrinks.png";
import rapedido from "../assets/img/rapedido-mockup.png";
import Bildemo from "../assets/img/Bildemo.png";
import Portfolio from "../assets/img/portfolioweb.png"
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Background = () => {
  const projects = [
    {
      title: "SQL Database",
      description: "Database Development",
      imgUrl: petimg,
    },
    {
      title: "EnjoyP.com",
      description: "Microsoft Azure Deployment",
      imgUrl: enjoypimg,
    },
    {
      title: "palestinedrinks.com",
      description: "Microsoft Azure Deployment",
      imgUrl: palestinedrinks,
    },
    {
      title: "Rapedido",
      description: "Microsoft Azure Deployment",
      imgUrl: rapedido,
    },
    {
      title: "Bildemo",
      description: "Python App",
      imgUrl: Bildemo,
    },
    {
      title: "Portfolio Website",
      description: "Website Developement & Deployment",
      imgUrl: Portfolio,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Background</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Devops Engineer | Consultera | 2023 - present</p>
                      <ul>
                        <li>Responsible for DevOps on Enjoyp.com, Rapedido.es, and Palestinedrinks.com projects</li>
                        <li>Directed cloud infrastructure design and implementation</li>
                        <li>Implemented Docker and Kubernetes for scalability and resource optimization</li>
                        <li>Enhanced distribution and management of containerized applications</li>
                        <li>Optimized CI/CD pipelines using Azure DevOps</li>
                        <li>Managed Virtual Machines hosting websites with MySQL, Nginx, and Elasticsearch</li>
                        <li>Implemented security measures and system monitoring for high availability</li>
                        <li>Worked agilely to strengthen product quality and team dynamics</li>
                        <li>Utilized Git for version control, enabling efficient workflows and collaboration</li>
                      </ul>
                      <p></p>
                      <p></p>
                      <p>Sales Manager | Bilselect AB | 2020 - 2022</p>
                      <ul>
                        <li>Managed sales and purchases of various types of vehicles, including cars, transportation vehicles, and heavy trucks</li>
                        <li>Managed negotiations and international exports</li>
                        <li>Performed administrative tasks such as invoicing, financing, advertising, and inventory management</li>
                        <li>Carried out practical tasks such as inspection, service planning, home delivery, painting, and quality control</li>
                        <li>Managed a team of employees involved in sales, purchases, administrative tasks, and practical operations</li>
                        <li>Maintained positive relationships with customers and provided exceptional customer service</li>
                      </ul>
                      <p></p>
                      <p>Franchise Owner | Steamrex By OKQ8 | 2019 - 2020</p>
                      <ul>
                        <li>Operated a mobile car washing and detailing business</li>
                        <li>Utilized eco-friendly products and techniques</li>
                        <li>Conducted marketing, bookkeeping, invoicing, and sales activities</li>
                        <li>Managed scheduling and appointments for efficient service delivery</li>
                        <li>Provided exceptional customer service to ensure satisfaction and loyalty</li>
                        <li>Implemented quality control measures to maintain high standards of service</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Chas Academy | DevOps Engineer | 2022 - 2024</p>
                      <ul>
                        <li>Deep dive into DevOps concepts and methods</li>
                        <li>Agile working methods with a focus on Scrum and project management as a Scrum Master</li>
                        <li>Database development with SQL, SQLite, MySQL, MariaDB, and cloud-based storage services</li>
                        <li>Management of DevOps environments with Git, Gitflow, Jenkins, Kubernetes, and Docker</li>
                        <li>Cloud services like AWS and Azure for creation and deployment</li>
                        <li>Monitoring and management of systems with Zabbix and Prometheus</li>
                        <li>Automation and configuration management with Ansible</li>
                        <li>Linux/Unix server administration and bash programming</li>
                        <li>Scripting and programming with Python, Golang, and Bash</li>
                        <li>Infrastructure as code with Kubernetes, Jenkins, and Terraform</li>
                        <li>Continuous Integration and Delivery</li>
                        <li>Test-driven development (TDD) and Behavior-Driven Development (BDD)</li>
                      </ul>
                      <p></p>
                      <p>Thoren Innovation School | Engineering Science | 2015 - 2018</p>
                      <ul>
                        <li>Swedish 1, 2 and 3</li>
                        <li>English 5, 6 and 7</li>
                        <li>Mathematics 1c, 2c, 3c, 4 and 5</li>
                        <li>History 1a1</li>
                        <li>Programming 1</li>
                        <li>Technology 1</li>
                        <li>Computer and Network Technology</li>
                        <li>Web Development 1</li>
                        <li>Web Server Programming 1</li>
                        <li>Construction 1</li>
                        <li>Physics 1a</li>
                        <li>Chemistry 1</li>
                        <li>Physical Education and Health 1</li>
                        <li>Social Studies 1b</li>
                        <li>Religious Studies 1</li>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
