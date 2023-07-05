import { Header, Image, createStyles } from '@mantine/core';
// import { ColorSchemeToggle } from "../../ColorSchemeToggle";
import Link from 'next/link';
import VariantToggle from '../../global/Common/VariantToggle';
import { ColorSchemeToggle } from '../../ColorSchemeToggle/ColorSchemeToggle';
// import Link from 'next/link';

const HEADER_HEIGHT = 90;

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

export default function NavigationHeaderVariantA() {
  const { classes } = useStyles();

  return (
    <div className="fixed top-0 z-[100] w-full">
      <Header height={HEADER_HEIGHT} className={`${classes.root} !border-b-0`}>
        <div className="flex justify-between items-center h-full mx-5 lg:mx-10">
          <div className="">
            <Link href="/" passHref>
              <Image
                alt="logo"
                height={25}
                src="/variantB/assets/images/logoTransport.jpeg"
              />
            </Link>
          </div>
          <div className="flex justify-end items-center text-sm">
            <VariantToggle />
            <div className="flex justify-start items-center mb-6 mr-4">
              <ColorSchemeToggle />asdf
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}
