import type { MovieCardData, ShowDetailsDialogProps } from '../components';

const BASE_URL = import.meta.env.VITE_APP_URL || `https://${import.meta.env.VITE_VERCEL_URL}`;

const VideoType = {
  MOVIE: 'MOVIE',
  SERIES: 'SERIES',
} as const;

type VideoType = (typeof VideoType)[keyof typeof VideoType];

export type MockData = MovieCardData & {
  isInPrivateList?: boolean;
  isNew?: boolean;
  isTrending?: boolean;
  type: VideoType;
  details?: Pick<ShowDetailsDialogProps, 'title' | 'description' | 'episodes' | 'videoUrl'> & {
    rating?: string;
    releaseYear?: number;
    duration?: string | number;
    genre?: string[];
    cast?: string[];
  };
};

export const mockData: MockData[] = [
  {
    id: 1,
    title: 'Space Force',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show1.png`,
    isInPrivateList: true,
    isNew: true,
    type: VideoType.SERIES,
    details: {
      title: 'Space Force',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'A decorated pilot with dreams of running the Air Force is thrown together with an eccentric scientist in a new branch of the armed services: Space Force.',
      rating: 'TV-MA',
      releaseYear: 2020,
      duration: '2 Seasons',
      genre: ['Comedy', 'Workplace'],
      cast: ['Steve Carell', 'John Malkovich', 'Ben Schwartz'],
      episodes: [
        {
          id: 1,
          title: 'Space Force',
          duration: 1800000,
          description:
            'General Mark Naird is assigned to lead the newly formed sixth branch of the US Armed Forces: Space Force.',
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show1.png`,
        },
        {
          id: 2,
          title: 'SAVE EPSILON 6!',
          duration: 1860000,
          description:
            'With his beloved satellite severely hobbled, General Naird must decide between a well-reasoned scientific solution and a chimp-led rescue operation.',
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show1.png`,
        },
        {
          id: 3,
          title: 'Mark and Mallory Go to Washington',
          duration: 2040000,
          description:
            'While General Naird and Dr. Mallory brace themselves for a contentious hearing on Capitol Hill, Erin gets to know Captain Ali.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show1.png`,
        },
        {
          id: 4,
          title: 'Lunar Habitat',
          duration: 1680000,
          description:
            'With the launch just days away, General Naird copes with an unprepared crew. Captain Ali searches for the perfect words, and Erin visits her mom.',
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show1.png`,
        },
      ],
    },
  },
  {
    id: 2,
    title: 'The Vince Staples Show',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show2.png`,
    isInPrivateList: true,
    isNew: true,
    type: VideoType.SERIES,
    details: {
      title: 'The Vince Staples Show',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'Kind of famous. Sort of rich. Always real. Follow Vince Staples through his comedic, chaotic, and surreal daily life as he navigates fame, family, and his hometown of Long Beach.',
      rating: 'TV-MA',
      releaseYear: 2024,
      duration: '1 Season',
      genre: ['Comedy', 'Drama', 'Music'],
      cast: ['Vince Staples', 'Andrea Ellsworth', 'Vanessa Bell Calloway'],
      episodes: [
        {
          id: 1,
          title: 'Black Business',
          duration: 1680000,
          description:
            'Vince gets caught up in a sticky situation when he tries to help out an old friend.',
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show2.png`,
        },
        {
          id: 2,
          title: 'Felt Tip',
          duration: 1560000,
          description:
            "Vince's quest for a new tattoo artist leads him on an unexpected journey through Long Beach.",
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show2.png`,
        },
        {
          id: 3,
          title: 'Little Chameleon',
          duration: 1620000,
          description:
            'When Vince babysits his nephew, he learns parenting is harder than it looks.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show2.png`,
        },
        {
          id: 4,
          title: 'Infomercial',
          duration: 1500000,
          description:
            'Vince becomes the face of a local infomercial, but the gig comes with complications.',
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show2.png`,
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Suits',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show3.png`,
    isInPrivateList: true,
    isNew: true,
    type: VideoType.SERIES,
    details: {
      title: 'Suits',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "On the run from a drug deal gone bad, brilliant college dropout Mike Ross finds himself working with Harvey Specter, one of New York City's best lawyers.",
      rating: 'TV-14',
      releaseYear: 2011,
      duration: '9 Seasons',
      genre: ['Legal Drama', 'Comedy Drama'],
      cast: ['Gabriel Macht', 'Patrick J. Adams', 'Meghan Markle', 'Sarah Rafferty'],
      episodes: [
        {
          id: 1,
          title: 'Pilot',
          duration: 2640000,
          description:
            "Mike Ross, a brilliant college dropout, accidentally lands a job interview with one of New York City's best legal closers, Harvey Specter.",
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show3.png`,
        },
        {
          id: 2,
          title: 'Errors and Omissions',
          duration: 2580000,
          description:
            'Harvey must fire an employee, but when he does, she threatens to expose Mike.',
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show3.png`,
        },
        {
          id: 3,
          title: 'Inside Track',
          duration: 2520000,
          description:
            'Harvey takes Mike under his wing, but Mike soon learns that Harvey plays hardball.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show3.png`,
        },
        {
          id: 4,
          title: 'Dirty Little Secrets',
          duration: 2580000,
          description:
            'Harvey and Mike take on a case of a woman accused of insider trading, but Harvey thinks the real criminal is her husband.',
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show3.png`,
        },
      ],
    },
  },
  {
    id: 4,
    title: 'Extraordinary Attorney Woo',
    language: ['English', 'Korean'],
    thumbnail: `${BASE_URL}/images/show4.png`,
    isInPrivateList: true,
    type: VideoType.SERIES,
    details: {
      title: 'Extraordinary Attorney Woo',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'Brilliant attorney Woo Young-woo tackles challenges in the courtroom and beyond as a newbie at a top law firm and a woman on the autism spectrum.',
      rating: 'TV-14',
      releaseYear: 2022,
      duration: '1 Season',
      genre: ['Legal Drama', 'Comedy', 'Romance'],
      cast: ['Park Eun-bin', 'Kang Tae-oh', 'Kang Ki-young'],
      episodes: [
        {
          id: 1,
          title: 'Extraordinary Attorney Woo',
          duration: 4260000,
          description:
            'Woo Young-woo lands her first trial without much preparation — and must defend a man accused of breaking into a convenience store.',
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show4.png`,
        },
        {
          id: 2,
          title: 'The Strife of the Three Brothers',
          duration: 3960000,
          description:
            'Young-woo joins Choi Su-yeon in her mission to reunite a deceased man with his estranged family. Lee Jun-ho sees her dedication up close.',
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show4.png`,
        },
        {
          id: 3,
          title: 'WhALE',
          duration: 3780000,
          description:
            'While navigating a complex case involving a tank-fluid explosion at an aquarium, Young-woo experiences workplace bullying.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show4.png`,
        },
        {
          id: 4,
          title: 'The Strife of Fathers and Sons',
          duration: 3900000,
          description:
            "A man faces jail time for taking advantage of a real estate loophole. Young-woo's emotional distance from others starts to crumble.",
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show4.png`,
        },
      ],
    },
  },
  {
    id: 5,
    title: 'Headspace Guide to Sleep',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show5.png`,
    isInPrivateList: true,
    type: VideoType.SERIES,
    details: {
      title: 'Headspace Guide to Sleep',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "Explore sleep and the science behind it with this calming series. From dreams to disorders, discover how a good night's rest can transform your well-being.",
      rating: 'TV-G',
      releaseYear: 2021,
      duration: '1 Season',
      genre: ['Documentary', 'Wellness', 'Mindfulness'],
      cast: ['Eve Lewis Prieto'],
      episodes: [
        {
          id: 1,
          title: 'Sleep and the Brain',
          duration: 1140000,
          description:
            'Find out what happens in your brain and body during sleep, why we need it and how to improve your sleep quality.',
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show5.png`,
        },
        {
          id: 2,
          title: 'Sleep and Stress',
          duration: 1080000,
          description:
            'Stress is a common cause of sleep problems. Learn how stress affects your sleep and discover techniques to break the cycle.',
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show5.png`,
        },
        {
          id: 3,
          title: 'Insomnia',
          duration: 1200000,
          description:
            'Insomnia is the most common sleep disorder. Explore its causes, types and treatments, plus tips for managing sleepless nights.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show5.png`,
        },
        {
          id: 4,
          title: 'Dreams',
          duration: 1140000,
          description:
            'Dreams can be vivid, terrifying or just plain weird. Uncover what causes dreams and what they might mean.',
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show5.png`,
        },
      ],
    },
  },
  {
    id: 6,
    title: 'Apollo 13',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show6.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'Apollo 13',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "Technical troubles scuttle the Apollo 13 lunar mission in 1971, risking the lives of astronaut Jim Lovell and his crew in director Ron Howard's chronicle of this true-life story.",
      rating: 'PG',
      releaseYear: 1995,
      duration: 8400000, // 2h 20m in milliseconds
      genre: ['Drama', 'Historical', 'Adventure'],
      cast: ['Tom Hanks', 'Bill Paxton', 'Kevin Bacon', 'Gary Sinise', 'Ed Harris'],
    },
  },
  {
    id: 7,
    title: 'Oldboy',
    language: ['English', 'Korean'],
    thumbnail: `${BASE_URL}/images/show7.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'Oldboy',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'After being kidnapped and imprisoned for 15 years, Oh Dae-Su is released, only to find that he must find his captor in 5 days.',
      rating: 'R',
      releaseYear: 2003,
      duration: 7200000, // 2h 0m in milliseconds
      genre: ['Action', 'Mystery', 'Thriller'],
      cast: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jung'],
    },
  },
  {
    id: 8,
    title: 'Pacific Rim',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show8.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'Pacific Rim',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world.',
      rating: 'PG-13',
      releaseYear: 2013,
      duration: 7860000, // 2h 11m in milliseconds
      genre: ['Action', 'Sci-Fi', 'Adventure'],
      cast: ['Idris Elba', 'Charlie Hunnam', 'Rinko Kikuchi', 'Charlie Day'],
    },
  },
  {
    id: 9,
    title: 'Jurassic World: Camp Cretaceous',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show9.png`,
    isInPrivateList: false,
    type: VideoType.SERIES,
    details: {
      title: 'Jurassic World: Camp Cretaceous',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'Six teens attending an adventure camp on the opposite side of Isla Nublar must band together to survive when dinosaurs wreak havoc on the island.',
      rating: 'TV-PG',
      releaseYear: 2020,
      duration: '5 Seasons',
      genre: ['Animation', 'Adventure', 'Family'],
      cast: ['Paul-Mikél Williams', 'Sean Giambrone', 'Kausar Mohammed', 'Jenna Ortega'],
      episodes: [
        {
          id: 1,
          title: 'Camp Cretaceous',
          duration: 1440000,
          description:
            'Darius Bowman, a dinosaur fanatic, gets the chance of a lifetime when he wins a trip to Camp Cretaceous.',
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show9.png`,
        },
        {
          id: 2,
          title: 'Secrets',
          duration: 1380000,
          description:
            'With the rest of the campers, Darius bonds with Brooklynn and they learn more about the dinosaurs.',
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show9.png`,
        },
        {
          id: 3,
          title: 'The Cattle Drive',
          duration: 1500000,
          description:
            'Darius and Kenji clash, and the group gets caught between a stampede and some angry Sinoceratops.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show9.png`,
        },
        {
          id: 4,
          title: 'Things Fall Apart',
          duration: 1440000,
          description:
            'Darius sneaks off to visit a sick dinosaur. Meanwhile, the others explore the genetics lab, and find themselves in danger.',
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show9.png`,
        },
      ],
    },
  },
  {
    id: 10,
    title: 'Rurouni Kenshin: The Final',
    language: ['English', 'Japanese'],
    thumbnail: `${BASE_URL}/images/show10.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'Rurouni Kenshin: The Final',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "In 1879, Kenshin and his allies face their strongest enemy yet: his former brother-in-law Enishi Yukishiro and his minions, who've vowed their revenge.",
      rating: 'R',
      releaseYear: 2021,
      duration: 8280000, // 2h 18m in milliseconds
      genre: ['Action', 'Drama', 'Historical'],
      cast: ['Takeru Satoh', 'Emi Takei', 'Mackenyu', 'Munetaka Aoki'],
    },
  },
  {
    id: 11,
    title: 'Ready Player One',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show11.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'Ready Player One',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.',
      rating: 'PG-13',
      releaseYear: 2018,
      duration: 8400000, // 2h 20m in milliseconds
      genre: ['Sci-Fi', 'Action', 'Adventure'],
      cast: ['Tye Sheridan', 'Olivia Cooke', 'Ben Mendelsohn', 'Mark Rylance'],
    },
  },
  {
    id: 12,
    title: 'Teenage Mutant Ninja Turtles',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show12.png`,
    isInPrivateList: false,
    type: VideoType.SERIES,
    details: {
      title: 'Teenage Mutant Ninja Turtles',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'Four ninja turtles, mutated by a mysterious alien substance, must rise up out of the sewers and defend their city against evil forces from both the past and present.',
      rating: 'TV-Y7',
      releaseYear: 2012,
      duration: '5 Seasons',
      genre: ['Animation', 'Action', 'Comedy'],
      cast: ['Seth Green', 'Sean Astin', 'Rob Paulsen', 'Greg Cipes'],
      episodes: [
        {
          id: 1,
          title: 'Rise of the Turtles: Part 1',
          duration: 1380000,
          description:
            'Four teenage turtles discover their destiny as the Teenage Mutant Ninja Turtles.',
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show12.png`,
        },
        {
          id: 2,
          title: 'Rise of the Turtles: Part 2',
          duration: 1380000,
          description:
            'The Turtles spring into action to save their sensei when he is kidnapped by The Kraang.',
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show12.png`,
        },
        {
          id: 3,
          title: 'Turtle Temper',
          duration: 1380000,
          description:
            'Raphael must get his temper under control before his anger becomes a danger to himself and his brothers.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show12.png`,
        },
        {
          id: 4,
          title: 'New Friend, Old Enemy',
          duration: 1380000,
          description:
            "Michelangelo's new friend turns out to be a threat, putting the Turtles in danger.",
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show12.png`,
        },
      ],
    },
  },
  {
    id: 13,
    title: 'Shot Caller',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show13.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'Shot Caller',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'A newly released prisoner is forced by the leaders of his gang to orchestrate a major crime with a brutal rival gang on the streets of Southern California.',
      rating: 'R',
      releaseYear: 2017,
      duration: 7260000, // 2h 1m in milliseconds
      genre: ['Crime', 'Drama', 'Thriller'],
      cast: ['Nikolaj Coster-Waldau', 'Lake Bell', 'Jon Bernthal', 'Omari Hardwick'],
    },
  },
  {
    id: 14,
    title: 'Crouching Tiger, Hidden Dragon: Sword of Destiny',
    language: ['English', 'Mandarin'],
    thumbnail: `${BASE_URL}/images/show14.png`,
    isInPrivateList: false,
    isNew: true,
    type: VideoType.MOVIE,
    details: {
      title: 'Crouching Tiger, Hidden Dragon: Sword of Destiny',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'A story of lost love, young love, a legendary sword and one last opportunity at redemption, set against breathtaking action in an epic martial arts battle between good and evil.',
      rating: 'PG-13',
      releaseYear: 2016,
      duration: 5760000, // 1h 36m in milliseconds
      genre: ['Action', 'Adventure', 'Drama'],
      cast: ['Donnie Yen', 'Michelle Yeoh', 'Harry Shum Jr.', 'Jason Scott Lee'],
    },
  },
  {
    id: 15,
    title: 'Ready Player One',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show15.png`,
    isInPrivateList: false,
    isTrending: true,
    type: VideoType.MOVIE,
    details: {
      title: 'Ready Player One',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.',
      rating: 'PG-13',
      releaseYear: 2018,
      duration: 8400000, // 2h 20m in milliseconds
      genre: ['Sci-Fi', 'Action', 'Adventure'],
      cast: ['Tye Sheridan', 'Olivia Cooke', 'Ben Mendelsohn', 'Mark Rylance'],
    },
  },
  {
    id: 16,
    title: 'Captains of the World',
    language: ['English', 'Spanish', 'Portuguese'],
    thumbnail: `${BASE_URL}/images/show16.png`,
    isInPrivateList: false,
    type: VideoType.SERIES,
    details: {
      title: 'Captains of the World',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'From the locker room to the pitch, this docuseries offers exclusive access to all 32 teams as they fight for football glory at the 2022 FIFA World Cup.',
      rating: 'TV-MA',
      releaseYear: 2023,
      duration: '1 Season',
      genre: ['Documentary', 'Sports'],
      cast: ['Lionel Messi', 'Cristiano Ronaldo', 'Kylian Mbappé'],
      episodes: [
        {
          id: 1,
          title: 'Episode 1',
          duration: 3120000,
          description:
            "The tournament kicks off as teams and their captains prepare for the world's biggest stage.",
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show16.png`,
        },
        {
          id: 2,
          title: 'Episode 2',
          duration: 2940000,
          description:
            'The group stages heat up as underdogs challenge favorites and upsets shake the tournament.',
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show16.png`,
        },
        {
          id: 3,
          title: 'Episode 3',
          duration: 3060000,
          description:
            'As the knockout rounds begin, the pressure intensifies and captains must rally their teams.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show16.png`,
        },
        {
          id: 4,
          title: 'Episode 4',
          duration: 2880000,
          description:
            'The semifinals and finals showcase the best football as teams fight for eternal glory.',
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show16.png`,
        },
      ],
    },
  },
  {
    id: 17,
    title: 'Love on the Spectrum',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show17.png`,
    isInPrivateList: false,
    type: VideoType.SERIES,
    details: {
      title: 'Love on the Spectrum',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'Finding love can be hard for anyone. For young adults on the autism spectrum, exploring the unpredictable world of dating is even more complicated.',
      rating: 'TV-14',
      releaseYear: 2019,
      duration: '2 Seasons',
      genre: ['Documentary', 'Reality', 'Romance'],
      cast: ['Jodi Rodgers'],
      episodes: [
        {
          id: 1,
          title: 'Episode 1',
          duration: 3000000,
          description:
            'Five people on the autism spectrum navigate the world of dating with help from family, friends and relationship experts.',
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show17.png`,
        },
        {
          id: 2,
          title: 'Episode 2',
          duration: 2700000,
          description:
            'Michael and Kelvin explore online dating while others prepare for their first dates.',
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show17.png`,
        },
        {
          id: 3,
          title: 'Episode 3',
          duration: 2820000,
          description:
            'Some participants go on second dates while others learn valuable lessons about dating.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show17.png`,
        },
        {
          id: 4,
          title: 'Episode 4',
          duration: 2940000,
          description:
            "As the season progresses, participants reflect on their dating journeys and what they've learned.",
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show17.png`,
        },
      ],
    },
  },
  {
    id: 18,
    title: 'The Super Mario Bros. Movie',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show18.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'The Super Mario Bros. Movie',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "A Brooklyn plumber named Mario travels through the Mushroom Kingdom with a princess named Peach and an anthropomorphic mushroom named Toad to find Mario's brother, Luigi, and to save the world from a ruthless fire-breathing Koopa named Bowser.",
      rating: 'PG',
      releaseYear: 2023,
      duration: 5520000, // 1h 32m in milliseconds
      genre: ['Animation', 'Adventure', 'Comedy'],
      cast: ['Chris Pratt', 'Anya Taylor-Joy', 'Charlie Day', 'Jack Black'],
    },
  },
  {
    id: 19,
    title: 'Pluto',
    language: ['English', 'Japanese'],
    thumbnail: `${BASE_URL}/images/show19.png`,
    isInPrivateList: false,
    type: VideoType.SERIES,
    details: {
      title: 'Pluto',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "When the world's greatest robot police detective begins investigating the murders of famous robots and humans, he uncovers a larger conspiracy threatening the future of mankind.",
      rating: 'TV-MA',
      releaseYear: 2023,
      duration: '1 Season',
      genre: ['Anime', 'Sci-Fi', 'Mystery'],
      cast: ['Shinshu Fuji', 'Yoko Hikasa', 'Minori Suzuki'],
      episodes: [
        {
          id: 1,
          title: 'Episode 1',
          duration: 3900000,
          description:
            'Europol detective Gesicht investigates the destruction of a beloved Swiss robot, Montblanc.',
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show19.png`,
        },
        {
          id: 2,
          title: 'Episode 2',
          duration: 3480000,
          description:
            'As Gesicht continues his investigation, he discovers a pattern connecting the victims.',
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show19.png`,
        },
        {
          id: 3,
          title: 'Episode 3',
          duration: 3660000,
          description:
            "The investigation leads to North No. 2, one of the world's most powerful robots.",
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show19.png`,
        },
        {
          id: 4,
          title: 'Episode 4',
          duration: 3540000,
          description:
            'Gesicht encounters Atom, a boy robot, and learns more about the mysterious Pluto.',
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show19.png`,
        },
      ],
    },
  },
  {
    id: 20,
    title: 'The Blacklist',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show20.png`,
    isInPrivateList: false,
    type: VideoType.SERIES,
    details: {
      title: 'The Blacklist',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'A wanted fugitive mysteriously surrenders himself to the FBI and offers to help them capture deadly criminals. His sole condition is that he will work only with a rookie profiler.',
      rating: 'TV-14',
      releaseYear: 2013,
      duration: '10 Seasons',
      genre: ['Crime', 'Drama', 'Mystery'],
      cast: ['James Spader', 'Megan Boone', 'Diego Klattenhoff', 'Ryan Eggold'],
      episodes: [
        {
          id: 1,
          title: 'Pilot',
          duration: 2580000,
          description:
            'Ex-government agent and one of the FBI\'s Most Wanted fugitives, Raymond "Red" Reddington mysteriously turns himself in to the FBI and offers to give up everyone he has ever worked with.',
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show20.png`,
        },
        {
          id: 2,
          title: 'The Freelancer',
          duration: 2580000,
          description:
            'Red predicts an impending catastrophe rooted by the work of an assassin called "The Freelancer."',
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show20.png`,
        },
        {
          id: 3,
          title: 'Wujing',
          duration: 2580000,
          description:
            'Red and Liz go undercover as a married couple in order to stop an assassin targeting CIA operatives.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show20.png`,
        },
        {
          id: 4,
          title: 'The Stewmaker',
          duration: 2580000,
          description:
            'Red links a sophisticated serial killer to an international crime syndicate.',
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show20.png`,
        },
      ],
    },
  },
  {
    id: 21,
    title: 'The Super Mario Bros. Movie',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show21.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'The Super Mario Bros. Movie',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "A Brooklyn plumber named Mario travels through the Mushroom Kingdom with a princess named Peach and an anthropomorphic mushroom named Toad to find Mario's brother, Luigi, and to save the world from a ruthless fire-breathing Koopa named Bowser.",
      rating: 'PG',
      releaseYear: 2023,
      duration: 5520000, // 1h 32m in milliseconds
      genre: ['Animation', 'Adventure', 'Comedy'],
      cast: ['Chris Pratt', 'Anya Taylor-Joy', 'Charlie Day', 'Jack Black'],
    },
  },
  {
    id: 22,
    title: 'Lady Bird',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show22.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'Lady Bird',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California. She navigates the troubled waters of high school, relationships, and her complex bond with her strong-willed mother.',
      rating: 'R',
      releaseYear: 2017,
      duration: 5640000, // 1h 34m in milliseconds
      genre: ['Comedy', 'Drama', 'Coming-of-Age'],
      cast: ['Saoirse Ronan', 'Laurie Metcalf', 'Tracy Letts', 'Timothée Chalamet'],
    },
  },
  {
    id: 23,
    title: 'Kong: King of the Apes',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show23.png`,
    isInPrivateList: false,
    type: VideoType.SERIES,
    details: {
      title: 'Kong: King of the Apes',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "Set in 2050, Kong becomes a wanted fugitive after wrecking havoc at Alcatraz Island's Natural History and Marine Preserve. What most humans on the hunt for the formidable animal don't realize is that Kong was framed by an evil genius who plans to terrorize the world with an army of enormous robotic dinosaurs.",
      rating: 'TV-Y7',
      releaseYear: 2016,
      duration: '2 Seasons',
      genre: ['Animation', 'Action', 'Adventure'],
      cast: ['Alessandro Juliani', 'Shannon Chan-Kent', 'Vincent Tong'],
      episodes: [
        {
          id: 1,
          title: 'Kong on Ice',
          duration: 1380000,
          description:
            "When Kong is framed for a rampage in San Francisco, a young scientist and his team must prove Kong's innocence.",
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show23.png`,
        },
        {
          id: 2,
          title: 'Snake in the Grass',
          duration: 1380000,
          description:
            'The team discovers that robotic dinosaurs are terrorizing the city, and Kong is the only one who can stop them.',
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show23.png`,
        },
        {
          id: 3,
          title: 'Kong in 3D',
          duration: 1380000,
          description:
            'Kong and the team face off against a robotic pterodactyl in the skies above San Francisco.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show23.png`,
        },
        {
          id: 4,
          title: 'Little Bots of Horrors',
          duration: 1380000,
          description: 'The team discovers the evil mastermind behind the robotic dinosaurs.',
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show23.png`,
        },
      ],
    },
  },
  {
    id: 24,
    title: 'The Man from Nowhere',
    language: ['English', 'Korean'],
    thumbnail: `${BASE_URL}/images/show24.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'The Man from Nowhere',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'A quiet pawnshop keeper with a violent past takes on a drug-and-organ trafficking ring in hope of saving the child who is his only friend.',
      rating: 'R',
      releaseYear: 2010,
      duration: 7140000, // 1h 59m in milliseconds
      genre: ['Action', 'Thriller', 'Crime'],
      cast: ['Won Bin', 'Kim Sae-ron', 'Kim Tae-hoon', 'Kim Hee-won'],
    },
  },
  {
    id: 25,
    title: 'Resident Alien',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show25.png`,
    isInPrivateList: false,
    type: VideoType.SERIES,
    details: {
      title: 'Resident Alien',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "An alien crashes on Earth and must pass himself off as small-town human doctor Harry Vanderspeigle. Arriving with a secret mission to kill all humans, Harry starts off living a simple life—but things get a bit rocky when he's roped into solving a local murder and realizes he needs to assimilate into his new world.",
      rating: 'TV-14',
      releaseYear: 2021,
      duration: '3 Seasons',
      genre: ['Comedy', 'Mystery', 'Sci-Fi'],
      cast: ['Alan Tudyk', 'Sara Tomko', 'Corey Reynolds', 'Alice Wetterlund'],
      episodes: [
        {
          id: 1,
          title: 'Pilot',
          duration: 2700000,
          description:
            'An alien on a mission to kill all humans crashes in rural Colorado and assumes the identity of the town doctor.',
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show25.png`,
        },
        {
          id: 2,
          title: 'Homesick',
          duration: 2580000,
          description:
            'Harry investigates the death of the original town doctor while searching for his missing device.',
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show25.png`,
        },
        {
          id: 3,
          title: 'Secrets',
          duration: 2520000,
          description:
            'Harry accompanies the sheriff to a medical convention and begins to form human connections.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show25.png`,
        },
        {
          id: 4,
          title: 'Birds of a Feather',
          duration: 2640000,
          description:
            'Harry travels to a Native American reservation seeking help with his mission.',
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show25.png`,
        },
      ],
    },
  },
  {
    id: 26,
    title: 'Revenger',
    language: ['English', 'Korean'],
    thumbnail: `${BASE_URL}/images/show26.png`,
    isInPrivateList: false,
    type: VideoType.SERIES,
    details: {
      title: 'Revenger',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "Hell-bent on exacting revenge and proving he was framed for his sister's murder, Álex sets out to unearth much more than the crime's real culprit.",
      rating: 'TV-MA',
      releaseYear: 2023,
      duration: '1 Season',
      genre: ['Action', 'Thriller', 'Crime'],
      cast: ['Bruce Khan', 'Park Hee-soon', 'Yoon Jin-seo'],
      episodes: [
        {
          id: 1,
          title: 'Episode 1',
          duration: 3300000,
          description:
            'After being wrongfully convicted, a former detective breaks out of prison to prove his innocence.',
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show26.png`,
        },
        {
          id: 2,
          title: 'Episode 2',
          duration: 3120000,
          description:
            "The manhunt intensifies as the protagonist searches for clues about his sister's real killer.",
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show26.png`,
        },
        {
          id: 3,
          title: 'Episode 3',
          duration: 3240000,
          description: 'A confrontation with a corrupt cop reveals a deeper conspiracy.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show26.png`,
        },
        {
          id: 4,
          title: 'Episode 4',
          duration: 3180000,
          description:
            'As the truth comes to light, the protagonist must decide between revenge and justice.',
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show26.png`,
        },
      ],
    },
  },
  {
    id: 27,
    title: 'Legend of the Fist: The Return of Chen Zhen',
    language: ['English', 'Mandarin'],
    thumbnail: `${BASE_URL}/images/show27.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'Legend of the Fist: The Return of Chen Zhen',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'Seven years after the apparent death of Chen Zhen, a mysterious stranger arrives from overseas and befriends a local mafia boss. That man is a disguised Chen Zhen, who intends to infiltrate the mob when they form an alliance with the Japanese.',
      rating: 'R',
      releaseYear: 2010,
      duration: 6360000, // 1h 46m in milliseconds
      genre: ['Action', 'Drama', 'Historical'],
      cast: ['Donnie Yen', 'Shu Qi', 'Anthony Wong', 'Huang Bo'],
    },
  },
  {
    id: 28,
    title: "The Devil's Plan",
    language: ['English', 'Korean'],
    thumbnail: `${BASE_URL}/images/show28.png`,
    isInPrivateList: false,
    type: VideoType.SERIES,
    details: {
      title: "The Devil's Plan",
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "It's the ultimate showdown of wits, brains, strategy and alliances for a chance to win 500 million won. Contestants must outlast and outplay 12 brilliant competitors in this social survival game.",
      rating: 'TV-14',
      releaseYear: 2023,
      duration: '1 Season',
      genre: ['Reality', 'Game Show', 'Competition'],
      cast: ['Various Contestants'],
      episodes: [
        {
          id: 1,
          title: 'The First Pieces',
          duration: 4560000,
          description:
            '12 players arrive to compete in intense mind games and puzzles for a huge cash prize.',
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show28.png`,
        },
        {
          id: 2,
          title: 'The Second Pieces',
          duration: 4080000,
          description:
            'Alliances form and strategies shift as players navigate complex challenges.',
          url: 'https://vimeo.com/679974686',
          number: 2,
          thumbnail: `${BASE_URL}/images/show28.png`,
        },
        {
          id: 3,
          title: 'The Third Pieces',
          duration: 4320000,
          description: 'Trust is tested and betrayals emerge as the competition intensifies.',
          url: 'https://vimeo.com/679974686',
          number: 3,
          thumbnail: `${BASE_URL}/images/show28.png`,
        },
        {
          id: 4,
          title: 'The Fourth Pieces',
          duration: 4140000,
          description: 'The remaining players face their most difficult challenges yet.',
          url: 'https://vimeo.com/679974686',
          number: 4,
          thumbnail: `${BASE_URL}/images/show28.png`,
        },
      ],
    },
  },
  {
    id: 29,
    title: 'The Farewell',
    language: ['English', 'Mandarin'],
    thumbnail: `${BASE_URL}/images/show29.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'The Farewell',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'A Chinese family discovers their grandmother has only a short while left to live and decide to keep her in the dark, scheduling a wedding to gather before she dies.',
      rating: 'PG',
      releaseYear: 2019,
      duration: 6000000, // 1h 40m in milliseconds
      genre: ['Comedy', 'Drama', 'Family'],
      cast: ['Awkwafina', 'Tzi Ma', 'Diana Lin', 'Zhao Shuzhen'],
    },
  },
  {
    id: 30,
    title: 'Lover, Stalker, Killer',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show30.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'Lover, Stalker, Killer',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'In this twisting documentary, a mechanic tries online dating for the first time and meets a woman who takes romantic obsession to a deadly extreme.',
      rating: 'TV-MA',
      releaseYear: 2024,
      duration: 5400000, // 1h 30m in milliseconds
      genre: ['Documentary', 'True Crime', 'Mystery'],
      cast: ['Documentary'],
    },
  },
  {
    id: 31,
    title: 'The Outsider',
    language: ['English', 'Japanese'],
    thumbnail: `${BASE_URL}/images/show31.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'The Outsider',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'An American soldier imprisoned in postwar Japan enters the dark world of the yakuza, adopting their way of life in repayment for his freedom.',
      rating: 'TV-MA',
      releaseYear: 2018,
      duration: 7200000, // 2h 0m in milliseconds
      genre: ['Crime', 'Drama', 'Thriller'],
      cast: ['Jared Leto', 'Tadanobu Asano', 'Kippei Shiina', 'Shioli Kutsuna'],
    },
  },
  {
    id: 32,
    title: 'Headspace: Unwind Your Mind',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show32.png`,
    isInPrivateList: false,
    type: VideoType.SERIES,
    details: {
      title: 'Headspace: Unwind Your Mind',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'Do you want to relax, meditate, or do breathing exercises before bed? This interactive special from Headspace can help. Choose your own adventure to mindfulness.',
      rating: 'TV-G',
      releaseYear: 2021,
      duration: '1 Season',
      genre: ['Documentary', 'Wellness', 'Interactive'],
      cast: ['Eve Lewis Prieto'],
      episodes: [
        {
          id: 1,
          title: 'Interactive Experience',
          duration: 1200000,
          description:
            'Choose your path through guided meditations and breathing exercises designed to help you unwind.',
          url: 'https://vimeo.com/679974686',
          number: 1,
          thumbnail: `${BASE_URL}/images/show32.png`,
        },
      ],
    },
  },
  {
    id: 33,
    title: 'The Farewell',
    language: ['English', 'Mandarin'],
    thumbnail: `${BASE_URL}/images/show33.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'The Farewell',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'A Chinese family discovers their grandmother has only a short while left to live and decide to keep her in the dark, scheduling a wedding to gather before she dies.',
      rating: 'PG',
      releaseYear: 2019,
      duration: 6000000, // 1h 40m in milliseconds
      genre: ['Comedy', 'Drama', 'Family'],
      cast: ['Awkwafina', 'Tzi Ma', 'Diana Lin', 'Zhao Shuzhen'],
    },
  },
  {
    id: 34,
    title: 'Extraction 2',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show34.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'Extraction 2',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        'After barely surviving his grievous wounds from his mission in Dhaka, Bangladesh, Tyler Rake is back, and his team is ready to take on their next mission. They must rescue the family of a ruthless Georgian gangster from the prison where they are being held.',
      rating: 'R',
      releaseYear: 2023,
      duration: 7380000, // 2h 3m in milliseconds
      genre: ['Action', 'Thriller'],
      cast: ['Chris Hemsworth', 'Golshifteh Farahani', 'Adam Bessa', 'Olga Kurylenko'],
    },
  },
  {
    id: 35,
    title: 'The Speed Cubers',
    language: ['English'],
    thumbnail: `${BASE_URL}/images/show35.png`,
    isInPrivateList: false,
    type: VideoType.MOVIE,
    details: {
      title: 'The Speed Cubers',
      videoUrl:
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      description:
        "This documentary captures the extraordinary twists and turns in the journeys of Rubik's Cube-solving champions Max Park and Feliks Zemdegs.",
      rating: 'TV-G',
      releaseYear: 2020,
      duration: 2400000, // 40m in milliseconds
      genre: ['Documentary', 'Sports'],
      cast: ['Max Park', 'Feliks Zemdegs'],
    },
  },
];
