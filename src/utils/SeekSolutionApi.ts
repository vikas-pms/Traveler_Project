

const API_ROOT = "http://192.168.1.35:8090/"
const encode = encodeURIComponent;
export class SeekSolutionApi {
  private headers = {
    "content-type": "application/json",
  }
  constructor(token?: string) {
    this.headers = {
      ...this.headers,
      ...(token && { authorization: `Bearer ${token}` })
    }
  }
  private requests = {
    get: async (url: string) => {
      const response = await fetch(`${API_ROOT}${url}`, {
        method: "GET",
        headers: this.headers,
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      throw await response.json()
    },
    post: async (url: string, body: any) => {
      const response = await fetch(`${API_ROOT}${url}`, {
        method: "POST",
        headers: {
          ...this.headers,
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      throw await response.json()
    },
    put: async (url: string, body: any) => {
      const response = await fetch(`${API_ROOT}${url}`, {
        method: "PUT",
        headers: {
          ...this.headers,
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      throw await response.json()
    },
    patch: async (url: string, body: any) => {
      const response = await fetch(`${API_ROOT}${url}`, {
        method: 'PATCH',
        headers: {
          ...this.headers,
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      throw await response.json()
    },
    delete: async (url: string,) => {
      const response = await fetch(`${API_ROOT}${url}`, {
        method: 'DELETE',
        headers: {
          ...this.headers,
        },

      });
    },
  };

  Brands = {
    post: (item: any) =>
      this.requests.post(`brands`, item),
    get: () =>
      this.requests.get(`brands`),
    getById: (id: string) =>
      this.requests.get(`brands/${id}`),
    delete: (id: string) =>
      this.requests.delete(`brands/${id}`),
    patch: (id: string, item: any) =>
      this.requests.patch(`brands/${id}`, item),
  };
  Admin = {
    signup: (userData: any) =>
      this.requests.post(`signup`, userData),
    signin: (credentials: any) =>
      this.requests.post(`signin`, credentials),
  };

  Introductions = {
    list: () => this.requests.get("introductions")
  }

  FAQs = {
    list: () => this.requests.get("faqs")
  }

  
  SocialLinks = {
    get: () =>
      this.requests.get(`social-link`),
    
  }

  BlogsList = {
    list: () => this.requests.get("blogs")
  }
 
}