import homeimage from "./assets/images/Pandablackbg.png";

const logotext = "HOME";
const meta = {
    title: "Nitin Pandey | Offensive Security Engineer",
    description: "I'm Nitin Pandey, an Offensive Security Engineer & Red Teamer specializing in Web Application Penetration Testing, OSINT, and Digital Forensics",
};

const introdata = {
    title: "Hi, I'm Nitin",
    animated: {
        first: "Bug Creator",
        second: "Code breaker",
        third: "Ctf Player",
    },
    //description: "A dedicated security professional with a passion for finding flaws before malicious actors do. My approach combines technical rigor with a creative, adversarial mindset to simulate real-world attacks and strengthen digital defenses. I am also curious for webdev technologies.",
    your_img_url: homeimage,
};

const dataabout = {
    title: "About Me",
    aboutme: "I’m Nitin Pandey, a BTech (ECE) student and practical cybersecurity enthusiast who learns by building. I combine classroom fundamentals with hands-on projects — from creating a voice-controlled robot to experimenting with homelab malware analyses. I work regularly with Kali Linux and common network/forensic tools, and I enjoy automating reconnaissance with custom scripts to sharpen my offensive and defensive understanding. Outside of technical work, I am expanding my skills in web and backend development, graphic design, content writing, and video editing. This mix of creative and technical pursuits helps me communicate complex ideas effectively while continuing to grow as a well-rounded problem-solver.",
};
const worktimeline = [
    // Work timeline omitted - focusing on projects and skills
];

// content_option.js

// ... (keep all your other data like introdata, dataabout, etc.)

const skills = [
    // Languages
    {
        name: "Python",
        icon: "/icons/python.svg", // Example path - create an 'icons' folder in your 'public' directory
        category: "Languages"
    },
    
    {
        name: "JavaScript",
        icon: "/icons/javascript.svg",
        category: "Languages"
    },
    {
        name: "Bash",
        icon: "/icons/bash.svg",
        category: "Languages"
    },
    {
        name: "PowerShell",
        icon: "/icons/powershell.svg",
        category: "Languages"
    },
    // Offensive Security Tools
    {
        name: "Burp Suite",
        icon: "/icons/burpsuite.svg",
        category: "Offensive Security Tools"
    },
    {
        name: "Metasploit",
        icon: "/icons/metasploit.svg",
        category: "Offensive Security Tools"
    },
    {
        name: "Nmap",
        icon: "/icons/nmap.svg",
        category: "Offensive Security Tools"
    },
    {
        name: "Hydra",
        icon: "/icons/hydra.png",
        category: "Offensive Security Tools"
    },
    // Analysis & Forensics
    {
        name: "Wireshark",
        icon: "/icons/wireshark.svg",
        category: "Analysis & Forensics"
    },
    {
        name: "Ghidra", // Added for more depth
        icon: "/icons/ghidra.svg", // You might need to find or create an icon
        category: "Analysis & Forensics"
    },
    // Core Competencies
    {
        name: "Web App Pentesting",
        icon: "/icons/webapp.svg", // Use a generic web icon
        category: "Core Competencies"
    },
    {
        name: "AD Security",
        icon: "/icons/activedirectory.svg", // Use a generic server/network icon
        category: "Core Competencies"
    },
    {
        name: "Digital Forensics",
        icon: "/icons/forensics.svg", // Use a generic microscope/search icon
        category: "Core Competencies"
    },
];


// ... (keep the rest of the file the same)


const services = [
    {
        title: "Web Application Security Assessment",
        description: "Identifying and mitigating vulnerabilities in web applications, from injection flaws to misconfigurations, to ensure robust digital assets.",
    },
    {
        title: "Network & Infrastructure Pentesting",
        description: "Simulating real-world attacks on internal and external networks to uncover security weaknesses in systems like Active Directory.",
    },
    {
        title: "Security Automation & Tooling",
        description: "Developing custom scripts and tools to automate repetitive security tasks, from reconnaissance to log analysis, improving efficiency and response time.",
    },
];

const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
        description: "System Compromise Analysis: A detailed write-up for the 'Lame' machine on HackTheBox, documenting the full attack lifecycle from enumeration to root privilege escalation.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
        description: "DomainIntel: An automated reconnaissance tool written in Python that uses APIs to gather subdomain and port-scanning intelligence on a target.",
        link: "https://github.com/Nl-T-lN",
    },
    {
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
        description: "Building a Secure Malware Analysis Homelab: An architectural breakdown of an isolated lab environment using REMnux for safe, dynamic malware analysis.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "nitinpandey11223@gmail.com",
    description: "I'm always open to discussing new opportunities, projects, or just connecting with fellow professionals in the security community. Feel free to reach out.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Nl-T-lN",
    linkedin: "https://www.linkedin.com/in/-nitinpandey-",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};