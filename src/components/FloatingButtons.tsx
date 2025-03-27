import React from "react";
import { constants } from "../resources";
import zaloIcon from "../resources/images/icon-zalo.svg";
import messengerIcon from "../resources/images/icon-messenger.svg";
import phoneIcon from "../resources/images/icon-call.svg";

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-end flex-col gap-2">
      {/* Zalo Button */}
      <a
        href={`https://zalo.me/${constants.contact.zalo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0068FF] text-white p-3 rounded-full shadow-lg hover:bg-[#0052CC] transition-colors flex items-center justify-center w-[48px] h-[48px]"
        title="Chat on Zalo"
      >
        <img src={zaloIcon} alt="Zalo" className="w-6 h-6" />
      </a>

      {/* Messenger Button */}
      <a
        href={`https://m.me/${constants.contact.messenger}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0084FF] text-white p-3 rounded-full shadow-lg hover:bg-[#0066CC] transition-colors flex items-center justify-center w-[48px] h-[48px]"
        title="Chat on Messenger"
      >
        <img src={messengerIcon} alt="Messenger" className="w-6 h-6" />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${constants.contact.phone}`}
        className="bg-[#4CAF50] text-white p-3 rounded-full shadow-lg hover:bg-[#3D8B40] transition-colors flex items-center gap-2"
        title="Call us"
      >
        <span className="hidden md:inline">{constants.contact.phone}</span>
        <img src={phoneIcon} alt="Phone" className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
