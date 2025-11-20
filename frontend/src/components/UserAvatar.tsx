interface useravatar {
  src: string;
  alt: string;
}

export const UserAvatar = ({ src, alt }: useravatar) => (
  <div
    className={`w-10 h-10 rounded-full overflow-hidden border-2 border-white cursor-pointer`}
  >
    <img src={src} alt={alt} className={`w-full h-full object-cover`} />
  </div>
);
