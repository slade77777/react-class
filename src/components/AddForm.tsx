import { useForm } from "react-hook-form";
import {FC} from "react";
import axios from "axios";
import {instance} from "../axiosInstance";
const AddForm:FC<{finish: () => void}> = ({finish}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    instance.post('/profile', data)
      .then(res => {
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