import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: 'default' | 'glass' | 'outline';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl p-6 transition-all duration-300",
          variant === 'default' && "bg-white shadow-sm border border-gray-100 hover:shadow-md",
          variant === 'glass' && "glass-card",
          variant === 'outline' && "bg-transparent border-2 border-gray-200 hover:border-primary/30",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

interface CardHeaderProps extends React.ComponentPropsWithoutRef<'div'> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mb-4", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

interface CardTitleProps extends React.ComponentPropsWithoutRef<'h3'> {}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h3 ref={ref} className={cn("text-lg font-heading font-bold text-gray-900", className)} {...props}>
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = "CardTitle";

interface CardContentProps extends React.ComponentPropsWithoutRef<'div'> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("text-gray-600 text-sm leading-relaxed", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";
