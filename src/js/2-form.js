let formData = { email: "", message: "" };
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
if (form) {
  form.addEventListener('input', onInput);
  form.addEventListener('submit', onSubmit);
  try {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || formData;
  } catch {
    formData = { email: '', message: '' };
  }
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

function onInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
}

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
}
