import {put as sagaPut} from 'redux-saga/effects';
import api from 'utils/api';
import {signOutAction} from '../actions';
import {AxiosResponse} from 'axios';

class ApiSaga {
  *get<T = any>(
    endpoint: string,
    params?: object,
  ): Generator<any, any, AxiosResponse<T>> {
    try {
      const result = yield api.get<T>(endpoint, {params});

      return result;
    } catch (error) {
      console.log(error);
      if ((error.response as AxiosResponse)?.status === 401) {
        // if unable to update token then logout user from app
        yield sagaPut(signOutAction());
      }
      throw error;
    }
  }

  *post<T = any>(
    endpoint: string,
    body?: object,
  ): Generator<any, any, AxiosResponse<T>> {
    try {
      const result = yield api.post<T>(endpoint, body);

      return result;
    } catch (error) {
      if ((error.response as AxiosResponse)?.status === 401) {
        // if unable to update token then logout user from app
        yield sagaPut(signOutAction());
      }
      throw error;
    }
  }

  *put<T = any>(endpoint: string, body?: object): Generator {
    try {
      const result = yield api.put<T>(endpoint, body);

      return result;
    } catch (error) {
      console.log(error);
      if ((error.response as AxiosResponse)?.status === 401) {
        // if unable to update token then logout user from app
        yield sagaPut(signOutAction());
      }
      throw error;
    }
  }

  *patch<T = any>(
    endpoint: string,
    body?: object,
  ): Generator<any, any, AxiosResponse<T>> {
    try {
      const result = yield api.patch<T>(endpoint, body);

      return result;
    } catch (error) {
      if ((error.response as AxiosResponse)?.status === 401) {
        // if unable to update token then logout user from app
        yield sagaPut(signOutAction());
      }
      throw error;
    }
  }

  *delete<T = any>(endpoint: string): Generator<any, any, AxiosResponse<T>> {
    try {
      const result = yield api.delete<T>(endpoint);

      return result;
    } catch (error) {
      if ((error.response as AxiosResponse)?.status === 401) {
        // if unable to update token then logout user from app
        yield sagaPut(signOutAction());
      }
      throw error;
    }
  }
}

export {setAuthHeader, resetAuthHeader} from 'utils/api';
export default new ApiSaga();
