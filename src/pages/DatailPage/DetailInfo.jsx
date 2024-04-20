import { useParams } from "react-router-dom";
import { InfoType } from "../../constants/detail/InfoType";
import { useEffect, useState } from "react";
import { useFetchDetailInfoQuery } from "../../hooks/useFetchDetailInfo";

const DetailInfo = ({ contentTypeId }) => {
  const { contentId } = useParams();
  const [infoData, setInfoData] = useState();

  const { data, isLoading, isError } = useFetchDetailInfoQuery(
    contentId,
    contentTypeId
  );

  useEffect(() => {
    if (!isLoading && !isError) {
      setInfoData(data.response.body.items.item);
    }
  }, [data, isLoading, isError]);

  console.log("info here", data, infoData, contentId, contentTypeId);

  function getInfoTypeTitle(contentTypeId) {
    let infoTypeInfo = InfoType.find((type) => {
      return type.contentTypeId === contentTypeId;
    });
    if (!infoTypeInfo) {
      infoTypeInfo = InfoType[0];
    }
    if (infoTypeInfo && infoTypeInfo.infoTypeTitle) {
      return infoTypeInfo.infoTypeTitle;
    }

    return null;
  }

  const infoTypeTitle = getInfoTypeTitle(contentTypeId);
  console.log(contentTypeId, infoTypeTitle, Object.keys(infoTypeTitle));

  return (
    <ul className="introWrap info">
      {/* {infoData &&
        infoData.map((info, index) => {
          console.log(info);
          // info.map((item) => <li key={index}>{item}</li>);
        })} */}
      {infoData &&
        Object.keys(infoTypeTitle).map((title) => {
          return infoData.map((info, index) => {
            // console.log(infoTypeTitle[title], info[title]);
            return (
              <li key={index} className="px-2">
                {infoTypeTitle[title]} : {info[title]}
              </li>
            );
          });
        })}
    </ul>
  );
};
export default DetailInfo;
