export default 
{
<<<<<<< HEAD
    "minecraft_version": "1.20.4", // supports up to 1.21.1
    "host": "localhost", // or "localhost", "your.ip.address.here"
    "port": 55916,
=======
    "minecraft_version": "1.15.2", // supports up to 1.20.4

    "host": "localhost", // or "localhost", "your.ip.address.here"

    "port": 51329,

>>>>>>> 92ebf082333cd114144bb0af9c86898701566025
    "auth": "offline", // or "microsoft"

    // the mindserver manages all agents and hosts the UI
    "host_mindserver": true, // if true, the mindserver will be hosted on this machine. otherwise, specify a public IP address
    "mindserver_host": "localhost",
    "mindserver_port": 8080,
    
    "profiles": [
        "./andy.json",
        // "./profiles/gpt.json",
        // "./profiles/claude.json",
        // "./profiles/gemini.json",
        // "./profiles/llama.json",
        // "./profiles/qwen.json",
        // "./profiles/mistral.json",
        // "./profiles/grok.json",
        // "./profiles/mistral.json",
        // "./profiles/deepseek.json",

        // using more than 1 profile requires you to /msg each bot indivually
    ],

    "load_memory": false, // load memory from previous session
    "init_message": "Respond with hello world and your name", // sends to all on spawn
    "only_chat_with": [], // users that the bots listen to and send general messages to. if empty it will chat publicly
    
    "language": "en", // translate to/from this language. Supports these language names: https://cloud.google.com/translate/docs/languages
    "show_bot_views": false, // show bot's view in browser at localhost:3000, 3001...

    "allow_insecure_coding": false, // allows newAction command and model can write/run code on your computer. enable at own risk
<<<<<<< HEAD
    "code_timeout_mins": -1, // minutes code is allowed to run. -1 for no timeout
=======

    "code_timeout_mins": 10, // minutes code is allowed to run. -1 for no timeout
>>>>>>> 92ebf082333cd114144bb0af9c86898701566025

    "max_messages": 15, // max number of messages to keep in context
    "num_examples": 2, // number of examples to give to the model
    "max_commands": -1, // max number of commands that can be used in consecutive responses. -1 for no limit
    "verbose_commands": true, // show full command syntax
    "narrate_behavior": true, // chat simple automatic actions ('Picking up item!')
    "chat_bot_messages": true, // publicly chat messages to other bots
}
