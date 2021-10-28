import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookies } from 'react-cookie';
import Auth, { Group } from 'components/Auth';
import Socials from 'components/Auth/Socials';
import Layout from 'Layouts';
import { login } from 'core/services/user';
import { stringify } from 'querystring';

export default function Login() {
  const onCheckbox = () => {
    // v will be true or false
  };

  const [user, setUser] = useState<object>({
    username: '',
    password: '',
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const resp: any = await login(user);
      const cookies = new Cookies();
      const res = resp.data.responseData;
      if (res.accessToken) {
        console.log(`respData?.accessToken`, res.accessToken);
        cookies.set('accessToken', res.accessToken);
        localStorage.setItem('roles', JSON.stringify(res.roles));
      }
      if (res.roles[0] === 'ROLE_ADMIN') {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout title="Login">
      <Auth title="Login" subTitle="Hello! Login with your email">
        <form onSubmit={onSubmit}>
          <InputGroup fullWidth>
            <input
              type="text"
              placeholder="Email Address"
              onChange={(e) =>
                setUser({
                  ...user,
                  username: e.target.value,
                })
              }
            />
          </InputGroup>
          <InputGroup fullWidth>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
            />
          </InputGroup>
          <Group>
            <Checkbox checked onChange={onCheckbox}>
              Remember me
            </Checkbox>
            <Link href="/auth/request-password">
              <a>Forgot Password?</a>
            </Link>
          </Group>
          <Button status="Success" type="submit" shape="SemiRound" fullWidth>
            Login
          </Button>
        </form>
        <Socials />
        <p>
          Don&apos;t have account?{' '}
          <Link href="/auth/register">
            <a>Register</a>
          </Link>
        </p>
      </Auth>
    </Layout>
  );
}
