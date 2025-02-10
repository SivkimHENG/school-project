export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

Card.Image = function CardImage({ src, alt, className = "" }) {
  return (
    <img src={src} alt={alt} className={`w-full h-48 object-cover ${className}`} />
  );
};

Card.Category = function CardCategory({ children, className = "" }) {
  return (
    <span className={`text-sm font-semibold uppercase text-blue-500 px-4 pt-4 block ${className}`}>
      {children}
    </span>
  );
};

Card.Title = function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`px-4 text-lg font-bold text-gray-900 ${className}`}>{children}</h3>
  );
};

Card.Body = function CardBody({ children, className = "" }) {
  return (
    <p className={`px-4 py-2 text-gray-600 ${className}`}>{children}</p>
  );
};

