const DetailOverView = (commonData) => {
  console.log(commonData.commonData.response.body.items.item[0].overview);
  return (
    <pre>{commonData.commonData.response.body.items.item[0].overview}</pre>
  );
};

export default DetailOverView;
