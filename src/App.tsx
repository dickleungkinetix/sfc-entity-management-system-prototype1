import { useState } from 'react';
import { Header } from './components/Header';
import { FilterSidebar } from './components/FilterSidebar';
import { SearchBar } from './components/SearchBar';
import { EntityCard } from './components/EntityCard';
import { EntityDetailPage } from './components/EntityDetailPage';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { ProtectionPage } from './components/ProtectionPage';
import { useAuth } from './contexts/AuthContext';
import { Grid, List, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu';

// Mock data for entities
const allEntities = [
  {
    id: '1',
    nameChinese: '滙豐金融證券(香港)有限公司',
    nameEnglish: 'HSBC Broking Securities (Hong Kong) Limited',
    refNumber: 'AAA529',
    incorporation: '1991/3/5',
    phone: '+852 282 21111',
    email: 'chanTaiMan@hsbc.hk',
    unit: 'LIC',
    address: "1 Queen's Road Central, Hong Kong",
    classification: 'Corporate',
    status: 'Active',
    isFavorite: true,
  },
  {
    id: '2',
    nameChinese: '滙豐機構信託服務(亞洲)有限公司',
    nameEnglish: 'HSBC Institutional Trust Services (Asia) Limited',
    refNumber: 'AAK784',
    incorporation: '2019/3/20',
    phone: '+852 282 21111',
    email: 'chanTaiMan@hsbc.hk',
    unit: 'LIC',
    address: 'Floor 15, Science Park',
    classification: 'Corporate',
    status: 'Active',
    isFavorite: false,
  },
  {
    id: '3',
    nameChinese: '香港證券投資有限公司',
    nameEnglish: 'Hong Kong Securities Investment Limited',
    refNumber: 'BBK123',
    incorporation: '2015/6/12',
    phone: '+852 345 67890',
    email: 'info@hksil.hk',
    unit: 'LIC',
    address: '25 Harbour Road, Wan Chai',
    classification: 'Corporate',
    status: 'Active',
    isFavorite: false,
  },
  {
    id: '4',
    nameChinese: '陳大文',
    nameEnglish: 'Chan Tai Man',
    refNumber: 'IND001',
    incorporation: '2010/1/15',
    phone: '+852 987 65432',
    email: 'ctm@email.hk',
    unit: 'LIC',
    address: '123 Financial Street, Central',
    classification: 'Individual',
    status: 'Active',
    isFavorite: true,
  },
];

export default function App() {
  const { isAuthenticated, loading } = useAuth();

  const [entities, setEntities] = useState(allEntities);
  const [filteredEntities, setFilteredEntities] = useState(allEntities);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortFilter, setSortFilter] = useState('Recently Updated');
  const [aiAskEnabled, setAiAskEnabled] = useState(true);
  const [selectedEntity, setSelectedEntity] = useState<typeof allEntities[0] | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredEntities(entities);
    } else {
      const filtered = entities.filter(
        (entity) =>
          entity.nameEnglish.toLowerCase().includes(query.toLowerCase()) ||
          entity.nameChinese.includes(query) ||
          entity.refNumber.toLowerCase().includes(query.toLowerCase()) ||
          entity.classification.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredEntities(filtered);
    }
  };

  const handleFiltersChange = (filters: any) => {
    // In a real app, this would filter based on the selected filters
    console.log('Filters changed:', filters);
  };

  const handleViewEntity = (entityId: string) => {
    const entity = entities.find((e) => e.id === entityId);
    if (entity) {
      setSelectedEntity(entity);
    }
  };

  const handleCloseDetail = () => {
    setSelectedEntity(null);
  };

  const handleToggleFavorite = (entityId: string | number) => {
    const id = String(entityId);
    setEntities(prevEntities =>
      prevEntities.map(entity =>
        entity.id === id ? { ...entity, isFavorite: !entity.isFavorite } : entity
      )
    );
    setFilteredEntities(prevEntities =>
      prevEntities.map(entity =>
        entity.id === id ? { ...entity, isFavorite: !entity.isFavorite } : entity
      )
    );
    if (selectedEntity && selectedEntity.id === id) {
      setSelectedEntity({ ...selectedEntity, isFavorite: !selectedEntity.isFavorite });
    }
  };

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Show protection page if not authenticated
  if (!isAuthenticated) {
    return <ProtectionPage />;
  }

  // Show main app if authenticated
  return (
    <div className="relative size-full bg-white overflow-y-auto">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
          <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full max-w-[1272px] px-4">
              {/* Filter Sidebar */}
              <FilterSidebar onFiltersChange={handleFiltersChange} />

              {/* Main Content Area */}
              <div className="basis-0 box-border content-stretch flex flex-col gap-[10px] grow items-start justify-center min-h-px min-w-px pb-0 pt-[17px] px-0 relative shrink-0">
                {/* Primary Search Title */}
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-col justify-center size-full">
                    <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center pl-[24px] pr-0 py-0 relative w-full">
                      <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[20px] text-black text-center text-nowrap">
                        <p className="leading-[22px] whitespace-pre">Primary Search</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Search Section */}
                <div className="box-border content-stretch flex flex-col items-start pb-[24px] pt-[11px] px-[24px] relative shrink-0 w-full">
                  <SearchBar onSearch={handleSearch} aiAskEnabled={aiAskEnabled} setAiAskEnabled={setAiAskEnabled} />

                  {/* Search Results Container */}
                  <div className="bg-[rgba(255,255,255,0.73)] relative rounded-[14px] shadow-[0px_12px_23.5px_0px_rgba(0,0,0,0.06)] shrink-0 w-full mt-4">
                    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[22px] pt-[4px] px-[5px] relative w-full">
                      {/* AI Summary */}
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        {aiAskEnabled && (
                          <div className="box-border content-stretch flex gap-[10px] items-center pb-0 pl-[20px] pr-[10px] pt-[6px] relative shrink-0 w-full">
                            <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] w-full">
                              <p className="font-['Roboto',sans-serif] leading-[22px] mb-0 text-black font-bold">
                                AI Summary
                              </p>
                              <p className="leading-[22px] text-[#1c1c1c]">
                                <span className="font-['Roboto',sans-serif]">{`Based on your search results, I found `}</span>
                                <span className="font-['Roboto',sans-serif]">
                                  {filteredEntities.length} entities
                                </span>
                                <span className="font-['Roboto',sans-serif]">{` matching your criteria. Most entities (${filteredEntities.filter(e => e.status === 'Active').length}) are currently active. Several entities are managed by the LIC unit.`}</span>
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Category Pills */}
                        <div className={`box-border content-stretch flex gap-[10px] items-start pb-0 pl-[20px] pr-0 relative shrink-0 flex-wrap ${aiAskEnabled ? 'pt-[4px]' : 'pt-[6px]'}`}>
                          <div className="bg-neutral-100 box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[5px] relative rounded-[100px] shrink-0 border border-[#f0f0f0]">
                            <p className="font-['Roboto',sans-serif] leading-[22px] relative shrink-0 text-[#3b3b3b] text-[14px] text-center">
                              Corporate : {filteredEntities.filter(e => e.classification === 'Corporate').length}
                            </p>
                          </div>
                          <div className="bg-neutral-100 box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[5px] relative rounded-[100px] shrink-0 border border-[#f0f0f0]">
                            <p className="font-['Roboto',sans-serif] leading-[22px] relative shrink-0 text-[#3b3b3b] text-[14px] text-center text-nowrap whitespace-pre">
                              Individual: {filteredEntities.filter(e => e.classification === 'Individual').length}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-[22px] relative shrink-0 w-full px-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 955 22">
                          <path d="M10 11H945" stroke="#D3D3D3" />
                        </svg>
                      </div>

                      {/* Search Results Header */}
                      <div className="box-border content-stretch flex items-center px-0 py-[7px] relative shrink-0 w-full">
                        <div className="box-border content-stretch flex items-center px-[20px] py-0 relative shrink-0 w-full">
                          <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="flex flex-col font-['Roboto',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center text-nowrap">
                              <p className="leading-[22px] whitespace-pre">Search Results ({filteredEntities.length})</p>
                            </div>
                          </div>

                          {/* View Toggle */}
                          <div className="content-stretch flex gap-[6px] h-[32px] items-center relative shrink-0">
                            <button
                              onClick={() => setViewMode('grid')}
                              className={`p-2 hover:bg-gray-100 rounded transition-colors ${
                                viewMode === 'grid' ? 'bg-gray-100' : ''
                              }`}
                            >
                              <Grid className="w-[18px] h-[18px] text-[#128c88]" />
                            </button>
                            <button
                              onClick={() => setViewMode('list')}
                              className={`p-2 hover:bg-gray-100 rounded transition-colors ${
                                viewMode === 'list' ? 'bg-gray-100' : ''
                              }`}
                            >
                              <List className="w-[18px] h-[18px] text-[#128c88]" />
                            </button>
                          </div>

                          {/* Advanced Filter Dropdown */}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button className="bg-white relative rounded-[2px] shrink-0 border border-[#d9d9d9] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.02)] hover:bg-gray-50 transition-colors ml-2">
                                <div className="box-border content-stretch flex gap-[8px] items-center justify-end overflow-clip px-[16px] py-[5px] relative rounded-[inherit]">
                                  <p className="font-['Roboto',sans-serif] leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] text-nowrap whitespace-pre">
                                    {sortFilter}
                                  </p>
                                  <ChevronDown className="h-[11.25px] w-[10px] text-black/85" />
                                </div>
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-[200px]">
                              <DropdownMenuItem onClick={() => setSortFilter('Recently Updated')}>
                                Recently Updated
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => setSortFilter('Newest First')}>
                                Newest First
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => setSortFilter('Trending Now (7 Days)')}>
                                Trending Now (7 Days)
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => setSortFilter('Most Popular (All Time)')}>
                                Most Popular (All Time)
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>

                      {/* Entity Cards Grid - Hidden when detail view is open */}
                      {!selectedEntity && (
                        <div className="box-border content-stretch flex flex-col items-start px-[20px] py-[5px] relative shrink-0 w-full">
                          <div
                            className={`gap-[22.59px] w-full ${
                              viewMode === 'grid'
                                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                : 'flex flex-col'
                            }`}
                          >
                            {filteredEntities.map((entity) => (
                              <div key={entity.id} className="h-[220px]">
                                <EntityCard {...entity} onViewClick={handleViewEntity} />
                              </div>
                            ))}
                          </div>

                          {filteredEntities.length === 0 && (
                            <div className="w-full text-center py-12">
                              <p className="font-['Roboto',sans-serif] text-[16px] text-gray-500">
                                No entities found matching your search criteria.
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Entity Detail View */}
                      {selectedEntity && (
                        <EntityDetailPage
                          entity={{
                            id: Number(selectedEntity.id),
                            name: selectedEntity.nameEnglish,
                            chineseName: selectedEntity.nameChinese,
                            type: selectedEntity.classification as 'Corporate' | 'Individual',
                            status: selectedEntity.status,
                            refNumber: selectedEntity.refNumber,
                            regNumber: selectedEntity.refNumber,
                            incorporationDate: selectedEntity.incorporation,
                            ownedBy: selectedEntity.unit,
                            address: selectedEntity.address,
                            email: selectedEntity.email,
                            phone: selectedEntity.phone,
                            lastUpdated: new Date().toLocaleDateString(),
                            verificationStatus: 'Verified',
                            tags: ['Financial', 'Hong Kong', selectedEntity.unit],
                            isFavorite: selectedEntity.isFavorite,
                            aiSummary: aiAskEnabled ? `This is a ${selectedEntity.classification.toLowerCase()} entity registered in Hong Kong. It has been active since ${selectedEntity.incorporation} and is managed by the ${selectedEntity.unit} unit. The entity maintains a presence at ${selectedEntity.address}.` : undefined,
                          }}
                          onClose={handleCloseDetail}
                          onToggleFavorite={handleToggleFavorite}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
          <ChatWidget />
        </div>
      </div>
    </div>
  );
}
