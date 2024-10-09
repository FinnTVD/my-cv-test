/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";

import { cn } from "@/lib/utils";
import { mergeDeep, stringToNestedObject } from "@/lib/builder";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  currentData: string;
  currentKey: string;
  setForm: (value: any) => void;
  form: any;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, currentData, currentKey, setForm, form, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const result = stringToNestedObject(currentKey, event.target.value);

      const originalObj = { ...form };
      // Cập nhật object ban đầu
      mergeDeep(form, result.form);
      return setForm(Object.assign({}, originalObj));
    };
    return (
      <textarea
        onChange={handleChange}
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        defaultValue={currentData}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
