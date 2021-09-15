const convertDate2 = (date) => {
  return (
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  );
};
export default convertDate2;
