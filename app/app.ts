import express, { Application, Request, Response } from 'express';

const app: Application = express();
app.use(express.json());

const PORT = 3000;

app.post('/message', (req: Request, res: Response) => {
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
        const message: string = req.body.message;
        let greetings = message.toLowerCase().includes('Hello'.toLowerCase()) || message.toLowerCase().includes('Hi'.toLowerCase());
        let farewell = message.toLowerCase().includes('Goodbye'.toLowerCase()) || message.toLowerCase().includes('bye'.toLowerCase());
        let data = {};
        if (greetings) {
          data = {
            response_id: conversation_id,
            response: 'Welcome to StationFive.',
          };
          return res.send(data).status(200);
        }

        if (farewell) {
          data = {
            response_id: conversation_id,
            response: 'Thank you, see you around.',
          };
          return res.send(data).status(200);
        }

        if (farewell === false || greetings === false) {
         data = {
            response_id: conversation_id,
            response: "Sorry, I don't understand",
          };
          return res.send(data).status(200);
        }
      }
    }

  } catch (err) {
    return res.send(err).status(400);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});