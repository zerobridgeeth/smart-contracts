import * as config from '@zerobridge-xyz/configuration';
import fs from 'fs';
import ethers from 'ethers';

interface OverridesMap {
  [key: string]: ethers.Overrides;
}

export function getConfig(): config.NomadConfig {
    return getFromArgv(0) as any as config.NomadConfig;
}

export function getOverrides(): OverridesMap {
    return getFromArgv(1) as any as OverridesMap;
}

function getFromArgv(argIndex: number) {
    // get path from process.argv at argIndex
    const args = process.argv.slice(2);
    const path = args[argIndex];
    return getFromPath(path);
}

function getFromPath(path: string) {
    try {
        // try loading as a local filepath
        return JSON.parse(fs.readFileSync(path).toString());
    } catch (e) {
        // TODO: try loading as a URL, catch failures
        throw e;
    }
}
