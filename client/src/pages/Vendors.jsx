import VendorCards from './VendorCards';

function Vendors() {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url(${process.env.VITE_PUBLIC_URL}/vendorsHero.jpg)`,
      }}
    >
      <VendorCards />
    </div>
  );
}

export default Vendors;