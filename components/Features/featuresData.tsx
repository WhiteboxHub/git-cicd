import { Feature } from "@/types/feature";
import { SiGit, SiDocker, SiKubernetes, SiJenkins } from 'react-icons/si';

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <SiGit size={40} />,
    title: "What is Git?",
    paragraph:
      "Git is a distributed version control system that allows multiple developers to work on the same project. It keeps track of changes in the codebase and allows developers to collaborate effectively.",
  },
  {
    id: 1,
    icon: <SiDocker size={40} />,
    title: "What is Docker?",
    paragraph:
      "Docker is a platform for developers and sysadmins to develop, ship, and run applications. It uses containerization technology to package and run applications in a consistent environment.",
  },
  {
    id: 1,
    icon: <SiKubernetes size={40} />,
    title: "What is Kubernetes?",
    paragraph:
      "Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers. It groups containers that make up an application into logical units for easy management and discovery.",
  },
  {
    id: 1,
    icon: <SiJenkins size={40} />,
    title: "What is Jenkins?",
    paragraph:
      "Jenkins is an open-source automation server that helps to automate the non-human part of the software development process, with continuous integration and facilitating technical aspects of continuous delivery.",
  },
];
export default featuresData;
