import { useState } from 'react';
import { createVideo } from '../services/api';
import { useNavigate } from 'react-router-dom';

const CreateVideo = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    imageUrl: '',
    videoUrl: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createVideo(formData); // Envía el nuevo video a la API
      navigate('/'); // Redirige al usuario a la página principal
    } catch (error) {
      console.error('Error al crear el video:', error);
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Video</h2>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Categoría</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <label>URL de la Imagen</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />

        <label>URL del Video</label>
        <input
          type="text"
          name="videoUrl"
          value={formData.videoUrl}
          onChange={handleChange}
          required
        />

        <label>Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Crear Video</button>
      </form>
    </div>
  );
};

export default CreateVideo;
