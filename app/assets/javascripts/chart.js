window.onload = function() {
  var ctx = document.getElementById("html").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [30, 70],
          backgroundColor: [
            "#000080",
            "#dbdbdc"
          ],
        }
      ],
    },
    options: {
      cutoutPercentage: 80,
      
      title: {
        display: true,
        fontSize: 20,
        fontColor: "#000080",
        text: 'HTML',
      },
      tooltips: { enabled: false },
    }
  });

  var ctx = document.getElementById("css").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [30, 70],
          backgroundColor: [
            "#000080",
            "#dbdbdc"
          ],
        }
      ],
    },
    options: {
      cutoutPercentage: 80,
      title: {
        display: true,
        fontSize: 20,
        fontColor: "#000080",
        text: 'CSS',
      },
      tooltips: { enabled: false },
    }
  });

  var ctx = document.getElementById("rails").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [40, 60],
          backgroundColor: [
            "#000080",
            "#dbdbdc"
          ],
        }
      ],
    },
    options: {
      cutoutPercentage: 80,
      legend: {
        display: false
      },
      title: {
        display: true,
        fontSize: 20,
        fontColor: "#000080",
        text: 'Rails',
      },
      tooltips: { enabled: false },
    }
  });

  var ctx = document.getElementById("jquery").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [15, 85],
          backgroundColor: [
            "#000080",
            "#dbdbdc"
          ],
        }
      ],
    },
    options: {
      cutoutPercentage: 80,
      
      title: {
        display: true,
        fontSize: 20,
        fontColor: "#000080",
        text: 'JQuery',
      },
      tooltips: { enabled: false },
    }
  });

  var ctx = document.getElementById("python").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [5, 95],
          backgroundColor: [
            "#000080",
            "#dbdbdc"
          ],
        }
      ],
    },
    options: {
      cutoutPercentage: 80,
      
      title: {
        display: true,
        fontSize: 20,
        fontColor: "#000080",
        text: 'Python',
      },
      tooltips: { enabled: false },
    }
  });

  var ctx = document.getElementById("git").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [60, 40],
          backgroundColor: [
            "#000080",
            "#dbdbdc"
          ],
        }
      ],
    },
    options: {
      cutoutPercentage: 80,
  
      title: {
        display: true,
        fontSize: 20,
        fontColor: "#000080",
        text: 'Git/GitHub',
      },
      tooltips: { enabled: false },
    }
  });

  var ctx = document.getElementById("docker").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [60, 40],
          backgroundColor: [
            "#000080",
            "#dbdbdc"
          ],
        }
      ],
    },
    options: {
      cutoutPercentage: 80,
      title: {
        display: true,
        fontSize: 20,
        fontColor: "#000080",
        text: 'Docker',
      },
      tooltips: { enabled: false },
    }
  });

  var ctx = document.getElementById("aws").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [15, 85],
          backgroundColor: [
            "#000080",
            "#dbdbdc"
          ],
        }
      ],
    },
    options: {
      cutoutPercentage: 80,
      title: {
        display: true,
        fontSize: 20,
        fontColor: "#000080",
        text: 'AWS',
      },
      tooltips: { enabled: false },
      
      
    }
  });
}


