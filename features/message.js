const allMessageListeners = []
  module.exports = (options) => {
       allMessageListeners.push(options)
       console.log("Registered new message listener.")
  }
  
  module.exports.listen = (client) => {
    client.on('message', (message) => {
        allMessageListeners.forEach(option => {

          // Don't trigger the callback if the detected message is a message that the bot sent
          if (message.author == client.user) {
            return
          }
          
          // Default data
          let {
            callback,
            enabled = true
          } = option

          // Disabled listeners won't run
          if(enabled === false) { 
            return
          }
          
          callback(message, client)
        })
  
    })
  }

