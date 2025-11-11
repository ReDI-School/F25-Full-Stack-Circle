import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  const account = await prisma.account.create({
    data: {
      name: 'ReDiFlix',
    },
  });
  // Create 1 test user
  const testUser = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
      password: 'password123',
      account: { connect: { id: account.id } },
    },
  });

  console.log('Account Created: ', testUser);
  console.log('✅ Test user created:', testUser);
  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
