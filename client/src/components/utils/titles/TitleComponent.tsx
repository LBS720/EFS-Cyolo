import "./titleComponent.css";

interface TitleComponentPorps {
  title: string;
}

function TitleComponent({ title }: TitleComponentPorps) {
  return (
    <div className="title-container">
      <div className="center">
        <h1>
          <span>{title}</span>
          <span>{title}</span>
          <span>{title}</span>
        </h1>
      </div>
    </div>
  );
}

export default TitleComponent;
