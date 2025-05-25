export async function getServerSideProps({ res }) {
  const merchant_id = "OK2269964";
  const merchant_code = "908693017401347452269964OKCTA8B356317904A59432F2DB147324A0DC"

  try {
    const apiRes = await fetch(
      `https://gateway.okeconnect.com/api/mutasi/qris/${merchant_id}/${merchant_code}`
    );

    if (!apiRes.ok) {
      throw new Error(`Fetch failed: ${apiRes.status}`);
    }

    const data = await apiRes.json();

    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();

    return { props: {} };
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 500;
    res.write(JSON.stringify({ error: error.message }));
    res.end();

    return { props: {} };
  }
}

export default function EmptyPage() {
  return null;
}
