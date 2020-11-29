var chartJsPluginCenterLabel = {
  labelShown: false,

  afterRender: function (chart) {
    if (this.labelShown) {
      return;
    }
    // ラベルの HTML
    var value = chart.data.datasets[0].data[0];
    var labelBox = document.createElement('div');
    labelBox.classList.add('label-box');
    labelBox.innerHTML = '<div class="label">'
      + value
      + '<span class="per">%</span>'
      + '</div>';
    // ラベル上部の padding
    var paddingTop = Math.round(chart.chartArea.top);
    labelBox.setAttribute('style', 'padding-top:' + paddingTop + 'px');
    // ラベル描画
    var canvas = chart.ctx.canvas;
    canvas.parentNode.insertBefore(labelBox, canvas.nextElementSibling);
  },
};

// 上記プラグインの有効化
Chart.plugins.register(chartJsPluginCenterLabel);