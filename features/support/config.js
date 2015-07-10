module.exports = {
  url: process.env.KUZZLE_URL || 'http://localhost:8081',
  mqttUrl: process.env.KUZZLE_MQTT_URL || 'mqtt://localhost:1883',
  amqpUrl: process.env.KUZZLE_AMQP_URL || 'amqp://localhost:5672'
};
