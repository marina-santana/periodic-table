import { NextApiRequest, NextApiResponse } from 'next';
import dataBase from '../../db/db-element-details.json';

export default (req: NextApiRequest, res: NextApiResponse): void => {
    try {
        const { id } = req.query;

        const element = dataBase.find(element => element.id == id);

        if (element) {
            res.status(200).json(element);
        } else {
            res.status(404).json({ error: 'Not found' });
        }
    } catch (error) {
        console.error(error);
    }
};
