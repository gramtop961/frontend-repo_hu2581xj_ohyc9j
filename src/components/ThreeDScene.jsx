import Spline from '@splinetool/react-spline';

export default function ThreeDScene() {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="relative w-full h-[420px] sm:h-[520px] rounded-3xl overflow-hidden border border-black/5 shadow">
          {/* Soft gradient accents that don't block interaction */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-8 left-10 h-40 w-40 rounded-full bg-fuchsia-300/40 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-48 w-48 rounded-full bg-cyan-300/40 blur-3xl" />
          </div>

          <Spline
            scene="https://prod.spline.design/6iG02GhhDTsU5YpU/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
