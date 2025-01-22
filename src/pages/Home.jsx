import { useEffect, useState } from 'react';
import { fetchVideos, fetchCategories, deleteVideo, updateVideo } from '../services/api';
import VideoCard from '../components/VideoCard';
import ModalForm from '../components/ModalForm';

const Home = () => {
  const [videos, setVideos] = useState([]); // Lista de videos
  const [categories, setCategories] = useState([]); // Lista de categorías
  const [selectedVideo, setSelectedVideo] = useState(null); // Video seleccionado para editar
  const [showModal, setShowModal] = useState(false); // Mostrar u ocultar modal

  // Eliminar un video
  const handleDelete = async (id) => {
    await deleteVideo(id);
    setVideos(videos.filter((video) => video.id !== id));
  };

  // Editar un video
  const handleEdit = (video) => {
    setSelectedVideo(video); // Asigna el video seleccionado al estado
    setShowModal(true); // Muestra el modal
  };

  // Guardar cambios en un video editado
  const handleSave = async (updatedVideo) => {
    await updateVideo(updatedVideo.id, updatedVideo);
    setVideos(
      videos.map((video) => (video.id === updatedVideo.id ? updatedVideo : video))
    );
    setShowModal(false); // Cierra el modal después de guardar
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    const loadData = async () => {
      const videoData = await fetchVideos();
      const categoryData = await fetchCategories();
      setVideos(videoData.data);
      setCategories(categoryData.data);
    };
    loadData();
  }, []);

  return (
    <div>
      {/* Modal para editar video */}
      {showModal && (
        <ModalForm
          initialData={selectedVideo}
          onSave={handleSave}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Renderizado de categorías y sus videos */}
      {categories.map((category) => (
        <div key={category.id} className="category-section">
          <h2>{category.name}</h2>
          <div className="video-list">
            {videos.filter((video) => video.category === category.id).length > 0 ? (
              videos
                .filter((video) => video.category === category.id)
                .map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))
            ) : (
              <p>No hay videos en esta categoría.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
