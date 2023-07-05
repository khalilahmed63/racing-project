import { Header, Image, createStyles } from '@mantine/core';
import Link from 'next/link';
import VariantToggle from '../../global/Common/VariantToggle';
import { ColorSchemeToggle } from '../../ColorSchemeToggle/ColorSchemeToggle';

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
  },
}));

export default function NavigationHeaderVariantB() {
  const { classes } = useStyles();

  return (
    <div className="fixed top-0 z-[100] w-full">
      <Header height={HEADER_HEIGHT} className={`${classes.root} border-b-2 border-b-blue-400`}>
        <div className="flex justify-between items-center h-full mx-5 lg:mx-10 ">
          <div className="">
            <Link href="/" passHref>
              <Image alt="logo" height={25} src="/variantB/assets/images/logoTransport.jpeg" />
            </Link>
          </div>
          <div className="flex justify-end items-center text-sm">
            <VariantToggle />
            <div className="flex justify-start items-center mb-6 mr-4">
              <ColorSchemeToggle />
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}
