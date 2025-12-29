import React from 'react';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  icon?: React.ReactNode;
  button?: {
    type: 'button' | 'submit' | 'reset';
    onClick: () => void;
    element: React.ReactNode;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  placeholder,
  icon,
  button,
  onChange
}) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div className="relative">
        {icon}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition"
        />
        {button && (
          <button
            type={button.type}
            onClick={button.onClick}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {button.element}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
