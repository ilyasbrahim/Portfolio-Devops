import pythonimg from "../assets/img/Python.svg";
import Golangimg from "../assets/img/Golang.svg";
import Ansibleimg from "../assets/img/Ansible.svg";
import Azureimg from "../assets/img/Azure.svg";
import Bashimg from "../assets/img/bash.svg";
import Dockerimg from "../assets/img/docker.svg";
import Gitimg from "../assets/img/Git.svg";
import Jenkinsimg from "../assets/img/jenkins.svg";
import Kubernetesimg from "../assets/img/kubernetes.svg";
import MySQLimg from "../assets/img/MySQL.svg";
import Prometheusimg from "../assets/img/prometheus.svg";
import Terraformimg from "../assets/img/Terraform.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Scroll to showcase my skills</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={pythonimg} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={Golangimg} alt="Image" />
                                <h5>Golang</h5>
                            </div>
                            <div className="item">
                                <img src={Bashimg} alt="Image" />
                                <h5>Bash</h5>
                            </div>
                            <div className="item">
                                <img src={Ansibleimg} alt="Image" />
                                <h5>Ansible</h5>
                            </div>
                            <div className="item">
                                <img src={Terraformimg} alt="Image" />
                                <h5>Terraform</h5>
                            </div>
                            <div className="item">
                                <img src={Kubernetesimg} alt="Image" />
                                <h5>Kubernetes</h5>
                            </div>
                            <div className="item">
                                <img src={Jenkinsimg} alt="Image" />
                                <h5>Jenkins</h5>
                            </div>
                            <div className="item">
                                <img src={Dockerimg} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={Azureimg} alt="Image" />
                                <h5>Azure</h5>
                            </div>
                            <div className="item">
                                <img src={Gitimg} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={MySQLimg} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={Prometheusimg} alt="Image" />
                                <h5>Prometheus</h5>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}