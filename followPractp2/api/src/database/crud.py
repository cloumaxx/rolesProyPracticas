from sqlalchemy.orm import Session

from ..models import models, schemas

### Metodos CRUD ORM


def get_estudiante(db: Session, id: int):
    return db.query(models.EstudianteBase).filter(models.EstudianteBase.id == id).first()

def get_estudiante_by_email(db: Session, email: str):
    return db.query(models.EstudianteBase).filter(models.EstudianteBase.emailInstitucional == email).first()


def get_estudiantes(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.EstudianteBase).offset(skip).limit(limit).all()


def create_estudiante(db: Session, estudiante: schemas.Estudiante):
    db_estudiante = models.EstudianteBase(**estudiante.dict())
    db.add(db_estudiante)
    db.commit()
    db.refresh(db_estudiante)
    return db_estudiante

