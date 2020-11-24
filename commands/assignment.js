module.exports = {
    name: 'assignments',
    description: "This will help you guide with the bot I'm working on.",
    execute(message, args){
       message.channel.send('I\'\m currently a work in progress. Please try again later' )
       message.delete().catch(O_o=>{}) /* dont forget to put this on all cmds */; 
       }
   }
   
  