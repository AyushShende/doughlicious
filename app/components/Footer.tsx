import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-gradient-to-b from-primary-200 to-primary-100 md:px-20 md:py-10">
      <div className="md:flex gap-16 ">
        <div className="mb-4 flex-1">
          <h2 className="font-bold text-2xl mb-2">DoughLicious</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            natus hic sint, officiis ullam magnam nisi nostrum provident maiores
            nulla.
          </p>
          <div className="flex gap-4">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaInstagramSquare />
            </span>
            <span>
              <FaLinkedin />
            </span>
          </div>
        </div>
        <div className="mb-4 flex-1">
          <h3 className="font-semibold text-xl mb-2">Contact Info</h3>
          <p>+91 724 192 16424</p>
          <p>doughlicious@email.com</p>
          <p>3000 Tony Street, Stark tower, Asgard</p>
        </div>
        <div className="mb-4 flex-1">
          <h3 className="font-semibold text-xl mb-2">Opening Hours</h3>
          <p>Monday-Friday: 08:00-22:00</p>
          <p>Thursday: 08:00-16:00</p>
          <p>Saturday: 10:00- Till Midnight</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 md:text-center">
        &#169; 2023 Ayush Shende All Rights Reserved
      </p>
    </footer>
  );
};
export default Footer;
