import React from "react";
import "../Sass/AreaChart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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
function AreaCharts() {
  return (
    <div className="col-sm-12 col-md-8 col-lr-8">
      <div className="card">
        <div className="card-body">
          <div class="d-flex m-b-40 align-items-center no-block">
            <h5 class="card-title ">SALES DIFFERENCE</h5>
            {/* <div class="ml-auto">
                <ul class="list-inline font-12">
                  <li>
                    <i class="fa fa-circle text-cyan"></i> SITE A
                  </li>
                  <li>
                    <i class="fa fa-circle text-primary"></i> SITE B
                  </li>
                </ul>
              </div> */}

            <div className="chart-label">
              <i class="fa fa-circle icon1 "></i> &nbsp;
              <p className="sitea">SITEA</p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="fa fa-circle icon2"></i> &nbsp;
              <p className="siteb">SITEB</p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
          <div style={{ height: "450px", width: "100%" }}>
            <ResponsiveContainer height="100%" width="100%">
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area dataKey="uv" stroke="#8884d8" fill="#F3F5F7" />
                <Area dataKey="pv" stroke="#8884d8" fill="#97EBEF" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreaCharts;
