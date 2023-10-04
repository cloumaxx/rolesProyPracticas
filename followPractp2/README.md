
1. start db: postgres

    ```bash
        docker run -d --name rolespsql -p 5432:5432 -e POSTGRES_PASSWORD='7X(l$Pm9#1.[' postgres
    ```

2. create database si no existe
    
    ```bash
        docker exec -it rolespsql psql -U postgres -c "CREATE DATABASE IF NOT EXISTS rolesdb"
    ```

3. 