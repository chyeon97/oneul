const day = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];

export const convertDateGNB = (newDate) => {
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
export const convertDate = (date) => {
  return (
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  );
};

function convertTime(date) {
  const hour =
    date.getHours().toString().length < 2
      ? "0" + date.getHours()
      : date.getHours();
  const minute =
    date.getMinutes().toString().length < 2
      ? "0" + date.getMinutes()
      : date.getMinutes();

  const seconds =
    date.getSeconds().toString().length < 2
      ? "0" + date.getSeconds()
      : date.getSeconds();
  return hour + ":" + minute + ":" + seconds;
}

export const convertEndDate = (newDate) => {
  return convertDate(newDate) + "\n" + convertTime(newDate);
};
