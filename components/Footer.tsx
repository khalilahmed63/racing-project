import {
  Group,
  ActionIcon,
  Image,
  Anchor,
  createStyles,
  rem,
} from '@mantine/core';
import Link from 'next/link';
// import { Link } from 'react-router-dom';
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from 'tabler-icons';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? 'white' : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

export default function Footer() {
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
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Link href="/" passHref>
          <Image alt="logo" height={25} src="/favicon.ico" />
        </Link>
        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
