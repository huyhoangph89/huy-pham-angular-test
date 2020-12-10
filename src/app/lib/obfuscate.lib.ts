export function deobfuscate(obfuscatedInput: string) {
    return JSON.parse(atob(decodeURIComponent(obfuscatedInput)));
}

export function obfuscate(anObject): string {
    return encodeURIComponent(btoa(JSON.stringify(anObject)));
}
