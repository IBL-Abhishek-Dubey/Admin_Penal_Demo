import React from "react";
import "../Sass/Paichart.scss";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  
];
function PaiCharts() {
  return (
    <div class="col-md-12 pai-div">
      <div class="card bg">
        <div class="card-body">
          <h5 class="card-title">VISIT STATASTICS</h5>
          <div class="row">
            <div class="col-6  m-t-30">
                <div style={{ paddingTop : "66px"}}>
                <h1 class="">$347</h1>
              <p class="light_op_text">APRIL 2017</p>
              <b class="">(150 Sales)</b>{" "}
                </div>
            
            </div>
            <div class="col-6">
              <div id="sales1" class="text-right"  style={{ height: "187px", width: "100%" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={200} height={400}>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={data01}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                   />
                    {/* <Pie
                      dataKey="value"
                      data={data01}
                      cx={500}
                      cy={200}
                      innerRadius={40}
                      outerRadius={80}
                      fill="#82ca9d"
                    /> */}
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaiCharts;
