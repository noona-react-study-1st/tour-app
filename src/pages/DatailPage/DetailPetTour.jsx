import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchDetailPetTourQuery } from "../../hooks/useFetchDetailPetTour";
import PetTourType from "../../constants/detail/PetTourType";

const DetailPetTour = ({ contentTypeId }) => {
  const { contentId } = useParams();
  const [infoData, setInfoData] = useState();

  const { data, isLoading, isError } = useFetchDetailPetTourQuery(
    contentId,
    contentTypeId
  );

  useEffect(() => {
    if (!isLoading && !isError) {
      setInfoData(data.response.body.items.item);
    }
  }, [data, isLoading, isError]);

  console.log("pet here", data, infoData, contentId, contentTypeId);

  function removeBrTags(text) {
    if (typeof text === "string") {
      return text.replace(/<br\s*\/?>/gi, ""); // Replace <br> tags with an empty string
    }
    return text;
  }

  return (
    <ul className="introWrap no-print typePet">
      {infoData !== undefined &&
        Object.keys(PetTourType).map((title) => {
          return infoData.map((info, index) => {
            if (info[title] === "" || info[title] === "0") {
              return false;
            } else {
              return (
                <li key={index}>
                  {PetTourType[title]} : {removeBrTags(info[title])}
                </li>
              );
            }
          });
        })}
    </ul>
  );
};
export default DetailPetTour;
