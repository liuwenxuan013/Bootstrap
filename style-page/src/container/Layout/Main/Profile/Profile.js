import React from 'react';
import { InfoContext } from '../../../../components/Info/Info';

import $ from 'jquery';
import MyLinks from "../../../../components/MyLinks/MyLinks";
import ContactLink from "../../../../components/MyLinks/ContactLink";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import 'bootstrap';
$('#addSupModal').modal('show');


class Profile extends React.Component
{
    componentDidMount() {
        $(document).ready(function () {
            $('.toast').toast('show')
        });
    };



    render(){
    return (
        <div >

            <InfoContext.Consumer>
                {(context) => {

                    return (<div>
                        <div id="accordion"  >


                            <div className="card " style={{padding:"40px"}}>
                                <div className="row">
                                <div  className="col-6" style={{width:"30%" }} >

                                <h1>{context.info.name}</h1>

                                <h6>{context.info.title}  </h6>
                                <ContactLink/>
                                <p>Toronro,ON</p>
                                   <MyLinks  />
                                <br/>
                            </div>

                            <div className="col-6" >
                                <div class="toast" data-autohide="false" style={{backgroundColor:"lightBlue"}}>
                                    <div class="toast-header">
                                        <strong class="mr-auto text-primary">Hi, Read me</strong>
                                        <small class="text-muted">Read later</small>
                                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                                    </div>
                                    <div class="toast-body" >
                                        <p>Please download my resume and help it
                                        find a HR, I am looking forward to a Web
                                            developer job opportunity in Toronto...</p>
                                        <p>Thank you </p>

                                        <a href="./images/Laura Liu-Resume.pdf" download="Laura Liu - Resume">
                                            <CloudDownloadIcon/>
                                        </a>

                                    </div>
                                </div>

                                </div>
                                </div>

                            {/*</div>*/}



                            </div>

                                <div className="card" style={{padding:"40px"}}>

                                <a className="card-link" data-toggle="collapse" href="#collapseTwo">
                                    <h4 >EXECUTIVE SUMMARY</h4>
                                </a>

                                {context.info.summary.map((s,index)=>{
                                    return <p key={index}>{s.desc}
                                    </p>
                                })}
                                </div>

                                <div className="card" style={{padding:"40px"}}>


                                <a className="card-link " data-toggle="collapse" href="#collapseOne" >
                                    <h4 style={{ padding:"20px 0"}}>PROFESSIONAL EXPERIENCE</h4>
                                </a>
                                {context.info.workExperience.map((e,index) => {
                                    return (
                                        <div key={index}>
                                            <h5 class="bg-info">{e.company}</h5>
                                            <h6>{e.jobTitle}</h6>
                                            <p>{e.start} To {e.end}</p>

                                            <p>{e.description.overall}</p>

                                            <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                                <div className="card-body">

                                                    {e.description.responsibilities.map((e,index) => {

                                                        return <div key={index}>
                                                            <p> {e.desc} </p>
                                                        </div>
                                                    })}
                                                </div>
                                            </div>


                                        </div>


                                    )
                                })}
                            </div>



                            <div className="card" style={{padding:"40px"}}>
                                <a className="card-link" data-toggle="collapse" href="#collapseTwo">
                                    <h4 >EDUCATION</h4>
                                </a>
                                {context.info.education.map(e => {
                                    return (
                                        <div style={{ padding:"20px 0"}} key={e.school}>
                                            <h5 class="bg-info">{e.school}</h5>
                                            <h6>{e.degree} - {e.major}</h6>
                                            <p>{e.start} To {e.end} | {e.city},{e.country}</p>
                                            <div id="collapseTwo" class="collapse show" data-parent="#accordion">
                                                <div class="card-body">

                                                    {e.awards.map((a,index)=>{
                                                        return  <div key={index} className="card" style={{width: " 200px", height:"150px", float: "left"}}>
                                                            <img className="card-img-top" src={a.imgUrl}
                                                                 alt={a.title} style={{width: "100%" ,height:"83%"}}/>
                                                            <div className="card-body" style={{margin:0,padding:0,float: "left"}}>
                                                                <p className="card-text" style={{textAlign:"center",fontSize:"10px" ,margin:0,padding:0}}>{a.title}</p>
                                                            </div>
                                                        </div>
                                                    })}

                                                </div>
                                            </div>


                                        </div>

                                    )
                                })}
                            </div>
                            <div className="card" style={{ padding:"40px"}}>

                                <a className="card-link" data-toggle="collapse" href="#collapseThree">
                                    <h4  >SKILLS</h4>
                                </a>
                                <div id="collapseThree" className="collapse show" data-parent="#accordion">
                                    <div className="card-body">
                                        {context.info.skills.map(e => {
                                            return (
                                                <li key={e.title}>{e.title} </li>
                                            )})}
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ padding:"40px"}}>

                                <a className="card-link" data-toggle="collapse" href="#collapseThree">
                                    <h4  >CERTIFICATE</h4>
                                </a>
                                <div id="collapseThree" className="collapse show" data-parent="#accordion">
                                    <div className="card-body">
                                        {context.info.certificate.map((c,index) => {
                                            return (



                                                <div key={index} className="card" style={{width: " 200px", height:"150px", float: "left"}}>
                                                    <img className="card-img-top" src={c.imgUrl}
                                                         alt={c.title} style={{width: "100%" ,height:"83%"}}/>
                                                    <div className="card-body" style={{margin:0,padding:0,float: "left"}}>
                                                        <p className="card-text" style={{textAlign:"center",fontSize:"10px" ,margin:0,padding:0}}>{c.title}</p>
                                                        <p className="card-text" style={{textAlign:"center",fontSize:"10px" ,margin:0,padding:0}}>{c.time}</p>
                                                    </div>
                                                </div>


                                            )})}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>)
                }
                }
            </InfoContext.Consumer>

        </div>

    );
}

}
export default Profile;
