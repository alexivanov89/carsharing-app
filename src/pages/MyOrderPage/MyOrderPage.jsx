import { useHistory, useParams } from 'react-router-dom';

const MyOrderPage = () => {
  const history = useHistory();
  const { id } = useParams();
  return <div>{`MyOrderPage. Order: ${id}`}</div>;
};

export default MyOrderPage;
