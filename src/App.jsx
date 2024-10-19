import { useSelector } from 'react-redux';
import { selectIsAppLoading } from './store/selectors/loadingSelector';
import Loader from './components/Loader';
import RouterComponent from './router';

const App = () => {
  const isAppLoading = useSelector(selectIsAppLoading);

  return (
    <div className="min-h-screen bg-gray-100">
      <Loader isLoading={isAppLoading} />
      <RouterComponent />
    </div>
  );
};

export default App;
