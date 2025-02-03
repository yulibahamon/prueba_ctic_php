CREATE TABLE estudiante (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    programa_academico VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE medico (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cita (
    id INT PRIMARY KEY AUTO_INCREMENT,
    estudiante_id INT,
    medico_id INT,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    estado VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (estudiante_id) REFERENCES estudiante(id),
    FOREIGN KEY (medico_id) REFERENCES medico(id)
);

-- Insertar datos de ejemplo
INSERT INTO estudiante (nombre, correo, programa_academico)
VALUES
    ('Juan Pérez', 'juan@example.com', 'Ingeniería'),
    ('María López', 'maria@example.com', 'Medicina');

INSERT INTO medico (nombre, especialidad)
VALUES
    ('Dr. García', 'Cardiología'),
    ('Dra. Rodríguez', 'Pediatría');

INSERT INTO cita (estudiante_id, medico_id, fecha, hora, estado)
VALUES
    (1, 1, '2024-03-17', '10:00:00', 'agendada'),
    (2, 2, '2024-03-18', '15:30:00', 'agendada');