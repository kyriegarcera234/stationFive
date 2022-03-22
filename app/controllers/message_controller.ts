import { Request, Response } from 'express';


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
            const data = { response_id: conversation_id, response:''};
            const message: string = req.body.message.split(' ')[0];
            const greetings = message.toLowerCase().includes('Hello'.toLowerCase()) || message.toLowerCase().includes('Hi'.toLowerCase());
            let farewell = message.toLowerCase().includes('Goodbye'.toLowerCase()) || message.toLowerCase().includes('bye'.toLowerCase());
            (greetings) ? greetings : null;
            (farewell) ? farewell : null;

            (greetings) ? data.response ='Welcome to StationFive.'   : 
            (farewell) ? data.response ='Thank you, see you around.' :  
            data.response ="Sorry, I don't understand"
            
            res.send(data).status(200)
        }
        }

    } catch (err) {
        return res.send(err).status(400);
    }
}