<script lang="ts">
  import { goto } from "$app/navigation";
  import { LOCALSTORAGE_USERNAME } from "../../constants";

  let username = "";
  let password = "";

  const handleLogin = (event: SubmitEvent) => {
    event.preventDefault();
    console.log(username, password);
    window.localStorage.setItem(LOCALSTORAGE_USERNAME, username);

    goto("/");
  };
</script>

<div>
  <form on:submit={handleLogin}>
    <div class="flex flex-col mb-4">
      <label for="username-field">username</label>
      <input
        bind:value={username}
        name="username"
        type="email"
        id="username-field"
        class="border-2"
      />
    </div>

    <div class="flex flex-col mb-4">
      <label for="password-field">password</label>
      <input
        bind:value={password}
        name="password"
        type="password"
        id="password-field"
        class="border-2"
      />
    </div>

    <div class="flex justify-end">
      <button type="submit" class="p-2 border-2">Entrar</button>
    </div>
  </form>
</div>
