import React from 'react'
import Header from './Header'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }

    handleClearOption = () => {
        this.setState(() => ({ selectedOption: '' }))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        //alert(option)
        this.setState(() => ({ selectedOption: option }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Value must be valid!'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
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

    render() {
        const title = 'Indecision App'
        const subtitle = 'Put your life in the hands of a computer'
        const options = 'Here goes your options:'
        return (
            <div>
                <Header
                    subtitle={subtitle}
                />
                <div className='container'>
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

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearOption={this.handleClearOption}
                />
            </div>
        )
    }
}
export default IndecisionApp