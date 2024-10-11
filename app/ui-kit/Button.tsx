import React from "react";


export const PrimaryButton = ({children, onClick} : {
    children: React.ReactNode,
    onClick: () => void
}) => {
    return <button className="border pt-3 pb-3 pr-8 pl-8 rounded-full bg-[#eee3e0] text-lg text-black font-medium"
        onClick={onClick}>
         {children}
    </button>
}

export const SecondaryButton = ({children, onClick} : {
    children: React.ReactNode,
    onClick: () => void
}) => {
    return <button className="border-2 pt-3 pb-3 pr-8 pl-8 rounded-full text-lg font-medium"
        onClick={onClick}>
            {children}    
    </button>
}




