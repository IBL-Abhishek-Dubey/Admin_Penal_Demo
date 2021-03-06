import React from "react";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import {useTranslation} from "react-i18next"
function Weather() {
  const { t } = useTranslation();
  return (
    
   

    <div class="card col-md-12 " style={{ backgroundColor: "#4DC0C8" , marginTop : "10px" }}>
      <div class="card-body " style={{display : "flex"}}>
        <div className="col-6 m-t-40">
          <div
            className="display"
            style={{ fontSize: "56px", fontFamily: "sans-serif" , fontWeight: "400" }}
          >
            <div style={{ paddingTop : "80px" , color : "white"}}>
              <span>73</span>
              <sup>°F</sup>
              <p style ={{fontSize : "14px"}}>{t('city.name')}, {t('country.name')}</p>
            </div>
          </div>
        </div>

         <div className="col-6" style={{color : "white"   , textAlign : "end"  }}>
            <CloudOutlinedIcon style={{ fontSize : "30" }} />
            <p style ={{fontSize : "14px" , fontStyle : "bolder" , marginTop : "6px" , marginBottom : "0px"  }}>{t('sunny.day')}</p>
            <p style ={{fontSize : "16px" , marginBottom : "20px" , opacity : "0.5"}}>{t('month.name')} 14</p>
        </div>

      </div>
    </div>
  );
}

export default Weather;
