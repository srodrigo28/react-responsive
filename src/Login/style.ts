import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: darkviolet;
`;
export const ContainerLogin = styled.div`
    height: 50vh;
    width: 18em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    > h2{ margin: 20px; }

    border-radius: 1em;
    background-color: #fff;
`;
export const InputLogin = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
  
    margin: 5px;

    > label{ font-weight: bold; }
    > input, button{
        padding: 12px;
        border: none;
        outline: none;
        font-weight: bold;
        border-radius: 5px;
        background-color: bisque;
    }
    button{
        margin-bottom: 8px;
        cursor: pointer;
    }
`;