const allJoinListeners = []
  module.exports = (callback) => {
       allJoinListeners.push(callback)
       console.log("Registered new join listener.")
  }
  
  module.exports.listen = (client) => {
    client.on('guildMemberAdd', (member) => {
        allJoinListeners.forEach(callback => {
          callback(member, client)
        })
  
    })
  }

