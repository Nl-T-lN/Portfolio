import heroImage from "./assets/images/Pandablackbg.png";

const logotext = "SADHARANPANDA";
const meta = {
    title: "Nitin Pandey | Offensive Security Engineer",
    description: "I'm Nitin Pandey, an Offensive Security Engineer & Red Teamer specializing in Web Application Penetration Testing, OSINT, and Digital Forensics",
};

const introdata = {
    title: "I'm Nitin Pandey",
    animated: {
        first: "Offensive Security Engineer",
        second: "Web App Penetration Tester",
        third: "Red Team Specialist",
    },
    description: "A dedicated security professional with a passion for finding flaws before malicious actors do. My approach combines technical rigor with a creative, adversarial mindset to simulate real-world attacks and strengthen digital defenses. I am also curious for webdev technologies.",
    your_img_url: heroImage,
};

const dataabout = {
    title: "About Me",
    aboutme: "Hello, I'm Nitin. My journey into cybersecurity began with a deep curiosity for understanding how systems work—and more importantly, how they can be broken. I am driven by the constant challenge of an ever-evolving digital landscape and thrive on the process of identifying, exploiting, and mitigating complex security vulnerabilities. My focus is on practical, hands-on application. Whether I'm dissecting a vulnerable machine, developing a custom script to automate reconnaissance, or analyzing malware in my homelab, I am committed to a process of continuous learning and skill development. I believe the most effective defense is built upon a profound understanding of the offense, and I dedicate my efforts to mastering that adversarial perspective.",
};
const worktimeline = [
    // Work timeline omitted - focusing on projects and skills
];

const skills = [
    {
        name: "Python",
        value: 90,
    },
    {
        name: "Bash",
        value: 85,
    },
    {
        name: "PowerShell",
        value: 75,
    },
    {
        name: "Burp Suite Pro",
        value: 95,
    },
    {
        name: "Metasploit Framework",
        value: 90,
    },
    {
        name: "Nmap",
        value: 95,
    },
    {
        name: "Wireshark",
        value: 85,
    },
    {
        name: "Cobalt Strike",
        value: 70,
    },
    {
        name: "Web App Pentesting",
        value: 90,
    },
    {
        name: "Active Directory Security",
        value: 80,
    },
    {
        name: "Digital Forensics",
        value: 75,
    },
];

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