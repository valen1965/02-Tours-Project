import Loading from './Loading';
import Tours from './Tours';
import { useState, useEffect } from 'react';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
      }
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }

  if (isError) {
    return <h2 className='title'>There was an error</h2>;
  }
  //TODO refresh list
  if (tours.length < 1) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <div className='title-underline'></div>
          <button
            type='button'
            style={{ marginTop: '2rem' }}
            className='btn'
            onClick={() => fetchData()}
          >
            refresh data
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div>
        <Tours tours={tours} removeTours={removeTours} />
      </div>
    </main>
  );
};
export default App;
