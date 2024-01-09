import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

export default function Graph() {

  const { emmissions, revenue } = useSelector((state) => state.data);
  

  const [graphHeight, setGraphHeight] = useState(500);

  const [options, setOptions] = useState({
    chart: {
      height: graphHeight,
      type: "line",
    },
    stroke: {
      width: [0, 2]
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },


    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],

    yaxis: [
      {
        title: {
          text: "Emissions",
        },
      },
      {
        opposite: true,
        title: {
          text: "E/R",
        },
      },
    ],

  });

  const [series, setSeries] = useState([
    {
      name: "Emissions",
      type: "column",
      data: revenue
    },
    {
      name: "E/R",
      type: "line",
      data: [42, 55, 48, 60, 20, 18, 9, 40, 9, 6, 5, 12]
    },
    {
      name: 'E/R-2022',
      type: 'line',
      data: [44, 55, 45, 69, 26, 22, 13, 49, 69, 32, 25, 18]
    },
    {
      name: 'Emissions',
      type: 'column',
      data: emmissions
    }
  ]);
  useEffect(() => {
    setSeries([
      {
        name: "Emissions-2023",
        type: "column",
        data: revenue
      },
      {
        name: "E/R-2023",
        type: "line",
        data: [14, 18, 25, 20, 28, 25, 49, 38, 40, 34, 23, 48]
      },
      {
        name: 'E/R-2022',
        type: 'line',
        data: [15, 23, 28, 35, 29, 23, 45, 47, 35, 32, 36]
      },
      {
        name: 'Emissions-2022',
        type: 'column',
        data: emmissions
      }
    ])
  }, [emmissions])

  useEffect(() => {
    // Update graph height when window is resized
    const handleResize = () => {
      setGraphHeight(window.innerWidth > 600 ? 400 : 250); // Adjust the heights as needed
    };
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="chart">
      <div>
        <p>Emission/Revenue</p>
      </div>
      <div>
        <ReactApexChart
          options={options}
          series={series}
          type='line'
          height={graphHeight}
        />
      </div>

    </div>
  );
}