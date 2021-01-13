class Visible extends React.Component {
    //visibility toogle
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: true,
            buttonText: ['Hide details', 'Show Details']
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
        console.log(this.state.visibility)
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? this.state.buttonText[0] : this.state.buttonText[1]}
                </button>
                <p>{this.state.visibility ? 'Hey. These are some details you can now see!' : ''}</p>
                { this.state.visibility && (
                    <div>
                        <p>Hey. Here are some details you can now see on different example this is lighter no elements are created!</p>
                    </div>
                )}
            </div>
        )
    }
}


ReactDOM.render(<Visible />, document.getElementById('app'))


// *****************************************************
// **The example below show how it would be Using JSX **
// *****************************************************
// const app = {
//     showTextOn: false,
//     buttonText:['Show details','Hide Details']
// }
// const hideDetails = () => {
//     app.showTextOn = !app.showTextOn
//     renderApp()
// }



// const appRoot = document.getElementById('app')

// const renderApp = () => {

//     const template = (

        // <div>
        //     <h1>Visibility Toggle</h1>

        //     <button onClick={hideDetails}>
        //         {!app.showTextOn ? app.buttonText[0] : app.buttonText[1]}
        //     </button>
        //     <p>{app.showTextOn ? 'Hey. These are some details you can now see!' : ''}</p>

        //     {app.showTextOn && (
        //         <div>
        //             <p> Hey. Here are some details you can now see on different example this is lighter no elements are created!</p>
        //         </div>
        //     )}
        // </div>
//     )


//     ReactDOM.render(template, appRoot)//renders the template to screen
// }

// renderApp()