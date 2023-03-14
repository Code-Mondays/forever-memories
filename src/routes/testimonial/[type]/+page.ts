import { error } from "@sveltejs/kit";

type LoadFnTypes = {
  params: {
    type: "video" | "photo" | "text";
  };
};

/** @type {import('./$types').PageLoad} */
export function load({ params }: LoadFnTypes) {
  switch (params.type) {
    case "video":
      return {
        title: "Video",
        description: "Utilize a camera do seu celular para gravar um video.",
      };

    case "photo":
      return {
        title: "Foto",
        description:
          "Utilize a camera do seu celular para registrar tirar uma foto.",
      };

    case "text":
      return {
        title: "Mensagem",
        description: "Preencha os campos abaixo para deixar uma mensagem.",
      };

    default:
      break;
  }

  throw error(404, "Not found");
}

