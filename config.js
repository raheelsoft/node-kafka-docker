import {Kafka} from "kafkajs";
import {BROKERS, CLIENT_ID} from "./constants.js";

const kafkaConfig = {
    clientId: CLIENT_ID,
    brokers: BROKERS,
};

const kafka = new Kafka(kafkaConfig);

export default kafka;
