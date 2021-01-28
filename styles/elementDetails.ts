import styled from 'styled-components';

interface PortalProps {
    darkMode: boolean;
}

const Container = styled.div<PortalProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    background: ${props =>
        props.darkMode ? props.theme.colors.mirage : props.theme.colors.white};
    overflow-y: auto;
    border-radius: 10px;
    position: fixed;
    width: 600px;
    max-height: 95vh;
    box-shadow: 0px 4px 4px ${props => props.theme.colors.bgModal};
    font-family: 'Roboto', sans-serif;

    div:first-of-type {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${props =>
            props.darkMode
                ? props.theme.colors.white
                : props.theme.colors.pink};
        width: 100%;
        border-radius: 10px 10px 0 0;
        padding: 20px 0;
        box-sizing: border-box;
        color: ${props =>
            props.darkMode
                ? props.theme.colors.mirage
                : props.theme.colors.mineShaft};
    }

    div:first-of-type p {
        font-size: 2.5em;
        margin: 5px 0;
    }

    div:first-of-type b {
        font-size: 1.5em;
    }

    div:first-of-type span:first-of-type {
        margin-top: 20px;
    }

    div:first-of-type span {
        font-size: 1.2em;
        margin: 10px 0;
    }

    div:first-of-type sub {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 1.5rem;
        cursor: pointer;
    }

    ul {
        padding: 20px 0;
        width: 75%;
        list-style: none;
        color: ${props =>
            props.darkMode
                ? props.theme.colors.white
                : props.theme.colors.grey};
    }

    li + li {
        border-top: 1px solid ${props => props.theme.colors.grey};
    }

    li {
        display: flex;
        justify-content: space-between;
        padding: 10px 0 5px;
    }

    li span:first-of-type {
        font-weight: bold;
    }

    @media (max-width: 650px) {
        width: 85vw;
    }
`;

export default Container;
