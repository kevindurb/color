export const getValue = (el) => el.value;

export const setValue = (value, el) => el.setAttribute('value', value);

export const onChange = (cb, el) => {
  el.addEventListener('change', cb);
  el.addEventListener('input', cb);
}
