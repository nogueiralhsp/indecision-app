import React from 'react'

// //*  Action using Stateless Function Component definition */
const Action = (props) => (
    <div>
        <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What should I do?
            </button>
    </div>
)
// //*  Action using normal Class State Component definition */
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         )
//     }
// }

export default Action