package com.harry.paquetes.repositorios;
//Repositorio para la entidad UsuarioEntity
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.harry.paquetes.entidades.*;
@Repository
public interface RepoUsuarios extends JpaRepository<UsuarioEntity, Integer> {

	//Consulta para obtener todos los usuarios
	@Query("SELECT c FROM UsuarioEntity c")
    List<UsuarioEntity> ObtenerAllUsuarios();
	
	//Consulta para obtener un usuario por su nombre y contraseña
	@Query("SELECT c FROM UsuarioEntity c WHERE c.nombre=:nombre AND c.contra=:contra")
	UsuarioEntity ObtenerPorSesion(@Param("nombre")String nombre, @Param("contra") String contra);
	
	//Consulta para obtener un usuario por su nombre y contraseña
	@Query("SELECT c FROM UsuarioEntity c WHERE c.idusuario=:id")
	UsuarioEntity ObtenerPorid(@Param ("id") int id);
}
