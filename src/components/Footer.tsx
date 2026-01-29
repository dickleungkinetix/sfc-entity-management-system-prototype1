import svgPaths from '../imports/svg-v36n2o3enp';

export function Footer() {
  const helpLinks = [
    'Submission Rights Requirements',
    'User Guide',
    'Online Demo',
    'Security Tips',
    'System Requirements',
  ];

  const relatedSites = [
    'SFC Corporate Website',
    'Investor and Financial Education Council',
    'Public Register of Licensed and Registrants',
    'List of investment Products',
  ];

  const bottomLinks = [
    'Maintenance Schedule',
    'Privancy Policy Statement',
    'Terms of user',
    'Contact us',
  ];

  return (
    <div className="bg-[#e4eaea] relative shrink-0 w-full">
      <div className="bg-[#00857c] box-border content-stretch flex flex-col gap-[10px] items-start pb-0 px-4 md:px-[316px] pt-[55px] relative w-full">
        <div className="content-stretch flex flex-col gap-[58px] items-start relative shrink-0 w-full max-w-[1242.68px]">
          {/* Footer Section */}
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full pl-8">
            {/* Footer Title */}
            <div className="box-border content-stretch flex items-center px-0 py-[10px] relative shrink-0">
              <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-white text-[36px] text-nowrap tracking-[-0.72px]">
                <p className="leading-[24px] whitespace-pre">Quick Links</p>
              </div>
            </div>

            {/* Footer Links Container */}
            <div className="content-stretch flex flex-col md:flex-row gap-[32px] md:gap-[117px] items-start relative shrink-0 w-full">
              {/* Help Column */}
              <div className="content-stretch flex flex-col gap-[17px] items-start leading-[0] relative shrink-0 md:w-[201px]">
                <div className="flex flex-col font-['Roboto',sans-serif] justify-center relative shrink-0 text-white text-[16px] tracking-[-0.32px] w-full">
                  <p className="leading-[24px]">Help</p>
                </div>
                {helpLinks.map((link, index) => (
                  <button
                    key={index}
                    className="flex flex-col font-['Roboto',sans-serif] justify-center relative shrink-0 text-white text-[14px] tracking-[-0.28px] w-full hover:underline text-left transition-all"
                  >
                    <p className="leading-[24px]">{link}</p>
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="hidden md:block h-[236px] relative shrink-0 w-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 236">
                  <path d="M10 10V226" stroke="white" />
                </svg>
              </div>

              {/* Related Sites Column */}
              <div className="content-stretch flex flex-col gap-[17px] items-start leading-[0] relative shrink-0">
                <div className="flex flex-col font-['Roboto',sans-serif] justify-center min-w-full relative shrink-0 text-white text-[16px] tracking-[-0.32px] w-[min-content]">
                  <p className="leading-[24px]">Related Sites</p>
                </div>
                {relatedSites.map((link, index) => (
                  <button
                    key={index}
                    className="flex flex-col font-['Roboto',sans-serif] justify-center relative shrink-0 text-white text-[14px] tracking-[-0.28px] hover:underline text-left transition-all"
                  >
                    <p className="leading-[24px]">{link}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom Container */}
          <div className="content-stretch flex flex-col md:flex-row gap-[20px] md:gap-[315px] items-start md:items-center relative shrink-0 w-full pb-8">
            {/* Copyright */}
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
              <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-white text-[14px] tracking-[-0.28px]">
                <p className="leading-[24px]">Copyright</p>
              </div>
              <div className="relative shrink-0 size-[11px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path d={svgPaths.pa1d0880} stroke="white" strokeWidth="1.2" />
                  <path d={svgPaths.p18a13900} stroke="white" strokeLinecap="round" strokeWidth="1.2" />
                </svg>
              </div>
              <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-white text-[14px] tracking-[-0.28px]">
                <p className="leading-[24px]">2025 Securities and Futures Commission. All rights reserved.</p>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0 flex-wrap">
              {bottomLinks.map((link, index) => (
                <button
                  key={index}
                  className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-white text-[14px] text-nowrap tracking-[-0.28px] hover:underline transition-all"
                >
                  <p className="leading-[24px]">
                    {link}
                    {index < bottomLinks.length - 1 && ' |'}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
