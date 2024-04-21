import { useNavigate, useParams } from "react-router-dom";
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

  // console.log("info here", data, infoData, contentId, contentTypeId);

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
  // console.log(contentTypeId, infoTypeTitle, Object.keys(infoTypeTitle));

  function removeBrTags(text) {
    if (typeof text === "string") {
      return text.replace(/<br\s*\/?>/gi, ""); // Replace <br> tags with an empty string
    }
    return text;
  }

  const navigate = useNavigate();
  const goToDetailPage = (contentId) => {
    navigate(`/detail/${contentId}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {infoData !== undefined && (
        <>
          {contentTypeId === "25" ? (
            <ul className="introWrap info typeCourse">
              {infoData.map((info, index) => (
                <ul
                  key={index}
                  onClick={() => goToDetailPage(info?.subcontentid)}
                >
                  <li className="num">
                    <span>{Number(info.subnum) + 1}</span>
                  </li>
                  <li className="subname">
                    <span>{info.subname}</span>
                  </li>
                  <li className="overview">
                    <div>{removeBrTags(info.subdetailoverview)}</div>
                  </li>
                </ul>
              ))}
            </ul>
          ) : contentTypeId === "32" ? (
            <ul className="introWrap info typeHotel">
              {infoData.map((info, index) => (
                <ul
                  key={info.roomcode}
                  className={`${info.roomimg1 === "" ? "noneImg" : ""}`}
                >
                  <li
                    className="roomImg"
                    style={{
                      backgroundImage: `url(${info.roomimg1})`,
                    }}
                  ></li>
                  {Object.keys(infoTypeTitle).map((title) => {
                    if (info[title] === "" || info[title] === "0") {
                      return false;
                    } else {
                      return (
                        <li key={title + index}>
                          {/* {info[title]} */}
                          {infoTypeTitle[title]} : {removeBrTags(info[title])}
                        </li>
                      );
                    }
                  })}
                  <li className="roomintro">{info.roomintro}</li>
                </ul>
              ))}
            </ul>
          ) : (
            <ul className="introWrap info type0">
              {infoData.map((info, index) =>
                Object.keys(infoTypeTitle).map((title) => {
                  // const sanitizedString = removeTagsFromString(info[title]);
                  return (
                    <li key={title + index}>
                      {/* {info[title]} */}
                      {removeBrTags(info[title])}
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
