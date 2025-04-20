import axios from 'axios';

export async function GET(req) {
  try {
    const response = await axios.get("https://dev.to/api/users/me", {
      headers: {
        "api-key": process.env.NEXT_PUBLIC_DEVTO_API_KEY,
        "Content-Type": "application/json",
      },
    });

    // Return the response data
    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch Dev.to stats" }),
      { status: 500 }
    );
  }
}