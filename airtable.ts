import Airtable, {Base} from 'airtable';

export interface Maintainer {
    name: string,
    socials: {
        github?: string,
        email?: string
    }
    profile_pic: string
}

export interface Project {
    id: string,
    name: string,
    project_link: string,
    maintainer: Maintainer
}

export class AirtableAdapter{
    private readonly base: Base;
    constructor(api_key: string, base_id: string){
        this.base = new Airtable({apiKey: api_key}).base(base_id);
    }

    async projects(){
        const projects: Array<Project> = [];
        const records = await this.base('Projects').select({
            view: 'Grid view'
        }).all();

        for (const record of records) {
            const maintainer: Maintainer = await this.getMaintainer(record.get('Maintainers')[0]);
            projects.push({
                id: record.getId(),
                name: record.get('Name') as string,
                project_link: record.get('Project Link') as string,
                maintainer
            });
        }

        return projects;
    }

    private async getMaintainer(id: string): Promise<Maintainer>{
        const _ = await this.base('Maintainers').find(id);
        const maintainer: Maintainer = {
            name: _.get('Name') as string,
            socials: {
                email: _.get('Email') as string,
                github: _.get('Github') as string
            },
            profile_pic: _.get('Profile Picture')[0].url
        }
        return maintainer
    }
}