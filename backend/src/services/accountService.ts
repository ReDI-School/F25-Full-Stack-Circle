import prisma from '../libs/prisma';
import { comparePassword, hashPassword } from '../utils/password';

export class AccountService {
  async createAccount(data: { email: string; password: string }) {
    const hashedPassword = await hashPassword(data.password);

    return await prisma.account.create({
      data: {
        email: data.email.trim().toLowerCase(),
        password: hashedPassword,
      },
    });
  }

  async findByEmail(email: string) {
    return await prisma.account.findUnique({
      where: { email: email.trim().toLowerCase() },
    });
  }

  async findById(id: string) {
    return await prisma.account.findUnique({
      where: { id },
    });
  }

  async verifyPassword(accountId: string, password: string) {
    const account = await this.findById(accountId);
    if (!account) return false;

    return await comparePassword(password, account.password);
  }
}
