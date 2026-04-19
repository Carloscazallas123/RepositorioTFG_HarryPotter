package com.harry.paquetes.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.harry.paquetes.entidades.*;
@Repository
public interface RepoUsuarios extends JpaRepository<UsuarioEntity, Integer> {

	//Consulta para obtener todos los usuarios
	@Query("SELECT FROM ClienteEntity")
    List<UsuarioEntity> ObtenerAllUsuarios();
	
	//Consulta para obtener un usuario por su nombre y contraseña
	@Query("SELECT FROM ClienteEntity c WHERE c.nombre=:nombre AND c.contrasena=:contrasena")
	UsuarioEntity ObtenerPorSesion(@Param("nombre")String nombre, @Param("contrasena") String contrasena);
}
