<script lang="ts">
  type DataType = {
    title: string;
    description?: string;
  };

  export let data: DataType;
</script>

<div>
  <h1 class="text-2xl text-center mb-4">
    Deixe um momento registrado no formato de: {data.title}
  </h1>
  <p class="text-sm text-center">{data.description}</p>
</div>
