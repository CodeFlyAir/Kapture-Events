// Poster.jsx
export default function Poster({ image }) {
    return (
      <div className='aspect-ratio:4/3 ml-8 mr-8'>
        <img
          style={{ height: '90vh', width: '100%', objectFit: 'cover', objectPosition: 'center', marginTop: '0px' }}
          className='rounded-[45px]'
          src={image}
          alt={`Slides`}
        />
      </div>
    );
  }
  