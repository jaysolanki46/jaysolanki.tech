import { config } from "../../constants/config";

const Footer = () => {
  const email = config.contact.personalDetails?.email ?? "hello@example.com";
  const phone = config.contact.personalDetails?.phone ?? "+91-XXXXXXXXXX";
  const address = config.contact.personalDetails?.address ?? "Unknown Address";

  const mapsHref =
    address && address !== "Unknown Address"
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          address
        )}`
      : undefined;

  return (
    <footer className="w-full bg-black-100 text-white py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Jaykumar Solanki
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
        <a
          href={`mailto:${email}`}
          className="underline text-white hover:text-white"
        >
          {email}
        </a>

        <span className="hidden sm:inline">|</span>

        <a href={`tel:${phone}`} className="underline text-white hover:text-white">
          {phone}
        </a>

        <span className="hidden sm:inline">|</span>

        {mapsHref ? (
          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="underline text-white hover:text-white max-w-xs truncate"
            title={address}
          >
            {address}
          </a>
        ) : (
          <span className="text-white max-w-xs truncate" title={address}>
            {address}
          </span>
        )}
      </div>
    </footer>
  );
};

export default Footer;