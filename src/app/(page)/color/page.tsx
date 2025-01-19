"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  r: string;
  y: string;
};

export default function Page() {
  const [res, setRes] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {



    const pot = 2685 / parseFloat(data.y) - 4.3932;

    const cal = (0.48965 * parseFloat(data.r) + 0.518675) * Math.pow(2.7182818284, pot);
    console.log(cal, pot, data.y, data.r)
    setRes(cal);
  };

  return (
    <div className="min-h-screen bg-background-tertiary">
      {/* 
      <div className='w-full h-[50px] bg-background-primary'></div>
      <div className='w-full h-[50px] bg-background-secondary'></div>
      <div className='w-full h-[50px] bg-background-tertiary'></div>
      <div className='w-full h-[50px] bg-button-primary'></div>
      <div className='w-full h-[50px] bg-button-secondary'></div>
      <div className='w-full h-[50px] bg-text-base'></div>
      <div className='w-full h-[50px] bg-heading-base'></div>
      <div className='w-full h-[50px] bg-card-base'></div>
      <div className='w-full h-[50px] bg-detail-primary'></div>
      <div className='w-full h-[50px] bg-detail-secondary'></div> */}
      <form className="flex text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-6">
          <p>r</p>
          <input
            className="text-black"
            type="text"
            {...register("r", {
              required: "El campo es requerido",
            })}
          />
        </div>
        <div>
          <p>y</p>
          <input
            className="text-black"
            type="text"
            {...register("y", {
              required: "El campo es requerido",
            })}
          />
        </div>
        <div>
        <button
            className="px-4 py-2 rounded-md m-4 bg-button-primary"
            type="submit"
          >
            Calcular
          </button>
        </div>
      </form>

      <div className="w-[200px] bg-background-primary h-[50px] mx-6 rounded-xl text-teal-50 flex justify-center items-center">
        {res}
      </div>
    </div>
  );
}
