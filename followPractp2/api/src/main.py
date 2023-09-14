from fastapi import Depends, FastAPI, HTTPException, File, UploadFile, Form
from typing import List
import pandas as pd
from datetime import date
from sqlalchemy.orm import Session

from .models.models import Base
from .models.schemas import Estudiante
from .database import crud
from .database.db import SessionLocal, engine


Base.metadata.create_all(bind=engine)
app = FastAPI()
db : SessionLocal = None

# bien carlos
def crear_df(excelf):
    df = pd.read_excel(excelf, sheet_name='Sheet1', usecols="B:H", skiprows=11)
    df = df[df['PROG -'] != 'SEM']
    df = df.dropna(how='all')
    df = df.astype(str)
    return df


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/estudiantes", response_model=List[Estudiante])
async def get_estudiantes(db: Session = Depends(get_db)):
    estudiantes = crud.get_estudiantes(db)
    return estudiantes


@app.post("/estudiantes", response_model=Estudiante)
async def crear_estudiante(estudiante: Estudiante, db: Session = Depends(get_db)):
    db_estudiante = crud.get_estudiante_by_email(db, email=estudiante.emailInstitucional)
    if db_estudiante:
        raise HTTPException(status_code=400, detail="El email ya está registrado")
    newEstudiante = crud.create_estudiante(db=db, estudiante=estudiante)
    #newEstudiante = Estudiante(**estudiante.dict(), fechaRegistro=date.today())
    return newEstudiante



@app.post("/estudiantes/upload")
async def crear_estudiante_desde_archivo(
    archivo: UploadFile = File(...),
    semestre: str = Form(...),
    db: Session = Depends(get_db)
):
    if not archivo:
        raise HTTPException(status_code=400, detail="No se ha enviado ningún archivo")
    try:
        df = crear_df(archivo.file)
        for idx, row in df.iterrows():
            programa = row['PROG -']
            codigo = row['CÓDIGO'].split('.')[0]
            email_inst = row['EMAIL INSTITUCIONAL']
            email_pers = row['EMAIL PERSONAL']
            telefono = row['TELÉFONO']
            nombre = row['NOMBRE']

            newEstudiante = Estudiante(
                programa=programa,
                codigo=codigo,
                emailInstitucional=email_inst,
                emailPersonal=email_pers,
                telefono=telefono,
                nombre=nombre,
                fechaRegistro=date.today(),
                semestre=semestre
            )
            # newEstudiante.save()
        
        columns = df.columns.tolist()
        return {"columnas": columns}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@app.get('/estudiantes/{id}', response_model=Estudiante)
async def get_estudiante(id: int):
    try:
        estudiante = Estudiante.objects.get(id=id)
        return estudiante
    except Estudiante.DoesNotExist as e:
        raise HTTPException(status_code=404, detail=f"{str(e)} | El estudiante no existe")

    
