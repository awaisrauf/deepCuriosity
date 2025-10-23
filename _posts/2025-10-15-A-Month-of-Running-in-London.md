---
layout: post
title: A Month of Running in London
published: True
tags: [exercise, experiences]
date: 2025-10-15 13:58:39 +0400
excerpt: Photo essay on a month of running in London during the sunny summer in green parks with blue skies.  
comments: True
---

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->

<script>
  function hideText() {
      var paragraphs = document.querySelectorAll('p');
      for (var i = 0; i < paragraphs.length; i++) {
          paragraphs[i].style.display = 'none';
      }
  }
</script>

<!-- style for timeline -->
<style>
  /* * { margin: 0; padding: 0; box-sizing: border-box; } */
  /* body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 40px 20px; overflow-x: hidden; overflow-y: auto; } */
  .timeline { max-width: 900px; margin: 0 auto; background: white; border-radius: 8px; overflow-x: auto; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
  .timeline-row { display: grid; grid-template-columns: 50px 1fr 1fr 150px; border-bottom: 1px solid #f0f0f0; position: relative; align-items: stretch;}
  @media (max-width: 768px) {
    .timeline-row {grid-template-columns: 20px 1fr 1fr 120px;}
  }
  .timeline-row:last-child { border-bottom: none; }
  .timeline-text { padding: 6px; border-right: 1px solid #333; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #fafafa; position: relative; writing-mode: vertical-rl; text-orientation: mixed; }
  .timeline-text::before { content: ''; position: absolute; right: -6px; top: 50%; transform: translateY(-50%); width: 8px; height: 8px; background: #333; border-radius: 50%; border: 2px solid white; }
  .location { font-weight: bold; color: #333; margin-bottom: 4px; font-size: 11px; }
  .date { color: #666; font-size: 9px; }
  .timeline-photo, .timeline-map { padding: 5px; display: flex; align-items: center; justify-content: center; }
  .timeline-photo img { width: 100%; height: 120px; object-fit: cover; border-radius: 4px; }
   .timeline-map img { width: 100%; height: 120px; border-radius: 4px; background: #fafafa; border: 1px solid #7a7a7aff; }
</style>

<!-- for health benefits -->
<style>
  .health-benfits{ display: flex;
                  gap: 10px;
                  width: 100%;
                  max-width: 320px;
                  align-items: center;
                  align-items: stretch; /* ensures children stretch to same height */
                   }
  @media (max-width: 768px) {
    .health-benfits {display:grid; column-gap:2px; width:100%;justify-content: center;align-items: stretch;}
  }
</style>

<!-- for plot containers -->
<style>
  .container {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: stretch; /* ensures children stretch to same height */
  }

  .full-width-chart {
    flex: 1; /* take full available width */
    max-width: 400;
  }

  .half-width-chart {
    flex: 1; /* each canvas takes equal space */
    max-width: 100;
  }

  canvas {
    width: 100%;
    height: 200px; /* same height for all canvases */
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    .container { display:grid; max-width:200;}
    .full-width-chart {
      flex: 1; /* take full available width */
      max-width: 200;
    }
    .half-width-chart {
      flex: 1; /* each canvas takes equal space */
      max-width: 200;
    }
  }

</style>

<!-- for leaderboard -->
<style>
.stats-board {
  display: flex;
  gap: 20px;
  padding: 12px 16px;
  border: 2px solid #000;
  border-radius: 4px;
  width: fit-content;
  /* justify-content: center; */
  align-items: stretch;
    text-align: center;

}

.stat-item {
  text-align: center;
  padding: 0 12px;
  border-right: 1px solid #ddd;
}

.stat-item:last-child {
  border-right: none;
}

.stat-label {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.stat-value {
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
}

.stat-avg {
  font-size: 11px;
  margin-top: 2px;
  opacity: 0.6;
  white-space: nowrap;
}
</style>

<!-- data plots -->
<script>
  function movingAverage(data, windowSize) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      const start = Math.max(0, i - windowSize + 1);
      const window = data.slice(start, i + 1);
      const avg = window.reduce((sum, val) => sum + val, 0) / window.length;
      result.push(avg);
    }
    return result;
  }

  async function loadCSV(path){
    const response = await fetch(path);
    const text = await response.text();
    const rows = text.trim().split("\n");
    const data = rows.map(row => row.split(',').map(Number));
    return data;
  };
  
</script>

<!-- for plto1: general data -->
Allergic to reading? <button onclick="hideText()">Hide Text</button>

## General

Summer in London is always beautiful, full of sunny days and clear blue skies. This year was even brighter, so I decided to explore the city through a month-long running challenge. Here are some snippets of my runs, including stats, maps, and photos.

First, some stats. I ran for a total of 100 KM in 12 hours at an average pace of 7 minutes per KM.

<div style="display: flex; justify-content: center;">
<div class="stats-board">
  <div class="stat-item">
    <div class="stat-label">Distance</div>
    <div class="stat-value">96.64 KM</div>
    <div class="stat-avg">avg: 4.16 KM</div>
  </div>
  
  <div class="stat-item">
    <div class="stat-label">Time</div>
    <div class="stat-value">11:56:14</div>
    <div class="stat-avg">avg: 25:12</div>
  </div>
  
  <div class="stat-item">
    <div class="stat-label">Pace</div>
    <div class="stat-value">6'54''</div>
    <div class="stat-avg">per KM</div>
  </div>
</div>
</div>

## Map

I mostly ran in central and east London, exploring parks, the Thames, and historical spaces.

<div style="display:grid; gap: 5px; place-items: center;"> 

<!-- <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1m9WOb59Fpla3mwrQ93Pv-WokoPiGJ_w&ehbc=2E312F"
  style="width:100%;max-width:620px;height:480px;" loading="lazy" defer></iframe>  -->
  <!-- <figure style="text-align: center;"> -->
  <img style="border: 1px outset #ddddddff;" src="/deepCuriosity/img/running2025/main_map.jpg">
  <figcaption style="font-size: 14px; color: #555; margin-top: -20px;"> Route of the runs in different parts of London.
   </figcaption>
  <!-- </figure> -->
</div>

## Data

Another interesting way to look at these runs is through progress over time. The following plots show total KMs run, duration (in minutes), and pace over time, showing a steady improvement. The first few runs were the most challenging ones, and they gradually became easier.

<div class="container">
  <div class="full-width-chart">
    <canvas id="myChart"></canvas>
  </div>
</div>

<div class="container">
  <div class="full-width-chart">
    <canvas id="distanceChart"></canvas>
</div>
  <div class="full-width-chart">
    <canvas id="paceChart"></canvas>
  </div>
</div>

<script>
  const data1 = [3.61, 3.4, 4.23, 4.93, 4.4, 4.91, 3.56, 5.27,
                3.36, 6.1, 4.35, 4.33, 5.35, 6.43, 3.3, 6.73,
                5.79, 3.71, 4.74, 3.3, 3.59, 5.09, 5.45, 3.7];
  const duration_min = [36.3, 36.6, 39, 69.7, 52.7, 51, 50.5, 50.7,
                        30.8, 64.5, 45.2, 35.5, 43.6, 60.8, 72.2,
                        56.1, 36.6, 41.3, 26.1, 28.7, 37.7, 37.9];
const avg_pace_min_km = [ 10.04, 10.77, 9.22, 14.14, 12, 10.37, 14.16, 9.62,
                  9.15, 10.56, 10.39, 8.19, 8.14, 9.45, 10.73, 9.69,
                  9.88, 8.72, 7.89, 7.99, 7.41, 6.96];
//  , avg_pace_min_km.length)
function plot_bar_line(elementName, data, label){
  const ctx = document.getElementById(elementName);
  const movAvg = movingAverage(data, 10)
  new Chart(ctx, {
    data: {
      labels: data.map((_, i) => i+1),
      datasets: [
        { type: 'bar',
          label: label,
          data: data,
        },
        { type: 'line',
          label: 'Moving Average',
          data: movAvg,
          // backgroundColor: 'rgba(61, 81, 184, 0.6)',
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: false,
          text: 'Total KMs Run',  
          // color: '#333'
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          stacked: true,
          // title: {
          //   display: true,
          //   labelString: 'Value',
          // },
        },
        x: {
          title: {display: true, label: "Days"},
          ticks: {display: false}
        },
      }
    }
  });
}
plot_bar_line('myChart', data1, 'Run KM')
plot_bar_line('distanceChart', duration_min, 'Duration (minutes)')
plot_bar_line('paceChart', avg_pace_min_km, 'Pace (min per KM)')
</script>

<h2>Health Benefits</h2>

Running gave me clear health benefits. I lost significant weight. My stamina improved. I was able to do more of other types of exercises, such as cycling. And I felt pretty good for a whole month and a half. These benefits also showed up on my smart watch numbers. Particularly, my resting heart rate and VO2 Max improved.

<div class="health-benfits">
  <img src="/deepCuriosity/img/running2025/resting_hr.jpeg">
  <img src="/deepCuriosity/img/running2025/vo2_max.jpeg">
</div>

<h2> Timeline </h2>

Finally, here is the timeline of almost all of my runs. After all this experience, I think running is a better way to explore a city than cycling or walking. It is faster than walking and gives one more exposure to the city compared to cycling.

<div class="timeline">
  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Greenwich</div>
      <!-- <div class="date">sdsd</div> -->
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/09-Aug-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/09-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/09-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Greenwich Park</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/10-Aug-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/10-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/10-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Mile End Park</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/11-Aug-2025-Self.jpg" alt="Paris">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/11-Aug-2025-Other.jpeg" alt="Paris">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/11-Aug-2025.png" alt="Paris">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Canary Wharf</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/12-Aug-2025-Self.jpg" alt="Paris">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/12-Aug-2025-Other.jpeg" alt="Paris">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/12-Aug-2025.png" alt="Paris">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Tower Hamlets</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/13-Aug-2025-Self.jpeg" alt="Paris">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/13-Aug-2025-Other.jpeg" alt="Paris">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/13-Aug-2025.png" alt="Paris">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Hyde Park</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/14-Aug-2025-Self.jpg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/14-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/14-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Richmond Park</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/15-Aug-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/15-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/15-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Kensington Gardens</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/16-Aug-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/16-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/16-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Victoria Park</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/17-Aug-2025-Self.jpg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/17-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/17-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Tower Bridge</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/18-Aug-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/18-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/18-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Surrey Quays</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/19-Aug-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/19-Aug-2025-Other.jpg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/19-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Charing Cross</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/20-Aug-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/20-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/20-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Along Thames</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/22-Aug-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/22-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/22-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Walthmstow</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/23-Aug-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/23-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/23-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Stepney</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/24-Aug-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/24-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/24-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Barbican</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/26-Aug-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/26-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/26-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Barbican</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/27-Aug-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/27-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/27-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Southwark Park</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/28-Aug-2025-Self.jpg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/28-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/28-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Tafalgar Square</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/29-Aug-2025-Self.jpg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/29-Aug-2025-Other.jpg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/29-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Hackney Wick</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/31-Aug-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/31-Aug-2025-Other.jpeg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/31-Aug-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Blythe Hill</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/02-Sep-2025-Self.jpeg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/02-Sep-2025-Other.jpg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/02-Sep-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
    <div class="timeline-text">
      <div class="location">Wapping</div>
      <div class="date"></div>
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/03-Sep-2025-Self.jpg" alt="">
    </div>
    <div class="timeline-photo">
      <img src="/deepCuriosity/img/running2025/03-Sep-2025-Other.jpg" alt="">
    </div>
    <div class="timeline-map">
      <img src="/deepCuriosity/img/running2025/runs_png/03-Sep-2025.png" alt="">
    </div>
  </div>

  <div class="timeline-row">
  </div>

</div>