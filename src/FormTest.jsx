import {useForm} from "react-hook-form";

function FormTest() {
    const {register, handleSubmit, setError, formState : {errors, isSubmitting}} = useForm()

    const onSubmit = async (data) => {
        try {
            await new Promise((resolve)=>setTimeout(resolve, 1000))
            console.log(data)
            throw new Error()
        } catch (err) {
            setError("email", {
                message: "THis emasdmsa",
            })
        }

    }

    return (
        <>
            <form  method={"post"} onSubmit={handleSubmit(onSubmit)}>
                <input {...register("username",
                    {required: "Username is required",
                            minLength: 3
                    })}
                       type="text"
                       placeholder={"Username"}/>
                {errors.username && <div>{errors.username.message}</div>}
                <input {...register("password",
                    {required: "Password is required", minLength : 8})}
                       type="password"
                       placeholder={"Password"}/>
                {errors.password && <div>{errors.password.message}</div>}
                <button disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
            </form>
        </>
    );
}

export default FormTest;