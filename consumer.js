import kafka from "./config.js";

class KafkaConsumer {
    constructor(groupId) {
        this.consumer = kafka.consumer({groupId});
    }

    async consume(topic, callback) {
        try {
            await this.consumer.connect();
            await this.consumer.subscribe({topic, fromBeginning: true});
            await this.consumer.run({
                eachMessage: async ({topic, partition, message}) => {
                    const value = message.value.toString();
                    callback(topic, partition, value);
                },
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export default KafkaConsumer;
