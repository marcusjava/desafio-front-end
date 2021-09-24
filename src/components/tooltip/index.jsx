import React, { useState } from "react";
import { Tooltip as TooltipBS } from "reactstrap";

import { Text } from "./styles/tooltip";

function Tooltip({ text, tooltipText, placement }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div>
      <Text href="#" id={text}>
        {text}
      </Text>
      <TooltipBS
        placement={placement}
        isOpen={open}
        target={text}
        toggle={toggle}
      >
        {tooltipText}
      </TooltipBS>
    </div>
  );
}

export default Tooltip;
