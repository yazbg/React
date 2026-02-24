import styled from "styled-components";

const StyledButton = styled.button`
    /* Gradientes llamativos dependiento del prop 'blue' */
    background: ${props => props.blue
        ? "linear-gradient(135deg, #6e8efb, #a777e3)"
        : "linear-gradient(135deg, #ff416c, #ff4b2b)"};
    color: white;
    padding: 12px 28px;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border: none;
    border-radius: 50px; /* Bordes redondeados más pronunciados */
    cursor: pointer;
    box-shadow: 0 4px 15px ${props => props.blue ? "rgba(110, 142, 251, 0.4)" : "rgba(255, 65, 108, 0.4)"};
    transition: all 0.3s ease; /* Transición suave para todos los efectos */
    text-transform: uppercase;
    letter-spacing: 1.5px;
    position: relative;
    overflow: hidden;

    /* Efecto al pasar el mouse (hover) */
    &:hover {
        transform: translateY(-3px); /* Se levanta un poco */
        box-shadow: 0 8px 25px ${props => props.blue ? "rgba(110, 142, 251, 0.6)" : "rgba(255, 65, 108, 0.6)"};
        filter: brightness(1.1); /* Lo hace un poco más brillante */
    }

    /* Efecto al hacer clic (active) */
    &:active {
        transform: translateY(1px); /* Se hunde un poco al hacer clic */
        box-shadow: 0 2px 10px ${props => props.blue ? "rgba(110, 142, 251, 0.3)" : "rgba(255, 65, 108, 0.3)"};
    }
`;

const Button = ({ children, blue }) => {
    return (
        <StyledButton blue={blue}>{children}</StyledButton>
    );
};

export default Button;