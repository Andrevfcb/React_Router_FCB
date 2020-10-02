import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Team extends Component {
  state = [
    { id: 1,
      number: 1,
      name: "Marc-Andre Ter Stegen",
      position: "goalkeeper",
      image: ""
    },
    { id: 2,
      number: 13,
      name: "Neto",
      position: "goalkeeper",
      image: ""
    },
    { id: 3,
      number: 26,
      name: "Inaki Pena",
      position: "goalkeeper",
      image: ""
    },
    { id: 4,
      number: 3,
      name: "Gerard Pique",
      position: "defender",
      image: ""
    },
    { id: 5,
      number: 15,
      name: "Clement Lenglet",
      position: "defender",
      image: ""
    },
    { id: 6,
      number: "-",
      name: "Samuel Umtiti",
      position: "defender",
      image: ""
    },
    { id: 7,
      number: 30,
      name: "Ronald Araujo",
      position: "defender",
      image: ""
    },
    { id: 8,
      number: "-",
      name: "Jean-Clair Todibo",
      position: "defender",
      image: ""
    },
    { id: 9,
      number: 18,
      name: "Jordi Alba",
      position: "defender",
      image: ""
    },
    { id: 10,
      number: 24,
      name: "Junior Firpo",
      position: "defender",
      image: ""
    },
    { id: 11,
      number: 27,
      name: "Juan Miranda",
      position: "defender",
      image: ""
    },
    { id: 12,
      number: 20,
      name: "Sergi Roberto",
      position: "defender",
      image: ""
    },
    { id: 13,
      number: "-",
      name: "Moussa Wague",
      position: "defender",
      image: ""
    },
    { id: 14,
      number: 8,
      name: "Miralem Pjanić",
      position: "midfielder",
      image: ""
    },
    { id: 15,
      number: 5,
      name: "Sergio Busquets",
      position: "midfielder",
      image: ""
    },
    { id: 16,
      number: 21,
      name: "Frenkie De Jong",
      position: "midfielder",
      image: ""
    },
    { id: 17,
      number: 28,
      name: "Riqui Puig",
      position: "midfielder",
      image: ""
    },
    { id: 18,
      number: 6,
      name: "Carles Alena",
      position: "midfielder",
      image: ""
    },
    { id: 19,
      number: 14,
      name: "Coutinho",
      position: "midfielder",
      image: ""
    },
    { id: 20,
      number: "-",
      name: "Rafinha",
      position: "midfielder",
      image: ""
    },
    { id: 21,
      number: 22,
      name: "Ansu Fati",
      position: "forward",
      image: ""
    },
    { id: 22,
      number: 16,
      name: "Pedri",
      position: "forward",
      image: ""
    },
    { id: 23,
      number: 10,
      name: "Lionel Messi",
      position: "forward",
      image: ""
    },
    { id: 24,
      number: 11,
      name: "Ousmane Dembele",
      position: "forward",
      image: ""
    },
    { id: 25,
      number: 17,
      name: "Francisco Trincao",
      position: "forward",
      image: ""
    },
    { id: 26,
      number: 7,
      name: "Antoine Griezmann",
      position: "forward",
      image: ""
    },
    { id: 27,
      number: 19,
      name: "Martin Braithwaite",
      position: "forward",
      image: ""
    }
  ]


  render() { 
    const goalkeepers = this.state.map(list => {
      if (list.position === "goalkeeper") return (
      <li key={list.id}>
        <Link to={`/team/${list.name}`} >{list.number === "-" ? `(?) ${list.name}` : `${list.number}. ${list.name}` }</Link>
      </li>)})
    const defenders = this.state.map(list => {
      if (list.position === "defender") return (
      <li key={list.id}>
        <Link to={`/team/${list.name}`} >{list.number === "-" ? `(?) ${list.name}` : `${list.number}. ${list.name}` }</Link>
      </li>)})
    const midfielders = this.state.map(list => {
      if (list.position === "midfielder") return (
      <li key={list.id}>
        <Link to={`/team/${list.name}`} >{list.number === "-" ? `(?) ${list.name}` : `${list.number}. ${list.name}` } </Link>
      </li>)})
    const forwards = this.state.map(list => {
      if (list.position === "forward") return (
      <li key={list.id}>
        <Link to={`/team/${list.name}`} >{list.number === "-" ? `(?) ${list.name}` : `${list.number}. ${list.name}` }</Link>
      </li>)})
    return ( 
    <div className="team">

    <h2 className="title">KADRA - SEZON 2020/2021</h2>
    <div className="team_list">
      <p>Bramkarze:</p>
      <ul>
        {goalkeepers}
      </ul>
      <p>Obrońcy:</p>
      <ul>{defenders}</ul>
      <p>Pomocnicy:</p>
      <ul>{midfielders}</ul>
      <p>Napastnicy:</p>
      <ul>{forwards}</ul>
     
    </div>
  </div> 
  );
  }
}

export default Team;