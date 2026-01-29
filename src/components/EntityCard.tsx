import { useState } from 'react';
import { Star, Eye, Edit, Trash2 } from 'lucide-react';

interface EntityCardProps {
  id: string;
  nameChinese: string;
  nameEnglish: string;
  refNumber: string;
  incorporation: string;
  phone: string;
  email: string;
  unit: string;
  address: string;
  classification: string;
  status: string;
  isFavorite?: boolean;
  onViewClick?: (id: string) => void;
}

export function EntityCard({
  id,
  nameChinese,
  nameEnglish,
  refNumber,
  incorporation,
  phone,
  email,
  unit,
  address,
  classification,
  status,
  isFavorite = false,
  onViewClick,
}: EntityCardProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const handleViewClick = () => {
    if (onViewClick) {
      onViewClick(id);
    }
  };

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[5px] h-full items-start pb-[5px] pt-[11px] px-[15px] relative rounded-[11.877px] shrink-0 w-full border border-white shadow-[0px_0px_4.751px_0px_rgba(0,0,0,0.23)] hover:shadow-[0px_0px_8px_0px_rgba(0,0,0,0.3)] transition-shadow">
      {/* Name and Star */}
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0">
          <div className="flex flex-col font-['Cairo',sans-serif] h-[18px] justify-center leading-[0] relative shrink-0 text-[#252525] text-[14px] w-full">
            <p className="leading-[normal] truncate">{nameChinese}</p>
          </div>
          <p className="font-['Cairo',sans-serif] leading-[normal] relative shrink-0 text-[#72898d] text-[12px] w-full truncate font-[Roboto]">
            {nameEnglish}
          </p>
        </div>
        <button
          onClick={toggleFavorite}
          className="relative shrink-0 size-[18.75px] hover:scale-110 transition-transform"
        >
          <Star
            className={`w-full h-full ${favorite ? 'fill-[#FFBB00] text-[#FFBB00]' : 'fill-[#D0D0D0] text-[#D0D0D0]'}`}
          />
        </button>
      </div>

      {/* Details Grid */}
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        <div className="grid grid-cols-2 gap-y-[4px] w-full">
          <div className="bg-[#f9f9f9] h-[21.688px] col-span-1">
            <div className="flex flex-col font-['Roboto',sans-serif] h-full justify-center px-[7px] relative text-[#128c88] text-[12px]">
              <p className="leading-[normal]">Ref : {refNumber}</p>
            </div>
          </div>
          <div className="bg-[#f9f9f9] h-[21.688px] col-span-1">
            <div className="flex flex-col font-['Roboto',sans-serif] h-full justify-center px-[7px] relative text-[#128c88] text-[12px]">
              <p className="leading-[normal]">Inc: {incorporation}</p>
            </div>
          </div>
          <div className="bg-[#f9f9f9] h-[21.688px] col-span-1">
            <div className="flex flex-col font-['Roboto',sans-serif] h-full justify-center px-[7px] relative text-[#128c88] text-[12px]">
              <p className="leading-[normal] truncate">{phone}</p>
            </div>
          </div>
          <div className="bg-[#f9f9f9] h-[21.688px] col-span-1">
            <div className="flex flex-col font-['Roboto',sans-serif] h-full justify-center px-[7px] relative text-[#128c88] text-[12px]">
              <p className="leading-[normal]">Unit : {unit}</p>
            </div>
          </div>
        </div>
        <div className="bg-[#f9f9f9] h-[22px] w-full">
          <div className="flex flex-col font-['Roboto',sans-serif] h-full justify-center px-[7px] relative text-[#128c88] text-[12px]">
            <p className="leading-[normal] truncate">Email : {email}</p>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
        <p className="font-['Cairo',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#72898d] text-[12px] w-full truncate">
          {address}
        </p>
      </div>

      {/* Bottom Section: Badges and Actions */}
      <div className="absolute bottom-[12.67px] content-stretch flex gap-[10px] h-[26px] items-end left-[15px] right-[15px]">
        {/* Badges */}
        <div className="basis-0 content-stretch flex gap-[9px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <div className="basis-0 bg-neutral-100 grow h-[20.139px] min-h-px min-w-px relative rounded-[5.938px] border border-[#e6e6e6]">
            <div className="flex flex-row items-center justify-center">
              <div className="box-border content-stretch flex gap-[5.938px] h-[20.139px] items-center justify-center px-[4.563px] py-px relative">
                <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[10px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[normal]">{classification}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`basis-0 grow h-[20.139px] min-h-px min-w-px relative rounded-[5.938px] ${
            status === 'Active' ? 'bg-[#49960f]' : 'bg-gray-400'
          }`}>
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[5.938px] h-[20.139px] items-center justify-center px-[3.563px] py-0 relative w-full">
                <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#f8fff3] text-[10px] text-center">
                  <p className="leading-[normal]">{status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Icons */}
        <div className="content-stretch flex gap-[18px] items-center justify-center relative shrink-0">
          <button className="hover:scale-110 transition-transform" onClick={handleViewClick}>
            <Eye className="w-[23.165px] h-[13.899px] text-[#A3A3A3]" />
          </button>
          <button className="hover:scale-110 transition-transform">
            <Edit className="w-[16.278px] h-[16.279px] text-[#A3A3A3]" />
          </button>
          <button className="hover:scale-110 transition-transform">
            <Trash2 className="w-[15.443px] h-[17.373px] text-[#FF0000]" />
          </button>
        </div>
      </div>
    </div>
  );
}
