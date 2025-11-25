import React, { useState } from 'react';
import { useSiteData } from '../contexts/SiteDataContext';

const IletisimTab: React.FC = () => {
  const { siteInfo, updateSiteInfo } = useSiteData();
  const [title, setTitle] = useState(siteInfo.contactSection.title);
  const [description, setDescription] = useState(siteInfo.contactSection.description);
  const [formTitle, setFormTitle] = useState(siteInfo.contactSection.formTitle);
  const [formDescription, setFormDescription] = useState(siteInfo.contactSection.formDescription);
  const [showForm, setShowForm] = useState(siteInfo.contactSection.showForm);

  const handleSave = async () => {
    const success = await updateSiteInfo({
      contactSection: { title, description, formTitle, formDescription, showForm },
    });
    if (success) alert('İletişim bölümü güncellendi!');
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
        <label className="block text-sm font-medium">Form Başlığı</label>
        <input
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Form Açıklaması</label>
        <textarea
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Formu Göster</label>
        <input
          type="checkbox"
          checked={showForm}
          onChange={(e) => setShowForm(e.target.checked)}
          className="mt-1"
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

export default IletisimTab;
