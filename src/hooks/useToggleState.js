import { useState } from 'react'

const useToggle = (initialVal = false) => {
    const [state, setState] = useState(initialVal)
    const toggler = () => {
        setState(!state)
    }
    return [state, toggler]
}

export default useToggle