import svgPaths from "./svg-v36n2o3enp";
import imgBanner from "figma:asset/79c4af42ee68fbe374e4cbfbe2d8aa576f034ea0.png";

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[81px] ml-0 mt-0 relative w-[159.581px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 81">
        <g id="Group">
          <path d={svgPaths.p15c3ef2} fill="var(--fill-0, #385C7F)" id="Vector" />
          <path d={svgPaths.p2091e480} fill="var(--fill-0, #385C7F)" id="Vector_2" />
          <path d={svgPaths.p2ff19900} fill="var(--fill-0, #385C7F)" id="Vector_3" />
          <path d={svgPaths.p33d96f00} fill="var(--fill-0, #385C7F)" id="Vector_4" />
          <path d={svgPaths.p13bc5200} fill="var(--fill-0, #385C7F)" id="Vector_5" />
          <path d={svgPaths.p23c7b600} fill="var(--fill-0, #385C7F)" id="Vector_6" />
          <path d={svgPaths.p2cecd000} fill="var(--fill-0, #385C7F)" id="Vector_7" />
          <path d={svgPaths.p838da00} fill="var(--fill-0, #385C7F)" id="Vector_8" />
          <path d={svgPaths.p2e2cad80} fill="var(--fill-0, #385C7F)" id="Vector_9" />
          <path d={svgPaths.p271f0680} fill="var(--fill-0, #385C7F)" id="Vector_10" />
          <path d={svgPaths.p61d2d80} fill="var(--fill-0, #385C7F)" id="Vector_11" />
          <path d={svgPaths.p9baf000} fill="var(--fill-0, #385C7F)" id="Vector_12" />
          <path d={svgPaths.p12844c00} fill="var(--fill-0, #385C7F)" id="Vector_13" />
          <path d={svgPaths.p1f314200} fill="var(--fill-0, #385C7F)" id="Vector_14" />
          <path d={svgPaths.p6d63200} fill="var(--fill-0, #385C7F)" id="Vector_15" />
          <path d={svgPaths.p114ed280} fill="var(--fill-0, #385C7F)" id="Vector_16" />
          <mask height="67" id="mask0_1_4244" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="109" x="0" y="0">
            <g id="SVGID_7_">
              <path d={svgPaths.p14e97a80} fill="var(--fill-0, white)" id="Vector_17" />
            </g>
          </mask>
          <g mask="url(#mask0_1_4244)">
            <path d={svgPaths.p3195b980} fill="url(#paint0_radial_1_4244)" id="Vector_18" />
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
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group1 />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[159.581px]" data-name="Logo">
      <Group2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex font-['Roboto:Medium',sans-serif] font-medium gap-[13px] items-start leading-[0] relative shrink-0 text-[14px] text-nowrap w-[537.419px]" data-name="Menu">
      <div className="flex flex-col justify-center relative shrink-0 text-[#008d84] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] text-nowrap whitespace-pre">Home</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#385c7f] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] text-nowrap whitespace-pre">Search Entities</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#385c7f] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] text-nowrap whitespace-pre">Create Entity</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#385c7f]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] text-nowrap whitespace-pre">Link Data Relation</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#385c7f] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] text-nowrap whitespace-pre">Reporting</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#385c7f] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] text-nowrap whitespace-pre">Reporting</p>
      </div>
    </div>
  );
}

function Down() {
  return (
    <div className="absolute left-0 size-[10px] top-[3px]" data-name="down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="down">
          <path d={svgPaths.p445f880} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="h-[14px] relative shrink-0 w-[10px]" data-name="icon-wrapper">
      <Down />
    </div>
  );
}

function DropdownTrigger() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Dropdown-Trigger">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Administration</p>
      </div>
      <IconWrapper />
    </div>
  );
}

function AdminMenu() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[74px]" data-name="Admin_menu">
      <DropdownTrigger />
    </div>
  );
}

function Header() {
  return (
    <div className="basis-0 content-stretch flex gap-[34px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Header">
      <Logo />
      <Menu />
      <AdminMenu />
    </div>
  );
}

function NotificationContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Notification Container">
      <div className="[grid-area:1_/_1] h-[19.223px] ml-0 mt-[3.78px] relative w-[18.745px]" data-name="Vector">
        <div className="absolute inset-[-5.2%_-5.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 22">
            <path clipRule="evenodd" d={svgPaths.p393b19c0} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #385C7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[20.637px] ml-[5.22px] mt-0 relative w-[8.307px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 21">
          <path d={svgPaths.p1f169280} id="Vector" stroke="var(--stroke-0, #385C7F)" strokeWidth="2" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[11.24px] mt-0 relative size-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #FF0000)" id="Ellipse 90" r="6" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[11px] justify-center ml-[17.24px] mt-[6.5px] relative text-[10px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function SignOut() {
  return (
    <div className="content-stretch flex gap-[136px] items-center justify-end relative shrink-0 w-[93px]" data-name="Sign out">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#158d89] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        General User
      </p>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex h-[99px] items-center relative shrink-0 w-[1271px]" data-name="Top">
      <Header />
      <NotificationContainer />
      <SignOut />
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[42px] relative shrink-0 text-[34px] text-nowrap text-white tracking-[-0.68px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Search Entities
      </p>
    </div>
  );
}

function Banner() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[90px] items-center px-[323px] py-[29px] relative shrink-0 w-[1919px]" data-name="Banner">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[125.45%] left-[-0.03%] max-w-none top-0 w-[100.05%]" src={imgBanner} />
      </div>
      <Frame21 />
    </div>
  );
}

function BreadcrumbContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[138px]" data-name="Breadcrumb Container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-[rgba(0,0,0,0.85)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] text-[14px] whitespace-pre">
          <span>{`Home / `}</span>
          <span className="font-['Roboto:Regular',sans-serif] font-normal text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Search Entities
          </span>
        </p>
      </div>
    </div>
  );
}

function SubMenu() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[53px] items-start px-[325px] py-[15px] relative shrink-0 w-[1919px]" data-name="Sub_menu">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none" />
      <BreadcrumbContainer />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-[1919px]" data-name="Header">
      <Top />
      <Banner />
      <SubMenu />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Header1 />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Close">
          <path d={svgPaths.p19d15500} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SelectionItem() {
  return (
    <div className="bg-neutral-100 relative rounded-[2px] shrink-0" data-name="Selection-Item">
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip pl-[8px] pr-[4px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.85)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Email
        </p>
        <Close />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Close1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Close">
          <path d={svgPaths.p19d15500} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SelectionItem1() {
  return (
    <div className="bg-neutral-100 relative rounded-[2px] shrink-0" data-name="Selection-Item">
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip pl-[8px] pr-[4px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.85)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Phone
        </p>
        <Close1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function ItemCount() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="item-count ▾">
      <SelectionItem />
      <SelectionItem1 />
    </div>
  );
}

function Select() {
  return (
    <div className="bg-white h-[32px] relative rounded-[2px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start p-[4px] relative w-full">
          <ItemCount />
        </div>
      </div>
    </div>
  );
}

function FilterOption() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-[232px]" data-name="Filter Option">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none" />
      <Select />
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[#128c88] grow min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[17px] py-[6px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Refine Search
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Button-Group">
      <Button />
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[9px] pt-0 px-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Filter Results</p>
      </div>
      <FilterOption />
      <ButtonGroup />
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#128c88] grow min-h-px min-w-px relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[5px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Expand All
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#128c88] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[2px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.02)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[5px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Collapse all
          </p>
        </div>
      </div>
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Button-Group">
      <Button1 />
      <Button2 />
    </div>
  );
}

function TitleWrapper() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip top-1/2 translate-y-[-50%]" data-name="title-wrapper">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Classification</p>
      </div>
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="absolute h-[9px] right-0 top-1/2 translate-y-[-50%] w-[10px]" data-name="Menu Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
        <g id="Menu Icon">
          <path d={svgPaths.p1922a600} fill="var(--fill-0, black)" fillOpacity="0.85" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function InnerWrapper() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="inner-wrapper">
      <TitleWrapper />
      <MenuIcon />
    </div>
  );
}

function Parent() {
  return (
    <div className="relative shrink-0 w-full" data-name="parent">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[16px] pr-[4px] py-0 relative w-full">
          <InnerWrapper />
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="wrapper">
          <g id="border"></g>
          <rect fill="var(--fill-0, #128C88)" height="16" id="bg" rx="2" width="16" />
          <path d={svgPaths.p2492200} fill="var(--fill-0, white)" id="check" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxInput() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox-Input">
      <Wrapper />
    </div>
  );
}

function FilterItem() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Filter Item">
      <CheckboxInput />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#008d84] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Individual (6)</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="bg-[#e7faf9] relative shrink-0 w-full" data-name="item 01">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-[17px] py-0 relative w-full">
          <FilterItem />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-3px_0px_0px_0px_inset_#128c88]" />
    </div>
  );
}

function CheckboxInput1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput1 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Corporate (5)</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 02">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper1 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput2 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Product (3)</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 3">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper2 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput3 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[170px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Actual/abstract objects (2)</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 5">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper3 />
        </div>
      </div>
    </div>
  );
}

function Submenu() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="submenu">
      <Item8 />
      <Item9 />
      <Item1 />
      <Item3 />
    </div>
  );
}

function InlineMenuItemTopLevelLegacy() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name=".Inline-Menu-Item/Top-Level(Legacy)">
      <Parent />
      <Submenu />
    </div>
  );
}

function TitleWrapper1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip top-1/2 translate-y-[-50%]" data-name="title-wrapper">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Group</p>
      </div>
    </div>
  );
}

function MenuIcon1() {
  return (
    <div className="absolute h-[9px] right-0 top-1/2 translate-y-[-50%] w-[10px]" data-name="Menu Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
        <g id="Menu Icon">
          <path d={svgPaths.p1922a600} fill="var(--fill-0, black)" fillOpacity="0.85" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function InnerWrapper4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="inner-wrapper">
      <TitleWrapper1 />
      <MenuIcon1 />
    </div>
  );
}

function Parent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="parent">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[16px] pr-[4px] py-0 relative w-full">
          <InnerWrapper4 />
        </div>
      </div>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="wrapper">
          <g id="border"></g>
          <rect fill="var(--fill-0, #128C88)" height="16" id="bg" rx="2" width="16" />
          <path d={svgPaths.p2492200} fill="var(--fill-0, white)" id="check" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxInput4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox-Input">
      <Wrapper1 />
    </div>
  );
}

function FilterItem1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Filter Item">
      <CheckboxInput4 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#008d84] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Licensed (7)</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="bg-[#e7faf9] relative shrink-0 w-full" data-name="item 01">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-[17px] py-0 relative w-full">
          <FilterItem1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-3px_0px_0px_0px_inset_#128c88]" />
    </div>
  );
}

function CheckboxInput5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper5() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput5 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Non-licensed (4)</p>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 02">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper5 />
        </div>
      </div>
    </div>
  );
}

function Submenu1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="submenu">
      <Item />
      <Item13 />
    </div>
  );
}

function InlineMenuItemTopLevelLegacy1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name=".Inline-Menu-Item/Top-Level(Legacy)">
      <Parent1 />
      <Submenu1 />
    </div>
  );
}

function TitleWrapper2() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip top-1/2 translate-y-[-50%]" data-name="title-wrapper">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Licence/Registration status</p>
      </div>
    </div>
  );
}

function MenuIcon2() {
  return (
    <div className="absolute h-[9px] right-0 top-1/2 translate-y-[-50%] w-[10px]" data-name="Menu Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
        <g id="Menu Icon">
          <path d={svgPaths.p1922a600} fill="var(--fill-0, black)" fillOpacity="0.85" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function InnerWrapper6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="inner-wrapper">
      <TitleWrapper2 />
      <MenuIcon2 />
    </div>
  );
}

function Parent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="parent">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[16px] pr-[4px] py-0 relative w-full">
          <InnerWrapper6 />
        </div>
      </div>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="wrapper">
          <g id="border"></g>
          <rect fill="var(--fill-0, #128C88)" height="16" id="bg" rx="2" width="16" />
          <path d={svgPaths.p2492200} fill="var(--fill-0, white)" id="check" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxInput6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox-Input">
      <Wrapper2 />
    </div>
  );
}

function FilterItem2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Filter Item">
      <CheckboxInput6 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#008d84] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Active (5)</p>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="bg-[#e7faf9] relative shrink-0 w-full" data-name="item 01">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-[17px] py-0 relative w-full">
          <FilterItem2 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-3px_0px_0px_0px_inset_#128c88]" />
    </div>
  );
}

function CheckboxInput7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput7 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Inactive (6)</p>
      </div>
    </div>
  );
}

function Item15() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 02">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper7 />
        </div>
      </div>
    </div>
  );
}

function Submenu2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="submenu">
      <Item14 />
      <Item15 />
    </div>
  );
}

function InlineMenuItemTopLevelLegacy2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name=".Inline-Menu-Item/Top-Level(Legacy)">
      <Parent2 />
      <Submenu2 />
    </div>
  );
}

function TitleWrapper3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip top-1/2 translate-y-[-50%]" data-name="title-wrapper">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Licence type</p>
      </div>
    </div>
  );
}

function MenuIcon3() {
  return (
    <div className="absolute h-[9px] right-0 top-1/2 translate-y-[-50%] w-[10px]" data-name="Menu Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
        <g id="Menu Icon">
          <path d={svgPaths.p1922a600} fill="var(--fill-0, black)" fillOpacity="0.85" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function InnerWrapper8() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="inner-wrapper">
      <TitleWrapper3 />
      <MenuIcon3 />
    </div>
  );
}

function Parent3() {
  return (
    <div className="relative shrink-0 w-full" data-name="parent">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[16px] pr-[4px] py-0 relative w-full">
          <InnerWrapper8 />
        </div>
      </div>
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="wrapper">
          <g id="border"></g>
          <rect fill="var(--fill-0, #128C88)" height="16" id="bg" rx="2" width="16" />
          <path d={svgPaths.p2492200} fill="var(--fill-0, white)" id="check" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxInput8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox-Input">
      <Wrapper3 />
    </div>
  );
}

function FilterItem3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Filter Item">
      <CheckboxInput8 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#008d84] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">SFO (4)</p>
      </div>
    </div>
  );
}

function Item16() {
  return (
    <div className="bg-[#e7faf9] relative shrink-0 w-full" data-name="item 01">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-[17px] py-0 relative w-full">
          <FilterItem3 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-3px_0px_0px_0px_inset_#128c88]" />
    </div>
  );
}

function CheckboxInput9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper9() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput9 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">AMLO (6)</p>
      </div>
    </div>
  );
}

function Item17() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 02">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper9 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper10() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput10 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">SFO and AMLO (2)</p>
      </div>
    </div>
  );
}

function Item18() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 3">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper10 />
        </div>
      </div>
    </div>
  );
}

function Submenu3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="submenu">
      <Item16 />
      <Item17 />
      <Item18 />
    </div>
  );
}

function InlineMenuItemTopLevelLegacy3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name=".Inline-Menu-Item/Top-Level(Legacy)">
      <Parent3 />
      <Submenu3 />
    </div>
  );
}

function TitleWrapper4() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 overflow-clip top-1/2 translate-y-[-50%]" data-name="title-wrapper">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Regulated Activities</p>
      </div>
    </div>
  );
}

function MenuIcon4() {
  return (
    <div className="absolute h-[9px] right-0 top-1/2 translate-y-[-50%] w-[10px]" data-name="Menu Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
        <g id="Menu Icon">
          <path d={svgPaths.p1922a600} fill="var(--fill-0, black)" fillOpacity="0.85" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function InnerWrapper11() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="inner-wrapper">
      <TitleWrapper4 />
      <MenuIcon4 />
    </div>
  );
}

function Parent4() {
  return (
    <div className="relative shrink-0 w-full" data-name="parent">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[16px] pr-[4px] py-0 relative w-full">
          <InnerWrapper11 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper12() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput11 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">RA1 (4)</p>
      </div>
    </div>
  );
}

function Item19() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 02">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper12 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper13() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput12 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">RA2 (3)</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 12">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper13 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper14() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput13 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">RA3</p>
      </div>
    </div>
  );
}

function Item20() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 3">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper14 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper15() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput14 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">RA4 (3)</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 4">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper15 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper16() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput15 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">RA5</p>
      </div>
    </div>
  );
}

function Item21() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 5">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper16 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper17() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput16 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">RA6</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 6">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper17 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper18() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput17 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">RA7(3)</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 7">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper18 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper19() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput18 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">RA8</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 8">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper19 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper20() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput19 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">RA9 (3)</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 9">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper20 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper21() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput20 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">RA10</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 10">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper21 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function InnerWrapper22() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0 w-full" data-name="inner-wrapper">
      <CheckboxInput21 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#385c7f] text-[14px] w-[160px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">RA13</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="relative shrink-0 w-full" data-name="item 11">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[17px] py-0 relative w-full">
          <InnerWrapper22 />
        </div>
      </div>
    </div>
  );
}

function Submenu4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="submenu">
      <Item19 />
      <Item12 />
      <Item20 />
      <Item2 />
      <Item21 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function InlineMenuItemTopLevelLegacy4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name=".Inline-Menu-Item/Top-Level(Legacy)">
      <Parent4 />
      <Submenu4 />
    </div>
  );
}

function Menu1() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative rounded-[7px] shrink-0 w-full" data-name="menu">
      <InlineMenuItemTopLevelLegacy />
      <InlineMenuItemTopLevelLegacy1 />
      <InlineMenuItemTopLevelLegacy2 />
      <InlineMenuItemTopLevelLegacy3 />
      <InlineMenuItemTopLevelLegacy4 />
    </div>
  );
}

function MenuLogo() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-[208px]" data-name="menu&logo">
      <Menu1 />
    </div>
  );
}

function SiderDefault() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-full items-start min-h-[600px] pb-[14px] pl-0 pr-[6px] pt-[17px] relative shrink-0" data-name="sider/default">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0" />
      <Frame20 />
      <ButtonGroup1 />
      <MenuLogo />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-0 py-0 relative w-full">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px] whitespace-pre">Primary Search</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Close2() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Close">
          <path d={svgPaths.p19d15500} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SelectionItem2() {
  return (
    <div className="bg-neutral-100 relative rounded-[2px] shrink-0" data-name="Selection-Item">
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip pl-[8px] pr-[4px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.85)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          All
        </p>
        <Close2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function ItemCount1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="item-count ▾">
      <SelectionItem2 />
    </div>
  );
}

function Select1() {
  return (
    <div className="bg-white box-border content-stretch flex items-start p-[4px] relative rounded-[2px] shrink-0" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <ItemCount1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[14px] w-[480px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Search entities by name, reference number, or type...</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-center px-[10px] py-0 relative shrink-0 w-[490px]">
      <Select1 />
      <Frame26 />
    </div>
  );
}

function InputArea() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Input Area">
      <div className="size-full">
        <div className="box-border content-stretch flex h-[48px] items-start pl-0 pr-[10px] py-[6px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Close3() {
  return (
    <div className="h-[14.932px] relative shrink-0 w-[14.884px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_1_4219)" id="Close">
          <path d={svgPaths.p17269100} fill="var(--fill-0, #696969)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_4219">
            <rect fill="white" height="14.9316" width="14.8841" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[4px] items-center ml-0 mt-0 overflow-clip relative w-[43px]" data-name="label">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative text-[14px] text-[rgba(0,0,0,0.85)] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            AI ASK
          </p>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
      <Label />
    </div>
  );
}

function SwitchNobDefault() {
  return (
    <div className="overflow-clip relative rounded-[77px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] shrink-0 size-[18px]" data-name="switch-nob/default">
      <div className="absolute bg-white inset-0 rounded-[16px]" />
    </div>
  );
}

function Switch() {
  return (
    <div className="bg-[#128c88] box-border content-stretch flex h-[22px] items-center justify-end pl-[24px] pr-[2px] py-[2px] relative rounded-[16px] shrink-0 w-[44px]" data-name="Switch">
      <SwitchNobDefault />
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex gap-[9px] items-center px-[14px] py-0 relative shrink-0">
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Group5 />
        </div>
      </div>
      <Switch />
    </div>
  );
}

function Label1() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Label">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px relative shrink-0 text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search
      </p>
    </div>
  );
}

function SearchTerm() {
  return (
    <div className="bg-[#128c88] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[5px] relative rounded-[100px] shrink-0 w-[114px]" data-name="Search term">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Label1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center left-[50px] top-px w-[905px]">
      <InputArea />
      <Close3 />
      <Frame8 />
      <SearchTerm />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[9px] top-[7px]">
      <div className="absolute left-[9px] size-[36px] top-[7px]">
        <div className="absolute inset-[-15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47">
            <g filter="url(#filter0_d_1_4238)" id="Ellipse 86">
              <circle cx="23.4" cy="23.4" fill="url(#paint0_linear_1_4238)" r="18" />
              <circle cx="23.4" cy="23.4" r="17.5" stroke="url(#paint1_linear_1_4238)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.8" id="filter0_d_1_4238" width="46.8" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2.7" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.85098 0 0 0 0 0.819608 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_4238" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_4238" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4238" x1="9.14497" x2="82.3839" y1="-4.37143" y2="24.0562">
                <stop stopColor="#08E6D4" />
                <stop offset="0.3125" stopColor="#4C53B1" />
                <stop offset="0.4375" stopColor="#673582" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_4238" x1="5.76242" x2="42.0254" y1="10.0286" y2="11.8328">
                <stop stopColor="#04ECD3" />
                <stop offset="1" stopColor="#B533C5" stopOpacity="0.69" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[28%_95.83%_26%_1.5%]" data-name="Combined-Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 23">
          <path clipRule="evenodd" d={svgPaths.pf823c00} fill="var(--fill-0, white)" fillOpacity="0.9" fillRule="evenodd" id="Combined-Shape" />
        </svg>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute h-[50px] left-px right-[29px] rounded-bl-[50px] rounded-tl-[50px] top-px" data-name="Input">
      <Frame2 />
      <Group6 />
    </div>
  );
}

function Search() {
  return (
    <div className="h-[52px] relative rounded-[50px] shrink-0 w-full" data-name="Search">
      <div aria-hidden="true" className="absolute border-2 border-[#04ecd3] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_0px_5.4px_0px_#17d9d1]" />
      <Input />
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[89px] items-center pb-0 pl-[20px] pr-[10px] pt-[6px] relative shrink-0 w-[947px]">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#128c88] text-[0px] w-[918px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] mb-0 text-[14px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
          AI Summary
        </p>
        <p className="leading-[22px] text-[#1c1c1c] text-[14px]">
          <span className="font-['Roboto:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>{`Based on your search results, I found `}</span>
          <span className="font-['Roboto:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
            4 entities
          </span>
          <span className="font-['Roboto:Regular',sans-serif] font-normal" style={{ fontVariationSettings: "'wdth' 100" }}>{` matching your criteria. Most entities (4) are currently active. Several entities are managed by the LIC unit.`}</span>
        </p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Label">
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow h-[22px] leading-[22px] min-h-px min-w-px relative shrink-0 text-[#3b3b3b] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Corporate : 2
      </p>
    </div>
  );
}

function SearchTerm1() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[5px] relative rounded-[100px] shrink-0 w-[114px]" data-name="Search term">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Label2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#3b3b3b] text-[14px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Individual: 2
      </p>
    </div>
  );
}

function SearchTerm2() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[5px] relative rounded-[100px] shrink-0" data-name="Search term">
      <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Label3 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start pb-0 pl-[20px] pr-0 pt-[4px] relative shrink-0 w-[790px]">
      <SearchTerm1 />
      <SearchTerm2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame15 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[22px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="h-[22px] w-full" />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[22px] relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 955 22">
        <g id="Frame 945">
          <path d="M10 11H945" id="Vector 16" stroke="var(--stroke-0, #D3D3D3)" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Search Results (4)</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-[#128c88] rounded-[2px] shrink-0 size-[8px]" />
    </div>
  );
}

function Frame36() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-[#128c88] rounded-[2px] shrink-0 size-[8px]" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-[#128c88] rounded-[2px] shrink-0 size-[8px]" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex gap-[10px] items-center relative shrink-0">
      <div className="bg-[#128c88] rounded-[2px] shrink-0 size-[8px]" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="gap-px grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] relative shrink-0 size-[18px]">
      <Frame34 />
      <Frame36 />
      <Frame37 />
      <Frame35 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame33 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <div className="bg-[#128c88] h-[4px] rounded-[1px] shrink-0 w-full" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[17px]">
      {[...Array(3).keys()].map((_, i) => (
        <Frame40 key={i} />
      ))}
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[6px] h-[32px] items-center relative shrink-0">
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function TextText() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Text/Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Advanced Filiter
      </p>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="h-[11.25px] relative shrink-0 w-[10px]" data-name="icon-wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
        <g id="icon-wrapper">
          <path d={svgPaths.p3a509b00} fill="var(--fill-0, black)" fillOpacity="0.85" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function DropdownTrigger1() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0" data-name="Dropdown-Trigger">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-end overflow-clip px-[16px] py-[5px] relative rounded-[inherit]">
        <TextText />
        <IconWrapper1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame13 />
      <Frame41 />
      <DropdownTrigger1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex h-[43px] items-center px-0 py-[7px] relative shrink-0 w-full">
      <Frame30 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['Cairo:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] relative shrink-0 text-[#252525] text-[14px] w-[230px]">
        <p className="leading-[normal]">滙豐金融證券(香港)有限公司</p>
      </div>
      <p className="font-['Cairo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#72898d] text-[12px] w-[230px]">HSBC Broking Securities (Hong Kong) Limited</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-[18.75px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Frame 1071">
          <path clipRule="evenodd" d={svgPaths.p1605b480} fill="var(--fill-0, #FFBB00)" fillRule="evenodd" id="start-favorite" />
        </g>
      </svg>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="name">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#f9f9f9] h-[21.688px] ml-0 mt-0 w-[130.446px]" />
      <div className="[grid-area:1_/_1] bg-[#f9f9f9] h-[21.688px] ml-0 mt-[25.69px] w-[130.446px]" />
      <div className="[grid-area:1_/_1] bg-[#f9f9f9] h-[22px] ml-0 mt-[52px] w-[265px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[21px] justify-center ml-[7px] mt-[62.5px] relative text-[#128c88] text-[12px] translate-y-[-50%] w-[252px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">{`Email  : chanTaiMan@hsbc.hk`}</p>
      </div>
      <div className="[grid-area:1_/_1] bg-[#f9f9f9] h-[21.688px] ml-[134.55px] mt-0 w-[130.446px]" />
      <div className="[grid-area:1_/_1] bg-[#f9f9f9] h-[21.688px] ml-[134.55px] mt-[25.69px] w-[130.446px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Cairo:Regular',sans-serif] font-normal h-[21px] justify-center ml-[7px] mt-[11.5px] not-italic relative text-[#128c88] text-[0px] translate-y-[-50%] w-[113px]">
        <p className="font-['Roboto:Regular',sans-serif] leading-[normal] text-[12px]">
          <span style={{ fontVariationSettings: "'wdth' 100" }}>Ref</span>
          <span style={{ fontVariationSettings: "'wdth' 100" }}>{` : AAA529`}</span>
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[21px] justify-center ml-[142px] mt-[11.5px] relative text-[#128c88] text-[12px] translate-y-[-50%] w-[117px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Inc: 1991/3/5</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[21px] justify-center ml-[6px] mt-[36.5px] relative text-[#128c88] text-[12px] translate-y-[-50%] w-[121px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">+852 282 21111</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[21px] justify-center ml-[142px] mt-[36.5px] relative text-[#128c88] text-[12px] translate-y-[-50%] w-[117px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Unit : LIC</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Group3 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['Cairo:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#72898d] text-[12px] w-[230px]">{`1 Queen's Road Central, Hong Kong`}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 bg-neutral-100 grow h-[20.139px] min-h-px min-w-px relative rounded-[5.938px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[5.938px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[5.938px] h-[20.139px] items-center justify-center px-[4.563px] py-px relative w-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15.44px] justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[10px] text-center w-[51.069px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Corporate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="basis-0 bg-[#49960f] grow h-[20.139px] min-h-px min-w-px relative rounded-[5.938px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[5.938px] h-[20.139px] items-center justify-center px-[3.563px] py-0 relative w-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15.44px] justify-center leading-[0] relative shrink-0 text-[#f8fff3] text-[10px] text-center w-[51.069px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="basis-0 content-stretch flex gap-[9px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame6 />
      <Frame28 />
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[13.899px] relative shrink-0 w-[23.165px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 14">
        <g id="Group 963">
          <path clipRule="evenodd" d={svgPaths.p1aaeb700} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" id="view_simple-[#815]" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[16.279px] relative shrink-0 w-[16.278px]">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group 964">
            <path d={svgPaths.p2ff96300} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.62785" />
            <path d={svgPaths.p376a2980} id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.62785" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="h-[17.373px] relative shrink-0 w-[15.443px]">
      <div className="absolute inset-[-5.56%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <g id="Group 965">
            <path d="M6.75633 9.6519V14.4778" id="Vector" stroke="var(--stroke-0, #FF0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.93038" />
            <path d="M10.6171 9.6519V14.4778" id="Vector_2" stroke="var(--stroke-0, #FF0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.93038" />
            <path d="M0.96519 4.82595H16.4082" id="Vector_3" stroke="var(--stroke-0, #FF0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.93038" />
            <path d={svgPaths.p293ce3c0} id="Vector_4" stroke="var(--stroke-0, #FF0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.93038" />
            <path d={svgPaths.p1522cd00} id="Vector_5" stroke="var(--stroke-0, #FF0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.93038" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[18px] items-center justify-center relative shrink-0 w-[109px]">
      <Group7 />
      <Group8 />
      <Group9 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[1.544px] items-center justify-center relative shrink-0 w-[102px]">
      <Frame32 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute bottom-[12.67px] content-stretch flex gap-[10px] h-[26px] items-end left-[15px] w-[265px]">
      <Frame29 />
      <Frame31 />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[5px] h-full items-start pb-[5px] pt-[11px] px-[15px] relative rounded-[11.877px] shrink-0 w-[295px]" data-name="01">
      <div aria-hidden="true" className="absolute border-[1.188px] border-solid border-white inset-0 pointer-events-none rounded-[11.877px] shadow-[0px_0px_4.751px_0px_rgba(0,0,0,0.23)]" />
      <Name />
      <Frame />
      <Frame27 />
      <Frame42 />
    </div>
  );
}

function Row1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[22.59px] items-start relative shrink-0" data-name="row01">
      <Component1 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['Cairo:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] relative shrink-0 text-[#252525] text-[14px] w-[230px]">
        <p className="leading-[normal]">滙豐機構信託服務(亞洲)有限公司</p>
      </div>
      <p className="font-['Cairo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#72898d] text-[12px] w-[230px]">HSBC Institutional Trust Services (Asia) Limited</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 size-[18.75px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Frame 1071">
          <path clipRule="evenodd" d={svgPaths.p1605b480} fill="var(--fill-0, #D0D0D0)" fillRule="evenodd" id="start-favorite" />
        </g>
      </svg>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="name">
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#f9f9f9] h-[21.688px] ml-0 mt-0 w-[130.446px]" />
      <div className="[grid-area:1_/_1] bg-[#f9f9f9] h-[21.688px] ml-0 mt-[25.69px] w-[130.446px]" />
      <div className="[grid-area:1_/_1] bg-[#f9f9f9] h-[22px] ml-0 mt-[52px] w-[265px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[21px] justify-center ml-[7px] mt-[62.5px] relative text-[#128c88] text-[12px] translate-y-[-50%] w-[252px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre-wrap">{`Email  : chanTaiMan@hsbc.hk`}</p>
      </div>
      <div className="[grid-area:1_/_1] bg-[#f9f9f9] h-[21.688px] ml-[134.55px] mt-0 w-[130.446px]" />
      <div className="[grid-area:1_/_1] bg-[#f9f9f9] h-[21.688px] ml-[134.55px] mt-[25.69px] w-[130.446px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Cairo:Regular',sans-serif] font-normal h-[21px] justify-center ml-[7px] mt-[11.5px] not-italic relative text-[#128c88] text-[0px] translate-y-[-50%] w-[113px]">
        <p className="font-['Roboto:Regular',sans-serif] leading-[normal] text-[12px]">
          <span style={{ fontVariationSettings: "'wdth' 100" }}>Ref</span>
          <span style={{ fontVariationSettings: "'wdth' 100" }}>{` : AAK784`}</span>
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[21px] justify-center ml-[142px] mt-[11.5px] relative text-[#128c88] text-[12px] translate-y-[-50%] w-[117px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Inc: 2019/3/20</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[21px] justify-center ml-[6px] mt-[36.5px] relative text-[#128c88] text-[12px] translate-y-[-50%] w-[121px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">+852 282 21111</p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[21px] justify-center ml-[142px] mt-[36.5px] relative text-[#128c88] text-[12px] translate-y-[-50%] w-[117px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Unit : LIC</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Group4 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="font-['Cairo:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#72898d] text-[12px] w-[230px]">Floor 15, Science Park</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 bg-neutral-100 grow h-[20.139px] min-h-px min-w-px relative rounded-[5.938px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[5.938px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[5.938px] h-[20.139px] items-center justify-center px-[4.563px] py-px relative w-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15.44px] justify-center leading-[0] relative shrink-0 text-[#3b3b3b] text-[10px] text-center w-[51.069px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Corporate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="basis-0 bg-[#49960f] grow h-[20.139px] min-h-px min-w-px relative rounded-[5.938px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[5.938px] h-[20.139px] items-center justify-center px-[3.563px] py-0 relative w-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[15.44px] justify-center leading-[0] relative shrink-0 text-[#f8fff3] text-[10px] text-center w-[51.069px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="basis-0 content-stretch flex gap-[9px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame7 />
      <Frame46 />
    </div>
  );
}

function Group10() {
  return (
    <div className="h-[13.899px] relative shrink-0 w-[23.165px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 14">
        <g id="Group 963">
          <path clipRule="evenodd" d={svgPaths.p1aaeb700} fill="var(--fill-0, #A3A3A3)" fillRule="evenodd" id="view_simple-[#815]" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="relative shrink-0 size-[16.279px]">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group 964">
            <path d={svgPaths.p2ff96300} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.62785" />
            <path d={svgPaths.p376a2980} id="Vector_2" stroke="var(--stroke-0, #A3A3A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.62785" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="h-[17.373px] relative shrink-0 w-[15.443px]">
      <div className="absolute inset-[-5.56%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <g id="Group 965">
            <path d="M6.75633 9.6519V14.4778" id="Vector" stroke="var(--stroke-0, #FF0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.93038" />
            <path d="M10.6171 9.6519V14.4778" id="Vector_2" stroke="var(--stroke-0, #FF0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.93038" />
            <path d="M0.96519 4.82595H16.4082" id="Vector_3" stroke="var(--stroke-0, #FF0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.93038" />
            <path d={svgPaths.p293ce3c0} id="Vector_4" stroke="var(--stroke-0, #FF0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.93038" />
            <path d={svgPaths.p1522cd00} id="Vector_5" stroke="var(--stroke-0, #FF0000)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.93038" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[87px]">
      <Group10 />
      <Group11 />
      <Group12 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[1.544px] items-center justify-center relative shrink-0 w-[102px]">
      <Frame48 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute bottom-[12.67px] content-stretch flex gap-[10px] h-[26px] items-end left-[15px] w-[265px]">
      <Frame47 />
      <Frame49 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[5px] h-full items-start pb-[5px] pt-[11px] px-[15px] relative rounded-[11.877px] shrink-0 w-[295px]" data-name="01">
      <div aria-hidden="true" className="absolute border-[1.188px] border-solid border-white inset-0 pointer-events-none rounded-[11.877px] shadow-[0px_0px_4.751px_0px_rgba(0,0,0,0.23)]" />
      <Name1 />
      <Frame1 />
      <Frame45 />
      <Frame50 />
    </div>
  );
}

function Row() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex gap-[22.59px] items-start relative shrink-0" data-name="row01">
      <Component />
    </div>
  );
}

function Frame16() {
  return (
    <div className="gap-[10px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[712px] relative shrink-0 w-full">
      <Row1 />
      <Row />
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex flex-col items-start px-[20px] py-[5px] relative shrink-0 w-[945px]">
      <Frame5 />
      <Frame16 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame12 />
      <Frame14 />
      <Frame11 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[rgba(255,255,255,0.73)] relative rounded-[14px] shadow-[0px_12px_23.5px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Input">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[22px] pt-[4px] px-[5px] relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Search1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[24px] pt-[11px] px-[24px] relative shrink-0 w-[1013px]" data-name="Search">
      <Search />
      <Input1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[10px] grow items-start justify-center min-h-px min-w-px pb-0 pt-[17px] px-0 relative shrink-0">
      <Frame22 />
      <Search1 />
    </div>
  );
}

function FilterContainer() {
  return (
    <div className="content-stretch flex gap-[10px] h-[1091px] items-start relative shrink-0 w-[1272px]" data-name="Filter Container">
      <SiderDefault />
      <Frame17 />
    </div>
  );
}

function MainContentContainer() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col gap-[10px] grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Main Content Container">
      <FilterContainer />
    </div>
  );
}

function MainContentContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[1091px] items-start relative shrink-0 w-full" data-name="Main Content Container">
      <MainContentContainer />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[1091px] items-start relative shrink-0 w-full">
      <MainContentContainer1 />
    </div>
  );
}

function FooterTitle() {
  return (
    <div className="box-border content-stretch flex items-center px-0 py-[10px] relative shrink-0" data-name="Footer Title">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#108c87] text-[36px] text-nowrap tracking-[-0.72px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">Quick Links</p>
      </div>
    </div>
  );
}

function FooterLinksColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start leading-[0] relative shrink-0 w-[201px]" data-name="Footer Links Column">
      <div className="flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[#3f5a75] text-[16px] tracking-[-0.32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Help</p>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#008d84] text-[14px] tracking-[-0.28px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Submission Rights Requirements</p>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#008d84] text-[14px] tracking-[-0.28px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">User Guide</p>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#008d84] text-[14px] tracking-[-0.28px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Online Demo</p>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#008d84] text-[14px] tracking-[-0.28px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Security Tips</p>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#008d84] text-[14px] tracking-[-0.28px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">System Requirements</p>
      </div>
    </div>
  );
}

function FooterIcon() {
  return (
    <div className="h-[236px] relative shrink-0 w-[20px]" data-name="Footer Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 236">
        <g id="Footer Icon">
          <path d="M10 10V226" id="Vector 17" stroke="var(--stroke-0, #B4B4B4)" />
        </g>
      </svg>
    </div>
  );
}

function FooterLinksColumn1() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start leading-[0] relative shrink-0" data-name="Footer Links Column">
      <div className="flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold justify-center min-w-full relative shrink-0 text-[#3f5a75] text-[16px] tracking-[-0.32px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Related Sites</p>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[#008d84] text-[14px] tracking-[-0.28px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">SFC Corporate Website</p>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#008d84] text-[14px] tracking-[-0.28px] w-[255px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Investor and Financial Education Council</p>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#008d84] text-[14px] tracking-[-0.28px] w-[280px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Public Register of Licensed and Registrants</p>
      </div>
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[#008d84] text-[14px] tracking-[-0.28px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">List of investment Products</p>
      </div>
    </div>
  );
}

function FooterLinksContainer() {
  return (
    <div className="content-stretch flex gap-[117px] items-start relative shrink-0 w-full" data-name="Footer Links Container">
      <FooterLinksColumn />
      <FooterIcon />
      <FooterLinksColumn1 />
    </div>
  );
}

function FooterSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[735px]" data-name="Footer Section">
      <FooterTitle />
      <FooterLinksContainer />
    </div>
  );
}

function FooterIcon1() {
  return (
    <div className="relative shrink-0 size-[11px]" data-name="Footer Icon">
      <div className="absolute inset-[-5.45%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <g id="Footer Icon">
            <path d={svgPaths.pa1d0880} id="Vector" stroke="var(--stroke-0, #375573)" strokeWidth="1.2" />
            <path d={svgPaths.p18a13900} id="Vector_2" stroke="var(--stroke-0, #375573)" strokeLinecap="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FooterBottomSection() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Footer Bottom Section">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24.812px] justify-center leading-[0] relative shrink-0 text-[#375573] text-[14px] tracking-[-0.28px] w-[59.962px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Copyright</p>
      </div>
      <FooterIcon1 />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[24.812px] justify-center leading-[0] relative shrink-0 text-[#375573] text-[14px] tracking-[-0.28px] w-[375.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">2025 Securities and Futures Commission. All rights reserved.</p>
      </div>
    </div>
  );
}

function FooterBottomSection1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Footer Bottom Section">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#375573] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">Maintenance Schedule | Privancy Policy Statement | Terms of user | Contact us</p>
      </div>
    </div>
  );
}

function FooterBottomContainer() {
  return (
    <div className="content-stretch flex gap-[315px] items-center relative shrink-0 w-full" data-name="Footer Bottom Container">
      <FooterBottomSection />
      <FooterBottomSection1 />
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[58px] items-start relative shrink-0 w-[1242.68px]" data-name="Footer Container">
      <FooterSection />
      <FooterBottomContainer />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#e4eaea] h-[505px] relative shrink-0 w-full" data-name="footer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[505px] items-start pb-0 pl-[316px] pr-[320px] pt-[55px] relative w-full">
          <FooterContainer />
        </div>
      </div>
    </div>
  );
}

function SearchEntitiesPage() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1665px] items-center relative shrink-0 w-full" data-name="Search Entities Page">
      <Frame18 />
      <Frame19 />
      <Footer />
    </div>
  );
}

export default function Frame23() {
  return (
    <div className="relative size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
          <SearchEntitiesPage />
        </div>
      </div>
    </div>
  );
}