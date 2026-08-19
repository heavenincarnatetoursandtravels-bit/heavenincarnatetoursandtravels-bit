import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
      primary: 'bg-[#0F4C81] text-white hover:bg-[#0c3d67] focus:ring-[#0F4C81]',
      secondary: 'bg-[#3FA9F5] text-white hover:bg-[#3287c4] focus:ring-[#3FA9F5]',
      gold: 'bg-[#D4AF37] text-white hover:bg-[#b5952f] focus:ring-[#D4AF37]',
      whatsapp: 'bg-[#25D366] text-white hover:bg-[#128C7E] focus:ring-[#25D366]',
      outline: 'border-2 border-[#0F4C81] text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white focus:ring-[#0F4C81]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <Link 
          href={href} 
          className={classes}
          {...(props.target ? { target: props.target } : {})}
          {...(props.rel ? { rel: props.rel } : {})}
        >
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
