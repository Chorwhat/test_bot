const { SlashCommandBuilder } = require('@discordjs/builders')


let poopiesTaken = 1
module.exports = {
    data: new SlashCommandBuilder()
    .setName('poop')
    .setDescription('Replies with "Poopie!"')
    ,
    async execute(interaction){
        const user = interaction.user.username;
        await interaction.reply('FAT POOPIE NO#: ' + poopiesTaken);
        console.log(user);
        poopiesTaken++
    }
}
