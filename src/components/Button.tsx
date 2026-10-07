import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  children: React.ReactNode;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  icon = false,
  className = '',
  ...props
}) => {
  if (variant === 'link') {
    return (
      <button
        type="button"
        className={`text-link ${className}`}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          font: 'inherit',
          cursor: 'pointer',
        }}
        {...props}
      >
        <span>{children}</span>
        {icon && <ArrowRight size={14} strokeWidth={1.5} />}
      </button>
    );
  }

  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button className={`${baseClass} ${className}`} {...props}>
      <span>{children}</span>
      {icon && <ArrowRight size={16} strokeWidth={1.5} />}
    </button>
  );
};

export const TextLink: React.FC<{
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  className?: string;
}> = ({ href, children, isExternal = false, className = '' }) => {
  return (
    <a
      href={href}
      className={`text-link ${className}`}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span>{children}</span>
      <ArrowRight size={14} strokeWidth={1.5} />
    </a>
  );
};
