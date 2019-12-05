import React from 'react';
import Nav from '../../components/Nav/Nav';
import Main from './Main/Main';
import Footer from "../../components/Footer/Footer";
function Layout()
{
    return (
        <div style={{backgroundColor:"lightGrey"}}>


        <div class="container" >

            <Nav />
            <Main />
            <Footer/>

        </div>
        </div>

    );
}
export default Layout;
