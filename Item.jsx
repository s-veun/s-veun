import React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MailIcon from "@mui/icons-material/Mail";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const Item = () => {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <div className="">
      <Box>
        <ButtonGroup className="mt-1 mb-1 p-1 right-5 text-gray-100">
          <Button
          className="w-[10px]"
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon className="text-white" fontSize="small" />
          </Button>
          <Button>
            <Badge color="primary" badgeContent={count}>
            </Badge>
          </Button>
          <Button
          className="w-[10px]"
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon className="text-white" fontSize="small" />
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Item;
