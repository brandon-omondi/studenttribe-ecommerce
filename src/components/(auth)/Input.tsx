import React from "react";

interface InputProps{
    label: string;
    placeholder: string;
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputType?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'; // Optional
}
const Input: React.FC <InputProps>= ({label,placeholder, value, onChange,inputType = 'text'}) => {
    return(
        <>
        <div className="mb-3">
            <div className="text-gray-50 text-base font-medium font-['Inter'] leading-normal outline-none mb-3">{label}</div>
            <div className="w-full h-[46px] px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                <input
                  type={inputType}
                  placeholder={placeholder}
                  value={value}
                  onChange={onChange}
                  className="w-full h-full text-zinc-500 text-base font-normal font-['Inter'] leading-normal outline-none"
                />
            </div>
        </div>
        </>
    )
}

export default Input