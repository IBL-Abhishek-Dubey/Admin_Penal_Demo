import React from "react";
import "../Sass/Chart.scss";
import {Line} from "react-chartjs-2"
function Chart() {

    const data = {
        labels : [2010 , 2011 ,2012 , 2013 , 2014 , 2015 ,2016],
        datasets :[
            {
                label : "IPHONE",
                data : [50 , 130 , 80 , 70 , 180 , 105 , 250],
                borderColor : '#01c0c8'
            },
            {
                label : "IPAD",
                data : [80 , 106 , 60 , 200 , 150 , 100 , 150],
                borderColor : 'orange'
            },{
                label : "IPOD",
                data : [30 , 80 , 70 , 140 , 140 , 80 , 200],
                borderColor : '#ab8ce4'
            }
               
        ]
    }
   
  return (
    <div className="col-sm-12 col-md-8 col-lr-8">
      <div className="card chart-card">
        <div className="card-body">
          <div className="chart-data">
              <h6 style={{fontWeight : "500"}}>YEARLY SALES</h6>

              <div className="chart-label">
                  <i class="fa fa-circle iphone-color"></i> &nbsp;
                  <p style={{marginTop : "-5px"}}>iphone</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa fa-circle ipad-color"></i> &nbsp;
                  <p style={{marginTop : "-5px"}}>ipad</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa fa-circle ipod-color"></i> &nbsp; 
                  <p style={{marginTop : "-5px"}}>ipod</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            
          </div>
          <br/>
                <Line data={data}/>
        </div>
      </div>
    </div>
  );
}

export default Chart;
