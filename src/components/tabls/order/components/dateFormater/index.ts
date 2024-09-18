import jalaali from "jalaali-js";

// تابع برای تبدیل اعداد انگلیسی به فارسی
function convertToPersianNumber(number: string) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number.toString().replace(/\d/g, (digit) => persianDigits[+digit]);
}

// تبدیل تاریخ میلادی به شمسی با اعداد فارسی
function convertToJalali(dateString: string) {
  const gregorianDate = new Date(dateString);
  const jalaliDate = jalaali.toJalaali(
    gregorianDate.getFullYear(),
    gregorianDate.getMonth() + 1,
    gregorianDate.getDate()
  );

  // ساختن رشته تاریخ شمسی و تبدیل اعداد به فارسی
  const jalaliDateString = `${jalaliDate.jy}/${jalaliDate.jm}/${jalaliDate.jd}`;
  return convertToPersianNumber(jalaliDateString);
}

export default convertToJalali;
