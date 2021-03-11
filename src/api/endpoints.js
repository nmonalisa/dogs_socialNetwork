export const baseUrl = 'https://dogsapi.origamid.dev/json';

// Autenticar-logar usuário e pegar o token:
export function userAuthenticate(body) {
  return {
    url: baseUrl + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

// validar o token do usuário
export function tokenValidate(token) {
  return {
    url: baseUrl + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

// Pegar informações do usuário a partir do token
export function userGet(token) {
  return {
    url: baseUrl + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

// Criar novo usuario
export function userRegister(body) {
  return {
    url: baseUrl + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

// Enviar uma foto
export function postPhoto(formData, token) {
  return {
    url: baseUrl + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    },
  };
}

// pegar lista de fotos
export function getPhotosList({page, total, user}) {
  return {
    url: `${baseUrl}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

// Pegar foto específica
export function getPhoto(id) {
  return {
    url: `${baseUrl}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
