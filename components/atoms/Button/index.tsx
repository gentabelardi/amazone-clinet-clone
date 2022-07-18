import React from 'react'
interface IProps {
    title: string
}
function Button(props: IProps) {
    return (
        <button className="text-xs  p-3 py-1.5  bg-gradient-to-t from-yellow-500/90 hover:from-yellow-500 hover:to-orange-300/60  to-orange-300/50 rounded border border-orange-900/50 capitalize">{props.title}</button>
    )
}

export default Button
