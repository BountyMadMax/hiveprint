<script setup>
import { storage as StorageProto } from '~/models/storage';

const columns = [{ label: 'id', key: 'id' }, { label: 'Hostname', key: 'hostname' }];
let rows = ref([]);
const columnsAvailable = Object.keys(StorageProto.Storage.prototype);

useHead({
  title: 'Storages | HivePrint',
});

function loadStorages() {
  $fetch(`http://localhost:3000/storage?page_size=${useRoute().query.page_size ?? 25}`, {
    method: 'GET',
    responseType: 'arrayBuffer',
  }).then((storages) => {
    if (storages instanceof ArrayBuffer) {
      const uint = new Uint8Array(storages, 0, storages.byteLength);
      const verify = StorageProto.StorageList.verify(uint);

      if (!verify) {
        const storageList = StorageProto.StorageList.decode(uint);
        if (storageList instanceof StorageProto.StorageList) {
          rows.value = storageList.storages;
          console.log('storages', storageList.storages);
        } else {
          console.warn('Not instance of StorageList');
        }
      } else {
        console.warn(verify);
      }
    } else {
      console.warn('NOT ArrayBuffer');
    }
  });
}
</script>

<template>
  <h1 class="m-4">Storages</h1>
  <List
    :columns="columns"
    :rows="rows"
    :columnsAvailable="columnsAvailable"
    model-name="storage"
    class="mx-4"
    :onReload="loadStorages"
    :onPageSizeChange="loadStorages"
  />
</template>
