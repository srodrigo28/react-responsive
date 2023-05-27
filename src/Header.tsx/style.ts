import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    padding: 15px;
    display: flex;
    align-content: center;
    justify-content: center;
    @media (max-width: 1400px){
        background-color: yellow;
        color: #fff;
    }
    @media (max-width: 1200px){
        background-color: darkviolet;
        color: #fff;
    }
    @media (max-width: 900px){
        background-color: black;
        color: red;
    }
    @media (max-width: 600px){
        background-color: red;
        color: #4eb3de;
    }
`;
export const BoxImg = styled.div`
    display: flex;
    padding: 10px;
    transition: .5s;
    &:hover{
        border-radius: 50%;
        color: #4bb4ca;
        background-color: #666;
        cursor: pointer;
        animation: entrada 5s;
    }
    @keyframes entrada{
        from { transform: scaleY(1); }
        to { transform: scaleY(1); }
    }
`;
export const Tittle = styled.h1`
    height: 75px;
    width: auto;
    display: flex;
    align-items: center;
`;
export const BoxIcon = styled.div`
    width: 70px;
    padding: 10px;
    transition: .5s;  
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5em;
    &:hover{
        border-radius: 50%;
        color: #4bb4ca;
        background-color: #666;
        cursor: pointer;
        animation: entrada 5s;
    }
`;