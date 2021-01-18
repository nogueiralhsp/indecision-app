import React from 'react'

// //*  Option using Stateless Function Component definition */
const Option = (props) => {
    return (
        <div>
            {
                props.optionText
            }
            <button
                onClick={(event) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    )
}
// //*  Option using normal Class State Component definition */
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {
//                     this.props.optionText
//                 }
//             </div>
//         )
//     }
// }

export default Option