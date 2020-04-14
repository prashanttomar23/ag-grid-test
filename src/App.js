import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      columnDefs: [{
        headerName: "Id", field: "id"
      }, {
        headerName: "Name", field: "employee_name",sortable:true,filter:true
      }, {
        headerName: "Salary", field: "employee_salary",sortable:true,filter:true
      }, {
        headerName: "Age", field: "employee_age",sortable:true,filter:true
      }, {
        headerName: "Image", field: "profile_image",sortable:true,filter:true
      }],
      rowData:null,
      paginationPageSize: 12,
      cacheBlockSize: 10,
    }
  }
  componentDidMount(){
    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(result=>result.json())
    .then(res=>res.data)
    .then(rowData=>this.setState({rowData}))
  }
  render() {
    return (
      <div
      className="ag-theme-balham"
      style={{
      height: '500px',
      width: '600px' }}
    >
      <AgGridReact
        columnDefs={this.state.columnDefs}
        rowData={this.state.rowData}       
        pagination={true}
        paginationPageSize={this.state.paginationPageSize}
        cacheBlockSize={this.state.cacheBlockSize}
        animateRows={true}

      >
            
        
      </AgGridReact>
    </div>
    )
  }
}




export default App;
