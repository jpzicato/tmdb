import { useDispatch } from 'react-redux';
import { sendLogInRequest, sendRegisterRequest } from '../store/user';

function useForm(userName, email, password, type) {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    let actionCreator;
    actionCreator =
      type === 'register' ? sendRegisterRequest : sendLogInRequest;

    dispatch(
      actionCreator({
        name: userName.value,
        email: email.value,
        password: password.value,
      })
    );

    userName.reset();
    email.reset();
    password.reset();
  };

  return handleSubmit;
}
export default useForm;
