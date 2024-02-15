"use client";

import styles from "@/app/ui/styles/login.module.css";
import { useFormState } from "react-dom";
import Button from  '../ui/components/button'
import Input from '../ui/components/input'

const LoginPage = () => {
    const [state, formAction] = useFormState(undefined, undefined);
    return (
        <div className={styles.container}>
            <form action={formAction} className={styles.form}>
                <h1>Login</h1>
                <Input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    id="username"
                />
                
                <Input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    id="password"
                />
                
                <Button
                    href=""
                    type="button"
                    className="btn btn-primary btn-lg"
                    title="Login"
                />
                {state && state}
            </form>
        </div>
    );
};

export default LoginPage;