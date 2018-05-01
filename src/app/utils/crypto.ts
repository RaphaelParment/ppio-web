import * as CryptoJS from 'crypto-js';

export class Crypto {

    key = CryptoJS.enc.Utf8.parse('7061737323313233');
    iv = CryptoJS.enc.Utf8.parse('7061737323313233');

    constructor() {}

    crypt(data: string): string {

        const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), this.key,
            {
                keySize: 128 / 8,
                iv: this.iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        return encrypted.toString();
    }
    decrypt(encrypted) {
        const decrypted = CryptoJS.AES.decrypt(encrypted, this.key, {
            keySize: 128 / 8,
            iv: this.iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

}


