import {IntroType} from '../../constants/IntroType';

const DetailIntro = ({introData}) => {
  console.log(introData);
  function getIntroTypeTitle(contentTypeId) {
    const introTypeInfo = IntroType.find((type) => {
      return type.contentTypeId === contentTypeId;
    });

    if (introTypeInfo && introTypeInfo.introTypeTitle) {
      return introTypeInfo.introTypeTitle;
    }

    return null;
  }
  const contentTypeId = introData?.contenttypeid;
  const introTypeTitle = getIntroTypeTitle(contentTypeId);
  console.log(contentTypeId, introTypeTitle);

  return (
    <ul className='introWrap'>
      {Object.keys(introTypeTitle).map((title, index) => (
        <li key={index} className='px-2'>
          {introTypeTitle[title]} : {introData[title] === '' ? '-' : introData[title]}
        </li>
      ))}
    </ul>
  );
};
export default DetailIntro;
