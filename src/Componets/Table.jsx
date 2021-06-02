import React from "react";
import "../Sass/Table.scss";
import {useTranslation} from "react-i18next"
function Table() {
  const { t } = useTranslation();
  return (
    <div className="col-sm-12 col-md-6 col-lr-6">
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <div>
              <h5 className="table-title" style={{ fontWeight : 700}}>{t('sales.overview')}</h5>
              <h6 className="report-month" style={{ fontWeight : 300}}>{t('statment.line')}</h6>
            </div>
            <div className="ml-auto">
              <select className="form-control b-0">
                <option>{t('januvary.1')}</option>
                <option value="1">{t('febuary.2')}</option>
                <option value="2" selected="">
                {t('march.3')}
                </option>
                <option value="3">{t('month.name')}</option>
              </select>
            </div>
          </div>
          <div className="card-body second-body">
            <div className="left-div">
              <h5 className="left-div-h5">  {t('march.3')} 2017</h5>
              <h6 className="left-div-h6"> {t('table.heading')}</h6>
            </div>

            <div className="right-div">
              <h2 className="text-success text">$3,690</h2>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover no-wrap" >
              <thead>
                <tr>
                  <th className="text-center" >#</th>
                  <th > {t('name.1')}</th>
                  <th> {t('status.2')}</th>
                  <th >DATE</th>
                  <th > {t('price.3')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">1</td>
                  <td class="txt-oflo">Elite admin</td>
                  <td>
                    <span class="badge badge-success badge-pill table-icon-1"> {t('sale.4')}</span>{" "}
                  </td>
                  <td class="txt-oflo">{t('month.name')} 18, 2017</td>
                  <td>
                    <span class="text-success">$24</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">2</td>
                  <td class="txt-oflo">Real Homes</td>
                  <td>
                    <span class="badge badge-info badge-pill  table-icon-2"> {t('extended.5')}</span>
                  </td>
                  <td class="txt-oflo">{t('month.name')} 19, 2017</td>
                  <td>
                    <span class="text-info">$1250</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">3</td>
                  <td class="txt-oflo">Ample Admin</td>
                  <td>
                    <span class="badge badge-info badge-pill  table-icon-3">{t('extended.5')}</span>
                  </td>
                  <td class="txt-oflo">{t('month.name')} 19, 2017</td>
                  <td>
                    <span class="text-info">$1250</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">4</td>
                  <td class="txt-oflo">Medical Pro</td>
                  <td>
                    <span class="badge badge-danger badge-pill  table-icon-4">tax</span>
                  </td>
                  <td class="txt-oflo">{t('month.name')} 20, 2017</td>
                  <td>
                    <span class="text-danger">-$24</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">5</td>
                  <td class="txt-oflo">Hosting press html</td>
                  <td>
                    <span class="badge badge-success badge-pill  table-icon-5"> {t('sale.4')}</span>
                  </td>
                  <td class="txt-oflo">{t('month.name')} 21, 2017</td>
                  <td>
                    <span class="text-success">$24</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">6</td>
                  <td class="txt-oflo">Digital Agency PSD</td>
                  <td>
                    <span class="badge badge-success badge-pill  table-icon-6"> {t('sale.4')}</span>{" "}
                  </td>
                  <td class="txt-oflo">{t('month.name')} 23, 2017</td>
                  <td>
                    <span class="text-danger">-$14</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">7</td>
                  <td class="txt-oflo">Helping Hands</td>
                  <td>
                    <span class="badge badge-warning badge-pill  table-icon-7">member</span>
                  </td>
                  <td class="txt-oflo">{t('month.name')} 22, 2017</td>
                  <td>
                    <span class="text-success">$64</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">8</td>
                  <td class="txt-oflo">Ample Admin</td>
                  <td>
                    <span class="badge badge-info badge-pill  table-icon-8">{t('sale.4')}</span>
                  </td>
                  <td class="txt-oflo">{t('month.name')} 19, 2017</td>
                  <td>
                    <span class="text-info">$1250</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
