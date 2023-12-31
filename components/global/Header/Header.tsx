import { Autocomplete, createStyles, Group, Header, Image, rem } from '@mantine/core';
import Link from 'next/link';
import { IconSearch } from 'tabler-icons';

import { ColorSchemeToggle } from '@/components/Common/ColorSchemeToggle';

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

  const links = [
    {
      label: 'OpenAI',
      link: 'https://openai.com',
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
    <div className="fixed top-0 z-[100] w-full">
      <Header height={56} className={classes.header} mb={120}>
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
              data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            />
          </Group>
          <Group>
            <div className="mb-6">
              <ColorSchemeToggle />{' '}
            </div>
          </Group>
        </div>
      </Header>
    </div>
  );
}
