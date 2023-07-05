import { Box } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function SideBarVariantA(props: any) {
  return (
    <>
      <Box
        sx={(theme: any) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[8] : '#d4e6e8',
          color: theme.colorScheme === 'dark' ? 'white' : 'black',
        })}
        p={0}
        id="default-sidebar"
        className={`fixed left-0 z-40 ${
          // eslint-disable-next-line no-constant-condition
          true ? '' : '-ml-64 md:-ml-80'
        }  md: w-64 md:w-80 h-full duration-300 `}
        aria-label="Sidebar"
      >
        asdf
      </Box>
    </>
  );
}
