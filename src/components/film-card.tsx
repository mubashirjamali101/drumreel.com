export function FilmCard({
  src,
  poster,
  avatar,
  caption,
}: {
  src: string;
  poster: string;
  avatar: string;
  caption: string;
}) {
  return (
    <div className="glass overflow-hidden">
      <div className="relative aspect-video bg-black">
        <video className="h-full w-full object-cover" src={src} poster={poster} autoPlay muted loop playsInline />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar}
          alt=""
          className="absolute bottom-3 right-3 h-16 w-16 rounded-full object-cover ring-2 ring-white/80"
        />
        <p className="absolute bottom-3 left-3 rounded-md bg-black/45 px-2.5 py-1 text-[11px] text-white backdrop-blur-md">
          {caption}
        </p>
      </div>
    </div>
  );
}
