import type React from 'react';
import { FaBaseballBall } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import { IoMdNotifications } from 'react-icons/io';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    // Header with primary background color from Firebase Studio
    <header className="flex h-16 items-center justify-between border-b border-gray-800 bg-background-primary px-6">
      {/* Left section with logo and title */}
      <Logo />

      {/* Right section with action buttons */}
      <div className="flex items-center space-x-4">
        {/* Search input with Firebase Studio styling */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search stats, players..."
            className="w-64 rounded bg-background-secondary py-1.5 pl-3 pr-8 text-sm text-text-secondary outline-none focus:ring-1 focus:ring-accent-blue"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg
              className="h-4 w-4 text-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Notification button with Firebase Studio styling */}
        <button className="rounded-full bg-background-secondary p-2 text-text-secondary hover:bg-opacity-80">
          <IoMdNotifications size={20} />
        </button>

        {/* Settings button with Firebase Studio styling */}
        <button className="rounded-full bg-background-secondary p-2 text-text-secondary hover:bg-opacity-80">
          <IoSettingsSharp size={20} />
        </button>

        {/* Profile button with gradient from Firebase Studio */}
        <button className="ml-2 rounded bg-gradient-primary px-4 py-1.5 text-sm font-medium text-black hover:opacity-90">
          PRO
        </button>
      </div>
    </header>
  );
};

export default Header;
