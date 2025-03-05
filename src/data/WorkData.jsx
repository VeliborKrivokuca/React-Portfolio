import { MdDesktopWindows, MdAndroid, MdBorderColor } from "react-icons/md";
import { FaRobot, FaPaintBrush, FaBullhorn } from "react-icons/fa";

const WorkData = {
    work_head_tag: "What I Do?",
    work_head_title: "How I can help your next project",
};

const WorkCardData = [
    {
        id: 1,
        work_icon: <MdDesktopWindows />,
        work_name: "Web Development",
        work_desc:
            "I build responsive, interactive, and scalable web applications using React, Angular, Vue and modern frontend technologies.",
    },
    {
        id: 2,
        work_icon: <MdAndroid />,
        work_name: "UI/UX Design",
        work_desc:
            "I design clean, user-friendly interfaces that enhance user experience and engagement on web and mobile applications.",
    },
    {
        id: 3,
        work_icon: <MdBorderColor />,
        work_name: "Frontend Performance Optimization",
        work_desc:
            "I optimize web applications for speed and performance, ensuring smooth user experiences with fast load times.",
    },
    {
        id: 4,
        work_icon: <FaRobot />,
        work_name: "Artificial Intelligence",
        work_desc:
            "I integrate AI-powered solutions into web applications including chatbots, predictive analytics and automation.",
    },
    {
        id: 5,
        work_icon: <FaPaintBrush />,
        work_name: "Graphics Design",
        work_desc:
            "I design intuitive UI/UX elements for web and mobile applications, focusing on clean and user-friendly aesthetics.",
    },
    {
        id: 6,
        work_icon: <FaBullhorn />,
        work_name: "Custom Web Components",
        work_desc:
            "I create reusable and efficient web components to enhance functionality and maintainability across projects.",
    },
];

export { WorkData, WorkCardData };
