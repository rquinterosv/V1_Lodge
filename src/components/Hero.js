import React, {Component} from "react";
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import img1 from './img/img1.jpg';
// import img3 from './img/img3.jpg';
import img4 from '../img/img4.jpg';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"> 

                <div>
                    <span className="block xl:inline text-verde">Bienvenidos a</span>
                </div>
                <span className="block text-celeste xl:inline">Lodge las Cascadas</span>
              </h1>
              <p className="mt-3 text-base text-azul sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Incertos en un bosque nativo, a orillas del lago Llanquihue y a los pies del volcan Osorno, te invamos a disfurtar de de una experiencia natural
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://lodgelascascadas.cl/"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-verde px-8 py-3 text-base font-medium text-azul hover:bg-azul hover:text-verde md:py-4 md:px-10 md:text-lg"
                  >
                    Reservar
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-2  bg-white px-8 py-3 text-azul font-medium text-indigo-700 hover:bg-celeste md:py-4 md:px-10 md:text-lg opacity-70"
                  >
                    ¡Contáctanos!
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={img4}
          alt=""
        />
      </div>
    </div>
  )
}