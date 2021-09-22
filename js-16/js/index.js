const ctx = document.querySelector(".js-chart").getContext("2d");
const GLOBAL_MEAN_TEMPERATURE = 14;


fetchData()
  .then(parseData)
  .then(getLabelsAndData)
  .then(({ years, temps, northHem, southernHem }) => drawChart(years, temps, northHem, southernHem));

function fetchData() {
  return fetch("../ZonAnn.Ts+dSST.csv").then((response) => response.text());
}

function parseData(data) {
  return Papa.parse(data, { header: true }).data;
}

function getLabelsAndData(data) {
  console.log(data);

  return data.reduce(
    (acc, entry) => {
      acc.years.push(entry.Year);
      acc.temps.push(Number(entry.Glob) + GLOBAL_MEAN_TEMPERATURE);
      acc.northHem.push(Number(entry.NHem) + GLOBAL_MEAN_TEMPERATURE);
      acc.southernHem.push(Number(entry.SHem) + GLOBAL_MEAN_TEMPERATURE);

      return acc;
    },
    { years: [], temps: [], northHem: [], southernHem: [] }
  );
}

function drawChart(years, temps, northHem, southernHem) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: years,
      datasets: [
        {
          label: "# Global average temperature",
          data: temps,
          backgroundColor: "rgba(17, 128, 103, 0.2)",
          borderColor: "rgba(17, 128, 103, 1)",
          borderWidth: 1,
          fill: false,
        },
        {
          label: "# North hemisphere",
          data: northHem,
          backgroundColor: "rgba(22, 17, 128, 0.2)",
          borderColor: "rgba(22, 17, 128, 1)",
          borderWidth: 1,
          fill: false,

        },
        {
          label: "# Southern Hemisphere",
          data: southernHem,
          backgroundColor: "rgba(128, 17, 38, 0.2)",
          borderColor: "rgba(128, 17, 38, 1)",
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            callback(value) {
              return value + "˚C";
            },
          },
        },
      },
    },
  });
}