class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0 //props.count //uncoment this when you want to work with default number
        }
    }
    componentDidMount() {
        console.log(`componentDidMount ${localStorage.getItem('count')}`);
        try {
            const json = localStorage.getItem('count')
            const count = parseInt(json, 10)
            if (count) {
                this.setState(() => ({ count }))
            }
        } catch (e) {
            // do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const json = JSON.stringify(this.state.count)
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', json)
            console.log(`did update ${prevState.count !== this.state.count}`);
        }

    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    } handleReset() {
        this.setState(() => {
            localStorage.clear()
            return {
                count: 0 //this.props.count //uncoment this to use default values
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
// use this to set up default numbers
// Counter.defaultProps = {
//     count : 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0

// const addOne = () => {
//     ++count
//     renderApp()
// }
// const minusOne = () => {
//     --count
//     renderApp()
// }
// const reset = () => {
//     count = 0
//     renderApp()
// }

// const appRoot = document.getElementById('app')

// const renderApp = () => {
//     const templateTwo = (

//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Rst</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderApp()