import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as S from "./style";

const CheckBox = ({ isChecked, onChange, label, value }) => {
  const handleChange = (e) => {
    // console.log(e.target.checked);
    onChange && onChange(e);
  };
  return (
    <S.CheckBox>
      <FormControlLabel
        control={<Checkbox value={value} checked={isChecked} onChange={handleChange} color="primary" />}
        label={label}
      />
    </S.CheckBox>
  );
};

export default CheckBox;
