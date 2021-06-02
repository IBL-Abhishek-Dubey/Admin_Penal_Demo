import React from "react";
import { useTranslation } from "react-i18next";

function Footer(props) {
  const { t } = useTranslation();

  // function handleClick(lang) {
  //   i18next.changeLanguage(lang)
  //   console.log(lang);
  // }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        Change Langauge &nbsp;
        {/* <button type="button" className="btn btn-danger" onClick={()=>props.passFunction('en')}>
          English
        </button> &nbsp;&nbsp;
        <button type="button" class="btn btn-warning" onClick={()=>props.passFunction('fr')}>
         French
        </button> */}
        <select id="lang" onChange={props.passFunction}>
         
          <option value="en" >
            English
          </option>
          <option value="fr">
            French
          </option>
        </select>
      </div>
    </>
  );
}

export default Footer;
