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

  return (
    <ul className="introWrap no-print">
      {infoData !== undefined &&
        Object.keys(PetTourType).map((title) => {
          return infoData.map((info, index) => {
            return (
              <li key={index} className="px-2">
                {PetTourType[title]}: {info[title]}
                {/* {PetTourType[title].includes("<br>")
                  ? PetTourType[title].replace(/<br\s*\/?>/gi, "")
                  : PetTourType[title]} */}
              </li>
            );
          });
        })}
    </ul>
  );
};
export default DetailPetTour;
