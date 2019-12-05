
import React from 'react';
import axios from 'axios';
import $ from 'jquery';
class Music extends React.Component
{
    state = {
        music: []
    };
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

        axios.get("https://my-json-server.typicode.com/liuwenxuan013/demo/db")
            .then(response =>
            {
                console.log(response);
                this.setState({ music: response.data.music })
            });
    }
    render()
    {

        return (




            <div >
                <h4>Playlist</h4>

                <input class="form-control" id="myInput" type="text" placeholder="Search.." />
                <br />
                <table class="table table-sm table-hove" style ={{textAlign:"center"}}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Album</th>
                            <th>Singer</th>
                            <th>Genre</th>
                            <th>Time</th>

                        </tr>
                    </thead>
                    <tbody id="myTable">
                        {this.state.music.map(m =>
                        {
                            return <tr key={m.id}>
                                <td>{m.title}</td>
                                <td>{m.album}</td>
                                <td>{m.singer}</td>
                                <td>{m.genre}</td>
                                <td>{m.time}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>


        );
    }


}
export default Music;
