const thorMissingError = (envvar: unknown) => {
  throw new Error(`Env variable found, ${envvar}, but it is empty`);
};

const ENV = {
  GOOGLE_MAPS_API_KEY:
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY ??
    thorMissingError("VITE_GOOGLE_MAPS_API_KEY"),
};

export default ENV;
