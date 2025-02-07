import React from "react";
import { useForm } from "react-hook-form";

function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        alert('Form submitted!');
    };

    return (
        <>
            <h1>!!!WELCOME TO My Portal!!!</h1><br/>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="uname">Username</label><br/>
                <input 
                    type="text" 
                    id="uname" 
                    {...register('uname', { 
                        required: "*Username is required*", 
                        minLength: {
                            value: 3,
                            message: "*First name must be at least 3 characters long"
                        } 
                    })}
                />
                {errors.uname && <p>{errors.uname.message}</p>}
                <br/>
                <label htmlFor="pass">Password</label><br/>
                <input 
                    type="text" 
                    id="pass" 
                    {...register('pass', { 
                        required: "*Password is required*",
                        minLength: {
                            value: 3,
                            message: "*Password must be at least 3 characters long"
                        }
                    })}
                />
                {errors.pass && <p>{errors.pass.message}</p>}
                <br/>
                <button type="submit">SUBMIT</button>
            </form>
        </>
    );
}

export default Home;
