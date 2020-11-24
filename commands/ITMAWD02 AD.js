module.exports = {
  name: 'advance03',
  description: "This will help you guide with the bot I'm working on.",
  
  execute(message, args){const today = new Date().getDay(); // returns a number from 0 to 6 (0=Sunday 1=Monday 2=Tuesday ...)

      switch (today) {
        case 6:
          message.channel.send (
             'You have no classes for tomorrow.');
   
         break;
       case 0:
         const Discord = require("discord.js");   
         const Embed = new Discord.MessageEmbed();
            Embed.setDescription("[Media and Information](https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjlmNWI0YWUtN2Q0NS00Yjc1LTkzYTktOTIyMDcxY2YzYTBk%40thread.v2/0?context=%7b%22Tid%22%3a%2269587499-a807-43e6-b603-680dc411b8b1%22%2c%22Oid%22%3a%22c8d03572-e09d-4548-bac7-728d73b7ee8a%22%7d) 9:00-9:30 \n [General Math](https://teams.microsoft.com/l/meetup-join/19%3a97bfeca3c30c4faaa960d3e2b4a34259%40thread.tacv2/1600403260293?context=%7b%22Tid%22%3a%2269587499-a807-43e6-b603-680dc411b8b1%22%2c%22Oid%22%3a%22c6f2da9a-4e49-496c-a775-f5290546f2bf%22%7d) 11:30-12:00 \n Click the subject to join ");
          message.channel.send (Embed);
      
          break;
        case 1:
          const Discord1 = require("discord.js");   
          const Embed1 = new Discord1.MessageEmbed();
             Embed1.setDescription("[Literature](https://teams.microsoft.com/l/meetup-join/19%3a0c4897a4f2ec4a339f7a404d3f491e15%40thread.tacv2/1600139217639?context=%7b%22Tid%22%3a%2269587499-a807-43e6-b603-680dc411b8b1%22%2c%22Oid%22%3a%22309f5cec-8987-4ec5-b000-a9446bd7310e%22%7d) 11:30-12:00");
           message.channel.send (Embed1);
          break;
        case 2:
           
           message.channel.send (
              'You have no classes for tomorrow.');
        
          break;
        case 3:
          const Discord2 = require("discord.js");   
          const Embed2 = new Discord2.MessageEmbed();
             Embed2.setDescription("[Computer Programming 1](https://teams.microsoft.com/l/meetup-join/19%3aedd871e3d8074fbc9ae0683499beedf2%40thread.tacv2/1600325048560?context=%7b%22Tid%22%3a%2269587499-a807-43e6-b603-680dc411b8b1%22%2c%22Oid%22%3a%22a52c9068-71fd-4986-ac08-355d28221afa%22%7d) 9:00-9:30 \n[Computer Programming 2](https://teams.microsoft.com/l/meetup-join/19%3aedd871e3d8074fbc9ae0683499beedf2%40thread.tacv2/1600328545505?context=%7b%22Tid%22%3a%2269587499-a807-43e6-b603-680dc411b8b1%22%2c%22Oid%22%3a%22a52c9068-71fd-4986-ac08-355d28221afa%22%7d) 12:00-12:30 \n click the subject to join");
           message.channel.send (
              Embed2);
          break;
        case 4:
          const Discord3 = require("discord.js");   
          const Embed3 = new Discord3.MessageEmbed();
             Embed3.setDescription("[Oral Communication](https://teams.microsoft.com/l/meetup-join/19%3a8f8ccbf106df49d890d4bb6dd8907c1f%40thread.tacv2/1599842424032?context=%7b%22Tid%22%3a%2269587499-a807-43e6-b603-680dc411b8b1%22%2c%22Oid%22%3a%22309f5cec-8987-4ec5-b000-a9446bd7310e%22%7d) 8:30-9:00 \n [Philosophy of Human](https://teams.microsoft.com/l/team/19%3a89f50d9f30fd487b92b788e5c0ad54a5%40thread.tacv2/conversations?groupId=19ccac2c-d43c-4138-9cda-4fd2ad27b516&tenantId=69587499-a807-43e6-b603-680dc411b8b1)12:00-12:30 \n Click the subject to join");
           message.channel.send (
              Embed3);
          break;
        case 5:
           message.channel.send (
              'You have no classes for today.');
          break;
      }
  }
}