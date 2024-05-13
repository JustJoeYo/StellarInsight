export interface GameCardProps {
  name: string;
  image: string;
  functional?: boolean;
}

export const GamesArray: GameCardProps[] = [
  {
    name: "Valorant",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/valorant.jpg",
    functional: false,
  },
  {
    name: "League of Legends",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/league-of-legends.jpg",
    functional: false,
  },
  {
    name: "Fortnite",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/fortnite-2024.png",
    functional: false,
  },
  {
    name: "Rainbow 6 Siege",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/r6siege.jpg",
    functional: false,
  },
  {
    name: "Apex Legends",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/apex.jpg",
    functional: false,
  },
  {
    name: "Rocket League",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/rocket-league.jpg",
    functional: false,
  },
  {
    name: "Battlefield 2042",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/bf2042.jpg",
    functional: false,
  },
  {
    name: "Counter-Strike 2",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/cs2.jpg",
    functional: true,
  },
  {
    name: "Halo Infinite",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/halo-infinite.jpg",
    functional: false,
  },
  {
    name: "Warzone 2",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/warzone-2.jpg",
    functional: false,
  },
  {
    name: "Overwatch 2",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/overwatch-2.jpg",
    functional: false,
  },
  {
    name: "PUBG: Battlegrounds",
    image: "https://trackercdn.com/cdn/tracker.gg/boxart/pubg.jpg",
    functional: false,
  },
];
