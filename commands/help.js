module.exports = {
 name: 'help',
 description: "This will help you guide with the bot I'm working on.",
 
 execute(message, args){
    message.channel.send('こにちわ! I\'\m Yui  and I\'\ll be helping you with anything!')
    message.channel.send('to know your scheule, type: 111 (strand and batch) (today or tommorow) ')
    message.channel.send('to know your assignments, type: 111 assignments')
    message.delete().catch(O_o=>{})}
}
