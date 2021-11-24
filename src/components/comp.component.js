import React, { Component } from "react";
import UserService from "../services/user.service";

export default class Comp extends Component {
  constructor(props) {
    super(props);
    this.onChangeComp_sum = this.onChangeComp_sum.bind(this);
    this.onChangeUsed = this.onChangeUsed.bind(this);
    this.onChangeLan = this.onChangeLan.bind(this);
    this.onChangeInternet = this.onChangeInternet.bind(this);
    this.onChangeCorporate_net = this.onChangeCorporate_net.bind(this);
    this.onChangeE_xat = this.onChangeE_xat.bind(this);
    this.onChangeE_ijro = this.onChangeE_ijro.bind(this);
    this.onChangeProject_gov_uz = this.onChangeProject_gov_uz.bind(this);
    this.onChangeMy_ish_mehnat_uz = this.onChangeMy_ish_mehnat_uz.bind(this);
    this.getComp = this.getComp.bind(this);
    this.updateComp = this.updateComp.bind(this);
    this.deleteComp = this.deleteComp.bind(this);

    this.state = {
      currentComp: {
          id: null,
          user: null,
          factory_type: "",
          comp_sum: "",
          used: "",
          lan: "",
          internet: "",
          corporate_net: "",
          e_xat: "",
          e_ijro: "",
          project_gov_uz: "",
          my_ish_mehnat_uz: ""
      },
      message: ""
    };
  }

  async componentDidMount() {
    await this.getComp(this.props.match.params.id);
  }

  onChangeComp_sum(e) {
    const comp_sum = e.target.value;

    this.setState(function(prevState) {
      return {
        currentComp: {
          ...prevState.currentComp,
          comp_sum: comp_sum
        }
      };
    });
  }

  onChangeUsed(e) {
    const used = e.target.value;

    this.setState(prevState => ({
      currentComp: {
        ...prevState.currentComp,
        used: used
      }
    }));
  }

  onChangeLan(e) {
    const lan = e.target.value;

    this.setState(prevState => ({
      currentComp: {
        ...prevState.currentComp,
        lan: lan
      }
    }));
  }

  onChangeInternet(e) {
    const internet = e.target.value;

    this.setState(prevState => ({
      currentComp: {
        ...prevState.currentComp,
        internet: internet
      }
    }));
  }

  onChangeCorporate_net(e) {
    const corporate_net = e.target.value;

    this.setState(prevState => ({
      currentComp: {
        ...prevState.currentComp,
        corporate_net: corporate_net
      }
    }));
  }

  onChangeE_xat(e) {
    const e_xat = e.target.value;

    this.setState(prevState => ({
      currentComp: {
        ...prevState.currentComp,
        e_xat: e_xat
      }
    }));
  }

  onChangeE_ijro(e) {
    const e_ijro = e.target.value;

    this.setState(prevState => ({
      currentComp: {
        ...prevState.currentComp,
        e_ijro: e_ijro
      }
    }));
  }

  onChangeProject_gov_uz(e) {
    const project_gov_uz = e.target.value;

    this.setState(prevState => ({
      currentComp: {
        ...prevState.currentComp,
        project_gov_uz: project_gov_uz
      }
    }));
  }

  onChangeMy_ish_mehnat_uz(e) {
    const my_ish_mehnat_uz = e.target.value;

    this.setState(prevState => ({
      currentComp: {
        ...prevState.currentComp,
        my_ish_mehnat_uz: my_ish_mehnat_uz
      }
    }));
  }

  getComp(id) {
    UserService.get(id)
      .then(response => {
        this.setState({
          currentComp: response.data
        });
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateComp() {
    UserService.update(
      this.state.currentComp.id,
      this.state.currentComp
    )
      .then(() => {
        // console.log(response.data);
        this.setState({
          message: "Компьютер успешно обновлен!"
        });
        this.props.history.push('/comps')
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteComp() {
    UserService.delete(this.state.currentComp.id)
      .then(() => {
        // console.log(response.data);
        this.props.history.push('/comps')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentComp } = this.state;

    return (
      <div>
        {currentComp ? (
          <div className="edit-form">
            <h4 align="center">Изменять</h4>
            <form>
                <div className="form-group">
                  <label htmlFor="comp_sum">Общее количество компьютеров</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    className="form-control"
                    id="comp_sum"
                    required
                    value={currentComp.comp_sum}
                    onChange={this.onChangeComp_sum}
                    name="comp_sum"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="used">Из них рабочие</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    className="form-control"
                    id="used"
                    required
                    value={currentComp.used}
                    onChange={this.onChangeUsed}
                    name="used"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lan">Подключенные к локальной сети</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    className="form-control"
                    id="lan"
                    required
                    value={currentComp.lan}
                    onChange={this.onChangeLan}
                    name="lan"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="internet">Подключенные к сети Интернет</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    className="form-control"
                    id="internet"
                    required
                    value={currentComp.internet}
                    onChange={this.onChangeInternet}
                    name="internet"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="corporate_net">Подключенные к корпоративной сети</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    className="form-control"
                    id="corporate_net"
                    required
                    value={currentComp.corporate_net}
                    onChange={this.onChangeCorporate_net}
                    name="corporate_net"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="e_xat">Подключенные к системе Е-ХАТ</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    className="form-control"
                    id="e_xat"
                    required
                    value={currentComp.e_xat}
                    onChange={this.onChangeE_xat}
                    name="e_xat"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="e_ijro">Подключенные к системе Е-ijro</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    className="form-control"
                    id="e_ijro"
                    required
                    value={currentComp.e_ijro}
                    onChange={this.onChangeE_ijro}
                    name="e_ijro"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="project_gov_uz">Подключенные к системе project.gov.uz</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    className="form-control"
                    id="project_gov_uz"
                    required
                    value={currentComp.project_gov_uz}
                    onChange={this.onChangeProject_gov_uz}
                    name="project_gov_uz"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="my_ish_mehnat_uz">Подключенные к системе my.mehnat.uz и ish.mehnat.uz</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    className="form-control"
                    id="my_ish_mehnat_uz"
                    required
                    value={currentComp.my_ish_mehnat_uz}
                    onChange={this.onChangeMy_ish_mehnat_uz}
                    name="my_ish_mehnat_uz"
                  />
                </div>
            </form>

            <button
              className="btn btn-danger my-3"
              onClick={this.deleteComp}
            >
              Удалить
            </button>

            <button
              type="submit"
              className="btn btn-success my-3 ms-3"
              onClick={this.updateComp}
            >
              Изменять
            </button>
            <p className="b-2">{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Пожалуйста, нажмите на компьютер ...</p>
          </div>
        )}
      </div>
    );
  }
}
