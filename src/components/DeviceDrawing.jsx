/** A plain line drawing of the wearable. The hardware is still being built,
 *  so there is no photograph of it yet. */
export default function DeviceDrawing() {
  return (
    <svg viewBox="0 0 240 300" role="img" aria-label="Drawing of the SafeTag wearable: a round tag with one large button, on a key ring">
      <g fill="none" stroke="#16181d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="120" cy="34" r="20" />
        <path d="M110 52v14h20V52" />
        <circle cx="120" cy="170" r="104" />
        <circle cx="120" cy="170" r="62" />
        <circle cx="120" cy="170" r="50" fill="#c62828" />
        <path d="M62 112l5-5M72 102l5-5M82 93l5-5" strokeWidth="4" />
        <circle cx="120" cy="252" r="4" fill="#16181d" />
      </g>
      <g fontFamily="system-ui, sans-serif" fontSize="12" fill="#6b7280" stroke="#6b7280" strokeWidth="1">
        <path d="M150 130l34-62" />
        <text x="160" y="60" stroke="none">SOS button</text>
        <path d="M70 100L30 76" />
        <text x="4" y="68" stroke="none">Microphone</text>
        <path d="M126 254l44 26" />
        <text x="174" y="290" stroke="none">Status light</text>
      </g>
    </svg>
  );
}
