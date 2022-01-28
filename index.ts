import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Bot is ready!')


    const guildId = '517175170167734303'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'Replies with pong.',
    })
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }

    const {commandName, options} = interaction

    if(commandName === 'ping') {
        interaction.reply({
            content: 'pong',
            ephemeral: true,
        })
    }
})


client.on('messageCreate', (message) => {
    if(message.content === '!curry') {
        message.channel.send({
            content: 'GL hope curry doesnt die as much on prog as he does in farm. while he critiques everyone else.',
        })
    }
})

client.on('messageCreate', (message) => {
    if(message.content === '!meowki') {
        message.channel.send({
            content: 'Meowki dies more than me.',
        })
    }
})

client.on('messageCreate', (message) => {
    if(message.content === '!oblitz') {
        message.channel.send({
            content: 'I never die on this boss, look at my logs :)',
        })
    }
})

client.on('messageCreate', (message) => {
    if(message.content === '!phu') {
        message.channel.send({
            content: 'what is being 31 and living in your brothers basement while living off his coattales in game and IRL?',
        })
    }
})

client.on('messageCreate', (message) => {
    if(message.content === '!dabnel') {
        message.channel.send({
            content: 'Painsmith Kills - 21 | Veinrippers - 0',
        })
    }
})

client.on('messageCreate', (message) => {
    if(message.content === '!healerparse') {
        message.channel.send({
            content: 'Healing parses DONT matter. https://mechanicalpriest.com/why-healing-parses-dont-matter/',
        })
    }
})

client.on('messageCreate', (message) => {
    if(message.content === '!lootsheet') {
        message.channel.send({
            content: 'https://docs.google.com/spreadsheets/d/1B3XSfaWPyhgDKtuFEo4gORBVU4qj9h6zCNAk0iFmTy0/edit#gid=0',
        })
    }
})

client.on('messageCreate', (message) => {
    if(message.content === '!young') {
        message.channel.send({
            content: '<:copium:878121538375811092>',
        })
    }
})

client.on('messageCreate', (message) => {
    if(message.content === '!nerf') {
        message.channel.send({
            content: 'https://pbs.twimg.com/media/FKHtSpgVQAUz1t_?format=jpg&name=900x900',
        })
    }
})

client.on('messageCreate', (message) => {
    if(message.content === '!deliver') {
        message.channel.send({
            content: 'https://cdn.discordapp.com/attachments/798810105151750144/936337238378303538/f0JpYEn.png',
        })
    }
})

client.on('messageCreate', (message) => {
    if(message.content === '!tinys') {
        message.channel.send({
            content: 'https://cdn.discordapp.com/attachments/177569917724262400/936378505917259848/unknown.png',
        })
    }
})

client.login(process.env.TOKEN)