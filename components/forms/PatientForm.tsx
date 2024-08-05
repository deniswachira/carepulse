"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {Form,} from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phone_input",
    CHECKBOX = "checkbox",
    DATE_PICKER = "date_picker",
    SELECT = "select",
    SKELETON= "skeleton",

}



const PatientForm =()=> {
    const [isLoading, setIsLoading] = useState(false)
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
  return (
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
            <section className="mb-12 space-y-4">
                <h1 className="header">Hi there 👋</h1>
                <p className="text-darxk-700">Schedule your first appointment.</p>
            </section>
             <CustomFormField
             fieldType={FormFieldType.INPUT}
             control={form.control}
             name="name"
             label="Full Name"
             placeholder="Full Name"
             iconSrc="/assets/icons/user.svg"
             iconAlt="user"
             />
              <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="name"
                  label="Email"
                  placeholder="email@email.com"
                  iconSrc="/assets/icons/email.svg"
                  iconAlt="email"
              />
              <CustomFormField
                  fieldType={FormFieldType.PHONE_INPUT}
                  control={form.control}
                  name="phone"
                  label="Phone Number"
                  placeholder="254712345789"
              />
          <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
          </form>
      </Form>
  )
}

export default PatientForm