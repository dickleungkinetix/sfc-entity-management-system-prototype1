import { useState } from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import svgPaths from '../imports/svg-v36n2o3enp';
import imgBanner from "figma:asset/79c4af42ee68fbe374e4cbfbe2d8aa576f034ea0.png";
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export function Header() {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'search', label: 'Search Entities' },
    { id: 'create', label: 'Create Entity' },
    { id: 'link', label: 'Link Data Relation' },
    { id: 'reporting1', label: 'Reporting' },
  ];

  const notifications = [
    {
      id: 1,
      title: 'New entity match found',
      description: 'A potential duplicate entity has been detected in the system',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      title: 'Data validation complete',
      description: 'Your recent entity submission has been validated and approved',
      time: '5 hours ago',
      unread: true
    },
    {
      id: 3,
      title: 'System maintenance scheduled',
      description: 'The platform will undergo maintenance on Nov 20, 2025',
      time: '1 day ago',
      unread: false
    }
  ];

  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full">
      {/* Top Navigation */}
      <div className="content-stretch flex h-[99px] items-center relative shrink-0 w-full max-w-[1271px] px-4">
        {/* Logo */}
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[159.581px]">
          <div className="[grid-area:1_/_1] h-[81px] ml-0 mt-0 relative w-[159.581px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 81">
              <g>
                <path d={svgPaths.p15c3ef2} fill="#385C7F" />
                <path d={svgPaths.p2091e480} fill="#385C7F" />
                <path d={svgPaths.p2ff19900} fill="#385C7F" />
                <path d={svgPaths.p33d96f00} fill="#385C7F" />
                <path d={svgPaths.p13bc5200} fill="#385C7F" />
                <path d={svgPaths.p23c7b600} fill="#385C7F" />
                <path d={svgPaths.p2cecd000} fill="#385C7F" />
                <path d={svgPaths.p838da00} fill="#385C7F" />
                <path d={svgPaths.p2e2cad80} fill="#385C7F" />
                <path d={svgPaths.p271f0680} fill="#385C7F" />
                <path d={svgPaths.p61d2d80} fill="#385C7F" />
                <path d={svgPaths.p9baf000} fill="#385C7F" />
                <path d={svgPaths.p12844c00} fill="#385C7F" />
                <path d={svgPaths.p1f314200} fill="#385C7F" />
                <path d={svgPaths.p6d63200} fill="#385C7F" />
                <path d={svgPaths.p114ed280} fill="#385C7F" />
                <mask height="67" id="mask0_1_4244" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="109" x="0" y="0">
                  <path d={svgPaths.p14e97a80} fill="white" />
                </mask>
                <g mask="url(#mask0_1_4244)">
                  <path d={svgPaths.p3195b980} fill="url(#paint0_radial_1_4244)" />
                </g>
              </g>
              <defs>
                <radialGradient cx="0" cy="0" gradientTransform="matrix(113.324 18.4848 7.98133 -34.5821 60.691 57.018)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_4244" r="1">
                  <stop stopColor="#008581" />
                  <stop offset="0.00050354" stopColor="#008581" />
                  <stop offset="0.1726" stopColor="#098984" />
                  <stop offset="0.4589" stopColor="#23928E" />
                  <stop offset="0.8219" stopColor="#4CA19D" />
                  <stop offset="1" stopColor="#63A9A5" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Menu */}
        <div className="content-stretch flex font-['Roboto',sans-serif] gap-[13px] items-start ml-[34px] relative shrink-0">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`flex flex-col justify-center relative shrink-0 text-center text-[14px] transition-colors ${
                activeMenu === item.id ? 'text-[#008d84]' : 'text-[#385c7f] hover:text-[#008d84]'
              }`}
            >
              <p className={`leading-[22px] text-nowrap whitespace-pre ${item.label === 'Home' ? 'font-bold text-[#008d84]' : ''}`}>{item.label}</p>
            </button>
          ))}
        </div>

        {/* Admin Menu */}
        <div className="content-stretch flex gap-[10px] items-start ml-auto relative shrink-0">
          <Popover open={isAdminOpen} onOpenChange={setIsAdminOpen}>
            <PopoverTrigger asChild>
              <button className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0 hover:opacity-80 transition-opacity">
                <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] text-center text-nowrap">
                  <p className="leading-[22px] whitespace-pre">Administration</p>
                </div>
                <ChevronDown className="h-[14px] w-[10px] text-black/45" />
              </button>
            </PopoverTrigger>
            <PopoverContent 
              className="w-[220px] p-0 border border-[#e8e8e8] shadow-lg"
              align="start"
              sideOffset={8}
            >
              <div className="py-1">
                <button 
                  className="w-full px-4 py-2.5 text-left font-['Roboto',sans-serif] text-[14px] text-[#3b3b3b] hover:bg-[#f5f5f5] transition-colors"
                  onClick={() => setIsAdminOpen(false)}
                >
                  Duplication Checking
                </button>
                <button 
                  className="w-full px-4 py-2.5 text-left font-['Roboto',sans-serif] text-[14px] text-[#3b3b3b] hover:bg-[#f5f5f5] transition-colors"
                  onClick={() => setIsAdminOpen(false)}
                >
                  User Management
                </button>
                <button 
                  className="w-full px-4 py-2.5 text-left font-['Roboto',sans-serif] text-[14px] text-[#3b3b3b] hover:bg-[#f5f5f5] transition-colors"
                  onClick={() => setIsAdminOpen(false)}
                >
                  Settings
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Notification */}
        <Popover open={isNotificationOpen} onOpenChange={setIsNotificationOpen}>
          <PopoverTrigger asChild>
            <button className="relative ml-[34px] cursor-pointer">
              <Bell className="h-[24px] w-[24px] text-[#385C7F]" strokeWidth={2} />
              <div className="absolute -top-1 -right-1 bg-red-600 rounded-full w-[12px] h-[12px] flex items-center justify-center">
                <span className="text-white text-[10px] font-['Roboto',sans-serif]">2</span>
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent 
            className="w-[380px] p-0 border border-[#e8e8e8] shadow-lg"
            align="end"
            sideOffset={8}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#e8e8e8]">
              <div className="flex items-center gap-2">
                <span className="font-['Roboto',sans-serif] text-[16px] text-[#3b3b3b]">
                  Notifications
                </span>
                <span className="font-['Roboto',sans-serif] text-[14px] text-[#8c8c8c]">
                  ({notifications.filter(n => n.unread).length} unread)
                </span>
              </div>
            </div>

            {/* Notification List */}
            <div className="max-h-[400px] overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`px-4 py-3 border-b border-[#f0f0f0] hover:bg-[#fafafa] cursor-pointer transition-colors ${
                    notification.unread ? 'bg-[#f6fffd]' : 'bg-white'
                  }`}
                >
                  <div className="flex gap-3">
                    {/* Unread Indicator */}
                    <div className="flex-shrink-0 pt-1">
                      {notification.unread ? (
                        <div className="w-2 h-2 rounded-full bg-[#008d84]" />
                      ) : (
                        <div className="w-2 h-2" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="font-['Roboto',sans-serif] text-[14px] text-[#3b3b3b] mb-1">
                        {notification.title}
                      </p>
                      <p className="font-['Roboto',sans-serif] text-[13px] text-[#8c8c8c] mb-2 line-clamp-2">
                        {notification.description}
                      </p>
                      <p className="font-['Roboto',sans-serif] text-[12px] text-[#bfbfbf]">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-[#e8e8e8] bg-[#fafafa]">
              <button className="w-full text-center font-['Roboto',sans-serif] text-[14px] text-[#008d84] hover:text-[#006d67] transition-colors">
                View all notifications
              </button>
            </div>
          </PopoverContent>
        </Popover>

        {/* User */}
        <div className="content-stretch flex gap-[136px] items-center justify-end relative shrink-0 ml-4">
          <p className="font-['Roboto',sans-serif] leading-[normal] relative shrink-0 text-[#158d89] text-[14px] text-nowrap whitespace-pre">
            General User
          </p>
        </div>
      </div>

      {/* Banner */}
      <div className="box-border content-stretch flex gap-[10px] h-[90px] items-center px-4 py-[29px] relative shrink-0 w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[125.45%] left-0 max-w-none top-0 w-full object-cover" src={imgBanner} />
        </div>
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 z-10 max-w-[1272px] w-full mx-auto">
          <p className="font-['DM_Sans',sans-serif] leading-[42px] relative shrink-0 text-[34px] text-nowrap text-white tracking-[-0.68px] whitespace-pre ml-4">
            Search Entities
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[53px] items-start px-4 py-[15px] relative shrink-0 w-full border-b border-[#e8e8e8]">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 max-w-[1272px] w-full mx-auto">
          <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] text-nowrap">
            <p className="leading-[22px] ml-[30px]">
              <span className="font-bold">Home / </span>
              <span className="font-['Roboto',sans-serif]">Search Entities</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
