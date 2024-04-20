import { useEffect } from "react";
import { shareKakao } from "../../utils/sharekakao";

const ShareModal = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);
  return (
    <div>
      <button
        onClick={() => shareKakao("http://localhost:5173/detail/2986679", "aa")}
      >
        <img
          className="w-12 h-12"
          src="../../assets/detailImages/kakaoLogo.png"
          alt={"Kakao Logo"}
        />
      </button>
    </div>
  );
};

export default ShareModal;
