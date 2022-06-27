// import React, { Component} from "react"

// class App extends Component{
//     state = {
//         post: {}
//     }
    
//     componentDidMount() {
//       fetch(`http://localhost:3000/user/12`)
//       .then((response) => {
//         return response.json()
//       })
//       .then((result) => {
//         setTimeout(() => {
//           this.setState({post: result.data.userInfos})
//         }, 1500);
        
//         // console.log(result)
//       })
//     }

//     render() {
//         return (
//               <div>
//                   {(this.state.post.firstName) ? this.state.post.firstName : <p>chargement...</p>} 
//                   <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
//               </div>
//           );
//     }
// }

// export default App