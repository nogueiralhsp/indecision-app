import React from 'react'
import Option from './Option'
//*  Options using Stateless Function Component definition */
const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <h3>Please add an option to get started!</h3>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
            <button
                onClick={props.handleDeleteOptions}
                disabled={!props.options.length > 0}
            >
                Remove All
            </button>
        </div>
    )
}
//*  Options using normal Class State Component definition */
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All </button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         )
//     }
// }

export default Options