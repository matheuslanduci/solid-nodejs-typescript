module.exports = {
  mongoDbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '4.0.3', // Version of MongoDB
      skipMD5: true
    },
    autoStart: false
  }
}
