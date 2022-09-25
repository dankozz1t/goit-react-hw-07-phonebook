import Container from './Container';
import TaskPhonebook from './TaskPhonebook';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <Container>
        <TaskPhonebook />
      </Container>
      <ToastContainer autoClose={5000} />
    </>
  );
};
