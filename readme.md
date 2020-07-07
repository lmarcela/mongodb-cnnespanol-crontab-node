INSTRUCCIONES:

1) Ingresar a MongoDB Atlas y crear un cluster gratis de azure y se crea un usuario de BD.
2) Ir a Cluster > CONNECT > Connect your application > "Copy the string and paste in .env"; Se debe asignar un nombre de usuario de BD (usermongocnn), contraseña de usuario de BD (Us3rM0ng0CNN) y nombre de BD (db_test)
3) Ejecutar en terminal: node index
4) De acuerdo al crontab (ver linea 8 de index.js) se crea una tabla en el cluster creado. La BD es db_test y el nombre de la coleccion/tabla es breakingnews porque el modelo es breakingNew y por defecto se crea con el nombre del modelo en plural. Lo que hace es ir a https://cnnespanol.cnn.com/ y extrae los titulos y links de las noticias, los cuales se almacenan en la colección breakingnews.

