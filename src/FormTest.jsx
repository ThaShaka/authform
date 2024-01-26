import {useForm} from "react-hook-form";
import axios from "axios";


function FormTest() {
    const {register, handleSubmit, setError, formState : {errors, isSubmitting}} = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/register", data)
            console.log(response)
        } catch (error) {
            setError("root", {
                message: "THis emasdmsa",
            })
        }

    }

    return (
        <>
            <form  method={"post"} onSubmit={handleSubmit(onSubmit)}>
                <input {...register("user",
                    {required: "Username is required",
                            minLength: 3
                    })}
                       type="text"
                       placeholder={"Username"}/>
                {errors.username && <div>{errors.username.message}</div>}
                <input {...register("pwd",
                    {required: "Password is required", minLength : 8})}
                       type="password"
                       placeholder={"Password"}/>
                {errors.password && <div>{errors.password.message}</div>}
                <button disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
                {errors.root && <div>{errors.root.message}</div>}
            </form>
        </>
    );
}

export default FormTest;