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
    <>
      <div
        style={{ backgroundColor: 'rgb(39,170,225)' }}
        className='h-full min-h-screen pt-24'
        {...handlers}
      >
        {isFetching && (
          <div className='mx-auto w-50'>
            <CircularProgress />
          </div>
        )}
        {children}
      </div>
      <NavBar />
    </>
  );
};

export default AppLayout;
