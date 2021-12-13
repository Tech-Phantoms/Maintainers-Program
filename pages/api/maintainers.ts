import { NextApiRequest, NextApiResponse } from 'next';
import { AirtableAdapter } from '../../airtable';
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const airtable = new AirtableAdapter(process.env.AIRTABLE_API_KEY, process.env.AIRTABLE_BASE_ID);
    const { data, error } = await airtable.maintainers();
    if (error) {
        return res.status(404).send("Something unexpected Happened");
    }
    return res.status(200).send(data);
}