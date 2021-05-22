import { useSwipeable } from 'react-swipeable';
import { useDispatch, useSelector } from 'react-redux';
import { updateBalance } from 'redux/user/actions';

import { CircularProgress } from '@material-ui/core';

import NavBar from './NavBar';

const AppLayout = ({ children }: any) => {
  const dispatch = useDispatch();
  const isFetching = useSelector<any>((store) => store.userReducer.isFetching);
  const handlers = useSwipeable({
    onSwipedDown: (eventData) => dispatch(updateBalance()),
  });

  return (
    <div className='bg-orange_3 h-screen pt-24' {...handlers}>
      {isFetching && (
        <div className='mx-auto w-50'>
          <CircularProgress />
        </div>
      )}
      {children}
      <NavBar />
    </div>
  );
};

export default AppLayout;
