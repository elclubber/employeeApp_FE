import router from './router';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {router()}
    </div>
  );
};

export default App;
