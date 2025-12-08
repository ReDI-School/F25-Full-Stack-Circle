import { PrismaClient } from '@prisma/client';

import { hashPassword } from '../src/utils/password';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create or get test account
  const hashedPassword = await hashPassword('password123');
  const account = await prisma.account.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      password: hashedPassword,
    },
  });

  console.log('✅ Account created:', account);

  // Create test user if it doesn't exist
  const existingUser = await prisma.user.findFirst({
    where: {
      accountId: account.id,
      name: 'Test User',
    },
  });

  let testUser;
  if (!existingUser) {
    testUser = await prisma.user.create({
      data: {
        name: 'Test User',
        account: { connect: { id: account.id } },
      },
    });
    console.log('✅ Test user created:', testUser);
  } else {
    testUser = existingUser;
    console.log('✅ Test user already exists:', testUser);
  }

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
