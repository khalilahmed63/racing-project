import { ActionIcon, createStyles, Group, Image, rem, Text } from '@mantine/core';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(60),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

const footerData = [
  {
    title: 'About',
    links: [
      { label: 'features', link: 'https://example.com/link1' },
      { label: 'Pricing', link: 'https://example.com/link2' },
      { label: 'Support', link: 'https://example.com/link4' },
      { label: 'Fourms', link: 'https://example.com/link4' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { label: 'Contribute', link: 'https://example.com/link3' },
      { label: 'Media assets', link: 'https://example.com/link4' },
      { label: 'Changelog', link: 'https://example.com/link4' },
      { label: 'Release', link: 'https://example.com/link4' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: 'https://example.com/link3' },
      { label: 'Follow on Twitter', link: 'https://example.com/link4' },
      { label: 'Email newsletter', link: 'https://example.com/link4' },
      { label: 'Github discussion', link: 'https://example.com/link4' },
    ],
  },
];

export function Footer() {
  const { classes } = useStyles();

  const groups = footerData.map((group) => {
    const links = group.links.map((link) => (
      <Text
        key={link.link}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={`${classes.footer}`}>
      <div className="mx-auto flex max-w-screen-xl items-center justify-between pb-6">
        <div className={`${classes.logo} mx-auto sm:mx-0`}>
          <div className="">
            <Link href="/" passHref>
              <Image alt="logo" height={40} width={40} src="/favicon.svg" />
            </Link>
          </div>
          <Text size="xs" color="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </div>
      <div className="mx-auto flex max-w-screen-xl items-center justify-between border-t pt-4">
        <Text color="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </footer>
  );
}
