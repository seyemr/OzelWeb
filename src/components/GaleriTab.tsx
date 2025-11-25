import React, { useState } from 'react';
import { useSiteData } from '../contexts/SiteDataContext';
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided } from 'react-beautiful-dnd';

const GaleriTab: React.FC = () => {
  const { siteInfo, updateSiteInfo } = useSiteData();
  const [images, setImages] = useState(siteInfo.gallerySection.images);

  const handleImageChange = (index: number, field: string, value: string) => {
    const updatedImages = [...images];
    updatedImages[index] = { ...updatedImages[index], [field]: value };
    setImages(updatedImages);
  };

  const handleAddImage = () => {
    const newImage = { id: Date.now().toString(), url: '', alt: '', caption: '' };
    setImages([...images, newImage]);
  };

  const handleDeleteImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handleSave = async () => {
    const success = await updateSiteInfo({
      gallerySection: {
        title: siteInfo.gallerySection.title,
        description: siteInfo.gallerySection.description,
        images,
      },
    });
    if (success) alert('Galeri güncellendi!');
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedImages = Array.from(images);
    const [removed] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, removed);

    setImages(reorderedImages);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="gallery">
        {(provided: DroppableProvided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
            {images.map((image, index) => (
              <Draggable key={image.id} draggableId={image.id} index={index}>
                {(provided: DraggableProvided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="space-y-2 bg-white p-4 rounded shadow"
                  >
                    <div>
                      <label className="block text-sm font-medium">Resim URL</label>
                      <input
                        type="text"
                        value={image.url}
                        onChange={(e) => handleImageChange(index, 'url', e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Alt Metin</label>
                      <input
                        type="text"
                        value={image.alt}
                        onChange={(e) => handleImageChange(index, 'alt', e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Açıklama</label>
                      <input
                        type="text"
                        value={image.caption || ''}
                        onChange={(e) => handleImageChange(index, 'caption', e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      />
                    </div>
                    <button
                      onClick={() => handleDeleteImage(index)}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                      Sil
                    </button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <button
        onClick={handleAddImage}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Yeni Resim Ekle
      </button>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Kaydet
      </button>
    </DragDropContext>
  );
};

export default GaleriTab;
