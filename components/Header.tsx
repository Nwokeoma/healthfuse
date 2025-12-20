export default function Header() {
  return (
    <header style={{ padding: 20, borderBottom: "1px solid #eee" }}>
      <strong>HealthFuse</strong>

      <nav style={{ marginTop: 10 }}>
        <a href="/" style={{ marginRight: 15 }}>Home</a>
        <a href="/about" style={{ marginRight: 15 }}>About</a>

        <a href="/solution" style={{ marginRight: 15 }}>Solution</a>
        <a href="/hospitals" style={{ marginRight: 15 }}>Hospitals</a>
        <a href="/hmos" style={{ marginRight: 15 }}>HMOs</a>
        <a href="/labs" style={{ marginRight: 15 }}>Labs</a>
        <a href="/pharmacies" style={{ marginRight: 15 }}>Pharmacies</a>
        <a href="/trust">Trust</a>
        <a href="/investors">Investors</a>
      </nav><a
  href="/contact"
  style={{
    marginLeft: 20,
    padding: "6px 12px",
    border: "1px solid #000",
  }}
>
  Contact
</a>

    </header>
  );
}
