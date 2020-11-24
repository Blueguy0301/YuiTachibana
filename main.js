const Discord = require ('discord.js');
const client  = new Discord.Client();
const prefix = '111 ';

const fs = require('fs');
const advance01 = require('./commands/CCTECh AD');

client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync(
    './commands/').filter(file => file.endsWith('.js' ));
    for(const file of commandsFiles){
        const command = require(`./commands/${file}`);

        client.commands.set(command.name, command);
    } 

client.once('ready', ()=> {
    console.log('BOT IS ALIVE');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) ||message.author.bot) return;
 const args = message.content.slice(prefix.length).split(" ");
 const command = args.shift().toLowerCase();
 if(command === 'test'){
        message.channel.send('testosterone');
        }else if   (command === 'assignments'){  
         client.commands.get('assignments').execute(message, args);
        }else if   (command === 'help'){
        client.commands.get('help').execute(message, args); 
        }else if   (command === 'assignment'){
            client.commands.get('assignments').execute(message, args); 
        }else if   (command === 'cctech'){
             if (!args.length){
              message.channel.send('fomrat: 111 (strand and batch) today, tomorrow');
                 } else if (args[0] === 'tommorow'){
                 client.commands.get('advance01').execute(message, args); 
                 } else if (args[0] === 'today'){
                    client.commands.get('Schedule03').execute(message, args);
                }  else if (args[0] === 'tomorrow'){
                    client.commands.get('advance01').execute(message,args)
                };
        }else if   (command === 'itmawd01'){
              if (!args.length){
                 message.channel.send('format: 111 (strand and batch) today, tommorow');
                 } else if (args[0] === 'today'){ 
                 client.commands.get('Schedule01').execute(message, args)
                 } else if (args[0] === 'tommorow'){
                 client.commands.get('advance02').execute(message, args);
                 }  else if (args[0] === 'tomorrow'){
                 client.commands.get('advance02').execute(message,args);
                 };
        
        }else if   (command === 'itmawd02'){
            if(!args.length){
                message.channel.send('format:111 (strand and batch) today, tommorow');
            } else if (args[0] === 'today'){
            client.commands.get('Schedule02').execute(message, args);
            } else if (args[0] ===   'tommorow'){
            client.commands.get('advance03').execute(message, args);
            }else if (args[0] === 'tomorrow'){
                client.commands.get('advance03').execute(message,args)
            };
        } else if  (command ==='itmawd'){message.channel.send('format: 111 (strand and batch) today, tommorrow')
        }; 
});


client.login(process.env.token)