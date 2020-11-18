import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Nav = styled.nav`
    border-bottom: 1px solid #ccc;
    background-color: white;
`;

export const List = styled.ul`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: space-evenly;
`;

export const Item = styled.li`
    padding: 0.6rem;
    margin: 0.4rem;

    &:hover {
        background-color: #f1f1f1;
        border-radius: 2rem;
    }

    a {
        font-weight: bold;
        text-decoration: none;
        color: #222;
    }
`;
