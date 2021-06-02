import React from "react";
import "../Sass/BarChart.scss";
import {useTranslation} from "react-i18next"
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
function BarCharts() {
  const { t } = useTranslation();
  return (
   
      <div className="card">
        <div className="card-body">
          <h5 class="card-name">{t('sale_diff.7')}</h5>

          <div className="main-div">
            <div className="left-div">
              <h5 className="text-info">$647</h5>
              <p className="text-muted">April 2017</p>
              <b>(150 Sales)</b>
            </div>

            <div
              className="right-div text-right"
              style={{ height: "200px", width: "50%"  }}
            >
              <ResponsiveContainer
                height="100%"
                width="60%"
                margin={{ top: 0, right: 0, left: "auto", bottom: 0 }}
              >
                <BarChart
                  width={100}
                  height={200}
                  data={data}
                  barCategoryGap={10}
                >
                  <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default BarCharts;
