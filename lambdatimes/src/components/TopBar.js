import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const ToppBar = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
    
    @media (min-width: 1280px) {
        width: 1280px;
    }
`;

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
    
    @media (min-width: 1280px) {
        width: 1280px;
    }
`;

const ContainerLeft = styled.section`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
`;

const ContainerLeftSpan = styled.section`
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
`;

const ContainerCenter = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
`;

const ContainerCenterSpan = styled.section`
    cursor: pointer;
    margin-right: 5%;
    
    :last-child {
        margin-right: 0;
    }
    
    :hover {
     text-decoration: underline;
    }
`;

const ContainerRight = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
    
    span {
        cursor: pointer;
    }
`;

const TopBar = () => {
    return (
        <ToppBar>
            <Container>
                <ContainerLeft>
                    <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
                </ContainerLeft>
                <ContainerCenter>
                    <ContainerCenterSpan>GENERAL</ContainerCenterSpan><ContainerCenterSpan>BROWNBAG</ContainerCenterSpan><ContainerCenterSpan>RANDOM</ContainerCenterSpan><ContainerCenterSpan>MUSIC</ContainerCenterSpan><ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
                </ContainerCenter>
                <ContainerRight>
                    <span>LOG IN</span>
                </ContainerRight>
            </Container>
        </ToppBar>
    );
};

export default TopBar;