import React from "react";
// import "./style.scss";
import { Button, Checkbox, Input, Typography } from "antd";
import { BaseCheckbox, BaseInput, BaseButton } from "../../antd";
import {
  DefaultFormButtonsGroupStyled,
  DefaultFormLineStyled,
  DefaultFormStyled,
} from "../../styled-components/StyledForm";
const { Text } = Typography;
// const FormDemo = () => {
//   return (
//     <div className="form">
//       <div className="form-line">
//         <Text>First Name</Text>
//         <Input />
//       </div>
//       <div className="form-line">
//         <Text>Last Name</Text>
//         <Input />
//       </div>
//       <div className="form-line">
//         <Text>Age</Text>
//         <Input />
//       </div>
//       <div className="form-line checkbox-line">
//         <Text className="label-checkbox">Cool</Text>
//         <Checkbox />
//       </div>
//       <div className="buttons-group">
//         <Button type="primary">Submit</Button>
//         <Button>Cancel</Button>
//       </div>
//     </div>
//   );
// };

const FormDemo = () => {
  return (
    <DefaultFormStyled>
      <DefaultFormLineStyled >
        <BaseInput label="First Name" />
      </DefaultFormLineStyled>
      <DefaultFormLineStyled>
        <BaseInput label="Last Name" />
      </DefaultFormLineStyled>
      <DefaultFormLineStyled>
        <BaseInput label="Age" />
      </DefaultFormLineStyled>
      <DefaultFormLineStyled textAlign="left">
        <BaseCheckbox label="Cool" />
      </DefaultFormLineStyled>
      <DefaultFormButtonsGroupStyled>
        <BaseButton type="primary" text="Submit" />
        <BaseButton text="Cancel" />
      </DefaultFormButtonsGroupStyled>
    </DefaultFormStyled>
  );
};

export default FormDemo;
