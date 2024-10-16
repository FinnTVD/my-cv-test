"use client";
import * as Yup from "yup";

export const OverviewSchema = Yup.object({
  nickName: Yup.object({
    value: Yup.string(),
    type: Yup.string(),
    hidden: Yup.boolean(),
    color: Yup.string(),
  }),
  banner: Yup.object({
    title: Yup.object({
      value: Yup.string(),
      type: Yup.string(),
      hidden: Yup.boolean(),
      color: Yup.string(),
    }),
    position: Yup.object({
      value: Yup.string(),
      type: Yup.string(),
      hidden: Yup.boolean(),
      color: Yup.string(),
    }),
  }),
  myProjects: Yup.object({
    description: Yup.object({
      value: Yup.string(),
      type: Yup.string(),
      hidden: Yup.boolean(),
      color: Yup.string(),
    }),
    projects: Yup.array(),
  }),
});
