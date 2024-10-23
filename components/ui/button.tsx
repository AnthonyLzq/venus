import { type VariantProps, cva } from 'class-variance-authority'
import { TouchableOpacity } from 'react-native'

import { cn } from '@/utils/misc'

const buttonVariants = cva(
  'flex flex-row items-center justify-center rounded-6',
  {
    variants: {
      variant: {
        default: 'bg-purple-1 border border-purple-2',
        secondary: 'bg-purple-4 rounded-4',
        transparent: 'bg-background'
      },
      size: {
        default: 'w-[62%] !h-[6.65%]',
        md: 'h-10 px-4',
        sm: 'w-[57.5%] !h-[5.5%]',
        lg: 'h-16 px-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const buttonTextVariants = cva('text-center font-medium', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive-foreground',
      ghost: 'text-primary-foreground',
      link: 'text-primary-foreground underline'
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-xl'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {}

function Button({ children, className, variant, size, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </TouchableOpacity>
  )
}

export { Button, buttonVariants, buttonTextVariants }
