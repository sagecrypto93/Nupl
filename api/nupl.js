export default async function handler(req, res) {
  const token = "0d866412-d29c-41ed-a044-7be4fb52478a"; // Your API key here
  const endpoint = `https://api.researchbitcoin.net/v1/net_unrealized_profit_loss/net_unrealized_profit_loss?token=${token}&date_field=2023-01-01&output_format=json`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch API data" });
    }
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
