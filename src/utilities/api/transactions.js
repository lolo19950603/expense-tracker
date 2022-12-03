import { sendRequest } from "../request";

const BASE_URL = '/api/transactions';

export function create(transactionData) {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/create`, 'POST', transactionData);
}

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getAllTime() {
  return sendRequest(`${BASE_URL}/alltime`);
}

export function getTotal() {
  return sendRequest(`${BASE_URL}/total`);
}

export function getMonthlyTotal() {
  return sendRequest(`${BASE_URL}/monthlytotal`);
}