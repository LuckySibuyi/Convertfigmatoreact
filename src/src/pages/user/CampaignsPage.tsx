import { useState } from 'react';
import { Calendar, AlignJustify } from 'lucide-react@0.487.0';
import { UserSidebar } from '../../components/layout/UserSidebar';
import svgPaths from '../../../imports/svg-balext371s';
import imgRectangle115 from 'figma:asset/0e961f9582aec77a34bf07fab9ef41a1b7c868ad.png';
import imgRectangle120 from 'figma:asset/61798ab28bf7b93c89df5d8aaefacc49a0f1de1d.png';
import imgEllipse34 from 'figma:asset/2fc4b373dd85a6869cf572c5f63c4cccb3cd1ec0.png';
import imgEllipse35 from 'figma:asset/6d6828c6accb3c6c74ecaf7d5c9614b0fa026e28.png';
import imgEllipse36 from 'figma:asset/14e5699a8399d12dd79e85db4e560c982e664a8c.png';
import imgEllipse37 from 'figma:asset/7c725d2e94b4ad503c42f0fe908638a5861386b4.png';

type Page = 'dashboard' | 'campaigns' | 'vouchers' | 'transactions' | 'profile' | 'overview' | 'draft' | 'howItWorks' | 'campaignDetail' | 'viewCampaign' | 'messaging' | 'serviceDetail' | 'selectedServices' | 'createCampaign' | 'manageCampaign' | 'contributors' | 'contributorDetail' | 'campaignSchedule' | 'campaignsHistory' | 'contribute' | 'selectServices' | 'viewCampaignDetail' | 'helpSupport';

interface CampaignsPageProps {
  onNavigate: (page: Page) => void;
  onLogout?: () => void;
}

export function CampaignsPage({ onNavigate, onLogout }: CampaignsPageProps) {
  const campaigns = [
    {
      id: 1,
      title: 'Cape Town Gateway Weekend',
      image: imgRectangle115,
      serviceProvider: 'Seaview Lodge',
      catering: 'Tasteless Catering',
      startDate: 'Sep 1',
      endDate: 'Dec 5, 2025',
      goal: 10000.00,
      contributed: 3000.00,
      members: [imgEllipse34, imgEllipse35, imgEllipse36, imgEllipse37],
      buttonText: 'Contribute',
      buttonClass: 'bg-[#2d1b69]'
    },
    {
      id: 2,
      title: 'Durban Beach Escape',
      image: imgRectangle120,
      serviceProvider: 'Seaview Lodge',
      catering: 'TasteBiles Catering',
      startDate: 'Sep 1',
      endDate: 'Dec 5, 2025',
      goal: 20000.00,
      contributed: 13000.00,
      members: [imgEllipse34, imgEllipse35, imgEllipse36, imgEllipse37],
      buttonText: 'Manage',
      buttonClass: 'bg-[#2d1b69]'
    }
  ];

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <UserSidebar activePage="campaigns" onNavigate={onNavigate} onLogout={onLogout} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-[532px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-[44px] px-4 pr-12 bg-[#f5f5f5] rounded-[12px] font-['Inter',sans-serif] text-[16px] text-[#868484] outline-none"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1c5c03f0} stroke="#868484" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-[120px] h-[44px] bg-[#8363f2] hover:bg-[#7354e1] text-white rounded-[12px] font-['Inter',sans-serif] text-[16px] flex items-center justify-center gap-2 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p19e5f200} fill="white" />
                </svg>
                Create
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p280fe110} fill="#414040" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p160e9a00} fill="#414040" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2a9a6200} fill="#414040" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-['Inter',sans-serif] text-[24px] font-semibold text-black mb-1">Campaigns</h1>
              <p className="font-['Inter',sans-serif] text-[14px] text-[#6b7280]">Here are your ongoing campaigns</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Calendar size={20} className="text-gray-600" />
              </button>
              <button className="px-4 py-2 flex items-center gap-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <AlignJustify size={16} className="text-gray-600" />
                <span className="font-['Inter',sans-serif] text-[14px] text-black">Sort by</span>
              </button>
            </div>
          </div>

          {/* Campaign Cards */}
          <div className="space-y-6">
            {campaigns.map((campaign) => {
              const percentage = Math.round((campaign.contributed / campaign.goal) * 100);
              
              return (
                <div key={campaign.id} className="bg-white rounded-[12px] border border-gray-200 overflow-hidden">
                  {/* Campaign Image */}
                  <div className="relative h-[200px]">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Campaign Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h2 className="font-['Inter',sans-serif] text-[18px] font-semibold text-black mb-1">{campaign.title}</h2>
                        <p className="font-['Inter',sans-serif] text-[12px] text-[#6b7280]">Service Provider</p>
                      </div>
                      <button
                        onClick={() => onNavigate('viewCampaignDetail')}
                        className={`${campaign.buttonClass} hover:opacity-90 text-white px-6 py-2 rounded-[8px] font-['Inter',sans-serif] text-[14px] font-medium transition-opacity`}
                      >
                        {campaign.buttonText}
                      </button>
                    </div>

                    {/* Service Providers */}
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p16e84200} fill="#2D1B69" />
                        </svg>
                        <span className="font-['Inter',sans-serif] text-[12px] text-black">{campaign.serviceProvider}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p11da5e30} fill="#2D1B69" />
                        </svg>
                        <span className="font-['Inter',sans-serif] text-[12px] text-black">{campaign.catering}</span>
                      </div>
                      <div className="flex items-center gap-2 ml-auto">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p1a23c500} fill="#2D1B69" />
                        </svg>
                        <span className="font-['Inter',sans-serif] text-[12px] text-black">Campaign Members</span>
                        <div className="flex -space-x-2 ml-1">
                          {campaign.members.map((member, idx) => (
                            <img
                              key={idx}
                              src={member}
                              alt=""
                              className="w-6 h-6 rounded-full border-2 border-white"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <path d={svgPaths.p1b99f400} stroke="#2D1B69" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      <span className="font-['Inter',sans-serif] text-[12px] text-black">
                        {campaign.startDate} - Dec 5, 2025
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p15e9a900} fill="#8363F2" />
                        </svg>
                        <span className="font-['Inter',sans-serif] text-[12px] text-black">
                          Goal-R{campaign.goal.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', ' ')}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`absolute left-0 top-0 h-full ${
                              campaign.id === 1 ? 'bg-[#8363f2]' : 'bg-[#f5a623]'
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>

                      <span className="font-['Inter',sans-serif] text-[12px] text-black">
                        Contributed -R{campaign.contributed.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(',', ' ')}
                      </span>

                      <span className="font-['Inter',sans-serif] text-[12px] font-medium text-black ml-2">
                        {percentage}%
                      </span>

                      <button
                        onClick={() => onNavigate('viewCampaignDetail')}
                        className="px-5 py-2 border border-[#2d1b69] text-[#2d1b69] rounded-[8px] font-['Inter',sans-serif] text-[14px] font-medium hover:bg-[#2d1b69] hover:text-white transition-colors"
                      >
                        View Campaign
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}