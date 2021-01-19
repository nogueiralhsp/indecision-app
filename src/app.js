import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))


class OldSyntax {
    constructor () {
        this.name = 'Mike'
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting(){
        return `Hello, my name is ${this.name}`
    }
}

const oldSyntax = new OldSyntax()
const getGreeting = oldSyntax.getGreeting

console.log(getGreeting());



//---------------------------

class NewSyntax {
    name='Jan'
}
const newSyntax = new NewSyntax()
console.log(newSyntax);