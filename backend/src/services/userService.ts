import prisma from '../libs/prisma';

export class UserService {
  async getAllUsers() {
    return await prisma.user.findMany();
  }

  async getUserById(id: number) {
    return await prisma.user.findUnique({ where: { id } });
  }

  async createUser(data: { name: string; accountId: string }) {
    if (!data.accountId) throw new Error('Account Id is required');

    return await prisma.user.create({
      data: {
        name: data.name,
        account: { connect: { id: data.accountId } },
      },
    });
  }

  async updateUser(id: number, data: { name: string }) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: number) {
    return await prisma.user.delete({
      where: { id },
    });
  }
}
