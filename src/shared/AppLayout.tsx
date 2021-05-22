import NavBar from './NavBar';
const AppLayout = ({ children }: any) => {
  return (
    <div className='bg-orange_3 h-screen pt-16'>
      {children}
      <NavBar />
    </div>
  );
};

export default AppLayout;
