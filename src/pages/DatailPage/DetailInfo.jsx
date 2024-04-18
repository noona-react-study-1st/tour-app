import InfoType from '../../constants/InfoType';

const DetailInfo = ({infoData}) => {
  console.log(infoData);
  function getInfoTypeTitle(contentTypeId) {
    const infoTypeInfo = InfoType.find((type) => {
      return type.contentTypeId === contentTypeId;
    });

    if (infoTypeInfo && infoTypeInfo.infoTypeTitle) {
      return infoTypeInfo.infoTypeTitle;
    }

    return null;
  }
  const contentTypeId = infoData?.contenttypeid;
  const infoTypeTitle = getInfoTypeTitle(contentTypeId);
  console.log(contentTypeId, infoTypeTitle);

  return (
    <ul className='introWrap'>
      {infoTypeTitle &&
        Object.keys(infoTypeTitle).map((title, index) => (
          <li key={index} className='px-2'>
            {infoTypeTitle[title]} : {infoData[title] === '' ? '-' : infoData[title]}
          </li>
        ))}
    </ul>
  );
};
export default DetailInfo;
