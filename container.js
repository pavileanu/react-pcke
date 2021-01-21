#!/usr/bin/env node
'use strict';

const { spawn } = require('child_process');

const APP_NAME = 'ui-template';
const PORT = 7072;

async function startProcess(name, args) {
    return new Promise((resolve, reject) => {
        const p = spawn(name, args);
        p.stdout.on('data', data => {
            console.log(`${data}`);
        });
        p.stderr.on('data', data => {
            console.log(`${data}`);
        });
        p.on('error', (error) => {
            reject(error);
        });
        p.on('close', code => {
            if (code === 0) {
                resolve(0);
            }
            else {
                reject(code);
            }
        });
    });
}

(async function () {
    try {
        await startProcess('docker', ['build', '-t', `${APP_NAME}`, '.']);
        try {
            await startProcess('docker', ['rm', '-f', `${APP_NAME}`]);
        } catch {
        }
        await startProcess('docker', ['run', '--name', `${APP_NAME}`, '-d', '--env-file', 'dev.env',  '-p', `${PORT}:8085`, `${APP_NAME}:latest`]);
        console.log(`container started on port ${PORT}`);
    } catch (error) {
        console.error(`container failed to start with error :  ${error}`);
        process.exit(1);
    }
})();