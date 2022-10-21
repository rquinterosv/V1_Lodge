import React, {Component} from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../img/logo.png'

const navigation = [
  { name: 'Inicio', href: '#', current: true },
  { name: 'Ubicación', href: '#', current: false },
  { name: 'Servicios', href: '#', current: false },
  { name: 'Habitaciones', href: '#', current: false },
  { name: 'Contacto', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

class Navbar extends Component {
    render(){ 
        const logos1 = {
            width: '70px',
            height: '70px', 
        };

        const logos2 = {
            width: '70px',
            height: '70px',
        };

        return (
            <Disclosure as="nav" className="bg-azul">
            {({ open }) => (
                <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>

                    <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start mx-5">
                        <div className="flex flex-shrink-0 items-center">
                        <img
                            className="block h-8 w-auto lg:hidden mt-3"
                            src={logo}
                            alt="Your Company"
                            style={logos1}
                        />
                        <img
                            className="hidden h-8 w-auto lg:block mt-3"
                            src={logo}
                            alt="Your Company"
                            style={logos2}
                        />
                        </div>
                        <div className="hidden sm:ml-6 sm:block mt-5">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </Disclosure.Button>
                    ))}
                    </div>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        )
      }
    }
export default Navbar;