import VendorCards from './VendorCards';

function Vendors() {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/vendorsHero.jpg)`,
      }}
    >
      <VendorCards />
    </div>
  );
}

export default Vendors;