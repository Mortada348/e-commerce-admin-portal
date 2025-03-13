"use client";

import { useForm, FormProvider, DefaultValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

interface Field {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  description?: string;
  validationRules?: Record<string, any>;
}

interface DataFormProps<T> {
  title: string;
  formFields: Field[];
  onSubmit: (data: T) => void;
  defaultValues?: Partial<T>;
}

const DataForm = <T extends Record<string, any>>({
  title,
  formFields,
  onSubmit,
  defaultValues = {},
}: DataFormProps<T>) => {
  const form = useForm<T>({
    mode: "onBlur",
    defaultValues: defaultValues as DefaultValues<T>,
  });
  const router = useRouter();
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800">
        {title}
      </h1>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {formFields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as any}
              render={({ field: inputField }) => (
                <FormItem>
                  <FormLabel className="text-lg text-gray-700">
                    {field.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      {...inputField}
                      {...form.register(
                        field.name as any,
                        field.validationRules
                      )}
                    />
                  </FormControl>
                  {field.description && (
                    <FormDescription className="text-gray-500">
                      {field.description}
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <div className="flex justify-between">
            <Button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 transition duration-200"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-200"
            >
              {title === "Add Order"
                ? "Add Order"
                : title === "Add Product"
                ? "Add Product"
                : "Edit Profile"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default DataForm;
