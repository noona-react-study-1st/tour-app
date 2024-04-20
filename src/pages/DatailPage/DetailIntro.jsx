import { useParams } from "react-router-dom";
import { IntroType } from "../../constants/detail/IntroType";
import { useFetchDetailIntroQuery } from "../../hooks/useFetchDetailIntro";
import { useEffect, useState } from "react";

const DetailIntro = ({ contentTypeId }) => {
  const { contentId } = useParams();
  const [introData, setIntroData] = useState();

  const { data, isLoading, isError } = useFetchDetailIntroQuery(
    contentId,
    contentTypeId
  );

  useEffect(() => {
    if (!isLoading && !isError) {
      setIntroData(data.response.body.items.item?.[0]);
    }
  }, [data, isLoading, isError]);

  console.log("intro here", data, introData, contentId, contentTypeId);

  function getIntroTypeTitle(contentTypeId) {
    const introTypeInfo = IntroType.find((type) => {
      return type.contentTypeId === contentTypeId;
    });
    console.log(introTypeInfo);
    if (introTypeInfo && introTypeInfo.introTypeTitle) {
      return introTypeInfo.introTypeTitle;
    }

    return null;
  }

  const introTypeTitle = getIntroTypeTitle(contentTypeId);
  console.log(contentTypeId, introTypeTitle);

  return (
    <ul className="introWrap ">
      {introData !== undefined &&
        Object.keys(introTypeTitle).map((title, index) => {
          if (introData[title] === "" || introData[title] === "0") {
            return false;
          } else {
            // const sanitizedString = removeTagsFromString(introData[title]);
            return (
              <li key={index} className="px-2">
                {introTypeTitle[title]}: {introData[title]}
                {/* {introData[title].includes("<br>")
                  ? introData[title].replace(/<br\s*\/?>/gi, "")
                  : introData[title]} */}
              </li>
            );
          }
        })}
    </ul>
  );
};
export default DetailIntro;
