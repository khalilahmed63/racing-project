import NavigationHeaderVariantA from '../../variantA/Layouts/HeaderVariantA';
import SideBarVariantA from '../../variantA/Layouts/SideBarVariantA';
import NavigationHeaderVariantB from '../../variantB/Layouts/HeaderVariantB';
import SideBarVariantB from '../../variantB/Layouts/SideBarVariantB';
import Empty from '../Common/Empty';

export default function Main(props: any) {
  // const { variant } = useStoreState((state: any) => state.global);
  // eslint-disable-next-line prefer-const
  let variant = 'A';

  const getMain = () => {
    switch (variant) {
      case 'A':
        return (
          <>
            <NavigationHeaderVariantA />
            <SideBarVariantA>{props.children}</SideBarVariantA>
          </>
        );
      case 'B':
        return (
          <>
            <NavigationHeaderVariantB />
            <SideBarVariantB>{props.children}</SideBarVariantB>
          </>
        );
      default:
        return <Empty />;
    }
  };

  return <>{getMain()}</>;
}
