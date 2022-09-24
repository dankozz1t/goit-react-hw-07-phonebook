import { ThreeDots } from 'react-loader-spinner';

const Loader = props => {
  return (
    <ThreeDots
      height="100"
      width="100"
      radius="9"
      color="#3f51b5"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: 'auto', display: 'inline' }}
      wrapperClassName=""
      visible={true}
      {...props}
    />
  );
};

export default Loader;
