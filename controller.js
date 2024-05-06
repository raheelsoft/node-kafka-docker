import KafkaProducer from "./producer.js";
import {TOPIC_NAME} from "./constants.js";

const sendMessageToKafka = async (req, res) => {
    try {
        const {message} = req.body;
        const kafkaProducer = new KafkaProducer();
        const messages = [{key: "key1", value: message}];
        kafkaProducer.produce(TOPIC_NAME, messages);

        res.status(200).json({
            status: "Ok!",
            message: "Message successfully send!",
        });
    } catch (error) {
        console.log(error);
    }
};

const constrollers = {sendMessageToKafka};

export default constrollers;
