import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done } : ContainerProps) => (
    `
    display: flex;
    background: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        height: 25px;
        width: 25px;
        margin-right: 10px;
    }

    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'}
    }
`
));