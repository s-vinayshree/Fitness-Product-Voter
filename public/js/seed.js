window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Fitbit Alta HR',
      description: 'Reach your health goals in style.',
      url: 'https://www.fitbit.com/altahr',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/fitbit/fitbit alta HR.jpg',
    },
    {
      id: 2,
      title: 'Fitbit Charge 2',
      description: 'Heart Rate + Fitness Wristband.',
      url: 'https://www.fitbit.com/charge2',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/fitbit/fitbit charge 2.jpg',
    }, 
    {
      id: 3,
      title: 'Moov Now',
      description: 'Correct form, reduce injuries, and beat personal bests.',
      url: 'https://welcome.moov.cc/moovnow/',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      productImageUrl: 'images/fitbit/moov.jpg',
    },
    {
      id: 4,
      title: 'TomTom Touch Fitness Tracker',
      description: 'Body Composition Analysis (BCA) + Heart Rate Monitor and Smartphone Notifications.',
      url: 'https://www.tomtom.com/en_in/sports/fitness-trackers/',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      productImageUrl: 'images/fitbit/tomtom.jpg',
    },
  ];

  return { products: products };
}());
