package com.harry.paquetes.repositorios;
import java.util.List;

//Repositorio de los Personajes
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.harry.paquetes.entidades.*;
@Repository
public interface RepoPersonajes extends JpaRepository<PersonajeEntity, Integer> {
	
	//Consulta para obtener todos los personajes
	@Query("SELECT p FROM PersonajeEntity p")
	List<PersonajeEntity> Obtenertodoslospersonajes();
		
	//Consulta para obtener un personaje a traves de su ID
	@Query("SELECT p FROM PersonajeEntity p WHERE p.idpersonaje=:id")
	PersonajeEntity ObtenerPorid(@Param("id")int id);
	
	@Query("SELECT p FROM PersonajeEntity p " +
	           "JOIN p.objetos o " +
	           "WHERE o.id IN :listaIds " +
	           "GROUP BY p.idpersonaje " +
	           "HAVING COUNT(o.id) >= 3")
	    List<PersonajeEntity> findPersonajesConTresObjetos(@Param("listaIds") List<Integer> listaIds);
	
	@Query("SELECT DISTINCT p FROM PersonajeEntity p " +
		       "JOIN p.objetos o " +
		       "WHERE o.id IN :listaIds " +
		       "AND p.idpersonaje NOT IN :idsPoseidos " + // <--- EXCLUIR POSEÍDOS
		       "GROUP BY p.idpersonaje " +
		       "HAVING COUNT(DISTINCT o.id) >= 3")
		List<PersonajeEntity> findNuevosPersonajes(@Param("listaIds") List<Integer> listaIds, 
		                                           @Param("idsPoseidos") List<Integer> idsPoseidos);
}