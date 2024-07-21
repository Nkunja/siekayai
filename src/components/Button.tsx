import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, variant, onClick }) => {
  const baseClasses = "px-6 py-3 rounded-full font-semibold transition-colors"
  const variantClasses = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    secondary: "bg-white text-green-700 hover:bg-green-100"
  }

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button