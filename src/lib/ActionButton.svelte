<script lang="ts">
  export let href: string;
</script>

<a
  {href}
  class="flex justify-center items-center w-full p-10 bg-orange-300 rounded-md"
>
  <span class="text-center block uppercase font-bold text-lg">
    <slot />
  </span>
</a>
