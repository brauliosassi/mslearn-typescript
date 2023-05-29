namespace AllGreetings {

    export namespace Greetings {
        export function returnGreeting (greeting: string) {
            console.log(`The message from namespace Greetings is ${greeting}.`)
        }
}   
    export namespace GreetingsWithLength{
        export function returnGreeting(greeting: string) {
         let greetingLenth  = getLength(greeting);
         console.log(`The message from namespace GreetingWithLEngth is ${greeting}. It is ${greetingLenth} characters long.`) ;
            
        
        }
        function getLength(message: string): number {
            return message.length
        }
    }
}

//returnGreeting('Hello');
AllGreetings.Greetings.returnGreeting('Bonjour');
AllGreetings.GreetingsWithLength.returnGreeting('Hola');

import greet = AllGreetings.Greetings;
greet.returnGreeting('Bonjour');