document.addEventListener("DOMContentLoaded", () => {
    // Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

/* Create chart instance */
var chart = am4core.create("feel_diagram", am4charts.RadarChart);

/* Add data */
chart.data = [{
  "country": "Оптимизм",
  "litres": 501
}, {
  "country": "Любовь",
  "litres": 301
}, {
  "country": "Трепет",
  "litres": 266
}, {
  "country": "Раскаяние",
  "litres": 165
}, {
  "country": "Гнев",
  "litres": 139
}, {
  "country": "Скука",
  "litres": 336
}];

/* Create axes */
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
valueAxis.renderer.axisFills.template.fillOpacity = 0.15;

/* Create and configure series */
var series = chart.series.push(new am4charts.RadarSeries());
series.dataFields.valueY = "litres";
series.dataFields.categoryX = "country";
series.name = "Sales";
series.strokeWidth = 3;
})