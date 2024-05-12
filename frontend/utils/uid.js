let uid = 0;

function generateUid() {
  uid += 1;
  return `hiveprint-uid-${uid}`;
}

export { generateUid };
