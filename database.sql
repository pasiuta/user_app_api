    create TABLE users(
      id SERIAL PRIMARY KEY ,
      name VARCHAR(255),
      email text,
      phone text,
      password varchar(255) not null,
      positionId numeric,
      imagePath varchar(255)
    );

    create TABLE positions(
    id SERIAL PRIMARY KEY ,
    position VARCHAR(255)
    );

    create TABLE token(
        token text,
        created_at numeric
    );


