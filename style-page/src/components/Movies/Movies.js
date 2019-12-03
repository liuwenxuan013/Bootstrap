
import React from 'react';
import axios from 'axios';
import $ from 'jquery';
class Movies extends React.Component
{
    state = {
        movies: []
    }
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

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response =>
            {
                this.setState({ movies: response.data })
            });
    }
    render()
    {

        return (




            <div class="container mt-3">
                <h2>Movies</h2>
                <p>Type something in the input field to search the table for Moive names, director or time:</p>
                <input class="form-control" id="myInput" type="text" placeholder="Search.." />
                <br />
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Movies</th>
                            <th>Director</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody id="myTable">
                        {this.state.movies.map(m =>
                        {
                            return <tr>
                                <td>{m.id}</td>
                                <td>{m.title}</td>
                                <td>{m.body}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>


        );
    }


}
export default Movies;
