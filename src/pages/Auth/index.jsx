import React from "react";
import { Button, Block } from "components";
import { Form, Icon, Input,  Checkbox } from 'antd';
import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
     
      <Block>
      <div className="auth__block">
        <h2>Войти в аккаунт</h2>
        <p>Please, login in</p>
      </div>
        <Button type="primary" size="large">
          Connect...
        </Button>
      </Block>
    </section>
  );
};

export default Auth;