import React, { useState } from "react";
import { Form, Input, Button, Select, Checkbox } from "antd";

const FormDisabledDemo = () => {
  const options = ["Air", "Express", "Ocean"];
  const [form] = Form.useForm();
  const clearField = () => {
    setState((prev) => ({
      ...prev,
      foWidgetCalc: "",
      chargeableWeightCalculator: "",
      freightosWidget: "",
      WidgetType: ""
    }));
    setSelectOption("Freight Estimator");
    setCheckBoxValue(["Air", "Express"]);
  };
  const [state, setState] = useState({
    foWidgetCalc: "",
    chargeableWeightCalculator: "",
    freightosWidget: "",
    WidgetType: ""
  });
  const [checkBoxValue, setCheckBoxValue] = useState(["Air", "Express"]);
  const [selectOption, setSelectOption] = useState("Freight Estimator");
  const onChange = (checkedValues) => {
    setCheckBoxValue(checkedValues);
  };

  const changeStateHandler = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const changeSelecthander = (value) => {
    setSelectOption(value);
  };
  const submitForm = () => {
    const finalForm = { ...state, selectOption, checkBoxValue };
    alert(JSON.stringify(finalForm));
    clearField();
    window.location.reload(false);

    console.log("submited", finalForm);
    // alert(JSON.stringify(finalForm));
  };

  const finish = (value) => {
    console.log("val", value);
    form.resetFields();
  };
  return (
    <>
      <Form
        labelCol={{
          span: 4
        }}
        wrapperCol={{
          span: 14
        }}
        layout="horizontal"
        form={form}
        onFinish={finish}
      >
        <Form.Item label="NodeId">
          <Input name="foWidgetCalc" onChange={changeStateHandler} />
        </Form.Item>
        <Form.Item label="Title">
          <Input
            name="chargeableWeightCalculator"
            onChange={changeStateHandler}
          />
        </Form.Item>
        <Form.Item label="ScriptID">
          <Input name="freightosWidget" onChange={changeStateHandler} />
        </Form.Item>
        <Form.Item label="WidgetType">
          <Select
            defaultValue="Freight Estimator"
            onChange={changeSelecthander}
            options={[
              {
                value: "Freight Estimator",
                label: "Freight Estimator"
              },
              {
                value: "Co2",
                label: "Co2"
              },
              {
                value: "ChargeableWeight Calculator",
                label: "ChargeableWeight Calculator"
              },
              {
                value: "FreightClass Calculator",
                label: "FreightClass Calculator"
              }
            ]}
          />
        </Form.Item>
        <Form.Item label="Shipping Mode">
          <Checkbox.Group
            options={options}
            defaultValue={["Air", "Express"]}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={submitForm}>Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;
