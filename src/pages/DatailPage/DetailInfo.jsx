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
    <>
      {infoData && (
        <>
          {contentTypeId === "25" ? (
            <span>코스</span>
          ) : contentTypeId === "32" ? (
            <span>숙소</span>
          ) : (
            <ul className="introWrap info type0">
              {infoData.map((info, index) =>
                Object.keys(infoTypeTitle).map((title) => {
                  // const sanitizedString = removeTagsFromString(info[title]);
                  return (
                    <li key={title + index} className="px-2">
                      {info[title]}
                    </li>
                  );
                })
              )}
            </ul>
          )}
        </>
      )}
    </>
  );
};
export default DetailInfo;
