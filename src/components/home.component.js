import React, {Component} from "react";
import { Bar } from 'react-chartjs-2';
import UserService from "../services/user.service";

export default class HomeComponent extends Component {
    constructor(props) {
    super(props);
    this.retrieveComps = this.retrieveComps.bind(this);

    this.state = {
      comps: {}
    };
  }

  async componentDidMount() {
    await this.retrieveComps();
  }

  retrieveComps() {
    UserService.getAll()
      .then(response => {
        this.setState({
          comps: response.data
        });
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

    render() {
        let { comps } = this.state;

        return(
            <div>
                <div className='header'>
                    <h3 align="center">Компьютеры</h3>
                </div>
                <table className="table table-bordered table-striped table-hover mb-5">
                    <thead className="table-warning">
                        <tr>
                            <th scope="col">Наименование параметра</th>
                            <th scope="col">Всего</th>
                            <th scope="col">СевРу</th>
                            <th scope="col">ЦРУ</th>
                            <th scope="col">ЮРУ</th>
                            <th scope="col">РУ-5</th>
                            <th scope="col">РУ "ГМЗ-1"</th>
                            <th scope="col">ПО НМЗ</th>
                            <th scope="col">ЗУС</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Общее количество компьютеров, из них</th>
                            <th scope="row">{comps.sum && comps.sum.sum_of_comps ? comps.sum.sum_of_comps : 0}</th>
                            <td>{comps.sev_ru && comps.sev_ru.sum_of_comps ? comps.sev_ru.sum_of_comps : 0}</td>
                            <td>{comps.cru && comps.cru.sum_of_comps ? comps.cru.sum_of_comps : 0}</td>
                            <td>{comps.yuru && comps.yuru.sum_of_comps ? comps.yuru.sum_of_comps : 0}</td>
                            <td>{comps.ru_5 && comps.ru_5.sum_of_comps ? comps.ru_5.sum_of_comps : 0}</td>
                            <td>{comps.ru_gmz_1 && comps.ru_gmz_1.sum_of_comps ? comps.ru_gmz_1.sum_of_comps : 0}</td>
                            <td>{comps.nmz && comps.nmz.sum_of_comps ? comps.nmz.sum_of_comps : 0}</td>
                            <td>{comps.zus && comps.zus.sum_of_comps ? comps.zus.sum_of_comps : 0}</td>
                        </tr>
                        <tr>
                            <th scope="row">Из них рабочие</th>
                            <th scope="row">{comps.sum && comps.sum.sum_of_used ? comps.sum.sum_of_used : 0}</th>
                            <td>{comps.sev_ru && comps.sev_ru.sum_of_used ? comps.sev_ru.sum_of_used : 0}</td>
                            <td>{comps.cru && comps.cru.sum_of_used ? comps.cru.sum_of_used : 0}</td>
                            <td>{comps.yuru && comps.yuru.sum_of_used ? comps.yuru.sum_of_used : 0}</td>
                            <td>{comps.ru_5 && comps.ru_5.sum_of_used ? comps.ru_5.sum_of_used : 0}</td>
                            <td>{comps.ru_gmz_1 && comps.ru_gmz_1.sum_of_used ? comps.ru_gmz_1.sum_of_used : 0}</td>
                            <td>{comps.nmz && comps.nmz.sum_of_used ? comps.nmz.sum_of_used : 0}</td>
                            <td>{comps.zus && comps.zus.sum_of_used ? comps.zus.sum_of_used : 0}</td>
                        </tr>
                        <tr>
                            <th scope="row">Подключенные к локальной сети</th>
                            <th scope="row">{comps.sum && comps.sum.sum_of_lan ? comps.sum.sum_of_lan : 0}</th>
                            <td>{comps.sev_ru && comps.sev_ru.sum_of_lan ? comps.sev_ru.sum_of_lan : 0}</td>
                            <td>{comps.cru && comps.cru.sum_of_lan ? comps.cru.sum_of_lan : 0}</td>
                            <td>{comps.yuru && comps.yuru.sum_of_lan ? comps.yuru.sum_of_lan : 0}</td>
                            <td>{comps.ru_5 && comps.ru_5.sum_of_lan ? comps.ru_5.sum_of_lan : 0}</td>
                            <td>{comps.ru_gmz_1 && comps.ru_gmz_1.sum_of_lan ? comps.ru_gmz_1.sum_of_lan : 0}</td>
                            <td>{comps.nmz && comps.nmz.sum_of_lan ? comps.nmz.sum_of_lan : 0}</td>
                            <td>{comps.zus && comps.zus.sum_of_lan ? comps.zus.sum_of_lan : 0}</td>
                        </tr>
                        <tr>
                            <th scope="row">Подключенные к сети Интернет</th>
                            <th scope="row">{comps.sum && comps.sum.sum_of_internet ? comps.sum.sum_of_internet : 0}</th>
                            <td>{comps.sev_ru && comps.sev_ru.sum_of_internet ? comps.sev_ru.sum_of_internet : 0}</td>
                            <td>{comps.cru && comps.cru.sum_of_internet ? comps.cru.sum_of_internet : 0}</td>
                            <td>{comps.yuru && comps.yuru.sum_of_internet ? comps.yuru.sum_of_internet : 0}</td>
                            <td>{comps.ru_5 && comps.ru_5.sum_of_internet ? comps.ru_5.sum_of_internet : 0}</td>
                            <td>{comps.ru_gmz_1 && comps.ru_gmz_1.sum_of_internet ? comps.ru_gmz_1.sum_of_internet : 0}</td>
                            <td>{comps.nmz && comps.nmz.sum_of_internet ? comps.nmz.sum_of_internet : 0}</td>
                            <td>{comps.zus && comps.zus.sum_of_internet ? comps.zus.sum_of_internet : 0}</td>
                        </tr>
                        <tr >
                            <th scope="row">Подключенные к корпоративной сети</th>
                            <th scope="row">{comps.sum && comps.sum.sum_of_corporate_net ? comps.sum.sum_of_corporate_net : 0}</th>
                            <td>{comps.sev_ru && comps.sev_ru.sum_of_corporate_net ? comps.sev_ru.sum_of_corporate_net : 0}</td>
                            <td>{comps.cru && comps.cru.sum_of_corporate_net ? comps.cru.sum_of_corporate_net : 0}</td>
                            <td>{comps.yuru && comps.yuru.sum_of_corporate_net ? comps.yuru.sum_of_corporate_net : 0}</td>
                            <td>{comps.ru_5 && comps.ru_5.sum_of_corporate_net ? comps.ru_5.sum_of_corporate_net : 0}</td>
                            <td>{comps.ru_gmz_1 && comps.ru_gmz_1.sum_of_corporate_net ? comps.ru_gmz_1.sum_of_corporate_net : 0}</td>
                            <td>{comps.nmz && comps.nmz.sum_of_corporate_net ? comps.nmz.sum_of_corporate_net : 0}</td>
                            <td>{comps.zus && comps.zus.sum_of_corporate_net ? comps.zus.sum_of_corporate_net : 0}</td>
                        </tr>
                        <tr>
                            <th scope="row">Подключенные к системе Е-ХАТ</th>
                            <th scope="row">{comps.sum && comps.sum.sum_of_e_xat ? comps.sum.sum_of_e_xat : 0}</th>
                            <td>{comps.sev_ru && comps.sev_ru.sum_of_e_xat ? comps.sev_ru.sum_of_e_xat : 0}</td>
                            <td>{comps.cru && comps.cru.sum_of_e_xat ? comps.cru.sum_of_e_xat : 0}</td>
                            <td>{comps.yuru && comps.yuru.sum_of_e_xat ? comps.yuru.sum_of_e_xat : 0}</td>
                            <td>{comps.ru_5 && comps.ru_5.sum_of_e_xat ? comps.ru_5.sum_of_e_xat : 0}</td>
                            <td>{comps.ru_gmz_1 && comps.ru_gmz_1.sum_of_e_xat ? comps.ru_gmz_1.sum_of_e_xat : 0}</td>
                            <td>{comps.nmz && comps.nmz.sum_of_e_xat ? comps.nmz.sum_of_e_xat : 0}</td>
                            <td>{comps.zus && comps.zus.sum_of_e_xat ? comps.zus.sum_of_e_xat : 0}</td>
                        </tr>
                        <tr>
                            <th scope="row">Подключенные к системе Е-ijro</th>
                            <th scope="row">{comps.sum && comps.sum.sum_of_e_ijro ? comps.sum.sum_of_e_ijro : 0}</th>
                            <td>{comps.sev_ru && comps.sev_ru.sum_of_e_ijro ? comps.sev_ru.sum_of_e_ijro : 0}</td>
                            <td>{comps.cru && comps.cru.sum_of_e_ijro ? comps.cru.sum_of_e_ijro : 0}</td>
                            <td>{comps.yuru && comps.yuru.sum_of_e_ijro ? comps.yuru.sum_of_e_ijro : 0}</td>
                            <td>{comps.ru_5 && comps.ru_5.sum_of_e_ijro ? comps.ru_5.sum_of_e_ijro : 0}</td>
                            <td>{comps.ru_gmz_1 && comps.ru_gmz_1.sum_of_e_ijro ? comps.ru_gmz_1.sum_of_e_ijro : 0}</td>
                            <td>{comps.nmz && comps.nmz.sum_of_e_ijro ? comps.nmz.sum_of_e_ijro : 0}</td>
                            <td>{comps.zus && comps.zus.sum_of_e_ijro ? comps.zus.sum_of_e_ijro : 0}</td>
                        </tr>
                        <tr>
                            <th scope="row">Подключенные к системе project.gov.uz</th>
                            <th scope="row">{comps.sum && comps.sum.sum_of_project_gov_uz ? comps.sum.sum_of_project_gov_uz : 0}</th>
                            <td>{comps.sev_ru && comps.sev_ru.sum_of_project_gov_uz ? comps.sev_ru.sum_of_project_gov_uz : 0}</td>
                            <td>{comps.cru && comps.cru.sum_of_project_gov_uz ? comps.cru.sum_of_project_gov_uz : 0}</td>
                            <td>{comps.yuru && comps.yuru.sum_of_project_gov_uz ? comps.yuru.sum_of_project_gov_uz : 0}</td>
                            <td>{comps.ru_5 && comps.ru_5.sum_of_project_gov_uz ? comps.ru_5.sum_of_project_gov_uz : 0}</td>
                            <td>{comps.ru_gmz_1 && comps.ru_gmz_1.sum_of_project_gov_uz ? comps.ru_gmz_1.sum_of_project_gov_uz : 0}</td>
                            <td>{comps.nmz && comps.nmz.sum_of_project_gov_uz ? comps.nmz.sum_of_project_gov_uz : 0}</td>
                            <td>{comps.zus && comps.zus.sum_of_project_gov_uz ? comps.zus.sum_of_project_gov_uz : 0}</td>
                        </tr>
                        <tr>
                            <th scope="row">Подключенные к системе my.mehnat.uz и ish.mehnat.uz</th>
                            <th scope="row">{comps.sum && comps.sum.sum_of_my_ish_mehnat_uz ? comps.sum.sum_of_my_ish_mehnat_uz : 0}</th>
                            <td>{comps.sev_ru && comps.sev_ru.sum_of_my_ish_mehnat_uz ? comps.sev_ru.sum_of_my_ish_mehnat_uz : 0}</td>
                            <td>{comps.cru && comps.cru.sum_of_my_ish_mehnat_uz ? comps.cru.sum_of_my_ish_mehnat_uz : 0}</td>
                            <td>{comps.yuru && comps.yuru.sum_of_my_ish_mehnat_uz ? comps.yuru.sum_of_my_ish_mehnat_uz : 0}</td>
                            <td>{comps.ru_5 && comps.ru_5.sum_of_my_ish_mehnat_uz ? comps.ru_5.sum_of_my_ish_mehnat_uz : 0}</td>
                            <td>{comps.ru_gmz_1 && comps.ru_gmz_1.sum_of_my_ish_mehnat_uz ? comps.ru_gmz_1.sum_of_my_ish_mehnat_uz : 0}</td>
                            <td>{comps.nmz && comps.nmz.sum_of_my_ish_mehnat_uz ? comps.nmz.sum_of_my_ish_mehnat_uz : 0}</td>
                            <td>{comps.zus && comps.zus.sum_of_my_ish_mehnat_uz ? comps.zus.sum_of_my_ish_mehnat_uz : 0}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mb-4">
                    <div className='header'>
                      <h3 className='title' align="center">Диаграмма</h3>
                    </div>
                    <Bar
                        height={100}
                        options={{
                          scales: {
                            yAxes: [
                              {
                                ticks: {
                                  beginAtZero: true,
                                },
                              },
                            ],
                          },
                        }}
                        data={{
                          labels: [
                              'Общее количество',
                              'Из них рабочие',
                              'Подключенные к локальной сети',
                              'Подключенные к сети Интернет',
                              'Подключенные к корпоративной сети',
                              'Подключенные к системе Е-ХАТ',
                              'Подключенные к системе Е-ijro',
                              'Подключенные к системе project.gov.uz',
                              'Подключенные к my.mehnat.uz и ish.mehnat.uz',
                          ],
                          datasets: [
                            {
                              label: 'Общее число',
                              data: comps.sum ? Object.values(comps.sum) : 0,
                              backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(108, 204, 52, 0.2)',
                                'rgba(204, 52, 159, 0.2)',
                                'rgba(185, 122, 86, 0.2)',
                              ],
                              borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(108, 204, 52, 1)',
                                'rgba(204, 52, 159, 1)',
                                'rgba(185, 122, 86, 1)',
                              ],
                              borderWidth: 1,
                            },
                          ],
                        }}
                    />
                </div>
            </div>
        );
    }
}
