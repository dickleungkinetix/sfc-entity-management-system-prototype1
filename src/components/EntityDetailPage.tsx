import { X, Star } from 'lucide-react';

interface EntityDetailPageProps {
  entity: {
    id: number;
    name: string;
    chineseName: string;
    type: 'Corporate' | 'Individual';
    status: string;
    refNumber: string;
    regNumber: string;
    incorporationDate: string;
    ownedBy: string;
    address: string;
    email: string;
    phone: string;
    lastUpdated: string;
    verificationStatus: string;
    tags: string[];
    isFavorite: boolean;
    aiSummary?: string;
  };
  onClose: () => void;
  onToggleFavorite: (id: number) => void;
}

export function EntityDetailPage({ entity, onClose, onToggleFavorite }: EntityDetailPageProps) {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-[20px] py-[20px] relative shrink-0 w-full">
      <div className="bg-white relative rounded-[14px] shadow-[0px_12px_23.5px_0px_rgba(0,0,0,0.06)] shrink-0 w-full border border-[#f0f0f0]">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          {/* Header with Title and Close Button */}
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full border-b border-[#f0f0f0] pb-[16px]">
            <div className="flex-1 flex items-start gap-[12px]">
              <div className="flex-1">
                <div className="flex items-center gap-[12px] mb-[6px]">
                  <h2 className="font-['Roboto',sans-serif] text-[18px] text-[#252525]">
                    {entity.chineseName}
                  </h2>
                  <span className={`px-[8px] py-[2px] rounded-[4px] text-[10px] font-['Roboto',sans-serif] ${
                    entity.type === 'Corporate' 
                      ? 'bg-neutral-100 text-[#3b3b3b] border border-[#e6e6e6]' 
                      : 'bg-neutral-100 text-[#3b3b3b] border border-[#e6e6e6]'
                  }`}>
                    {entity.type}
                  </span>
                  <span className={`px-[8px] py-[2px] rounded-[4px] text-[10px] font-['Roboto',sans-serif] ${
                    entity.status === 'Active'
                      ? 'bg-[#49960f] text-[#f8fff3]'
                      : 'bg-gray-400 text-white'
                  }`}>
                    {entity.status}
                  </span>
                </div>
                <p className="font-['Roboto',sans-serif] text-[14px] text-[#72898d]">
                  {entity.name}
                </p>
              </div>
              
              <button
                onClick={() => onToggleFavorite(entity.id)}
                className="p-[4px] hover:bg-[#f5f5f5] rounded-[4px] transition-colors shrink-0"
              >
                <Star
                  className={`w-[18px] h-[18px] ${
                    entity.isFavorite 
                      ? 'fill-[#fadb14] stroke-[#fadb14]' 
                      : 'stroke-[#bfbfbf]'
                  }`}
                />
              </button>
            </div>
            
            <button
              onClick={onClose}
              className="p-[4px] hover:bg-[#f5f5f5] rounded-[4px] transition-colors ml-[12px]"
            >
              <X className="w-[18px] h-[18px] text-[#72898d]" />
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
            {/* Left Column */}
            <div className="flex flex-col gap-[16px]">
              {/* Basic Information */}
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-['Roboto',sans-serif] text-[14px] text-[#252525] pb-[8px] border-b border-[#f0f0f0]">
                  Basic Information
                </h3>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-['Roboto',sans-serif] text-[10px] text-[#72898d]">
                      Reference Number
                    </span>
                    <span className="font-['Roboto',sans-serif] text-[12px] text-[#252525]">
                      {entity.refNumber}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-['Roboto',sans-serif] text-[10px] text-[#72898d]">
                      Registration Number
                    </span>
                    <span className="font-['Roboto',sans-serif] text-[12px] text-[#252525]">
                      {entity.regNumber}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-['Roboto',sans-serif] text-[10px] text-[#72898d]">
                      Incorporation Date
                    </span>
                    <span className="font-['Roboto',sans-serif] text-[12px] text-[#252525]">
                      {entity.incorporationDate}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-['Roboto',sans-serif] text-[10px] text-[#72898d]">
                      Owned By
                    </span>
                    <span className="font-['Roboto',sans-serif] text-[12px] text-[#252525]">
                      {entity.ownedBy}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-['Roboto',sans-serif] text-[14px] text-[#252525] pb-[8px] border-b border-[#f0f0f0]">
                  Contact Information
                </h3>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-['Roboto',sans-serif] text-[10px] text-[#72898d]">
                      Address
                    </span>
                    <span className="font-['Roboto',sans-serif] text-[12px] text-[#252525]">
                      {entity.address}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-['Roboto',sans-serif] text-[10px] text-[#72898d]">
                      Email
                    </span>
                    <a 
                      href={`mailto:${entity.email}`}
                      className="font-['Roboto',sans-serif] text-[12px] text-[#128c88] hover:underline"
                    >
                      {entity.email}
                    </a>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-['Roboto',sans-serif] text-[10px] text-[#72898d]">
                      Phone
                    </span>
                    <span className="font-['Roboto',sans-serif] text-[12px] text-[#252525]">
                      {entity.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-[16px]">
              {/* System Information */}
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-['Roboto',sans-serif] text-[14px] text-[#252525] pb-[8px] border-b border-[#f0f0f0]">
                  System Information
                </h3>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-['Roboto',sans-serif] text-[10px] text-[#72898d]">
                      Last Updated
                    </span>
                    <span className="font-['Roboto',sans-serif] text-[12px] text-[#252525]">
                      {entity.lastUpdated}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-['Roboto',sans-serif] text-[10px] text-[#72898d]">
                      Verification Status
                    </span>
                    <span className="font-['Roboto',sans-serif] text-[12px] text-[#252525]">
                      {entity.verificationStatus}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <span className="font-['Roboto',sans-serif] text-[10px] text-[#72898d]">
                      Tags
                    </span>
                    <div className="flex flex-wrap gap-[6px]">
                      {entity.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-[8px] py-[2px] bg-neutral-100 text-[#3b3b3b] rounded-[4px] text-[10px] font-['Roboto',sans-serif] border border-[#e6e6e6]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Summary (if available) */}
              {entity.aiSummary && (
                <div className="flex flex-col gap-[12px]">
                  <h3 className="font-['Roboto',sans-serif] text-[14px] text-[#252525] pb-[8px] border-b border-[#f0f0f0]">
                    AI Summary
                  </h3>
                  <p className="font-['Roboto',sans-serif] text-[12px] text-[#252525] leading-[18px]">
                    {entity.aiSummary}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
