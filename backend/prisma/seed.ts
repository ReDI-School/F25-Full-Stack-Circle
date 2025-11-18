import { AgeRestriction } from '@prisma/client';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create 1 test user
  const testUser = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
    },
  });

  console.log('✅ Test user created:', testUser);

  // Create test categories
  await prisma.category.deleteMany();
  const categoryData = [
    {
      name: 'Cat1',
      age_restriction: AgeRestriction.G,
    },
    {
      name: 'Cat2',
      age_restriction: AgeRestriction.NC17,
    },
  ];

  const testCategory = await prisma.category.createMany({ data: categoryData });
  console.log('✅ Test categories created:', testCategory);

  // Create test videos
  await prisma.video.deleteMany();
  const videoData = [
    {
      name: 'Video1',
      duration: 300,
      url: 'http',
    },
    {
      name: 'Video2',
      duration: 250,
      url: 'http',
    },
  ];

  const testVideo = await prisma.video.createMany({ data: videoData });
  console.log('✅ Test videos created:', testVideo);

  // Create test seasons
  await prisma.season.deleteMany();
  const seasonData = [
    {
      number: 1,
      thumbnail: 'thumbnail1',
    },
    {
      number: 2,
      thumbnail: 'thumbnail2',
    },
  ];

  const testSeason = await prisma.season.createMany({ data: seasonData });
  console.log('✅ Test seasons created:', testSeason);

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
