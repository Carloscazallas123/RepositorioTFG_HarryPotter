package com.harry.paquetes.repositorios;
//Repositorio para la entidad CometnariosEntity
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.harry.paquetes.entidades.*;
@Repository
public interface RepoComentarios extends JpaRepository<ComentarioEntity, Integer> {

	//Consulta para obtener todos los Comentarios
	@Query("SELECT c FROM ComentarioEntity c")
    List<ComentarioEntity> ObtenerAllComentarios();
	
	//Consulta para obtener un comentario a traves del Id del Usuario
	@Query("SELECT c FROM ComentarioEntity c WHERE c.usuario.idusuario=:id")
	ComentarioEntity ObtenerPorUsuarioID(@Param("id")int id);
}

