import './banner.css';

function Banner({ image, alt, text }) {
    return (
      <div className="banner">
        <img className="banner__img" src={image} alt={alt} />
        <h1 className="banner__txt">{text}</h1>
      </div>
    );
  }
  
  export default Banner;
  