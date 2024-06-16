import React, { Fragment } from 'react';
import './dropdown.css';
import { Popover, Transition } from '@headlessui/react';
import {
  HiArrowPath,
  HiOutlineChartPie,
  HiOutlineCursorArrowRays,
  HiFingerPrint,
  HiOutlineSquaresPlus,
  HiOutlineBuildingStorefront
} from 'react-icons/hi2';
import { FaChevronDown, FaPhone, FaCirclePlay } from 'react-icons/fa6';

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: 'analytics', icon: HiOutlineChartPie },
  { name: 'Store', description: 'Browse and purchase our products online (BETA) WIP', href: 'http://store.poschh.com/', icon: HiOutlineBuildingStorefront },
  // { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: HiOutlineCursorArrowRays },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: 'security', icon: HiFingerPrint },
  // { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: HiOutlineSquaresPlus },
  // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: HiArrowPath },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: FaCirclePlay },
  { name: 'Contact sales', href: '#', icon: FaPhone },
];

export const Dropdown = () => {
  return (
    <div className="flex justify-center items-center md:w-[150px]  w-[50px] min-h-screen px-auto dropdown-dency">
      <Popover className="relative flex mx-auto">
        <Popover.Button id='solution' className="bg-[#141318] flex flex-row items-center px-auto text-md font-semibold h-[50px] text-[#E5E1E9]">
          <span className='mr-2 xs:text-[10px]'>Solutions</span>
          <FaChevronDown className="h-3 w-3 text-white my-auto" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 mt-2 w-screen max-w-md left-1/2 transform -translate-x-1/2 px-4 sm:px-0">
            <div className="overflow-hidden rounded-3xl bg-[#141318] text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {solutions.map((item) => (
                  <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-[#C7BFFF]">
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-transparent">
                      <item.icon className="h-6 w-6 text-[#E5E1E9] group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className='text-[#E5E1E9] hover:text-[#2F285F]'>
                      <a href={item.href} className="font-semibold">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-[#C7BFFF]">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-[#2F285F] hover:opacity-80"
                  >
                    <item.icon className="h-5 w-5 flex-none text-[#2F285F]" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div> */}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
