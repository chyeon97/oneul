const day = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];

export const convertDate = (newDate) => {
  return (
    newDate.getMonth() +
    1 +
    "월" +
    " " +
    newDate.getDate() +
    "일" +
    " " +
    day[newDate.getDay()]
  );
};
