from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from ..models import models, schemas


SQLALCHEMY_DATABASE_URL = "postgresql://postgres:7X(l$Pm9#1.[@localhost:5432/rolesdb"

engine = create_engine(SQLALCHEMY_DATABASE_URL) #,connect_args={"check_same_thread": False}

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()



