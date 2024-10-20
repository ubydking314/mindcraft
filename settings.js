export default 
{
    "minecraft_version": "1.15.2", // supports up to 1.20.4
    "host": "localhost", // or "localhost", "your.ip.address.here"
<<<<<<< HEAD
    "port": 56863,
=======
    "port": 55064,
>>>>>>> 5c986cc32eab6c24a64e6c56c2d9798447138493
    "auth": "offline", // or "microsoft"
    
    "profiles": [
        "./andy.json",
        
        // add more profiles here, check ./profiles/ for more
        // more than 1 profile will require you to /msg each bot indivually
    ],
    "load_memory": false, // load memory from previous session
    "init_message": "Say hello world and your name", // sends to all on spawn

<<<<<<< HEAD
    "language": "en", // translate to/from this language. Supports these language names: https://cloud.google.com/translate/docs/languages
    "show_bot_views": false, // show bot's view in browser at localhost:3000, 3001...

    "allow_insecure_coding": false, // allows newAction command and model can write/run code on your computer. enable at own risk
=======
    "allow_insecure_coding": true, // allows newAction command and model can write/run code on your computer. enable at own risk
>>>>>>> 5c986cc32eab6c24a64e6c56c2d9798447138493
    "code_timeout_mins": 10, // minutes code is allowed to run. -1 for no timeout

    "max_messages": 15, // max number of messages to keep in context
    "max_commands": -1, // max number of commands to use in a response. -1 for no limit
    "verbose_commands": true, // show full command syntax
    "narrate_behavior": true, // chat simple automatic actions ('Picking up item!')
}

