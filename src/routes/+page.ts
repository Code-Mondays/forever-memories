import { error } from "@sveltejs/kit";

import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { LOCALSTORAGE_USERNAME } from "../constants";

/** @type {import('./$types').PageLoad} */
export function load() {
  if (!browser) return;

  const isLogged = window.localStorage.getItem(LOCALSTORAGE_USERNAME);

  if (!isLogged) {
    goto("/login");
    return;
  }

  return null;
}

