class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)

        this.state = {
            options: []//props.options //uncoment this to use default values
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption(option) {

        if (!option) {
            return 'Value must be valid!'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
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
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={options}
                    options={this.state.options}
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
// use this when working with default Props values
// IndecisionApp.defaultProps = {
//     options: []//['Fajita','Tomatoes soup','Frango na mostarda','Diet Coke chicken','Pulled pork','Roast chicken wrapped in bacon + potatoes']
// }



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
        if (!error) {
            e.target.elements.option.value = ''
        }

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