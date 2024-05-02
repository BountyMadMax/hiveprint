<script>
  import { storage as StorageFlatbuffer } from '$lib/models/storage';

  let storage = StorageFlatbuffer.Storage.create({ name: 'my test storage' });
</script>

<div class='m-10'>
  <h1 class='font-bold text-3xl my-4'>New Storage</h1>
</div>
