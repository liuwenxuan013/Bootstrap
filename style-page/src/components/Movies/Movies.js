
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

        axios.get("https://jsonplaceholder.typicode.com/db")
            .then(response =>
            {
                console.log(response);
                this.setState({ movies: response.data.moives })
            });
    }
    render()
    {

        return (




            <div class="container mt-8">
                <h2>Movies</h2>
                <p>Type something in the input field to search the table for Moive names, director or time:</p>
                <input class="form-control" id="myInput" type="text" placeholder="Search.." />
                <br />
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Director</th>
                            <th>Stars</th>
                            <th>Nation</th>
                            <th>Duration</th>
                            <th>Year</th>
                            <th>Rating</th>

                        </tr>
                    </thead>
                    <tbody id="myTable">
                        {this.state.movies.map(m =>
                        {
                            return <tr>
                                <td>{m.title}</td>
                                <td>{m.genre}</td>
                                <td>{m.director}</td>
                                <td>{m.stars}</td>
                                <td>{m.nation}</td>
                                <td>{m.duration}</td>
                                <td>{m.time}</td>
                                <td>{m.rating}</td>

                            </tr>
                        })}
                    </tbody>
                </table>
            </div>


        );
    }


}
export default Movies;
