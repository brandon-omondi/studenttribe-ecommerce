// import React from 'react'

// interface SidebarBtnProps {
//     iconUrl: string;
//     buttonName: string;
//   }

// const SidebarBtn: React.FC<SidebarBtnProps> = ({ iconUrl, buttonName }) => {
//   return (
//     <>
//         <button className="w-[160px] h-10 py-4 px-3 rounded-[40px] justify-start items-center gap-2 inline-flex hover:bg-amber-400 hover:bg-opacity-50">
//             <div className="w-4 h-4  justify-center items-center flex">
//                 <div className="w-4 h-4 ">
//                     <img src={iconUrl} alt="" />
//                 </div>
//             </div>
//             <div className="text-zinc-100 text-base font-medium font-['Inter']">{buttonName}</div>
//             {/* <div className="grow shrink basis-0 text-zinc-100 text-base font-medium font-['Inter']">{buttonName}</div> */}
//         </button>
//     </>
//   )
// }

// SidebarBtn.propTypes = {}

// export default SidebarBtn


import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarBtnProps {
  iconUrl: string;
  buttonName: string;
  link?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SidebarBtn: React.FC<SidebarBtnProps> = ({ iconUrl, buttonName, link = '', onClick }) => {
  const buttonContent = (
    <button onClick={onClick} className="w-[160px] h-10 py-4 px-3 rounded-[40px] justify-start items-center gap-2 inline-flex hover:bg-amber-400 hover:bg-opacity-50">
      <div className="w-4 h-4 justify-center items-center flex">
        <img src={iconUrl} alt={`${buttonName} icon`} className="w-4 h-4" />
      </div>
      <div className="text-zinc-100 text-base font-medium font-['Inter']">
        {buttonName}
      </div>
    </button>
  );

  if (link) {
    return link.startsWith('http') ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    ) : (
      <Link to={link}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default SidebarBtn;


