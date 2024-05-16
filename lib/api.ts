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
    options.headers[
      "Authorization"
    ] = `Bearer ${process.env.STRAPI_API_TOKEN_PROD}`;

    const response = await fetch(process.env.STRAPI_URL_PROD + url, options);

    if (!response.ok) {
      const errorText = await response.text(); // Read the response as text
      console.error("Error response:", response.status, errorText);
      throw new Error(errorText || "Request failed");
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
