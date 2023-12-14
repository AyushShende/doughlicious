import { BiLoaderCircle } from 'react-icons/bi';

import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

export default function Button({
  children,
  className,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-lg bg-orange-300 px-4 py-2 font-semibold flex justify-center items-center gap-2 text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:bg-orange-200',
        className
      )}
      {...props}
    >
      {isLoading && (
        <BiLoaderCircle className="animate-spin font-extrabold" size={22} />
      )}
      {children}
    </button>
  );
}
