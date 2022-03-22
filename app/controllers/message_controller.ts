import { Request, Response } from 'express';
import {validate_string} from '../utils/string_';




exports.message = async(req: Request, res: Response)=>{
    let check_jsonFormat = JSON.parse(JSON.stringify(req.body));
    try {
        if (check_jsonFormat) {
        let check_format = Object.keys(req.body);
        const validate_id = check_format.includes('conversation_id');
        const validate_message = check_format.includes('message');
        if (validate_id === false || validate_message === false) {
            return res.send({ message: 'Invalid json format' }).status(400);
        } else {
            const conversation_id: any = req.body.conversation_id; 
            const message: string = req.body.message.split(' ')[0];
            const return_val = validate_string(message);
            const data = { response_id: conversation_id, response: return_val};     
            res.send(data).status(200)
        }
        }

    } catch (err) {
        return res.send(err).status(400);
    }
}