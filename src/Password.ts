import bcrypt from 'bcrypt';

export default class Password {
    public async isEqualHashes(password: string, workerPassword: string): Promise<boolean> {
        return bcrypt.compare(password, workerPassword);
    }

    public async hashPassword(password: string, saltLength: number): Promise<string> {
        return bcrypt.hash(password, saltLength);
    }
}