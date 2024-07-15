import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';


const FeatureDropdown = () => {
    const [selectedFeature, setSelectedFeature] = useState('Select Feature');

    const handleSelectFeature = (feature) => {
        setSelectedFeature(feature);
    };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex items-center justify-between gap-x-2 rounded-md bg-white w-[400px] px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400">
          {selectedFeature} <FiChevronDown className="h-8 w-20 text-gray-400 flex items-end justify-end" />
        </MenuButton>
      </div>
      <MenuItems className="absolute left-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                onClick={() => handleSelectFeature('TechVision')}
                className={`block px-4 py-2 text-sm ${
                    selectedFeature === 'TechVision'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                }`}
              >
                User Authentication and Access Control
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                onClick={() => handleSelectFeature('CodeForge')}
                className={`block px-4 py-2 text-sm ${
                    selectedFeature === 'CodeForge'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                }`}
              >
                Data Encryption and Security
              </a>
            )}
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                onClick={() => handleSelectFeature('AppSpectrum')}
                className={`block px-4 py-2 text-sm ${
                    selectedFeature === 'AppSpectrum'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                }`}
              >
                Monitoring and Logging
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="#"
                onClick={() => handleSelectFeature('NexusTech')}
                className={`block px-4 py-2 text-sm ${
                    selectedFeature === 'NexusTech'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700'
                }`}
              >
                Integration and APIs
              </a>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}

export default FeatureDropdown
