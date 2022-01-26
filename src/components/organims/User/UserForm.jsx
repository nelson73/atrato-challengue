import { FormOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import AppButton from "components/atoms/AppButton";
import { AppIcon } from "components/atoms/AppIcon";
import { UserPageContext } from "context/UserPageContext";
import moment from "moment";
import { useContext, useState } from "react";
import { Else, If, Then, When } from "react-if";
import styled from "styled-components";
import { colors } from "utils/colors";
import { regExEmail, regExPhone } from "utils/regEx";

const { gray } = colors;

const InputEditable = styled(Input)`
  border: ${({ allowEdition = false }) => (allowEdition ? undefined : "none")};
`;

const DatePickerEditable = styled(DatePicker)`
  border: ${({ allowEdition = false }) => (allowEdition ? undefined : "none")};
  width: 100%;
`;
const FormItem = styled(Form.Item)`
  .ant-form-item-label {
    text-align: initial;
    width: 100%;

    label {
      color: ${gray};
    }
  }
`;

const ColLeftGray = styled(Col)`
  border-left: 2px solid ${gray};
  padding-left: 2em;

  @media (max-width: 991px) {
    border-left: none;
    padding-left: 0;
  }
`;

export const UserForm = () => {
  const { user, onSubmit, isAdd, loading } = useContext(UserPageContext);
  const [allowEdition, setAllowEdition] = useState(isAdd);
  const titleMainButton = isAdd ? "Crear" : "Editar";

  const toogleEdition = (event) => {
    event.preventDefault();
    setAllowEdition(!allowEdition);
  };
  const birthdate = user?.birthdate ? moment(user.birthdate) : null;
  const initialValues = { ...user, birthdate, ...user?.card } ?? {};

  if (!user && !isAdd) {
    return null;
  }

  const rulesEmail = allowEdition
    ? [
        {
          pattern: regExEmail,
          message: "Formato incorrecto",
        },
        {
          required: true,
          message: "Email es requerido",
        },
      ]
    : [];
  const rulesPhone = allowEdition
    ? [
        {
          pattern: regExPhone,
          message: "Formato incorrecto",
        },
        {
          required: true,
          message: "Teléfono es requerido",
        },
      ]
    : [];
  const rulesBirthdate = allowEdition
    ? [
        {
          required: true,
          message: "Cumpleaños es requerido",
        },
      ]
    : [];
  const rulesFullName = allowEdition
    ? [
        {
          required: true,
          message: "Nombre es requerido",
        },
      ]
    : [];
  const rulesCardNumber = allowEdition
    ? [
        {
          required: true,
          message: "Tarjeta es requerido",
        },
      ]
    : [];
  const rulesCvc = allowEdition
    ? [
        {
          required: true,
          message: "CVV es requerido",
        },
      ]
    : [];
  const rulesPin = allowEdition
    ? [
        {
          required: true,
          message: "PIN es requerido",
        },
      ]
    : [];
  const rulesExpirationDate = allowEdition
    ? [
        {
          required: true,
          message: "EXP es requerido",
        },
      ]
    : [];
  return (
    <Form onFinish={onSubmit} initialValues={initialValues}>
      <Row gutter={[0, 10]} justify="space-between">
        <Col xs={24} lg={12}>
          <FormItem name="email" label="EMAIL" rules={rulesEmail}>
            <InputEditable
              allowEdition={allowEdition}
              disabled={!allowEdition}
            />
          </FormItem>
          <FormItem name="phone" label="TELÉFONO" rules={rulesPhone}>
            <InputEditable
              allowEdition={allowEdition}
              disabled={!allowEdition}
            />
          </FormItem>
          <FormItem name="birthdate" label="CUMPLEAÑOS" rules={rulesBirthdate}>
            <DatePickerEditable
              allowEdition={allowEdition}
              disabled={!allowEdition}
              placeholder=""
            />
          </FormItem>
          <FormItem name="analyst_name" label="ANALISTA">
            <InputEditable
              allowEdition={allowEdition}
              disabled={!allowEdition}
            />
          </FormItem>
        </Col>
        <ColLeftGray xs={24} lg={10}>
          <FormItem name="full_name" label="FULL NAME" rules={rulesFullName}>
            <InputEditable
              allowEdition={allowEdition}
              disabled={!allowEdition}
            />
          </FormItem>
          <FormItem
            name="card_number"
            label="CARD NUMBER"
            rules={rulesCardNumber}
          >
            <InputEditable
              allowEdition={allowEdition}
              disabled={!allowEdition}
            />
          </FormItem>
          <Row justify="space-between">
            <Col xs={4}>
              <FormItem name="cvv" label="CVV" rules={rulesCvc}>
                <InputEditable
                  allowEdition={allowEdition}
                  disabled={!allowEdition}
                />
              </FormItem>
            </Col>
            <Col xs={4}>
              <FormItem name="pin" label="PIN" rules={rulesPin}>
                <InputEditable
                  allowEdition={allowEdition}
                  disabled={!allowEdition}
                />
              </FormItem>
            </Col>
            <Col xs={4}>
              <FormItem
                name="expiration_date"
                label="EXP"
                rules={rulesExpirationDate}
              >
                <InputEditable
                  allowEdition={allowEdition}
                  disabled={!allowEdition}
                />
              </FormItem>
            </Col>
          </Row>
        </ColLeftGray>
        <Col xs={24}>
          <Row justify="end" gutter={8}>
            <If condition={allowEdition}>
              <Then>
                <When condition={!isAdd}>
                  <Col>
                    <AppButton isPrimary={false} onClick={toogleEdition}>
                      Cancelar
                    </AppButton>
                  </Col>
                </When>
                <Col>
                  <AppButton loading={loading} htmlType="submit">
                    {titleMainButton}
                  </AppButton>
                </Col>
              </Then>
              <Else>
                <Col>
                  <Button
                    type="link"
                    icon={<AppIcon Icon={FormOutlined} />}
                    onClick={toogleEdition}
                  />
                </Col>
              </Else>
            </If>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};
