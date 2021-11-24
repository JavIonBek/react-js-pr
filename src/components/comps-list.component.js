import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/user.service";

export default class CompsList extends Component {
  constructor(props) {
    super(props);
    this.retrieveComps = this.retrieveComps.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveComp = this.setActiveComp.bind(this);
    this.removeAllComps = this.removeAllComps.bind(this);

    this.state = {
      comps: {},
      currentComp: null,
      currentIndex: -1,
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

  refreshList() {
    this.retrieveComps();
    this.setState({
      currentComp: null,
      currentIndex: -1
    });
  }

  setActiveComp(comp, index) {
    this.setState({
      currentComp: comp,
      currentIndex: index
    });
  }

  removeAllComps() {
    UserService.deleteAll()
      .then(response => {
        // console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
      const { comps, currentComp, currentIndex } = this.state;

      return(
          <div>
              <div className="w-100">
                <h4 align="center">Список ваших компьютеров</h4>
                  <table className="table table-sm table-bordered table-striped table-hover w-100 p-3">
                    <thead className="align-middle table-warning">
                        <tr className="">
                            <th scope="col">#</th>
                            <td>Общее количество компьютеров, из них</td>
                            <td>Из них рабочие</td>
                            <td>Подключенные к локальной сети</td>
                            <td>Подключенные к сети Интернет</td>
                            <td>Подключенные к корпоративной сети</td>
                            <td>Подключенные к системе Е-ХАТ</td>
                            <td>Подключенные к системе Е-ijro</td>
                            <td>Подключенные к системе project.gov.uz</td>
                            <td>Подключенные к системе my.mehnat.uz и ish.mehnat.uz</td>
                        </tr>
                    </thead>
                    <tbody>
                        {comps.comps && comps.comps.map((comp, index) => (
                          <tr
                            className={
                              (index === currentIndex ? "table-success" : "")
                            }
                            onClick={() => this.setActiveComp(comp, index)}
                            key={index}
                          >
                              <th>{comp.id}</th>
                              <td>{comp.comp_sum}</td>
                              <td>{comp.used}</td>
                              <td>{comp.lan}</td>
                              <td>{comp.internet}</td>
                              <td>{comp.corporate_net}</td>
                              <td>{comp.e_xat}</td>
                              <td>{comp.e_ijro}</td>
                              <td>{comp.project_gov_uz}</td>
                              <td>{comp.my_ish_mehnat_uz}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>

                <button className="btn btn-sm btn-danger my-1" onClick={this.removeAllComps}>
                    Удалить все
                </button>
                <Link to={"/add"} className="btn btn-sm btn-success my-1 ms-2">
                    Создать
                </Link>
                {currentComp ? (
                    <div>
                      <hr/>
                      <h4>Информация</h4>
                        <div>
                            <label>
                              <strong>Id:  </strong>
                                {currentComp.id}
                            </label>{" "}
                        </div>
                      <div>
                        <label>
                          <strong>Общее количество:  </strong>
                            {currentComp.comp_sum}
                        </label>{" "}
                      </div>
                      <div>
                        <label>
                          <strong>Из них рабочие:  </strong>
                            {currentComp.used}
                        </label>{" "}
                      </div>

                      <Link to={"/comps/" + currentComp.id} className="btn btn-sm btn-warning text-white my-2">
                        Изменять
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <br />
                      <p>Пожалуйста, нажмите на компьютер ...</p>
                    </div>
                  )}
              </div>
          </div>
      );
  }
}
