import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Stars = ({rating}) =>{
     // redondeamos el puntaje a la mitad más cercana
    const roundedRating = Math.min(5, Math.round(rating * 2) / 2);
  // creamos un array con las estrellas correspondientes al puntaje
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<FaStar key={i} color='orange' size={18} />);
    } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
      stars.push(<FaStarHalfAlt key={i} color='orange' size={18}/>);
    } else {
      stars.push(<FaRegStar key={i} color='orange' size={18}/>);
    }
  }
  // mostramos las estrellas en un div
    return (
        <>
        
        <div className='flex items-center'>{stars} <span className='font-semibold ml-2'>{roundedRating}</span></div>
        </>
    )
}

export default Stars