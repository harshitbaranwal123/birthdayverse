// src/data/index.js — All static content for the birthday website
import rashmi1 from '../{components,assets,data,hooks}/rashmi1.png';
import rashmi2 from '../{components,assets,data,hooks}/rashmi2.jpeg';
import rashmi3 from '../{components,assets,data,hooks}/rashmi3.jpeg';
import rashmi4 from '../{components,assets,data,hooks}/rashmi4.jpeg';
import rashmi5 from '../{components,assets,data,hooks}/rashmi5.jpeg';
import rashmi6 from '../{components,assets,data,hooks}/rashmi6.jpeg';
import rashmi7 from '../{components,assets,data,hooks}/rashmi7.jpeg';
import rashmi8 from '../{components,assets,data,hooks}/rashmi8.jpg';

export const birthdayConfig = {
  name: "Rashmi",
  fullName: "Rashmi Gupta",
  birthdate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1), // 3 days from now for demo
  age: 25,
  tagline: "A heart of gold, a spirit of fire.",
};

export const timelineData = [
  {
    year: "2004",
    title: "A Star Is Born ✨",
    description: "The world became infinitely brighter the day you arrived. Everyone who met you knew something extraordinary had just happened.",
    emoji: "🌟",
    color: "#FFD700",
  },
  {
    year: "2008",
    title: "Childhood Wonder",
    description: "Chasing butterflies, painting the sky with imagination. You saw magic in every corner of the world that adults had long forgotten.",
    emoji: "🦋",
    color: "#FFC300",
  },
  {
    year: "2012",
    title: "School Days",
    description: "The hallways weren't the same without your laughter. You turned classrooms into adventures and strangers into lifelong friends.",
    emoji: "📚",
    color: "#FFB000",
  },
  {
    year: "2016",
    title: "Finding Your Voice",
    description: "You discovered your passions, your talents, your boundless potential. The world started listening, because what you had to say mattered.",
    emoji: "🎤",
    color: "#FFA500",
  },
  {
    year: "2020",
    title: "Resilience & Growth",
    description: "When the world paused, you didn't. You adapted, created, and inspired those around you to keep going. Pure gold under pressure.",
    emoji: "💪",
    color: "#FF8C00",
  },
  {
    year: "2025-26",
    title: "The Best Chapter Yet",
    description: "Here you are — wiser, kinder, more radiant than ever. This is your moment, and the best is absolutely still to come.",
    emoji: "👑",
    color: "#FFD700",
  },
];

export const reasons = [
  "Your smile lights up every room",
  "Your kindness knows no boundaries",
  "You make everything better just by being there",
  "Your laugh is the best sound in the world",
  "You see the best in everyone",
  "Your heart is pure gold",
  "You turn ordinary moments into magic",
  "Your strength is truly inspiring",
  "You make people feel truly seen",
  "Your creativity is breathtaking",
  "You never give up on people you love",
  "Your empathy changes lives",
  "You bring joy wherever you go",
  "Your wisdom goes far beyond your years",
  "You make the world gentler",
  "Your passion is contagious",
  "You listen like no one else can",
  "Your courage is quiet and mighty",
  "You find beauty in everything",
  "Your presence is a gift",
  "You love fiercely and fully",
  "Your honesty is refreshing",
  "You grow through everything life throws at you",
  "Your generosity is endless",
  "You inspire without even trying",
  "Your energy is magnetic",
  "You make hard things look graceful",
  "Your loyalty is unmatched",
  "You bring people together",
  "Your taste is impeccable",
  "You always know the right words",
  "Your ambition is beautiful to watch",
  "You stand up for what matters",
  "Your humor is perfectly timed",
  "You remember the little things",
  "Your warmth is immediate and real",
  "You dream bigger than anyone",
  "Your follow-through is legendary",
  "You celebrate others genuinely",
  "Your curiosity is endlessly charming",
  "You make ordinary days extraordinary",
  "Your vulnerability takes real bravery",
  "You lift everyone around you higher",
  "Your taste in music is flawless",
  "You give the best advice",
  "Your dedication is something else",
  "You make people proud every day",
  "Your perspective shifts rooms",
  "You are unrepeatable and irreplaceable",
  "The world is genuinely better with you in it",
];

export const wishes = [
  {
    author: "Mom & Dad",
    role: "Parents",
    message: "Every day watching you grow has been the greatest privilege of our lives. You have exceeded every dream we ever had for you. Happy Birthday, our shining star. We love you beyond all words.",
    emoji: "❤️",
  },
  {
    author: "Aashu",
    role: "Best Friend",
    message: "Fifteen years of friendship and you still manage to surprise me. You are the most real, most loyal, funniest person I know. Here's to many more years of chaos and gold. Love you to the moon.",
    emoji: "🌙",
  },
  {
    author: "Bulbul sah",
    role: "Best Friend",
    message: "My darling, from the moment I held you I knew you were something special. Your heart is so big and so beautiful. Keep being exactly who you are. The world needs more of you.",
    emoji: "🌹",
  },
  {
    author: "Rajhansh",
    role: "Sibling",
    message: "Growing up with you was the best thing that ever happened to me — even when you stole my stuff. You are my favorite person on this planet. Happy Birthday, you absolute legend.",
    emoji: "⭐",
  },
  {
    author: "The Whole Crew",
    role: "Friend Group",
    message: "From late nights to early mornings, road trips to living room dance parties — every memory is brighter because you were in it. We love you endlessly. This is YOUR year.",
    emoji: "🎉",
  },
  {
    author: "Rashit",
    role: "Mentor",
    message: "I have watched you transform from someone who doubted herself into a woman who moves mountains with grace. You are one of the most remarkable people I have had the honor of knowing.",
    emoji: "🏆",
  },
];

export const galleryImages = [
   {
    id: 1,
    src: rashmi1,
    alt: "Rashmi",
    span: "tall"
  },

  { 
    id: 2,
   src: rashmi2, 
   alt: "Rashmi", 
   span: "normal" 
  },
  {
    id: 3,
   src: rashmi3, 
   alt: "Rashmi", 
   span: "normal" 
  },

  { 
    id: 4,
   src: rashmi4, 
   alt: "Rashmi", 
   span: "wide" 
  },

  { 
    id: 5,
   src: rashmi5, 
   alt: "Rashmi", 
   span: "normal" 
  },

  { 
    id: 6,
   src: rashmi6, 
    alt: "Rashmi",
    span: "tall" 
  },

  {
     id: 7, 
     src: rashmi7,
     alt: "Rashmi",
     span: "normal" 
    },

  { 
    id: 8,
     src: rashmi8,
    alt: "Rashmi",
    span: "normal"
   },
];

export const giftMessage = {
  title: "A Gift From the Heart 💛",
  message: "Inside this box isn't just a gift — it's a promise. A promise that you will always be celebrated, always be seen, always be loved exactly as you are. You deserve every good thing the world has to offer. Never stop shining.",
};

export const finalLetter = `Dear Rashmi,

On this, your 22nd birthday, I want you to know something you may sometimes forget:

You are extraordinary.

Not because of what you've accomplished — though that list is long and impressive. Not because of how you look or what you own. But because of the irreplaceable way you move through the world.

You bring warmth into cold rooms. You find humor in hard moments. You love with every cell in your body, and you make people feel like they matter — because to you, they genuinely do.

Twenty-five years. Think about everything you've seen, everything you've survived, everything you've built from scratch. Every version of you has been necessary to arrive at this one — the most radiant, most grounded, most fully yourself you've ever been.

The best chapters of your life are not behind you.

They are waiting — gorgeous and unwritten.

Happy Birthday.

With all the love in the world. 💛`;
