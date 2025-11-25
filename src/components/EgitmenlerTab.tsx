import React, { useState } from 'react';
import { useSiteData } from '../contexts/SiteDataContext';

const EgitmenlerTab: React.FC = () => {
  const { siteInfo, updateSiteInfo } = useSiteData();
  const [trainers, setTrainers] = useState(siteInfo.trainersSection.trainers);

  const handleTrainerChange = (index: number, field: string, value: string) => {
    const updatedTrainers = [...trainers];
    updatedTrainers[index] = { ...updatedTrainers[index], [field]: value };
    setTrainers(updatedTrainers);
  };

  const handleAddTrainer = () => {
    const newTrainer = { id: Date.now().toString(), name: '', title: '', bio: '' };
    setTrainers([...trainers, newTrainer]);
  };

  const handleDeleteTrainer = (index: number) => {
    const updatedTrainers = trainers.filter((_, i) => i !== index);
    setTrainers(updatedTrainers);
  };

  const handleImageUpload = (index: number, file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const updatedTrainers = [...trainers];
      updatedTrainers[index] = { ...updatedTrainers[index], image: reader.result as string };
      setTrainers(updatedTrainers);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    const success = await updateSiteInfo({
      trainersSection: {
        title: siteInfo.trainersSection.title,
        description: siteInfo.trainersSection.description,
        trainers,
      },
    });
    if (success) alert('Eğitmenler güncellendi!');
  };

  return (
    <div className="space-y-4">
      {trainers.map((trainer, index) => (
        <div key={trainer.id} className="space-y-2">
          <div>
            <label className="block text-sm font-medium">Ad</label>
            <input
              type="text"
              value={trainer.name}
              onChange={(e) => handleTrainerChange(index, 'name', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Ünvan</label>
            <input
              type="text"
              value={trainer.title}
              onChange={(e) => handleTrainerChange(index, 'title', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Biyografi</label>
            <textarea
              value={trainer.bio}
              onChange={(e) => handleTrainerChange(index, 'bio', e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Profil Resmi</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleImageUpload(index, e.target.files[0]);
                }
              }}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            {trainer.image && (
              <img
                src={trainer.image}
                alt="Profil Resmi"
                className="mt-2 w-32 h-32 object-cover rounded-full border"
              />
            )}
          </div>
          <button
            onClick={() => handleDeleteTrainer(index)}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Sil
          </button>
        </div>
      ))}
      <button
        onClick={handleAddTrainer}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Yeni Eğitmen Ekle
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

export default EgitmenlerTab;
