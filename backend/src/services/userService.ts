import prisma from '../libs/prisma';
import { hashPassword } from '../utils/password';

export class UserService {
  async getAllUsers() {
    return await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        accountId: true,
        // Exclude password from response
      },
    });
  }

  async getUserById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        accountId: true,
        // Exclude password from response
      },
    });
  }

  async createUser(data: { email: string; name?: string; password: string; accountId: string }) {
    if (!data.accountId) throw new Error('Account Id is required');

    // Hash password before storing
    const hashedPassword = await hashPassword(data.password);

    return await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashedPassword,
        account: { connect: { id: data.accountId } },
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        accountId: true,
        // Exclude password from response
      },
    });
  }

  async updateUser(id: number, data: { email?: string; name?: string }) {
    return await prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        accountId: true,
        // Exclude password from response
      },
    });
  }

  async deleteUser(id: number) {
    return await prisma.user.delete({
      where: { id },
    });
  }
}
