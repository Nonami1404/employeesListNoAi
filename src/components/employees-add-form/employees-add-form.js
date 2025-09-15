import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: null
        }
    }
    nameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    salaryChange = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    btnSend = (e) => {
        e.preventDefault(); // чтобы страница не перезагружалась
        const {name, salary} = this.state;

        if (name && salary) {
            this.props.onAdd(name, salary);
            this.setState({name: "", salary: ""}); // очистка полей
        }
    }

    render() {
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.btnSend}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        value={this.state.name}
                        onChange={this.nameChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        value={this.state.salary}
                        onChange={this.salaryChange}/>

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
