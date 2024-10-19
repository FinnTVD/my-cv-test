"use client";

import * as Yup from "yup";

export const OverviewSchema = Yup.object({
  nickName: Yup.object({
    value: Yup.string().optional(),
    type: Yup.string(),
    hidden: Yup.boolean(),
    color: Yup.string(),
  }),
  banner: Yup.object({
    title: Yup.object({
      value: Yup.string().optional(),
      type: Yup.string(),
      hidden: Yup.boolean(),
      color: Yup.string(),
    }),
    position: Yup.object({
      value: Yup.string().optional(),
      type: Yup.string(),
      hidden: Yup.boolean(),
      color: Yup.string(),
    }),
  }),
  myProjects: Yup.object({
    description: Yup.object({
      value: Yup.string().optional(),
      type: Yup.string(),
      hidden: Yup.boolean(),
      color: Yup.string(),
    }),
    projects: Yup.object({
      value: Yup.array(
        Yup.object({
          name: Yup.object({
            value: Yup.string().optional(),
            type: Yup.string(),
            hidden: Yup.boolean(),
            color: Yup.string(),
          }),
          technologies: Yup.object({
            value: Yup.array(
              Yup.object({
                value: Yup.string().optional(), // Giá trị của technologies là string
                type: Yup.string(),
                hidden: Yup.boolean(),
                color: Yup.string(),
              })
            ),
            type: Yup.string(),
            hidden: Yup.boolean(),
          }),
          thumbnail: Yup.object({
            value: Yup.string().url().required(), // Thumbnail là URL
            type: Yup.string(),
            hidden: Yup.boolean(),
          }),
          slug: Yup.object({
            value: Yup.string().optional(), // Slug là string
            type: Yup.string(),
            hidden: Yup.boolean(),
            color: Yup.string(),
          }),
        })
      ).required(), // Đây là mảng của dự án, phải được yêu cầu
      type: Yup.string(),
      hidden: Yup.boolean(),
    }),
  }),
});
