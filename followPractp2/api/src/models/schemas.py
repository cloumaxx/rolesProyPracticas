from typing import List
from pydantic import BaseModel

class Estudiante(BaseModel):
    # id: int
    programa: str
    codigo: str
    emailInstitucional: str
    emailPersonal: str
    telefono: str
    nombre: str
    # fechaRegistro: str

class EstudianteResponse(Estudiante):
    id: int
    fechaRegistro: str

