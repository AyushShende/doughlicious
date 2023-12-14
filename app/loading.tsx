import { BiLoaderAlt } from 'react-icons/bi';

export default function loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <BiLoaderAlt className="animate-spin" size={84} />
    </div>
  );
}
