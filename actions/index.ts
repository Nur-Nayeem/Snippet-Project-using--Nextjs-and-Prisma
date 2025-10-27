"use server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const newSnippet = async (title: string, code: string) => {
  await prisma.snippet.create({
    data: {
      title,
      code,
    },
  });
  redirect("/");
};

export const updateSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });
  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: {
      id,
    },
  });
  redirect("/");
};
