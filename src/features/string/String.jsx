import { useSelector, useDispatch } from 'react-redux';
import {
  changeToUsers,
  changeToPosts,
  changeToComments,
  changeToPolice,
  changeToArmy,
} from './stringSlice';

const String = () => {
  const str = useSelector((state) => state.stringChange.str);
  const dispatch = useDispatch();
  return (
    <section>
      <p>{str}</p>
      <div>
        <button
          onClick={() => {
            dispatch(changeToUsers());
          }}
        >
          Show User
        </button>
        <button
          onClick={() => {
            dispatch(changeToPosts());
          }}
        >
          Show Posts
        </button>
        <button
          onClick={() => {
            dispatch(changeToComments());
          }}
        >
          Show Comments
        </button>
        <button
          onClick={() => {
            dispatch(changeToPolice());
          }}
        >
          Show Police
        </button>
        <button
          onClick={() => {
            dispatch(changeToArmy());
          }}
        >
          Show Army
        </button>
      </div>
    </section>
  );
};

export default String;
