from sqlalchemy import Column, ForeignKey, Integer, String, Date,func

from ..database.db import Base
# from sqlalchemy.orm import relationship


class EstudianteBase(Base):
    __tablename__ = "estudiantes"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    programa = Column(String)
    codigo = Column(String)
    emailInstitucional = Column(String, unique=True)
    emailPersonal = Column(String)
    telefono = Column(String)
    nombre = Column(String)
    # fechaRegistro = Column(Date, default=func.current_date())
    #documentos = relationship("Documento", back_populates="owner")
    # semestre = Column(String)


#class Documento(Base):
