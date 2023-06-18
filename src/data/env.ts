const thorMissingError = (envvar: unknown) => {
  throw new Error(`Missing env: ${envvar}, check your .env file`);
};

const ENV = {
  GOOGLE_MAPS_API_KEY:
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY ??
    thorMissingError("VITE_GOOGLE_MAPS_API_KEY"),
};

export default ENV;
