import styled from 'styled-components';

const Switch = styled.label`
    .switch {
        position: relative;
        display: inline-block;
        width: 90px;
        height: 40px;
    }

    .switch input {
        display: none;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${props => props.theme.colors.pink};
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 32px;
        width: 32px;
        left: 4px;
        /* right: 50px; */
        bottom: 4px;
        background-color: ${props => props.theme.colors.white};
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: ${props => props.theme.colors.malibu};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(50px);
        -ms-transform: translateX(50px);
        transform: translateX(50px);
    }
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;

export default Switch;
