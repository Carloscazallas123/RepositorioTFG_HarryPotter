package com.harry.paquetes.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.harry.paquetes.entidades.*;
@Repository
public interface RepoPersonajes extends JpaRepository<PersonajeEntity, Integer> {
	
	//Consulta para obtener un objeto por su ID
	@Query("SELECT p FROM PersonajeEntity p WHERE p.id=:id")
	ObjetoEntity ObtenerPorid(@Param("id")int id);
}