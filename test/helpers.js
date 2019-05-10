const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Kev Zhang',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Kev Zhang',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Kev Zhang',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Kev Zhang',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Kev Zhang',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
