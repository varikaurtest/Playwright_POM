class blogpostLoc{
  url = "https://testautomationpractice.blogspot.com";
  pageTitle = "Automation Testing Practice";
  dropDownCountry = "#country";
  countryOptions = "#country option";
  dropDownColours = "#colors";
  coloursOptions = "#colors option";
  datePickerInput = "#datepicker";
  datePickerTrigger = "#txtDate";
  datePickerWidget = "#ui-datepicker-div";
  datePickerMonthSelect = "//div[@class='ui-datepicker-title']/select[1]";
  datePickerYearSelect = "//div[@class='ui-datepicker-title']/select[2]";
  datePickerDay = (day) => `//table[@class='ui-datepicker-calendar']/tbody/tr/td/a[text()='${day}']`;
  tableRows = "//table[@id='productTable']/tbody/tr";
  tablePagination = "//ul[@id='pagination']/li";
}
export default new blogpostLoc()