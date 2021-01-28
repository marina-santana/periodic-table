import React from 'react';
import Container from '../styles/element';

interface ElementProps {
    number?: string;
    symbol?: string;
    name?: string;
    backgroundColor: string;
    onClick?: () => void;
}

const Element: React.FC<ElementProps> = ({
    number,
    symbol,
    name,
    backgroundColor,
    onClick,
}) => {
    return (
        <Container backgroundColor={backgroundColor} onClick={onClick}>
            {number && <span>{number}</span>}
            {symbol && <p>{symbol}</p>}
            {name && <span>{name}</span>}
        </Container>
    );
};

export default Element;
