import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSideBar = () => {
    setCollapsed(!collapsed);
  };

  const links = [
    { name: 'Dashboard', path: '/' },
    { name: 'Settings', path: '/settings' },
    { name: 'Profile', path: '/profiles' }, // You wrote "profile" in lowercase, which is fine unless it's inconsistent with routing
  ];

  return (
    <div className={`bg-blue-700 text-white ${collapsed ? 'w-16' : 'w-60'} transition-all duration-300 p-4`}>
      <button onClick={toggleSideBar} className="mb-6 text-white">
        {collapsed ? <Menu /> : <X />}
      </button>
      <ul className="space-y-4">
        {links.map(link => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `block px-2 py-2 rounded ${isActive ? 'bg-blue-900' : 'hover:bg-blue-600'}`
              }
            >
              {collapsed ? link.name[0] : link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;