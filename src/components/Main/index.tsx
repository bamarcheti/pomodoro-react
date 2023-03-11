import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <div className="grow justify-center py-3 xl:p-12 mt-2 rounded-sm px-14">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
