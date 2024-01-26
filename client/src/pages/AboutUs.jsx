
import daveImage from '../assets/home/dave.jpg';
import dave2Image from '../assets/home/dave2.jpg';
import josiahImage from '../assets/home/josiah.jpg';
import alanImage from '../assets/home/alan.jpg';
import chrisImage from '../assets/home/chris.jpg';
import pamImage from '../assets/home/pam.jpg';

const AboutUs = () => {
  const frameStyles = [
    { transform: 'rotate(3deg)', width: '80%' },
    { transform: 'rotate(-2deg)', width: '80%' },
    { transform: 'rotate(1deg)', width: '80%' },
    { transform: 'rotate(-3deg)', width: '80%' },
    { transform: 'rotate(2deg)', width: '80%' },
    { transform: 'rotate(-1deg)', width: '80%' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-center font-bold mb-8">Our Team</h1>
      <div className="grid grid-cols-3 gap-4">
        {[daveImage, dave2Image, josiahImage, alanImage, chrisImage, pamImage].map((image, index) => (
          <div key={index} className="text-center p-2" style={frameStyles[index % frameStyles.length]}>
            <img src={image} alt={`Team member ${index + 1}`} className="w-full rounded border-8 border-black shadow-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
