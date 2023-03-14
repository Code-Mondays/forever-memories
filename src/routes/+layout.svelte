<script>
  import "../app.css";
</script>

<div style="background: yellow">
  <slot />
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
