package com.harry.paquetes.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.harry.paquetes.entidades.CompraEntity;

@Repository
public interface RepoCompras extends JpaRepository<CompraEntity, Integer> {

	// Consulta para obtener una lista de compras en base al id del Usuario
	@Query("SELECT c FROM CompraEntity c WHERE c.usuario.id=:idusuario")
	List<CompraEntity> ObtenerPorid(@Param("idusuario") int idusuario);
}
