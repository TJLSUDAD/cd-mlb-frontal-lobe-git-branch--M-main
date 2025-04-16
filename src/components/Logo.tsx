import { FaBaseballBall } from 'react-icons/fa';

const Logo = () => {
  return (
    <div className="flex items-center">
      {/* Left bracket with accent blue from Firebase Studio */}
      <span className="text-accent-blue text-2xl font-bold">[</span>

      {/* Baseball icon */}
      <div className="relative mx-1">
        {/* Gradient background for the icon */}
        <div className="absolute inset-0 rounded-full bg-gradient-primary blur-sm" />
        {/* Baseball icon on top */}
        <FaBaseballBall className="relative z-10 text-2xl text-white" />
      </div>

      {/* Right bracket with accent blue from Firebase Studio */}
      <span className="text-accent-blue text-2xl font-bold">]</span>

      {/* Application name */}
      <span className="ml-2 text-xl font-bold text-text-primary">
        MLB Frontal Lobe
      </span>
    </div>
  );
};

export default Logo;
