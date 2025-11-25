import React, { useState } from 'react';
import { useSiteData } from '../contexts/SiteDataContext';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(() => import('@mantine/rte'), { ssr: false });

const HizmetlerTab: React.FC = () => {
  const { siteInfo, updateSiteInfo } = useSiteData();
  const [services, setServices] = useState(siteInfo.servicesSection.services);

  const handleServiceChange = (index: number, field: string, value: string) => {
    const updatedServices = [...services];
    updatedServices[index] = { ...updatedServices[index], [field]: value };
    setServices(updatedServices);
  };

  const handleAddService = () => {
    const newService = { id: Date.now().toString(), title: '', description: '', icon: '' };
    setServices([...services, newService]);
  };

  const handleDeleteService = (index: number) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  const handleSave = async () => {
    const success = await updateSiteInfo({
      servicesSection: {
        title: siteInfo.servicesSection.title,
        description: siteInfo.servicesSection.description,
        services,
      },
    });
    if (success) alert('Hizmetler güncellendi!');
  };

  return (
    <div className="space-y-4">
      {services.map((service, index) => (
        <div key={service.id} className="space-y-2">
          <div>
            <label className="block text-sm font-medium">Başlık</label>
            <input
              type="text"
              value={service.title}
              onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Açıklama</label>
            <RichTextEditor
              value={service.description}
              onChange={(value: string) => handleServiceChange(index, 'description', value)}
            />
          </div>
          <button
            onClick={() => handleDeleteService(index)}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Sil
          </button>
        </div>
      ))}
      <button
        onClick={handleAddService}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Hizmet Ekle
      </button>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Kaydet
      </button>
    </div>
  );
};

export default HizmetlerTab;
