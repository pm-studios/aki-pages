import React from 'react';

const GameAPI = {
  games: [
    {
      id: 1,
      slug: "phantom-doctrine--1",
      title: "Phantom Doctrine",
      cover: "oaov1veblnyapulbcfdb",
      releaseDate: "14th Aug, 2018",
      developer: "CreativeForge Games",
      platforms: "PlayStation 4,Xbox One,Steam",
      categories: "RPG,Strategy,Tactical,Action,Fantasy,Thriller",
      tags: "alternate,historical,coldwar,paxwest2017,turn-based",
      youtube: "1W6vC3Z6DfI",
      screenshots: "a5orrdieqhwtijmvztyx,gx6pjkgyfeyunqryyhon,lrydepllxfvjwfnmcspw",
      released_at: "1976-04-19T12:59-0500",
      similar_games: [],
      dlc_games: []
    },
    {
      id: 2,
      slug: "adventure-time-pirates-of-the-enchiridion",
      title: "Adventure Time: Pirates Of The Enchiridion",
      cover: "obqa2nxm0gocmm0qwec5",
      releaseDate: "17th Jul, 2018",
      developer: "Climax Studios",
      platforms: "Nintendo Switch,Xbox One,Steam,PlayStation 4",
      categories: "Adventure,RPG,Action,Open World",
      tags: "fantasy",
      youtube: "GtUAC37OdSo",
      screenshots: "x9sspbdmp8tuiwtsgeou,ljz3hwmj8vcxsaa2hekj,bdzom7ytf1ssjj9hj1ne",
      released_at: "1976-04-19T12:59-0500",
      similar_games: [],
      dlc_games: []
    },
    {
      id: 3,
      slug: "football-manager-2019",
      title: "Football Manager 2019",
      cover: "co1h6j",
      releaseDate: "2nd Nov, 2018",
      developer: "Sports Interactive",
      platforms: "Steam",
      categories: "Simulator,Sport",
      tags: "football,management,simulator",
      youtube: "66-BT930evI",
      screenshots: "sc5j13,sc5j12,sc5j11",
      released_at: "1976-04-19T12:59-0500",
      similar_games: [],
      dlc_games: []
    },
    {
      id: 4,
      slug: "red-dead-redemption-2",
      title: "Red Dead Redemption 2",
      cover: "yfk9f2lbo0r7slytuhra",
      releaseDate: "26th Oct, 2018",
      developer: "Rockstar Studios",
      platforms: "PlayStation 4,Xbox One",
      categories: "RPG,Adventure,Shooter,Action,Open world",
      tags: "action-adventure,cowboy,horse,western",
      youtube: "94B-38sX5fs",
      screenshots: "mptosgjarjlyqxy7lqsm,dorsz0jbcecmkxvzi3t8,banftd8fgfytbsfx6mjz",
      released_at: "1976-04-19T12:59-0500",
      similar_games: [],
      dlc_games: []
    },
  ],

  all: function() { 
    return this.games 
  },

  get: function(id) {
    const isGame = p => p.id === id
    return this.games.find(isGame)
  }
}




export function GameCoverImg({ gameData }) {
  var cover = 'https://images.igdb.com/igdb/image/upload/t_cover_big/';
  if(gameData.cover === '')
    cover = 'https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png';
  else
    cover = cover + gameData.cover + '.jpg';

  return (
    <img src={cover} alt={gameData.title} />
  )
}

export function GameBannerImg({ gameData }) {
  var banner = 'https://images.igdb.com/igdb/image/upload/t_screenshot_big/';
  if(!gameData.cover || gameData.cover === '')
    banner = 'https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png';
  else
    banner = banner + gameData.screenshots.split(",")[0] + '.jpg';

  return (
    <img src={banner} alt={gameData.title} />
  )
}

export const getCategoryName = (category) => {
  const categories = {
    1: 'Action',
    2: 'Adventure',
    3: 'Sports',
    4: 'Racing',
    5: 'RPG',
    6: 'Strategy',
    7: 'Platform',
    8: 'Music',
    9: 'Puzzle',
    10: 'Collectible Card Game',
    11: 'Arcade',
    12: 'Survival',
    13: 'Horror',
    14: 'Shooter',
    15: 'Party',
    16: 'Casual',
    17: 'Fighting',
    18: 'Simulation',
    19: 'Casino',
    20: 'Interactive Stories',
    21: 'Stealth',
    22: 'Family',
    23: 'Creative',
    24: 'Table/Board',
    25: 'Free to Play',
    26: 'Mature',
    27: 'Educational',
    28: 'SciFi',
    29: 'Fantasy',
    30: 'Thriller',
    31: 'Comedy',
    32: 'Drama',
    33: 'Romance',
    34: 'Relaxing',
    35: 'Gore',
    36: 'Crime',
    37: 'Open World',
    38: 'Indie',
    39: 'Online',
    40: 'Psychological',
    41: 'Mystery',
  }
  return categories[category];
}

export const getPlatformName = (platform) => {
  const platforms = {
    1: 'PC',
    2: 'PlayStation 2',
    3: 'PlayStation 3',
    4: 'PlayStation 4',
    5: 'PlayStation Vita',
    6: 'PlayStation Portable',
    7: 'PlayStation Network',
    8: 'Xbox 360',
    9: 'Xbox One',
    10: 'Xbox Live Arcade',
    11: 'Nintendo 3DS',
    12: 'Nintendo Switch',
    13: 'Nintendo GameCube',
    14: 'Wii',
    15: 'Wii U',
    16: 'Android',
    17: 'iOS',
    18: 'Windows Phone',
    19: 'BlackBerry OS',
    20: 'SteamOS',
    21: 'Linux',
    22: 'Mac',
    23: 'Ouya',
    24: 'Game Boy Advance',
    25: 'Xbox',
    26: 'Nintendo DS',
    27: 'Arcade',
    28: 'Web browser',
    29: 'Neo Geo AES',
    30: 'Neo Geo MVS',
    31: 'Playstation',
    32: 'SNES',
    33: 'Atari ST/STE',
    34: 'PC DOS',
    35: 'Amiga',
    36: 'Apple II',
    37: 'Commodore C64/128',
    38: 'ZX Spectrum',
    39: 'Amstrad CPC',
    40: 'Virtual Console Nintendo',
    41: 'NES',
    42: 'Sega Master System',
    43: 'Neo Geo CD',
    44: 'Oculus VR',
    45: 'SteamVR',
    46: 'PlayStation VR',
    47: 'Sega Mega Drive/Genesis',
    48: 'Dreamcast',
    49: 'Windows Mixed Reality',
    50: 'Sega Game Gear',
    51: 'SG-1000',
    52: 'Sega Saturn',
    53: '3DO Interactive Multiplayer',
    54: 'Mobile',
    55: 'Amazon Fire TV',
    56: 'MSX',
    57: 'Atari Lynx',
    58: 'Game Boy Color',
    59: 'Super Famicom',
    60: 'WiiWare',
    61: 'Apple IIGS',
  }
  return platforms[platform];
}

export const getCategoriesName = (categories) => {
  var categoriesName = '';
  categories.map((category, i) => {
    if (categories.length-1 === i)
      categoriesName = categoriesName + getCategoryName(category);
    else
      categoriesName = categoriesName + `${getCategoryName(category)}, `;
  })
  return categoriesName;
}

export const getPlatformsName = (platforms) => {
  var platformsName = '';
  platforms.map((platform, i) => {
    if (platforms.length-1 === i)
      platformsName = platformsName + getPlatformName(platform);
    else
      platformsName = platformsName + `${getPlatformName(platform)}, `;
  })
  return platformsName;
}

export default GameAPI;
