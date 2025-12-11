import { $Enums, PrismaClient } from '@prisma/client';

import { hashPassword } from '../src/utils/password';
import { seedData } from './seedData';
import { PopulateDataService } from 'src/services/populateDataService';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Clean existing data (keep accounts/users)
  console.log('🧹 Clearing existing data...');
  await prisma.userReaction.deleteMany();
  await prisma.video.deleteMany();
  await prisma.season.deleteMany();
  await prisma.title.deleteMany();
  await prisma.category.deleteMany();
  console.log('✅ Existing data cleared');

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

  // Populate Category, Title, Season and Video

  const populateDataService = new PopulateDataService();

  const titles: {
    name: string;
    type: $Enums.VideoType;
    cast: string[];
    genre: $Enums.Genre[];
    synopsis: string | null;
    createdAt: Date;
    updatedAt: Date;
    id: number;
  }[] = [];

  for (const t of seedData.title) {
    const { maturity, ...rest } = t;

    const createdTitle = await populateDataService.createTitle({
      ...rest,
      category: {
        connectOrCreate: [
          {
            where: { age_restriction: maturity },
            create: {
              name: maturity,
              age_restriction: maturity,
            },
          },
        ],
      },
    });

    titles.push(createdTitle);
  }
  console.log('✅ Titles created:', titles);

  const seasons: Array<
    {
      title: {
        id: number;
        name: string;
        type: $Enums.VideoType;
        createdAt: Date;
        updatedAt: Date;
      } | null;
    } & {
      number: number;
      id: number;
      createdAt: Date;
      updatedAt: Date;
      thumbnail: string;
      title_id: number | null;
    }
  > = [];

  for (const s of seedData.season) {
    const parentTitle = titles.find((t) => t.name === s.title && t.type === 'SERIES');

    const createdSeason = await populateDataService.createSeason({
      number: s.number,
      thumbnail: s.thumbnail,
      title: parentTitle ? { connect: { id: parentTitle.id } } : undefined,
    });

    seasons.push(createdSeason);
  }
  console.log('✅ Seasons created:', seasons);

  const videos: {
    id: number;
    name: string | null;
    createdAt: Date;
    updatedAt: Date;
    image: string | null;
    duration: number;
    url: string;
    episode_number: number | null;
    movie_title_id: number | null;
    season_id: number | null;
  }[] = [];

  for (const v of seedData.video) {
    // const parentTitle = titles.find((t) => t.name === v.title);
    // const parentSeason =
    //   v.episode_number != null
    //     ? seasons.find(
    //         (s) =>
    //           seedData.season.find(
    //             (orig) => orig.title === v.title && orig.number === v.season_number
    //           ) && s.number === v.season_number
    //       )
    //     : null;

    // const createVideo = await prisma.video.create({
    //   data: {
    //     duration: v.duration,
    //     image: v.image,
    //     url: v.url,
    //     episode_number: v.episode_number,
    //     name:
    //       v.episode_number != null
    //         ? `${v.title}: S${v.season_number} Ep${v.episode_number}`
    //         : v.title,
    //     season:
    //       v.episode_number != null && parentSeason
    //         ? { connect: { id: parentSeason.id } }
    //         : undefined,
    //     title:
    //       v.episode_number == null && parentTitle ? { connect: { id: parentTitle.id } } : undefined,
    //   },
    // });

    const createVideo = await prisma.video.create({
      data: {
        duration: v.duration,
        image: v.image,
        url: v.url,
        episode_number: v.episode_number,
        name:
          v.episode_number != null
            ? `${v.title}: S${v.season_number} Ep${v.episode_number}`
            : v.title,
        season:
          v.episode_number != null
            ? {
                connect: {
                  id: seasons.find((s) => {
                    return s.title?.name === v.title && s.number === v.season_number;
                  })?.id,
                },
              }
            : undefined,
        title:
          v.episode_number == null
            ? {
                connect: {
                  id: titles.find((t) => t.name === v.title)?.id,
                },
              }
            : undefined,
      },
    });
    videos.push(createVideo);
  }
  console.log('✅ Videos created:', videos);
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
