import { Autocomplete, Group, Header, Image, createStyles, rem } from '@mantine/core';
import Link from 'next/link';
import { IconSearch } from 'tabler-icons';
import { ColorSchemeToggle } from '../Common/ColorSchemeToggle';

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
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 z-[100] w-full ">
        <Header height={56} className={classes.header} mb={120}>
          <div className={`${classes.inner} max-w-screen-xl mx-auto`}>
            <Group>
              <Link href="/" passHref>
                <Image alt="logo" height={25} src="/favicon.svg" />
              </Link>
            </Group>

            <Group>
              <Group ml={50} spacing={5} className={classes.links}>
                <Link href="/" className={classes.link}>
                  HOME
                </Link>
                <div className="group">
                  <div className={`${classes.link} relative cursor-pointer`}>MOTOGP</div>
                  <div className="hidden p-2 absolute bg-white rounded-md group-hover:block">
                    <Link href="/Motogp-race-result" className={`${classes.link} py-3`}>
                      RACE RESULT
                    </Link>
                    <Link href="/Motogp-race-result" className={`${classes.link} py-3`}>
                      STANDING
                    </Link>
                  </div>
                </div>
                <div className="group">
                  <div className={`${classes.link} relative cursor-pointer`}>FORMULAONE</div>
                  <div className="hidden p-2 absolute bg-white rounded-md group-hover:block">
                    <Link href="#" className={`${classes.link} py-3`}>
                      COMMING SOON
                    </Link>
                    <Link href="#" className={`${classes.link} py-3`}>
                      COMMING SOON
                    </Link>
                  </div>
                </div>
                <Link href="/" className={classes.link}>
                  CONTACT
                </Link>
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
                <ColorSchemeToggle />
              </div>
            </Group>
          </div>
        </Header>
      </div>
    </>
  );
}
