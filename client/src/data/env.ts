const throwMissingError = (envvar: unknown) => {
  throw new Error(`Missing env: ${envvar}, check your .env file`);
};

const ENV = {
  GOOGLE_MAPS_API_KEY:
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY ??
    throwMissingError("VITE_GOOGLE_MAPS_API_KEY"),
};

export default ENV;
