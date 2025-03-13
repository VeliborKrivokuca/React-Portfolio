import { CgAbstract, CgBot, CgBowl, CgUserlane } from "react-icons/cg";
import {} from "react-icons/io5";

const ProjectsData = {
  projects_head_tag: "Portfolio",
  projects_head_title: "Some of my cool projects",
};

const ProjectsCardData = [
  {
    id: 1,
    project_img: "assets/projects/web1.png",
    project_alt: "Web 1",
    project_icon: <CgUserlane />,
    project_title: "Portfolio",
    project_link: "https://velibor-react-portfolio.vercel.app/",
    project_bg: "info info_dark",
  },
  {
    id: 2,
    project_img: "assets/projects/web2.png",
    project_alt: "Web 2",
    project_icon: <CgBowl />,
    project_title: "Culinary",
    project_link: "https://culinary-qapg.vercel.app/",
    project_bg: "info info_dark",
  },
  {
    id: 2,
    project_img: "assets/projects/web3.png",
    project_alt: "Web 3",
    project_icon: <CgBot />,
    project_title: "OPEN AI Landing Page",
    project_link: "https://open-ai-zom5.vercel.app/",
    project_bg: "info info_dark",
  },
];

export { ProjectsData, ProjectsCardData };
