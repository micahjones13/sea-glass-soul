export function Header() {
  return (
    <header
      role="banner"
      className="relative flex w-full flex-col items-center overflow-hidden bg-gradient-to-b from-white via-white to-white/0 pt-6 pb-10"
    >
      <img
        src="/assets/logo.png"
        alt="Seaglass Soul Logo: Crafted by the Sea, Inspired by the Soul"
        className="max-w-[80%] rounded-none drop-shadow-[0_6px_20px_rgba(27,67,114,0.18)] md:max-w-[22%]"
      />
    </header>
  )
}
