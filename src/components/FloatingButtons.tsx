import React from "react";
import { constants, images } from "../resources";

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-16 right-4 z-50 flex items-end flex-col gap-2">
      <a
        href={`https://zalo.me/${constants.contact.zalo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0068FF] text-white p-3 rounded-full shadow-lg hover:bg-[#0052CC] transition-colors flex items-center justify-center w-[48px] h-[48px] animate-float"
        title="Chat on Zalo"
      >
        <img src={images.icons.zalo} alt="Zalo" className="w-6 h-6" />
      </a>

      <a
        href={`https://m.me/${constants.contact.messenger}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0084FF] text-white p-3 rounded-full shadow-lg hover:bg-[#0066CC] transition-colors flex items-center justify-center w-[48px] h-[48px] animate-float"
        title="Chat on Messenger"
      >
        <img src={images.icons.messenger} alt="Messenger" className="w-6 h-6" />
      </a>

      <a
        href={`tel:${constants.contact.phone}`}
        className="bg-[#4CAF50] text-white p-3 rounded-full shadow-lg hover:bg-[#3D8B40] transition-colors flex items-center gap-2 animate-float"
        title="Call us"
      >
        <span className="hidden md:inline">{constants.contact.phone}</span>
        <img src={images.icons.phone} alt="Phone" className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
