import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

const Review = ({ checkoutToken }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shrnutí objednávky
      </Typography>
      <List>
        {checkoutToken?.line_items.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product?.name}>
            <ListItemText
              primary={product?.name}
              secondary={`Počet: ${product?.quantity}`}
            />
            <Typography variant="body2">
              {product?.line_total?.formatted_with_code}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Celkem" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {checkoutToken?.subtotal?.formatted_with_code}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
