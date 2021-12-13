import Axios from 'axios';

class ApiCaller {
    private readonly base_url = '"https://api.airtable.com/v0/'
    private config: { api_key: string, base_id: string };
    constructor(api_key: string, base_id: string) {
        this.config.api_key = api_key;
        this.config.base_id = base_id;
    }
    async fetch() {
        return await Axios({
            url: this.base_url + `${this.config.base_id}/Table%201?view=Grid%20view`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.config.api_key}`
            }
        })
    }
}

export class AirtableAdapter extends ApiCaller {
    constructor(api_key: string, base_id: string) {
        super(api_key, base_id);
    }

    async maintainers(): Promise<{ data?: any, error?: Error }> {
        try {
            const { data, status } = await this.fetch();
            return { data };
        } catch (error) {
            return { error };
        }
    }
}