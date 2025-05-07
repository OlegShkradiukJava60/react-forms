import React from 'react'
import Employee from '../../model/Employee';
import './EmployeeForm.css'
import { useForm } from 'react-hook-form';
interface Props {
    submitter: (empl: Employee) => void;
}
const EmployeeForm: React.FC<Props> = ({submitter}) => {
   const {register, formState, handleSubmit}  = useForm<Employee>();

  return <form onSubmit={handleSubmit(data => submitter(data))}>
       <input {...register("name",{required:true, minLength: 3, maxLength: 10})} type='text' placeholder='Enter name'/>
       { formState.errors?.name?.type === 'required' && <p className="error">Field name must be filled</p>}
       { formState.errors?.name?.type === 'minLength' && <p className="error">name must have at least 3 symbols</p>}
       <input type="number" {...register("salary", {required:true, min: 5000, max: 50000})} placeholder='Enter salary'/>
       {/* FIXME: add validation & messages like above*/}
       <select {...register("department", {required:true})}>
            <option value="">--Select Department--</option>
            <option value="Development">Development</option>
            <option value="QA">QA</option>
            <option value="Management">Management</option>
       </select>
       {/* FIXME: add validation & messages like above*/}
       <div>
         <button type="submit">Submit</button>
         <button type="reset">Reset</button>
       </div>
  </form>
}

export default EmployeeForm