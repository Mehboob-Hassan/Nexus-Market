// import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./SplineChart.css";
import Box from "@mui/material/Box";
import { Typography, Button, IconButton } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

export const SplineAreaChart = ({ title ="1 BTC - $5636 . 1 CHN - $674", hasIconButtons }) => {
  const [selectBtn1, setSelectBtn1] = useState(false);
  const [selectBtn2, setSelectBtn2] = useState(false);
  const [selectBtn3, setSelectBtn3] = useState(false);
  const [selectBtn4, setSelectBtn4] = useState(false);
  const [selectBtn5, setSelectBtn5] = useState(false);

  const handleButton1 = () => {
    setSelectBtn1(true);
    setSelectBtn2(false);
    setSelectBtn3(false);
    setSelectBtn4(false);
    setSelectBtn5(false);
  };

  const handleButton2 = () => {
    setSelectBtn1(false);
    setSelectBtn2(true);
    setSelectBtn3(false);
    setSelectBtn4(false);
    setSelectBtn5(false);
  };

  const handleButton3 = () => {
    setSelectBtn1(false);
    setSelectBtn2(false);
    setSelectBtn3(true);
    setSelectBtn4(false);
    setSelectBtn5(false);
  };

  const handleButton4 = () => {
    setSelectBtn1(false);
    setSelectBtn2(false);
    setSelectBtn3(false);
    setSelectBtn4(true);
    setSelectBtn5(false);
  };

  const handleButton5 = () => {
    setSelectBtn1(false);
    setSelectBtn2(false);
    setSelectBtn3(false);
    setSelectBtn4(false);
    setSelectBtn5(true);
  };

  const [state, setstate] = useState({
    series: [
      {
        data: [
          [1327359600000, 30.95],
          [1327446000000, 31.34],
          [1327532400000, 31.18],
          [1327618800000, 31.05],
          [1327878000000, 31.0],
          [1327964400000, 30.95],
          [1328050800000, 31.24],
          [328137200000, 31.29],
          [1328223600000, 31.85],
          [1328482800000, 31.86],
          [1328569200000, 32.28],
          [1328655600000, 32.1],
          [1328742000000, 32.65],
          [1328828400000, 32.21],
          [1329087600000, 32.35],
          [1329174000000, 32.44],
          [1329260400000, 32.46],
          [1329346800000, 32.86],
          [1329433200000, 32.75],
          [1329778800000, 32.54],
          [1329865200000, 32.33],
          [1329951600000, 32.97],
          [1330038000000, 33.41],
          [1330297200000, 33.27],
          [1330383600000, 33.27],
          [1330470000000, 32.89],
          [1330556400000, 33.1],
          [1330642800000, 33.73],
          [1330902000000, 33.22],
          [1330988400000, 31.99],
          [1331074800000, 32.41],
          [1331161200000, 33.05],
          [1331247600000, 33.64],
          [1331506800000, 33.56],
          [1331593200000, 34.22],
          [1331679600000, 33.77],
          [1331766000000, 34.17],
          [1331852400000, 33.82],
          [1332111600000, 34.51],
          [1332198000000, 33.16],
          [1332284400000, 33.56],
          [1332370800000, 33.71],
          [1332457200000, 33.81],
          [1332712800000, 34.4],
          [1332799200000, 34.63],
          [1332885600000, 34.46],
          [1332972000000, 34.48],
          [1333058400000, 34.31],
          [1333317600000, 34.7],
          [1333404000000, 34.31],
          [1333490400000, 33.46],
          [1333576800000, 33.59],
          [1333922400000, 33.22],
          [1334008800000, 32.61],
          [1334095200000, 33.01],
          [1334181600000, 33.55],
          [1334268000000, 33.18],
          [1334527200000, 32.84],
          // [1334613600000, 33.84],
          // [1334700000000, 33.39],
          // [1334786400000, 32.91],
          // [1334872800000, 33.06],
          // [1335132000000, 32.62],
          // [1335218400000, 32.4],
          // [1335304800000, 33.13],
          // [1335391200000, 33.26],
          // [1335477600000, 33.58],
          // [1335736800000, 33.55],
          // [1335823200000, 33.77],
          // [1335909600000, 33.76],
          // [1335996000000, 33.32],
          // [1336082400000, 32.61],
          // [1336341600000, 32.52],
          // [1336428000000, 32.67],
          // [1336514400000, 32.52],
          // [1336600800000, 31.92],
          // [1336687200000, 32.2],
          // [1336946400000, 32.23],
          // [1337032800000, 32.33],
          // [1337119200000, 32.36],
          // [1337205600000, 32.01],
          // [1337292000000, 31.31],
          // [1337551200000, 32.01],
          // [1337637600000, 32.01],
          // [1337724000000, 32.18],
          // [1337810400000, 31.54],
        ],
      },
    ],
    options: {
      chart: {
        id: "area-datetime",
        type: "area",
        height: 350,
        toolbar: {
          tools: {
            download: false, //disable burgerMenu
          },
        },
        zoom: false,
      },
      stroke: {
        curve: "smooth",
      },

      annotations: {
        yaxis: [
          {
            y: 30,
            borderColor: "#999",
            label: {
              show: false,
              style: {
                color: "#fff",
                background: "#00E396",
              },
            },
          },
        ],
        xaxis: [
          {
            // categories: ["Jan 2019", "Feb 2019", "Mar 2019", "Apr 2019"],
            x: new Date("14 Nov 2012").getTime(),
            borderColor: "#999",
            yAxisIndex: 0,
            label: {
              show: true,
              text: "Rally",
              style: {
                colors: "#1F2552",
                opacity: "50%",
                fontSize: "12px",
                fontFamily: "GoogleSans-Regular",
                fontWeight: 400,
                cssClass: "apexcharts-yaxis-label",
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        colors: "#6A82CF",
        strokeColors: "#6A82CF",
        strokeWidth: 0,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
      },
      xaxis: {
        type: "datetime",
        min: new Date("01 Mar 2012").getTime(),
        // categories: ["Jan 2019", "Feb 2019", "Mar 2019", "Apr 2019"],
        tickAmount: 6,
      },
      // tooltip: {
      //   x: {
      //     format: "dd MMM yyyy",
      //   },
      // },
      tooltip: {
        enabled: true,
        enabledOnSeries: true,
        shared: true,
        followCursor: true,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        fillSeriesColor: true,
        theme: true,
        style: {
          fontSize: "12px",
          fontFamily: undefined,
          background: "#FBFBFC",
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
          return (
            "<ul>" +
            "<li > " +
            "Price" +
            "<b> $5478 </b> </li>" +
            "<li > " +
            "Bid" +
            "<b> +45 </b> </li>" +
            "<li > " +
            "Ask" +
            "<b> -45 </b> </li>" +
            "</ul>"
          );
        },
        onDatasetHover: {
          highlightDataSeries: false,
        },
        x: {
          show: true,
          format: "MMM",
          formatter: undefined,
        },
        y: {
          show: false,
          formatter: undefined,
          title: {
            formatter: (seriesName) => seriesName,
          },
        },
        z: {
          formatter: undefined,
          title: "Size: ",
        },
        marker: {
          show: false,
        },
        items: {
          display: "flex",
        },
        fixed: {
          enabled: false,
          position: "topRight",
          offsetX: 0,
          offsetY: 0,
        },
      },
      yaxis: {
        show: true,
        // showAlways: true,
        tickAmount: 4,
        labels: {
          show: true,
          style: {
            colors: "#1F2552",
            opacity: "50%",
            fontSize: "12px",
            fontFamily: "GoogleSans-Regular",
            fontWeight: 400,
            cssClass: "apexcharts-yaxis-label",
          },
          // offsetX: 0,
          // offsetY: 0,
          // rotate: 0,
          formatter: function (value) {
            return "$ " + value;
          },
        },
      },
      grid: {
        show: true,
        // borderColor: '#90A4AE',
        strokeDashArray: 1,
        position: "back",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
      },
    },

    // selection: "one_year",

    // dataLabels: {
    //   enabled: true,
    //   style: {
    //     fontSize: "8px",
    //   },
    //   background: {
    //     enabled: true,
    //     foreColor: "#FBFBFC",
    //     padding: 0,
    //     borderRadius: 10,
    //     borderWidth: 0,
    //     borderColor: "#FBFBFC",
    //     opacity: 1,
    //   },
    //   textAnchor: "middle",
    //   offsetX: 0,
    //   offsetY: 0,
    // },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.25,
        opacityFrom: 0.1,
        opacityTo: 0.3,
        stops: [0, 100],
      },
    },
    // series: [{
    //     name: 'Order',
    //     data: [11, 22, 32, 45, 67, 79, 81, 9, 58, 67,55,77,22,1,3,4],
    //     style:{
    //         fontSize: '8px ', fontFamily: 'Outfit', background: 'red'
    //     }
    //      }],
    //
    // },
    colors: [
      function ({ value, seriesIndex, dataPointIndex, w }) {
        if (dataPointIndex) {
          return "#FBFBFC";
        } else {
          return "#FBFBFC";
        }
      },
    ],
  });

  return (
    <div>
      <>
        <div>
          <Box
            mb="20px"
            ml="10px"
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "GoogleSans-Bold",
                  fontSize: "18px",
                  color: "#1F2552",
                }}
              >
                {/* 1 BTC - $5636 . 1 CHN - $674 */}
                {title}
              </Typography>
            </Box>

           <Box sx={{display:"flex" , alignItems: "center"}}>
           <Box>
              <Button
                onClick={handleButton1}
                sx={{
                  fontFamily: "GoogleSans-Bold",
                  fontSize: "14px",
                  color: selectBtn1 ? "#FF8B64" : "#1F2552",
                  textTransform: "capitalize",
                }}
              >
                All
              </Button>
              <Button
                onClick={handleButton2}
                sx={{
                  fontFamily: "GoogleSans-Bold",
                  fontSize: "14px",
                  color: selectBtn2 ? "#FF8B64" : "#1F2552",
                  textTransform: "capitalize",
                }}
              >
                Year
              </Button>
              <Button
                onClick={handleButton3}
                sx={{
                  fontFamily: "GoogleSans-Bold",
                  fontSize: "14px",
                  color: selectBtn3 ? "#FF8B64" : "#1F2552",
                  textTransform: "capitalize",
                }}
              >
                Month
              </Button>
              <Button
                onClick={handleButton4}
                sx={{
                  fontFamily: "GoogleSans-Bold",
                  fontSize: "14px",
                  color: selectBtn4 ? "#FF8B64" : "#1F2552",
                  textTransform: "capitalize",
                }}
              >
                Week
              </Button>
              <Button
                onClick={handleButton5}
                sx={{
                  fontFamily: "GoogleSans-Bold",
                  fontSize: "14px",
                  color: selectBtn5 ? "#FF8B64" : "#1F2552",
                  textTransform: "capitalize",
                }}
              >
                Day
              </Button>
            </Box>

            {hasIconButtons && (
              <Box sx={{display: "flex"}}>
                <Box>
                  <IconButton aria-label="">
                    <Box
                      sx={{
                        backgroundColor: "#FF8B64",
                        width: "40px",
                        height: "40px",
                        borderRadius: "6px",
                        opacity: "80%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CalendarTodayIcon
                        sx={{ width: "19.63px", height: "19.63px" }}
                      />
                    </Box>
                  </IconButton>
                </Box>

                <Box>
                  <IconButton aria-label="">
                    <Box
                      sx={{
                        backgroundColor: "#FF8B64",
                        width: "40px",
                        height: "40px",
                        borderRadius: "6px",
                        opacity: "80%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AddIcon
                        sx={{ width: "19.63px", height: "19.63px" }}
                      />
                    </Box>
                  </IconButton>
                </Box>


                <Box>
                  <IconButton aria-label="">
                    <Box
                      sx={{
                        backgroundColor: "#FF8B64",
                        width: "40px",
                        height: "40px",
                        borderRadius: "6px",
                        opacity: "80%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <EditIcon
                        sx={{ width: "19.63px", height: "19.63px" }}
                      />
                    </Box>
                  </IconButton>
                </Box>
              </Box>
            )}
           </Box>
          </Box>
        </div>

        <div id="chart">
          <div id="chart-timeline">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="area"
              height={350}
              // sx={{height: {lg: "350px", md :"350px", sm: "300px", xs: "250px"}}}
              width={"100%"}
            />
          </div>
        </div>
      </>
    </div>
  );
};

// import React from 'react'

// export const SplineAreaChart = () => {
//   const [state, setstate] = useState(
//     {

//       series: [{
//           name: "Desktops",
//           data: [500, 41000, 3050, 35000, 5050,  40000, 3050, 41000,  10048]
//       }],
//       options: {
//         chart: {
//           height: 350,
//           type: 'line',
//           zoom: {
//             enabled: false
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           curve: 'smooth'
//         },
//         title: {
//           text: 'Product Trends by Month',
//           align: 'left'
//         },
//         grid: {
//           row: {
//             colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//             opacity: 0.5
//           },
//         },
//         xaxis: {
//           categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//            label: {
//               show: true,
//               text: "Rally",
//               style: {
//                 colors: "#1F2552",
//                 opacity: "50%",
//                 fontSize: "12px",
//                 fontFamily: "GoogleSans-Regular",
//                 fontWeight: 400,
//                 cssClass: "apexcharts-yaxis-label",
//               },
//             },
//         },

//          yaxis: {
//                 show: true,
//                 showAlways: true,
//                 tickAmount: 4,
//                 labels: {
//                   show: true,
//                   style: {
//                     colors: "#1F2552",
//                     opacity: "50%",
//                     fontSize: "12px",
//                     fontFamily: "GoogleSans-Regular",
//                     fontWeight: 400,
//                     cssClass: "apexcharts-yaxis-label",
//                   },
//                   offsetX: 0,
//                   offsetY: 0,
//                   rotate: 0,
//                   formatter: function (value) {
//                     return "$ " + value;
//                   },
//                 },
//                 axisBorder: {
//                   show: true,
//                   color: "#DCDCDC",
//                   offsetX: 0,
//                   offsetY: 0,
//                 },
//               },
//               grid: {
//                 show: true,
//                 // borderColor: '#90A4AE',
//                 strokeDashArray: 0,
//                 position: "back",
//                 xaxis: {
//                   lines: {
//                     show: true,
//                   },
//                 },
//                 yaxis: {
//                   lines: {
//                     show: true,
//                   },
//                 },
//                 row: {
//                   colors: undefined,
//                   opacity: 0.5,
//                 },
//                 column: {
//                   colors: undefined,
//                   opacity: 0.5,
//                 },
//                 padding: {
//                   top: 0,
//                   right: 0,
//                   bottom: 0,
//                   left: 0,
//                 },
//               },
//       },
//     selection: "one_year",

//     }
//   )
//   return (
//     <div>
//       <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
//     </div>
//   )
// }

// import React from "react";
// import { useState } from "react";
// import ReactApexChart from "react-apexcharts";
// import "./SplineChart.css";
// import Box from '@mui/material/Box';

// export const SplineAreaChart = () => {
//   const [state, setstate] = useState({
//     series: [
//       {
//         name: "series2",
//         data: [2000, 8100, 4100, 8000],
//       },
//     ],
//     options: {
//       chart: {
//         height: 350,
//         type: "area",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "smooth",
//       },
//       xaxis: {
//         type: "months",
//         categories: ["Jan 2019", "Feb 2019", "Mar 2019", "Apr 2019"],
//         labels: {
//           show: true,
//           // align: 'right',
//           // minWidth: 0,
//           // maxWidth: 160,
//           style: {
//             colors: "#1F2552",
//             opacity: "50%",
//             fontSize: "12px",
//             fontFamily: "GoogleSans-Regular",
//             fontWeight: 400,
//             cssClass: "apexcharts-yaxis-label",
//           },
//         },
//       },
//       yaxis: {
//         show: true,
//         showAlways: true,
//         tickAmount: 4,
//         labels: {
//           show: true,
//           style: {
//             colors: "#1F2552",
//             opacity: "50%",
//             fontSize: "12px",
//             fontFamily: "GoogleSans-Regular",
//             fontWeight: 400,
//             cssClass: "apexcharts-yaxis-label",
//           },
//           offsetX: 0,
//           offsetY: 0,
//           rotate: 0,
//           formatter: function (value) {
//             return "$ " + value;
//           },
//         },
//         axisBorder: {
//           show: true,
//           color: "#DCDCDC",
//           offsetX: 0,
//           offsetY: 0,
//         },
//       },
//       grid: {
//         show: true,
//         // borderColor: '#90A4AE',
//         strokeDashArray: 0,
//         position: "back",
//         xaxis: {
//           lines: {
//             show: true,
//           },
//         },
//         yaxis: {
//           lines: {
//             show: true,
//           },
//         },
//         row: {
//           colors: undefined,
//           opacity: 0.5,
//         },
//         column: {
//           colors: undefined,
//           opacity: 0.5,
//         },
//         padding: {
//           top: 0,
//           right: 0,
//           bottom: 0,
//           left: 0,
//         },
//       },
//       fill: {
//               type: "gradient",
//               gradient: {
//                 shade: "light",
//                 type: "vertical",
//                 shadeIntensity: 0,
//                 opacityFrom: 0.3,
//                 opacityTo: 0.1,
//               },
//             },

//       tooltip: {
//         x: {
//           format: "dd/MM/yy HH:mm",
//         },
//       },
//     },
//   });

//   return (
//     <>
//       <div id="chart">
//         <ReactApexChart
//           options={state.options}
//           series={state.series}
//           type="area"
//           height={350}
//         />
//       </div>
//     </>
//   );
// };
