import React from "react";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <a href={this.props.github}>
            <li> Github </li>
          </a>
          <a href={this.props.linkedin}>
            <li> Linkedin </li>
          </a>
        </ul>
      </div>
    );
  }
}

// export default class Nav extends Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           <a href={this.props.github}>
//             <li> Github </li>
//           </a>
//           <a href={this.props.linkedin}>
//             <li> Linkedin </li>
//           </a>
//         </ul>
//       </div>
//     );
//   }
// }
