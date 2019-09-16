import React from 'react';
import './App.css';
import RandomUser from'./components/RandomUser';


class App extends React.Component{
  render(){
    return (
     <div className="container">
          <RandomUser />
     </div>
  );
}
}

export default App;
