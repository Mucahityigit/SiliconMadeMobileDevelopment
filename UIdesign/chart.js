
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Gain",
      data: [10, 60, 70, 40, 50, 10, 50],
      backgroundColor: "#FAD588",
    },
    {
      label: "Lost",
      data: [-10, -30, -25, -40, -5, -20, -50],
      backgroundColor: "#C3365D",
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio:false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Instagram Subscribers",
        align: "start",
        color: "black",
      },
    },
    layout: {
      padding: 10,
    },
  },
};
const newChart = new Chart("myChart", config);


