import React from 'react';
// import axios from 'axios';
 import db from '../../db.json';
import $ from 'jquery';
class Companies extends React.Component
{
    state = {

        companies:[]}

    componentDidMount()
    {

        $(document).ready(function ()
        {
            $("#myInput").on("keyup", function ()
            {
                var value = $(this).val().toLowerCase();
                $("#myTable tr").filter(function ()
                {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            })
        });
        //
        // axios.get("https://my-json-server.typicode.com/liuwenxuan013/demo/db")
        //     .then(response =>
        //     {
        //         console.log(response);
        //         this.setState({ company: response.data.people })
        // fetch("../db.json").then(function(data) {
            this.setState({ companies: db.companies });
        // });
    }
    render()
    {

        return (
            <div class="container ">
                <h4 style={{textAlign:"center"}}>Companies</h4>
                <p style={{textAlign:"center"}} >Find your job opportunity </p>
                <input class="form-control" id="myInput" type="text" placeholder="Search.." />
                <br />
                <table class="table table-sm table-responsive table-hover" style= {{textAlign:"center"}}>
                    <thead>
                    <tr>

                        <th>Company</th>
                        <th>Website</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Zip Code</th>


                    </tr>
                    </thead>
                    <tbody id="myTable">
                    {db.companies.map(m =>{


                        return <tr key={m.id} >
                            <td>{m.name}</td>
                            <td>{m.website}</td>
                            <td>{m.email}</td>
                            <td>{m.address}</td>
                            <td>{m.city}</td>
                            <td>{m.zipCode}</td>


                        </tr>
                    })}
                    </tbody>
                </table>
            </div>


        );
    }


}
export default Companies;
