"use client";
import * as Yup from "yup";

export const DemoSchema = Yup.object({
  title: Yup.string().required(),
  description: Yup.string().required(),
  background: Yup.mixed<any>().nullable().required("Cover is required"),
  categories: Yup.array().of(
    Yup.object({
      name: Yup.string().required(),
      icon: Yup.mixed<any>().nullable().required("Cover is required"),
    })
  ),
  list: Yup.array().of(Yup.string()),
});
