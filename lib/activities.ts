export type Activity = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  alt: string;
  introduction: string[];
  benefits: { title: string; text: string }[];
  storyTitle: string;
  story: string;
  sources: { url: string; label: string }[];
  questions: { question: string; answer: string }[];
};

// Activity names and source posts supplied by the school. Current groups,
// timetables, coaching arrangements and fees must be confirmed with the school.
export const activities: Activity[] = [
  {
    slug: 'taekwondo',
    name: 'Taekwondo',
    category: 'Movement & focus',
    summary:
      'Purposeful movement, patient practice and respect for one another.',
    description:
      'Explore Taekwondo at Apex International School in Kozhikode: movement, focus and confidence beyond the classroom. Arrange a school visit.',
    image: '/assets/activities/taekwondo.webp',
    alt: 'Apex International School’s Taekwondo artwork showing two young martial artists',
    introduction: [
      'Taekwondo brings movement and concentration together. Learning a sequence means slowing down, listening carefully and returning to a movement until it begins to feel familiar. Progress is built through practice, one step at a time.',
      'At Apex International School in Kozhikode, Taekwondo is part of the wider picture of life beyond the classroom. It gives families another way to think about their child’s interests: not only what they enjoy learning, but how they enjoy moving, practising and challenging themselves.',
    ],
    benefits: [
      {
        title: 'Focus in motion',
        text: 'Following a movement sequence invites children to listen, notice details and concentrate on the next step.',
      },
      {
        title: 'Confidence through practice',
        text: 'Working patiently on an unfamiliar skill makes room for small achievements and the confidence to try again.',
      },
      {
        title: 'Respect for others',
        text: 'Shared practice offers a setting for self-control, consideration and encouragement.',
      },
    ],
    storyTitle: 'Taekwondo at Apex',
    story:
      'In its Taekwondo post, Apex introduced the activity as part of school life. Explore the school’s original artwork and message, then talk to us about your child’s interests and current participation options.',
    sources: [
      {
        url: 'https://www.instagram.com/p/B1Q5c1ujtlW/',
        label: 'Taekwondo at Apex',
      },
    ],
    questions: [
      {
        question: 'Does my child need previous Taekwondo experience?',
        answer:
          'Tell the school whether your child is new to Taekwondo or has practised before. The team can advise on the current groups and an appropriate starting point.',
      },
      {
        question: 'What should we ask about before joining?',
        answer:
          'Ask about age suitability, supervision, clothing, equipment, session timings and any activity fees. Confirm these details with the school before buying a uniform or equipment.',
      },
    ],
  },
  {
    slug: 'school-radio',
    name: 'School Radio',
    category: 'Voice & expression',
    summary: 'A place for ideas to be heard, and for listening to matter.',
    description:
      'Discover School Radio at Apex International School in Kozhikode. Explore speaking, listening and creative expression, and plan a campus visit.',
    image: '/assets/activities/school-radio.webp',
    alt: 'Apex School Radio artwork featuring a microphone and headphones',
    introduction: [
      'There is more to finding a voice than speaking loudly. Choosing the right words, organising an idea and listening to someone else all help a message connect. School radio brings these skills into a shared creative experience.',
      'For a child who loves to tell stories, a microphone can open up a new interest. For a quieter child, thinking about what to say can be just as meaningful. School Radio is one of the activities that adds another dimension to life at Apex International School in Kozhikode.',
    ],
    benefits: [
      {
        title: 'Express an idea',
        text: 'Putting thoughts into words encourages children to consider what they want to say and how to make it clear.',
      },
      {
        title: 'Listen with care',
        text: 'Good communication makes space for another voice. Listening is as valuable as taking a turn to speak.',
      },
      {
        title: 'Create together',
        text: 'A shared radio idea can connect writing, speaking and teamwork in a memorable way.',
      },
    ],
    storyTitle: 'School Radio at Apex',
    story:
      'The school’s Radio post describes a platform for pupil discussions, interviews, shows and radio drama. Its message puts children’s voices at the centre: an invitation to express ideas and listen to others.',
    sources: [
      {
        url: 'https://www.instagram.com/p/B1QbbNbDCkA/',
        label: 'School Radio at Apex',
      },
    ],
    questions: [
      {
        question: 'Is School Radio only for confident speakers?',
        answer:
          'If your child is interested in speaking, storytelling or listening, mention it when you contact the school. Ask about the current opportunities and how pupils can take part.',
      },
      {
        question: 'Can we learn more during a visit?',
        answer:
          'Yes—include School Radio in your visit enquiry. The school can explain the current arrangements and confirm what can be seen on your chosen visit date.',
      },
    ],
  },
  {
    slug: 'art-and-craft',
    name: 'Art and Craft',
    category: 'Imagination & making',
    summary: 'Colour, texture and the joy of making something your own.',
    description:
      'Explore Art and Craft at Apex International School in Kozhikode. Discover creative expression, hands-on making and life beyond the classroom.',
    image: '/assets/activities/art-and-craft.webp',
    alt: 'A teacher and pupil with a handmade flower artwork at Apex International School',
    introduction: [
      'A sheet of paper can become the beginning of a new idea. Choosing a colour, arranging a shape or trying a different texture gives children a way to explore without needing every answer in advance.',
      'Art and Craft makes room for personal expression at Apex International School in Kozhikode. The process matters as much as the finished piece: noticing, experimenting, making changes and finding pleasure in something created by hand.',
    ],
    benefits: [
      {
        title: 'Imagine freely',
        text: 'An open-ended creative task leaves room for a child’s own choices, ideas and interpretation.',
      },
      {
        title: 'Make with care',
        text: 'Working with colours, shapes and materials invites attention to detail and thoughtful use of the hands.',
      },
      {
        title: 'Share a point of view',
        text: 'Talking about a finished piece is a chance to explain choices and appreciate someone else’s ideas.',
      },
    ],
    storyTitle: 'Pupil artwork',
    story:
      'A handmade flower picture, a pupil and a teacher: this school photograph celebrates the simple pleasure of sharing creative work. It is a reminder that learning can be something children make, see and talk about.',
    sources: [
      {
        url: 'https://www.instagram.com/p/B6S-8QyDqHG/',
        label: 'Handmade flower artwork',
      },
      {
        url: 'https://www.instagram.com/p/B1YDOF1jjD5/',
        label: 'More Art and Craft at Apex',
      },
    ],
    questions: [
      {
        question: 'Does my child need to be good at drawing?',
        answer:
          'Creative interests take many forms, from colour and pattern to making things by hand. Tell the school what your child enjoys and ask about the current Art and Craft opportunities for their class.',
      },
      {
        question: 'Do families need to provide art materials?',
        answer:
          'The school can confirm which materials are provided and whether pupils need to bring anything for a particular activity. Ask before purchasing supplies.',
      },
    ],
  },
  {
    slug: 'skating',
    name: 'Skating',
    category: 'Balance & adventure',
    summary: 'Find balance, keep practising and enjoy being on the move.',
    description:
      'Discover skating at Apex International School in Kozhikode. Explore balance, movement and confidence, and ask about activities on a school visit.',
    image: '/assets/activities/skating.webp',
    alt: 'Skating activity at Apex International School',
    introduction: [
      'Skating begins with finding balance. A small movement becomes a smoother one; a careful first attempt becomes another reason to keep practising. It is a lively way to explore coordination and enjoy being active.',
      'At Apex International School in Kozhikode, skating is one of the interests families can explore beyond academic learning. Whether your child is curious about trying skates or already enjoys being on wheels, a conversation with the school can help you understand the current opportunities.',
    ],
    benefits: [
      {
        title: 'Discover balance',
        text: 'Moving on skates calls for awareness of posture, coordination and the space around you.',
      },
      {
        title: 'Keep trying',
        text: 'Learning a physical skill offers a practical lesson in patience: pause, adjust and try the movement again.',
      },
      {
        title: 'Enjoy movement',
        text: 'An activity that captures a child’s interest can make practice and being active feel rewarding.',
      },
    ],
    storyTitle: 'Skating at Apex',
    story:
      'Take a look at the school’s skating post for a glimpse of pupils on the move. It is one part of the wider story of sport, creativity and discovery at Apex.',
    sources: [
      {
        url: 'https://www.instagram.com/p/B5enNnEjUNr/',
        label: 'Skating at Apex',
      },
    ],
    questions: [
      {
        question: 'What equipment does my child need?',
        answer:
          'Ask the school about suitable skates, helmet and protective gear, along with its supervision arrangements. Confirm the requirements before purchasing equipment.',
      },
      {
        question: 'Can a beginner take part?',
        answer:
          'Let the school know your child’s age and experience. The team can explain the current groups, availability and arrangements for pupils who are new to skating.',
      },
    ],
  },
  {
    slug: 'chess',
    name: 'Chess',
    category: 'Strategy & curiosity',
    summary:
      'Strategy, pattern recognition and thoughtful play on the chessboard.',
    description:
      'Explore chess at Apex International School in Kozhikode. Discover thoughtful play, strategy and problem-solving, and arrange a school visit.',
    image: '/assets/activities/chess.webp',
    alt: 'Chess activity at Apex International School',
    introduction: [
      'A chessboard offers a small world with many possibilities. Each move invites a question: what happens next? Children can explore patterns, weigh up choices and discover why taking a moment to think can change a game.',
      'Chess adds a quieter kind of challenge to life at Apex International School in Kozhikode. The pleasure is not only in winning. It can be in noticing a new idea, understanding a previous move or enjoying a thoughtful game with someone else.',
    ],
    benefits: [
      {
        title: 'Look ahead',
        text: 'Considering more than one possible move encourages children to think about choices and consequences.',
      },
      {
        title: 'Notice patterns',
        text: 'The board gives players a chance to recognise familiar arrangements and explore a different response.',
      },
      {
        title: 'Learn from a game',
        text: 'Looking back at a move invites reflection, while taking turns builds consideration for an opponent.',
      },
    ],
    storyTitle: 'International Chess Day',
    story:
      'The school’s International Chess Day post from July 2024 shows children gathered around chessboards, thinking through their next moves. Alongside its earlier introduction to chess, it offers a glimpse of an activity built around thought and play.',
    sources: [
      {
        url: 'https://www.instagram.com/p/B1bHQ9eDwhS/',
        label: 'Chess at Apex',
      },
      {
        url: 'https://www.instagram.com/p/C9macU3THSh/',
        label: 'International Chess Day at Apex',
      },
    ],
    questions: [
      {
        question: 'Does my child need to know the rules already?',
        answer:
          'Tell the school whether your child is just discovering chess or already plays. Ask about the current opportunities and how different experience levels are accommodated.',
      },
      {
        question: 'How can we find out about chess at Apex?',
        answer:
          'Arrange a school visit or call the school and mention chess. The team can confirm current participation arrangements, timing and any materials pupils need.',
      },
    ],
  },
];

export const activityHref = (slug: string) => `/life-at-apex/${slug}`;
export const getActivity = (slug: string) =>
  activities.find((activity) => activity.slug === slug);
