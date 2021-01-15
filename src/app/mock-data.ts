export const FORM_PLACEHOLDERS = {
    login: 'Логин',
    password: 'Пароль',
    email: 'Email', 
    age: 'Возраст', 
    site: 'Введите адрес сайта',
    role: 'Выберите роль' 
};

export const VALIDATION_MESSAGES = {
    login: {
      required: 'Имя обязательно.',
      minlength: 'Имя должно содержать не менее 4 символов.',
      maxlength: 'Имя должно содержать не более 15 символов.'
    },
    password: {
      required: 'Пароль обязателен.',
      minlength: 'Пароль  должен содержать не менее 7 символов.',
      maxlength: 'Пароль  должен содержать не более 25 символов.'
    },
    email: {
      required: 'Email обязателен.',
      emailValidator: 'Неправильный формат email адреса.'
    },
    age: {
      required: 'Возраст  обязателен.',
      rangeValidator: 'Значение должно быть числом в диапозоне 1..122.'
    },
    site: {
      required: 'Сайт обязателен.',
      urlNotAllowed: 'Неправильный формат адреса сайта.',
      pending: 'Выполняется проверка...'
    },
    role: {
    required: 'Обязательное поле.'
    }
  };

  export const FORM_SUCCESS = { 
    login: 'Принято!', 
    password: 'Принято!',
    email: 'Принято!', 
    age: 'Принято!', 
    site: 'Принято!',
    role: 'Принято!' 
};
  export const FORM_ERRORS = { 
    login: '', 
    password: '',
    email: '', 
    age: '', 
    site: '',
    role: '' 
};

  export const ROLES = ['Гость', 'Модератор', 'Администратор'];