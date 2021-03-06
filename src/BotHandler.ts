/*
    Handle all the commands from the input and return them with correct commands 
*/

import { UserHandler } from "./UserHandler";

export abstract class BotHandler{
    private static dictionary: Map<string, number> = new Map([["help", 1],
                                                                ["users", 2],
                                                                ["leave", 3],
                                                                ["commands", 4]]);
                                                                

    public static getResponse(input: string): string {
        input = input.toLowerCase();
        const option: number | undefined = BotHandler.dictionary.get(input);

        if (option == undefined) {
            return "Invalid command";
        }

        //placement holders till I interate API
        let result: string = "";
        switch (option) {
            case 1:
                result = "Try using commands to list all possible commands";
                break;
            case 2:
                result = "Number of players online: " + UserHandler.getNumberOfUsersOnline();
                break;
            case 3:
                result = "You can leave by closing the window";
                break;
            case 4:
                let hold:string = "";
                this.dictionary.forEach((val:number, key:string) => {
                    hold += key + "; ";
                });
                result = "Commands are: " + hold;
                break;
        }
        return result;  
    }
}