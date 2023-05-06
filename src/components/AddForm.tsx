import { useForm } from "react-hook-form";
import {FC} from "react";
const AddForm:FC<{finish: () => void}> = ({finish}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    fetch('https://645644b92e41ccf16918360b.mockapi.io/profile', { method: 'POST', headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },  body:  new URLSearchParams(data)})
      .then(res => res.json()).then(res => {
      finish();
    })
  };

  return <div >
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{color: 'black', display: 'flex', flexDirection: 'column', gap: 20}}>
        Fullname:
        <input {...register("name")} />
        Age:
        <input {...register("age")} />
        Class:
        <input {...register("classValue")} />
        Slogan:
        <input {...register("slogan")} />
        <input type="submit" />
      </div>

    </form>
  </div>
}

export default AddForm;