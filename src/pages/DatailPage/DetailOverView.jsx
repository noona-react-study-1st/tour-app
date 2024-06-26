// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

const DetailOverView = ({ commonData }) => {
  // console.log(commonData);
  // function extractUrl(text) {
  //   const startIdx = text.indexOf("http"); // 'http' 문자열이 시작하는 인덱스 찾기
  //   if (startIdx !== -1) {
  //     // 'http'를 찾았을 경우
  //     const endIdx = text.indexOf('"', startIdx); // 첫 번째 큰따옴표(")를 찾기
  //     if (endIdx !== -1) {
  //       // 큰따옴표를 찾았을 경우
  //       return text.substring(startIdx, endIdx); // URL 부분 추출
  //     }
  //   }
  //   return null;
  // }
  // const homepageUrl = extractUrl(commonData.homepage);
  // console.log(homepageUrl);
  function removeBrTags(text) {
    if (typeof text === "string") {
      return text.replace(/<br\s*\/?>/gi, ""); // Replace <br> tags with an empty string
    }
    return text;
  }
  return (
    <>
      {commonData.overview !== "" && (
        <div className="p-4 overviewWrap">
          <div className="overview">
            {commonData !== undefined && removeBrTags(commonData.overview)}
          </div>

          <div>
            {commonData.telname !== "" && commonData.telname}
            {commonData.tel !== "" && `(${commonData.tel})`}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailOverView;
