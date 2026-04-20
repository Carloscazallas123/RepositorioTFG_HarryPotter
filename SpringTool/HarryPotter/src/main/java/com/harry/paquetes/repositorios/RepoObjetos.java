package com.harry.paquetes.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.harry.paquetes.entidades.*;
@Repository
public interface RepoObjetos extends JpaRepository<ObjetoEntity, Integer> {

	//Consulta para obtener todos los Objetos
	@Query("SELECT o FROM ObjetoEntity c")
    List<ObjetoEntity> ObtenerAllObjetos();
	
	//Consulta para obtener un objeto por su ID
	@Query("SELECT o FROM ObjetoEntity c WHERE c.id=:id")
	ObjetoEntity ObtenerPorid(@Param("id")int id);
}
