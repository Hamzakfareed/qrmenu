import { Card, CardContent } from "@mui/material";
import React from "react";


const ContainerComponent = ({ items }) => {
    return (
        <Card>
            <CardContent>
                {items}
            </CardContent>
        </Card>
    );
}

export default ContainerComponent;