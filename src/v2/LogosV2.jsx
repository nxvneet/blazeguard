/* Marquee row of certification / standard chips (proforma's logo strip). */
const CHIPS = ['EI-30', 'EI-60', 'EI-90', 'EN 13501-2', 'German-Engineered', 'ASTM E119', 'BS 476', 'UL Listed']

export default function LogosV2() {
  const row = [...CHIPS, ...CHIPS]
  return (
    <section className="v2logos">
      <div className="v2logos__track">
        {row.map((c, i) => (
          <span className="v2logos__chip" key={i}>
            <span className="v2logos__dot" />
            {c}
          </span>
        ))}
      </div>
    </section>
  )
}
