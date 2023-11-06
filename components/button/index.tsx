import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full bg-orange-300 px-4 py-2 font-semibold text-white transition hover:bg-orange-400',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
