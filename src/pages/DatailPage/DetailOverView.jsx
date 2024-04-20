import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DetailOverView = ({ commonData }) => {
  console.log(commonData.title);
  function extractUrl(text) {
    const startIdx = text.indexOf("http"); // 'http' 문자열이 시작하는 인덱스 찾기
    if (startIdx !== -1) {
      // 'http'를 찾았을 경우
      const endIdx = text.indexOf('"', startIdx); // 첫 번째 큰따옴표(")를 찾기
      if (endIdx !== -1) {
        // 큰따옴표를 찾았을 경우
        return text.substring(startIdx, endIdx); // URL 부분 추출
      }
    }
    return null;
  }
  const homepageUrl = extractUrl(commonData.homepage);
  // console.log(homepageUrl);
  return (
    <>
      <h2>{commonData.title}</h2>
      <div className="py-4">
        {homepageUrl !== "" && (
          <div>
            <Link to={homepageUrl} target="_blank" className="gohome">
              홈페이지 바로가기{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </div>
        )}

        <div>{`${commonData.overview}`}</div>
        <div>
          {commonData.telname !== "" && commonData.telname}
          {commonData.tel !== "" && `(${commonData.tel})`}
        </div>
      </div>
    </>
  );
};

export default DetailOverView;
