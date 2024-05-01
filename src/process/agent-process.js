import { writeFileSync, existsSync, mkdirSync } from 'fs';

import { spawn } from 'child_process';

export class AgentProcess {
    start(profile, load_memory=false, init_message=null, respawns=0) {
        let args = ['src/process/init-agent.js', this.name];
        args.push('-p', profile);
        if (load_memory)
            args.push('-l', load_memory);
        if (init_message)
            args.push('-m', init_message);
        if (respawns)
            args.push('-r', respawns);

        let profile_dirs = profile.split('/');
        let name = profile_dirs[profile_dirs.length - 1].split('.')[0];
        if (!existsSync(`./bots/${name}`))
            mkdirSync(`./bots/${name}`, { recursive: true });
        if (!existsSync(`./bots/${name}/logs.txt`))
            writeFileSync(`./bots/${name}/logs.txt`, '', );
        if (!existsSync(`./bots/${name}/stats.txt`))
            writeFileSync(`./bots/${name}/stats.txt`, '');
        if (!existsSync(`./bots/${name}/reset.txt`))
            writeFileSync(`./bots/${name}/reset.txt`, '');

        const agentProcess = spawn('node', args, {
            stdio: 'inherit',
            stderr: 'inherit',
        });
        
        let last_restart = Date.now();
        agentProcess.on('exit', (code, signal) => {
            console.log(`Agent process exited with code ${code} and signal ${signal}`);
            
            if (code !== 0) {
                // agent must run for at least 10 seconds before restarting
                if (Date.now() - last_restart < 10000) {
                    console.error('Agent process exited too quickly. Killing entire process. Goodbye.');
                    process.exit(1);
                }
                console.log('Restarting agent...');
                this.start(profile, true, 'Agent process restarted. Notify the user and decide what to do.', respawns + 1);
                last_restart = Date.now();
            }
        });
    
        agentProcess.on('error', (err) => {
            console.error('Failed to start agent process:', err);
        });

        setInterval(() => {if (respawns > 0) respawns--}, 60000);
    }
}