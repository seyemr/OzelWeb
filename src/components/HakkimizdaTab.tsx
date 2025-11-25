import React, { useState } from 'react';
import { useSiteData } from '../contexts/SiteDataContext';

const HakkimizdaTab: React.FC = () => {
  const { siteInfo, updateSiteInfo } = useSiteData();
  const [title, setTitle] = useState(siteInfo.aboutSection.title);
  const [description, setDescription] = useState(siteInfo.aboutSection.description);
  const [mission, setMission] = useState(siteInfo.aboutSection.mission);
  const [vision, setVision] = useState(siteInfo.aboutSection.vision);

  const handleSave = async () => {
    const success = await updateSiteInfo({
      aboutSection: { title, description, mission, vision },
    });
    if (success) alert('Hakkımızda bölümü güncellendi!');
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Başlık</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Açıklama</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Misyon</label>
        <textarea
          value={mission}
          onChange={(e) => setMission(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Vizyon</label>
        <textarea
          value={vision}
          onChange={(e) => setVision(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Kaydet
      </button>
    </div>
  );
};

export default HakkimizdaTab;
