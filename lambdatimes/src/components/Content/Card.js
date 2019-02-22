import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardComponent = styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: none;
    flex-direction: column;
    background-color: #fff;
    width: 330px;
    margin-bottom: 16px;
    padding: 24px;
`;

const Headline = styled.div`
    font-size: 25px;
    font-family: Didot, serif;
`;

const Author = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
    
    span {
        padding-left: 10px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
    }
`;

const ImageContainer = styled.div`
    padding-right: 10px;
    border-right: 1px solid lightgrey;
    height: 40px;
    
    img {
        width: 40px;
    }
`;

const Card = ( { card } ) => {
        return (
            <CardComponent>
                <Headline>{ card.headline }</Headline>
                <Author>
                    <ImageContainer>
                        <img src={ card.img } />
                    </ImageContainer>
                    <span>By { card.author }</span>
                </Author>
            </CardComponent>
        );
    }
;

// Make sure to include PropTypes.
Card.ProptTypes = {
    card: PropTypes.shape( {
        headline: PropTypes.string,
        tab: PropTypes.string,
        img: PropTypes.string,
        author: PropTypes.string
    } )
};

export default Card;
