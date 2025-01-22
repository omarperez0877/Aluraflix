const VideoCard = ({ video, onEdit, onDelete }) => (
  <div className="video-card">
    <img src={video.imageUrl} alt={video.title} />
    <h3>{video.title}</h3>
    <p>{video.description}</p>
    <button onClick={() => onEdit(video)}>✏️ Editar</button>
    <button onClick={() => onDelete(video.id)}>🗑️ Eliminar</button>
  </div>
);

export default VideoCard;
