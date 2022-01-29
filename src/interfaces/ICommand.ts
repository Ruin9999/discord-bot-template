import { ApplicationCommandOptionData } from "discord.js";

export default interface ICommand {
    name : string;
    alias: string;
    description : string;
    arguments?: Array<ApplicationCommandOptionData>;
    usage : string;
    ephemeral : boolean;
    isSlash : boolean;
    userPermissions : string[];
    botPermissions : string[];
    run: Function;
    callback: Function;
} 