from fastapi import FastAPI


app = FastAPI()


@app.get("/")
async def read_root():
    """Root path of the API."""
    return {"Hello": "World"}
