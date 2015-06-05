module.exports = {
  writeEngine: require('./models/elasticsearch'),
  readEngine: require('./models/elasticsearch'),
  model: {
    index: 'mainindex'
  },
  broker: require('./brokers/rabbit'),
  hooks: require('./hooks'),
  workers: require('./workers')
};