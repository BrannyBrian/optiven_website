interface FetcherOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit;
}

export async function fetcher<T>(
  url: string,
  options: FetcherOptions = {}
): Promise<T> {
  try {
    if (!options.headers) {
      options.headers = {};
    }

    // Include the API token in the Authorization header
    options.headers["Authorization"] = `Bearer ${process.env.STRAPI_API_TOKEN}`;

    const response = await fetch(process.env.STRAPI_URL+ url, options);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response:", response.status, errorData);
      throw new Error(errorData.message || "Request failed");
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
