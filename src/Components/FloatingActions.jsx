import React from "react";

const actions = [
  {
    id: "find-school",
    title: "Telegtam",
    color: "#38AADC", // Sky Blue
    link: "/find-school",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
      </svg>
    ),
  },
  // {
  //   id: "admissions",
  //   title: "On Call",
  //   color: "#FA9D49", // Warm Orange
  //   link: "/admissions",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-9 w-9">
  //       <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
  //       <polyline points="14 2 14 8 20 8" />
  //       <line x1="16" y1="13" x2="8" y2="13" />
  //       <line x1="16" y1="17" x2="8" y2="17" />
  //       <polyline points="10 9 9 9 8 9" />
  //       <path d="M10.4 12.6l1.2 1.2 2.4-2.4" />
  //     </svg>
  //   ),
  // },
//   {
//     id: "franchise",
//     title: "Franchise",
//     color: "#67B5AC", // Mint / Teal
//     link: "/franchise",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
//         <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
//         <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
//         <line x1="6" y1="1" x2="6" y2="4" />
//         <line x1="10" y1="1" x2="10" y2="4" />
//         <line x1="14" y1="1" x2="14" y2="4" />
//       </svg>
//     ),
//   },
  {
    id: "whatsapp",
    title: "WhatsApp",
    color: "#6ac767", // Blue Slate
    link: "https://wa.me/919876543210",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9">
        <path d="M12.011 2c-5.506 0-9.989 4.478-9.99 9.984a9.94 9.94 0 0 0 1.333 4.993L2 22l5.233-1.237a9.96 9.96 0 0 0 4.777 1.221h.005c5.505 0 9.988-4.478 9.989-9.984a9.96 9.96 0 0 0-2.92-7.062A9.92 9.92 0 0 0 12.011 2zm5.825 14.161c-.247.696-1.444 1.328-1.996 1.389-.515.056-1.176.08-1.895-.15-1.156-.37-2.612-1.077-3.805-2.27-1.189-1.188-1.896-2.64-2.266-3.797-.23-.718-.206-1.378-.15-1.894.06-.552.693-1.748 1.389-1.995.228-.081.434-.055.597.108.175.176.592.836.786 1.153.078.128.096.255.018.397-.084.153-.162.292-.294.432-.132.14-.247.24-.367.373-.105.117-.118.232-.016.41.227.397.72 1.054 1.365 1.7.647.646 1.303 1.139 1.7 1.366.177.102.292.089.409-.016.133-.12.233-.235.373-.367.14-.132.279-.21.432-.294.142-.078.269-.06.397.018.317.194.977.611 1.153.786.163.163.189.369.108.597z" />
      </svg>
    ),
  },
];

export default function SideNavTabs() {
  return (
    <div className="fixed right-0 top-1/2 z-[9999] flex -translate-y-1/2 flex-col gap-1.5">
      {actions.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          style={{ backgroundColor: item.color }}
          className="
            group relative flex h-[115px] w-[50px]
            items-center justify-center
            overflow-hidden rounded-l-2xl text-white shadow-md
            transition-all duration-300 ease-in-out
            hover:w-[125px] hover:shadow-xl
            focus-within:w-[125px]
          "
        >
          {/* Collapsed State: Vertical Text Only */}
          <span
            className="
              whitespace-nowrap text-base font-semibold tracking-wide
              [writing-mode:vertical-rl] rotate-180
              transition-opacity duration-200
              group-hover:opacity-0 group-focus-within:opacity-0
            "
          >
            {item.title}
          </span>

          {/* Expanded State: Icon + Horizontal Text */}
          <div
            className="
              absolute inset-0 flex flex-col items-center justify-center gap-1
              px-2 opacity-0 transition-opacity duration-300
              group-hover:opacity-100 group-focus-within:opacity-100
            "
          >
            <span className="shrink-0 transition-transform duration-300 group-hover:scale-105">
              {item.icon}
            </span>
            <span className="whitespace-nowrap text-center text-xs font-bold leading-tight tracking-wide">
              {item.title}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}