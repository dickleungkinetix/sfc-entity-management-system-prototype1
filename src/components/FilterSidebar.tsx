import { useState } from 'react';
import { ChevronDown, ChevronUp, X, Check, Search } from 'lucide-react';
import svgPaths from '../imports/svg-v36n2o3enp';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';

interface FilterOption {
  id: string;
  label: string;
  count: number;
  checked: boolean;
}

interface FilterCategory {
  id: string;
  title: string;
  options: FilterOption[];
  expanded: boolean;
}

interface FilterSidebarProps {
  onFiltersChange: (filters: any) => void;
}

export function FilterSidebar({ onFiltersChange }: FilterSidebarProps) {
  const [selectedTags, setSelectedTags] = useState(['Email', 'Phone']);
  const [allExpanded, setAllExpanded] = useState(false);
  const [searchTypes, setSearchTypes] = useState<string[]>([]);
  const [filterSearchValue, setFilterSearchValue] = useState('');
  
  const searchTypeOptions = ['All', 'Name', 'Email', 'Address', 'CE Ref No.', 'Phone', 'Case No.', 'Id No.'];
  
  const toggleSearchType = (type: string) => {
    setSearchTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };
  
  const getDisplayText = () => {
    if (searchTypes.length === 0) return 'All';
    if (searchTypes.length === 1) return searchTypes[0];
    return `${searchTypes.length} selected`;
  };
  
  const [categories, setCategories] = useState<FilterCategory[]>([
    {
      id: 'classification',
      title: 'Classification',
      expanded: true,
      options: [
        { id: 'individual', label: 'Individual', count: 6, checked: true },
        { id: 'corporate', label: 'Corporate', count: 5, checked: false },
        { id: 'product', label: 'Product', count: 3, checked: false },
        { id: 'abstract', label: 'Actual/abstract objects', count: 2, checked: false },
      ],
    },
    {
      id: 'group',
      title: 'Group',
      expanded: true,
      options: [
        { id: 'licensed', label: 'Licensed', count: 7, checked: true },
        { id: 'non-licensed', label: 'Non-licensed', count: 4, checked: false },
      ],
    },
    {
      id: 'status',
      title: 'Licence/Registration status',
      expanded: true,
      options: [
        { id: 'active', label: 'Active', count: 5, checked: true },
        { id: 'inactive', label: 'Inactive', count: 6, checked: false },
      ],
    },
    {
      id: 'type',
      title: 'Licence type',
      expanded: true,
      options: [
        { id: 'sfo', label: 'SFO', count: 4, checked: true },
        { id: 'amlo', label: 'AMLO', count: 6, checked: false },
        { id: 'sfo-amlo', label: 'SFO and AMLO', count: 2, checked: false },
      ],
    },
    {
      id: 'activities',
      title: 'Regulated Activities',
      expanded: true,
      options: [
        { id: 'ra1', label: 'RA1', count: 4, checked: false },
        { id: 'ra2', label: 'RA2', count: 3, checked: false },
        { id: 'ra3', label: 'RA3', count: 0, checked: false },
        { id: 'ra4', label: 'RA4', count: 3, checked: false },
        { id: 'ra5', label: 'RA5', count: 0, checked: false },
        { id: 'ra6', label: 'RA6', count: 0, checked: false },
        { id: 'ra7', label: 'RA7', count: 3, checked: false },
        { id: 'ra8', label: 'RA8', count: 0, checked: false },
        { id: 'ra9', label: 'RA9', count: 3, checked: false },
        { id: 'ra10', label: 'RA10', count: 0, checked: false },
        { id: 'ra13', label: 'RA13', count: 0, checked: false },
      ],
    },
  ]);

  const toggleCategory = (categoryId: string) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId ? { ...cat, expanded: !cat.expanded } : cat
      )
    );
  };

  const toggleOption = (categoryId: string, optionId: string) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? {
              ...cat,
              options: cat.options.map(opt =>
                opt.id === optionId ? { ...opt, checked: !opt.checked } : opt
              ),
            }
          : cat
      )
    );
    
    // Notify parent of filter changes
    onFiltersChange(categories);
  };

  const expandAll = () => {
    setCategories(prev => prev.map(cat => ({ ...cat, expanded: true })));
    setAllExpanded(true);
  };

  const collapseAll = () => {
    setCategories(prev => prev.map(cat => ({ ...cat, expanded: false })));
    setAllExpanded(false);
  };

  const removeTag = (tag: string) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-full items-start pb-[14px] pl-0 pr-[6px] pt-[17px] relative shrink-0 border-r border-[#e8e8e8] w-full max-w-[232px]">
      {/* Filter Title and Tags */}
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[9px] pt-0 px-0 relative shrink-0 w-full px-4">
        <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center text-nowrap">
          <p className="leading-[22px] whitespace-pre">Filter Results</p>
        </div>
        
        {/* Selected Tags */}
        <div className="bg-white h-[32px] relative rounded-[2px] shrink-0 w-full border border-[#d9d9d9]">
          <div className="bg-clip-padding border-0 box-border content-stretch flex h-[32px] items-center p-[4px] relative w-full">
            <Popover>
              <PopoverTrigger asChild>
                <button className="bg-white box-border content-stretch flex items-center justify-between w-full h-full px-[8px] py-[2px] relative rounded-[2px] hover:bg-gray-50 transition-colors">
                  <p className="font-['Roboto',sans-serif] leading-[20px] relative text-[12px] text-[rgba(0,0,0,0.85)] text-nowrap whitespace-pre">
                    {getDisplayText()}
                  </p>
                  <ChevronDown className="h-[12px] w-[12px] text-black/45" />
                </button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-[200px] p-0">
                <div className="py-1">
                  {searchTypeOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => toggleSearchType(option)}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-['Roboto',sans-serif] text-[14px] text-[rgba(0,0,0,0.85)]">
                        {option}
                      </span>
                      {searchTypes.includes(option) && (
                        <Check className="h-4 w-4 text-[#128c88]" />
                      )}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        {/* Search Input Box */}
        <div className="relative w-full">
          <div className="relative">
            <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 h-[14px] w-[14px] text-[#72898d]" />
            <input
              type="text"
              value={filterSearchValue}
              onChange={(e) => setFilterSearchValue(e.target.value)}
              placeholder="Search filters..."
              className="w-full h-[32px] pl-[36px] pr-[12px] py-[6px] bg-white border border-[#d9d9d9] rounded-[2px] font-['Roboto',sans-serif] text-[12px] text-[#252525] placeholder:text-[#bfbfbf] focus:outline-none focus:border-[#128c88] focus:ring-1 focus:ring-[#128c88] transition-colors"
            />
          </div>
        </div>
        
        {/* Refine Search Button */}
        <button className="bg-[#128c88] w-full relative rounded-[100px] border border-[#f0f0f0] hover:bg-[#0f7773] transition-colors">
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[17px] py-[6px] relative w-full">
            <p className="font-['Roboto',sans-serif] leading-[22px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">
              Refine Search
            </p>
          </div>
        </button>
      </div>

      {/* Expand/Collapse Buttons */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full px-4 z-10">
        <button
          type="button"
          onClick={expandAll}
          className="basis-0 bg-[#128c88] grow relative rounded-[2px] shrink-0 border border-[#128c88] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.04)] hover:bg-[#0f7773] transition-colors z-10"
        >
          <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[5px] relative w-full">
            <p className="font-['Roboto',sans-serif] leading-[22px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">
              Expand All
            </p>
          </div>
        </button>

        <button
          type="button"
          onClick={collapseAll}
          className="basis-0 bg-white grow relative rounded-[2px] shrink-0 border border-[#d9d9d9] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.02)] hover:bg-gray-50 transition-colors z-10"
        >
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[5px] relative w-full">
            <p className="font-['Roboto',sans-serif] leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] text-center text-nowrap whitespace-pre">
              Collapse all
            </p>
          </div>
        </button>
      </div>

      {/* Filter Categories */}
      <div className="basis-0 bg-white content-stretch flex flex-col gap-[8px] grow items-start relative rounded-[7px] shrink-0 w-full overflow-y-auto [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#008d84]/30 [&::-webkit-scrollbar-thumb]:rounded-full">
        {categories.map(category => (
          <div key={category.id} className="bg-white content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category.id)}
              className="relative shrink-0 w-full hover:bg-gray-50 transition-colors"
            >
              <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[16px] pr-[4px] py-0 relative w-full">
                <div className="h-[40px] relative shrink-0 w-full">
                  <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip top-1/2 translate-y-[-50%]">
                    <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center text-nowrap">
                      <p className="leading-[22px] whitespace-pre font-bold">{category.title}</p>
                    </div>
                  </div>
                  <div className="absolute h-[9px] right-0 top-1/2 translate-y-[-50%] w-[10px]">
                    {category.expanded ? (
                      <ChevronUp className="w-full h-full text-black/85" />
                    ) : (
                      <ChevronDown className="w-full h-full text-black/85" />
                    )}
                  </div>
                </div>
              </div>
            </button>

            {/* Category Options */}
            {category.expanded && (
              <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
                {category.options.map(option => (
                  <div
                    key={option.id}
                    className={`relative shrink-0 w-full ${
                      option.checked ? 'bg-[#e7faf9] shadow-[-3px_0px_0px_0px_inset_#128c88]' : ''
                    }`}
                  >
                    <div className="flex flex-col justify-center size-full">
                      <div className="box-border content-stretch flex flex-col items-start justify-center px-[17px] py-0 relative w-full">
                        <button
                          onClick={() => toggleOption(category.id, option.id)}
                          className="content-stretch flex gap-[4px] items-center relative shrink-0 py-[3px] hover:opacity-80 transition-opacity"
                        >
                          {/* Checkbox */}
                          <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[2px] shrink-0 size-[16px]">
                            {option.checked ? (
                              <div className="relative shrink-0 size-[16px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <rect fill="#128C88" height="16" rx="2" width="16" />
                                  <path d={svgPaths.p2492200} fill="white" />
                                </svg>
                              </div>
                            ) : (
                              <div className="bg-white relative rounded-[2px] shrink-0 size-[16px] border border-[#d9d9d9]" />
                            )}
                          </div>
                          
                          {/* Label */}
                          <div className={`flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] ${
                            option.checked ? 'text-[#008d84]' : 'text-[#385c7f]'
                          }`}>
                            <p className="leading-[22px]">
                              {option.label} {option.count > 0 && `(${option.count})`}
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
