// fasada do obsługi CRUD account

const BASE_URL = "###";

// łączenie wszystkich metod w fasadę

const getAll = async () => {
  const data = await fetch(BASE_URL);
  return await data.json();
};

const add = async (rental) => {
  // TODO : pobieranie usera zalogowanego z sesji
  rental.user = { Id: "u" };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rental),
  };

  const response = await fetch(BASE_URL, options);

  if (response.status === 200) {
    return await response.json();
  }
};

const getById = async (id) => {
  const data = await fetch(`${BASE_URL}/${id}`);
  return await data.json();
};

const edit = async (rental, id) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rental),
  };

  const response = await fetch(`${BASE_URL}/${id}`, options);

  if (response.status === 200) {
    return await response.json();
  }
}

const remove = async (id) => {
  const options = {
    method: "DELETE",
  };

  const response = await fetch(`${BASE_URL}/${id}`, options);

  if (response.status === 200) {
    return await response.json();
  }
}

const accountsAPI = {
  getAll: () => getAll(),
  getById: (id) => getById(id),
  add: (rental) => add(rental),
  edit: (rental, id) => edit(rental, id),
  remove: (id) => remove(id)
};

export default accountsAPI;