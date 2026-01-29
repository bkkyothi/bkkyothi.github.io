export interface Experience {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    description_th?: string;
    type: 'work' | 'internship' | 'freelance' | 'military';
}

export interface Education {
    id: number;
    degree: string;
    school: string;
    period: string;
    description: string;
}

export interface Skill {
    id: number;
    name: string;
    category: 'language' | 'framework' | 'database' | 'tool' | 'design';
}

export const experiences: Experience[] = [
    {
        id: 1,
        role: "Freelance Designer & Independent Contractor",
        company: "Self-Employed",
        period: "May 2023 – Present",
        description: "Provided technical services including web/app prototyping, academic presentation design, and report formatting. Managed logistics and operations with high efficiency, developing strong problem-solving skills under pressure.",
        description_th: "รับออกแบบและพัฒนา Web/App Prototype สำหรับนักศึกษา รวมถึงการออกแบบสไลด์นำเสนอและรายงานเชิงวิชาการ บริหารจัดการเวลาและเส้นทางในการรับส่งอาหารผ่าน Platform (Grab/Lineman) อย่างมีประสิทธิภาพ",
        type: "freelance"
    },
    {
        id: 2,
        role: "Apparel Designer & Production Specialist",
        company: "Clothing Production House",
        period: "June 2023 – August 2023",
        description: "Created original t-shirt graphics, performed size grading, and operated DTG/Screen Printing machinery. Ensured quality control throughout the production process.",
        description_th: "สร้างสรรค์ลายกราฟิกเสื้อผ้าตามเทรนด์ตลาด และดำเนินการทำ Size Grading สำหรับแพทเทิร์นเสื้อผ้า ควบคุมและบำรุงรักษาเครื่องพิมพ์ระบบ DTG/Screen Printing",
        type: "work"
    },
    {
        id: 3,
        role: "Administrative Assistant (Conscripted Service)",
        company: "Naval Secretariat, Royal Thai Navy",
        period: "May 2022 – May 2023",
        description: "Managed government correspondence and document flow. Maintained high discipline and completed specialized Quartermaster School (QMS) training.",
        description_th: "บริหารจัดการงานเอกสารราชการ การรับ-ส่งหนังสือ และประสานงานภายในหน่วยงานภายใต้ระเบียบวินัยที่เคร่งครัด สำเร็จหลักสูตรการฝึกทหารใหม่และหลักสูตรเฉพาะทาง ณ โรงเรียนพลาธิการ (QMS)",
        type: "military"
    },
    {
        id: 4,
        role: "Software Tester (QA Internship)",
        company: "Mana Application",
        period: "March 2020 – May 2020",
        description: "Executed manual testing for 'Mana Wallet' application. Documented defects and designed promotional assets for social media.",
        description_th: "ดำเนินการทดสอบระบบ (Manual Testing) เพื่อตรวจสอบคุณภาพและหาข้อผิดพลาดของแอปพลิเคชัน ออกแบบสื่อการตลาด (Marketing Poster)",
        type: "internship"
    }
];

export const education: Education[] = [
    {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        school: "Ubon Ratchathani University",
        period: "2017 – 2020",
        description: "Self-financed education through part-time employment. Relevant Coursework: Web Engineering, Database Systems, Data Structures & Algorithms, Software Engineering.",
    }
];

export const skills: Skill[] = [
    { id: 1, name: "Python", category: "language" },
    { id: 2, name: "PHP", category: "language" },
    { id: 3, name: "JavaScript", category: "language" },
    { id: 4, name: "Django", category: "framework" },
    { id: 5, name: "Laravel", category: "framework" },
    { id: 6, name: "React", category: "framework" },
    { id: 7, name: "MySQL", category: "database" },
    { id: 8, name: "Git", category: "tool" },
    { id: 9, name: "Linux", category: "tool" },
    { id: 10, name: "Adobe Illustrator", category: "design" },
    { id: 11, name: "Photoshop", category: "design" }
];
