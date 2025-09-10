import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component{
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
    btnSend = () => {
        
        
    }

    render() {
        return( 
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form    
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        onChange={this.nameChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.salaryChange}/>

                    <button type="submit"
                            className="btn btn-outline-light" onClick={this.btnSend}>Добавить</button>
                    
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;