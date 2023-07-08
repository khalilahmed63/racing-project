import { Autocomplete, Group, Header, Image, createStyles, rem } from '@mantine/core';
import Link from 'next/link';
import { IconSearch } from 'tabler-icons';
import { ColorSchemeToggle } from '../Common/ColorSchemeToggle';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

export default function NavigationHeader() {
  const { classes } = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  const links = [
    {
      label: 'MotoGP',
      submenu: [
        {
          label: 'RACE RESULT',
          link: '/raceresult',
        },
        {
          label: 'Standing',
          link: '/standign',
        },
      ]
    },
    {
      label: 'GitHub',
      link: 'https://github.com',
    },
    {
      label: 'Google',
      link: 'https://www.google.com',
    },
    {
      label: 'Wikipedia',
      link: 'https://www.wikipedia.org',
    },
  ];

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (  
    <> 
    <div className="bg-gray-300">
    <ul className="flex items-center justify-between max-w-4xl mx-auto p-4">
      {links.map((link, index) => (
        <li key={index} className="relative">
          {link.submenu ? (
            <div
              className="dropdown"
              onMouseEnter={handleMenuToggle}
              onMouseLeave={handleMenuClose}
            >
              <button
                className="dropdown-toggle text-white font-medium"
              >
                {link.label}
              </button>
              {isOpen && (
                <ul className="dropdown-menu absolute mt-2 py-2 px-4 bg-white rounded shadow-md">
                  {link.submenu.map((submenuItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={submenuItem.link}
                        className="block px-2 py-1 text-gray-800 hover:bg-gray-200"
                        onClick={handleMenuClose}
                      >
                        {submenuItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <a
              href={link.link}
              className="text-white font-medium hover:text-gray-200 cursor-pointer"
            >
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
  <div className="fixed top-0 z-[100] w-full ">
        <Header height={56} className={classes.header} mb={120} >
          <div className={classes.inner}>
            <Group>
              <Link href="/" passHref>
                <Image alt="logo" height={25} src="/favicon.svg" />
              </Link>
            </Group>

            <Group>
              <Group ml={50} spacing={5} className={classes.links}>
                {items}
              </Group>
              <Autocomplete
                className={classes.search}
                placeholder="Search"
                icon={<IconSearch size="1rem" stroke={1.5} />}
                data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']} />
            </Group>
            <Group>
              <div className="mb-6">
                <ColorSchemeToggle />
              </div>
            </Group>
          </div>
        </Header>
      </div></>
  );
}
