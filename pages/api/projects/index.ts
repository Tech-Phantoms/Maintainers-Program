import { NextApiResponse, NextApiRequest } from 'next';
import { AirtableAdapter } from '../../../airtable';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const airtable = new AirtableAdapter(
        process.env.AIRTABLE_API_KEY,
        process.env.AIRTABLE_BASE_ID
    );
    const projects = await airtable.projects();

    return res.status(200).json(projects);
}