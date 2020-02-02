import React from 'react';
import './App.css';
import About from './Components/About'
import Contact from './Components/Contact'
import Nav from './Components/Nav'
import Rooms from './Components/Rooms'
import RoomDetail from './Components/RoomDetail'
import Restaurant from './Components/Restaurant'
import Landing from './Components/Landing'

import room1 from './images/room1.jpg'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = [

      {
        id: "dvokrevetna1",
        photo: room1,
        img1: room1,
        img2: room1,
        img3: room1,
        name: "dvokrevetna",
        price: "50KM",
        desc: "Hotel raspolaže s 46 soba od kojih su 2 prostrana apartmana s jacuzzi kadama i jednom saunom,nekoliko četverokrevetnih i trokrevetnih,a ostale su jednokrevetne ili dvokrevetne.Sve sobe su lijepo dizajnirane i odlično opremljene.Svaka soba ima klimu,fen,tuš i toilette,telefon,wireless internet,te LCD ili plazmu sa satelitskim programom.",
        wifi: true,
        ac: true,
        roomSize: 24,
        smoking: "Yes",
        roomService: "Yes",
        wakeUpCall: "Yes"
      },
      {
        id: "dvokrevetna25",
        photo: room1,
        img1: room1,
        img2: room1,
        img3: room1,
        name: "dvokrevetna",
        price: "50KM",
        desc: "Hotel raspolaže s 46 soba od kojih su 2 prostrana apartmana s jacuzzi kadama i jednom saunom,nekoliko četverokrevetnih i trokrevetnih,a ostale su jednokrevetne ili dvokrevetne.Sve sobe su lijepo dizajnirane i odlično opremljene.Svaka soba ima klimu,fen,tuš i toilette,telefon,wireless internet,te LCD ili plazmu sa satelitskim programom.",
        wifi: true,
        ac: true,
        tv: true,
        phone: true,
        satellite: true
      },
      {
        id: "dvokrevetna67",
        photo: room1,
        img1: room1,
        img2: room1,
        img3: room1,
        name: "dvokrevetna",
        price: "50KM",
        desc: "asdklasd asdklasd klasd asdklas dklasd klasdlasd asdkljasd asdjklas dsadjklasd",
        wifi: true,
        ac: true
      },
      {
        id: "dvokrevetna867",
        photo: room1,
        img1: room1,
        img2: room1,
        img3: room1,
        name: "dvokrevetna",
        price: "50KM",
        desc: "asdklasd asdklasd klasd asdklas dklasd klasdlasd asdkljasd asdjklas dsadjklasd",
        wifi: true,
        ac: true
      },

    ]
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="">
            <Nav />
            <Route path={["/", "/about"]} exact component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/rooms" exact render={props => (
              <Rooms {...props} states={this.state} />
            )} />
            <Route path="/restaurant" exact render={props => (
              <Restaurant {...props} states={this.state} />
            )} />
            <Route path="/rooms/:id" render={props => (
              <RoomDetail {...props} rooms={this.state} />
            )} />

          </header>
        </div>
      </Router >
    );

  }
}

export default App;
