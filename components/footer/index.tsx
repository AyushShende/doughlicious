import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';

import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="padding-y padding-x max-container bg-orange-500 text-white">
      <div className="gap-10 grid md:grid-cols-3 mb-2">
        <div className="space-y-4">
          <Logo />
          <p>
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
        <div>
          <h4 className="mb-3 text-xl font-semibold">Contact Info</h4>
          <p>+91 724 192 16424</p>
          <p>doughlicious@email.com</p>
          <p>3000 Tony Street, Stark tower, Asgard</p>
        </div>
        <div>
          <h4 className="mb-3 text-xl font-semibold">Opening Hours</h4>
          <p>Monday-Friday: 08:00-22:00</p>
          <p>Thursday: 08:00-16:00</p>
          <p>Saturday: 10:00- Till Midnight</p>
        </div>
      </div>
      <p className="font-thin md:text-center md:text-sm">
        &#169; 2023 Ayush Shende All Rights Reserved.
      </p>
    </footer>
  );
}
