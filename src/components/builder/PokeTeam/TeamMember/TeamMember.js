import React, { Component, useState, useEffect, memo } from 'react'
import axios from 'axios'
import Type from '../../../general/Type/Type'
import './TeamMember.css'

const TeamMember = ({ capital, index }) => {
    const [types, setTypes] = useState([])

    const signal = axios.CancelToken.source();
    useEffect(() => {
        const getType = async () => {
            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${index}`
                const pokeTypeData = await axios.get(url, {
                    cancelToken: signal.token
                })
                const getTypes = pokeTypeData.data.types
                setTypes(getTypes)
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Error: ', error.message);
                }
            }
        }
        getType();
        return () => {
            signal.cancel('API Call Aborted');
        }
    }, [index])

    return (
        <div>
            <div className='teamcard' key={capital}>
                <div>
                    <img className='teamImg' alt={capital} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}></img>
                </div>
                <div>
                    <h1>{capital}</h1>
                </div>
            </div>
            <div className='typeList'>
                {types.map(type => (
                    <Type id={index} type={type.type.name} key={type.type.name} font='5px' />
                ))}
            </div>
        </div>
    )

}
export default memo(TeamMember)


// class TeamMember extends Component {
//     signal = axios.CancelToken.source();

//     state = {
//         types: [],
//         isLoading: false
//     }

//     componentDidMount() {
//         this.getType()
//     }

//     componentWillUnmount() {
//         this.signal.cancel('API Call Aborted');
//     }

//     getType = async () => {
//         try {
//             this.setState({ isLoading: true })
//             const url = `https://pokeapi.co/api/v2/pokemon/${this.props.index}`
//             const pokeTypeData = await axios.get(url, {
//                 cancelToken: this.signal.token
//             })
//             const getTypes = pokeTypeData.data.types
//             this.setState({
//                 types: [...getTypes],
//                 isLoading: true
//             })
//         } catch (error) {
//             if (axios.isCancel(error)) {
//                 console.log('Error: ', error.message);
//             } else {
//                 this.setState({ isLoading: false });
//             }
//         }

//     }

//     render() {
//         const types = this.state.types.map(type => (
//             <Type id={this.props.index} type={type.type.name} key={type.type.name} font='5px' />
//         ))
//         return (
//             <div>
//                 <div className='teamcard' key={this.props.capital}>
//                     <div>
//                         <img className='teamImg' alt={this.props.capital} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.index}.png`}></img>
//                     </div>
//                     <div>
//                         <h1>{this.props.capital}</h1>
//                     </div>
//                 </div>
//                 <div className='typeList'>
//                     {types}
//                 </div>
//             </div>
//         )
//     }
// }
// export default TeamMember
