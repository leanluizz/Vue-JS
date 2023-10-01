// vMoney.js

export const vMoney = {
  beforeMount(el, binding) {
    const regexp = /\./g;
    const valid = el.innerHTML.replace(regexp, ',');
    const regex = /^\d+(\.|,)(\d{2}|00)$/;

    if (regex.test(valid)) {
      el.innerHTML = binding.value + valid;
    } else {
      el.innerHTML = valid;
    }
  },
};
