import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';

import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="bg-orange-500 max-container text-white">
      <div className="px-6 py-10 mx-auto grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Logo and About */}
        <div className="space-y-4">
          <Logo />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            natus hic sint, officiis ullam magnam nisi nostrum provident maiores
            nulla.
          </p>
          <div className="flex gap-4">
            <FaFacebook size={24} />
            <FaTwitter size={24} />
            <FaInstagramSquare size={24} />
            <FaLinkedin size={24} />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-3 text-xl font-semibold">Contact Info</h4>
          <p className="text-sm">+91 724 192 16424</p>
          <p className="text-sm">doughlicious@email.com</p>
          <p className="text-sm">3000 Tony Street, Stark Tower, Asgard</p>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="mb-3 text-xl font-semibold">Opening Hours</h4>
          <p className="text-sm">Monday-Friday: 08:00-22:00</p>
          <p className="text-sm">Thursday: 08:00-16:00</p>
          <p className="text-sm">Saturday: 10:00-Till Midnight</p>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm font-thin py-4">
        &#169; 2023 Ayush Shende All Rights Reserved.
      </p>
    </footer>
  );
}
