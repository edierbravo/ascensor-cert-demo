import { 
    Card,
    CardBody,
 } from "@heroui/react";
export const CustomCardBody = ({ children }) => {
    return (
        <Card>
          <CardBody>
            {children}
          </CardBody>
        </Card>
    );   
};
