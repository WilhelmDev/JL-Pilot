import Image from "next/image";

export default function NeighborhoodCard({ name, type, location, imgSrc }) {
  return (
    <article className="neighborhood-card">
      <Image
        src={imgSrc}
        width={110}
        height={143}
        alt={name}
        className="neighborhood-card__img"
      />
      <div className="neighborhood-card__info-container">
        <p className="neighborhood-card__name">{name}</p>
        <p className="neighborhood-card__type">{type}</p>
        <p className="neighborhood-card__location">{location}</p>
      </div>
    </article>
  );
}
