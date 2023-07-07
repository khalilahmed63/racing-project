import { Header, createStyles } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { ColorSchemeToggle } from '../Common/ColorSchemeToggle';

const HEADER_HEIGHT = 70;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#22272B',
  },

  header: {
    position: 'sticky',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    borderBottom: '0px',
  },
}));

export default function NavigationHeaderVariant() {
  const { classes } = useStyles();

  return (
    <div className="fixed top-0 z-[100] w-full">
      <Header height={HEADER_HEIGHT} className={`${classes.root} !border-b-0`}>
        <div className="flex justify-between items-center h-full w-full mx-5 lg:mx-10">
          <div className="">
            <Link href="/" passHref>
              <Image alt="logo" height={35} width={35} src="/Logo.png" />
            </Link>
          </div>
          <div className="flex justify-end items-center text-sm">
            <div className="flex justify-start items-center mb-2 mr-12">
              <ColorSchemeToggle />
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}
