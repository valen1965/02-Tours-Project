import { useState } from 'react';

const Tour = ({ ...tour }) => {
  const { id, image, info, name, price, removeTours } = tour;

  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <div>
        <img src={image} alt={name} className='img' />
        <span className='tour-price'>${price}</span>
        <div className='tour-info'>
          <h5> {name}</h5>
          <p>
            {' '}
            {readMore ? info : `${info.substring(0, 200)} ...`}
            <button
              type='button'
              className='info-btn'
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? 'Show less' : 'Read more'}
            </button>
          </p>
          <button
            type='button'
            className='btn btn-block delete-btn'
            onClick={() => removeTours(id)}
          >
            not interested
          </button>
        </div>
      </div>
    </article>
  );
};
export default Tour;
