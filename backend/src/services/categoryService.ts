import prisma from '../libs/prisma';

export class CategoryService {
  async getAllCategories() {
    return await prisma.category.findMany({
      include: { title: true },
    });
  }

  async getCategoryById(id: number) {
    return await prisma.category.findUnique({
      where: { id },
      include: { title: true },
    });
  }

  // Category relates to Title, and has the fields: id, name, age_restriction, title_id, and timestamps.
  async createCategory(data: { name: string; 
    age_restriction: 'TVY' | 'TVY7' | 'G' | 'TVG' | 'PG' | 'TVPG' | 'PG13' | 'TV14' | 'R' | 'TVMA' | 'NC17'; 
    title_id: number;
    }) {
    return await prisma.category.create({
      data,
    });
  }

  async updateCategory(id: number, data: { name?: string; age_restriction?: 'TVY' | 'TVY7' | 'G' | 'TVG' | 'PG' | 'TVPG' | 'PG13' | 'TV14' | 'R' | 'TVMA' | 'NC17'; }) {
    return await prisma.category.update({
      where: { id },
      data,
    });
  }

  async deleteCategory(id: number) {
    return await prisma.category.delete({
      where: { id },
    });
  }
}
