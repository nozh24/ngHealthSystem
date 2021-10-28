document.addEventListener("DOMContentLoaded", () =>{
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("active_diagram", am4charts.XYChart3D);

// Add data
chart.data = [{
  "year": 0,
  "income": 23.5,
  "color": chart.colors.next()
}, {
  "year": 5,
  "income": 4.2,
  "color": chart.colors.next()
}, {
  "year": 10,
  "income": 30.1,
  "color": chart.colors.next()
}, {
  "year": 15,
  "income": 49.5,
  "color": chart.colors.next()
}];

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;

var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 

// Create series
var series = chart.series.push(new am4charts.ColumnSeries3D());
series.dataFields.valueX = "income";
series.dataFields.categoryY = "year";
series.name = "Income";
series.columns.template.propertyFields.fill = "color";
series.columns.template.tooltipText = "{valueX}";
series.columns.template.column3D.stroke = am4core.color("#fff");
series.columns.template.column3D.strokeOpacity = 0.2;
})