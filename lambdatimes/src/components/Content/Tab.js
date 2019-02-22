import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TabComponent = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: ${ props => props.active ? "#333" : "#fff" };
    background-color: ${ props => props.active ? "#fff" : "#333" };
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
    border: ${ props => props.active ? "2px solid #333" : "none" };
    
    :hover {
        text-decoration: underline;
    }
`;

const Tab = props => {
    /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
     if they match, the className should be: 'tab active-tab',
     if it is not it should just be 'tab'*/
    
    if( props.selectedTab === props.tab ) {
        return (
            <TabComponent
                active
                onClick={ () => props.selectTabHandler( props.tab ) }
            >
                { props.tab.toUpperCase() }
            </TabComponent>
        );
    }else {
        return (
            <TabComponent
                onClick={ () => props.selectTabHandler( props.tab ) }
            >
                { props.tab.toUpperCase() }
            </TabComponent>
        );
    }
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
    selectTabHandler: PropTypes.func.isRequired,
    selectedTab: PropTypes.string,
    tab: PropTypes.string,
};

export default Tab;
