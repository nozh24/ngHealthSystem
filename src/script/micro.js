document.addEventListener("DOMContentLoaded", ()=> {
    // Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart
var chart = am4core.create("micro_diagram", am4charts.PieChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
  {
    country: "Йод",
    value: 260
  },
  {
    country: "Фтор",
    value: 230
  },
  {
    country: "Натрий",
    value: 200
  },
  {
    country: "Медь",
    value: 165
  }
];

var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "value";
series.dataFields.radiusValue = "value";
series.dataFields.category = "country";
series.slices.template.cornerRadius = 6;
series.colors.step = 3;

series.hiddenState.properties.endAngle = -90;
    })