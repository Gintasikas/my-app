import React from 'react';
import { faUser, faEnvelope, faCalendarAlt, faMapMarkedAlt, faPhone, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class randomUser extends React.Component{
  
  state = {
    loading: true,
    person: null,
    
  };
  

  async componentDidMount(){
    const url = "https://randomuser.me/api/"
    const response = await fetch(url); // lauks kol gaus duomenis
    const data = await response.json();
    this.setState({ person: data.results[0], loading:false});
  }


  render(){
  return (
    <div>
      
      {this.state.loading || !this.state.person ? <div>Loading...</div> : <div>

        
        <br></br>
        <center><img src={this.state.person.picture.large} alt="Circle Image" className="img-raised rounded-circle img-fluid"/>
        <div><br></br><button type="button" onClick={() => this.componentDidMount()} className="btn btn-info">New user</button></div>
        </center>
        <br></br>
        <div className="row">
        <div className="col-sm-2"><p>My name is:</p><p> {this.state.person.name.title}. {this.state.person.name.first} {this.state.person.name.last}</p>
        <button type="button" className="btn btn-default btn-lg">
        <FontAwesomeIcon icon={faUser} />
        </button>
        </div>
        <div className="col-sm-2"><p>My email address is:</p><p> {this.state.person.email}</p>
        <button type="button" className="btn btn-default btn-lg">
         <FontAwesomeIcon icon={faEnvelope} />
        </button>
        </div>
        <div className="col-sm-2"><p>My birthday is:</p><p> {this.state.person.dob.date}</p>
        <button type="button" className="btn btn-default btn-lg">
         <FontAwesomeIcon icon={faCalendarAlt} />
        </button></div>
        <div className="col-sm-2"><p>My location is:</p><p> {this.state.person.location.street}, {this.state.person.location.city}</p>
        <button type="button" className="btn btn-default btn-lg">
         <FontAwesomeIcon icon={faMapMarkedAlt} />
        </button></div>
        <div className="col-sm-2"><p>My phone number is:</p><p> {this.state.person.cell}</p>
        <button type="button" className="btn btn-default btn-lg">
         <FontAwesomeIcon icon={faPhone} />
        </button></div>
        <div className="col-sm-2"><p>My password is:</p><p> {this.state.person.login.password}</p>
        
        <button type="button" className="btn btn-default btn-lg">
         <FontAwesomeIcon icon={faLock} />
        </button></div>
    </div>
        </div>}
    </div>
  );
 }     
}

export default randomUser;
