import React from 'react'

// //*  Header using Stateless Function Component definition */
const Header = (props) => (
    <div className='header'>
        <div className='container'>
            <h1 className='header__title'>{props.title}</h1>
            {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
        </div>
    </div>
)

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

export default Header