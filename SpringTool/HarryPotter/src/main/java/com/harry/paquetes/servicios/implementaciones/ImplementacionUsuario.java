package com.harry.paquetes.servicios.implementaciones;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.harry.paquetes.dtos.usuario.RegistroDTO;
import com.harry.paquetes.dtos.usuario.SesionDTO;
import com.harry.paquetes.dtos.usuario.UsuarioFullDTO;
import com.harry.paquetes.entidades.CompraEntity;
import com.harry.paquetes.entidades.PersonajeEntity;
import com.harry.paquetes.entidades.UsuarioEntity;
import com.harry.paquetes.repositorios.RepoCompras;
import com.harry.paquetes.repositorios.RepoPersonajes;
import com.harry.paquetes.repositorios.RepoUsuarios;
import com.harry.paquetes.servicios.interfaces.InterfazUsuario;

@Service
public class ImplementacionUsuario implements InterfazUsuario {

	@Autowired
	private RepoPersonajes repositoriopersonajes;

	@Autowired
	private RepoCompras repositoriocompras;

	@Autowired
	private RepoUsuarios repositoriousuarios;

	@Override
	public UsuarioFullDTO registrarusuario(RegistroDTO registro) {
		// Primero obtenemos todos los usuarios
		List<UsuarioEntity> listausuarios = repositoriousuarios.ObtenerAllUsuarios();
		boolean existente = false;
		UsuarioFullDTO usuario = null;
		// Usamos un metodo externo para comprobar si existe o no
		existente = comprobarexistenciaR(listausuarios, registro);

		// Si no existe, crea la nueva entidad y el DTO
		if (existente == false) {
			// Creacion de la Entidad
			UsuarioEntity entidad = new UsuarioEntity();
			entidad.setContra(registro.getContraseña());
			entidad.setNombre(registro.getNombre());
			entidad.setCorreo(registro.getEmail());
			entidad.setPuntos(0);
			entidad.setCasa(null);
			repositoriousuarios.save(entidad);
			// Creacion del DTO
			usuario = new UsuarioFullDTO(entidad.getIdusuario(), entidad.getNombre(), registro.getEmail(),
					new ArrayList<Integer>(), new ArrayList<Integer>());
		} else if (existente == true) { // Caso contrario, envia un DTO null para fallar
			System.out.println("Usuario no encontrado");
			usuario = null;
		}

		return usuario;
	}

	@Override
	public UsuarioFullDTO iniciarsesionusuario(SesionDTO sesion) {
		// Primero obtenemos todos los usuarios
		List<UsuarioEntity> listausuarios = repositoriousuarios.ObtenerAllUsuarios();
		UsuarioFullDTO usuario = null;
		// Usamos un metodo externo para obtener el DTO
		usuario = comprobarexistenciaS(listausuarios, sesion);

		if (usuario == null) {
			System.out.println("Usuario No encontrado");
		}

		return usuario;
	}

	// ---------------- Procesos Externos -------------------------

	// ---------- | Comprobar Existencia en base a Registarse
	public boolean comprobarexistenciaR(List<UsuarioEntity> Lista, RegistroDTO registo) {
		boolean existe = false;
		for (int i = 0; i < Lista.size(); i++) {
			if (Lista.get(i).getCorreo().equals(registo.getEmail())) {
				existe = true;
				System.out.println("Correo ya existente");
			}
		}
		return existe;
	}

	// ---------- | Comprobar Existencia en base a Iniciar Sesion
	public UsuarioFullDTO comprobarexistenciaS(List<UsuarioEntity> Lista, SesionDTO sesion) {
		UsuarioEntity entidad = null;
		boolean existe = false;
		UsuarioFullDTO usuario = null;
		for (int i = 0; i < Lista.size(); i++) {
			if (Lista.get(i).getNombre().equals(sesion.getNombre())) {
				existe = true;
				entidad = Lista.get(i);
			}
			existe = false;
		}
		// Si existe, crea el nuevoDTO
		if (existe = true) {
			// Obtener los Objetos
			List<CompraEntity> listaentidadesO = repositoriocompras.ObtenerPorid(entidad.getIdusuario());
			List<Integer> listacompras = rellenarlistaobjetos(listaentidadesO);
			
			// Obtener los Personajes
			List<PersonajeEntity> listaentidadesP = repositoriopersonajes.findPersonajesConTresObjetos(listacompras);
			List<Integer> listapersonajes = rellenarlistapersonajes(listaentidadesP);
			usuario = new UsuarioFullDTO(entidad.getIdusuario(), entidad.getNombre(), entidad.getCorreo(),
					entidad.getCasa(), entidad.getPuntos(), listacompras, listapersonajes);
		} else {
			usuario = null;
			System.out.println("Usuario no encontrado");
		}

		return usuario;
	}

	// ------------- Procesos SubExternos --------------

	public List<Integer> rellenarlistaobjetos(List<CompraEntity> listaentidades) {
		List<Integer> listacompras = new ArrayList<>();
		for (int i = 0; i < listaentidades.size(); i++) {
			listacompras.add(listaentidades.get(i).getObjeto().getIdobjeto());
		}

		return listacompras;
	}
	
	public List<Integer> rellenarlistapersonajes(List<PersonajeEntity> listaentidades) {
		List<Integer> listapersonajes = new ArrayList<>();
		for (int i = 0; i < listaentidades.size(); i++) {
			listapersonajes.add(listaentidades.get(i).getIdpersonaje());
		}

		return listapersonajes;
	}
}
