import type { ContentComponentProps } from "../../../types/ContentComponentProps";
import "./Content.css";

const Content = ({ data }: ContentComponentProps) => {
  return (
    <div className="content-container">
      <h3>{data?.heading}</h3>
      <p>{data?.content}</p>
    </div>
  );
};

export default Content;
