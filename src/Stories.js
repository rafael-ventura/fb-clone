import img01 from "./resources/img01.jpg";
import img02 from "./resources/img02.jpg";
import img03 from "./resources/img03.jpg";
import img04 from "./resources/img04.jpg";
import img05 from "./resources/img05.jpg";

export default function Stories() {
  return (
    <div className="stories">
      <div className="storiesCard" style={{ backgroundImage: `url(${img01})` }}>
        <p> Tuán Kiêt Jr. </p>
      </div>
      <div className="storiesCard" style={{ backgroundImage: `url(${img02})` }}>
        <p> Rafael Ventura </p>
      </div>
      <div className="storiesCard" style={{ backgroundImage: `url(${img03})` }}>
        <p> Rafael Ventura </p>
      </div>
      <div className="storiesCard" style={{ backgroundImage: `url(${img04})` }}>
        <p> Rafael Ventura </p>
      </div>
      <div className="storiesCard" style={{ backgroundImage: `url(${img05})` }}>
        <p> Rafael Ventura </p>
      </div>
    </div>
  );
}
