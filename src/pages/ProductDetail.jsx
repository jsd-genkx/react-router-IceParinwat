import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Details for Product{id}</h1>
      <p>{id}</p>
    </div>
  );
}
