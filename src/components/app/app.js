import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Napaleon", salary: 1400, increase: true },
                { name: "Alex", salary: 4400, increase: false },
                { name: "Robert", salary: 400, increase: true }
            ]
        }
    }

    // метод для добавления нового сотрудника
    addEmployee = (name, salary) => {
        const newEmployee = {
            name,
            salary,
            increase: false
        };
        this.setState(({data}) => ({
            data: [...data, newEmployee]
        }))
    }

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList data={this.state.data} />
                <EmployeesAddForm onAdd={this.addEmployee}/>
            </div>
        );
    }
}

export default App;
