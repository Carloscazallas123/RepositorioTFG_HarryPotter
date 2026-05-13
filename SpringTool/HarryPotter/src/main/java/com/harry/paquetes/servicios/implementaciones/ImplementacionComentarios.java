package com.harry.paquetes.servicios.implementaciones;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harry.paquetes.dtos.comentario.ComentarDTO;
import com.harry.paquetes.dtos.comentario.ComentarioMostDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;
import com.harry.paquetes.entidades.ComentarioEntity;
import com.harry.paquetes.repositorios.RepoComentarios;
import com.harry.paquetes.repositorios.RepoUsuarios;
import com.harry.paquetes.servicios.interfaces.InterfazComentario;
import java.time.*;

@Service
public class ImplementacionComentarios implements InterfazComentario {

	@Autowired
	RepoUsuarios repoUsuarios;
	@Autowired
	RepoComentarios repocomentarios;

	@Override
	public List<ComentarioMostDTO> mostrarcomentarios() {
		List<ComentarioMostDTO> listacomentarios = new ArrayList<>();
		List<ComentarioEntity> listaentidades = repocomentarios.ObtenerAllComentarios();

		for (int i = listacomentarios.size(); i < 3; i++) {
			int aleatorio = (int) (Math.random() * listaentidades.size());
			listacomentarios.add(new ComentarioMostDTO(
					listaentidades.get(aleatorio).getId(),
					listaentidades.get(aleatorio).getDescripcion(),
					listaentidades.get(aleatorio).getValoracion(), 
					listaentidades.get(aleatorio).getFecha(),
					listaentidades.get(aleatorio).getUsuario().getNombre()));
					listaentidades.remove(aleatorio);
		}
		return listacomentarios;
	}

	@Override
	public ComentarDTO comentar(ComentarDTO comentario) {
		List<ComentarioEntity> listaentidades = repocomentarios.ObtenerAllComentarios();
		ComentarDTO comentarionuevo = null;
		boolean existe = false;
		for (int i = 0; i < listaentidades.size(); i++) {
			if (listaentidades.get(i).getUsuario().getIdusuario() == comentario.getId()) {
				comentarionuevo = new ComentarDTO(
				listaentidades.get(i).getDescripcion(),
				listaentidades.get(i).getValoracion(),
				listaentidades.get(i).getFecha(),
				listaentidades.get(i).getUsuario().getIdusuario());
				
				listaentidades.get(i).setDescripcion(comentario.getDescripcion());
				listaentidades.get(i).setValoracion(comentario.getValor());
				listaentidades.get(i).setFecha(LocalDate.now());
				listaentidades.get(i).setUsuario(repoUsuarios.ObtenerPorid(comentario.getId()));
				repocomentarios.save(listaentidades.get(i));
				System.out.println("Comentario ya existente");
				existe=true;
			}
		}
		if (existe == false) {
			ComentarioEntity entidad = new ComentarioEntity();
			entidad.setDescripcion(comentario.getDescripcion());
			entidad.setValoracion(comentario.getValor());
			entidad.setFecha(LocalDate.now());
			entidad.setUsuario(repoUsuarios.ObtenerPorid(comentario.getId()));
			comentarionuevo = new ComentarDTO(entidad.getDescripcion(), 
					entidad.getValoracion(), 
					entidad.getFecha(),
					entidad.getUsuario().getIdusuario());
			repocomentarios.save(entidad);
			System.out.println("ComentarioCreado");
		}

		return comentarionuevo;
	}

}
