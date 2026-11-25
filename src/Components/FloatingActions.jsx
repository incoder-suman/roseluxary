
import React from "react";

const actions = [
  {
    id: "telegram",
    title: "Telegram",
    color: "#229ED9",
    link: "https://t.me/yourusername",
    icon: (
      <svg viewBox="0 0 24 24" width="25" height="25" fill="white">
        <path d="M21.9 3.2 18.7 20c-.2 1.2-.9 1.5-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6.1 13.6 1.2 12c-1.1-.3-1.1-1 .2-1.5L20.5 3c.9-.3 1.7.2 1.4 1.2Z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    color: "#25D366",
    link: "https://wa.me/919876543210",
    icon: (
      <svg viewBox="0 0 24 24" width="25" height="25" fill="white">
        <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.7a12 12 0 0 0 5.7 1.4h.1c6.5 0 11.8-5.3 11.8-11.9 0-3.1-1.2-6-3.4-8.3ZM12 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 0 1-1.5-5.2C2.2 6.5 6.6 2.1 12 2.1c2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.7-9.9 9.7Zm5.4-7.3c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.8 4.3.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.4Z" />
      </svg>
    ),
  },
];

export default function SideNavTabs() {
  return (
    <div className="fixed bottom-6 right-4 z-[99999] flex flex-col items-end gap-3 sm:bottom-8 sm:right-6">
      {actions.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.title}
          style={{ backgroundColor: item.color }}
          className="
            group flex h-[60px] w-[60px] min-w-[60px]
            items-center justify-start gap-3
            overflow-hidden rounded-full
            pl-[17px] text-white
            shadow-lg shadow-black/20
            transition-[width,box-shadow] duration-300 ease-in-out
            hover:w-[165px]
            focus-visible:w-[165px]
          "
        >
          <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center">
            {item.icon}
          </span>

          <span className="whitespace-nowrap text-sm font-semibold opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            {item.title}
          </span>
        </a>
      ))}
    </div>
  );
}
