import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    {
      name: "Napaleon",
      salary: 1400,
      increase: true
    },
    {
      name: "Alex",
      salary: 4400,
      increase: false
    },
    {
      name: "Robert",
      salary: 400,
      increase: true
    }
  ]


  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
