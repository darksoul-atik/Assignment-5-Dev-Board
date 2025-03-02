const date = new Date();

let dateList = date.toLocaleDateString("en-US", {
  weekday: "short",
  month: "long",
  day: "2-digit",
  year: "numeric",
});

dateList = dateList.replace(",", "").split(" ");

//Day Name
const getTempDayName = dateList[0].trim();
const getDayName = getTempDayName + " ,";

//Full Date
const getMonthName = dateList[1].replace(",", "").trim();
const getDate = dateList[2].replace(",", "").trim();
const getYear = dateList[3].replace(",", "").trim();

const fullDate = getDate + " " + getMonthName + " " + getYear;

//My own created function area
setInnerTextByIDandValue("dayName", getDayName);
setInnerTextByIDandValue("date", fullDate);
