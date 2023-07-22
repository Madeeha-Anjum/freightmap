""" Fast Api """
from enum import Enum
import uuid
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# from database import engine, SessionLocal


# import models


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


tracks = [
    {
        "id": "1",
        "type": "Air",
        "paths": [
            {"lat": 37.422, "long": 40.422},
            {"lat": 40.422, "long": -20.084},
            {"lat": -97.422, "long": 40.422},
        ],
    }
]


@app.get("/tracks")
async def read_all():
    """Get all paths"""
    return tracks


class RouteType(Enum):
    AIR = "Air"
    SEA = "Sea"
    GROUND = "Ground"


class Coordinates(BaseModel):
    lat: float
    long: float


class Track(BaseModel):
    route_type: RouteType
    paths: list[Coordinates]


@app.post("/tracks")
async def create_new_track(track: Track):
    """Add new path"""
    print(track.dict())
    print(track.dict())
    new_track = {"id": uuid.uuid4(), **track.dict()}

    tracks.append(new_track)

    return new_track
