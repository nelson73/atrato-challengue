import { FormOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import AppButton from "components/atoms/AppButton";
import { UserPageContext } from "context/UserPageContext";
import { useContext, useState } from "react";
import { Else, If, Then, When } from "react-if";
import styled from "styled-components";
import { colors } from "utils/colors";

const { gray, primaryMarineBlue } = colors;

const InputEditable = styled(Input)`
  border: ${({ allowEdition = false }) => (allowEdition ? undefined : "none")};
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

export const UserForm = () => {
  const { user, onSubmit, isAdd, loading } = useContext(UserPageContext);
  const [allowEdition, setAllowEdition] = useState(isAdd);
  const titleMainButton = isAdd ? "Crear" : "Editar";

  const toogleEdition = (event) => {
    event.preventDefault();
    setAllowEdition(!allowEdition);
  };

  const initialValues = { ...user, ...user?.card } ?? {};
  if (!user && !isAdd) {
    return null;
  }

  return (
    <Form onFinish={onSubmit} initialValues={initialValues}>
      <Row gutter={[10, 10]} justify="space-between">
        <Col xs={24} lg={12}>
          <FormItem
            name="email"
            label="EMAIL"
            rules={
              allowEdition
                ? [
                    {
                      required: true,
                      message: "Email es requerido",
                    },
                  ]
                : []
            }
          >
            <InputEditable
              allowEdition={allowEdition}
              disabled={!allowEdition}
            />
          </FormItem>
          <FormItem
            name="phone"
            label="TELÉFONO"
            rules={
              allowEdition
                ? [
                    {
                      required: true,
                      message: "Teléfono es requerido",
                    },
                  ]
                : []
            }
          >
            <InputEditable
              allowEdition={allowEdition}
              disabled={!allowEdition}
            />
          </FormItem>
          <FormItem
            name="birthdate"
            label="CUMPLEAÑOS"
            rules={
              allowEdition
                ? [
                    {
                      required: true,
                      message: "Cumpleaños es requerido",
                    },
                  ]
                : []
            }
          >
            <InputEditable
              allowEdition={allowEdition}
              disabled={!allowEdition}
            />
          </FormItem>
          <FormItem name="analyst_name" label="ANALISTA">
            <InputEditable
              allowEdition={allowEdition}
              disabled={!allowEdition}
            />
          </FormItem>
        </Col>
        <Col
          xs={0}
          lg={10}
          style={{ borderLeft: "2px solid #B3B6B7", paddingLeft: "2em" }}
        >
          <FormItem
            name="full_name"
            label="FULL NAME"
            rules={
              allowEdition
                ? [
                    {
                      required: true,
                      message: "Nombre es requerido",
                    },
                  ]
                : []
            }
          >
            <InputEditable
              allowEdition={allowEdition}
              disabled={!allowEdition}
            />
          </FormItem>
          <FormItem
            name="card_number"
            label="CARD NUMBER"
            rules={
              allowEdition
                ? [
                    {
                      required: true,
                      message: "Tarjeta es requerido",
                    },
                  ]
                : []
            }
          >
            <InputEditable
              allowEdition={allowEdition}
              disabled={!allowEdition}
            />
          </FormItem>
          <Row justify="space-between">
            <Col xs={4}>
              <FormItem
                name="cvv"
                label="CVV"
                rules={
                  allowEdition
                    ? [
                        {
                          required: true,
                          message: "CVV es requerido",
                        },
                      ]
                    : []
                }
              >
                <InputEditable
                  allowEdition={allowEdition}
                  disabled={!allowEdition}
                />
              </FormItem>
            </Col>
            <Col xs={4}>
              <FormItem
                name="pin"
                label="PIN"
                rules={
                  allowEdition
                    ? [
                        {
                          required: true,
                          message: "PIN es requerido",
                        },
                      ]
                    : []
                }
              >
                <InputEditable
                  allowEdition={allowEdition}
                  disabled={!allowEdition}
                />
              </FormItem>
            </Col>
            <Col xs={4}>
              <FormItem
                name="experate_date"
                label="EXP"
                rules={
                  allowEdition
                    ? [
                        {
                          required: true,
                          message: "EXP es requerido",
                        },
                      ]
                    : []
                }
              >
                <InputEditable
                  allowEdition={allowEdition}
                  disabled={!allowEdition}
                />
              </FormItem>
            </Col>
          </Row>
        </Col>
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
                    icon={<FormOutlined style={{ color: primaryMarineBlue }} />}
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
