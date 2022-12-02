import { sendRequest } from "../request";

const BASE_URL = '/api/transactions';

export function create(transactionData) {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/create`, 'POST', transactionData);
}

export function getAll() {
  return sendRequest(BASE_URL);
}