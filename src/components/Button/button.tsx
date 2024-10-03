import { useEffect, useState } from "react";
import styles from "./button.module.css";

interface ButtonProps {
    type: 'primary' | 'secondary';
    width?: number
    height?: number
    text: string;
    className?: string;
    action?: (event: unknown) => unknown
}

const Button = ({ text, width, height, action, type, className }: ButtonProps) => {
    const [color, setColor] = useState('')

    const handleClick = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        if (action) {
            action(event)
        }
    }

    useEffect(() => {
        switch (type) {
            case 'primary':
                setColor('#69B99D')
                break;
            case 'secondary':
                setColor('white')
        }
    }, [type])

    return (
        <>
            <button className={`${className} ${styles.styledButton}`} style={{ width: width, height: height, backgroundColor: color}} onClick={handleClick}>
                <p className="font-bold" style={{color: type == 'primary' ? 'white' : '#69B99D'}}>{text}</p>
            </button>
        </>
    )
}

export default Button;