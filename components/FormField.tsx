import React from 'react'
import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: "text" | "email" | "password" | "file";
}

const FormField = <T extends FieldValues>({control, name, label, type = "text", placeholder}: FormFieldProps<T>) => {
  return (
    <Controller
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel className='label'>{label}</FormLabel>
                <FormControl>
                    <Input placeholder={placeholder}className='input' type={type} {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
  )
}

export default FormField