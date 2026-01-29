import { ProjectCategory, IProjectDTO } from "../types";

export class Project {
    private _id: number;
    private _title: string;
    private _category: ProjectCategory;
    private _description: string;
    private _technologies: string[];
    private _image: string;
    private _link?: string;

    constructor(data: IProjectDTO) {
        this._id = data.id;
        this._title = data.title;
        this._category = data.category as ProjectCategory;
        this._description = data.description;
        this._technologies = data.technologies;
        this._image = data.image || "https://via.placeholder.com/800x600?text=No+Image";
        this._link = data.link;
    }

    // Getters
    get id(): number { return this._id; }
    get title(): string { return this._title; }
    get category(): ProjectCategory { return this._category; }
    get description(): string { return this._description; }
    get technologies(): string[] { return this._technologies; }
    get image(): string { return this._image; }
    get link(): string | undefined { return this._link; }

    // Business Logic Method: Check if project matches a specific filter
    public matchesFilter(filter: string): boolean {
        if (filter === 'all') return true;
        return this._category === filter;
    }

    public get formattedCategory(): string {
        return this._category.charAt(0).toUpperCase() + this._category.slice(1);
    }
}
