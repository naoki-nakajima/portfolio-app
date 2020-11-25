window.onload = function() {
  var ctx = document.getElementById("html").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [70, 30],
          backgroundColor: [
            "#ffffff",
            "#000080"
          ],
          borderColor: 'transparent'
        }
      ],
    },
    options: {
      cutoutPercentage: 88,
      legend: {
        display: false
      },
      title: {
        display: true,
        fontSize: 20,
        fontColor: "#000080",
        text: 'HTML',
      },
    }
  });

  var ctx = document.getElementById("css").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: [
            "#000080",
            "#ffffff"
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
        text: 'CSS',
      },
    }
  });

  var ctx = document.getElementById("rails").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: [
            "#000080",
            "#ffffff"
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
    }
  });

  var ctx = document.getElementById("jquery").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: [
            "#000080",
            "#ffffff"
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
        text: 'JQuery',
      },
    }
  });

  var ctx = document.getElementById("python").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: [
            "#000080",
            "#ffffff"
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
        text: 'Python',
      },
    }
  });

  var ctx = document.getElementById("git").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: [
            "#000080",
            "#ffffff"
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
        text: 'Git/GitHub',
      },
    }
  });

  var ctx = document.getElementById("docker").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: [
            "#000080",
            "#ffffff"
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
        text: 'Docker',
      },
    }
  });

  var ctx = document.getElementById("aws").getContext('2d');
  var myChart = new Chart(ctx, {

  type: 'doughnut',
    data: {
      datasets: [
        {
          data: [80, 20],
          backgroundColor: [
            "#000080",
            "#ffffff"
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
        text: 'AWS',
      },
    }
  });
}
