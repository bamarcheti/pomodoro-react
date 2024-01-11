import Footer from './components/Footer';
import Header from './components/Header';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between w-full h-screen">
      <Header />
      <div className="flex justify-center items-center">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
