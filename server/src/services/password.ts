// scrypt for password hashing
// randomBytes to generate a unique salt for encryption
import { scrypt, randomBytes } from "crypto";
// promisify to change scrypt from callback based to promises
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

export class Password {
  // using static methods to avoid having to create new instances of the password class
  static async toHash(password: string) {
    const salt = randomBytes(8).toString("hex");

    // scrypt returns a buffer of data, declared as Buffer to make TS happy
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buf.toString("hex")}.${salt}`;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split(".");
    const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

    return buf.toString("hex") === hashedPassword;
  }
}
