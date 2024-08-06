"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface CredentialsFormProps {
  formType: string;
}

const FormSchema = z.object({
  email: z.string().email().min(4, {
    message: "Email must be at least 4 character",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 character",
  }),
});

const CredentialsForm = ({ formType }: CredentialsFormProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = handleSubmit((values) => {
    console.log({ values });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-4">
          <FormField
            name="email"
            control={control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="password"
            control={control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <Button type="submit" className="min-w-full capitalize">
          {formType}
        </Button>
      </form>
    </Form>
  );
};

export default CredentialsForm;
