class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)

        this.state = {
            optionComponents: props.optionComponents
        }
    }

    componentDidMount() {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
        this.setState(() => ({optionComponents:options}))
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.optionComponents.length !== this.state.optionComponents.length) {
            const json = JSON.stringify(this.state.optionComponents)
            localStorage.setItem('options',json)
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ optionComponents: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            optionComponents: prevState.optionComponents.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.optionComponents.length)
        const option = this.state.optionComponents[randomNum]
        alert(option)
    }

    handleAddOption(option) {

        if (!option) {
            return 'Value must be valid!'
        } else if (this.state.optionComponents.indexOf(option) > -1) {
            return 'This option already exist'
        }
        this.setState((prevState) => ({ optionComponents: prevState.optionComponents.concat(option) }))
    }
    render() {
        const title = 'Indecision App'
        const subtitle = 'Put your life in the hands of a computer'
        const options = 'Here goes your options:'
        return (
            <div>
                <Header
                    // title={title}
                    subtitle={subtitle}
                />
                <Action
                    hasOptions={this.state.optionComponents.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={options}
                    optionComponents={this.state.optionComponents}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}
IndecisionApp.defaultProps = {
    optionComponents: []//['Fajita','Tomatoes soup','Frango na mostarda','Diet Coke chicken','Pulled pork','Roast chicken wrapped in bacon + potatoes']
}



// //*  Header using Stateless Function Component definition */
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}
Header.defaultProps = {
    title: 'Indecision'
}
// //*  Header using normal Class State Component definition */
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

// //*  Action using Stateless Function Component definition */
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}
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


//*  Options using Stateless Function Component definition */
const Options = (props) => {
    return (
        <div>
            {props.optionComponents.length > 0 && <h3>{props.options}</h3>}
            {
                props.optionComponents.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
            <button
                onClick={props.handleDeleteOptions}
                disabled={!props.optionComponents.length > 0}
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
//                     this.props.optionComponents.map((option) => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         )
//     }
// }

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


class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }))

        { this.props.error && <p>{this.props.error}</p> }

        e.target.elements.option.value = ''
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>

        )
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))