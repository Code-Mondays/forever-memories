<script>
  import ActionButton from "$lib/ActionButton.svelte";
</script>

<div class="flex items-center flex-col justify-center mt-12">
  <p class="mb-4">Envie um depoimento através dos botões abaixo.</p>

  <ul class="w-full">
    <li class="mb-4">
      <ActionButton href="/testimonial/video">Video</ActionButton>
    </li>
    <li class="mb-4">
      <ActionButton href="/testimonial/photo">Foto</ActionButton>
    </li>
    <li class="mb-4">
      <ActionButton href="/testimonial/text">Mensagem</ActionButton>
    </li>
  </ul>
</div>
