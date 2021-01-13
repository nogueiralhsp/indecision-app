console.log('App.js is running!')

//JSX - JavaScript XML
//Javascript Syntax

    //********** Ternary **************/
    // The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
    // a condition followed by a question mark (?), then an expression to execute if the condition is truthy 
    // followed by a colon (:), and finally the expression to execute if the condition is falsy.//ternary condition 
    // <true or false > ? <result if true> : <result if false>
    
    //********** unshown Values **************/
    // nothing shows up if underfined or bolean values are received

const app = {
    title: 'Indecision App',
    subtitle: 'Helping you with decisions',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    e.target.elements.option.value = ''

    if (option) {
        app.options.push(option)
        renderApp()
    }
}
const indecisitionBtn = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}
const removeAll = () => {
    app.options = []
    renderApp()
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length===0}onClick={indecisitionBtn}>Auto Decision</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
               {
                   app.options.map((option) => <li key={option}>{option}</li>)
               }
            </ol> 
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>

        </div>
    )

    ReactDOM.render(template,appRoot)
}

const appRoot = document.getElementById('app')
renderApp()