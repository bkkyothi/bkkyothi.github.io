import { ExperienceType, SkillCategory, IExperienceDTO, IEducationDTO } from "../types";

// --- Skill Model ---
// --- Skill Model ---

export class Skill {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly category: SkillCategory
    ) { }
}

// --- Experience Model ---
// --- Experience Model ---

export class Experience {
    constructor(private data: IExperienceDTO) { }

    get id() { return this.data.id; }
    get role() { return this.data.role; }
    get company() { return this.data.company; }
    get period() { return this.data.period; }
    get description() { return this.data.description; }
    get descriptionTH() { return this.data.description_th; }
    get type() { return this.data.type as ExperienceType; }

    public getFullTitle(): string {
        return `${this.role} at ${this.company}`;
    }

    public hasThaiDescription(): boolean {
        return !!this.data.description_th;
    }
}

// --- Education Model ---
// --- Education Model ---

export class Education {
    constructor(private data: IEducationDTO) { }

    get id() { return this.data.id; }
    get degree() { return this.data.degree; }
    get school() { return this.data.school; }
    get period() { return this.data.period; }
    get description() { return this.data.description; }
}
