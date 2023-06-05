import "./";

export default function Image({ img, handleChoice, isClicked }) {
  const handleClick = () => {
    handleChoice(img);
    if (img.isClicked === false) {
      handleChoice(img);
    }
    console.log("moved to memory");
  };

  return (
    <div className="image">
      <div>
        <img
          className="image-main"
          src={img.src}
          alt=""
          onClick={handleClick}
        ></img>
      </div>
    </div>
  );
}
