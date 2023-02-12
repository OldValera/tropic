import { useEffect, useState } from 'react'

const useWidowSize = () => {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
        handleResize();
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize;

}

export default useWidowSize