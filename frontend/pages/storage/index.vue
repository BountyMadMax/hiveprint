<script setup>
import { storage as StorageProto } from '~/models/storage';

let rows = ref([]);
// Use slice as a dirty workaround to remove toJSON.
const columns = Object.keys(StorageProto.Storage.prototype)
  .slice(0, -1)
  .map((column) => { return { label: column, value: column, sortable: column == 'name' || column == 'hostname' } });

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
  }).catch((reason) => {
    if (reason.name) {
      error.value = reason.name;
    } else {
      error.value = 'An unknown error occured';
    }
  });
}

/** @type {import('vue').Ref<null|string>} */
let error = ref(null);
</script>

<template>
  <h1 class="m-4">Storages</h1>
  <NotificationError v-if="error">
    {{ error }}
  </NotificationError>
  <List
    :columns="columns"
    :rows="rows"
    model-name="storage"
    class="mx-4"
    :on-reload="loadStorages"
    :on-page-size-change="loadStorages"
    :show-settings="true"
    :show-reload="true"
    :show-pagination="true"
    :show-size-changer="true"
  />
</template>
