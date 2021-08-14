let dataWithTotal = [];
let graphValues = [];
let labels = [];

const dataTotal = () => {
  data.map((key) => {
    let temp = key;
    total = 0;
    for (let iterator in key) {
      iterator !== "period" ? (total += data[iterator]) : false;
    }
    temp.total = total / 3;
    dataWithTotal.push(temp);
  });

  dataWithTotal.map((key) => labels.push(key["period"]));
  return Object.keys(dataWithTotal[0]);
};

const generateGraph = (keys) => {
  keys.map((key) => {
    if (key !== "period") {
      const temp = {
        label: key,
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
      };
      dataWithTotal.map((item) => temp.data.push(item[key]));
      graphValues.push(temp);
    }
  });
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: graphValues,
    },
  });
};
const keys = dataTotal();
generateGraph(keys);
