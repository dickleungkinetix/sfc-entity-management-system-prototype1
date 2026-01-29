import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Search, ChevronDown } from 'lucide-react';
import svgPaths from '../imports/svg-v36n2o3enp';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface SearchBarProps {
  onSearch: (query: string) => void;
  aiAskEnabled: boolean;
  setAiAskEnabled: (enabled: boolean) => void;
}

const SEARCH_OPTIONS = [
  'All',
  'Name',
  'Email',
  'Address',
  'CE Ref No.',
  'Phone',
  'Case No.',
  'Id No.',
];

export function SearchBar({ onSearch, aiAskEnabled, setAiAskEnabled }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTypes, setSearchTypes] = useState<string[]>(['All']);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  const toggleSearchType = (type: string) => {
    setSearchTypes((prev) => {
      if (type === 'All') {
        return ['All'];
      }
      let newTypes = prev.filter((t) => t !== 'All');
      if (newTypes.includes(type)) {
        newTypes = newTypes.filter((t) => t !== type);
      } else {
        newTypes.push(type);
      }
      return newTypes.length === 0 ? ['All'] : newTypes;
    });
  };

  const getDisplayValue = () => {
    if (searchTypes.includes('All')) return 'All';
    if (searchTypes.length === 1) return searchTypes[0];
    return `${searchTypes.length} selected`;
  };

  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[20px] pr-[10px] pt-[6px] relative shrink-0 w-full">
      <div className="h-[52px] relative rounded-[50px] shrink-0 w-full pt-[0px] pr-[-48px] pb-[0px] pl-[0px]">
        <div className="absolute border-2 border-[#04ecd3] inset-0 pointer-events-none rounded-[50px] shadow-[0px_0px_5.4px_0px_#17d9d1]" />
        
        <div className="absolute h-[50px] left-px right-[29px] rounded-bl-[50px] rounded-tl-[50px] top-px">
          {/* AI Icon */}
          {aiAskEnabled && (
            <div className="absolute left-[9px] top-[7px] size-[36px]">
              <div className="absolute inset-[-15%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47">
                  <g filter="url(#filter0_d_1_7036)">
                    <circle cx="23.4" cy="23.4" fill="url(#paint0_linear_1_7036)" r="18" />
                    <circle cx="23.4" cy="23.4" r="17.5" stroke="url(#paint1_linear_1_7036)" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.8" id="filter0_d_1_7036" width="46.8" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2.7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.85098 0 0 0 0 0.819608 0 0 0 1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7036" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_7036" mode="normal" result="shape" />
                    </filter>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7036" x1="9.14497" x2="82.3839" y1="-4.37143" y2="24.0562">
                      <stop stopColor="#08E6D4" />
                      <stop offset="0.3125" stopColor="#4C53B1" />
                      <stop offset="0.4375" stopColor="#673582" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_7036" x1="5.76242" x2="42.0254" y1="10.0286" y2="11.8328">
                      <stop stopColor="#04ECD3" />
                      <stop offset="1" stopColor="#B533C5" stopOpacity="0.69" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute inset-[25%_15%_26%_1.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 23">
                  <path clipRule="evenodd" d={svgPaths.pf823c00} fill="white" fillOpacity="0.9" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          )}

          {/* Search Input Area */}
          <div className={`absolute content-stretch flex items-center top-px right-0 ${aiAskEnabled ? 'left-[50px]' : 'left-px'}`}>
            {/* Input Area */}
            <div className="basis-0 grow h-[48px] min-h-px min-w-px relative">
              <div className="size-full">
                <div className="box-border content-stretch flex h-[48px] items-start px-[0px] relative w-full py-[6px]">
                  <div className="box-border content-stretch flex gap-[10px] h-full items-center px-[10px] py-0 relative w-full">
                    {/* Search Type Selector */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="bg-white box-border content-stretch flex items-start p-[4px] relative rounded-[2px] shrink-0 border border-[#d9d9d9] cursor-pointer hover:bg-gray-50">
                          <div className="bg-neutral-100 relative rounded-[2px] shrink-0 border border-[#f0f0f0]">
                            <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip pl-[8px] pr-[4px] py-[2px] relative rounded-[inherit]">
                              <p className="font-['Roboto',sans-serif] leading-[20px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.85)] text-nowrap whitespace-pre">
                                {getDisplayValue()}
                              </p>
                              <ChevronDown className="h-3 w-3 text-[rgba(0,0,0,0.45)]" />
                            </div>
                          </div>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-56">
                        {SEARCH_OPTIONS.map((option) => (
                          <DropdownMenuCheckboxItem
                            key={option}
                            checked={searchTypes.includes(option)}
                            onCheckedChange={() => toggleSearchType(option)}
                          >
                            {option}
                          </DropdownMenuCheckboxItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Search Input */}
                    <div className="content-stretch flex gap-[10px] items-center justify-center relative grow min-w-0">
                      <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative text-[#bfbfbf] text-[14px] w-full">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                          placeholder="Search entities by name, reference number, or type..."
                          className="leading-[22px] w-full border-0 outline-none bg-transparent placeholder:text-[#bfbfbf] focus:placeholder-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clear Button */}
            {searchQuery && (
              <button onClick={handleClear} className="hover:opacity-70 shrink-0">
                <X className="h-[14.932px] w-[14.884px] text-[#696969]" />
              </button>
            )}

            {/* AI ASK Toggle */}
            <div className="box-border content-stretch flex gap-[9px] items-center px-[14px] py-0 relative shrink-0">
              <div className="flex items-center justify-center leading-[0] relative shrink-0">
                <p className="font-['Roboto',sans-serif] leading-[22px] relative text-[14px] text-[rgba(0,0,0,0.85)] text-nowrap text-right whitespace-pre">
                  AI ASK
                </p>
              </div>
              <button
                onClick={() => setAiAskEnabled(!aiAskEnabled)}
                className={`box-border content-stretch flex h-[22px] items-center px-[2px] py-[2px] relative rounded-[16px] shrink-0 w-[44px] transition-colors ${
                  aiAskEnabled ? 'bg-[#128c88] justify-end' : 'bg-gray-300 justify-start'
                }`}
              >
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  className="overflow-clip relative rounded-[77px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] shrink-0 size-[18px]"
                >
                  <div className="absolute bg-white inset-0 rounded-[16px]" />
                </motion.div>
              </button>
            </div>

            {/* Search Button */}
            <div className="bg-[#128c88] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[5px] relative rounded-[100px] shrink-0 w-[114px] border border-[#f0f0f0] cursor-pointer hover:bg-[#0f7773] transition-colors p-[5px]" onClick={handleSearch}>
              <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                <p className="basis-0 font-['Roboto',sans-serif] grow h-[22px] leading-[22px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white">
                  Search
                </p>
              </div>
            </div>

            {/* Save History Button */}
            <div className="bg-[rgb(129,129,129)] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[5px] relative rounded-[100px] shrink-0 w-[134px] border border-[#f0f0f0] cursor-pointer hover:bg-[#0f7773] transition-colors mx-[6px] my-[0px] p-[5px]" onClick={() => console.log('Save History clicked')}>
              <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                <p className="basis-0 font-['Roboto',sans-serif] grow h-[22px] leading-[22px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white">
                  Save History
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
