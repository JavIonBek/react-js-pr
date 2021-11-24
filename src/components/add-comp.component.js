import React, { Component } from "react";
import {Link} from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isInt } from "validator";
import UserService from "../services/user.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert" align="center">
        Это поле обязательно к заполнению!
      </div>
    );
  }
};

const vnumber = value => {
  if (!isInt(value) || value < 0) {
    return (
      <div className="alert alert-danger" role="alert" align="center">
        Введите целое число.
      </div>
    );
  }
};

export default class AddComp extends Component {
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
    this.saveComp = this.saveComp.bind(this);

    this.state = {
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
      my_ish_mehnat_uz: "",

      submitted: false,
      message: ""
    };
  }

  onChangeComp_sum(e) {
    this.setState({
      comp_sum: e.target.value
    });
  }

  onChangeUsed(e) {
    this.setState({
      used: e.target.value
    });
  }

  onChangeLan(e) {
    this.setState({
      lan: e.target.value
    });
  }

  onChangeInternet(e) {
    this.setState({
      internet: e.target.value
    });
  }

  onChangeCorporate_net(e) {
    this.setState({
      corporate_net: e.target.value
    });
  }

  onChangeE_xat(e) {
    this.setState({
      e_xat: e.target.value
    });
  }

  onChangeE_ijro(e) {
    this.setState({
      e_ijro: e.target.value
    });
  }

  onChangeProject_gov_uz(e) {
    this.setState({
      project_gov_uz: e.target.value
    });
  }

  onChangeMy_ish_mehnat_uz(e) {
    this.setState({
      my_ish_mehnat_uz: e.target.value
    });
  }

  saveComp(e) {
    e.preventDefault();

    this.setState({
      message: ""
    });

    let data = {
      comp_sum: this.state.comp_sum,
      used: this.state.used,
      lan: this.state.lan,
      internet: this.state.internet,
      corporate_net: this.state.corporate_net,
      e_xat: this.state.e_xat,
      e_ijro: this.state.e_ijro,
      project_gov_uz: this.state.project_gov_uz,
      my_ish_mehnat_uz: this.state.my_ish_mehnat_uz
    };

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      UserService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
              user: response.data.user,
              factory_type: response.data.factory_type,
              comp_sum: response.data.comp_sum,
              used: response.data.used,
              lan: response.data.lan,
              internet: response.data.internet,
              corporate_net: response.data.corporate_net,
              e_xat: response.data.e_xat,
              e_ijro: response.data.e_ijro,
              project_gov_uz: response.data.project_gov_uz,
              my_ish_mehnat_uz: response.data.my_ish_mehnat_uz,

              submitted: true
            });
            // console.log(response.data);
          }, error => {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            this.setState({
              submitted: false,
              message: resMessage
            });
          })
          .catch(e => {
            console.log(e);
          });
    } else {
      this.setState({
        submitted: false
      });
    }
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4 align="center">Успешно создано!<br/><Link to={"/comps"} className="nav-link">Перейти к настройкам</Link></h4>
          </div>
        ) : (
          <div>
            <h4 align="center">Создать</h4>
            <Form
              onSubmit={this.saveComp}
              ref={c => {
                this.form = c;
              }}
            >
            <div className="form-group">
              <label htmlFor="comp_sum">Общее количество компьютеров</label>
              <Input
                type="number"
                min="0"
                step="1"
                className="form-control"
                id="comp_sum"
                required
                value={this.state.comp_sum}
                onChange={this.onChangeComp_sum}
                name="comp_sum"
                validations={[required, vnumber]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="used">Из них рабочие</label>
              <Input
                type="number"
                min="0"
                step="1"
                className="form-control"
                id="used"
                required
                value={this.state.used}
                onChange={this.onChangeUsed}
                name="used"
                validations={[required, vnumber]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lan">Подключенные к локальной сети</label>
              <Input
                type="number"
                min="0"
                step="1"
                className="form-control"
                id="lan"
                required
                value={this.state.lan}
                onChange={this.onChangeLan}
                name="lan"
                validations={[required, vnumber]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="internet">Подключенные к сети Интернет</label>
              <Input
                type="number"
                min="0"
                step="1"
                className="form-control"
                id="internet"
                required
                value={this.state.internet}
                onChange={this.onChangeInternet}
                name="internet"
                validations={[required, vnumber]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="corporate_net">Подключенные к корпоративной сети</label>
              <Input
                type="number"
                min="0"
                step="1"
                className="form-control"
                id="corporate_net"
                required
                value={this.state.corporate_net}
                onChange={this.onChangeCorporate_net}
                name="corporate_net"
                validations={[required, vnumber]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="e_xat">Подключенные к системе Е-ХАТ</label>
              <Input
                type="number"
                min="0"
                step="1"
                className="form-control"
                id="e_xat"
                required
                value={this.state.e_xat}
                onChange={this.onChangeE_xat}
                name="e_xat"
                validations={[required, vnumber]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="e_ijro">Подключенные к системе Е-ijro</label>
              <Input
                type="number"
                min="0"
                step="1"
                className="form-control"
                id="e_ijro"
                required
                value={this.state.e_ijro}
                onChange={this.onChangeE_ijro}
                name="e_ijro"
                validations={[required, vnumber]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="project_gov_uz">Подключенные к системе project.gov.uz</label>
              <Input
                type="number"
                min="0"
                step="1"
                className="form-control"
                id="project_gov_uz"
                required
                value={this.state.project_gov_uz}
                onChange={this.onChangeProject_gov_uz}
                name="project_gov_uz"
                validations={[required, vnumber]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="my_ish_mehnat_uz">Подключенные к системе my.mehnat.uz и ish.mehnat.uz</label>
              <Input
                type="number"
                min="0"
                step="1"
                className="form-control"
                id="my_ish_mehnat_uz"
                required
                value={this.state.my_ish_mehnat_uz}
                onChange={this.onChangeMy_ish_mehnat_uz}
                name="my_ish_mehnat_uz"
                validations={[required, vnumber]}
              />
            </div>

            <button className="btn btn-success my-3">
              Создать
            </button>

              {this.state.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {this.state.message}
                  </div>
                </div>
              )}
              <CheckButton
                style={{ display: "none" }}
                ref={c => {
                  this.checkBtn = c;
                }}
              />
            </Form>
          </div>
        )}
      </div>
    );
  }
}
