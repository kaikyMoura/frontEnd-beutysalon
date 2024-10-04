import { ReactNode, useEffect, useState } from "react";
import styles from "./button.module.css";

interface ButtonProps {
    type: 'primary' | 'secondary';
    width?: number
    height?: number
    text: string
    icon?: ReactNode
    className?: string;
    action?: (event: unknown) => unknown
}

const Button = ({ ...props }: ButtonProps) => {
    const [color, setColor] = useState('')

    const handleClick = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        if (props.action) {
            props.action(event)
        }
    }

    useEffect(() => {
        switch (props.type) {
            case 'primary':
                setColor('#69B99D')
                break;
            case 'secondary':
                setColor('white')
        }
    }, [props.type])

    return (
        <button className={`gap-3 ${props.className} ${styles.styledButton}`} style={{ width: props.width, height: props.height, backgroundColor: color }} onClick={handleClick}>
            {props.icon ?
                <div>{props.icon}</div>
                : null
            }
            <p className="font-bold" style={{ color: props.type == 'primary' ? 'white' : '#69B99D' }}>{props.text}</p>
        </button>
    )
}

export default Button;