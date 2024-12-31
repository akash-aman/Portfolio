'use client';
import {useEffect} from 'react'
import mermaid from 'mermaid'

const Mermaid = ({isMermaid}) => {

    useEffect(() => {
        if (isMermaid) {
            mermaid.initialize({ startOnLoad: true });
            mermaid.contentLoaded();
        }
    }, [isMermaid])

  return null
}

export default Mermaid