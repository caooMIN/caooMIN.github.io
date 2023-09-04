import CuisinesCard from "./CuisinesCard";
import { useParams } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage";

const CuisinesList = ({cuisine}) => {
  const { id } = useParams();
  

  const filteredCuisines = cuisine.filter(c => c.id === parseInt(id));

  return (
    <div className="cuisines-list">
      {filteredCuisines.length > 0 ? (
        filteredCuisines.map(cuisine => (
          <CuisinesCard key={cuisine.id} cuisine={cuisine} />
        ))
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default CuisinesList;
