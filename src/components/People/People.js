// import React, { Component } from "react";

// import Person from "./Person/Person";

// const API = "2a5d7298a94408e98274cd600f658034";

// class People extends Component {
//   state = {
//     topPeople: []
//   };

//   componentDidMount() {
//     fetch(`https://api.themoviedb.org/3/person/popular?api_key=${API}&language=pl-PL&page=1
//          `)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           topPeople: data.results
//         });
//         console.log(this.state.topPeople);
//       });
//   }

//   render() {
//     return <>{/* <Person people={this.state.topPeople} /> */}</>;
//   }
// }

// export default People;
