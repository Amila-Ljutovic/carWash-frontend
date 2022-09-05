import React from "react";

//styled 
import { CardWrapper, Title, Value, HighlightBox } from "./styledDashboardCard"

function DashboardCard({title, value, color, icon}) {
    return ( 
        <CardWrapper>
            <Title>
                {title}
            </Title>
            <Value>
                {value}
            </Value>
            <HighlightBox color={color}>
                {icon}
            </HighlightBox>
        </CardWrapper> 
    );
}

export default DashboardCard;