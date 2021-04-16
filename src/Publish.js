import imgProfile from "./resources/img07.jpg";
import { BiVideoRecording, BiHappyAlt } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";

export default function Publish() {
  return (
    <div className="publishField">
      <div className="publishForm">
        <img src={imgProfile} alt="profile pic" />
        <input type="text" placeholder="No que você está pensando?" />
      </div>
      <div className="publishButtons">
        <div className="video">
          <BiVideoRecording />
          <span> Video ao vivo </span>
        </div>
        <div className="photo">
          <IoMdPhotos />
          <span> Foto/vídeo</span>
        </div>
        <div className="feelings">
          <BiHappyAlt />
          <span> Sentimento/Atividade</span>
        </div>
      </div>
    </div>
  );
}
