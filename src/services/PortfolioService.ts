import { Project } from "../models/Project";
import { Experience, Education, Skill } from "../models/Experience";
import {
    ProjectCategory,
    ExperienceType,
    SkillCategory,
    IProjectDTO,
    IExperienceDTO,
    IEducationDTO,
    ISkillDTO
} from "../types";

// Raw Data (Simulating Database)
const rawProjects: IProjectDTO[] = [
    {
        id: 1,
        title: "Taffy - Astrology Dating App",
        category: ProjectCategory.WEB,
        description: "A dating platform matching users based on Thai astrological algorithms (Zodiac, Birth Year, Blood Type). Designed relational database schema and deployed on Heroku.",
        technologies: ["Django", "Python", "SQL", "Heroku", "Bootstrap"],
        image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Smart Safety System",
        category: ProjectCategory.APPLICATION,
        description: "IoT-based web interface to monitor and report safety status in real-time.",
        technologies: ["Django", "IoT", "WebSockets"],
        image: "https://images.unsplash.com/photo-1558346058-b651b7a4aa8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Book Purchase Analysis",
        category: ProjectCategory.DATA,
        description: "Data Science web application for analyzing and visualizing book sales data to support decision-making.",
        technologies: ["Django", "Pandas", "Data Visualization"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Post Notification System",
        category: ProjectCategory.WEB,
        description: "Real-time announcement and notification system for organizational updates.",
        technologies: ["Laravel", "PHP", "MySQL"],
        image: "https://images.unsplash.com/photo-1459499362902-55a20553e082?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

const rawExperiences: IExperienceDTO[] = [
    {
        id: 1,
        role: "Freelance Designer & Independent Contractor",
        company: "Self-Employed",
        period: "May 2023 – Present",
        description: "Provided technical services including web/app prototyping, academic presentation design, and report formatting. Managed logistics and operations with high efficiency, developing strong problem-solving skills under pressure.",
        description_th: "รับออกแบบและพัฒนา Web/AppPrototype สำหรับนักศึกษา รวมถึงการออกแบบสไลด์นำเสนอและรายงานเชิงวิชาการ บริหารจัดการเวลาและเส้นทางในการรับส่งอาหารผ่าน Platform (Grab/Lineman) อย่างมีประสิทธิภาพ",
        type: ExperienceType.FREELANCE
    },
    {
        id: 2,
        role: "Apparel Designer & Production Specialist",
        company: "Clothing Production House",
        period: "June 2023 – August 2023",
        description: "Created original t-shirt graphics, performed size grading, and operated DTG/Screen Printing machinery. Ensured quality control throughout the production process.",
        description_th: "สร้างสรรค์ลายกราฟิกเสื้อผ้าตามเทรนด์ตลาด และดำเนินการทำ Size Grading สำหรับแพทเทิร์นเสื้อผ้า ควบคุมและบำรุงรักษาเครื่องพิมพ์ระบบ DTG/Screen Printing",
        type: ExperienceType.WORK
    },
    {
        id: 3,
        role: "Administrative Assistant (Conscripted Service)",
        company: "Naval Secretariat, Royal Thai Navy",
        period: "May 2022 – May 2023",
        description: "Managed government correspondence and document flow. Maintained high discipline and completed specialized Quartermaster School (QMS) training.",
        description_th: "บริหารจัดการงานเอกสารราชการ การรับ-ส่งหนังสือ และประสานงานภายในหน่วยงานภายใต้ระเบียบวินัยที่เคร่งครัด สำเร็จหลักสูตรการฝึกทหารใหม่และหลักสูตรเฉพาะทาง ณ โรงเรียนพลาธิการ (QMS)",
        type: ExperienceType.MILITARY
    },
    {
        id: 4,
        role: "Software Tester (QA Internship)",
        company: "Mana Application",
        period: "March 2020 – May 2020",
        description: "Executed manual testing for 'Mana Wallet' application. Documented defects and designed promotional assets for social media.",
        description_th: "ดำเนินการทดสอบระบบ (Manual Testing) เพื่อตรวจสอบคุณภาพและหาข้อผิดพลาดของแอปพลิเคชัน ออกแบบสื่อการตลาด (Marketing Poster)",
        type: ExperienceType.INTERNSHIP
    }
];

const rawSkills: ISkillDTO[] = [
    { id: 1, name: "Python", category: SkillCategory.LANGUAGE },
    { id: 2, name: "PHP", category: SkillCategory.LANGUAGE },
    { id: 3, name: "JavaScript", category: SkillCategory.LANGUAGE },
    { id: 4, name: "Django", category: SkillCategory.FRAMEWORK },
    { id: 5, name: "Laravel", category: SkillCategory.FRAMEWORK },
    { id: 6, name: "React", category: SkillCategory.FRAMEWORK },
    { id: 7, name: "MySQL", category: SkillCategory.DATABASE },
    { id: 8, name: "Git", category: SkillCategory.TOOL },
    { id: 9, name: "Linux", category: SkillCategory.TOOL },
    { id: 10, name: "Adobe Illustrator", category: SkillCategory.DESIGN },
    { id: 11, name: "Photoshop", category: SkillCategory.DESIGN }
];

const rawEducation: IEducationDTO[] = [
    {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        school: "Ubon Ratchathani University",
        period: "2017 – 2020",
        description: "Self-financed education through part-time employment. Relevant Coursework: Web Engineering, Database Systems, Data Structures & Algorithms, Software Engineering.",
    }
];

// Service Class (Singleton Pattern recommended for simple apps, or just static methods)
export class PortfolioService {

    static getProjects(): Project[] {
        return rawProjects.map(dto => new Project(dto));
    }

    static getProjectById(id: number): Project | undefined {
        const dto = rawProjects.find(p => p.id === id);
        return dto ? new Project(dto) : undefined;
    }

    static getExperiences(): Experience[] {
        return rawExperiences.map(dto => new Experience(dto));
    }

    static getSkills(): Skill[] {
        return rawSkills.map(dto => new Skill(dto.id, dto.name, dto.category as SkillCategory));
    }

    static getEducation(): Education[] {
        return rawEducation.map(dto => new Education(dto));
    }
}
