const ctx1 = document.getElementById("myChart1").getContext("2d");
const ctx2 = document.getElementById("myChart2").getContext("2d");
const ctx3 = document.getElementById("myChart3").getContext("2d");

const data1 = {
  datasets: [
    {
      data: [80, 0, 0, 0, 20],
      backgroundColor: ["#52A94C", "#585858", "#61dafb", "#73B956"]
    },
    {
      data: [0, 85, 0, 0, 15],
      backgroundColor: ["#52A94C", "#585858", "#61dafb", "#73B956"]
    },
    {
      data: [0, 0, 80, 0, 20],
      backgroundColor: ["#52A94C", "#585858", "#61dafb", "#73B956"]
    },
    {
      data: [0, 0, 0, 70, 30],
      backgroundColor: ["#52A94C", "#585858", "#61dafb", "#73B956"]
    }
  ],
  labels: ["MongoDB", "Express", "React", "Node"]
};

const data2 = {
  datasets: [
    {
      data: [75, 0, 25],
      backgroundColor: ["#F825B9", "#F1691F"]
    },
    {
      data: [0, 50, 50],
      backgroundColor: ["#F825B9", "#F1691F"]
    }
  ],
  labels: ["Adobe Xd", "Adobe Illustrator"]
};

const data3 = {
  datasets: [
    {
      data: [85, 0, 0, 0, 0, 0, 15],
      backgroundColor: [
        "#EC008C",
        "#b87333",
        "#46BFBD",
        "#FFFF00",
        "#39ff14",
        "#61dafb"
      ]
    },
    {
      data: [0, 95, 0, 0, 0, 0, 5],
      backgroundColor: [
        "#EC008C",
        "#b87333",
        "#46BFBD",
        "#FFFF00",
        "#39ff14",
        "#61dafb"
      ]
    },
    {
      data: [0, 0, 90, 0, 0, 0, 10],
      backgroundColor: [
        "#EC008C",
        "#b87333",
        "#46BFBD",
        "#FFFF00",
        "#39ff14",
        "#61dafb"
      ]
    },
    {
      data: [0, 0, 0, 95, 0, 0, 5],
      backgroundColor: [
        "#EC008C",
        "#b87333",
        "#46BFBD",
        "#FFFF00",
        "#39ff14",
        "#61dafb"
      ]
    },
    {
      data: [0, 0, 0, 0, 90, 0, 10],
      backgroundColor: [
        "#EC008C",
        "#b87333",
        "#46BFBD",
        "#FFFF00",
        "#39ff14",
        "#61dafb"
      ]
    },
    {
      data: [0, 0, 0, 0, 0, 90, 10],
      backgroundColor: [
        "#EC008C",
        "#b87333",
        "#46BFBD",
        "#FFFF00",
        "#39ff14",
        "#61dafb"
      ]
    }
  ],
  labels: [
    "Communication",
    "Hard Work",
    "Leadership",
    "Motivation",
    "Team work",
    "Work Ethic"
  ]
};

const options = {
  responsive: true,
  display: true,
  position: "bottom"
};

const config1 = {
  type: "doughnut",
  data: data1,
  options
};
const config2 = {
  type: "doughnut",
  data: data2,
  options
};
const config3 = {
  type: "doughnut",
  data: data3,
  options
};

const myChart1 = new Chart(ctx1, config1);
const myChart2 = new Chart(ctx2, config2);
const myChart3 = new Chart(ctx3, config3);
