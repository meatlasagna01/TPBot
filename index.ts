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


    const guildId = '930588546371317770'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'Replies with ping.',
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
        message.reply({
            content: 'GL hope curry doesnt die as much on prog as he does in farm. while he critiques everyone else.',
        })
    }
})

client.on('messageCreate', (message) => {
    if(message.content === '!meowki') {
        message.reply({
            content: 'Meowki dies more than me.',
        })
    }
})

client.login(process.env.TOKEN)