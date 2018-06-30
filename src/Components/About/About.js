// import React, {Component} from 'react';

// export default class About extends Component {
//     constructor(props) {
//     super(props)

//         this.state = {
//             showAbout: false
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState({showAbout: !this.state.showMenu})
//     }

//     render() {
//         let {showAbout} = this.state;
//         let slideCSS = showAbout ? 'slide-about slide-about-position' : 'slide-about';
//         return(
//             <div className={slideCSS}>
//                 <h1>About section</h1>
//             </div>
//         )
//     }
// }