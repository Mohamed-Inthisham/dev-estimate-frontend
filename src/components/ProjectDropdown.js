import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';

const ProjectDropdown = () => {
  const [selectedProject, setSelectedProject] = useState('Select Project');

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex items-center justify-between gap-x-2 rounded-md bg-white w-[400px] px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400">
          {selectedProject} <FiChevronDown className="h-8 w-20 text-gray-400 flex items-end justify-end" />
        </MenuButton>
      </div>
      <MenuItems className="absolute left-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                onClick={() => handleSelectProject('TechVision')}
                className={`block px-4 py-2 text-sm ${
                  selectedProject === 'TechVision'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                }`}
              >
                TechVision
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                onClick={() => handleSelectProject('CodeForge')}
                className={`block px-4 py-2 text-sm ${
                  selectedProject === 'CodeForge'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                }`}
              >
                CodeForge
              </a>
            )}
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                onClick={() => handleSelectProject('AppSpectrum')}
                className={`block px-4 py-2 text-sm ${
                  selectedProject === 'AppSpectrum'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                }`}
              >
                AppSpectrum
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                onClick={() => handleSelectProject('NexusTech')}
                className={`block px-4 py-2 text-sm ${
                  selectedProject === 'NexusTech'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                }`}
              >
                NexusTech
              </a>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default ProjectDropdown;
